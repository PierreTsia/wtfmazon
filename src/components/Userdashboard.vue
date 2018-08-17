<!-- xlsx.js (C) 2013-present  SheetJS -- http://sheetjs.com -->
<template>
<div @drop="_drop" @dragenter="_suppress" @dragover="_suppress">
	<div class="row"><div class="col-xs-12">
		<form class="form-inline">
			<div class="form-group">
				<label for="file">Spreadsheet</label>
				<input type="file" class="form-control" id="file" :accept="SheetJSFT" @change="_change" />
			</div>
		</form>
	</div></div>
	<div class="row"><div class="col-xs-12">
		<button  class="btn btn-success" @click="_exportTable">Export</button>
        	<button  class="btn btn-success" @click="buildRow(input)">Build Row</button>
	</div></div>
	<div class="row"><div class="col-xs-12">
		<div class="table-responsive">
		


<table id="sheetjs">
  <!--section calendrier-->
  

</table>
		</div>
	</div></div>
</div>
</template>

<script>
import XLSX from "xlsx";
const make_cols = refstr =>
  Array(XLSX.utils.decode_range(refstr).e.c + 1)
    .fill(0)
    .map((x, i) => ({ name: XLSX.utils.encode_col(i), key: i }));
const _SheetJSFT = [
  "xlsx",
  "xlsb",
  "xlsm",
  "xls",
  "xml",
  "csv",
  "txt",
  "ods",
  "fods",
  "uos",
  "sylk",
  "dif",
  "dbf",
  "prn",
  "qpw",
  "123",
  "wb*",
  "wq*",
  "html",
  "htm",
]
  .map(function(x) {
    return "." + x;
  })
  .join(",");
