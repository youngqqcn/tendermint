(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{831:function(e,t,r){"use strict";r.r(t);var a=r(1),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"peer-strategy-and-exchange"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#peer-strategy-and-exchange"}},[e._v("#")]),e._v(" Peer Strategy and Exchange")]),e._v(" "),r("p",[e._v("Here we outline the design of the PeerStore\nand how it used by the Peer Exchange Reactor (PEX) to ensure we are connected\nto good peers and to gossip peers to others.")]),e._v(" "),r("h2",{attrs:{id:"peer-types"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#peer-types"}},[e._v("#")]),e._v(" Peer Types")]),e._v(" "),r("p",[e._v("Certain peers are special in that they are specified by the user as "),r("code",[e._v("persistent")]),e._v(",\nwhich means we auto-redial them if the connection fails, or if we fail to dial\nthem.\nSome peers can be marked as "),r("code",[e._v("private")]),e._v(", which means\nwe will not put them in the peer store or gossip them to others.")]),e._v(" "),r("p",[e._v("All peers except private peers and peers coming from them are tracked using the\npeer store.")]),e._v(" "),r("p",[e._v("The rest of our peers are only distinguished by being either\ninbound (they dialed our public address) or outbound (we dialed them).")]),e._v(" "),r("h2",{attrs:{id:"discovery"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#discovery"}},[e._v("#")]),e._v(" Discovery")]),e._v(" "),r("p",[e._v("Peer discovery begins with a list of seeds.")]),e._v(" "),r("p",[e._v("When we don't have enough peers, we")]),e._v(" "),r("ol",[r("li",[e._v("ask existing peers")]),e._v(" "),r("li",[e._v("dial seeds if we're not dialing anyone currently")])]),e._v(" "),r("p",[e._v("On startup, we will also immediately dial the given list of "),r("code",[e._v("persistent_peers")]),e._v(",\nand will attempt to maintain persistent connections with them. If the\nconnections die, or we fail to dial, we will redial every 5s for a few minutes,\nthen switch to an exponential backoff schedule, and after about a day of\ntrying, stop dialing the peer. This behavior is when "),r("code",[e._v("persistent_peers_max_dial_period")]),e._v(" is configured to zero.")]),e._v(" "),r("p",[e._v("But If "),r("code",[e._v("persistent_peers_max_dial_period")]),e._v(" is set greater than zero, terms between each dial to each persistent peer\nwill not exceed "),r("code",[e._v("persistent_peers_max_dial_period")]),e._v(" during exponential backoff.\nTherefore, "),r("code",[e._v("dial_period")]),e._v(" = min("),r("code",[e._v("persistent_peers_max_dial_period")]),e._v(", "),r("code",[e._v("exponential_backoff_dial_period")]),e._v(")\nand we keep trying again regardless of "),r("code",[e._v("maxAttemptsToDial")])]),e._v(" "),r("p",[e._v("As long as we have less than "),r("code",[e._v("MaxNumOutboundPeers")]),e._v(", we periodically request\nadditional peers from each of our own and try seeds.")]),e._v(" "),r("h2",{attrs:{id:"listening"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#listening"}},[e._v("#")]),e._v(" Listening")]),e._v(" "),r("p",[e._v("Peers listen on a configurable ListenAddr that they self-report in their\nNodeInfo during handshakes with other peers. Peers accept up to\n"),r("code",[e._v("MaxNumInboundPeers")]),e._v(" incoming peers.")]),e._v(" "),r("h2",{attrs:{id:"address-book"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#address-book"}},[e._v("#")]),e._v(" Address Book")]),e._v(" "),r("p",[e._v("Peers are tracked via their ID (their PubKey.Address()).\nPeers are added to the peer store from the PEX when they first connect to us or\nwhen we hear about them from other peers.")]),e._v(" "),r("p",[e._v("The peer store is arranged in sets of buckets, and distinguishes between\nvetted (old) and unvetted (new) peers. It keeps different sets of buckets for\nvetted and unvetted peers. Buckets provide randomization over peer selection.\nPeers are put in buckets according to their IP groups.")]),e._v(" "),r("p",[e._v("IP group can be a masked IP (e.g. "),r("code",[e._v("1.2.0.0")]),e._v(" or "),r("code",[e._v("2602:100::")]),e._v(") or "),r("code",[e._v("local")]),e._v(" for\nlocal addresses or "),r("code",[e._v("unroutable")]),e._v(" for unroutable addresses. The mask which\ncorresponds to the "),r("code",[e._v("/16")]),e._v(" subnet is used for IPv4, "),r("code",[e._v("/32")]),e._v(" subnet - for IPv6.\nEach group has a limited number of buckets to prevent DoS attacks coming from\nthat group (e.g. an attacker buying a "),r("code",[e._v("/16")]),e._v(" block of IPs and launching a DoS\nattack).")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://arxiv.org/abs/1612.06257",target:"_blank",rel:"noopener noreferrer"}},[e._v("highwayhash"),r("OutboundLink")],1),e._v(" is used as a hashing function\nwhen calculating a bucket.")]),e._v(" "),r("p",[e._v("When placing a peer into a new bucket:")]),e._v(" "),r("tm-code-block",{staticClass:"codeblock",attrs:{language:"md",base64:"aGFzaChrZXkgKyBzb3VyY2Vncm91cCArIGludDY0KGhhc2goa2V5ICsgZ3JvdXAgKyBzb3VyY2Vncm91cCkpICUgYnVja2V0X3Blcl9ncm91cCkgJSBudW1fbmV3X2J1Y2tldHMK"}}),e._v(" "),r("p",[e._v("When placing a peer into an old bucket:")]),e._v(" "),r("tm-code-block",{staticClass:"codeblock",attrs:{language:"md",base64:"aGFzaChrZXkgKyBncm91cCArIGludDY0KGhhc2goa2V5ICsgYWRkcikpICUgYnVja2V0c19wZXJfZ3JvdXApICUgbnVtX29sZF9idWNrZXRzCg=="}}),e._v(" "),r("p",[e._v("where "),r("code",[e._v("key")]),e._v(" - random 24 HEX string, "),r("code",[e._v("group")]),e._v(" - IP group of the peer (e.g. "),r("code",[e._v("1.2.0.0")]),e._v("),\n"),r("code",[e._v("sourcegroup")]),e._v(" - IP group of the sender (peer who sent us this address) (e.g. "),r("code",[e._v("174.11.0.0")]),e._v("),\n"),r("code",[e._v("addr")]),e._v(" - string representation of the peer's address (e.g. "),r("code",[e._v("174.11.10.2:26656")]),e._v(").")]),e._v(" "),r("p",[e._v("A vetted peer can only be in one bucket. An unvetted peer can be in multiple buckets, and\neach instance of the peer can have a different IP:PORT.")]),e._v(" "),r("p",[e._v("If we're trying to add a new peer but there's no space in its bucket, we'll\nremove the worst peer from that bucket to make room.")]),e._v(" "),r("h2",{attrs:{id:"vetting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vetting"}},[e._v("#")]),e._v(" Vetting")]),e._v(" "),r("p",[e._v("When a peer is first added, it is unvetted.\nMarking a peer as vetted is outside the scope of the "),r("code",[e._v("p2p")]),e._v(" package.\nFor Tendermint, a Peer becomes vetted once it has contributed sufficiently\nat the consensus layer; ie. once it has sent us valid and not-yet-known\nvotes and/or block parts for "),r("code",[e._v("NumBlocksForVetted")]),e._v(" blocks.\nOther users of the p2p package can determine their own conditions for when a peer is marked vetted.")]),e._v(" "),r("p",[e._v("If a peer becomes vetted but there are already too many vetted peers,\na randomly selected one of the vetted peers becomes unvetted.")]),e._v(" "),r("p",[e._v("If a peer becomes unvetted (either a new peer, or one that was previously vetted),\na randomly selected one of the unvetted peers is removed from the peer store.")]),e._v(" "),r("p",[e._v("More fine-grained tracking of peer behaviour can be done using\na trust metric (see below), but it's best to start with something simple.")]),e._v(" "),r("h2",{attrs:{id:"select-peers-to-dial"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#select-peers-to-dial"}},[e._v("#")]),e._v(" Select Peers to Dial")]),e._v(" "),r("p",[e._v("When we need more peers, we pick addresses randomly from the addrbook with some\nconfigurable bias for unvetted peers. The bias should be lower when we have\nfewer peers and can increase as we obtain more, ensuring that our first peers\nare more trustworthy, but always giving us the chance to discover new good\npeers.")]),e._v(" "),r("p",[e._v("We track the last time we dialed a peer and the number of unsuccessful attempts\nwe've made. If too many attempts are made, we mark the peer as bad.")]),e._v(" "),r("p",[e._v("Connection attempts are made with exponential backoff (plus jitter). Because\nthe selection process happens every "),r("code",[e._v("ensurePeersPeriod")]),e._v(", we might not end up\ndialing a peer for much longer than the backoff duration.")]),e._v(" "),r("p",[e._v("If we fail to connect to the peer after 16 tries (with exponential backoff), we\nremove from peer store completely. But for persistent peers, we indefinitely try to\ndial all persistent peers unless "),r("code",[e._v("persistent_peers_max_dial_period")]),e._v(" is configured to zero")]),e._v(" "),r("h2",{attrs:{id:"select-peers-to-exchange"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#select-peers-to-exchange"}},[e._v("#")]),e._v(" Select Peers to Exchange")]),e._v(" "),r("p",[e._v("When we’re asked for peers, we select them as follows:")]),e._v(" "),r("ul",[r("li",[e._v("select at most "),r("code",[e._v("maxGetSelection")]),e._v(" peers")]),e._v(" "),r("li",[e._v("try to select at least "),r("code",[e._v("minGetSelection")]),e._v(" peers - if we have less than that, select them all.")]),e._v(" "),r("li",[e._v("select a random, unbiased "),r("code",[e._v("getSelectionPercent")]),e._v(" of the peers")])]),e._v(" "),r("p",[e._v("Send the selected peers. Note we select peers for sending without bias for vetted/unvetted.")]),e._v(" "),r("h2",{attrs:{id:"preventing-spam"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#preventing-spam"}},[e._v("#")]),e._v(" Preventing Spam")]),e._v(" "),r("p",[e._v('There are various cases where we decide a peer has misbehaved and we disconnect from them.\nWhen this happens, the peer is removed from the peer store and black listed for\nsome amount of time. We call this "Disconnect and Mark".\nNote that the bad behaviour may be detected outside the PEX reactor itself\n(for instance, in the mconnection, or another reactor), but it must be communicated to the PEX reactor\nso it can remove and mark the peer.')]),e._v(" "),r("p",[e._v("In the PEX, if a peer sends us an unsolicited list of peers,\nor if the peer sends a request too soon after another one,\nwe Disconnect and MarkBad.")]),e._v(" "),r("h2",{attrs:{id:"trust-metric"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#trust-metric"}},[e._v("#")]),e._v(" Trust Metric")]),e._v(" "),r("p",[e._v("The quality of peers can be tracked in more fine-grained detail using a\nProportional-Integral-Derivative (PID) controller that incorporates\ncurrent, past, and rate-of-change data to inform peer quality.")]),e._v(" "),r("p",[e._v("While a PID trust metric has been implemented, it remains for future work\nto use it in the PEX.")]),e._v(" "),r("p",[e._v("See the "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/docs/architecture/adr-006-trust-metric.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("trustmetric"),r("OutboundLink")],1),e._v("\nand "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/docs/architecture/adr-007-trust-metric-usage.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("trustmetric useage"),r("OutboundLink")],1),e._v("\narchitecture docs for more details.")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);