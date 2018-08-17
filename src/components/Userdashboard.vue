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
          <button  class="btn btn-success" @click="exportTable('testtable')">EXPORT</button>
	</div></div>
	<div class="row"><div class="col-xs-12">
		<div class="table-responsive">
		


<table id="sheetjs">
  <!--section calendrier-->
  

</table>


    <table id="testtable" >
      <tr>
        <th rowspan="5">Main Infos</th>

        <th>documentName</th>

        <td>BAIL XGDHJG 54-OCR</td>
      </tr>

      <tr>
        <th>documentType</th>

        <td>Bail commercial</td>
      </tr>

      <tr>
        <th>folder</th>

        <td>Test export excel</td>
      </tr>

      <tr>
        <th>uploadDate</th>

        <td>Tue Aug 14 2018 16:01:26 GMT+0000 (UTC)</td>
      </tr>

      <tr>
        <th>fileFormat</th>

        <td>PDF</td>
      </tr>

      <tr>
        <th rowspan="2">calendrier</th>

        <th>Date de signature</th>

        <td>1953-09-30T00:00:00.000Z</td>
      </tr>

      <tr>
        <th>Date test</th>

        <td>2004-03-01T00:00:00.000Z</td>
      </tr>

      <tr>

        <th rowspan="2">Bailleur</th>
        <th rowspan="2">ICIDénomination sociale</th>
        <td rowspan="2">AERTY 54</td>
        <th>Représentant légal</th>
        <td>Monsieur Marcel CFDGHJ</td>
      </tr>
      <tr>
        <th>Adresse du siege social</th>
        <td>LUNEVILLE (54300) 5, rue du Coq Z.À.E. de la Faïencerie</td>
      </tr>


      <tr>
        <tr>
          <th rowspan="2">Preneur</th>

          <th rowspan="2">ICID&eacute;nomination sociale</th>

          <td rowspan="2">IMMOBEST</td>

          <th>Repr&eacute;sentant l&eacute;gal</th>

          <td>Messieurs Jean&mdash;Claude FDHGSFGD et G&eacute;rard GHDJHG</td>
        </tr>

        <tr>
          <th>Adresse du siege social</th>

          <td>LUNEVILLE (54300) 5, rue du Coq Z.A.E. de la Fa&iuml;encerie</td>
        </tr>

        <tr>
          <th rowspan="3">Bien</th>

          <th>Adresse du bien</th>

          <td>LUNEVILLE (54300) 5 rue du Coq</td>
        </tr>

        <tr>
          <th>Surface locative</th>

          <td>420m2</td>
        </tr>

        <tr>
          <th>Destination des locaux &amp; Activit&eacute;s autoris&eacute;es</th>

          <td>Le preneur exerce une activit&eacute; non commerciale, mais les parties d&eacute;cident express&eacute;ment et d&lsquo;un commun accord de soumettre la pr&eacute;sente location aux dispositions du d&eacute;cret du 30 Septembre 1953 codifi&eacute;
            sous les articles L. 145&mdash;1 &agrave; L. 145&mdash;60 du code de commerce. En cons&eacute;quence, le preneur b&eacute;n&eacute;ficiera de l&lsquo;ensemble du statut et de la propri&eacute;t&eacute; commerciale.</td>
        </tr>

        <tr>
          <th rowspan="7">clauses</th>

          <th>Montant du loyer</th>

          <td>23280.0</td>
        </tr>

        <tr>
          <th>Fr&eacute;quence de paiement</th>

          <td>no value</td>
        </tr>

        <tr>
          <th>Clause d'indexation du loyer</th>

          <td>Indice de r&eacute;f&eacute;rence. L&lsquo;indice de r&eacute;f&eacute;rence est celui du 3&egrave;me trimestre 2003, s&lsquo;&eacute;levant &agrave; 1203.</td>
        </tr>

        <tr>
          <th>Indice d'indexation</th>

          <td>no value</td>
        </tr>

        <tr>
          <th>Trimestre de r&eacute;f&eacute;rence</th>

          <td>3&egrave;me trimestre</td>
        </tr>

        <tr>
          <th>P&eacute;nalit&eacute;s de retard</th>

          <td>None</td>
        </tr>

        <tr>
          <th>D&eacute;p&ocirc;t de garantie</th>

          <td>no value</td>
        </tr>

        <tr>
          <th rowspan="5">Dates et dur&eacute;es</th>

          <th>Date de prise d'effet</th>

          <td>no value</td>
        </tr>

        <tr>
          <th>Date d'expiration</th>

          <td>no value</td>
        </tr>

        <tr>
          <th>Dur&eacute;e ferme</th>

          <td>no value</td>
        </tr>

        <tr>
          <th>Date de premi&egrave;re &eacute;ch&eacute;ance de r&eacute;siliation triennale
          </th>

          <td>no value</td>
        </tr>

        <tr>
          <th>Date de seconde &eacute;ch&eacute;ance de r&eacute;siliation triennale</th>

          <td>no value</td>
        </tr>

        <tr>
          <th rowspan="7">Loyer</th>

          <th>Montant du loyer</th>

          <td>23280.0</td>
        </tr>

        <tr>
          <th>Fr&eacute;quence de paiement</th>

          <td>no value</td>
        </tr>

        <tr>
          <th>Clause d'indexation du loyer</th>

          <td>Indice de r&eacute;f&eacute;rence. L&lsquo;indice de r&eacute;f&eacute;rence est celui du 3&egrave;me trimestre 2003, s&lsquo;&eacute;levant &agrave; 1203.</td>
        </tr>

        <tr>
          <th>Indice d'indexation</th>

          <td>no value</td>
        </tr>

        <tr>
          <th>Trimestre de r&eacute;f&eacute;rence</th>

          <td>3&egrave;me trimestre</td>
        </tr>

        <tr>
          <th>P&eacute;nalit&eacute;s de retard</th>

          <td>None</td>
        </tr>

        <tr>
          <th>D&eacute;p&ocirc;t de garantie</th>

          <td>no value</td>
        </tr>

        <tr>
          <th rowspan="2">Charges et Taxes</th>

          <th>Provision sur charges</th>

          <td>8000.0</td>
        </tr>

        <tr>
          <th>Taxe fonci&egrave;re</th>

          <td>no value</td>
        </tr>

        <tr>
          <th rowspan="0">Autres clauses</th>

          <td></td>
        </tr>

        <tr>
          <th rowspan="0">Autres informations</th>

          <td></td>
        </tr>

        <tr>
          <th rowspan="0">Annexes</th>

          <td></td>
        </tr>
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
    exportTable(tableId){
           /* convert state to workbook */
      var tbl = document.getElementById(tableId);
      var wb = XLSX.utils.table_to_book(tbl);
      // const wsdata = XLSX.utils.aoa_to_sheet(wsjson);
      //console.log("wsdata: ", wsdata);
      //const wb = XLSX.utils.book_new();
      // XLSX.utils.book_append_sheet(wb, "SheetJS");
      /* generate file and send to client */
      XLSX.writeFile(wb, "sheetjs.xlsx");

    },
    printTable(tableHTML) {
      const table = document.getElementById("sheetjs");
      table.innerHTML = tableHTML;
    },
    buildRow(obj) {
      let tableHTML = "";
      for (let key in obj) {
        let sectionName = key;
        //console.log("sectionName: ", sectionName);
        let sections = obj[key];
        console.log("sections: =====>", sections);
        let sectionHTML = "";
        let rowSpan = 0;

        let rowStart = `<tr><th rowspan="${
          sections.length
        }">${sectionName}</th>`;
        if (!sections.length) {
          rowStart += `<td></td></tr>`;
        } else {
          //FIRT LOOP ON SECTIONS
          rowStart = this.recursiveMeth(sections, rowStart, rowSpan);
        }

        tableHTML += rowStart;
      }
      console.log(tableHTML);
      this.printTable(tableHTML);
    },

    recursiveMeth(sections, rowStart, rowSpan) {
      let html ='';
      html  += rowStart;
      console.log('html start ===>: ', html);
      sections.forEach((section, index) => {
        let subSectionName = Object.keys(section)[0];
        let subSectionContent = section[subSectionName];
        console.log('subSectionContent: ', subSectionContent);

        if (typeof subSectionContent === "string") {
          //INDEX 0
          if (index === 0) {
            rowSpan ++
            html += `<th>${subSectionName}</th><td>${subSectionContent}</td></tr>`;
            //FIN DE LA 1ERE ROW
          } else {
            rowSpan ++
            html += `<tr><th>${subSectionName}</th><td>${subSectionContent}</td></tr>`;
            //FIN DE LA 1ERE ROW
          }
          console.log('html fin du 1er if ', html);
          return html
          
        } else {
          let nextkey = Object.keys(subSectionContent[0])[0];
          console.log("nextkey: ", nextkey);
          let nextvalue = subSectionContent[0][nextkey];
          console.log("nextvalue: ", nextvalue);
          html += `<th rowspan="${nextvalue.length}">ICI${subSectionName}</th><td rowspan="${nextvalue.length}">${
            Object.keys(subSectionContent[0])[0]
          }</td>`;

          html = this.recursiveMeth(nextvalue, html,);
        }
      });
      console.log("rowSpan:============> ", rowSpan);
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
