# formatForms
Funções para formatação de campos de formulários

Como usar?


  ```shell
  npm install formatForms
  ```

  ```js
  const {
    formatMonetaryBR,
    formatDateBR,
    formatCNPJ,
    formatCPF,
    formatPhoneBR,
    formatCEP,
    formatRG,
    formatIE,
    formatIM,
    formatPIS,
    formatCNAE,
    formatCST,
    formatCFOP,
    formatNCM,
    formatNBS,
    formatNBM,
    formatMonetaryInternational,
    formatDateTimeBR,
    formatDateTimeUTC,
    formatDateTimeInternational,
    formatDateTimeISO,
    formatDateTimeUTCISO,
    formatDateToday,
  } = require("formatForms");
  
  
  -formatMonetaryBR: essa função irá formatar para BRL Real com o simbolo R$
  -formatDateBR: essa função irá formatar para BRL date
  -formatCNPJ: essa função irá formatar CNPJ
  -formatCPF: essa função irá formatar CPF
  -formatPhoneBR:  essa função irá formatar para BRL telefone
  -formatCEP: essa função irá formatar  CEP
  -formatRG: essa função irá formatar RG
  -formatIE: essa função irá formatar IE
  -formatIM: essa função irá formatar IM
  -formatPIS: essa função irá formatar PIS
  -formatCNAE: essa função irá formatar CNAE
  -formatCST: essa função irá formatar CST
  -formatCFOP: essa função irá formatar CFOP
  -formatNCM: essa função irá formatar NCM
  -formatNBS: essa função irá formatar NBS
  -formatNBM: essa função irá formatar NBM
  -formatMonetaryInternational: essa função irá formatar para International Real com o simbolo $
  -formatDateTimeBR: essa função irá formatar para BRL DateTime
  -formatDateTimeUTC: essa função irá formatar para UTC DateTime
  -formatDateTimeInternational: essa função irá formatar para International DateTime
  -formatDateTimeISO: essa função irá formatar para ISO DateTime
  -formatDateTimeUTCISO: essa função irá formatar para UTC ISO DateTime
  -formatDateToday: essa função irá formatar para Date Today
  ```

  ```js
  formatMonetaryBR(1000.00); // R$ 1.000,00
  formatDateBR("2020-01-01"); // 01/01/2020
  formatCNPJ("12345678901234"); // 12.345.678/9012-34
  formatCPF("12345678901"); // 123.456.789-01
  formatPhoneBR("11987654321"); // (11) 98765-4321
  formatCEP("12345678"); // 12345-678
  formatRG("123456789"); // 12.345.678-9
  formatIE("123456789"); // 123.456.789
  formatIM("123456789"); // 123.456.789
  formatPIS("12345678901"); // 123.45678.90-1
  formatCNAE("1234567"); // 12.34-5/67
  formatCST("123456789"); // 123.456.789
  formatCFOP("123456"); // 1234.56
  formatNCM("12345678"); //
  formatNBS("123456789"); // 1234.56.789
  formatNBM("123456789"); // 1234.56.789
  formatMonetaryInternational(1000.00); // $ 1,000.00
  formatDateTimeBR("2020-01-01T00:00:00.000Z"); // 01/01/2020 00:00:00
  formatDateTimeUTC("2020-01-01T00:00:00.000Z"); // 2020-01-01T00:00:00.000Z
  formatDateTimeInternational("2020-01-01T00:00:00.000Z"); // 2020-01-01 00:00:00
  formatDateTimeISO("2020-01-01T00:00:00.000Z"); // 2020-01-01T00:00:00.000Z
  formatDateTimeUTCISO("2020-01-01T00:00:00.000Z"); // 2020-01-01T00:00:00.000Z
  formatDateToday(); // 2020-01-01T00:00:00.000Z
  ```
 
## License
[MIT](https://choosealicense.com/licenses/mit/)

