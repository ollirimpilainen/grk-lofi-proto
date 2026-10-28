/* Generoitu: multisite/tools/lofi_nav.py navigaatio-protosta. Älä muokkaa käsin. */
(function () {
  'use strict';
  var slug = function (s) { return s.toLowerCase().replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/å/g, 'a').replace(/↗/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''); };
  var N = function (label, o, kids) { var n = { label: label, kids: kids || null }; for (var k in o) n[k] = o[k]; return n; };
  var KSBR_PROTO = 'https://ollirimpilainen.github.io/ksbr-proto/';

  var SITES = {
    grk: {
      key: 'grk', domain: 'grk.fi', logo: 'GRK', dot: true, langs: ['FI', 'SE', 'EE', 'EN'], country: 'Suomi',
      countries: [['GRK Suomi', 'grk.fi', true], ['GRK Sverige', 'grk.fi/se'], ['GRK Eesti', 'grk.fi/ee'], ['GRK Group · English', 'grk.fi/en']],
      util: [N('Sijoittajat ↗', { ext: 'sijoittajat.grk.fi', desc: 'IR-sivusto. Yläpalkissa 21.10.' }), N('Media', { url: '/media/', desc: 'Mediapankki, logot ja kuvat sekä mediayhteyshenkilö. Uutiset ovat Ajankohtaista-sivulla.' })],
      home: N('Etusivu', { url: '/', on: true, desc: 'Etusivu reitittää: hero, yhteyshenkilöhaku ja neljä ovea. Kävijä tuntee GRK:n jo, joten tärkein tehtävä on viedä oikeaan paikkaan.' }),
      top: [
        N('Palvelut', { url: '/palvelut/', on: true, mega: true, hub: 'Kaikki palvelut ja toteutusmallit', info: 'Sarakkeen otsikko on työ, jota asiakas hakee. Liiketoiminnan nimi alaotsikkona.', desc: 'Mitä GRK tekee. Sarake per liiketoiminta, ja hubissa myös toteutusmallit KVR, ST ja allianssi. Palvelut ovat palvelukortteja liiketoimintasivun Mitä teemme -haitarissa, eivät omia sivuja (PRJ-269, PRJ-270).' }, [
          N('Infra- ja maarakentaminen', { sub: 'Taito ja Väylä', url: '/taito-ja-vayla/', on: true }, [N('Tie- ja katurakentaminen', { anchor: true }), N('Maarakentaminen ja pohjatyöt', { anchor: true }), N('Sillat', { anchor: true }), N('Kunnallistekniikka', { anchor: true }), N('Louhinta ja kalliorakentaminen', { anchor: true }), N('Teollisuusrakentaminen', { anchor: true }), N('Viherrakentaminen', { anchor: true })]),
          N('Päällystys ja asfaltointi', { sub: 'Päällystys', url: '/paallystys/' }, [N('Asfaltointi', { anchor: true }), N('Valuasfaltti', { uusi: true, anchor: true }), N('Päällysteen korjaus', { anchor: true }), N('Rakenteen parantaminen', { anchor: true }), N('Kierrätysasfaltti', { anchor: true }), N('Asfalttiasemat ja massa', { anchor: true })]),
          N('Pohjarakentaminen ja paalutus', { sub: 'Erikoispohjarakentaminen', url: '/erikoispohjarakentaminen/', on: true }, [N('Porapaalutus', { uusi: true, desc: 'Palvelukortti Pohjarakentaminen ja paalutus -sivun haitarissa. Palveluilla ei ole omia alasivuja (PRJ-270).', anchor: true }), N('Lyöntipaalutus ja suurpaalut', { anchor: true }), N('Stabilointi ja pohjanvahvistus', { anchor: true }), N('Kaivantojen tuennat ja ankkuroinnit', { anchor: true }), N('KSBR ↗', { site: 'ksbr' })]),
          N('Rautatiet ja raitiotiet', { sub: 'Rata', url: '/rata/' }, [N('Yksityisraiteet', { anchor: true }), N('Raiderakentaminen', { anchor: true }), N('Rautateiden järjestelmät ja turvalaitteet', { anchor: true }), N('Rata- ja turvalaitekunnossapito', { anchor: true }), N('Sähkörata- ja vahvavirtakunnossapito', { anchor: true }), N('Metro', { anchor: true }), N('Raitiotiet', { anchor: true })]),
          N('Sähköverkot ja sähköasemat', { sub: 'Power', url: '/power/' }, [N('Sähköverkot ja verkkoyhtiöt', { uusi: true, anchor: true }), N('Sähköasemat, voimajohdot ja kaapeloinnit', { anchor: true }), N('Uusiutuvan energian sähkötyöt', { anchor: true })]),
          N('Kiertotalous ja vastaanotto', { sub: 'Kiertotalous', url: '/kiertotalous/' }, [N('Maa-ainesten vastaanotto', { anchor: true }), N('Haastavat jakeet', { uusi: true, anchor: true }), N('Purku- ja betonijäte', { anchor: true }), N('Kiertomateriaalit ja kiviainekset', { anchor: true }), N('Biohiili ja pelletti', { anchor: true }), N('Ympäristörakentaminen ja sivuvirrat', { anchor: true })])
        ]),
        N('Toimialat', { url: '/toimialat/', on: true, hub: 'Kaikki toimialat', info: 'Kenen hankkeisiin rakennamme. Lista on kattava, kasvualat ensin.', desc: 'Kenen hankkeisiin GRK tekee työtä. Toimialasivu on hankkeen kokonaisuuden koti.' }, [
          N('Datakeskukset', { desc: 'Esirakentaminen, perustukset, liittymä ja sähköasema. Englanniksi data centre civil works.' }),
          N('Energia', { on: true, desc: 'Tuuli- ja aurinkopuistot, akkuvarastot ja sähköverkot kokonaisuutena, GRK ja KSBR yhdessä.' }, [N('Balance of Plant', { uusi: true, desc: 'Tehdään ensin englanniksi.' })]),
          N('Teollisuus', { desc: 'Tehtaat, sähköistys, raiteet ja perustukset sekä satamat ja logistiikka.' }),
          N('Kaupungit ja väylät', { uusi: true, desc: 'Kunnat ja Väylävirasto. Uskottavuuden sivu: referenssit, laatu ja nimetty vastaava. Ohjaa palveluihin.' })
        ]),
        N('Referenssit', { url: '/referenssit/', on: true, flat: true, desc: 'Vain referenssihaku: haku ja suodattimet palvelu, toimiala, toteutusmalli, maa, alue ja asiakastyyppi. Ei kokoelmasivuja (21.10.). Case-sivut ovat hakutuloksia.' }, [N('Hailuodon kiinteä yhteys', { on: true, sub: 'Case-sivu', desc: 'Esimerkki case-sivupohjasta.' })]),
        N('Ajankohtaista', { url: '/ajankohtaista/', flat: true, uusi: false, desc: 'Uutiset, tiedotteet ja artikkelit. Uutinen linkittää hankkeen referenssiin ja palveluun. Päävalikossa 21.10.' }),
        N('Vastaanottopaikat', { url: '/vastaanottopaikat/', on: true, hub: 'Kaikki vastaanottopaikat ja kartta', info: '20 vastaanottopaikkaa aakkosjärjestyksessä yhdestä tietolähteestä (grk.fi:n toimipistekartta 8.9.2026). Lisäksi 4 kiviainesaluetta ja 3 asfalttiasemaa listaussivulla.', desc: 'Pudotusvalikossa paikkakunnat, joista pääsee suoraan paikkakuntasivulle. Listaussivulla lähimmät paikat, haku ja sijainti, jaesuodatin, auki nyt, Soita ja Reittiohje, kartta. Asfalttiasemat omana ryhmänään. Mobiili ensin.' }, [N('Lähin paikka sijaintisi mukaan', { anchor: 'lahin' }), N('Airaksela', { url: '/vastaanottopaikat/airaksela/' }), N('Ala-Anttila', { url: '/vastaanottopaikat/ala-anttila/' }), N('Hammaslahti', { url: '/vastaanottopaikat/hammaslahti/' }), N('Ii', { url: '/vastaanottopaikat/ii/' }), N('Isosuo', { url: '/vastaanottopaikat/isosuo/' }), N('Kanteenmaa', { url: '/vastaanottopaikat/kanteenmaa/' }), N('Kokkovuori', { url: '/vastaanottopaikat/kokkovuori/' }), N('Kyyrönsuo', { url: '/vastaanottopaikat/kyyronsuo/' }), N('Lappeenranta', { url: '/vastaanottopaikat/lappeenranta/' }), N('Lappila', { url: '/vastaanottopaikat/lappila/' }), N('Metsä-Kivelä', { url: '/vastaanottopaikat/metsa-kivela/' }), N('Muhos', { url: '/vastaanottopaikat/muhos/' }), N('Mustikkakangas', { url: '/vastaanottopaikat/mustikkakangas/' }), N('Mäntsälä', { url: '/vastaanottopaikat/mantsala/' }), N('Nurmijärvi', { url: '/vastaanottopaikat/nurmijarvi/', sub: 'Paikkakuntasivu (pohja)', desc: 'Aukiolo, vaaka, jakeet, ohjeet, suora numero ja toimipisteen yhteystiedot.' }), N('Pehkeensuo', { url: '/vastaanottopaikat/pehkeensuo/' }), N('Piilonsuo', { url: '/vastaanottopaikat/piilonsuo/' }), N('Sipoo', { url: '/vastaanottopaikat/sipoo/' }), N('Tarastenjärvi', { url: '/vastaanottopaikat/tarastenjarvi/' }), N('Yrtinkangas', { url: '/vastaanottopaikat/yrtinkangas/' }), N('Asfalttiasemat', { anchor: 'asfalttiasemat', sub: 'Nurmijärvi, Jyväskylä, Kajaani' }), N('Kiviainesalueet', { anchor: 'kiviainesalueet', sub: 'Rantakulma, Röykkä, Loviisa, Öljytie (Sipoo)' })]),
        N('Yritys', { url: '/yritys/', hub: 'Yritys-etusivu', info: 'Laskutusohjeet vain Toimittajille ja laskutus -sivulla.' }, [N('GRK lyhyesti'), N('Laatu ja turvallisuus', { on: true, desc: 'Turvallisuus edellä ja turvallisuusluvut, laadun varmistus, ladattavat sertifikaatit ja pätevyydet (ISO 9001, 14001, 45001, RALA, R1/K1 ym.).' }), N('Vastuullisuus', { on: true, desc: 'Ympäristö, ihmiset ja hallinto yhdellä sivulla osioina. Päästöluvut, raportit ja EcoVadis.' }), N('Konserni', { desc: 'GRK Suomi Oy, GRK Sverige AB, GRK Eesti AS ja KSBR perustietoineen.' })]),
        N('Ura', { url: '/ura/', hub: 'Ura-etusivu', info: 'Ilmoitukset ovat TalentAdoressa.' }, [N('Avoimet työpaikat', { on: true, desc: 'Haku ja suodattimet listan yläpuolella, avoin hakemus, kesätyö ja Miksi GRK:lle.' }), N('Työ GRK:lla'), N('Harjoittelu ja kesätyö'), N('Uratarinat')])
      ],
      cta: N('Yhteystiedot', { url: '/yhteystiedot/', on: true, hub: 'Kaikki yhteystiedot', info: 'Vaihde +358 10 321 4110', desc: 'Asiaohjaus, liiketoimintojen vastuuhenkilöt, yhtiöt, toimipisteet ja laskutus.' }, [N('Yhteyshenkilöt', { on: true, desc: 'Haku nimellä, palvelulla ja paikkakunnalla.' }), N('Tarjouspyyntö', { on: true, url: '/tarjouspyynto/' }), N('Toimittajille ja laskutus'), N('Media'), N('Työmaatiedotteet', { uusi: true }), N('Sponsorointi')])
    },
    ksbr: {
      key: 'ksbr', domain: 'ksbr.fi', logo: 'KSBR', dot: false, langs: ['FI', 'EN', 'SV'],
      home: N('Etusivu', { url: '/', on: true, hifi: 'index.html', desc: 'Brändihaun pääkohde. Joka kolmas etusivun kävijä jatkaa yhteystietoihin.' }),
      top: [
        N('Toimialat', { url: '/toimialat/', hub: 'Kaikki toimialat', info: 'Toimialat ovat KSBR:n ainoa myyntiakseli. Menetelmät ovat osioita, joihin voi linkittää.', desc: 'Koontisivu kaikille toimialoille ja KSBR:n luvuille.' }, [
          N('Energia', {}, [N('Tuulivoima', { on: true, hifi: 'tuulivoima.html' }), N('Akkuenergiavarastot', { uusi: true }), N('Sähköasemat ja verkot', { avoin: true, desc: 'Avoin: kaksi ohutta sivua yhdeksi?' })]),
          N('Teollisuus', { on: true, hifi: 'teollisuus.html' }, []),
          N('Datakeskukset', { uusi: true }, []),
          N('Infra', {}, []),
          N('Pysäköinti ja toimitilat', { url: '/toimialat/pysakointitalot/' }, []),
          N('Betonirakentaminen', { on: true, hifi: 'betonirakentaminen.html' }, [N('Paikallavalu', { anchor: true }), N('Liukuvalu', { anchor: true }), N('Jännitetyt säiliöt', { anchor: 'sailiot' }), N('Betonirungot', { anchor: 'rungot' })])
        ]),
        N('Referenssit', { url: '/referenssit/', on: true, flat: true, hifi: 'referenssit.html', desc: 'Listaus ja case-sivut kohteen nimellä.' }, [N('Lestijärven tuulipuisto', { on: true, sub: 'Case-sivu', hifi: 'referenssi-lestijarvi.html' })]),
        N('Ajankohtaista', { url: '/ajankohtaista/', flat: true, desc: 'Uutiset ja artikkelit. Uutinen linkittää aina palvelusivulle. Tietopankkia ei tehdä. Päävalikossa Referenssien jälkeen kuten GRK:lla (21.10.).' }, [N('Talvibetonointi', { on: true, sub: 'Artikkeli', url: '/ajankohtaista/talvibetonointi/', hifi: 'artikkeli-talvibetonointi.html' })]),
        N('Ura', { url: '/ura/', on: true, hifi: 'ura.html', hub: 'Ura-sivu' }, [N('Avoimet työpaikat', { anchor: 'avoimet' }), N('Kesätyö ja harjoittelu', { anchor: 'kesatyo' }), N('Uratarinat', { anchor: 'tarinat' })]),
        N('KSBR', { url: '/ksbr/', on: true, hifi: 'meista.html', hub: 'Meistä', desc: 'Omistajat, liikevaihto ja arvot.' }, [N('Suunnitteluyhteistyö', { on: true, hifi: 'suunnitteluyhteistyo.html' }), N('Toteutusmallit', { on: true, hifi: 'toteutusmallit.html' }), N('Laatu, turvallisuus ja sertifikaatit', { on: true, url: '/ksbr/laatu-ja-turvallisuus/', hifi: 'laatu.html' }), N('Vastuullisuus', { on: true, desc: 'Ympäristö, ihmiset ja hallinto yhdellä sivulla osioina. Päästöluvut, raportit ja EcoVadis.' }), N('GRK-konserni ↗', { site: 'grk' })])
      ],
      cta: N('Yhteystiedot', { url: '/yhteystiedot/', on: true, hifi: 'yhteystiedot.html', hub: 'Kaikki yhteystiedot', info: 'info@ksbr.fi', desc: 'Yhteystiedot, yhteyshenkilöt toimialoittain ja tarjouspyyntö.' }, [N('Yhteyshenkilöt', { on: true, hifi: 'yhteyshenkilot.html' }), N('Lähetä tarjouspyyntö', { on: true, url: '/yhteystiedot/tarjouspyynto/', hifi: 'tarjouspyynto.html' }), N('Laskutustiedot', { anchor: 'laskutustiedot' }), N('Media')])
    }
  };

  // osoitteet ja hakemisto: url -> polku
  Object.keys(SITES).forEach(function (k) {
    var S = SITES[k]; S.index = {}; S.index['/'] = [];
    var fin = function (n, base, path) {
      if (!n.url && !n.ext && !n.site) n.url = n.anchor ? base + '#' + (n.anchor === true ? slug(n.label) : n.anchor) : base + slug(n.label) + '/';
      var p = path.concat([n]);
      if (n.url) S.index[n.url] = p;
      var own = n.url && n.url.indexOf('#') < 0 ? n.url : base;
      (n.kids || []).forEach(function (c) { fin(c, own, p); });
    };
    S.top.forEach(function (n) { fin(n, '/', []); }); fin(S.cta, '/', []); (S.util || []).forEach(function (n) { fin(n, '/', []); });
    S.all = S.top.concat([S.cta]);
  });

  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var CHEV = '<svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
  var RIGHT = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>';
  var newTag = function (n) { return n.uusi ? '<span class="new">Uusi</span>' : ''; };
  var clean = function (l) { return l.replace(' ↗', ''); };
  var label = function (n) { return esc(clean(n.label)) + (n.site || n.ext ? ' ↗' : ''); };
  var status = function (n) {
    if (n.ext) return ['Vie sivustolle ' + n.ext, 'chip ext'];
    if (n.anchor) return ['Osio sivulla, ei omaa sivua', 'chip os'];
    if (n.on) return ['Suunniteltu kankaalle', 'chip on'];
    return ['Rakenteessa, ei vielä kankaalla', 'chip'];
  };

  function utilHtml(S) {
    var sites = S.key === 'grk' ? '<span class="on">GRK</span><a href="' + KSBR_URL + '">KSBR ↗</a>' : '<span class="on">KSBR</span><a href="index.html">GRK ↗</a>';
    var links = (S.util || []).map(function (n) { return '<a href="' + hrefOf(n) + '">' + label(n) + '</a>'; }).join('');
    var pick = S.countries
      ? '<details class="cty"><summary>' + esc(S.country) + CHEV + '</summary><ul>' + S.countries.map(function (c) { return '<li><a href="index.html"' + (c[2] ? ' aria-current="true"' : '') + '><span>' + esc(c[0]) + '<small>' + esc(c[1]) + '</small></span>' + (c[2] ? '<b>✓</b>' : '<b>↗</b>') + '</a></li>'; }).join('') + '</ul></details>'
      : S.langs.map(function (c, i) { return '<span class="' + (i ? '' : 'on') + '">' + c + '</span>'; }).join('');
    return '<div class="ul">' + sites + '</div><div class="ur">' + links + (links ? '<span class="usep" aria-hidden="true"></span>' : '') + '<button type="button">Haku</button>' + pick + '</div>';
  }
  function sheetUtil(S) {
    var h = '<div class="sutil">';
    if (S.countries) h += '<p class="sul">Maa</p>' + S.countries.map(function (c) { return '<a class="srow" href="index.html">' + esc(c[0]) + (c[2] ? ' ✓' : ' ↗') + '</a>'; }).join('');
    else h += '<p class="sul">Kieli</p><p class="slangs">' + S.langs.map(function (c, i) { return '<span class="' + (i ? '' : 'on') + '">' + c + '</span>'; }).join('') + '</p>';
    h += '<p class="sul">Konserni ja sidosryhmät</p>' + (S.util || []).map(function (n) { return '<a class="srow" href="' + hrefOf(n) + '">' + label(n) + '</a>'; }).join('') +
      (S.key === 'grk' ? '<a class="srow" href="' + KSBR_URL + '">KSBR ↗</a>' : '<a class="srow" href="index.html">GRK ↗</a>');
    return h + '</div>';
  }

  function parseHash() {
    var h = decodeURIComponent(location.hash.replace(/^#/, ''));
    var m = h.match(/^(grk|ksbr):(.*)$/);
    if (!m) return { site: 'grk', path: [], ext: null };
    var S = SITES[m[1]];
    if (m[2].indexOf('ext:') === 0) {
      var ext = m[2].slice(4), found = null;
      Object.keys(S.index).forEach(function (u) { var p = S.index[u]; (p.length ? p[p.length - 1].kids || [] : S.all.concat(S.util || [])).forEach(function (c) { if (c.ext === ext) found = p.concat([c]); }); });
      return { site: m[1], path: found || [], ext: ext };
    }
    return { site: m[1], path: S.index[m[2]] || [] };
  }

  function renderHeader() {
    var S = SITES[state.site];
    document.querySelectorAll('.seg button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.site === S.key)); });
    $('logo').innerHTML = esc(S.logo) + (S.dot ? '<i>.</i>' : '');
    $('logo').href = 'index.html';
    $('logo').setAttribute('aria-label', S.domain + ' etusivu');
    $('util').innerHTML = utilHtml(S);
    $('nav').innerHTML = S.top.map(function (n, i) {
      var cur = state.path[0] === n ? ' cur' : '';
      if (n.flat || !n.kids || !n.kids.length) return '<a class="mi' + cur + '" href="' + hrefOf(n) + '" style="text-decoration:none"' + (cur ? ' aria-current="page"' : '') + '>' + esc(n.label) + '</a>';
      return '<button type="button" class="mi' + cur + '" data-open="' + i + '" aria-expanded="' + (state.open === i) + '" aria-controls="panel">' + esc(n.label) + CHEV + '</button>';
    }).join('');
    var ci = S.top.length;
    $('cta').innerHTML = esc(S.cta.label) + CHEV;
    $('cta').dataset.open = ci;
    $('cta').setAttribute('aria-expanded', String(state.open === ci));
    $('cta').setAttribute('aria-controls', 'panel');
    renderPanel();
    renderSheet();
  }

  function renderPanel() {
    var S = SITES[state.site], on = state.open == null ? null : S.all[state.open];
    if (!on) { $('panel').hidden = true; $('pin').innerHTML = ''; return; }
    var html = '';
    if (on.mega) {
      html = '<div class="mega">' + on.kids.map(function (c) {
        return '<div><a class="mh" href="' + hrefOf(c) + '">' + label(c) + newTag(c) + '</a>' + (c.sub ? '<span class="msub">' + esc(c.sub) + '</span>' : '') +
          '<div class="mlist">' + (c.kids || []).map(function (k) { return '<a class="ml' + (k.anchor ? ' an' : '') + '" href="' + hrefOf(k) + '">' + label(k) + newTag(k) + '</a>'; }).join('') + '</div></div>';
      }).join('') + '</div>';
    } else {
      html = '<div class="list">' + on.kids.map(function (c) {
        return '<div><a class="li" href="' + hrefOf(c) + '">' + label(c) + newTag(c) + (c.sub ? '<small>' + esc(c.sub) + '</small>' : '') + '</a>' +
          (c.kids || []).map(function (k) { return '<a class="li d1" href="' + hrefOf(k) + '">' + label(k) + newTag(k) + '</a>'; }).join('') + '</div>';
      }).join('') + '</div>';
    }
    html += '<div class="pfoot"><a class="hub" href="' + hrefOf(on) + '">' + esc(on.hub || on.label) + '</a><span>' + esc(on.info || '') + '</span></div>';
    $('pin').innerHTML = html;
    var pn = $('panel');
    pn.classList.toggle('drop', !on.mega);
    var wide = !on.mega && on.kids.length > 12, pw = wide ? 620 : 340;
    pn.classList.toggle('wide', wide);
    pn.style.left = '';
    if (!on.mega) {
      var btn = state.open === S.top.length ? $('cta') : document.querySelector('.nav [data-open="' + state.open + '"]');
      var hd = pn.offsetParent || document.body;
      if (btn) {
        var bl = btn.getBoundingClientRect().left - hd.getBoundingClientRect().left;
        if (state.open === S.top.length) bl = btn.getBoundingClientRect().right - hd.getBoundingClientRect().left - pw;
        pn.style.left = Math.max(0, Math.min(bl, hd.clientWidth - pw - 2)) + 'px';
      }
    }
    pn.hidden = false;
  }

  function renderSheet() {
    var S = SITES[state.site], open = state.menu, mp = state.mpath;
    $('mb').setAttribute('aria-expanded', String(!!open));
    $('mb').innerHTML = open
      ? '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>Sulje'
      : '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>Valikko';
    if (!open) { $('sheet').hidden = true; return; }
    var cur = mp.length ? mp[mp.length - 1] : null;
    var list = cur ? cur.kids || [] : S.all;
    var html = '';
    if (cur) {
      html += '<div class="lvl"><button type="button" class="back" data-back="1"><svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>' + esc(mp.length > 1 ? mp[mp.length - 2].label : 'Valikko') + '</button></div>' +
        '<p class="ltitle">' + esc(cur.label) + '</p><a class="hubrow" href="' + hrefOf(cur) + '">' + esc(cur.hub || ('Avaa ' + cur.label)) + '</a>';
    }
    html += list.map(function (n, i) {
      var kids = n.kids && n.kids.length && !n.flat;
      var cls = 'row' + (!cur && n === S.cta ? ' cta-row' : '') + (n.anchor ? ' an' : '');
      var inner = '<span class="tx">' + label(n) + newTag(n) + (n.sub ? '<small>' + esc(n.sub) + '</small>' : '') + '</span>' + (kids ? RIGHT : '');
      return kids ? '<button type="button" class="' + cls + '" data-drill="' + i + '">' + inner + '</button>' : '<a class="' + cls + '" href="' + hrefOf(n) + '">' + inner + '</a>';
    }).join('');
    if (cur && cur.info) html += '<p class="sinfo">' + esc(cur.info) + '</p>';
    if (!cur) html += sheetUtil(S);
    $('sheet').innerHTML = html;
    $('sheet').hidden = false;
  }


  var KSBR_URL = 'https://ollirimpilainen.github.io/ksbr-proto/';
  var BYLABEL = { 'Laatu ja turvallisuus': 'laatu-ja-turvallisuus.html', 'Vastuullisuus': 'vastuullisuus.html',
    'Avoimet työpaikat': 'avoimet-tyopaikat.html', 'Tarjouspyyntö': 'tarjouspyynto.html', 'Etusivu': 'index.html',
    'Hailuodon kiinteä yhteys': 'referenssi-hailuoto.html' };
  var hrefOf = function (n) {
    if (n.site) return KSBR_URL;
    if (n.ext) return 'https://' + n.ext;
    if (BYLABEL[clean(n.label)]) return BYLABEL[clean(n.label)];
    var S = SITES.grk, p = S.index[n.url] || [], top = p[0], d = p.length;
    if (n.url === '/') return 'index.html';
    if (!top) return '#';
    switch (top.label) {
      case 'Palvelut': return d === 1 ? 'palvelut.html' : 'infra.html';
      case 'Toimialat': return d === 1 ? '#' : 'datakeskukset.html';
      case 'Referenssit': return d === 1 ? '#' : 'referenssi-hailuoto.html';
      case 'Ajankohtaista': return 'ajankohtaista.html';
      case 'Vastaanottopaikat': return d === 1 ? 'vastaanottopaikat.html' : 'vastaanottopaikat-nurmijarvi.html';
      case 'Yhteystiedot': return 'yhteystiedot.html';
    }
    return '#';
  };

  var hd = document.querySelector('.hd');
  var here = hd ? hd.getAttribute('data-nav') : '/';
  var state = { site: 'grk', path: SITES.grk.index[here] || [], open: null, menu: false, mpath: [] };
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-open],[data-drill],[data-back],#mb');
    if (!t) { if (state.open != null && !e.target.closest('#panel')) { state.open = null; renderHeader(); } return; }
    if (t.id === 'mb') { state.menu = !state.menu; state.mpath = []; renderSheet(); return; }
    if (t.dataset.back) { state.mpath.pop(); renderSheet(); return; }
    if (t.dataset.drill != null) {
      var S = SITES[state.site], cur = state.mpath.length ? state.mpath[state.mpath.length - 1] : null;
      state.mpath.push((cur ? cur.kids : S.all)[+t.dataset.drill]); renderSheet(); $('sheet').scrollTop = 0; return;
    }
    if (t.dataset.open != null) { var i = +t.dataset.open; state.open = state.open === i ? null : i; renderHeader(); }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (state.open != null) { var i = state.open; state.open = null; renderHeader(); var b = document.querySelector('[data-open="' + i + '"]'); if (b) b.focus(); }
    else if (state.menu) { state.menu = false; renderSheet(); $('mb').focus(); }
  });
  renderHeader();
})();
