var DataTypes = require("sequelize").DataTypes;
var _00autoacties = require("./00autoacties");
var _00autoactiesplanning = require("./00autoactiesplanning");
var _00autoupdate = require("./00autoupdate");
var _00import_temp = require("./00import_temp");
var _aansprekingen = require("./aansprekingen");
var _abo = require("./abo");
var _abotype = require("./abotype");
var _actieregistratie = require("./actieregistratie");
var _acties = require("./acties");
var _advbriefkost = require("./advbriefkost");
var _advocaatkost = require("./advocaatkost");
var _advocaten = require("./advocaten");
var _advoringbetalingen = require("./advoringbetalingen");
var _agenda = require("./agenda");
var _agendatype = require("./agendatype");
var _basisoffertehfst = require("./basisoffertehfst");
var _basisofferteinhoud = require("./basisofferteinhoud");
var _basisoffertesubhfst = require("./basisoffertesubhfst");
var _basisoffertetotaal = require("./basisoffertetotaal");
var _batchevaluatie = require("./batchevaluatie");
var _batchtendens = require("./batchtendens");
var _bestemmelingen = require("./bestemmelingen");
var _betalingen = require("./betalingen");
var _betalingen2 = require("./betalingen2");
var _betalingenoud = require("./betalingenoud");
var _betalingenteveel = require("./betalingenteveel");
var _betalingenteveelxml = require("./betalingenteveelxml");
var _bewindvoerders = require("./bewindvoerders");
var _boekhouddocumenten = require("./boekhouddocumenten");
var _brievenperdag = require("./brievenperdag");
var _btw = require("./btw");
var _budgetcat = require("./budgetcat");
var _budgetdetails = require("./budgetdetails");
var _budgetestimatie = require("./budgetestimatie");
var _budgethcat = require("./budgethcat");
var _budgetsubcat = require("./budgetsubcat");
var _closereasons = require("./closereasons");
var _closereasonsjuridisch = require("./closereasonsjuridisch");
var _contactgegevens = require("./contactgegevens");
var _countrycodes = require("./countrycodes");
var _countrycodes_2019 = require("./countrycodes_2019");
var _credipay_paymentplan = require("./credipay_paymentplan");
var _credipay_transaction_payments = require("./credipay_transaction_payments");
var _debiteurcategorie = require("./debiteurcategorie");
var _debiteurs = require("./debiteurs");
var _debiteurs_copy = require("./debiteurs_copy");
var _debiteurs_zot = require("./debiteurs_zot");
var _deurwaarder = require("./deurwaarder");
var _deurwaarderbetalingen = require("./deurwaarderbetalingen");
var _deurwaarderbrievenbulk = require("./deurwaarderbrievenbulk");
var _deurwaarderkost = require("./deurwaarderkost");
var _dossier_token = require("./dossier_token");
var _dossiermanueleitems = require("./dossiermanueleitems");
var _dossiers = require("./dossiers");
var _dossiers_zot = require("./dossiers_zot");
var _dossiersjuridisch = require("./dossiersjuridisch");
var _emaillijst = require("./emaillijst");
var _emaillijstdomicilieringen = require("./emaillijstdomicilieringen");
var _emaillijstklanten = require("./emaillijstklanten");
var _emaillijstprospecten = require("./emaillijstprospecten");
var _emaillijstspam = require("./emaillijstspam");
var _facturen = require("./facturen");
var _facturenlijnen = require("./facturenlijnen");
var _facturentest = require("./facturentest");
var _factuurvoorwaarden = require("./factuurvoorwaarden");
var _faxmanueel = require("./faxmanueel");
var _fiscaleattesten = require("./fiscaleattesten");
var _fiscaleattestenbulk = require("./fiscaleattestenbulk");
var _gemeenten = require("./gemeenten");
var _gsmnrschecken = require("./gsmnrschecken");
var _idafrekeningintern = require("./idafrekeningintern");
var _idbetalingen = require("./idbetalingen");
var _iddoorstortingen = require("./iddoorstortingen");
var _iddoorstortingenxml = require("./iddoorstortingenxml");
var _idfacturen = require("./idfacturen");
var _idfacturencsv = require("./idfacturencsv");
var _idonkosten = require("./idonkosten");
var _idonkostencsv = require("./idonkostencsv");
var _idonkostenold = require("./idonkostenold");
var _idonkostenpers = require("./idonkostenpers");
var _importbestanden = require("./importbestanden");
var _importgemeentes = require("./importgemeentes");
var _importmch = require("./importmch");
var _importmethodes = require("./importmethodes");
var _importschema = require("./importschema");
var _importtabel = require("./importtabel");
var _importtijdelijk = require("./importtijdelijk");
var _importtijdelijk2 = require("./importtijdelijk2");
var _importtijdelijk3 = require("./importtijdelijk3");
var _importtijdelijk4 = require("./importtijdelijk4");
var _importtijdelijk5 = require("./importtijdelijk5");
var _importverisure = require("./importverisure");
var _internemailing = require("./internemailing");
var _janee = require("./janee");
var _janeeeender = require("./janeeeender");
var _klanten = require("./klanten");
var _klanten_cost = require("./klanten_cost");
var _klanten_ik_s_cost = require("./klanten_ik_s_cost");
var _klantenbijlage = require("./klantenbijlage");
var _klantenemail = require("./klantenemail");
var _klantenemaillogboek = require("./klantenemaillogboek");
var _klantenhoofdindeling = require("./klantenhoofdindeling");
var _klantennotas = require("./klantennotas");
var _klantenprepros = require("./klantenprepros");
var _klantenpreproscat = require("./klantenpreproscat");
var _klantenpreproslog = require("./klantenpreproslog");
var _klantensector = require("./klantensector");
var _klantmeldingen = require("./klantmeldingen");
var _kosten = require("./kosten");
var _leveranciercontracten = require("./leveranciercontracten");
var _logboek = require("./logboek");
var _logboek_archive = require("./logboek_archive");
var _logboekjuridisch = require("./logboekjuridisch");
var _materiaalvoorraad = require("./materiaalvoorraad");
var _notarissen = require("./notarissen");
var _nuctest = require("./nuctest");
var _offertes = require("./offertes");
var _paymentlist = require("./paymentlist");
var _planninglijst = require("./planninglijst");
var _popfax = require("./popfax");
var _populatieaanvraag = require("./populatieaanvraag");
var _populatiekost = require("./populatiekost");
var _populatieupdates = require("./populatieupdates");
var _postcodes = require("./postcodes");
var _prepos = require("./prepos");
var _preprospecten = require("./preprospecten");
var _preprospectie = require("./preprospectie");
var _prospecten = require("./prospecten");
var _prospectvoorstellen = require("./prospectvoorstellen");
var _provincies = require("./provincies");
var _pwoorden = require("./pwoorden");
var _rapporten = require("./rapporten");
var _rapportplanning = require("./rapportplanning");
var _rapporttemplates = require("./rapporttemplates");
var _rechtsplegingvergoeding = require("./rechtsplegingvergoeding");
var _rekeningen = require("./rekeningen");
var _rekeningstand = require("./rekeningstand");
var _scarlet = require("./scarlet");
var _smsfeedback = require("./smsfeedback");
var _smsinkomend = require("./smsinkomend");
var _smsmanueel = require("./smsmanueel");
var _smsstatuscodes = require("./smsstatuscodes");
var _smsverzending = require("./smsverzending");
var _sollicitanten = require("./sollicitanten");
var _spryng_incomingsms = require("./spryng_incomingsms");
var _standaardrapporten = require("./standaardrapporten");
var _statusjuridisch = require("./statusjuridisch");
var _stortingen = require("./stortingen");
var _talenincasso = require("./talenincasso");
var _telefoonlijst = require("./telefoonlijst");
var _templatekostprijs = require("./templatekostprijs");
var _templatesklanten = require("./templatesklanten");
var _templatestreinen = require("./templatestreinen");
var _templatetypen = require("./templatetypen");
var _tijdelijkesqls = require("./tijdelijkesqls");
var _tipstricks = require("./tipstricks");
var _treinen = require("./treinen");
var _treinentechnisch = require("./treinentechnisch");
var _verbodenemails = require("./verbodenemails");
var _verbodenfaxen = require("./verbodenfaxen");
var _vergoedingadvdw = require("./vergoedingadvdw");
var _volgendedagen = require("./volgendedagen");
var _wettelijkeschadeintrest = require("./wettelijkeschadeintrest");
var _zot_checkdoorstortmededeling = require("./zot_checkdoorstortmededeling");
var _zot_emaillijst = require("./zot_emaillijst");
var _zot_emaillijst_before449 = require("./zot_emaillijst_before449");
var _zot_facturen = require("./zot_facturen");

