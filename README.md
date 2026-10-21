# GRK · lo-fi-prototyyppi

Klikattava prototyyppi grk.fi:n uudesta sivustosta lo-fi-tasolla. Sivut ovat GRK lo-fi -kankaalta: rakenne, sisältö ja lohkot ovat sovitut, visuaalinen ilme tehdään myöhemmin. Kuvat ovat paikkamerkkejä; kaaviot ja ikonit näkyvät.

Staattiset HTML-sivut, ei build-vaihetta. Julkaisupeili esittelyä varten, ei näy hakukoneissa (`noindex` ja `robots.txt`).

## Sivut

Etusivu, Palvelut, Infra- ja maarakentaminen, Datakeskukset, Yhteystiedot, Hailuodon kiinteä yhteys (referenssi), Tarjouspyyntö, Vastaanottopaikat, Nurmijärven vastaanottopaikka (paikkakuntapohja), Avoimet työpaikat, Laatu ja turvallisuus, Vastuullisuus ja Ajankohtaista.

Linkki sivulle, jota ei vielä ole, näyttää ilmoituksen. Lomakkeet eivät lähetä tietoja.

## Päivitys

Sivut generoidaan kankaan tiedostoista: `GRK/multisite/tools/lofi_proto.py <kankaan project> <assetit> <archivo.woff2> <kohde>`.
