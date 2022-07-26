(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{789:function(t,i,e){"use strict";e.r(i);var n=e(1),a=Object(n.a)({},(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"draft-of-light-client-supervisor-for-discussion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#draft-of-light-client-supervisor-for-discussion"}},[t._v("#")]),t._v(" Draft of Light Client Supervisor for discussion")]),t._v(" "),e("h2",{attrs:{id:"modification-to-the-initialization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#modification-to-the-initialization"}},[t._v("#")]),t._v(" Modification to the initialization")]),t._v(" "),e("p",[t._v("The lightclient is initialized with LCInitData")]),t._v(" "),e("h3",{attrs:{id:"lc-data-init-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lc-data-init-2"}},[t._v("#")]),t._v(" "),e("strong",[t._v("[LC-DATA-INIT.2]")])]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBMQ0luaXREYXRhIHN0cnVjdCB7CiAgICBUcnVzdGVkQmxvY2sgICBMaWdodEJsb2NrCiAgICBHZW5lc2lzICAgICAgICBHZW5lc2lzRG9jCiAgICBUcnVzdGVkSGFzaCAgICBbXWJ5dGUKICAgIFRydXN0ZWRIZWlnaHQgIGludDY0Cn0K"}}),t._v(" "),e("p",[t._v("where only one of the components must be provided. "),e("code",[t._v("GenesisDoc")]),t._v(" is\ndefined in the "),e("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/types/genesis.go",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tendermint\nTypes"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"initialization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#initialization"}},[t._v("#")]),t._v(" Initialization")]),t._v(" "),e("p",[t._v("The light client is based on subjective initialization. It has to\ntrust the initial data given to it by the user. It cannot perform any\ndetection of an attack yet instead requires an initial point of trust.\nThere are three forms of initial data which are used to obtain the\nfirst trusted block:")]),t._v(" "),e("ul",[e("li",[t._v("A trusted block from a prior initialization")]),t._v(" "),e("li",[t._v("A trusted height and hash")]),t._v(" "),e("li",[t._v("A genesis file")])]),t._v(" "),e("p",[t._v("The golang light client implementation checks this initial data in that\norder; first attempting to find a trusted block from the trusted store,\nthen acquiring a light block from the primary at the trusted height and matching\nthe hash, or finally checking for a genesis file to verify the initial header.")]),t._v(" "),e("p",[t._v("The light client doesn't need to check if the trusted block is within the\ntrusted period because it already trusts it, however, if the light block is\noutside the trust period, there is a higher chance the light client won't be\nable to verify anything.")]),t._v(" "),e("p",[t._v("Cross-checking this trusted block with providers upon initialization is helpful\nfor ensuring that the node is responsive and correctly configured but does not\nincrease trust since proving a conflicting block is a\n"),e("a",{attrs:{href:"https://github.com/tendermint/spec/blob/master/spec/light-client/detection/detection_003_reviewed.md#tmbc-lc-attack1",target:"_blank",rel:"noopener noreferrer"}},[t._v("light client attack"),e("OutboundLink")],1),t._v("\nand not just a "),e("a",{attrs:{href:"https://github.com/tendermint/spec/blob/master/spec/light-client/detection/detection_003_reviewed.md#tmbc-bogus1",target:"_blank",rel:"noopener noreferrer"}},[t._v("bogus"),e("OutboundLink")],1),t._v(" block could result in\nperforming backwards verification beyond the trusted period, thus a fruitless\nendeavour.")]),t._v(" "),e("p",[t._v("However, with the notion of it's better to fail earlier than later, the golang\nlight client implementation will perform a consistency check on all providers\nand will error if one returns a different header, allowing the user\nthe opportunity to reinitialize.")]),t._v(" "),e("h4",{attrs:{id:"lc-func-init-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lc-func-init-2"}},[t._v("#")]),t._v(" "),e("strong",[t._v("[LC-FUNC-INIT.2]:")])]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBJbml0TGlnaHRDbGllbnQoaW5pdERhdGEgTENJbml0RGF0YSkgKExpZ2h0U3RvcmUsIEVycm9yKSB7CiAgICB2YXIgaW5pdGlhbEJsb2NrIExpZ2h0QmxvY2sKCiAgICBzd2l0Y2ggewogICAgY2FzZSBMQ0luaXREYXRhLlRydXN0ZWRCbG9jayAhPSBuaWw6CiAgICAgICAgLy8gd2UgdHJ1c3QgdGhlIGJsb2NrIGZyb20gYSBwcmlvciBpbml0aWFsaXphdGlvbgogICAgICAgIGluaXRpYWxCbG9jayA9IExDSW5pdERhdGEuVHJ1c3RlZEJsb2NrCgogICAgY2FzZSBMQ0luaXREYXRhLlRydXN0ZWRIYXNoICE9IG5pbDoKICAgICAgICB1bnRydXN0ZWRCbG9jayA6PSBGZXRjaExpZ2h0QmxvY2soUGVlckxpc3QuUHJpbWFyeSgpLCBMQ0luaXREYXRhLlRydXN0ZWRIZWlnaHQpCiAgICAgICAgCgogICAgICAgIC8vIHZlcmlmeSB0aGF0IHRoZSBoYXNoZXMgbWF0Y2gKICAgICAgICBpZiB1bnRydXN0ZWRCbG9jay5IYXNoKCkgIT0gTENJbml0RGF0YS5UcnVzdGVkSGFzaCB7CiAgICAgICAgICAgIHJldHVybiBuaWwsIEVycm9yKCZxdW90O1ByaW1hcnkgcmV0dXJuZWQgYmxvY2sgd2l0aCBkaWZmZXJlbnQgaGFzaCZxdW90OykKICAgICAgICB9CiAgICAgICAgLy8gYWZ0ZXIgY2hlY2tpbmcgdGhlIGhhc2ggd2Ugbm93IHRydXN0IHRoZSBibG9jawogICAgICAgIGluaXRpYWxCbG9jayA9IHVudHJ1c3RlZEJsb2NrICAgICAgICAKICAgIH0KICAgIGNhc2UgTENJbml0RGF0YS5HZW5lc2lzICE9IG5pbDoKICAgICAgICB1bnRydXN0ZWRCbG9jayA6PSBGZXRjaExpZ2h0QmxvY2soUGVlckxpc3QuUHJpbWFyeSgpLCBMQ0luaXREYXRhLkdlbmVzaXMuSW5pdGlhbEhlaWdodCkKICAgICAgICAKICAgICAgICAvLyB2ZXJpZnkgdGhhdCAyLzMrIG9mIHRoZSB2YWxpZGF0b3Igc2V0IHNpZ25lZCB0aGUgdW50cnVzdGVkQmxvY2sKICAgICAgICBpZiBlcnIgOj0gVmVyaWZ5Q29tbWl0RnVsbCh1bnRydXN0ZWRCbG9jay5Db21taXQsIExDSW5pdERhdGEuR2VuZXNpcy5WYWxpZGF0b3JzKTsgZXJyICE9IG5pbCB7CiAgICAgICAgICAgIHJldHVybiBuaWwsIGVycgogICAgICAgIH0KCiAgICAgICAgLy8gd2UgY2FuIG5vdyB0cnVzdCB0aGUgYmxvY2sKICAgICAgICBpbml0aWFsQmxvY2sgPSB1bnRydXN0ZWRCbG9jawogICAgZGVmYXVsdDoKICAgICAgICByZXR1cm4gbmlsLCBFcnJvcigmcXVvdDtObyBpbml0aWFsIGRhdGEgd2FzIHByb3ZpZGVkJnF1b3Q7KQoKICAgIC8vIFRoaXMgaXMgZG9uZSBpbiB0aGUgZ29sYW5nIHZlcnNpb24gYnV0IGlzIG9wdGlvbmFsIGFuZCBub3Qgc3RyaWN0bHkgcGFydCBvZiB0aGUgcHJvdG9jb2wKICAgIGlmIGVyciA6PSBDcm9zc0NoZWNrKGluaXRpYWxCbG9jaywgUGVlckxpc3QuV2l0bmVzc2VzKCkpOyBlcnIgIT0gbmlsIHsKICAgICAgICByZXR1cm4gbmlsLCBlcnIKICAgIH0KCiAgICAvLyBpbml0aWFsaXplIGxpZ2h0IHN0b3JlCiAgICBsaWdodFN0b3JlIDo9IG5ldyBMaWdodFN0b3JlOwogICAgbGlnaHRTdG9yZS5BZGQobmV3QmxvY2spOwogICAgcmV0dXJuIChsaWdodFN0b3JlLCBPSyk7Cn0KCmZ1bmMgQ3Jvc3NDaGVjayhsYiBMaWdodEJsb2NrLCB3aXRuZXNzZXMgW11Qcm92aWRlcikgZXJyb3IgewogICAgZm9yIF8sIHdpdG5lc3MgOj0gcmFuZ2Ugd2l0bmVzc2VzIHsKICAgICAgICB3aXRuZXNzQmxvY2sgOj0gRmV0Y2hMaWdodEJsb2NrKHdpdG5lc3MsIGxiLkhlaWdodCkKCiAgICAgICAgaWYgd2l0bmVzc0Jsb2NrLkhhc2goKSAhPSBsYi5IYXNoKCkgewogICAgICAgICAgICByZXR1cm4gRXJyb3IoJnF1b3Q7V2l0bmVzcyBoYXMgZGlmZmVyZW50IGJsb2NrJnF1b3Q7KQogICAgICAgIH0KICAgIH0KICAgIHJldHVybiBPSwp9Cgo="}}),t._v(" "),e("ul",[e("li",[t._v("Implementation remark\n"),e("ul",[e("li",[t._v("none")])])]),t._v(" "),e("li",[t._v("Expected precondition\n"),e("ul",[e("li",[e("em",[t._v("LCInitData")]),t._v(" contains either a genesis file of a lightblock")]),t._v(" "),e("li",[t._v("if genesis it passes "),e("code",[t._v("ValidateAndComplete()")]),t._v(" see "),e("a",{attrs:{href:"https://informal.systems",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tendermint"),e("OutboundLink")],1)])])]),t._v(" "),e("li",[t._v("Expected postcondition\n"),e("ul",[e("li",[e("em",[t._v("lightStore")]),t._v(" initialized with trusted lightblock. It has either been\ncross-checked (from genesis) or it has initial trust from the\nuser.")])])]),t._v(" "),e("li",[t._v("Error condition\n"),e("ul",[e("li",[t._v("if precondition is violated")]),t._v(" "),e("li",[t._v("empty peerList")])])])]),t._v(" "),e("hr")],1)}),[],!1,null,null,null);i.default=a.exports}}]);