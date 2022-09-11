function formatMonetaryBR(valor) {
  let formatter = valor;
  if(!valor) {
    return "valor inválido";
  }
  formatter = parseFloat(formatter.replace(/[\D]+/g, ''));
  formatter = formatter + '';
  formatter = formatter.replace(/([0-9]{2})$/g, ",$1");
  if (formatter.length > 6) {
    formatter = formatter.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
  }
  if (formatter.length > 9) {
    formatter = formatter.replace(/([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g, ".$1.$2,$3");
  }
  if (formatter.length > 12) {
    formatter = formatter.replace(/([0-9]{3}).([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g, ".$1.$2.$3,$4");
  }
  if (formatter.length > 15) {
    formatter = formatter.replace(/([0-9]{3}).([0-9]{3}).([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g, ".$1.$2.$3.$4,$5");
  }

  return `R$ ${formatter}`;
}

function formatDateBR(date) {
  let formatter = new Date(date);
  return formatter.toLocaleDateString('pt-BR');
}

function formatDateTimeBR(date) {
  let formatter = new Date(date);
  return formatter.toLocaleString('pt-BR');
}

function formatDateTimeInternational(date) {
  let formatter = new Date(date);
  return formatter.toLocaleString('en-US');
}

function formatDateTimeISO(date) {
  let formatter = new Date(date);
  return formatter.toISOString();
}

function formatDateTimeUTC(date) {
  let formatter = new Date(date);
  return formatter.toUTCString();
}

function formatDateTimeUTCISO(date) {
  let formatter = new Date(date);
  return formatter.toISOString().replace('Z', '');
}

function formatDateToday() {
  let formatter = new Date();
  return formatter.toLocaleDateString();
}

function formatCPF(cpf) {
  let formatter = cpf;
  if(!cpf) {
    return "valor inválido";
  }
  formatter = formatter.replace(/[\D]+/g, '');
  formatter = formatter.replace(/([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})/g, "$1.$2.$3-$4");
  return formatter;
}

function formatCNPJ(cnpj) {
  let formatter = cnpj;
  if(!cnpj) {
    return "valor inválido";
  }
  formatter = formatter.replace(/[\D]+/g, '');
  formatter = formatter.replace(/([0-9]{2})([0-9]{3})([0-9]{3})([0-9]{4})([0-9]{2})/g, "$1.$2.$3/$4-$5");
  return formatter;
}

function formatPhoneBR(phone) {
  let formatter = phone;
  if(!phone) {
    return "valor inválido";
  }
  formatter = formatter.replace(/[\D]+/g, '');
  formatter = formatter.replace(/([0-9]{2})([0-9]{5})([0-9]{4})/g, "($1) $2-$3");
  return formatter;
}

function formatCEP(cep) {
  let formatter = cep;
  if(!cep) {
    return "valor inválido";
  }
  formatter = formatter.replace(/[\D]+/g, '');
  formatter = formatter.replace(/([0-9]{5})([0-9]{3})/g, "$1-$2");
  return formatter;
}

function formatRG(rg) {
  let formatter = rg;
  if(!rg) {
    return "valor inválido";
  }
  formatter = formatter.replace(/[\D]+/g, '');
  formatter = formatter.replace(/([0-9]{2})([0-9]{3})([0-9]{3})([0-9]{1})/g, "$1.$2.$3-$4");
  return formatter;
}

function formatIE(ie) {
  let formatter = ie;
  if(!ie) {
    return "valor inválido";
  }
  formatter = formatter.replace(/[\D]+/g, '');
  formatter = formatter.replace(/([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{1})/g, "$1.$2.$3-$4");
  return formatter;
}

function formatIM(im) {
  let formatter = im;
  if(!im) {
    return "valor inválido";
  }
  formatter = formatter.replace(/[\D]+/g, '');
  formatter = formatter.replace(/([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{1})/g, "$1.$2.$3-$4");
  return formatter;
}

function formatPIS(pis) {
  let formatter = pis;
  if(!pis) {
    return "valor inválido";
  }
  formatter = formatter.replace(/[\D]+/g, '');
  formatter = formatter.replace(/([0-9]{3})([0-9]{5})([0-9]{2})([0-9]{1})/g, "$1.$2.$3-$4");
  return formatter;
}

function formatCNAE(cnae) {
  let formatter = cnae;
  if(!cnae) {
    return "valor inválido";
  }
  formatter = formatter.replace(/[\D]+/g, '');
  formatter = formatter.replace(/([0-9]{4})([0-9]{1})([0-9]{2})/g, "$1-$2/$3");
  return formatter;
}

function formatCST(cst) {
  let formatter = cst;
  if(!cst) {
    return "valor inválido";
  }
  formatter = formatter.replace(/[\D]+/g, '');
  formatter = formatter.replace(/([0-9]{3})([0-9]{1})/g, "$1-$2");
  return formatter;
}

function formatCFOP(cfop) {
  let formatter = cfop;
  if(!cfop) {
    return "valor inválido";
  }
  formatter = formatter.replace(/[\D]+/g, '');
  formatter = formatter.replace(/([0-9]{4})([0-9]{1})/g, "$1-$2");
  return formatter;
}

function formatNCM(ncm) {
  let formatter = ncm;
  if(!ncm) {
    return "valor inválido";
  }
  formatter = formatter.replace(/[\D]+/g, '');
  formatter = formatter.replace(/([0-9]{8})([0-9]{2})/g, "$1.$2");
  return formatter;
}

function formatNBS(nbs) {
  let formatter = nbs;
  if(!nbs) {
    return "valor inválido";
  }
  formatter = formatter.replace(/[\D]+/g, '');
  formatter = formatter.replace(/([0-9]{4})([0-9]{2})([0-9]{2})/g, "$1.$2.$3");
  return formatter;
}

function formatNBM(nbm) {
  let formatter = nbm;
  if(!nbm) {
    return "valor inválido";
  }
  formatter = formatter.replace(/[\D]+/g, '');
  formatter = formatter.replace(/([0-9]{8})([0-9]{2})/g, "$1.$2");
  return formatter;
}

const formatMonetaryInternational = (value) => {
  if(!value) {
    return "valor inválido";
  }
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

module.exports = {
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
}