export default {
  data() {
    return {
      SheetJSFT: _SheetJSFT,
      json: `{
	"Main Infos": [{
		"documentName": "BAIL XGDHJG 54-OCR"
	}, {
		"documentType": "Bail commercial"
	}, {
		"folder": "Test export excel"
	}, {
		"uploadDate": "Tue Aug 14 2018 16:01:26 GMT+0000 (UTC)"
	}, {
		"fileFormat": "PDF"
	}],
	
	"calendrier": [{
		"Date de signature": "1953-09-30T00:00:00.000Z"
	}, {
		"Date test": "2004-03-01T00:00:00.000Z"
	}],
	"Bailleur": [{
		"Dénomination sociale": [{
			"AERTY 54": [{
				"Représentant légal": "Monsieur Marcel CFDGHJ"
			}, {
				"Adresse du siege social": "LUNEVILLE (54300) 5, rue du Coq Z.À.E. de la Faïencerie"
			}]
		}]
	}],
	"Preneur": [{
		"Dénomination sociale": [{
			"IMMOBEST": [{
				"Représentant légal": "Messieurs Jean—Claude FDHGSFGD et Gérard GHDJHG"
			}, {
				"Adresse du siege social": "LUNEVILLE (54300) 5, rue du Coq Z.A.E. de la Faïencerie"
			}]
		}]
	}],
	"Bien": [{
		"Adresse du bien": "LUNEVILLE (54300) 5 rue du Coq"
	}, {
		"Surface locative": "420m2"
	}, {
		"Destination des locaux & Activités autorisées": "Le preneur exerce une activité non commerciale, mais les parties décident expressément et d‘un commun accord de soumettre la présente location aux dispositions du décret du 30 Septembre 1953 codifié sous les articles L. 145—1 à L. 145—60 du code de commerce. En conséquence, le preneur bénéficiera de l‘ensemble du statut et de la propriété commerciale."
	}],
	"clauses": [{
		"Montant du loyer": "23280.0"
	}, {
		"Fréquence de paiement": "no value"
	}, {
		"Clause d'indexation du loyer": "Indice de référence. L‘indice de référence est celui du 3ème trimestre 2003, s‘élevant à 1203."
	}, {
		"Indice d'indexation": "no value"
	}, {
		"Trimestre de référence": "3ème trimestre"
	}, {
		"Pénalités de retard": "None"
	}, {
		"Dépôt de garantie": "no value"
	}],
	"Dates et durées": [{
		"Date de prise d'effet": "no value"
	}, {
		"Date d'expiration": "no value"
	}, {
		"Durée ferme": "no value"
	}, {
		"Date de première échéance de résiliation triennale": "no value"
	}, {
		"Date de seconde échéance de résiliation triennale": "no value"
	}],
	"Loyer": [{
		"Montant du loyer": "23280.0"
	}, {
		"Fréquence de paiement": "no value"
	}, {
		"Clause d'indexation du loyer": "Indice de référence. L‘indice de référence est celui du 3ème trimestre 2003, s‘élevant à 1203."
	}, {
		"Indice d'indexation": "no value"
	}, {
		"Trimestre de référence": "3ème trimestre"
	}, {
		"Pénalités de retard": "None"
	}, {
		"Dépôt de garantie": "no value"
	}],
	"Charges et Taxes": [{
		"Provision sur charges": "8000.0"
	}, {
		"Taxe foncière": "no value"
	}],
	"Autres clauses": [],
	"Autres informations": [],
	"Annexes": []
}`,
    };
  },
  computed: {
    input() {
      return JSON.parse(this.json);
    },
    calendrier() {
      return this.input["calendrier"];
    },
  },
  methods: {
    printTable(tableHTML) {
      const table = document.getElementById("sheetjs");
      table.innerHTML = tableHTML;
    },
    buildRow(obj) {
      let tableHTML = "";
      for (let key in obj) {
        let sectionName = key;
        console.log("sectionName: ", sectionName);
        let sections = obj[key];
        console.log("sections: =====>", sections);
        let sectionHTML = "";

        let rowStart = `<tr><th rowspan="${
          sections.length
        }">${sectionName}</th>`;
        if (!sections.length) {
          rowStart += `<td></td></tr>`;
        } else {
          //FIRT LOOP ON SECTIONS
          rowStart += this.recursiveMeth(sections);
        }

        tableHTML += rowStart;
      }
      console.log(tableHTML);
      this.printTable(tableHTML);
    },

    recursiveMeth(sections) {
      let html = "";
      sections.forEach((section, index) => {
        let subSectionName = Object.keys(section)[0];
        let subSectionContent = section[subSectionName];

        if (typeof subSectionContent === "string") {
          //INDEX 0
          if (index === 0) {
            html += `<th>${subSectionName}</th><td>${subSectionContent}</td></tr>`;
            //FIN DE LA 1ERE ROW
          } else {
            html += `<tr><th>${subSectionName}</th><td>${subSectionContent}</td></tr>`;
            //FIN DE LA 1ERE ROW
          }
        } else {
          let nextkey = Object.keys(subSectionContent[0])[0];
          console.log("nextkey: ", nextkey);
          let nextvalue = subSectionContent[0][nextkey];
          console.log("nextvalue: ", nextvalue);
          html += `<th>ICI${subSectionName}</th><td>${
            Object.keys(subSectionContent[0])[0]
          }</td>`;

          this.recursiveMeth(nextvalue);
        }
      });
      console.log("html:============> ", html);
      return html;
    },
    _suppress(evt) {
      evt.stopPropagation();
      evt.preventDefault();
    },
    _drop(evt) {
      evt.stopPropagation();
      evt.preventDefault();
      const files = evt.dataTransfer.files;
      if (files && files[0]) this._file(files[0]);
    },
    _change(evt) {
      const files = evt.target.files;
      if (files && files[0]) this._file(files[0]);
    },
    _export(evt) {
      /* convert state to workbook */
      const wsjson = XLSX.utils.json_to_sheet([JSON.parse(this.json)]);
      console.log("wsjson: ", wsjson);
      // const wsdata = XLSX.utils.aoa_to_sheet(wsjson);
      //console.log("wsdata: ", wsdata);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, wsjson, "SheetJS");
      /* generate file and send to client */
      XLSX.writeFile(wb, "sheetjs.xlsx");
    },
    _exportTable(evt) {
      /* convert state to workbook */
      var tbl = document.getElementById("sheetjs");
      var wb = XLSX.utils.table_to_book(tbl);
      // const wsdata = XLSX.utils.aoa_to_sheet(wsjson);
      //console.log("wsdata: ", wsdata);
      //const wb = XLSX.utils.book_new();
      // XLSX.utils.book_append_sheet(wb, "SheetJS");
      /* generate file and send to client */
      XLSX.writeFile(wb, "sheetjs.xlsx");
    },
    _file(file) {
      /* Boilerplate to set up FileReader */
      const reader = new FileReader();
      reader.onload = e => {
        /* Parse data */
        const bstr = e.target.result;
        const wb = XLSX.read(bstr, { type: "binary" });
        /* Get first worksheet */
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        /* Convert array of arrays */
        const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
        console.log("data: ", data);
        /* Update state */
        //this.data = data;
        this.cols = make_cols(ws["!ref"]);
      };
      reader.readAsBinaryString(file);
    },
  },
};
</script>
<style>
table,
th,
tr,
td {
  border: 1px solid black;
}
</style>