function initModels(sequelize) {
  var autoacties = _00autoacties(sequelize, DataTypes);
  var autoactiesplanning = _00autoactiesplanning(sequelize, DataTypes);
  var autoupdate = _00autoupdate(sequelize, DataTypes);
  var import_temp = _00import_temp(sequelize, DataTypes);
  var aansprekingen = _aansprekingen(sequelize, DataTypes);
  var abo = _abo(sequelize, DataTypes);
  var abotype = _abotype(sequelize, DataTypes);
  var actieregistratie = _actieregistratie(sequelize, DataTypes);
  var acties = _acties(sequelize, DataTypes);
  var advbriefkost = _advbriefkost(sequelize, DataTypes);
  var advocaatkost = _advocaatkost(sequelize, DataTypes);
  var advocaten = _advocaten(sequelize, DataTypes);
  var advoringbetalingen = _advoringbetalingen(sequelize, DataTypes);
  var agenda = _agenda(sequelize, DataTypes);
  var agendatype = _agendatype(sequelize, DataTypes);
  var basisoffertehfst = _basisoffertehfst(sequelize, DataTypes);
  var basisofferteinhoud = _basisofferteinhoud(sequelize, DataTypes);
  var basisoffertesubhfst = _basisoffertesubhfst(sequelize, DataTypes);
  var basisoffertetotaal = _basisoffertetotaal(sequelize, DataTypes);
  var batchevaluatie = _batchevaluatie(sequelize, DataTypes);
  var batchtendens = _batchtendens(sequelize, DataTypes);
  var bestemmelingen = _bestemmelingen(sequelize, DataTypes);
  var betalingen = _betalingen(sequelize, DataTypes);
  var betalingen2 = _betalingen2(sequelize, DataTypes);
  var betalingenoud = _betalingenoud(sequelize, DataTypes);
  var betalingenteveel = _betalingenteveel(sequelize, DataTypes);
  var betalingenteveelxml = _betalingenteveelxml(sequelize, DataTypes);
  var bewindvoerders = _bewindvoerders(sequelize, DataTypes);
  var boekhouddocumenten = _boekhouddocumenten(sequelize, DataTypes);
  var brievenperdag = _brievenperdag(sequelize, DataTypes);
  var btw = _btw(sequelize, DataTypes);
  var budgetcat = _budgetcat(sequelize, DataTypes);
  var budgetdetails = _budgetdetails(sequelize, DataTypes);
  var budgetestimatie = _budgetestimatie(sequelize, DataTypes);
  var budgethcat = _budgethcat(sequelize, DataTypes);
  var budgetsubcat = _budgetsubcat(sequelize, DataTypes);
  var closereasons = _closereasons(sequelize, DataTypes);
  var closereasonsjuridisch = _closereasonsjuridisch(sequelize, DataTypes);
  var contactgegevens = _contactgegevens(sequelize, DataTypes);
  var countrycodes = _countrycodes(sequelize, DataTypes);
  var countrycodes_2019 = _countrycodes_2019(sequelize, DataTypes);
  var credipay_paymentplan = _credipay_paymentplan(sequelize, DataTypes);
  var credipay_transaction_payments = _credipay_transaction_payments(sequelize, DataTypes);
  var debiteurcategorie = _debiteurcategorie(sequelize, DataTypes);
  var debiteurs = _debiteurs(sequelize, DataTypes);
  var debiteurs_copy = _debiteurs_copy(sequelize, DataTypes);
  var debiteurs_zot = _debiteurs_zot(sequelize, DataTypes);
  var deurwaarder = _deurwaarder(sequelize, DataTypes);
  var deurwaarderbetalingen = _deurwaarderbetalingen(sequelize, DataTypes);
  var deurwaarderbrievenbulk = _deurwaarderbrievenbulk(sequelize, DataTypes);
  var deurwaarderkost = _deurwaarderkost(sequelize, DataTypes);
  var dossier_token = _dossier_token(sequelize, DataTypes);
  var dossiermanueleitems = _dossiermanueleitems(sequelize, DataTypes);
  var dossiers = _dossiers(sequelize, DataTypes);
  var dossiers_zot = _dossiers_zot(sequelize, DataTypes);
  var dossiersjuridisch = _dossiersjuridisch(sequelize, DataTypes);
  var emaillijst = _emaillijst(sequelize, DataTypes);
  var emaillijstdomicilieringen = _emaillijstdomicilieringen(sequelize, DataTypes);
  var emaillijstklanten = _emaillijstklanten(sequelize, DataTypes);
  var emaillijstprospecten = _emaillijstprospecten(sequelize, DataTypes);
  var emaillijstspam = _emaillijstspam(sequelize, DataTypes);
  var facturen = _facturen(sequelize, DataTypes);
  var facturenlijnen = _facturenlijnen(sequelize, DataTypes);
  var facturentest = _facturentest(sequelize, DataTypes);
  var factuurvoorwaarden = _factuurvoorwaarden(sequelize, DataTypes);
  var faxmanueel = _faxmanueel(sequelize, DataTypes);
  var fiscaleattesten = _fiscaleattesten(sequelize, DataTypes);
  var fiscaleattestenbulk = _fiscaleattestenbulk(sequelize, DataTypes);
  var gemeenten = _gemeenten(sequelize, DataTypes);
  var gsmnrschecken = _gsmnrschecken(sequelize, DataTypes);
  var idafrekeningintern = _idafrekeningintern(sequelize, DataTypes);
  var idbetalingen = _idbetalingen(sequelize, DataTypes);
  var iddoorstortingen = _iddoorstortingen(sequelize, DataTypes);
  var iddoorstortingenxml = _iddoorstortingenxml(sequelize, DataTypes);
  var idfacturen = _idfacturen(sequelize, DataTypes);
  var idfacturencsv = _idfacturencsv(sequelize, DataTypes);
  var idonkosten = _idonkosten(sequelize, DataTypes);
  var idonkostencsv = _idonkostencsv(sequelize, DataTypes);
  var idonkostenold = _idonkostenold(sequelize, DataTypes);
  var idonkostenpers = _idonkostenpers(sequelize, DataTypes);
  var importbestanden = _importbestanden(sequelize, DataTypes);
  var importgemeentes = _importgemeentes(sequelize, DataTypes);
  var importmch = _importmch(sequelize, DataTypes);
  var importmethodes = _importmethodes(sequelize, DataTypes);
  var importschema = _importschema(sequelize, DataTypes);
  var importtabel = _importtabel(sequelize, DataTypes);
  var importtijdelijk = _importtijdelijk(sequelize, DataTypes);
  var importtijdelijk2 = _importtijdelijk2(sequelize, DataTypes);
  var importtijdelijk3 = _importtijdelijk3(sequelize, DataTypes);
  var importtijdelijk4 = _importtijdelijk4(sequelize, DataTypes);
  var importtijdelijk5 = _importtijdelijk5(sequelize, DataTypes);
  var importverisure = _importverisure(sequelize, DataTypes);
  var internemailing = _internemailing(sequelize, DataTypes);
  var janee = _janee(sequelize, DataTypes);
  var janeeeender = _janeeeender(sequelize, DataTypes);
  var klanten = _klanten(sequelize, DataTypes);
  var klanten_cost = _klanten_cost(sequelize, DataTypes);
  var klanten_ik_s_cost = _klanten_ik_s_cost(sequelize, DataTypes);
  var klantenbijlage = _klantenbijlage(sequelize, DataTypes);
  var klantenemail = _klantenemail(sequelize, DataTypes);
  var klantenemaillogboek = _klantenemaillogboek(sequelize, DataTypes);
  var klantenhoofdindeling = _klantenhoofdindeling(sequelize, DataTypes);
  var klantennotas = _klantennotas(sequelize, DataTypes);
  var klantenprepros = _klantenprepros(sequelize, DataTypes);
  var klantenpreproscat = _klantenpreproscat(sequelize, DataTypes);
  var klantenpreproslog = _klantenpreproslog(sequelize, DataTypes);
  var klantensector = _klantensector(sequelize, DataTypes);
  var klantmeldingen = _klantmeldingen(sequelize, DataTypes);
  var kosten = _kosten(sequelize, DataTypes);
  var leveranciercontracten = _leveranciercontracten(sequelize, DataTypes);
  var logboek = _logboek(sequelize, DataTypes);
  var logboek_archive = _logboek_archive(sequelize, DataTypes);
  var logboekjuridisch = _logboekjuridisch(sequelize, DataTypes);
  var materiaalvoorraad = _materiaalvoorraad(sequelize, DataTypes);
  var notarissen = _notarissen(sequelize, DataTypes);
  var nuctest = _nuctest(sequelize, DataTypes);
  var offertes = _offertes(sequelize, DataTypes);
  var paymentlist = _paymentlist(sequelize, DataTypes);
  var planninglijst = _planninglijst(sequelize, DataTypes);
  var popfax = _popfax(sequelize, DataTypes);
  var populatieaanvraag = _populatieaanvraag(sequelize, DataTypes);
  var populatiekost = _populatiekost(sequelize, DataTypes);
  var populatieupdates = _populatieupdates(sequelize, DataTypes);
  var postcodes = _postcodes(sequelize, DataTypes);
  var prepos = _prepos(sequelize, DataTypes);
  var preprospecten = _preprospecten(sequelize, DataTypes);
  var preprospectie = _preprospectie(sequelize, DataTypes);
  var prospecten = _prospecten(sequelize, DataTypes);
  var prospectvoorstellen = _prospectvoorstellen(sequelize, DataTypes);
  var provincies = _provincies(sequelize, DataTypes);
  var pwoorden = _pwoorden(sequelize, DataTypes);
  var rapporten = _rapporten(sequelize, DataTypes);
  var rapportplanning = _rapportplanning(sequelize, DataTypes);
  var rapporttemplates = _rapporttemplates(sequelize, DataTypes);
  var rechtsplegingvergoeding = _rechtsplegingvergoeding(sequelize, DataTypes);
  var rekeningen = _rekeningen(sequelize, DataTypes);
  var rekeningstand = _rekeningstand(sequelize, DataTypes);
  var scarlet = _scarlet(sequelize, DataTypes);
  var smsfeedback = _smsfeedback(sequelize, DataTypes);
  var smsinkomend = _smsinkomend(sequelize, DataTypes);
  var smsmanueel = _smsmanueel(sequelize, DataTypes);
  var smsstatuscodes = _smsstatuscodes(sequelize, DataTypes);
  var smsverzending = _smsverzending(sequelize, DataTypes);
  var sollicitanten = _sollicitanten(sequelize, DataTypes);
  var spryng_incomingsms = _spryng_incomingsms(sequelize, DataTypes);
  var standaardrapporten = _standaardrapporten(sequelize, DataTypes);
  var statusjuridisch = _statusjuridisch(sequelize, DataTypes);
  var stortingen = _stortingen(sequelize, DataTypes);
  var talenincasso = _talenincasso(sequelize, DataTypes);
  var telefoonlijst = _telefoonlijst(sequelize, DataTypes);
  var templatekostprijs = _templatekostprijs(sequelize, DataTypes);
  var templatesklanten = _templatesklanten(sequelize, DataTypes);
  var templatestreinen = _templatestreinen(sequelize, DataTypes);
  var templatetypen = _templatetypen(sequelize, DataTypes);
  var tijdelijkesqls = _tijdelijkesqls(sequelize, DataTypes);
  var tipstricks = _tipstricks(sequelize, DataTypes);
  var treinen = _treinen(sequelize, DataTypes);
  var treinentechnisch = _treinentechnisch(sequelize, DataTypes);
  var verbodenemails = _verbodenemails(sequelize, DataTypes);
  var verbodenfaxen = _verbodenfaxen(sequelize, DataTypes);
  var vergoedingadvdw = _vergoedingadvdw(sequelize, DataTypes);
  var volgendedagen = _volgendedagen(sequelize, DataTypes);
  var wettelijkeschadeintrest = _wettelijkeschadeintrest(sequelize, DataTypes);
  var zot_checkdoorstortmededeling = _zot_checkdoorstortmededeling(sequelize, DataTypes);
  var zot_emaillijst = _zot_emaillijst(sequelize, DataTypes);
  var zot_emaillijst_before449 = _zot_emaillijst_before449(sequelize, DataTypes);
  var zot_facturen = _zot_facturen(sequelize, DataTypes);


  return {
    autoacties,
    autoactiesplanning,
    autoupdate,
    import_temp,
    aansprekingen,
    abo,
    abotype,
    actieregistratie,
    acties,
    advbriefkost,
    advocaatkost,
    advocaten,
    advoringbetalingen,
    agenda,
    agendatype,
    basisoffertehfst,
    basisofferteinhoud,
    basisoffertesubhfst,
    basisoffertetotaal,
    batchevaluatie,
    batchtendens,
    bestemmelingen,
    betalingen,
    betalingen2,
    betalingenoud,
    betalingenteveel,
    betalingenteveelxml,
    bewindvoerders,
    boekhouddocumenten,
    brievenperdag,
    btw,
    budgetcat,
    budgetdetails,
    budgetestimatie,
    budgethcat,
    budgetsubcat,
    closereasons,
    closereasonsjuridisch,
    contactgegevens,
    countrycodes,
    countrycodes_2019,
    credipay_paymentplan,
    credipay_transaction_payments,
    debiteurcategorie,
    debiteurs,
    debiteurs_copy,
    debiteurs_zot,
    deurwaarder,
    deurwaarderbetalingen,
    deurwaarderbrievenbulk,
    deurwaarderkost,
    dossier_token,
    dossiermanueleitems,
    dossiers,
    dossiers_zot,
    dossiersjuridisch,
    emaillijst,
    emaillijstdomicilieringen,
    emaillijstklanten,
    emaillijstprospecten,
    emaillijstspam,
    facturen,
    facturenlijnen,
    facturentest,
    factuurvoorwaarden,
    faxmanueel,
    fiscaleattesten,
    fiscaleattestenbulk,
    gemeenten,
    gsmnrschecken,
    idafrekeningintern,
    idbetalingen,
    iddoorstortingen,
    iddoorstortingenxml,
    idfacturen,
    idfacturencsv,
    idonkosten,
    idonkostencsv,
    idonkostenold,
    idonkostenpers,
    importbestanden,
    importgemeentes,
    importmch,
    importmethodes,
    importschema,
    importtabel,
    importtijdelijk,
    importtijdelijk2,
    importtijdelijk3,
    importtijdelijk4,
    importtijdelijk5,
    importverisure,
    internemailing,
    janee,
    janeeeender,
    klanten,
    klanten_cost,
    klanten_ik_s_cost,
    klantenbijlage,
    klantenemail,
    klantenemaillogboek,
    klantenhoofdindeling,
    klantennotas,
    klantenprepros,
    klantenpreproscat,
    klantenpreproslog,
    klantensector,
    klantmeldingen,
    kosten,
    leveranciercontracten,
    logboek,
    logboek_archive,
    logboekjuridisch,
    materiaalvoorraad,
    notarissen,
    nuctest,
    offertes,
    paymentlist,
    planninglijst,
    popfax,
    populatieaanvraag,
    populatiekost,
    populatieupdates,
    postcodes,
    prepos,
    preprospecten,
    preprospectie,
    prospecten,
    prospectvoorstellen,
    provincies,
    pwoorden,
    rapporten,
    rapportplanning,
    rapporttemplates,
    rechtsplegingvergoeding,
    rekeningen,
    rekeningstand,
    scarlet,
    smsfeedback,
    smsinkomend,
    smsmanueel,
    smsstatuscodes,
    smsverzending,
    sollicitanten,
    spryng_incomingsms,
    standaardrapporten,
    statusjuridisch,
    stortingen,
    talenincasso,
    telefoonlijst,
    templatekostprijs,
    templatesklanten,
    templatestreinen,
    templatetypen,
    tijdelijkesqls,
    tipstricks,
    treinen,
    treinentechnisch,
    verbodenemails,
    verbodenfaxen,
    vergoedingadvdw,
    volgendedagen,
    wettelijkeschadeintrest,
    zot_checkdoorstortmededeling,
    zot_emaillijst,
    zot_emaillijst_before449,
    zot_facturen,
    sequelize
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
