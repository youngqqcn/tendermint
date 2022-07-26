(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{827:function(t,e,i){"use strict";i.r(e);var n=i(1),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"light-client"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#light-client"}},[t._v("#")]),t._v(" Light Client")]),t._v(" "),i("p",[t._v("Light clients are an important part of the complete blockchain system for most\napplications. Tendermint provides unique speed and security properties for\nlight client applications.")]),t._v(" "),i("p",[t._v("See our "),i("a",{attrs:{href:"https://pkg.go.dev/github.com/tendermint/tendermint/light?tab=doc",target:"_blank",rel:"noopener noreferrer"}},[t._v("light\npackage"),i("OutboundLink")],1),t._v(".")]),t._v(" "),i("h2",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),i("p",[t._v("The light client protocol verifies headers by retrieving a chain of headers,\ncommits and validator sets from a trusted height to the target height, verifying\nthe signatures of each of these intermediary signed headers till it reaches the\ntarget height. From there, all the application state is verifiable with\n"),i("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/953523c3cb99fdb8c8f7a2d21e3a99094279e9de/spec/blockchain/encoding.md#iavl-tree",target:"_blank",rel:"noopener noreferrer"}},[t._v("merkle proofs"),i("OutboundLink")],1),t._v(".")]),t._v(" "),i("h2",{attrs:{id:"properties"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),i("ul",[i("li",[t._v("You get the full collateralized security benefits of Tendermint; no\nneed to wait for confirmations.")]),t._v(" "),i("li",[t._v("You get the full speed benefits of Tendermint; transactions\ncommit instantly.")]),t._v(" "),i("li",[t._v("You can get the most recent version of the application state\nnon-interactively (without committing anything to the blockchain). For\nexample, this means that you can get the most recent value of a name from the\nname-registry without worrying about fork censorship attacks, without posting\na commit and waiting for confirmations. It's fast, secure, and free!")])]),t._v(" "),i("h2",{attrs:{id:"security"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#security"}},[t._v("#")]),t._v(" Security")]),t._v(" "),i("p",[t._v("A light client is initialized from a point of trust using "),i("a",{attrs:{href:"https://pkg.go.dev/github.com/tendermint/tendermint/light?tab=doc#TrustOptions",target:"_blank",rel:"noopener noreferrer"}},[t._v("Trust Options"),i("OutboundLink")],1),t._v(",\na provider and a set of witnesses. This sets the trust period: the period that\nfull nodes should be accountable for faulty behavior and a trust level: the\nfraction of validators in a validator set with which we trust that at least one\nis correct. As Tendermint consensus can withstand 1/3 byzantine faults, this is\nthe default trust level, however, for greater security you can increase it (max:\n1).")]),t._v(" "),i("p",[t._v("Similar to a full node, light clients can also be subject to byzantine attacks.\nA light client also runs a detector process which cross verifies headers from a\nprimary with witnesses. Therefore light clients should be set with enough witnesses.")]),t._v(" "),i("p",[t._v("If the light client observes a faulty provider it will report it to another provider\nand return an error.")]),t._v(" "),i("p",[t._v("In summary, the light client is not safe when a) more than the trust level of\nvalidators are malicious and b) all witnesses are malicious.")]),t._v(" "),i("p",[t._v("Information on how to run a light client is located in the "),i("RouterLink",{attrs:{to:"/nodes/light-client.html"}},[t._v("nodes section")]),t._v(".")],1)])}),[],!1,null,null,null);e.default=r.exports}}]);