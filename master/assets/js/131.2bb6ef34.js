(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{698:function(e,t,s){"use strict";s.r(t);var a=s(1),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"adr-068-reverse-sync"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adr-068-reverse-sync"}},[e._v("#")]),e._v(" ADR 068: Reverse Sync")]),e._v(" "),s("h2",{attrs:{id:"changelog"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),s("ul",[s("li",[e._v("20 April 2021: Initial Draft (@cmwaters)")])]),e._v(" "),s("h2",{attrs:{id:"status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),s("p",[e._v("Accepted")]),e._v(" "),s("h2",{attrs:{id:"context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),s("p",[e._v("The advent of state sync and block pruning gave rise to the opportunity for full nodes to participate in consensus without needing complete block history. This also introduced a problem with respect to evidence handling. Nodes that didn't have all the blocks within the evidence age were incapable of validating evidence, thus halting if that evidence was committed on chain.")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/docs/architecture/adr-068-reverse-sync.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADR 068"),s("OutboundLink")],1),e._v(" was published in response to this problem and modified the spec to add a minimum block history invariant. This predominantly sought to extend state sync so that it was capable of fetching and storing the "),s("code",[e._v("Header")]),e._v(", "),s("code",[e._v("Commit")]),e._v(" and "),s("code",[e._v("ValidatorSet")]),e._v(" (essentially a "),s("code",[e._v("LightBlock")]),e._v(") of the last "),s("code",[e._v("n")]),e._v(" heights, where "),s("code",[e._v("n")]),e._v(" was calculated based from the evidence age.")]),e._v(" "),s("p",[e._v("This ADR sets out to describe the design of this state sync extension as well as modifications to the light client provider and the merging of tm store.")]),e._v(" "),s("h2",{attrs:{id:"decision"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),s("p",[e._v("The state sync reactor will be extended by introducing 2 new P2P messages (and a new channel).")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBMaWdodEJsb2NrUmVxdWVzdCB7CiAgdWludDY0IGhlaWdodCA9IDE7Cn0KCm1lc3NhZ2UgTGlnaHRCbG9ja1Jlc3BvbnNlIHsKICB0ZW5kZXJtaW50LnR5cGVzLkxpZ2h0QmxvY2sgbGlnaHRfYmxvY2sgPSAxOwp9Cg=="}}),e._v(" "),s("p",[e._v('This will be used by the "reverse sync" protocol that will fetch, verify and store prior light blocks such that the node can safely participate in consensus.')]),e._v(" "),s("p",[e._v("Furthermore this allows for a new light client provider which offers the ability for the "),s("code",[e._v("StateProvider")]),e._v(" to use the underlying P2P stack instead of RPC.")]),e._v(" "),s("h2",{attrs:{id:"detailed-design"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#detailed-design"}},[e._v("#")]),e._v(" Detailed Design")]),e._v(" "),s("p",[e._v("This section will focus first on the reverse sync (here we call it "),s("code",[e._v("backfill")]),e._v(") mechanism as a standalone protocol and then look to decribe how it integrates within the state sync reactor and how we define the new p2p light client provider.")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQmFja2ZpbGwgZmV0Y2hlcywgdmVyaWZpZXMsIGFuZCBzdG9yZXMgbmVjZXNzYXJ5IGhpc3RvcnkKLy8gdG8gcGFydGljaXBhdGUgaW4gY29uc2Vuc3VzIGFuZCB2YWxpZGF0ZSBldmlkZW5jZS4KZnVuYyAociAqUmVhY3RvcikgYmFja2ZpbGwoc3RhdGUgU3RhdGUpIGVycm9yIHt9Cg=="}}),e._v(" "),s("p",[s("code",[e._v("State")]),e._v(" is used to work out how far to go back, namely we need all light blocks that have:")]),e._v(" "),s("ul",[s("li",[e._v("a height: "),s("code",[e._v("h >= state.LastBlockHeight - state.ConsensusParams.Evidence.MaxAgeNumBlocks")])]),e._v(" "),s("li",[e._v("a time: "),s("code",[e._v("t >= state.LastBlockTime - state.ConsensusParams.Evidence.MaxAgeDuration")])])]),e._v(" "),s("p",[e._v("Reverse Sync relies on two components: A "),s("code",[e._v("Dispatcher")]),e._v(" and a "),s("code",[e._v("BlockQueue")]),e._v(". The "),s("code",[e._v("Dispatcher")]),e._v(" is a pattern taken from a similar "),s("a",{attrs:{href:"https://github.com/tendermint/tendermint/pull/4508",target:"_blank",rel:"noopener noreferrer"}},[e._v("PR"),s("OutboundLink")],1),e._v(". It is wired to the "),s("code",[e._v("LightBlockChannel")]),e._v(" and allows for concurrent light block requests by shifting through a linked list of peers. This abstraction has the nice quality that it can also be used as an array of light providers for a P2P based light client.")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("BlockQueue")]),e._v(" is a data structure that allows for multiple workers to fetch light blocks, serializing them for the main thread which picks them off the end of the queue, verifies the hashes and persists them.")]),e._v(" "),s("h3",{attrs:{id:"integration-with-state-sync"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#integration-with-state-sync"}},[e._v("#")]),e._v(" Integration with State Sync")]),e._v(" "),s("p",[e._v("Reverse sync is a blocking process that runs directly after syncing state and before transitioning into either fast sync or consensus.")]),e._v(" "),s("p",[e._v("Prior, the state sync service was not connected to any db, instead it passed the state and commit back to the node. For reverse sync, state sync will be given access to both the "),s("code",[e._v("StateStore")]),e._v(" and "),s("code",[e._v("BlockStore")]),e._v(" to be able to write "),s("code",[e._v("Header")]),e._v("'s, "),s("code",[e._v("Commit")]),e._v("'s and "),s("code",[e._v("ValidatorSet")]),e._v("'s and read them so as to serve other state syncing peers.")]),e._v(" "),s("p",[e._v("This also means adding new methods to these respective stores in order to persist them")]),e._v(" "),s("h3",{attrs:{id:"p2p-light-client-provider"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#p2p-light-client-provider"}},[e._v("#")]),e._v(" P2P Light Client Provider")]),e._v(" "),s("p",[e._v("As mentioned previously, the "),s("code",[e._v("Dispatcher")]),e._v(" is capable of handling requests to multiple peers. We can therefore simply peel off a "),s("code",[e._v("blockProvider")]),e._v(" instance which is assigned to each peer. By giving it the chain ID, the "),s("code",[e._v("blockProvider")]),e._v(" is capable of doing a basic validation of the light block before returning it to the client.")]),e._v(" "),s("p",[e._v("It's important to note that because state sync doesn't have access to the evidence channel it is incapable of allowing the light client to report evidence thus "),s("code",[e._v("ReportEvidence")]),e._v(" is a no op. This is not too much of a concern for reverse sync but will need to be addressed for pure p2p light clients.")]),e._v(" "),s("h3",{attrs:{id:"pruning"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pruning"}},[e._v("#")]),e._v(" Pruning")]),e._v(" "),s("p",[e._v("A final small note is with pruning. This ADR will introduce changes that will not allow an application to prune blocks that are within the evidence age.")]),e._v(" "),s("h2",{attrs:{id:"future-work"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#future-work"}},[e._v("#")]),e._v(" Future Work")]),e._v(" "),s("p",[e._v("This ADR tries to remain within the scope of extending state sync, however the changes made opens the door for several areas to be followed up:")]),e._v(" "),s("ul",[s("li",[e._v("Properly integrate p2p messaging in the light client package. This will require adding the evidence channel so the light client is capable of reporting evidence. We may also need to rethink the providers model (i.e. currently providers are only added on start up)")]),e._v(" "),s("li",[e._v("Merge and clean up the tendermint stores (state, block and evidence). This ADR adds new methods to both the state and block store for saving headers, commits and validator sets. This doesn't quite fit with the current struct (i.e. only "),s("code",[e._v("BlockMeta")]),e._v("s instead of "),s("code",[e._v("Header")]),e._v("s are saved). We should explore consolidating this for the sake of atomicity and the opportunity for batching. There are also other areas for changes such as the way we store block parts. See "),s("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/5383",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(" and "),s("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/4630",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(" for more context.")]),e._v(" "),s("li",[e._v("Explore opportunistic reverse sync. Technically we don't need to reverse sync if no evidence is observed. I've tried to design the protocol such that it could be possible to move it across to the evidence package if we see fit. Thus only when evidence is seen where we don't have the necessary data, do we perform a reverse sync. The problem with this is that imagine we are in consensus and some evidence pops up requiring us to first fetch and verify the last 10,000 blocks. There's no way a node could do this (sequentially) and vote before the round finishes. Also as we don't punish invalid evidence, a malicious node could easily spam the chain just to get a bunch of \"stateless\" nodes to perform a bunch of useless work.")]),e._v(" "),s("li",[e._v("Explore full reverse sync. Currently we only fetch light blocks. There might be benefits in the future to fetch and persist entire blocks especially if we give control to the application to do this.")])]),e._v(" "),s("h2",{attrs:{id:"consequences"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),s("h3",{attrs:{id:"positive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),s("ul",[s("li",[e._v("All nodes should have sufficient history to validate all types of evidence")]),e._v(" "),s("li",[e._v("State syncing nodes can use the p2p layer for light client verification of state. This has better UX and could be faster but I haven't benchmarked.")])]),e._v(" "),s("h3",{attrs:{id:"negative"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),s("ul",[s("li",[e._v("Introduces more code = more maintenance")])]),e._v(" "),s("h3",{attrs:{id:"neutral"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),s("h2",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/docs/architecture/adr-068-reverse-sync.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reverse Sync RFC"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/5617",target:"_blank",rel:"noopener noreferrer"}},[e._v("Original Issue"),s("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);