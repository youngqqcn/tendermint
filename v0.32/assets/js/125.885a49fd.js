(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{665:function(e,t,i){"use strict";i.r(t);var o=i(1),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"methods-and-types"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#methods-and-types"}},[e._v("#")]),e._v(" Methods and Types")]),e._v(" "),i("h2",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),i("p",[e._v("The ABCI message types are defined in a "),i("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/abci/types/types.proto",target:"_blank",rel:"noopener noreferrer"}},[e._v("protobuf\nfile"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("p",[e._v("ABCI methods are split across 3 separate ABCI "),i("em",[e._v("connections")]),e._v(":")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("Consensus Connection")]),e._v(": "),i("code",[e._v("InitChain, BeginBlock, DeliverTx, EndBlock, Commit")])]),e._v(" "),i("li",[i("code",[e._v("Mempool Connection")]),e._v(": "),i("code",[e._v("CheckTx")])]),e._v(" "),i("li",[i("code",[e._v("Info Connection")]),e._v(": "),i("code",[e._v("Info, SetOption, Query")])])]),e._v(" "),i("p",[e._v("The "),i("code",[e._v("Consensus Connection")]),e._v(" is driven by a consensus protocol and is responsible\nfor block execution.\nThe "),i("code",[e._v("Mempool Connection")]),e._v(" is for validating new transactions, before they're\nshared or included in a block.\nThe "),i("code",[e._v("Info Connection")]),e._v(" is for initialization and for queries from the user.")]),e._v(" "),i("p",[e._v("Additionally, there is a "),i("code",[e._v("Flush")]),e._v(" method that is called on every connection,\nand an "),i("code",[e._v("Echo")]),e._v(" method that is just for debugging.")]),e._v(" "),i("p",[e._v("More details on managing state across connections can be found in the section on\n"),i("RouterLink",{attrs:{to:"/spec/abci/apps.html"}},[e._v("ABCI Applications")]),e._v(".")],1),e._v(" "),i("h2",{attrs:{id:"errors"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#errors"}},[e._v("#")]),e._v(" Errors")]),e._v(" "),i("p",[e._v("Some methods ("),i("code",[e._v("Echo, Info, InitChain, BeginBlock, EndBlock, Commit")]),e._v("),\ndon't return errors because an error would indicate a critical failure\nin the application and there's nothing Tendermint can do. The problem\nshould be addressed and both Tendermint and the application restarted.")]),e._v(" "),i("p",[e._v("All other methods ("),i("code",[e._v("SetOption, Query, CheckTx, DeliverTx")]),e._v(") return an\napplication-specific response "),i("code",[e._v("Code uint32")]),e._v(", where only "),i("code",[e._v("0")]),e._v(" is reserved\nfor "),i("code",[e._v("OK")]),e._v(".")]),e._v(" "),i("p",[e._v("Finally, "),i("code",[e._v("Query")]),e._v(", "),i("code",[e._v("CheckTx")]),e._v(", and "),i("code",[e._v("DeliverTx")]),e._v(" include a "),i("code",[e._v("Codespace string")]),e._v(", whose\nintended use is to disambiguate "),i("code",[e._v("Code")]),e._v(" values returned by different domains of the\napplication. The "),i("code",[e._v("Codespace")]),e._v(" is a namespace for the "),i("code",[e._v("Code")]),e._v(".")]),e._v(" "),i("h2",{attrs:{id:"events"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" Events")]),e._v(" "),i("p",[e._v("Some methods ("),i("code",[e._v("CheckTx, BeginBlock, DeliverTx, EndBlock")]),e._v(")\ninclude an "),i("code",[e._v("Events")]),e._v(" field in their "),i("code",[e._v("Response*")]),e._v(". Each event contains a type and a\nlist of attributes, which are key-value pairs denoting something about what happened\nduring the method's execution.")]),e._v(" "),i("p",[e._v("Events can be used to index transactions and blocks according to what happened\nduring their execution. Note that the set of events returned for a block from\n"),i("code",[e._v("BeginBlock")]),e._v(" and "),i("code",[e._v("EndBlock")]),e._v(" are merged. In case both methods return the same\ntag, only the value defined in "),i("code",[e._v("EndBlock")]),e._v(" is used.")]),e._v(" "),i("p",[e._v("Each event has a "),i("code",[e._v("type")]),e._v(" which is meant to categorize the event for a particular\n"),i("code",[e._v("Response*")]),e._v(" or tx. A "),i("code",[e._v("Response*")]),e._v(" or tx may contain multiple events with duplicate\n"),i("code",[e._v("type")]),e._v(" values, where each distinct entry is meant to categorize attributes for a\nparticular event. Every key and value in an event's attributes must be UTF-8\nencoded strings along with the event type itself.")]),e._v(" "),i("p",[e._v("Example:")]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"IGFiY2kuUmVzcG9uc2VEZWxpdmVyVHh7CiAJLy8gLi4uCglFdmVudHM6IFtdYWJjaS5FdmVudHsKCQl7CgkJCVR5cGU6ICZxdW90O3ZhbGlkYXRvci5wcm92aXNpb25zJnF1b3Q7LAoJCQlBdHRyaWJ1dGVzOiBjbW4uS1ZQYWlyc3sKCQkJCWNtbi5LVlBhaXJ7S2V5OiBbXWJ5dGUoJnF1b3Q7YWRkcmVzcyZxdW90OyksIFZhbHVlOiBbXWJ5dGUoJnF1b3Q7Li4uJnF1b3Q7KX0sCgkJCQljbW4uS1ZQYWlye0tleTogW11ieXRlKCZxdW90O2Ftb3VudCZxdW90OyksIFZhbHVlOiBbXWJ5dGUoJnF1b3Q7Li4uJnF1b3Q7KX0sCgkJCQljbW4uS1ZQYWlye0tleTogW11ieXRlKCZxdW90O2JhbGFuY2UmcXVvdDspLCBWYWx1ZTogW11ieXRlKCZxdW90Oy4uLiZxdW90Oyl9LAoJCQl9LAoJCX0sCgkJewoJCQlUeXBlOiAmcXVvdDt2YWxpZGF0b3IucHJvdmlzaW9ucyZxdW90OywKCQkJQXR0cmlidXRlczogY21uLktWUGFpcnN7CgkJCQljbW4uS1ZQYWlye0tleTogW11ieXRlKCZxdW90O2FkZHJlc3MmcXVvdDspLCBWYWx1ZTogW11ieXRlKCZxdW90Oy4uLiZxdW90Oyl9LAoJCQkJY21uLktWUGFpcntLZXk6IFtdYnl0ZSgmcXVvdDthbW91bnQmcXVvdDspLCBWYWx1ZTogW11ieXRlKCZxdW90Oy4uLiZxdW90Oyl9LAoJCQkJY21uLktWUGFpcntLZXk6IFtdYnl0ZSgmcXVvdDtiYWxhbmNlJnF1b3Q7KSwgVmFsdWU6IFtdYnl0ZSgmcXVvdDsuLi4mcXVvdDspfSwKCQkJfSwKCQl9LAoJCXsKCQkJVHlwZTogJnF1b3Q7dmFsaWRhdG9yLnNsYXNoZWQmcXVvdDssCgkJCUF0dHJpYnV0ZXM6IGNtbi5LVlBhaXJzewoJCQkJY21uLktWUGFpcntLZXk6IFtdYnl0ZSgmcXVvdDthZGRyZXNzJnF1b3Q7KSwgVmFsdWU6IFtdYnl0ZSgmcXVvdDsuLi4mcXVvdDspfSwKCQkJCWNtbi5LVlBhaXJ7S2V5OiBbXWJ5dGUoJnF1b3Q7YW1vdW50JnF1b3Q7KSwgVmFsdWU6IFtdYnl0ZSgmcXVvdDsuLi4mcXVvdDspfSwKCQkJCWNtbi5LVlBhaXJ7S2V5OiBbXWJ5dGUoJnF1b3Q7cmVhc29uJnF1b3Q7KSwgVmFsdWU6IFtdYnl0ZSgmcXVvdDsuLi4mcXVvdDspfSwKCQkJfSwKCQl9LAoJCS8vIC4uLgoJfSwKfQo="}}),e._v(" "),i("h2",{attrs:{id:"determinism"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#determinism"}},[e._v("#")]),e._v(" Determinism")]),e._v(" "),i("p",[e._v("ABCI applications must implement deterministic finite-state machines to be\nsecurely replicated by the Tendermint consensus. This means block execution\nover the Consensus Connection must be strictly deterministic: given the same\nordered set of requests, all nodes will compute identical responses, for all\nBeginBlock, DeliverTx, EndBlock, and Commit. This is critical, because the\nresponses are included in the header of the next block, either via a Merkle root\nor directly, so all nodes must agree on exactly what they are.")]),e._v(" "),i("p",[e._v("For this reason, it is recommended that applications not be exposed to any\nexternal user or process except via the ABCI connections to a consensus engine\nlike Tendermint Core. The application must only change its state based on input\nfrom block execution (BeginBlock, DeliverTx, EndBlock, Commit), and not through\nany other kind of request. This is the only way to ensure all nodes see the same\ntransactions and compute the same results.")]),e._v(" "),i("p",[e._v("If there is some non-determinism in the state machine, consensus will eventually\nfail as nodes disagree over the correct values for the block header. The\nnon-determinism must be fixed and the nodes restarted.")]),e._v(" "),i("p",[e._v("Sources of non-determinism in applications may include:")]),e._v(" "),i("ul",[i("li",[e._v("Hardware failures\n"),i("ul",[i("li",[e._v("Cosmic rays, overheating, etc.")])])]),e._v(" "),i("li",[e._v("Node-dependent state\n"),i("ul",[i("li",[e._v("Random numbers")]),e._v(" "),i("li",[e._v("Time")])])]),e._v(" "),i("li",[e._v("Underspecification\n"),i("ul",[i("li",[e._v("Library version changes")]),e._v(" "),i("li",[e._v("Race conditions")]),e._v(" "),i("li",[e._v("Floating point numbers")]),e._v(" "),i("li",[e._v("JSON serialization")]),e._v(" "),i("li",[e._v("Iterating through hash-tables/maps/dictionaries")])])]),e._v(" "),i("li",[e._v("External Sources\n"),i("ul",[i("li",[e._v("Filesystem")]),e._v(" "),i("li",[e._v("Network calls (eg. some external REST API service)")])])])]),e._v(" "),i("p",[e._v("See "),i("a",{attrs:{href:"https://github.com/tendermint/abci/issues/56",target:"_blank",rel:"noopener noreferrer"}},[e._v("#56"),i("OutboundLink")],1),e._v(" for original discussion.")]),e._v(" "),i("p",[e._v("Note that some methods ("),i("code",[e._v("SetOption, Query, CheckTx, DeliverTx")]),e._v(") return\nexplicitly non-deterministic data in the form of "),i("code",[e._v("Info")]),e._v(" and "),i("code",[e._v("Log")]),e._v(" fields. The "),i("code",[e._v("Log")]),e._v(" is\nintended for the literal output from the application's logger, while the\n"),i("code",[e._v("Info")]),e._v(" is any additional info that should be returned. These are the only fields\nthat are not included in block header computations, so we don't need agreement\non them. All other fields in the "),i("code",[e._v("Response*")]),e._v(" must be strictly deterministic.")]),e._v(" "),i("h2",{attrs:{id:"block-execution"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#block-execution"}},[e._v("#")]),e._v(" Block Execution")]),e._v(" "),i("p",[e._v("The first time a new blockchain is started, Tendermint calls\n"),i("code",[e._v("InitChain")]),e._v(". From then on, the following sequence of methods is executed for each\nblock:")]),e._v(" "),i("p",[i("code",[e._v("BeginBlock, [DeliverTx], EndBlock, Commit")])]),e._v(" "),i("p",[e._v("where one "),i("code",[e._v("DeliverTx")]),e._v(" is called for each transaction in the block.\nThe result is an updated application state.\nCryptographic commitments to the results of DeliverTx, EndBlock, and\nCommit are included in the header of the next block.")]),e._v(" "),i("h2",{attrs:{id:"messages"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#messages"}},[e._v("#")]),e._v(" Messages")]),e._v(" "),i("h3",{attrs:{id:"echo"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#echo"}},[e._v("#")]),e._v(" Echo")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Request")]),e._v(":\n"),i("ul",[i("li",[i("code",[e._v("Message (string)")]),e._v(": A string to echo back")])])]),e._v(" "),i("li",[i("strong",[e._v("Response")]),e._v(":\n"),i("ul",[i("li",[i("code",[e._v("Message (string)")]),e._v(": The input string")])])]),e._v(" "),i("li",[i("strong",[e._v("Usage")]),e._v(":\n"),i("ul",[i("li",[e._v("Echo a string to test an abci client/server implementation")])])])]),e._v(" "),i("h3",{attrs:{id:"flush"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#flush"}},[e._v("#")]),e._v(" Flush")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Usage")]),e._v(":\n"),i("ul",[i("li",[e._v("Signals that messages queued on the client should be flushed to\nthe server. It is called periodically by the client\nimplementation to ensure asynchronous requests are actually\nsent, and is called immediately to make a synchronous request,\nwhich returns when the Flush response comes back.")])])])]),e._v(" "),i("h3",{attrs:{id:"info"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#info"}},[e._v("#")]),e._v(" Info")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Request")]),e._v(":\n"),i("ul",[i("li",[i("code",[e._v("Version (string)")]),e._v(": The Tendermint software semantic version")]),e._v(" "),i("li",[i("code",[e._v("BlockVersion (uint64)")]),e._v(": The Tendermint Block Protocol version")]),e._v(" "),i("li",[i("code",[e._v("P2PVersion (uint64)")]),e._v(": The Tendermint P2P Protocol version")])])]),e._v(" "),i("li",[i("strong",[e._v("Response")]),e._v(":\n"),i("ul",[i("li",[i("code",[e._v("Data (string)")]),e._v(": Some arbitrary information")]),e._v(" "),i("li",[i("code",[e._v("Version (string)")]),e._v(": The application software semantic version")]),e._v(" "),i("li",[i("code",[e._v("AppVersion (uint64)")]),e._v(": The application protocol version")]),e._v(" "),i("li",[i("code",[e._v("LastBlockHeight (int64)")]),e._v(": Latest block for which the app has\ncalled Commit")]),e._v(" "),i("li",[i("code",[e._v("LastBlockAppHash ([]byte)")]),e._v(": Latest result of Commit")])])]),e._v(" "),i("li",[i("strong",[e._v("Usage")]),e._v(":\n"),i("ul",[i("li",[e._v("Return information about the application state.")]),e._v(" "),i("li",[e._v("Used to sync Tendermint with the application during a handshake\nthat happens on startup.")]),e._v(" "),i("li",[e._v("The returned "),i("code",[e._v("AppVersion")]),e._v(" will be included in the Header of every block.")]),e._v(" "),i("li",[e._v("Tendermint expects "),i("code",[e._v("LastBlockAppHash")]),e._v(" and "),i("code",[e._v("LastBlockHeight")]),e._v(" to\nbe updated during "),i("code",[e._v("Commit")]),e._v(", ensuring that "),i("code",[e._v("Commit")]),e._v(" is never\ncalled twice for the same block height.")])])])]),e._v(" "),i("h3",{attrs:{id:"setoption"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#setoption"}},[e._v("#")]),e._v(" SetOption")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Request")]),e._v(":\n"),i("ul",[i("li",[i("code",[e._v("Key (string)")]),e._v(": Key to set")]),e._v(" "),i("li",[i("code",[e._v("Value (string)")]),e._v(": Value to set for key")])])]),e._v(" "),i("li",[i("strong",[e._v("Response")]),e._v(":\n"),i("ul",[i("li",[i("code",[e._v("Code (uint32)")]),e._v(": Response code")]),e._v(" "),i("li",[i("code",[e._v("Log (string)")]),e._v(": The output of the application's logger. May\nbe non-deterministic.")]),e._v(" "),i("li",[i("code",[e._v("Info (string)")]),e._v(": Additional information. May\nbe non-deterministic.")])])]),e._v(" "),i("li",[i("strong",[e._v("Usage")]),e._v(":\n"),i("ul",[i("li",[e._v("Set non-consensus critical application specific options.")]),e._v(" "),i("li",[e._v('e.g. Key="min-fee", Value="100fermion" could set the minimum fee\nrequired for CheckTx (but not DeliverTx - that would be\nconsensus critical).')])])])]),e._v(" "),i("h3",{attrs:{id:"initchain"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#initchain"}},[e._v("#")]),e._v(" InitChain")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Request")]),e._v(":\n"),i("ul",[i("li",[i("code",[e._v("Time (google.protobuf.Timestamp)")]),e._v(": Genesis time.")]),e._v(" "),i("li",[i("code",[e._v("ChainID (string)")]),e._v(": ID of the blockchain.")]),e._v(" "),i("li",[i("code",[e._v("ConsensusParams (ConsensusParams)")]),e._v(": Initial consensus-critical parameters.")]),e._v(" "),i("li",[i("code",[e._v("Validators ([]ValidatorUpdate)")]),e._v(": Initial genesis validators.")]),e._v(" "),i("li",[i("code",[e._v("AppStateBytes ([]byte)")]),e._v(": Serialized initial application state. Amino-encoded JSON bytes.")])])]),e._v(" "),i("li",[i("strong",[e._v("Response")]),e._v(":\n"),i("ul",[i("li",[i("code",[e._v("ConsensusParams (ConsensusParams)")]),e._v(": Initial\nconsensus-critical parameters.")]),e._v(" "),i("li",[i("code",[e._v("Validators ([]ValidatorUpdate)")]),e._v(": Initial validator set (if non empty).")])])]),e._v(" "),i("li",[i("strong",[e._v("Usage")]),e._v(":\n"),i("ul",[i("li",[e._v("Called once upon genesis.")]),e._v(" "),i("li",[e._v("If ResponseInitChain.Validators is empty, the initial validator set will be the RequestInitChain.Validators")]),e._v(" "),i("li",[e._v("If ResponseInitChain.Validators is not empty, the initial validator set will be the\nResponseInitChain.Validators (regardless of what is in RequestInitChain.Validators).")]),e._v(" "),i("li",[e._v("This allows the app to decide if it wants to accept the initial validator\nset proposed by tendermint (ie. in the genesis file), or if it wants to use\na different one (perhaps computed based on some application specific\ninformation in the genesis file).")])])])]),e._v(" "),i("h3",{attrs:{id:"query"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#query"}},[e._v("#")]),e._v(" Query")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Request")]),e._v(":\n"),i("ul",[i("li",[i("code",[e._v("Data ([]byte)")]),e._v(": Raw query bytes. Can be used with or in lieu\nof Path.")]),e._v(" "),i("li",[i("code",[e._v("Path (string)")]),e._v(": Path of request, like an HTTP GET path. Can be\nused with or in liue of Data.\n"),i("ul",[i("li",[e._v("Apps MUST interpret '/store' as a query by key on the\nunderlying store. The key SHOULD be specified in the Data field.")]),e._v(" "),i("li",[e._v("Apps SHOULD allow queries over specific types like\n'/accounts/...' or '/votes/...'")])])]),e._v(" "),i("li",[i("code",[e._v("Height (int64)")]),e._v(": The block height for which you want the query\n(default=0 returns data for the latest committed block). Note\nthat this is the height of the block containing the\napplication's Merkle root hash, which represents the state as it\nwas after committing the block at Height-1")]),e._v(" "),i("li",[i("code",[e._v("Prove (bool)")]),e._v(": Return Merkle proof with response if possible")])])]),e._v(" "),i("li",[i("strong",[e._v("Response")]),e._v(":\n"),i("ul",[i("li",[i("code",[e._v("Code (uint32)")]),e._v(": Response code.")]),e._v(" "),i("li",[i("code",[e._v("Log (string)")]),e._v(": The output of the application's logger. May\nbe non-deterministic.")]),e._v(" "),i("li",[i("code",[e._v("Info (string)")]),e._v(": Additional information. May\nbe non-deterministic.")]),e._v(" "),i("li",[i("code",[e._v("Index (int64)")]),e._v(": The index of the key in the tree.")]),e._v(" "),i("li",[i("code",[e._v("Key ([]byte)")]),e._v(": The key of the matching data.")]),e._v(" "),i("li",[i("code",[e._v("Value ([]byte)")]),e._v(": The value of the matching data.")]),e._v(" "),i("li",[i("code",[e._v("Proof (Proof)")]),e._v(": Serialized proof for the value data, if requested, to be\nverified against the "),i("code",[e._v("AppHash")]),e._v(" for the given Height.")]),e._v(" "),i("li",[i("code",[e._v("Height (int64)")]),e._v(": The block height from which data was derived.\nNote that this is the height of the block containing the\napplication's Merkle root hash, which represents the state as it\nwas after committing the block at Height-1")]),e._v(" "),i("li",[i("code",[e._v("Codespace (string)")]),e._v(": Namespace for the "),i("code",[e._v("Code")]),e._v(".")])])]),e._v(" "),i("li",[i("strong",[e._v("Usage")]),e._v(":\n"),i("ul",[i("li",[e._v("Query for data from the application at current or past height.")]),e._v(" "),i("li",[e._v("Optionally return Merkle proof.")]),e._v(" "),i("li",[e._v("Merkle proof includes self-describing "),i("code",[e._v("type")]),e._v(" field to support many types\nof Merkle trees and encoding formats.")])])])]),e._v(" "),i("h3",{attrs:{id:"beginblock"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#beginblock"}},[e._v("#")]),e._v(" BeginBlock")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Request")]),e._v(":\n"),i("ul",[i("li",[i("code",[e._v("Hash ([]byte)")]),e._v(": The block's hash. This can be derived from the\nblock header.")]),e._v(" "),i("li",[i("code",[e._v("Header (struct{})")]),e._v(": The block header.")]),e._v(" "),i("li",[i("code",[e._v("LastCommitInfo (LastCommitInfo)")]),e._v(": Info about the last commit, including the\nround, and the list of validators and which ones signed the last block.")]),e._v(" "),i("li",[i("code",[e._v("ByzantineValidators ([]Evidence)")]),e._v(": List of evidence of\nvalidators that acted maliciously.")])])]),e._v(" "),i("li",[i("strong",[e._v("Response")]),e._v(":\n"),i("ul",[i("li",[i("code",[e._v("Tags ([]cmn.KVPair)")]),e._v(": Key-Value tags for filtering and indexing")])])]),e._v(" "),i("li",[i("strong",[e._v("Usage")]),e._v(":\n"),i("ul",[i("li",[e._v("Signals the beginning of a new block. Called prior to\nany DeliverTxs.")]),e._v(" "),i("li",[e._v("The header contains the height, timestamp, and more - it exactly matches the\nTendermint block header. We may seek to generalize this in the future.")]),e._v(" "),i("li",[e._v("The "),i("code",[e._v("LastCommitInfo")]),e._v(" and "),i("code",[e._v("ByzantineValidators")]),e._v(" can be used to determine\nrewards and punishments for the validators. NOTE validators here do not\ninclude pubkeys.")])])])]),e._v(" "),i("h3",{attrs:{id:"checktx"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#checktx"}},[e._v("#")]),e._v(" CheckTx")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Request")]),e._v(":\n"),i("ul",[i("li",[i("code",[e._v("Tx ([]byte)")]),e._v(": The request transaction bytes")]),e._v(" "),i("li",[i("code",[e._v("Type (CheckTxType)")]),e._v(": What type of "),i("code",[e._v("CheckTx")]),e._v(" request is this? At present,\nthere are two possible values: "),i("code",[e._v("CheckTx_New")]),e._v(" (the default, which says\nthat a full check is required), and "),i("code",[e._v("CheckTx_Recheck")]),e._v(" (when the mempool is\ninitiating a normal recheck of a transaction).")])])]),e._v(" "),i("li",[i("strong",[e._v("Response")]),e._v(":\n"),i("ul",[i("li",[i("code",[e._v("Code (uint32)")]),e._v(": Response code")]),e._v(" "),i("li",[i("code",[e._v("Data ([]byte)")]),e._v(": Result bytes, if any.")]),e._v(" "),i("li",[i("code",[e._v("Log (string)")]),e._v(": The output of the application's logger. May\nbe non-deterministic.")]),e._v(" "),i("li",[i("code",[e._v("Info (string)")]),e._v(": Additional information. May\nbe non-deterministic.")]),e._v(" "),i("li",[i("code",[e._v("GasWanted (int64)")]),e._v(": Amount of gas requested for transaction.")]),e._v(" "),i("li",[i("code",[e._v("GasUsed (int64)")]),e._v(": Amount of gas consumed by transaction.")]),e._v(" "),i("li",[i("code",[e._v("Tags ([]cmn.KVPair)")]),e._v(": Key-Value tags for filtering and indexing\ntransactions (eg. by account).")]),e._v(" "),i("li",[i("code",[e._v("Codespace (string)")]),e._v(": Namespace for the "),i("code",[e._v("Code")]),e._v(".")])])]),e._v(" "),i("li",[i("strong",[e._v("Usage")]),e._v(":\n"),i("ul",[i("li",[e._v("Technically optional - not involved in processing blocks.")]),e._v(" "),i("li",[e._v("Guardian of the mempool: every node runs CheckTx before letting a\ntransaction into its local mempool.")]),e._v(" "),i("li",[e._v("The transaction may come from an external user or another node")]),e._v(" "),i("li",[e._v("CheckTx need not execute the transaction in full, but rather a light-weight\nyet stateful validation, like checking signatures and account balances, but\nnot running code in a virtual machine.")]),e._v(" "),i("li",[e._v("Transactions where "),i("code",[e._v("ResponseCheckTx.Code != 0")]),e._v(" will be rejected - they will not be broadcast to\nother nodes or included in a proposal block.")]),e._v(" "),i("li",[e._v("Tendermint attributes no other value to the response code")])])])]),e._v(" "),i("h3",{attrs:{id:"delivertx"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#delivertx"}},[e._v("#")]),e._v(" DeliverTx")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Request")]),e._v(":\n"),i("ul",[i("li",[i("code",[e._v("Tx ([]byte)")]),e._v(": The request transaction bytes.")])])]),e._v(" "),i("li",[i("strong",[e._v("Response")]),e._v(":\n"),i("ul",[i("li",[i("code",[e._v("Code (uint32)")]),e._v(": Response code.")]),e._v(" "),i("li",[i("code",[e._v("Data ([]byte)")]),e._v(": Result bytes, if any.")]),e._v(" "),i("li",[i("code",[e._v("Log (string)")]),e._v(": The output of the application's logger. May\nbe non-deterministic.")]),e._v(" "),i("li",[i("code",[e._v("Info (string)")]),e._v(": Additional information. May\nbe non-deterministic.")]),e._v(" "),i("li",[i("code",[e._v("GasWanted (int64)")]),e._v(": Amount of gas requested for transaction.")]),e._v(" "),i("li",[i("code",[e._v("GasUsed (int64)")]),e._v(": Amount of gas consumed by transaction.")]),e._v(" "),i("li",[i("code",[e._v("Tags ([]cmn.KVPair)")]),e._v(": Key-Value tags for filtering and indexing\ntransactions (eg. by account).")]),e._v(" "),i("li",[i("code",[e._v("Codespace (string)")]),e._v(": Namespace for the "),i("code",[e._v("Code")]),e._v(".")])])]),e._v(" "),i("li",[i("strong",[e._v("Usage")]),e._v(":\n"),i("ul",[i("li",[e._v("The workhorse of the application - non-optional.")]),e._v(" "),i("li",[e._v("Execute the transaction in full.")]),e._v(" "),i("li",[i("code",[e._v("ResponseDeliverTx.Code == 0")]),e._v(" only if the transaction is fully valid.")])])])]),e._v(" "),i("h3",{attrs:{id:"endblock"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#endblock"}},[e._v("#")]),e._v(" EndBlock")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Request")]),e._v(":\n"),i("ul",[i("li",[i("code",[e._v("Height (int64)")]),e._v(": Height of the block just executed.")])])]),e._v(" "),i("li",[i("strong",[e._v("Response")]),e._v(":\n"),i("ul",[i("li",[i("code",[e._v("ValidatorUpdates ([]ValidatorUpdate)")]),e._v(": Changes to validator set (set\nvoting power to 0 to remove).")]),e._v(" "),i("li",[i("code",[e._v("ConsensusParamUpdates (ConsensusParams)")]),e._v(": Changes to\nconsensus-critical time, size, and other parameters.")]),e._v(" "),i("li",[i("code",[e._v("Tags ([]cmn.KVPair)")]),e._v(": Key-Value tags for filtering and indexing")])])]),e._v(" "),i("li",[i("strong",[e._v("Usage")]),e._v(":\n"),i("ul",[i("li",[e._v("Signals the end of a block.")]),e._v(" "),i("li",[e._v("Called after all transactions, prior to each Commit.")]),e._v(" "),i("li",[e._v("Validator updates returned by block "),i("code",[e._v("H")]),e._v(" impact blocks "),i("code",[e._v("H+1")]),e._v(", "),i("code",[e._v("H+2")]),e._v(", and\n"),i("code",[e._v("H+3")]),e._v(", but only effects changes on the validator set of "),i("code",[e._v("H+2")]),e._v(":\n"),i("ul",[i("li",[i("code",[e._v("H+1")]),e._v(": NextValidatorsHash")]),e._v(" "),i("li",[i("code",[e._v("H+2")]),e._v(": ValidatorsHash (and thus the validator set)")]),e._v(" "),i("li",[i("code",[e._v("H+3")]),e._v(": LastCommitInfo (ie. the last validator set)")])])]),e._v(" "),i("li",[e._v("Consensus params returned for block "),i("code",[e._v("H")]),e._v(" apply for block "),i("code",[e._v("H+1")])])])])]),e._v(" "),i("h3",{attrs:{id:"commit"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#commit"}},[e._v("#")]),e._v(" Commit")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Response")]),e._v(":\n"),i("ul",[i("li",[i("code",[e._v("Data ([]byte)")]),e._v(": The Merkle root hash of the application state")])])]),e._v(" "),i("li",[i("strong",[e._v("Usage")]),e._v(":\n"),i("ul",[i("li",[e._v("Persist the application state.")]),e._v(" "),i("li",[e._v("Return an (optional) Merkle root hash of the application state")]),e._v(" "),i("li",[i("code",[e._v("ResponseCommit.Data")]),e._v(" is included as the "),i("code",[e._v("Header.AppHash")]),e._v(" in the next block\n"),i("ul",[i("li",[e._v("it may be empty")])])]),e._v(" "),i("li",[e._v("Later calls to "),i("code",[e._v("Query")]),e._v(" can return proofs about the application state anchored\nin this Merkle root hash")]),e._v(" "),i("li",[e._v("Note developers can return whatever they want here (could be nothing, or a\nconstant string, etc.), so long as it is deterministic - it must not be a\nfunction of anything that did not come from the\nBeginBlock/DeliverTx/EndBlock methods.")])])])]),e._v(" "),i("h2",{attrs:{id:"data-types"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#data-types"}},[e._v("#")]),e._v(" Data Types")]),e._v(" "),i("h3",{attrs:{id:"header"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#header"}},[e._v("#")]),e._v(" Header")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Fields")]),e._v(":\n"),i("ul",[i("li",[i("code",[e._v("Version (Version)")]),e._v(": Version of the blockchain and the application")]),e._v(" "),i("li",[i("code",[e._v("ChainID (string)")]),e._v(": ID of the blockchain")]),e._v(" "),i("li",[i("code",[e._v("Height (int64)")]),e._v(": Height of the block in the chain")]),e._v(" "),i("li",[i("code",[e._v("Time (google.protobuf.Timestamp)")]),e._v(": Time of the previous block.\nFor heights > 1, it's the weighted median of the timestamps of the valid\nvotes in the block.LastCommit.\nFor height == 1, it's genesis time.")]),e._v(" "),i("li",[i("code",[e._v("NumTxs (int32)")]),e._v(": Number of transactions in the block")]),e._v(" "),i("li",[i("code",[e._v("TotalTxs (int64)")]),e._v(": Total number of transactions in the blockchain until\nnow")]),e._v(" "),i("li",[i("code",[e._v("LastBlockID (BlockID)")]),e._v(": Hash of the previous (parent) block")]),e._v(" "),i("li",[i("code",[e._v("LastCommitHash ([]byte)")]),e._v(": Hash of the previous block's commit")]),e._v(" "),i("li",[i("code",[e._v("ValidatorsHash ([]byte)")]),e._v(": Hash of the validator set for this block")]),e._v(" "),i("li",[i("code",[e._v("NextValidatorsHash ([]byte)")]),e._v(": Hash of the validator set for the next block")]),e._v(" "),i("li",[i("code",[e._v("ConsensusHash ([]byte)")]),e._v(": Hash of the consensus parameters for this block")]),e._v(" "),i("li",[i("code",[e._v("AppHash ([]byte)")]),e._v(": Data returned by the last call to "),i("code",[e._v("Commit")]),e._v(" - typically the\nMerkle root of the application state after executing the previous block's\ntransactions")]),e._v(" "),i("li",[i("code",[e._v("LastResultsHash ([]byte)")]),e._v(": Hash of the ABCI results returned by the last block")]),e._v(" "),i("li",[i("code",[e._v("EvidenceHash ([]byte)")]),e._v(": Hash of the evidence included in this block")]),e._v(" "),i("li",[i("code",[e._v("ProposerAddress ([]byte)")]),e._v(": Original proposer for the block")])])]),e._v(" "),i("li",[i("strong",[e._v("Usage")]),e._v(":\n"),i("ul",[i("li",[e._v("Provided in RequestBeginBlock")]),e._v(" "),i("li",[e._v("Provides important context about the current state of the blockchain -\nespecially height and time.")]),e._v(" "),i("li",[e._v("Provides the proposer of the current block, for use in proposer-based\nreward mechanisms.")])])])]),e._v(" "),i("h3",{attrs:{id:"version"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" Version")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Fields")]),e._v(":\n"),i("ul",[i("li",[i("code",[e._v("Block (uint64)")]),e._v(": Protocol version of the blockchain data structures.")]),e._v(" "),i("li",[i("code",[e._v("App (uint64)")]),e._v(": Protocol version of the application.")])])]),e._v(" "),i("li",[i("strong",[e._v("Usage")]),e._v(":\n"),i("ul",[i("li",[e._v("Block version should be static in the life of a blockchain.")]),e._v(" "),i("li",[e._v("App version may be updated over time by the application.")])])])]),e._v(" "),i("h3",{attrs:{id:"validator"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#validator"}},[e._v("#")]),e._v(" Validator")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Fields")]),e._v(":\n"),i("ul",[i("li",[i("code",[e._v("Address ([]byte)")]),e._v(": Address of the validator (hash of the public key)")]),e._v(" "),i("li",[i("code",[e._v("Power (int64)")]),e._v(": Voting power of the validator")])])]),e._v(" "),i("li",[i("strong",[e._v("Usage")]),e._v(":\n"),i("ul",[i("li",[e._v("Validator identified by address")]),e._v(" "),i("li",[e._v("Used in RequestBeginBlock as part of VoteInfo")]),e._v(" "),i("li",[e._v("Does not include PubKey to avoid sending potentially large quantum pubkeys\nover the ABCI")])])])]),e._v(" "),i("h3",{attrs:{id:"validatorupdate"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#validatorupdate"}},[e._v("#")]),e._v(" ValidatorUpdate")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Fields")]),e._v(":\n"),i("ul",[i("li",[i("code",[e._v("PubKey (PubKey)")]),e._v(": Public key of the validator")]),e._v(" "),i("li",[i("code",[e._v("Power (int64)")]),e._v(": Voting power of the validator")])])]),e._v(" "),i("li",[i("strong",[e._v("Usage")]),e._v(":\n"),i("ul",[i("li",[e._v("Validator identified by PubKey")]),e._v(" "),i("li",[e._v("Used to tell Tendermint to update the validator set")])])])]),e._v(" "),i("h3",{attrs:{id:"voteinfo"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#voteinfo"}},[e._v("#")]),e._v(" VoteInfo")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Fields")]),e._v(":\n"),i("ul",[i("li",[i("code",[e._v("Validator (Validator)")]),e._v(": A validator")]),e._v(" "),i("li",[i("code",[e._v("SignedLastBlock (bool)")]),e._v(": Indicates whether or not the validator signed\nthe last block")])])]),e._v(" "),i("li",[i("strong",[e._v("Usage")]),e._v(":\n"),i("ul",[i("li",[e._v("Indicates whether a validator signed the last block, allowing for rewards\nbased on validator availability")])])])]),e._v(" "),i("h3",{attrs:{id:"pubkey"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#pubkey"}},[e._v("#")]),e._v(" PubKey")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Fields")]),e._v(":\n"),i("ul",[i("li",[i("code",[e._v("Type (string)")]),e._v(": Type of the public key. A simple string like "),i("code",[e._v('"ed25519"')]),e._v(".\nIn the future, may indicate a serialization algorithm to parse the "),i("code",[e._v("Data")]),e._v(",\nfor instance "),i("code",[e._v('"amino"')]),e._v(".")]),e._v(" "),i("li",[i("code",[e._v("Data ([]byte)")]),e._v(": Public key data. For a simple public key, it's just the\nraw bytes. If the "),i("code",[e._v("Type")]),e._v(" indicates an encoding algorithm, this is the\nencoded public key.")])])]),e._v(" "),i("li",[i("strong",[e._v("Usage")]),e._v(":\n"),i("ul",[i("li",[e._v("A generic and extensible typed public key")])])])]),e._v(" "),i("h3",{attrs:{id:"evidence"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#evidence"}},[e._v("#")]),e._v(" Evidence")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Fields")]),e._v(":\n"),i("ul",[i("li",[i("code",[e._v("Type (string)")]),e._v(': Type of the evidence. A hierarchical path like\n"duplicate/vote".')]),e._v(" "),i("li",[i("code",[e._v("Validator (Validator")]),e._v(": The offending validator")]),e._v(" "),i("li",[i("code",[e._v("Height (int64)")]),e._v(": Height when the offense was committed")]),e._v(" "),i("li",[i("code",[e._v("Time (google.protobuf.Timestamp)")]),e._v(": Time of the block at height "),i("code",[e._v("Height")]),e._v(".\nIt is the proposer's local time when block was created.")]),e._v(" "),i("li",[i("code",[e._v("TotalVotingPower (int64)")]),e._v(": Total voting power of the validator set at\nheight "),i("code",[e._v("Height")])])])])]),e._v(" "),i("h3",{attrs:{id:"lastcommitinfo"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#lastcommitinfo"}},[e._v("#")]),e._v(" LastCommitInfo")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Fields")]),e._v(":\n"),i("ul",[i("li",[i("code",[e._v("Round (int32)")]),e._v(": Commit round.")]),e._v(" "),i("li",[i("code",[e._v("Votes ([]VoteInfo)")]),e._v(": List of validators addresses in the last validator set\nwith their voting power and whether or not they signed a vote.")])])])]),e._v(" "),i("h3",{attrs:{id:"consensusparams"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#consensusparams"}},[e._v("#")]),e._v(" ConsensusParams")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Fields")]),e._v(":\n"),i("ul",[i("li",[i("code",[e._v("Block (BlockParams)")]),e._v(": Parameters limiting the size of a block and time between consecutive blocks.")]),e._v(" "),i("li",[i("code",[e._v("Evidence (EvidenceParams)")]),e._v(": Parameters limiting the validity of\nevidence of byzantine behaviour.")]),e._v(" "),i("li",[i("code",[e._v("Validator (ValidatorParams)")]),e._v(": Parameters limitng the types of pubkeys validators can use.")])])])]),e._v(" "),i("h3",{attrs:{id:"blockparams"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#blockparams"}},[e._v("#")]),e._v(" BlockParams")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Fields")]),e._v(":\n"),i("ul",[i("li",[i("code",[e._v("MaxBytes (int64)")]),e._v(": Max size of a block, in bytes.")]),e._v(" "),i("li",[i("code",[e._v("MaxGas (int64)")]),e._v(": Max sum of "),i("code",[e._v("GasWanted")]),e._v(" in a proposed block.\n"),i("ul",[i("li",[e._v("NOTE: blocks that violate this may be committed if there are Byzantine proposers.\nIt's the application's responsibility to handle this when processing a\nblock!")])])])])])]),e._v(" "),i("h3",{attrs:{id:"evidenceparams"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#evidenceparams"}},[e._v("#")]),e._v(" EvidenceParams")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Fields")]),e._v(":\n"),i("ul",[i("li",[i("code",[e._v("MaxAge (int64)")]),e._v(": Max age of evidence, in blocks. Evidence older than this\nis considered stale and ignored.\n"),i("ul",[i("li",[e._v('This should correspond with an app\'s "unbonding period" or other\nsimilar mechanism for handling Nothing-At-Stake attacks.')]),e._v(" "),i("li",[e._v("NOTE: this should change to time (instead of blocks)!")])])])])])]),e._v(" "),i("h3",{attrs:{id:"validatorparams"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#validatorparams"}},[e._v("#")]),e._v(" ValidatorParams")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Fields")]),e._v(":\n"),i("ul",[i("li",[i("code",[e._v("PubKeyTypes ([]string)")]),e._v(": List of accepted pubkey types. Uses same\nnaming as "),i("code",[e._v("PubKey.Type")]),e._v(".")])])])]),e._v(" "),i("h3",{attrs:{id:"proof"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#proof"}},[e._v("#")]),e._v(" Proof")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Fields")]),e._v(":\n"),i("ul",[i("li",[i("code",[e._v("Ops ([]ProofOp)")]),e._v(": List of chained Merkle proofs, of possibly different types\n"),i("ul",[i("li",[e._v("The Merkle root of one op is the value being proven in the next op.")]),e._v(" "),i("li",[e._v("The Merkle root of the final op should equal the ultimate root hash being\nverified against.")])])])])])]),e._v(" "),i("h3",{attrs:{id:"proofop"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#proofop"}},[e._v("#")]),e._v(" ProofOp")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Fields")]),e._v(":\n"),i("ul",[i("li",[i("code",[e._v("Type (string)")]),e._v(": Type of Merkle proof and how it's encoded.")]),e._v(" "),i("li",[i("code",[e._v("Key ([]byte)")]),e._v(": Key in the Merkle tree that this proof is for.")]),e._v(" "),i("li",[i("code",[e._v("Data ([]byte)")]),e._v(": Encoded Merkle proof for the key.")])])])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);