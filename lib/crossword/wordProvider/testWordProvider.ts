import { filterWords } from "../utils"

const rp = require("request-promise")
const createTextVersion = require("textversionjs")

export const testWordProvider = () => {
  return [
    "free",
    "president",
    "united",
    "other",
    "trump",
    "white",
    "house",
    "presidential",
    "head",
    "shot",
    "trump",
    "smiling",
    "front",
    "wearing",
    "dark",
    "blue",
    "suit",
    "jacket",
    "with",
    "american",
    "flag",
    "lapel",
    "white",
    "light",
    "blue",
    "united",
    "john",
    "june",
    "1946",
    "york",
    "anne",
    "donald",
    "honors",
    "trump",
    "stylized",
    "house",
    "donald",
    "article",
    "part",
    "series",
    "trump",
    "popular",
    "president",
    "united",
    "korea",
    "summits",
    "enforcement",
    "church",
    "photo",
    "trade",
    "arabia",
    "arms",
    "peace",
    "step",
    "court",
    "trump",
    "misconduct",
    "hollywood",
    "reactions",
    "election",
    "fraud",
    "phone",
    "involving",
    "projects",
    "july",
    "links",
    "with",
    "russian",
    "tower",
    "tower",
    "information",
    "counsel",
    "appropriations",
    "warp",
    "house",
    "with",
    "science",
    "president",
    "united",
    "john",
    "trump",
    "june",
    "american",
    "served",
    "45th",
    "united",
    "from",
    "2017",
    "raised",
    "york",
    "trump",
    "graduated",
    "from",
    "school",
    "university",
    "with",
    "became",
    "president",
    "father",
    "real",
    "estate",
    "business",
    "1971",
    "renamed",
    "trump",
    "trump",
    "expanded",
    "operations",
    "building",
    "renovating",
    "golf",
    "later",
    "started",
    "side",
    "mostly",
    "licensing",
    "trump",
    "businesses",
    "have",
    "been",
    "involved",
    "more",
    "than",
    "state",
    "federal",
    "including",
    "owned",
    "brand",
    "beauty",
    "pageants",
    "from",
    "1996",
    "from",
    "2004",
    "hosted",
    "reality",
    "television",
    "series",
    "political",
    "have",
    "been",
    "described",
    "entered",
    "presidential",
    "elected",
    "over",
    "nominee",
    "while",
    "popular",
    "becoming",
    "first",
    "president",
    "without",
    "military",
    "government",
    "election",
    "policies",
    "sparked",
    "trump",
    "made",
    "false",
    "misleading",
    "during",
    "campaigns",
    "degree",
    "unprecedented",
    "promoted",
    "conspiracy",
    "many",
    "comments",
    "actions",
    "have",
    "been",
    "racially",
    "charged",
    "many",
    "ordered",
    "travel",
    "citizens",
    "from",
    "several",
    "diverted",
    "funding",
    "towards",
    "building",
    "implemented",
    "family",
    "apprehended",
    "signed",
    "cuts",
    "jobs",
    "which",
    "taxes",
    "individuals",
    "businesses",
    "rescinded",
    "health",
    "insurance",
    "penalty",
    "care",
    "appointed",
    "more",
    "than",
    "federal",
    "including",
    "three",
    "supreme",
    "coney",
    "foreign",
    "trump",
    "pursued",
    "renegotiated",
    "american",
    "free",
    "trade",
    "withdrew",
    "from",
    "trade",
    "nuclear",
    "import",
    "that",
    "triggered",
    "trade",
    "with",
    "trump",
    "three",
    "with",
    "north",
    "korean",
    "leader",
    "made",
    "progress",
    "reacted",
    "slowly",
    "ignored",
    "contradicted",
    "many",
    "recommendations",
    "from",
    "health",
    "officials",
    "about",
    "unproven",
    "treatments",
    "availability",
    "counsel",
    "established",
    "that",
    "interfered",
    "2016",
    "benefit",
    "that",
    "members",
    "trump",
    "campaign",
    "coordinated",
    "with",
    "russian",
    "election",
    "interference",
    "mueller",
    "also",
    "investigated",
    "trump",
    "neither",
    "indicted",
    "exonerated",
    "after",
    "trump",
    "ukraine",
    "political",
    "rival",
    "december",
    "both",
    "charges",
    "february",
    "lost",
    "presidential",
    "biden",
    "refused",
    "falsely",
    "claimed",
    "that",
    "there",
    "widespread",
    "overturn",
    "pressuring",
    "government",
    "mounting",
    "scores",
    "legal",
    "obstructing",
    "january",
    "trump",
    "urged",
    "supporters",
    "march",
    "which",
    "then",
    "resulting",
    "multiple",
    "deaths",
    "interrupting",
    "vote",
    "january",
    "house",
    "representatives",
    "second",
    "making",
    "only",
    "federal",
    "officeholder",
    "american",
    "history",
    "impeached",
    "senate",
    "again",
    "february",
    "after",
    "already",
    "left",
    "scholars",
    "historians",
    "worst",
    "presidents",
    "american",
    "personal",
    "early",
    "business",
    "real",
    "manhattan",
    "atlantic",
    "city",
    "golf",
    "branding",
    "legal",
    "affairs",
    "side",
    "trump",
    "media",
    "film",
    "political",
    "2000",
    "presidential",
    "campaign",
    "2011",
    "hints",
    "presidential",
    "2016",
    "presidential",
    "republican",
    "general",
    "election",
    "campaign",
    "rhetoric",
    "political",
    "support",
    "from",
    "financial",
    "election",
    "presidency",
    "early",
    "conflicts",
    "domestic",
    "economy",
    "energy",
    "health",
    "social",
    "pardons",
    "lafayette",
    "square",
    "protester",
    "removal",
    "photo",
    "travel",
    "family",
    "separation",
    "trump",
    "wall",
    "government",
    "foreign",
    "north",
    "initial",
    "white",
    "house",
    "coronavirus",
    "task",
    "world",
    "health",
    "pressure",
    "abandon",
    "pandemic",
    "mitigation",
    "political",
    "pressure",
    "health",
    "outbreak",
    "white",
    "effects",
    "2020",
    "presidential",
    "hush",
    "money",
    "investigations",
    "russian",
    "election",
    "crossfire",
    "hurricane",
    "2017",
    "counterintelligence",
    "special",
    "counsel",
    "first",
    "impeachment",
    "impeachment",
    "trial",
    "2020",
    "presidential",
    "election",
    "concern",
    "about",
    "possible",
    "coup",
    "attempt",
    "military",
    "2021",
    "capitol",
    "second",
    "impeachment",
    "public",
    "approval",
    "social",
    "relationship",
    "with",
    "false",
    "promotion",
    "conspiracy",
    "racial",
    "misogyny",
    "allegations",
    "sexual",
    "incitement",
    "popular",
    "works",
    "external",
    "photograph",
    "donald",
    "trump",
    "wearing",
    "dark",
    "uniform",
    "with",
    "various",
    "badges",
    "stripe",
    "crossing",
    "right",
    "york",
    "military",
    "john",
    "trump",
    "born",
    "june",
    "borough",
    "york",
    "fourth",
    "child",
    "real",
    "estate",
    "developer",
    "whose",
    "parents",
    "were",
    "german",
    "anne",
    "macleod",
    "immigrant",
    "from",
    "trump",
    "grew",
    "with",
    "older",
    "siblings",
    "younger",
    "brother",
    "neighborhood",
    "queens",
    "attended",
    "private",
    "from",
    "kindergarten",
    "through",
    "seventh",
    "enrolled",
    "york",
    "military",
    "private",
    "boarding",
    "enrolled",
    "years",
    "later",
    "transferred",
    "school",
    "university",
    "graduating",
    "1968",
    "with",
    "lawyer",
    "threatened",
    "high",
    "with",
    "legal",
    "action",
    "they",
    "released",
    "academic",
    "while",
    "trump",
    "obtained",
    "four",
    "student",
    "deemed",
    "military",
    "service",
    "based",
    "upon",
    "medical",
    "july",
    "1968",
    "local",
    "draft",
    "board",
    "classified",
    "eligible",
    "october",
    "classified",
    "conditional",
    "medical",
    "reclassified",
    "permanently",
    "disqualifying",
    "from",
    "donald",
    "trump",
    "married",
    "czech",
    "model",
    "they",
    "have",
    "three",
    "ivana",
    "became",
    "naturalized",
    "united",
    "states",
    "citizen",
    "couple",
    "divorced",
    "following",
    "affair",
    "with",
    "actress",
    "maples",
    "have",
    "they",
    "married",
    "separated",
    "divorced",
    "tiffany",
    "raised",
    "marla",
    "trump",
    "married",
    "slovenian",
    "model",
    "they",
    "have",
    "barron",
    "melania",
    "gained",
    "citizenship",
    "went",
    "1959",
    "presbyterian",
    "church",
    "parents",
    "joined",
    "collegiate",
    "which",
    "belongs",
    "pastor",
    "vincent",
    "ministered",
    "family",
    "until",
    "death",
    "trump",
    "described",
    "church",
    "stated",
    "trump",
    "active",
    "appointed",
    "personal",
    "televangelist",
    "white",
    "house",
    "public",
    "said",
    "identified",
    "wearing",
    "suit",
    "face",
    "walks",
    "walter",
    "reed",
    "1939",
    "classical",
    "revival",
    "discharged",
    "october",
    "from",
    "says",
    "never",
    "drunk",
    "smoked",
    "used",
    "says",
    "that",
    "sleeps",
    "about",
    "four",
    "five",
    "hours",
    "trump",
    "called",
    "golfing",
    "form",
    "usually",
    "does",
    "walk",
    "considers",
    "exercise",
    "waste",
    "because",
    "believes",
    "body",
    "with",
    "finite",
    "amount",
    "that",
    "depleted",
    "been",
    "personal",
    "physician",
    "since",
    "wrote",
    "that",
    "trump",
    "would",
    "healthiest",
    "individual",
    "ever",
    "elected",
    "letter",
    "released",
    "trump",
    "bornstein",
    "said",
    "trump",
    "dictated",
    "contents",
    "letter",
    "that",
    "three",
    "agents",
    "trump",
    "removed",
    "medical",
    "records",
    "february",
    "2017",
    "without",
    "hospitalized",
    "reed",
    "national",
    "military",
    "medical",
    "treatment",
    "october",
    "reportedly",
    "with",
    "fever",
    "difficulty",
    "revealed",
    "2021",
    "that",
    "condition",
    "been",
    "much",
    "more",
    "extremely",
    "blood",
    "oxygen",
    "high",
    "lung",
    "indicating",
    "severe",
    "case",
    "treated",
    "with",
    "antiviral",
    "drug",
    "steroid",
    "unapproved",
    "experimental",
    "antibody",
    "trump",
    "returned",
    "october",
    "still",
    "struggling",
    "with",
    "donald",
    "returns",
    "donald",
    "trump",
    "listed",
    "initial",
    "list",
    "wealthy",
    "individuals",
    "having",
    "share",
    "estimated",
    "million",
    "financial",
    "losses",
    "1980s",
    "caused",
    "dropped",
    "from",
    "list",
    "between",
    "1990",
    "after",
    "trump",
    "filed",
    "mandatory",
    "financial",
    "disclosure",
    "forms",
    "with",
    "election",
    "july",
    "publicly",
    "announced",
    "worth",
    "about",
    "billion",
    "while",
    "records",
    "released",
    "showed",
    "least",
    "billion",
    "assets",
    "million",
    "forbes",
    "estimated",
    "worth",
    "billion",
    "2015",
    "billion",
    "2021",
    "billionaires",
    "forbes",
    "estimated",
    "worth",
    "billion",
    "making",
    "officeholders",
    "american",
    "trump",
    "king",
    "fahd",
    "shake",
    "with",
    "ronald",
    "reagan",
    "standing",
    "next",
    "them",
    "black",
    "formal",
    "wife",
    "ivana",
    "receiving",
    "line",
    "state",
    "dinner",
    "king",
    "saudi",
    "with",
    "president",
    "first",
    "lady",
    "jonathan",
    "greenberg",
    "reported",
    "2018",
    "that",
    "using",
    "pseudonym",
    "claiming",
    "trump",
    "organization",
    "called",
    "1984",
    "falsely",
    "assert",
    "that",
    "owned",
    "excess",
    "ninety",
    "trump",
    "secure",
    "higher",
    "ranking",
    "list",
    "wealthy",
    "greenberg",
    "also",
    "wrote",
    "that",
    "forbes",
    "vastly",
    "overestimated",
    "wealth",
    "wrongly",
    "included",
    "forbes",
    "rankings",
    "often",
    "said",
    "began",
    "career",
    "with",
    "small",
    "loan",
    "million",
    "from",
    "that",
    "back",
    "with",
    "october",
    "york",
    "times",
    "reported",
    "that",
    "trump",
    "millionaire",
    "borrowed",
    "least",
    "million",
    "from",
    "largely",
    "failed",
    "repay",
    "those",
    "received",
    "million",
    "from",
    "business",
    "empire",
    "over",
    "according",
    "trump",
    "family",
    "committed",
    "which",
    "lawyer",
    "trump",
    "department",
    "york",
    "said",
    "investments",
    "underperformed",
    "stock",
    "market",
    "york",
    "property",
    "forbes",
    "estimated",
    "october",
    "2018",
    "that",
    "worth",
    "declined",
    "from",
    "billion",
    "2015",
    "billion",
    "2017",
    "product",
    "licensing",
    "operation",
    "from",
    "million",
    "returns",
    "from",
    "1985",
    "1994",
    "show",
    "losses",
    "totaling",
    "billion",
    "over",
    "contrast",
    "claims",
    "about",
    "financial",
    "health",
    "business",
    "york",
    "times",
    "reported",
    "that",
    "after",
    "trump",
    "appears",
    "have",
    "lost",
    "more",
    "money",
    "than",
    "nearly",
    "other",
    "individual",
    "american",
    "that",
    "business",
    "losses",
    "1990",
    "than",
    "million",
    "each",
    "more",
    "than",
    "double",
    "those",
    "nearest",
    "taxpayers",
    "information",
    "those",
    "1995",
    "reported",
    "losses",
    "were",
    "september",
    "2020",
    "analysis",
    "york",
    "twenty",
    "years",
    "data",
    "from",
    "trump",
    "accumulated",
    "hundreds",
    "millions",
    "losses",
    "deferred",
    "declaring",
    "million",
    "forgiven",
    "debt",
    "taxable",
    "according",
    "main",
    "sources",
    "income",
    "were",
    "share",
    "revenue",
    "from",
    "income",
    "from",
    "businesses",
    "which",
    "minority",
    "while",
    "businesses",
    "were",
    "largely",
    "running",
    "significant",
    "portion",
    "income",
    "which",
    "enables",
    "avoid",
    "paying",
    "income",
    "paying",
    "little",
    "several",
    "over",
    "past",
    "trump",
    "been",
    "balancing",
    "losses",
    "selling",
    "taking",
    "loans",
    "against",
    "including",
    "million",
    "mortgage",
    "liquidation",
    "over",
    "million",
    "stocks",
    "trump",
    "personally",
    "guaranteed",
    "million",
    "most",
    "which",
    "repaid",
    "records",
    "also",
    "showed",
    "trump",
    "unsuccessfully",
    "pursued",
    "business",
    "deals",
    "including",
    "developing",
    "partnership",
    "with",
    "major",
    "total",
    "over",
    "billion",
    "secured",
    "according",
    "forbes",
    "report",
    "october",
    "million",
    "more",
    "owed",
    "various",
    "banks",
    "trust",
    "lenders",
    "include",
    "approximately",
    "million",
    "owed",
    "unknown",
    "current",
    "value",
    "assets",
    "exceeds",
    "according",
    "career",
    "donald",
    "projects",
    "donald",
    "trump",
    "ground",
    "view",
    "trump",
    "contemporary",
    "skyscraper",
    "with",
    "glass",
    "curtain",
    "stepped",
    "student",
    "wharton",
    "after",
    "graduating",
    "trump",
    "worked",
    "father",
    "real",
    "estate",
    "trump",
    "which",
    "owned",
    "rental",
    "housing",
    "york",
    "outer",
    "became",
    "president",
    "company",
    "began",
    "using",
    "trump",
    "registered",
    "corporation",
    "attracted",
    "public",
    "attention",
    "1978",
    "with",
    "launch",
    "first",
    "manhattan",
    "renovation",
    "derelict",
    "adjacent",
    "central",
    "financing",
    "facilitated",
    "million",
    "city",
    "property",
    "abatement",
    "arranged",
    "fred",
    "also",
    "joined",
    "hyatt",
    "guaranteeing",
    "million",
    "bank",
    "construction",
    "hotel",
    "reopened",
    "1980",
    "hyatt",
    "that",
    "same",
    "trump",
    "obtained",
    "rights",
    "develop",
    "trump",
    "skyscraper",
    "midtown",
    "building",
    "houses",
    "headquarters",
    "trump",
    "organization",
    "primary",
    "residence",
    "until",
    "trump",
    "acquired",
    "manhattan",
    "with",
    "loan",
    "million",
    "from",
    "consortium",
    "years",
    "hotel",
    "filed",
    "bankruptcy",
    "reorganization",
    "plan",
    "approved",
    "trump",
    "lost",
    "hotel",
    "citibank",
    "investors",
    "from",
    "singapore",
    "saudi",
    "assumed",
    "million",
    "trump",
    "acquired",
    "mostly",
    "vacant",
    "skyscraper",
    "wall",
    "later",
    "also",
    "known",
    "trump",
    "renovated",
    "early",
    "trump",
    "right",
    "develop",
    "tract",
    "neighborhood",
    "near",
    "struggling",
    "with",
    "debt",
    "from",
    "other",
    "ventures",
    "trump",
    "sold",
    "most",
    "interest",
    "project",
    "asian",
    "were",
    "able",
    "finance",
    "completion",
    "trump",
    "acquired",
    "estate",
    "converted",
    "estate",
    "into",
    "private",
    "club",
    "with",
    "initiation",
    "annual",
    "continued",
    "wing",
    "house",
    "private",
    "trump",
    "declared",
    "primary",
    "city",
    "entrance",
    "trump",
    "casino",
    "atlantic",
    "motifs",
    "evocative",
    "mahal",
    "trump",
    "opened",
    "trump",
    "hotel",
    "casino",
    "project",
    "received",
    "financing",
    "management",
    "services",
    "from",
    "poor",
    "financial",
    "results",
    "worsened",
    "tensions",
    "between",
    "holiday",
    "paid",
    "holiday",
    "million",
    "1986",
    "take",
    "sole",
    "control",
    "trump",
    "also",
    "acquired",
    "partially",
    "completed",
    "building",
    "atlantic",
    "city",
    "from",
    "upon",
    "completion",
    "that",
    "hotel",
    "casino",
    "were",
    "called",
    "ivana",
    "managed",
    "until",
    "acquired",
    "third",
    "casino",
    "atlantic",
    "1988",
    "highly",
    "leveraged",
    "financed",
    "with",
    "million",
    "completed",
    "cost",
    "opening",
    "april",
    "project",
    "went",
    "bankrupt",
    "following",
    "reorganization",
    "left",
    "trump",
    "with",
    "only",
    "half",
    "initial",
    "ownership",
    "stake",
    "required",
    "pledge",
    "personal",
    "guarantees",
    "future",
    "facing",
    "gave",
    "control",
    "sold",
    "which",
    "been",
    "indefinitely",
    "docked",
    "atlantic",
    "city",
    "while",
    "leased",
    "casinos",
    "wealthy",
    "trump",
    "founded",
    "hotels",
    "casino",
    "which",
    "assumed",
    "ownership",
    "trump",
    "trump",
    "thcr",
    "purchased",
    "mahal",
    "1996",
    "underwent",
    "successive",
    "bankruptcies",
    "leaving",
    "trump",
    "with",
    "only",
    "percent",
    "remained",
    "chairman",
    "thcr",
    "until",
    "trump",
    "trump",
    "organization",
    "began",
    "acquiring",
    "constructing",
    "golf",
    "courses",
    "owned",
    "golf",
    "courses",
    "resorts",
    "worldwide",
    "managed",
    "another",
    "four",
    "july",
    "2020",
    "inauguration",
    "until",
    "trump",
    "spent",
    "around",
    "every",
    "five",
    "days",
    "golf",
    "things",
    "named",
    "after",
    "donald",
    "exterior",
    "view",
    "trump",
    "international",
    "hotel",
    "tower",
    "contemporary",
    "skyscraper",
    "with",
    "glass",
    "curtain",
    "word",
    "written",
    "larger",
    "lettering",
    "international",
    "hotel",
    "trump",
    "name",
    "been",
    "licensed",
    "various",
    "consumer",
    "products",
    "including",
    "adult",
    "learning",
    "home",
    "according",
    "analysis",
    "washington",
    "there",
    "more",
    "than",
    "fifty",
    "licensing",
    "management",
    "deals",
    "involving",
    "which",
    "have",
    "generated",
    "least",
    "million",
    "yearly",
    "revenue",
    "only",
    "consumer",
    "goods",
    "companies",
    "continued",
    "license",
    "affairs",
    "affairs",
    "donald",
    "lawsuits",
    "involving",
    "donald",
    "served",
    "lawyer",
    "mentor",
    "years",
    "1970s",
    "according",
    "cohn",
    "sometimes",
    "waived",
    "fees",
    "their",
    "cohn",
    "helped",
    "trump",
    "countersue",
    "united",
    "states",
    "government",
    "million",
    "over",
    "charges",
    "that",
    "properties",
    "racial",
    "discriminatory",
    "trump",
    "cohn",
    "lost",
    "that",
    "case",
    "when",
    "countersuit",
    "dismissed",
    "case",
    "went",
    "agreement",
    "struck",
    "requiring",
    "properties",
    "furnish",
    "york",
    "urban",
    "league",
    "with",
    "list",
    "apartment",
    "every",
    "week",
    "among",
    "other",
    "cohn",
    "introduced",
    "political",
    "consultant",
    "enlisted",
    "services",
    "deal",
    "with",
    "federal",
    "april",
    "2018",
    "trump",
    "businesses",
    "been",
    "involved",
    "more",
    "than",
    "state",
    "federal",
    "legal",
    "according",
    "running",
    "tally",
    "trump",
    "filed",
    "hotel",
    "casino",
    "businesses",
    "atlantic",
    "city",
    "york",
    "filed",
    "protection",
    "times",
    "between",
    "1991",
    "they",
    "continued",
    "operate",
    "while",
    "banks",
    "restructured",
    "debt",
    "reduced",
    "shares",
    "more",
    "than",
    "banks",
    "lent",
    "trump",
    "aftermath",
    "corporate",
    "bankruptcies",
    "early",
    "most",
    "major",
    "banks",
    "declined",
    "lend",
    "with",
    "only",
    "deutsche",
    "bank",
    "still",
    "willing",
    "lend",
    "york",
    "times",
    "reported",
    "days",
    "after",
    "storming",
    "united",
    "states",
    "capitol",
    "that",
    "bank",
    "decided",
    "business",
    "with",
    "trump",
    "company",
    "april",
    "oversight",
    "issued",
    "seeking",
    "financial",
    "details",
    "from",
    "deutsche",
    "bank",
    "accounting",
    "trump",
    "sued",
    "committee",
    "chairman",
    "prevent",
    "district",
    "judge",
    "ruled",
    "that",
    "mazars",
    "must",
    "comply",
    "with",
    "judge",
    "district",
    "court",
    "ruled",
    "that",
    "banks",
    "must",
    "also",
    "attorneys",
    "appealed",
    "arguing",
    "that",
    "congress",
    "attempting",
    "usurp",
    "authority",
    "that",
    "constitution",
    "reserves",
    "executive",
    "doug",
    "unnamed",
    "official",
    "standing",
    "behind",
    "lectern",
    "with",
    "round",
    "jersey",
    "generals",
    "with",
    "members",
    "press",
    "seated",
    "jersey",
    "generals",
    "quarterback",
    "1985",
    "press",
    "conference",
    "lobby",
    "trump",
    "september",
    "trump",
    "purchased",
    "jersey",
    "team",
    "states",
    "football",
    "after",
    "1985",
    "league",
    "largely",
    "strategy",
    "moving",
    "games",
    "fall",
    "schedule",
    "they",
    "competed",
    "with",
    "trying",
    "force",
    "merger",
    "with",
    "bringing",
    "against",
    "businesses",
    "have",
    "hosted",
    "several",
    "boxing",
    "matches",
    "city",
    "convention",
    "adjacent",
    "promoted",
    "taking",
    "place",
    "trump",
    "plaza",
    "atlantic",
    "1989",
    "trump",
    "lent",
    "name",
    "cycling",
    "stage",
    "which",
    "attempt",
    "create",
    "american",
    "equivalent",
    "european",
    "races",
    "such",
    "late",
    "trump",
    "mimicked",
    "actions",
    "wall",
    "trump",
    "began",
    "purchase",
    "significant",
    "blocks",
    "shares",
    "various",
    "public",
    "leading",
    "some",
    "observers",
    "think",
    "engaged",
    "york",
    "times",
    "found",
    "that",
    "trump",
    "initially",
    "made",
    "millions",
    "dollars",
    "such",
    "stock",
    "later",
    "those",
    "gains",
    "after",
    "investors",
    "stopped",
    "taking",
    "takeover",
    "talk",
    "trump",
    "purchased",
    "defunct",
    "with",
    "planes",
    "landing",
    "rights",
    "york",
    "financed",
    "purchase",
    "with",
    "million",
    "from",
    "rebranded",
    "operation",
    "trump",
    "operated",
    "until",
    "trump",
    "failed",
    "earn",
    "profit",
    "with",
    "airline",
    "sold",
    "star",
    "with",
    "bronze",
    "outline",
    "icon",
    "written",
    "embedded",
    "black",
    "terrazzo",
    "star",
    "walk",
    "siblings",
    "cousin",
    "john",
    "each",
    "with",
    "percent",
    "formed",
    "county",
    "building",
    "supply",
    "maintenance",
    "company",
    "offices",
    "alleged",
    "have",
    "been",
    "shell",
    "company",
    "paying",
    "vendors",
    "providing",
    "services",
    "supplies",
    "rental",
    "units",
    "then",
    "billing",
    "those",
    "services",
    "supplies",
    "trump",
    "management",
    "with",
    "markups",
    "percent",
    "owners",
    "shared",
    "proceeds",
    "generated",
    "increased",
    "costs",
    "were",
    "used",
    "justification",
    "state",
    "approval",
    "increasing",
    "rents",
    "1996",
    "trump",
    "owned",
    "part",
    "including",
    "teen",
    "disagreements",
    "with",
    "about",
    "took",
    "both",
    "pageants",
    "trump",
    "received",
    "star",
    "walk",
    "work",
    "producer",
    "miss",
    "after",
    "dropped",
    "pageants",
    "from",
    "their",
    "broadcasting",
    "lineups",
    "june",
    "trump",
    "bought",
    "share",
    "miss",
    "universe",
    "organization",
    "sold",
    "entire",
    "company",
    "trump",
    "company",
    "that",
    "sold",
    "real",
    "estate",
    "training",
    "courses",
    "priced",
    "from",
    "after",
    "york",
    "state",
    "authorities",
    "notified",
    "company",
    "that",
    "word",
    "violated",
    "state",
    "name",
    "changed",
    "trump",
    "entrepreneur",
    "initiative",
    "state",
    "york",
    "filed",
    "million",
    "civil",
    "suit",
    "against",
    "trump",
    "alleging",
    "that",
    "company",
    "made",
    "false",
    "statements",
    "defrauded",
    "were",
    "filed",
    "federal",
    "court",
    "against",
    "trump",
    "internal",
    "documents",
    "revealed",
    "that",
    "employees",
    "were",
    "instructed",
    "former",
    "employees",
    "testified",
    "that",
    "trump",
    "university",
    "defrauded",
    "lied",
    "shortly",
    "after",
    "trump",
    "agreed",
    "total",
    "million",
    "settle",
    "three",
    "trump",
    "donald",
    "trump",
    "foundation",
    "private",
    "foundation",
    "established",
    "final",
    "years",
    "funds",
    "mostly",
    "came",
    "from",
    "donors",
    "other",
    "than",
    "donate",
    "personal",
    "funds",
    "charity",
    "from",
    "2009",
    "until",
    "foundation",
    "gave",
    "health",
    "care",
    "well",
    "conservative",
    "washington",
    "post",
    "reported",
    "that",
    "charity",
    "committed",
    "several",
    "potential",
    "legal",
    "ethical",
    "including",
    "alleged",
    "possible",
    "also",
    "york",
    "state",
    "attorney",
    "office",
    "said",
    "foundation",
    "appeared",
    "violation",
    "york",
    "laws",
    "regarding",
    "charities",
    "ordered",
    "immediately",
    "cease",
    "fundraising",
    "activities",
    "team",
    "announced",
    "december",
    "2016",
    "that",
    "foundation",
    "would",
    "june",
    "york",
    "attorney",
    "office",
    "filed",
    "civil",
    "suit",
    "against",
    "adult",
    "seeking",
    "million",
  ]
}