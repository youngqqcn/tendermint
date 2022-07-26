(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{653:function(e,t,a){"use strict";a.r(t);var n=a(1),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-015-crypto-encoding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-015-crypto-encoding"}},[e._v("#")]),e._v(" ADR 015: Crypto encoding")]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("We must standardize our method for encoding public keys and signatures on chain.\nCurrently we amino encode the public keys and signatures.\nThe reason we are using amino here is primarily due to ease of support in\nparsing for other languages.\nWe don't need its upgradability properties in cryptosystems, as a change in\nthe crypto that requires adapting the encoding, likely warrants being deemed\na new cryptosystem.\n(I.e. using new public parameters)")]),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("h3",{attrs:{id:"public-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#public-keys"}},[e._v("#")]),e._v(" Public keys")]),e._v(" "),a("p",[e._v("For public keys, we will continue to use amino encoding on the canonical\nrepresentation of the pubkey.\n(Canonical as defined by the cryptosystem itself)\nThis has two significant drawbacks.\nAmino encoding is less space-efficient, due to requiring support for upgradability.\nAmino encoding support requires forking protobuf and adding this new interface support\noption in the language of choice.")]),e._v(" "),a("p",[e._v("The reason for continuing to use amino however is that people can create code\nmore easily in languages that already have an up to date amino library.\nIt is possible that this will change in the future, if it is deemed that\nrequiring amino for interacting with Tendermint cryptography is unnecessary.")]),e._v(" "),a("p",[e._v("The arguments for space efficiency here are refuted on the basis that there are\nfar more egregious wastages of space in the SDK.\nThe space requirement of the public keys doesn't cause many problems beyond\nincreasing the space attached to each validator / account.")]),e._v(" "),a("p",[e._v("The alternative to using amino here would be for us to create an enum type.\nSwitching to just an enum type is worthy of investigation post-launch.\nFor reference, part of amino encoding interfaces is basically a 4 byte enum\ntype definition.\nEnum types would just change that 4 bytes to be a variant, and it would remove\nthe protobuf overhead, but it would be hard to integrate into the existing API.")]),e._v(" "),a("h3",{attrs:{id:"signatures"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signatures"}},[e._v("#")]),e._v(" Signatures")]),e._v(" "),a("p",[e._v("Signatures should be switched to be "),a("code",[e._v("[]byte")]),e._v(".\nSpatial efficiency in the signatures is quite important,\nas it directly affects the gas cost of every transaction,\nand the throughput of the chain.\nSignatures don't need to encode what type they are for (unlike public keys)\nsince public keys must already be known.\nTherefore we can validate the signature without needing to encode its type.")]),e._v(" "),a("p",[e._v("When placed in state, signatures will still be amino encoded, but it will be the\nprimitive type "),a("code",[e._v("[]byte")]),e._v(" getting encoded.")]),e._v(" "),a("h4",{attrs:{id:"ed25519"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ed25519"}},[e._v("#")]),e._v(" Ed25519")]),e._v(" "),a("p",[e._v("Use the canonical representation for signatures.")]),e._v(" "),a("h4",{attrs:{id:"secp256k1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#secp256k1"}},[e._v("#")]),e._v(" Secp256k1")]),e._v(" "),a("p",[e._v("There isn't a clear canonical representation here.\nSignatures have two elements "),a("code",[e._v("r,s")]),e._v(".\nThese bytes are encoded as "),a("code",[e._v("r || s")]),e._v(", where "),a("code",[e._v("r")]),e._v(" and "),a("code",[e._v("s")]),e._v(" are both exactly\n32 bytes long, encoded big-endian.\nThis is basically Ethereum's encoding, but without the leading recovery bit.")]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("Implemented")]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("ul",[a("li",[e._v("More space efficient signatures")])]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("ul",[a("li",[e._v("We have an amino dependency for cryptography.")])]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),a("ul",[a("li",[e._v("No change to public keys")])])])}),[],!1,null,null,null);t.default=i.exports}}]);