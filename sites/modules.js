// --- JS
function strToDate(str = '') {
  const split = str.split('/');
  const d = new Date(split[2], split[1] - 1, split[0]);
  return d;
}

function data() {
  function load(url = "", templateId = "", containerId = "") {
    if (url == "") return alert("No url specified!");

    $.ajax({
      method: "get",
      url: url,
    }).done((res) => {
      const list = cnv_tsv(res);
      if (templateId != "" && containerId != "") {
        renderFeed(containerId, templateId, list);
      }

      $(document).trigger("dataLoad", { url: url, data: list });
    });

    function cnv_tsv(str = "") {
      let arr = [];

      // split text
      str.split("\r\n").forEach((row) => {
        let tmp = [];
        const cols = row.split("\t");
        cols.forEach((col) => tmp.push(col));
        arr.push(tmp);
      });

      // to objs
      let list = [];
      const colNames = arr[0];
      arr
        .filter((x, i) => i > 0)
        .forEach((row) => {
          let obj = {};

          // to obj
          row.forEach((col, i) => {
            const colName = colNames[i];
            obj[colName] = col;
          });

          list.push(obj);
        });

      return list;
    }
  }

  function getNumber(str) {
    const clear = str.replace(/^\D+/g, "");
    if (isNaN(clear)) return str;
    return clear;
  }

  function formatNumber (str, isCurrency = false, locale = "id-ID", currency = "IDR") {
    const clear = getNumber(str);
    if (clear == "" || isNaN(clear)) return str;

    return Number(clear).toLocaleString(locale, {
      useGrouping: true,
      currency: currency,
      style: isCurrency ? "currency" : undefined,
      maximumFractionDigits: 0,
    });
  }

  function renderBraces (str = "", obj = {}) {
    const reg = /{{[\s|\w|\s]+}}/gm;

    str.match(reg).forEach((brace) => {
      const key = brace.replace(/({?\W)|(\W?})/g, "").replace(/\s+/g, "");
      const val = obj[key] == undefined ? "" : obj[key];
      str = str.replace(brace, val);
    });

    return str;
  }

  function renderFeed (containerId = "", templateId = "", list = [], maxFeed = 20) {
    const parent = $(`#${containerId}`);
    const template = $(`#${templateId}`);

    function render(item) {
      const str = template.clone().html();
      const fix = renderBraces(str, item);
      const el = $(fix);
      const currency = el.find(".currency");

      if (currency.length > 0) {
        currency.each((i, x) => {
          const txt = $(x).html();
          const val = formatNumber(txt, true, "id-ID", "IDR");
          $(x).html(val);
        });
      }

      el.appendTo(parent);
    }

    function feeding() {
      const items = parent.children();
      const lastItem = $(items[items.length - 1]);

      const lastHeight = lastItem.length > 0 ? lastItem.offset().top : 0;
      const endScreen = scrollY + screen.height;
      if (lastHeight > endScreen) return;

      // render 20 feed
      const nextIndex = items.index(lastItem) + 1;
      if (nextIndex > list.length - 1) return;

      for (let i = nextIndex; i < nextIndex + maxFeed; i++) {
        if (i < list.length) {
          const item = list[i];
          render(item);
        }
      }

      // console.log('rendered:', nextIndex, ' to:', nextIndex + maxFeed);
    }

    function register() {
      parent.children().remove();

      if (maxFeed > 0) {
        $(document).off("scroll").on("scroll", feeding).trigger("scroll");
      } else {
        list.forEach((row) => render(row));
      }
    }

    register();
  }

  return {
    load, renderFeed
  }
}

function gForm(form = $()) {
  const gId = form.attr("itemid");
  if (gId == undefined) {
    return alert("Failed! Form ID had not been defined in [itemid]!");
  }

  // auto event
  form.on("submit", (e) => {
    e.preventDefault();
    send();
  });

  function generateUrl() {
    let str = "";

    form.find("[name]").each((i, el) => {
      const c = $(el);
      const type = c.attr("type");
      if (["checkbox", "radio"].includes(type)) {
        if (c.is(":checked")) {
          str += c.attr("name") + "=" + c.val() + "&";
        }
      } else if (c.val() != "") {
        str += c.attr("name") + "=" + c.val() + "&";
      }
    });

    // remove last &
    str = str.substring(0, str.length - 1);
    console.log(str);

    return str;
  }

  function send() {
    const url =
      `https://docs.google.com/forms/d/e/${gId}/formResponse?` +
      generateUrl() +
      "&submit=Submit";

    $.ajax({
      method: "get",
      url: url,
    });

    form[0].reset();
  }
}

// --- HTML
const pages = {
  barang: function barang(
    dataUrl = "",
    templateId = "",
    containerId = "",
    searchId = ""
  ) {
    $(document).on("dataLoad", (e, res) => {
      // filter changed
      $(`#${searchId}`).on("input", (e) => {
        const find = e.target.value.toLowerCase();
        const isNum = !isNaN(Number(find));

        data().renderFeed(
          containerId,
          templateId,
          res.data.filter((x) => {
            const kat =
              isNum || (!isNum && x.kategori.toLowerCase().includes(find));
            const nama =
              isNum || (!isNum && x.nama.toLowerCase().includes(find));
            const pack = !isNum || (isNum && x.pack_code.includes(find));
            const pcs = !isNum || (isNum && x.pcs_code.includes(find));
            return (kat || nama) && pack && pcs;
          })
        );
      });
    });

    data().load(dataUrl, templateId, containerId);
  },

  kasInput: function kasInput(dataUrl = "", dataListId = "", formId = "") {
    $(document).on("dataLoad", (e, res) => {
      // fill datalist
      const akun = res.data;
      const datal = $(`#${dataListId}`);
      akun.forEach((x) => {
        const opt = $(`<option value='${x.akun}'>`);
        opt.html(x);
        opt.appendTo(datal);
      });

      // register gform
      gForm($(`#${formId}`));
    });

    data.load(dataUrl);
  },

  kasTable: function kasTable(
    dataUrlAkun = "",
    dataUrlData = "",
    containerId = "rows",
    templateAkunId = "tmp-akun",
    useAkunCheckId = "use-akun",
    akunSectionItemid = "akun-type",
  ) {
    const ctl = {
      rows: $(`#${containerId}`),
      template: $(`#${templateAkunId}`),
    };

    $(`#${useAkunCheckId}`).on("input", (e) => {
        const checked = e.target.checked;
        const items = $(`[itemid=${akunSectionItemid}]`);
        const parent = $(e.target).parent();
        parent.toggleClass("fw-bold", checked);

        if (checked)
          items.show("slow", () => {
            items.addClass("d-flex");
          });
        else
          items.hide("slow", () => {
            items.removeClass("d-flex");
          });
      }).trigger("input");
  },
};