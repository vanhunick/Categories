var DataModule = (function(){

var division = [
  {
    "code": "A",
    "description": "Agriculture, Forestry and Fishing"
  },
  {
    "code": "B",
    "description": "Mining"
  },
  {
    "code": "C",
    "description": "Manufacturing"
  },
  {
    "code": "D",
    "description": "Electricity, Gas, Water and Waste Services"
  },
  {
    "code": "E",
    "description": "Construction"
  },
  {
    "code": "F",
    "description": "Wholesale Trade"
  },
  {
    "code": "G",
    "description": "Retail Trade"
  },
  {
    "code": "H",
    "description": "Accommodation and Food Services"
  },
  {
    "code": "I",
    "description": "Transport, Postal and Warehousing"
  },
  {
    "code": "J",
    "description": "Information Media and Telecommunications"
  },
  {
    "code": "K",
    "description": "Financial and Insurance Services"
  },
  {
    "code": "L",
    "description": "Rental, Hiring and Real Estate Services"
  },
  {
    "code": "M",
    "description": "Professional, Scientific and Technical Services"
  },
  {
    "code": "N",
    "description": "Administrative and Support Services"
  },
  {
    "code": "O",
    "description": "Public Administration and Safety"
  },
  {
    "code": "P",
    "description": "Education and Training"
  },
  {
    "code": "Q",
    "description": "Health Care and Social Assistance"
  },
  {
    "code": "R",
    "description": "Arts and Recreation Services"
  },
  {
    "code": "S",
    "description": "Other Services"
  },
  {
    "code": ""
  }
];

var structure = [
  {
    "code": "Code",
    "description": "Descriptor"
  },
  {
    "code": "A",
    "description": "Agriculture, Forestry and Fishing"
  },
  {
    "code": "01",
    "description": "Agriculture"
  },
  {
    "code": "011",
    "description": "Nursery and Floriculture Production"
  },
  {
    "code": "0111",
    "description": "Nursery Production (Under Cover)"
  },
  {
    "code": "0112",
    "description": "Nursery Production (Outdoors)"
  },
  {
    "code": "0113",
    "description": "Turf Growing"
  },
  {
    "code": "0114",
    "description": "Floriculture Production (Under Cover)"
  },
  {
    "code": "0115",
    "description": "Floriculture Production (Outdoors)"
  },
  {
    "code": "012",
    "description": "Mushroom and Vegetable Growing"
  },
  {
    "code": "0121",
    "description": "Mushroom Growing"
  },
  {
    "code": "0122",
    "description": "Vegetable Growing (Under Cover)"
  },
  {
    "code": "0123",
    "description": "Vegetable Growing (Outdoors)"
  },
  {
    "code": "013",
    "description": "Fruit and Tree Nut Growing"
  },
  {
    "code": "0131",
    "description": "Grape Growing"
  },
  {
    "code": "0132",
    "description": "Kiwifruit Growing"
  },
  {
    "code": "0133",
    "description": "Berry Fruit Growing"
  },
  {
    "code": "0134",
    "description": "Apple and Pear Growing"
  },
  {
    "code": "0135",
    "description": "Stonefruit Growing"
  },
  {
    "code": "0136",
    "description": "Citrus Fruit Growing"
  },
  {
    "code": "0137",
    "description": "Olive Growing"
  },
  {
    "code": "0139",
    "description": "Other Fruit and Tree Nut Growing"
  },
  {
    "code": "014",
    "description": "Grain, Sheep and Beef Cattle Farming"
  },
  {
    "code": "0141",
    "description": "Sheep Farming (Specialised)"
  },
  {
    "code": "0142",
    "description": "Beef Cattle Farming (Specialised)"
  },
  {
    "code": "0143",
    "description": "Beef Cattle Feedlots (Specialised)"
  },
  {
    "code": "0144",
    "description": "Sheep-Beef Cattle Farming"
  },
  {
    "code": "0145",
    "description": "Grain-Sheep and Grain-Beef Cattle Farming"
  },
  {
    "code": "0146",
    "description": "Rice Growing"
  },
  {
    "code": "0149",
    "description": "Other Grain Growing"
  },
  {
    "code": "015",
    "description": "Other Crop Growing"
  },
  {
    "code": "0151",
    "description": "Sugar Cane Growing"
  },
  {
    "code": "0152",
    "description": "Cotton Growing"
  },
  {
    "code": "0159",
    "description": "Other Crop Growing n.e.c."
  },
  {
    "code": "016",
    "description": "Dairy Cattle Farming"
  },
  {
    "code": "0160",
    "description": "Dairy Cattle Farming"
  },
  {
    "code": "017",
    "description": "Poultry Farming"
  },
  {
    "code": "0171",
    "description": "Poultry Farming (Meat)"
  },
  {
    "code": "0172",
    "description": "Poultry Farming (Eggs)"
  },
  {
    "code": "018",
    "description": "Deer Farming"
  },
  {
    "code": "0180",
    "description": "Deer Farming"
  },
  {
    "code": "019",
    "description": "Other Livestock Farming"
  },
  {
    "code": "0191",
    "description": "Horse Farming"
  },
  {
    "code": "0192",
    "description": "Pig Farming"
  },
  {
    "code": "0193",
    "description": "Beekeeping"
  },
  {
    "code": "0199",
    "description": "Other Livestock Farming n.e.c."
  },
  {
    "code": "02",
    "description": "Aquaculture"
  },
  {
    "code": "020",
    "description": "Aquaculture"
  },
  {
    "code": "0201",
    "description": "Longline and Rack (Offshore) Aquaculture"
  },
  {
    "code": "0202",
    "description": "Caged (Offshore) Aquaculture"
  },
  {
    "code": "0203",
    "description": "Onshore Aquaculture"
  },
  {
    "code": "03",
    "description": "Forestry and Logging"
  },
  {
    "code": "030",
    "description": "Forestry and Logging"
  },
  {
    "code": "0301",
    "description": "Forestry"
  },
  {
    "code": "0302",
    "description": "Logging"
  },
  {
    "code": "04",
    "description": "Fishing, Hunting and Trapping"
  },
  {
    "code": "041",
    "description": "Fishing"
  },
  {
    "code": "0411",
    "description": "Rock Lobster and Crab Potting"
  },
  {
    "code": "0412",
    "description": "Prawn Fishing"
  },
  {
    "code": "0413",
    "description": "Line Fishing"
  },
  {
    "code": "0414",
    "description": "Fish Trawling, Seining and Netting"
  },
  {
    "code": "0419",
    "description": "Other Fishing"
  },
  {
    "code": "042",
    "description": "Hunting and Trapping"
  },
  {
    "code": "0420",
    "description": "Hunting and Trapping"
  },
  {
    "code": "05",
    "description": "Agriculture, Forestry and Fishing Support Services"
  },
  {
    "code": "051",
    "description": " Forestry Support Services"
  },
  {
    "code": "0510",
    "description": "Forestry Support Services"
  },
  {
    "code": "052",
    "description": "Agriculture and Fishing Support Services"
  },
  {
    "code": "0521",
    "description": "Cotton Ginning"
  },
  {
    "code": "0522",
    "description": "Shearing Services"
  },
  {
    "code": "0529",
    "description": "Other Agriculture and Fishing Support Services"
  },
  {
    "code": "B",
    "description": "Mining"
  },
  {
    "code": "06",
    "description": "Coal Mining"
  },
  {
    "code": "060",
    "description": "Coal Mining"
  },
  {
    "code": "0600",
    "description": "Coal Mining"
  },
  {
    "code": "07",
    "description": "Oil and Gas Extraction"
  },
  {
    "code": "070",
    "description": "Oil and Gas Extraction"
  },
  {
    "code": "0700",
    "description": "Oil and Gas Extraction"
  },
  {
    "code": "08",
    "description": "Metal Ore Mining"
  },
  {
    "code": "080",
    "description": "Metal Ore Mining"
  },
  {
    "code": "0801",
    "description": "Iron Ore Mining"
  },
  {
    "code": "0802",
    "description": "Bauxite Mining"
  },
  {
    "code": "0803",
    "description": "Copper Ore Mining"
  },
  {
    "code": "0804",
    "description": "Gold Ore Mining"
  },
  {
    "code": "0805",
    "description": "Mineral Sand Mining"
  },
  {
    "code": "0806",
    "description": "Nickel Ore Mining"
  },
  {
    "code": "0807",
    "description": "Silver-Lead-Zinc Ore Mining"
  },
  {
    "code": "0809",
    "description": "Other Metal Ore Mining"
  },
  {
    "code": "09",
    "description": "Non-Metallic Mineral Mining and Quarrying"
  },
  {
    "code": "091",
    "description": "Construction Material Mining"
  },
  {
    "code": "0911",
    "description": "Gravel and Sand Quarrying"
  },
  {
    "code": "0919",
    "description": "Other Construction Material Mining"
  },
  {
    "code": "099",
    "description": "Other Non-Metallic Mineral Mining and Quarrying"
  },
  {
    "code": "0990",
    "description": "Other Non-Metallic Mineral Mining and Quarrying"
  },
  {
    "code": "10",
    "description": "Exploration and Other Mining Support Services"
  },
  {
    "code": "101",
    "description": "Exploration"
  },
  {
    "code": "1011",
    "description": "Petroleum Exploration"
  },
  {
    "code": "1012",
    "description": "Mineral Exploration"
  },
  {
    "code": "109",
    "description": "Other Mining Support Services"
  },
  {
    "code": "1090",
    "description": "Other Mining Support Services"
  },
  {
    "code": "C",
    "description": "Manufacturing"
  },
  {
    "code": "11",
    "description": "Food Product Manufacturing"
  },
  {
    "code": "111",
    "description": "Meat and Meat Product Manufacturing"
  },
  {
    "code": "1111",
    "description": "Meat Processing"
  },
  {
    "code": "1112",
    "description": "Poultry Processing"
  },
  {
    "code": "1113",
    "description": "Cured Meat and Smallgoods Manufacturing"
  },
  {
    "code": "112",
    "description": "Seafood Processing"
  },
  {
    "code": "1120",
    "description": "Seafood Processing"
  },
  {
    "code": "113",
    "description": "Dairy Product Manufacturing"
  },
  {
    "code": "1131",
    "description": "Milk and Cream Processing"
  },
  {
    "code": "1132",
    "description": "Ice Cream Manufacturing"
  },
  {
    "code": "1133",
    "description": "Cheese and Other Dairy Product Manufacturing"
  },
  {
    "code": "114",
    "description": "Fruit and Vegetable Processing"
  },
  {
    "code": "1140",
    "description": "Fruit and Vegetable Processing"
  },
  {
    "code": "115",
    "description": "Oil and Fat Manufacturing"
  },
  {
    "code": "1150",
    "description": "Oil and Fat Manufacturing"
  },
  {
    "code": "116",
    "description": "Grain Mill and Cereal Product Manufacturing"
  },
  {
    "code": "1161",
    "description": "Grain Mill Product Manufacturing"
  },
  {
    "code": "1162",
    "description": "Cereal, Pasta and Baking Mix Manufacturing"
  },
  {
    "code": "117",
    "description": "Bakery Product Manufacturing"
  },
  {
    "code": "1171",
    "description": "Bread Manufacturing (Factory-based)"
  },
  {
    "code": "1172",
    "description": "Cake and Pastry Manufacturing (Factory-based)"
  },
  {
    "code": "1173",
    "description": "Biscuit Manufacturing (Factory-based)"
  },
  {
    "code": "1174",
    "description": "Bakery Product Manufacturing (Non-factory-based)"
  },
  {
    "code": "118",
    "description": "Sugar and Confectionery Manufacturing"
  },
  {
    "code": "1181",
    "description": "Sugar Manufacturing"
  },
  {
    "code": "1182",
    "description": "Confectionery Manufacturing"
  },
  {
    "code": "119",
    "description": "Other Food Product Manufacturing"
  },
  {
    "code": "1191",
    "description": "Potato Crisps and Corn Chips Manufacturing"
  },
  {
    "code": "1192",
    "description": "Prepared Animal and Bird Feed Manufacturing"
  },
  {
    "code": "1199",
    "description": "Other Food Products Manufacturing n.e.c."
  },
  {
    "code": "12",
    "description": " Beverage and Tobacco Product Manufacturing"
  },
  {
    "code": "121",
    "description": "Beverage Manufacturing"
  },
  {
    "code": "1211",
    "description": "Soft Drink, Cordial and Syrup Manufacturing"
  },
  {
    "code": "1212",
    "description": "Beer Manufacturing"
  },
  {
    "code": "1213",
    "description": "Spirit Manufacturing"
  },
  {
    "code": "1214",
    "description": "Wine and Other Alcoholic Beverage Manufacturing"
  },
  {
    "code": "122",
    "description": "Cigarette and Tobacco Product Manufacturing"
  },
  {
    "code": "1220",
    "description": "Cigarette and Tobacco Product Manufacturing"
  },
  {
    "code": "13",
    "description": "Textile, Leather, Clothing and Footwear Manufacturing"
  },
  {
    "code": "131",
    "description": "Textile Fibre, Yarn and Woven Fabric Manufacturing"
  },
  {
    "code": "1311",
    "description": "Wool Scouring"
  },
  {
    "code": "1312",
    "description": "Natural Fibre Textile Manufacturing"
  },
  {
    "code": "1313",
    "description": "Synthetic Fibre Textile Manufacturing"
  },
  {
    "code": "132",
    "description": "Leather Tanning and Fur Dressing"
  },
  {
    "code": "1320",
    "description": "Leather Tanning and Fur Dressing"
  },
  {
    "code": "133",
    "description": "Textile Product Manufacturing"
  },
  {
    "code": "1331",
    "description": "Textile Floor Covering Manufacturing"
  },
  {
    "code": "1332",
    "description": "Rope, Cordage and Twine Manufacturing"
  },
  {
    "code": "1333",
    "description": "Cut and Sewn Textile Product Manufacturing"
  },
  {
    "code": "1334",
    "description": "Textile Finishing and Other Textile Product Manufacturing"
  },
  {
    "code": "134",
    "description": "Knitted Product Manufacturing"
  },
  {
    "code": "1340",
    "description": "Knitted Product Manufacturing"
  },
  {
    "code": "135",
    "description": "Clothing and Footwear Manufacturing"
  },
  {
    "code": "1351",
    "description": "Clothing Manufacturing"
  },
  {
    "code": "1352",
    "description": "Footwear Manufacturing"
  },
  {
    "code": "14",
    "description": "Wood Product Manufacturing"
  },
  {
    "code": "141",
    "description": "Log Sawmilling and Timber Dressing"
  },
  {
    "code": "1411",
    "description": "Log Sawmilling"
  },
  {
    "code": "1412",
    "description": "Wood Chipping"
  },
  {
    "code": "1413",
    "description": "Timber Resawing and Dressing"
  },
  {
    "code": "149",
    "description": "Other Wood Product Manufacturing"
  },
  {
    "code": "1491",
    "description": "Prefabricated Wooden Building Manufacturing"
  },
  {
    "code": "1492",
    "description": "Wooden Structural Fittings and Components Manufacturing"
  },
  {
    "code": "1493",
    "description": "Veneer and Plywood Manufacturing"
  },
  {
    "code": "1494",
    "description": "Reconstituted Wood Product Manufacturing"
  },
  {
    "code": "1499",
    "description": "Other Wood Product Manufacturing n.e.c."
  },
  {
    "code": "15",
    "description": "Pulp, Paper and Converted Paper Product Manufacturing"
  },
  {
    "code": "151",
    "description": "Pulp, Paper and Paperboard Manufacturing"
  },
  {
    "code": "1510",
    "description": "Pulp, Paper and Paperboard Manufacturing"
  },
  {
    "code": "152",
    "description": "Converted Paper Product Manufacturing"
  },
  {
    "code": "1521",
    "description": "Corrugated Paperboard and Paperboard Container Manufacturing"
  },
  {
    "code": "1522",
    "description": "Paper Bag and Sack Manufacturing"
  },
  {
    "code": "1523",
    "description": "Paper Stationery Manufacturing"
  },
  {
    "code": "1524",
    "description": "Sanitary Paper Product Manufacturing"
  },
  {
    "code": "1529",
    "description": "Other Converted Paper Product Manufacturing"
  },
  {
    "code": "16",
    "description": "Printing"
  },
  {
    "code": "161",
    "description": "Printing"
  },
  {
    "code": "1611",
    "description": "Printing"
  },
  {
    "code": "1612",
    "description": "Printing Support Services"
  },
  {
    "code": "162",
    "description": "Reproduction of Recorded Media"
  },
  {
    "code": "1620",
    "description": "Reproduction of Recorded Media"
  },
  {
    "code": "17",
    "description": " Petroleum and Coal Product Manufacturing"
  },
  {
    "code": "170",
    "description": "Petroleum Refining and Petroleum and Coal Product Manufacturing"
  },
  {
    "code": "1701",
    "description": "Petroleum Refining and Petroleum Fuels Manufacturing"
  },
  {
    "code": "1709",
    "description": "Other Petroleum and Coal Product Manufacturing"
  },
  {
    "code": "18",
    "description": "Basic Chemical and Chemical Product Manufacturing"
  },
  {
    "code": "181",
    "description": "Chemical Manufacturing"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing"
  },
  {
    "code": "1812",
    "description": "Basic Organic Chemical Manufacturing"
  },
  {
    "code": "1813",
    "description": "Basic Inorganic Chemical Manufacturing"
  },
  {
    "code": "182",
    "description": "Basic Polymer Manufacturing"
  },
  {
    "code": "1821",
    "description": "Synthetic Resin and Synthetic Rubber Manufacturing"
  },
  {
    "code": "1829",
    "description": "Other Basic Polymer Manufacturing"
  },
  {
    "code": "183",
    "description": "Fertiliser and Pesticide Manufacturing"
  },
  {
    "code": "1831",
    "description": "Fertiliser Manufacturing"
  },
  {
    "code": "1832",
    "description": "Pesticide Manufacturing"
  },
  {
    "code": "184",
    "description": "Pharmaceutical and Medicinal Product Manufacturing"
  },
  {
    "code": "1841",
    "description": "Human Pharmaceutical and Medicinal Product Manufacturing"
  },
  {
    "code": "1842",
    "description": "Veterinary Pharmaceutical and Medicinal Product Manufacturing"
  },
  {
    "code": "185",
    "description": "Cleaning Compound and Toiletry Preparation Manufacturing"
  },
  {
    "code": "1851",
    "description": "Cleaning Compound Manufacturing"
  },
  {
    "code": "1852",
    "description": "Cosmetic and Toiletry Preparation Manufacturing"
  },
  {
    "code": "189",
    "description": "Other Basic Chemical Product Manufacturing"
  },
  {
    "code": "1891",
    "description": "Photographic Chemical Manufacturing"
  },
  {
    "code": "1892",
    "description": "Explosives Manufacturing"
  },
  {
    "code": "1899",
    "description": "Other Basic Chemical Product Manufacturing n.e.c."
  },
  {
    "code": "19",
    "description": "Polymer Product and Rubber Product Manufacturing"
  },
  {
    "code": "191",
    "description": "Polymer Product Manufacturing"
  },
  {
    "code": "1911",
    "description": "Polymer Film and Sheet Packaging Material Manufacturing"
  },
  {
    "code": "1912",
    "description": "Rigid and Semi Rigid Polymer Product Manufacturing"
  },
  {
    "code": "1913",
    "description": "Polymer Foam Product Manufacturing"
  },
  {
    "code": "1914",
    "description": "Tyre Manufacturing"
  },
  {
    "code": "1915",
    "description": "Adhesive Manufacturing"
  },
  {
    "code": "1916",
    "description": "Paint and Coatings Manufacturing"
  },
  {
    "code": "1919",
    "description": "Other Polymer Product Manufacturing"
  },
  {
    "code": "192",
    "description": "Natural Rubber Product Manufacturing"
  },
  {
    "code": "1920",
    "description": "Natural Rubber Product Manufacturing"
  },
  {
    "code": "20",
    "description": "Non-Metallic Mineral Product Manufacturing"
  },
  {
    "code": "201",
    "description": "Glass and Glass Product Manufacturing"
  },
  {
    "code": "2010",
    "description": "Glass and Glass Product Manufacturing"
  },
  {
    "code": "202",
    "description": "Ceramic Product Manufacturing"
  },
  {
    "code": "2021",
    "description": "Clay Brick Manufacturing"
  },
  {
    "code": "2029",
    "description": "Other Ceramic Product Manufacturing"
  },
  {
    "code": "203",
    "description": "Cement, Lime, Plaster and Concrete Product Manufacturing"
  },
  {
    "code": "2031",
    "description": "Cement and Lime Manufacturing"
  },
  {
    "code": "2032",
    "description": "Plaster and Gypsum Product Manufacturing"
  },
  {
    "code": "2033",
    "description": "Ready-Mixed Concrete Manufacturing"
  },
  {
    "code": "2034",
    "description": "Concrete Product Manufacturing"
  },
  {
    "code": "209",
    "description": "Other Non-Metallic Mineral Product Manufacturing"
  },
  {
    "code": "2090",
    "description": "Other Non-Metallic Mineral Product Manufacturing"
  },
  {
    "code": "21",
    "description": "Primary Metal and Metal Product Manufacturing"
  },
  {
    "code": "211",
    "description": "Basic Ferrous Metal Manufacturing"
  },
  {
    "code": "2110",
    "description": "Iron Smelting and Steel Manufacturing"
  },
  {
    "code": "212",
    "description": "Basic Ferrous Metal Product Manufacturing"
  },
  {
    "code": "2121",
    "description": "Iron and Steel Casting"
  },
  {
    "code": "2122",
    "description": "Steel Pipe and Tube Manufacturing"
  },
  {
    "code": "213",
    "description": "Basic Non-Ferrous Metal Manufacturing"
  },
  {
    "code": "2131",
    "description": "Alumina Production"
  },
  {
    "code": "2132",
    "description": "Aluminium Smelting"
  },
  {
    "code": "2133",
    "description": "Copper, Silver, Lead, and Zinc Smelting and Refining"
  },
  {
    "code": "2139",
    "description": "Other Basic Non-Ferrous Metal Manufacturing"
  },
  {
    "code": "214",
    "description": "Basic Non-Ferrous Metal Product Manufacturing"
  },
  {
    "code": "2141",
    "description": "Non-Ferrous Metal Casting"
  },
  {
    "code": "2142",
    "description": "Aluminium Rolling, Drawing, Extruding"
  },
  {
    "code": "2149",
    "description": "Other Basic Non-Ferrous Metal Product Manufacturing"
  },
  {
    "code": "22",
    "description": "Fabricated Metal Product Manufacturing"
  },
  {
    "code": "221",
    "description": " Iron and Steel Forging"
  },
  {
    "code": "2210",
    "description": "Iron and Steel Forging"
  },
  {
    "code": "222",
    "description": "Structural Metal Product Manufacturing"
  },
  {
    "code": "2221",
    "description": "Structural Steel Fabricating"
  },
  {
    "code": "2222",
    "description": "Prefabricated Metal Building Manufacturing"
  },
  {
    "code": "2223",
    "description": "Architectural Aluminium Product Manufacturing"
  },
  {
    "code": "2224",
    "description": "Metal Roof and Guttering Manufacturing (except Aluminium)"
  },
  {
    "code": "2229",
    "description": "Other Structural Metal Product Manufacturing"
  },
  {
    "code": "223",
    "description": "Metal Container Manufacturing"
  },
  {
    "code": "2231",
    "description": "Boiler, Tank and Other Heavy Gauge Metal Container Manufacturing"
  },
  {
    "code": "2239",
    "description": "Other Metal Container Manufacturing"
  },
  {
    "code": "224",
    "description": "Other Sheet Metal Product Manufacturing"
  },
  {
    "code": "2240",
    "description": "Other Sheet Metal Product Manufacturing"
  },
  {
    "code": "229",
    "description": "Other Fabricated Metal Product Manufacturing"
  },
  {
    "code": "2291",
    "description": "Spring and Wire Product Manufacturing"
  },
  {
    "code": "2292",
    "description": "Nut, Bolt, Screw and Rivet Manufacturing"
  },
  {
    "code": "2293",
    "description": "Metal Coating and Finishing"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c."
  },
  {
    "code": "23",
    "description": "Transport Equipment Manufacturing"
  },
  {
    "code": "231",
    "description": "Motor Vehicle and Motor Vehicle Part Manufacturing"
  },
  {
    "code": "2311",
    "description": "Motor Vehicle Manufacturing"
  },
  {
    "code": "2312",
    "description": "Motor Vehicle Body and Trailer Manufacturing"
  },
  {
    "code": "2313",
    "description": "Automotive Electrical Components Manufacturing"
  },
  {
    "code": "2319",
    "description": "Other Motor Vehicle Parts Manufacturing"
  },
  {
    "code": "239",
    "description": "Other Transport Equipment Manufacturing"
  },
  {
    "code": "2391",
    "description": "Shipbuilding and Repair Services"
  },
  {
    "code": "2392",
    "description": "Boatbuilding and Repair Services"
  },
  {
    "code": "2393",
    "description": "Railway Rolling Stock Manufacturing and Repair Services"
  },
  {
    "code": "2394",
    "description": "Aircraft Manufacturing and Repair Services"
  },
  {
    "code": "2399",
    "description": "Other Transport Equipment Manufacturing n.e.c."
  },
  {
    "code": "24",
    "description": "Machinery and Equipment Manufacturing"
  },
  {
    "code": "241",
    "description": "Professional and Scientific Equipment Manufacturing"
  },
  {
    "code": "2411",
    "description": "Photographic, Optical and Ophthalmic Equipment Manufacturing"
  },
  {
    "code": "2412",
    "description": "Medical and Surgical Equipment Manufacturing"
  },
  {
    "code": "2419",
    "description": "Other Professional and Scientific Equipment Manufacturing"
  },
  {
    "code": "242",
    "description": "Computer and Electronic Equipment Manufacturing"
  },
  {
    "code": "2421",
    "description": "Computer and Electronic Office Equipment Manufacturing"
  },
  {
    "code": "2422",
    "description": "Communications Equipment Manufacturing"
  },
  {
    "code": "2429",
    "description": "Other Electronic Equipment Manufacturing"
  },
  {
    "code": "243",
    "description": "Electrical Equipment Manufacturing"
  },
  {
    "code": "2431",
    "description": "Electric Cable and Wire Manufacturing"
  },
  {
    "code": "2432",
    "description": "Electric Lighting Equipment Manufacturing"
  },
  {
    "code": "2439",
    "description": "Other Electrical Equipment Manufacturing"
  },
  {
    "code": "244",
    "description": "Domestic Appliance Manufacturing"
  },
  {
    "code": "2441",
    "description": "Whiteware Appliance Manufacturing"
  },
  {
    "code": "2449",
    "description": "Other Domestic Appliance Manufacturing"
  },
  {
    "code": "245",
    "description": "Pump, Compressor, Heating and Ventilation Equipment Manufacturing"
  },
  {
    "code": "2451",
    "description": "Pumps and Compressors Manufacturing"
  },
  {
    "code": "2452",
    "description": "Fixed Space Heating, Cooling and Ventilation Equipment Manufacturing"
  },
  {
    "code": "246",
    "description": "Specialised Machinery and Equipment Manufacturing"
  },
  {
    "code": "2461",
    "description": "Agricultural Machinery and Equipment Manufacturing"
  },
  {
    "code": "2462",
    "description": "Mining and Construction Machinery Manufacturing"
  },
  {
    "code": "2463",
    "description": "Machine Tool and Parts Manufacturing"
  },
  {
    "code": "2469",
    "description": "Other Specialised Machinery and Equipment Manufacturing"
  },
  {
    "code": "249",
    "description": "Other Machinery and Equipment Manufacturing"
  },
  {
    "code": "2491",
    "description": "Lifting and Material Handling Equipment Manufacturing"
  },
  {
    "code": "2499",
    "description": "Other Machinery and Equipment Manufacturing n.e.c."
  },
  {
    "code": "25",
    "description": "Furniture and Other Manufacturing"
  },
  {
    "code": "251",
    "description": "Furniture Manufacturing"
  },
  {
    "code": "2511",
    "description": "Wooden Furniture and Upholstered Seat Manufacturing"
  },
  {
    "code": "2512",
    "description": "Metal Furniture Manufacturing"
  },
  {
    "code": "2513",
    "description": "Mattress Manufacturing"
  },
  {
    "code": "2519",
    "description": "Other Furniture Manufacturing"
  },
  {
    "code": "259",
    "description": "Other Manufacturing"
  },
  {
    "code": "2591",
    "description": "Jewellery and Silverware Manufacturing"
  },
  {
    "code": "2592",
    "description": "Toy, Sporting and Recreational Product Manufacturing"
  },
  {
    "code": "2599",
    "description": "Other Manufacturing n.e.c."
  },
  {
    "code": "D",
    "description": "Electricity, Gas, Water and Waste Services"
  },
  {
    "code": "26",
    "description": " Electricity Supply"
  },
  {
    "code": "261",
    "description": "Electricity Generation"
  },
  {
    "code": "2611",
    "description": "Fossil Fuel Electricity Generation"
  },
  {
    "code": "2612",
    "description": "Hydro-electricity Generation"
  },
  {
    "code": "2619",
    "description": "Other Electricity Generation"
  },
  {
    "code": "262",
    "description": "Electricity Transmission"
  },
  {
    "code": "2620",
    "description": "Electricity Transmission"
  },
  {
    "code": "263",
    "description": "Electricity Distribution"
  },
  {
    "code": "2630",
    "description": "Electricity Distribution"
  },
  {
    "code": "264",
    "description": "On Selling Electricity and Electricity Market Operation"
  },
  {
    "code": "2640",
    "description": "On Selling Electricity and Electricity Market Operation"
  },
  {
    "code": "27",
    "description": "Gas Supply"
  },
  {
    "code": "270",
    "description": "Gas Supply"
  },
  {
    "code": "2700",
    "description": "Gas Supply"
  },
  {
    "code": "28",
    "description": "Water Supply, Sewerage and Drainage Services"
  },
  {
    "code": "281",
    "description": "Water Supply, Sewerage and Drainage Services"
  },
  {
    "code": "2811",
    "description": "Water Supply"
  },
  {
    "code": "2812",
    "description": "Sewerage and Drainage Services"
  },
  {
    "code": "29",
    "description": "Waste Collection, Treatment and Disposal Services"
  },
  {
    "code": "291",
    "description": "Waste Collection Services"
  },
  {
    "code": "2911",
    "description": "Solid Waste Collection Services"
  },
  {
    "code": "2919",
    "description": "Other Waste Collection Services"
  },
  {
    "code": "292",
    "description": "Waste Treatment, Disposal and Remediation Services"
  },
  {
    "code": "2921",
    "description": "Waste Treatment and Disposal Services"
  },
  {
    "code": "2922",
    "description": "Waste Remediation and Materials Recovery Services"
  },
  {
    "code": "E",
    "description": "Construction"
  },
  {
    "code": "30",
    "description": " Building Construction"
  },
  {
    "code": "301",
    "description": "Residential Building Construction"
  },
  {
    "code": "3011",
    "description": "House Construction"
  },
  {
    "code": "3019",
    "description": "Other Residential Building Construction"
  },
  {
    "code": "302",
    "description": "Non-Residential Building Construction"
  },
  {
    "code": "3020",
    "description": "Non-Residential Building Construction"
  },
  {
    "code": "31",
    "description": "Heavy and Civil Engineering Construction"
  },
  {
    "code": "310",
    "description": "Heavy and Civil Engineering Construction"
  },
  {
    "code": "3101",
    "description": "Road and Bridge Construction"
  },
  {
    "code": "3109",
    "description": "Other Heavy and Civil Engineering Construction"
  },
  {
    "code": "32",
    "description": "Construction Services"
  },
  {
    "code": "321",
    "description": "Land Development and Site Preparation Services"
  },
  {
    "code": "3211",
    "description": "Land Development and Subdivision"
  },
  {
    "code": "3212",
    "description": "Site Preparation Services"
  },
  {
    "code": "322",
    "description": "Building Structure Services"
  },
  {
    "code": "3221",
    "description": "Concreting Services"
  },
  {
    "code": "3222",
    "description": "Bricklaying Services"
  },
  {
    "code": "3223",
    "description": "Roofing Services"
  },
  {
    "code": "3224",
    "description": "Structural Steel Erection Services"
  },
  {
    "code": "323",
    "description": "Building Installation Services"
  },
  {
    "code": "3231",
    "description": "Plumbing Services"
  },
  {
    "code": "3232",
    "description": "Electrical Services"
  },
  {
    "code": "3233",
    "description": "Air Conditioning and Heating Services"
  },
  {
    "code": "3234",
    "description": "Fire and Security Alarm Installation Services"
  },
  {
    "code": "3239",
    "description": "Other Building Installation Services"
  },
  {
    "code": "324",
    "description": "Building Completion Services"
  },
  {
    "code": "3241",
    "description": "Plastering and Ceiling Services"
  },
  {
    "code": "3242",
    "description": "Carpentry Services"
  },
  {
    "code": "3243",
    "description": "Tiling and Carpeting Services"
  },
  {
    "code": "3244",
    "description": "Painting and Decorating Services"
  },
  {
    "code": "3245",
    "description": "Glazing Services"
  },
  {
    "code": "329",
    "description": "Other Construction Services"
  },
  {
    "code": "3291",
    "description": "Landscape Construction Services"
  },
  {
    "code": "3292",
    "description": "Hire of Construction Machinery with Operator"
  },
  {
    "code": "3299",
    "description": "Other Construction Services n.e.c."
  },
  {
    "code": "F",
    "description": "Wholesale Trade"
  },
  {
    "code": "33",
    "description": "Basic Material Wholesaling"
  },
  {
    "code": "331",
    "description": "Agricultural Product Wholesaling"
  },
  {
    "code": "3311",
    "description": "Wool Wholesaling"
  },
  {
    "code": "3312",
    "description": "Cereal Grain Wholesaling"
  },
  {
    "code": "3319",
    "description": "Other Agricultural Product Wholesaling"
  },
  {
    "code": "332",
    "description": "Mineral, Metal and Chemical Wholesaling"
  },
  {
    "code": "3321",
    "description": "Petroleum Product Wholesaling"
  },
  {
    "code": "3322",
    "description": "Metal and Mineral Wholesaling"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling"
  },
  {
    "code": "333",
    "description": "Timber and Hardware Goods Wholesaling"
  },
  {
    "code": "3331",
    "description": "Timber Wholesaling"
  },
  {
    "code": "3332",
    "description": "Plumbing Goods Wholesaling"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling"
  },
  {
    "code": "34",
    "description": "Machinery and Equipment Wholesaling"
  },
  {
    "code": "341",
    "description": "Specialised Industrial Machinery and Equipment Wholesaling"
  },
  {
    "code": "3411",
    "description": "Agricultural and Construction Machinery Wholesaling"
  },
  {
    "code": "3419",
    "description": "Other Specialised Industrial Machinery and Equipment Wholesaling"
  },
  {
    "code": "349",
    "description": "Other Machinery and Equipment Wholesaling"
  },
  {
    "code": "3491",
    "description": "Professional and Scientific Goods Wholesaling"
  },
  {
    "code": "3492",
    "description": "Computer and Computer Peripherals Wholesaling"
  },
  {
    "code": "3493",
    "description": "Telecommunication Goods Wholesaling"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling"
  },
  {
    "code": "3499",
    "description": "Other Machinery and Equipment Wholesaling n"
  },
  {
    "code": "35",
    "description": "Motor Vehicle and Motor Vehicle Parts Wholesaling"
  },
  {
    "code": "350",
    "description": "Motor Vehicle and Motor Vehicle Parts Wholesaling"
  },
  {
    "code": "3501",
    "description": "Car Wholesaling"
  },
  {
    "code": "3502",
    "description": "Commercial Vehicle Wholesaling"
  },
  {
    "code": "3503",
    "description": "Trailer and Other Motor Vehicle Wholesaling"
  },
  {
    "code": "3504",
    "description": "Motor Vehicle New Part Wholesaling"
  },
  {
    "code": "3505",
    "description": "Motor Vehicle Dismantling and Used Part Wholesaling"
  },
  {
    "code": "36",
    "description": "Grocery, Liquor and Tobacco Product Wholesaling"
  },
  {
    "code": "360",
    "description": "Grocery, Liquor and Tobacco Product Wholesaling"
  },
  {
    "code": "3601",
    "description": "General Line Groceries Wholesaling"
  },
  {
    "code": "3602",
    "description": "Meat, Poultry and Smallgoods Wholesaling"
  },
  {
    "code": "3603",
    "description": "Dairy Produce Wholesaling"
  },
  {
    "code": "3604",
    "description": "Fish and Seafood Wholesaling"
  },
  {
    "code": "3605",
    "description": "Fruit and Vegetable Wholesaling"
  },
  {
    "code": "3606",
    "description": "Liquor and Tobacco Product Wholesaling"
  },
  {
    "code": "3609",
    "description": "Other Grocery Wholesaling"
  },
  {
    "code": "37",
    "description": "Other Goods Wholesaling"
  },
  {
    "code": "371",
    "description": "Textile, Clothing and Footwear Wholesaling"
  },
  {
    "code": "3711",
    "description": "Textile Product Wholesaling"
  },
  {
    "code": "3712",
    "description": "Clothing and Footwear Wholesaling"
  },
  {
    "code": "372",
    "description": "Pharmaceutical and Toiletry Goods Wholesaling"
  },
  {
    "code": "3720",
    "description": "Pharmaceutical and Toiletry Goods Wholesaling"
  },
  {
    "code": "373",
    "description": "Furniture, Floor Coverings and Other Goods Wholesaling"
  },
  {
    "code": "3731",
    "description": "Furniture and Floor Coverings Wholesaling"
  },
  {
    "code": "3732",
    "description": "Jewellery and Watch Wholesaling"
  },
  {
    "code": "3733",
    "description": "Kitchen and Dining Ware Wholesaling"
  },
  {
    "code": "3734",
    "description": "Toy and Sporting Goods Wholesaling"
  },
  {
    "code": "3735",
    "description": "Book and Magazine Wholesaling"
  },
  {
    "code": "3736",
    "description": "Paper Product Wholesaling"
  },
  {
    "code": "3739",
    "description": "Other Goods Wholesaling n.e.c."
  },
  {
    "code": "38",
    "description": "Commission Based Wholesaling"
  },
  {
    "code": "380",
    "description": "Commission Based Wholesaling"
  },
  {
    "code": "3800",
    "description": "Commission Based Wholesaling"
  },
  {
    "code": "G",
    "description": "Retail Trade"
  },
  {
    "code": "39",
    "description": "Motor Vehicle and Motor Vehicle Parts Retailing"
  },
  {
    "code": "391",
    "description": "Motor Vehicle Retailing"
  },
  {
    "code": "3911",
    "description": "Car Retailing"
  },
  {
    "code": "3912",
    "description": "Motor Cycle Retailing"
  },
  {
    "code": "3913",
    "description": "Trailer and Other Motor Vehicle Retailing"
  },
  {
    "code": "392",
    "description": "Motor Vehicle Parts Retailing"
  },
  {
    "code": "3921",
    "description": "Motor Vehicle Parts Retailing"
  },
  {
    "code": "3922",
    "description": "Tyre Retailing"
  },
  {
    "code": "40",
    "description": "Fuel Retailing"
  },
  {
    "code": "400",
    "description": "Fuel Retailing"
  },
  {
    "code": "4000",
    "description": "Fuel Retailing"
  },
  {
    "code": "41",
    "description": "Food Retailing"
  },
  {
    "code": "411",
    "description": "Supermarket and Grocery Stores"
  },
  {
    "code": "4110",
    "description": "Supermarket and Grocery Stores"
  },
  {
    "code": "412",
    "description": "Specialised Food Retailing"
  },
  {
    "code": "4121",
    "description": "Fresh Meat, Fish and Poultry Retailing"
  },
  {
    "code": "4122",
    "description": "Fruit and Vegetable Retailing"
  },
  {
    "code": "4123",
    "description": "Liquor Retailing"
  },
  {
    "code": "4129",
    "description": "Other Specialised Food Retailing"
  },
  {
    "code": "42",
    "description": "Other Store-Based Retailing"
  },
  {
    "code": "421",
    "description": "Furniture, Floor Coverings, Houseware and Textile Goods Retailing"
  },
  {
    "code": "4211",
    "description": "Furniture Retailing"
  },
  {
    "code": "4212",
    "description": "Floor Coverings Retailing"
  },
  {
    "code": "4213",
    "description": "Houseware Retailing"
  },
  {
    "code": "4214",
    "description": "Manchester and Other Textile Goods Retailing"
  },
  {
    "code": "422",
    "description": "Electrical and Electronic Goods Retailing"
  },
  {
    "code": "4221",
    "description": "Electrical, Electronic and Gas Appliance Retailing"
  },
  {
    "code": "4222",
    "description": "Computer and Computer Peripherals Retailing"
  },
  {
    "code": "4229",
    "description": "Other Electrical and Electronic Goods Retailing"
  },
  {
    "code": "423",
    "description": "Hardware, Building and Garden Supplies Retailing"
  },
  {
    "code": "4231",
    "description": "Hardware and Building Supplies Retailing"
  },
  {
    "code": "4232",
    "description": "Garden Supplies Retailing"
  },
  {
    "code": "424",
    "description": "Recreational Goods Retailing"
  },
  {
    "code": "4241",
    "description": "Sport and Camping Equipment Retailing"
  },
  {
    "code": "4242",
    "description": "Entertainment Media Retailing"
  },
  {
    "code": "4243",
    "description": "Toy and Game Retailing"
  },
  {
    "code": "4244",
    "description": "Newspaper and Book Retailing"
  },
  {
    "code": "4245",
    "description": "Marine Equipment Retailing"
  },
  {
    "code": "425",
    "description": "Clothing, Footwear and Personal Accessories Retailing"
  },
  {
    "code": "4251",
    "description": "Clothing Retailing"
  },
  {
    "code": "4252",
    "description": "Footwear Retailing"
  },
  {
    "code": "4253",
    "description": "Watch and Jewellery Retailing"
  },
  {
    "code": "4259",
    "description": "Other Personal Accessories Retailing"
  },
  {
    "code": "426",
    "description": "Department Stores"
  },
  {
    "code": "4260",
    "description": "Department Stores"
  },
  {
    "code": "427",
    "description": "Pharmaceutical and Other Store-Based Retailing"
  },
  {
    "code": "4271",
    "description": "Pharmaceutical, Cosmetic and Toiletry Goods Retailing"
  },
  {
    "code": "4272",
    "description": "Stationery Goods Retailing"
  },
  {
    "code": "4273",
    "description": "Antique and Used Goods Retailing"
  },
  {
    "code": "4274",
    "description": "Flower Retailing"
  },
  {
    "code": "4279",
    "description": "Other Store-Based Retailing n.e.c."
  },
  {
    "code": "43",
    "description": "Non Store Retailing and Retail Commission Based Buying and/or Selling"
  },
  {
    "code": "431",
    "description": "Non Store Retailing"
  },
  {
    "code": "4310",
    "description": "Non Store Retailing"
  },
  {
    "code": "432",
    "description": "Retail Commission Based Buying and/or Selling"
  },
  {
    "code": "4320",
    "description": "Retail Commission Based Buying and/or Selling"
  },
  {
    "code": "H",
    "description": "Accommodation and Food Services"
  },
  {
    "code": "44",
    "description": "Accommodation"
  },
  {
    "code": "440",
    "description": "Accommodation"
  },
  {
    "code": "4400",
    "description": "Accommodation"
  },
  {
    "code": "45",
    "description": "Food and Beverage Services"
  },
  {
    "code": "451",
    "description": "Cafes, Restaurants and Takeaway Food Services"
  },
  {
    "code": "4511",
    "description": "Cafes and Restaurants"
  },
  {
    "code": "4512",
    "description": "Takeaway Food Services"
  },
  {
    "code": "4513",
    "description": "Catering Services"
  },
  {
    "code": "452",
    "description": "Pubs, Taverns and Bars"
  },
  {
    "code": "4520",
    "description": "Pubs, Taverns and Bars"
  },
  {
    "code": "453",
    "description": "Clubs (Hospitality)"
  },
  {
    "code": "4530",
    "description": "Clubs (Hospitality)"
  },
  {
    "code": "I",
    "description": "Transport, Postal and Warehousing"
  },
  {
    "code": "46",
    "description": "Road Transport"
  },
  {
    "code": "461",
    "description": "Road Freight Transport"
  },
  {
    "code": "4610",
    "description": "Road Freight Transport"
  },
  {
    "code": "462",
    "description": "Road Passenger Transport"
  },
  {
    "code": "4621",
    "description": "Interurban and Rural Bus Transport"
  },
  {
    "code": "4622",
    "description": "Urban Bus Transport (Including Tramway)"
  },
  {
    "code": "4623",
    "description": "Taxi and Other Road Transport"
  },
  {
    "code": "47",
    "description": "Rail Transport"
  },
  {
    "code": "471",
    "description": "Rail Freight Transport"
  },
  {
    "code": "4710",
    "description": "Rail Freight Transport"
  },
  {
    "code": "472",
    "description": "Rail Passenger Transport"
  },
  {
    "code": "4720",
    "description": "Rail Passenger Transport"
  },
  {
    "code": "48",
    "description": "Water Transport"
  },
  {
    "code": "481",
    "description": "Water Freight Transport"
  },
  {
    "code": "4810",
    "description": "Water Freight Transport"
  },
  {
    "code": "482",
    "description": "Water Passenger Transport"
  },
  {
    "code": "4820",
    "description": "Water Passenger Transport"
  },
  {
    "code": "49",
    "description": "Air and Space Transport"
  },
  {
    "code": "490",
    "description": "Air and Space Transport"
  },
  {
    "code": "4900",
    "description": "Air and Space Transport"
  },
  {
    "code": "50",
    "description": "Other Transport"
  },
  {
    "code": "501",
    "description": "Scenic and Sightseeing Transport"
  },
  {
    "code": "5010",
    "description": "Scenic and Sightseeing Transport"
  },
  {
    "code": "502",
    "description": "Pipeline and Other Transport"
  },
  {
    "code": "5021",
    "description": "Pipeline Transport"
  },
  {
    "code": "5029",
    "description": "Other Transport n.e.c."
  },
  {
    "code": "51",
    "description": "Postal and Courier Pick-up and Delivery Services"
  },
  {
    "code": "510",
    "description": "Postal and Courier Pick-up and Delivery Services"
  },
  {
    "code": "5101",
    "description": "Postal Services"
  },
  {
    "code": "5102",
    "description": "Courier Pick-up and Delivery Services"
  },
  {
    "code": "52",
    "description": "Transport Support Services"
  },
  {
    "code": "521",
    "description": "Water Transport Support Services"
  },
  {
    "code": "5211",
    "description": "Stevedoring Services"
  },
  {
    "code": "5212",
    "description": "Port and Water Transport Terminal Operations"
  },
  {
    "code": "5219",
    "description": "Other Water Transport Support Services"
  },
  {
    "code": "522",
    "description": "Air Transport Support Services"
  },
  {
    "code": "5220",
    "description": "Airport Operations and Other Air Transport Support Services"
  },
  {
    "code": "529",
    "description": "Other Transport Support Services"
  },
  {
    "code": "5291",
    "description": "Customs Agency Services"
  },
  {
    "code": "5292",
    "description": "Freight Forwarding Services"
  },
  {
    "code": "5299",
    "description": "Other Transport Support Services n.e.c"
  },
  {
    "code": "53",
    "description": "Warehousing and Storage Services"
  },
  {
    "code": "530",
    "description": "Warehousing and Storage Services"
  },
  {
    "code": "5301",
    "description": "Grain Storage Services"
  },
  {
    "code": "5309",
    "description": "Other Warehousing and Storage Services"
  },
  {
    "code": "J",
    "description": "Information Media and Telecommunications"
  },
  {
    "code": "54",
    "description": "Publishing (except Internet and Music Publishing)"
  },
  {
    "code": "541",
    "description": "Newspaper, Periodical, Book and Directory Publishing"
  },
  {
    "code": "5411",
    "description": "Newspaper Publishing"
  },
  {
    "code": "5412",
    "description": "Magazine and Other Periodical Publishing"
  },
  {
    "code": "5413",
    "description": "Book Publishing"
  },
  {
    "code": "5414",
    "description": "Directory and Mailing List Publishing"
  },
  {
    "code": "5419",
    "description": "Other Publishing (except Software, Music and Internet)"
  },
  {
    "code": "542",
    "description": "Software Publishing"
  },
  {
    "code": "5420",
    "description": "Software Publishing"
  },
  {
    "code": "55",
    "description": "Motion Picture and Sound Recording Activities"
  },
  {
    "code": "551",
    "description": "Motion Picture and Video Activities"
  },
  {
    "code": "5511",
    "description": "Motion Picture and Video Production"
  },
  {
    "code": "5512",
    "description": "Motion Picture and Video Distribution"
  },
  {
    "code": "5513",
    "description": "Motion Picture Exhibition"
  },
  {
    "code": "5514",
    "description": "Postproduction Services and Other Motion Picture and Video Activities"
  },
  {
    "code": "552",
    "description": "Sound Recording and Music Publishing"
  },
  {
    "code": "5521",
    "description": "Music Publishing"
  },
  {
    "code": "5522",
    "description": "Music and Other Sound Recording Activities"
  },
  {
    "code": "56",
    "description": "Broadcasting (except Internet)"
  },
  {
    "code": "561",
    "description": "Radio Broadcasting"
  },
  {
    "code": "5610",
    "description": "Radio Broadcasting"
  },
  {
    "code": "562",
    "description": "Television Broadcasting"
  },
  {
    "code": "5621",
    "description": "Free-to-Air Television Broadcasting"
  },
  {
    "code": "5622",
    "description": "Cable and Other Subscription Programming"
  },
  {
    "code": "57",
    "description": "Internet Publishing and Broadcasting"
  },
  {
    "code": "570",
    "description": "Internet Publishing and Broadcasting"
  },
  {
    "code": "5700",
    "description": "Internet Publishing and Broadcasting"
  },
  {
    "code": "58",
    "description": "Telecommunications Services"
  },
  {
    "code": "580",
    "description": "Telecommunications Services"
  },
  {
    "code": "5801",
    "description": "Wired Telecommunications Network Operation"
  },
  {
    "code": "5802",
    "description": "Other Telecommunications Network Operation"
  },
  {
    "code": "5809",
    "description": "Other Telecommunications Services"
  },
  {
    "code": "59",
    "description": "Internet Service Providers, Web Search Portals and Data Processing Services"
  },
  {
    "code": "591",
    "description": "Internet Service Providers and Web Search Portals"
  },
  {
    "code": "5910",
    "description": "Internet Access Services"
  },
  {
    "code": "592",
    "description": "Data Processing, Web Hosting and Electronic Information Storage Services"
  },
  {
    "code": "5921",
    "description": "Data Processing and Web Hosting Services"
  },
  {
    "code": "5922",
    "description": "Electronic Information Storage Services"
  },
  {
    "code": "60",
    "description": "Library and Other Information Services"
  },
  {
    "code": "601",
    "description": "Libraries and Archives"
  },
  {
    "code": "6010",
    "description": "Libraries and Archives"
  },
  {
    "code": "602",
    "description": "Other Information Services"
  },
  {
    "code": "6020",
    "description": "Other Information Services"
  },
  {
    "code": "K",
    "description": "Financial and Insurance Services"
  },
  {
    "code": "62",
    "description": "Finance"
  },
  {
    "code": "621",
    "description": "Central Banking"
  },
  {
    "code": "6210",
    "description": "Central Banking"
  },
  {
    "code": "622",
    "description": "Depository Financial Intermediation"
  },
  {
    "code": "6221",
    "description": "Banking"
  },
  {
    "code": "6222",
    "description": "Building Society Operation"
  },
  {
    "code": "6223",
    "description": "Credit Union Operation"
  },
  {
    "code": "6229",
    "description": "Other Depository Financial Intermediation"
  },
  {
    "code": "623",
    "description": "Non-depository Financing"
  },
  {
    "code": "6230",
    "description": "Non-depository Financing"
  },
  {
    "code": "624",
    "description": "Financial Asset Investing"
  },
  {
    "code": "6240",
    "description": "Financial Asset Investing"
  },
  {
    "code": "63",
    "description": "Insurance and Superannuation Funds"
  },
  {
    "code": "631",
    "description": "Life Insurance"
  },
  {
    "code": "6310",
    "description": "Life Insurance"
  },
  {
    "code": "632",
    "description": "Health and General Insurance"
  },
  {
    "code": "6321",
    "description": "Health Insurance"
  },
  {
    "code": "6322",
    "description": "General Insurance"
  },
  {
    "code": "633",
    "description": "Superannuation Funds"
  },
  {
    "code": "6330",
    "description": "Superannuation Funds"
  },
  {
    "code": "64",
    "description": "Auxiliary Finance and Insurance Services"
  },
  {
    "code": "641",
    "description": "Auxiliary Finance and Investment Services"
  },
  {
    "code": "6411",
    "description": "Financial Asset Broking Services"
  },
  {
    "code": "6419",
    "description": "Other Auxiliary Finance and Investment Services"
  },
  {
    "code": "642",
    "description": "Auxiliary Insurance Services"
  },
  {
    "code": "6420",
    "description": "Auxiliary Insurance Services"
  },
  {
    "code": "L",
    "description": "Rental, Hiring and Real Estate Services"
  },
  {
    "code": "66",
    "description": "Rental and Hiring Services (except Real Estate)"
  },
  {
    "code": "661",
    "description": "Motor Vehicle and Transport Equipment Rental and Hiring"
  },
  {
    "code": "6611",
    "description": "Passenger Car Rental and Hiring"
  },
  {
    "code": "6619",
    "description": "Other Motor Vehicle and Transport Equipment Rental and Hiring"
  },
  {
    "code": "662",
    "description": "Farm Animals and Bloodstock Leasing"
  },
  {
    "code": "6620",
    "description": "Farm Animals and Bloodstock Leasing"
  },
  {
    "code": "663",
    "description": "Other Goods and Equipment Rental and Hiring"
  },
  {
    "code": "6631",
    "description": "Heavy Machinery and Scaffolding Rental and Hiring"
  },
  {
    "code": "6632",
    "description": "Video and Other Electronic Media Rental"
  },
  {
    "code": "6639",
    "description": "Other Goods and Equipment Rental and Hiring n.e.c."
  },
  {
    "code": "664",
    "description": "Non-Financial Intangible Assets (except Copyrights) Leasing"
  },
  {
    "code": "6640",
    "description": "Non-Financial Intangible Assets (except Copyrights) Leasing"
  },
  {
    "code": "67",
    "description": "Property Operators and Real Estate Services"
  },
  {
    "code": "671",
    "description": "Property Operators"
  },
  {
    "code": "6711",
    "description": "Residential Property Operators"
  },
  {
    "code": "6712",
    "description": "Non-Residential Property Operators"
  },
  {
    "code": "672",
    "description": "Real Estate Services"
  },
  {
    "code": "6720",
    "description": "Real Estate Services"
  },
  {
    "code": "M",
    "description": "Professional, Scientific and Technical Services"
  },
  {
    "code": "69",
    "description": "Professional, Scientific and Technical Services (except Computer Systems Design and Related Services)"
  },
  {
    "code": "691",
    "description": "Scientific Research Services"
  },
  {
    "code": "6910",
    "description": "Scientific Research Services"
  },
  {
    "code": "692",
    "description": "Architectural, Engineering and Technical Services"
  },
  {
    "code": "6921",
    "description": "Architectural Services"
  },
  {
    "code": "6922",
    "description": "Surveying and Mapping Services"
  },
  {
    "code": "6923",
    "description": "Engineering Design and Engineering Consulting Services"
  },
  {
    "code": "6924",
    "description": "Other Specialised Design Services"
  },
  {
    "code": "6925",
    "description": "Scientific Testing and Analysis Services"
  },
  {
    "code": "693",
    "description": "Legal and Accounting Services"
  },
  {
    "code": "6931",
    "description": "Legal Services"
  },
  {
    "code": "6932",
    "description": "Accounting Services"
  },
  {
    "code": "694",
    "description": "Advertising Services"
  },
  {
    "code": "6940",
    "description": "Advertising Services"
  },
  {
    "code": "695",
    "description": "Market Research and Statistical Services"
  },
  {
    "code": "6950",
    "description": "Market Research and Statistical Services"
  },
  {
    "code": "696",
    "description": "Management and Other Consulting Services"
  },
  {
    "code": "6961",
    "description": "Corporate Head Office Management Services"
  },
  {
    "code": "6962",
    "description": "Management Advice and Other Consulting Services"
  },
  {
    "code": "697",
    "description": "Veterinary Services"
  },
  {
    "code": "6970",
    "description": "Veterinary Services"
  },
  {
    "code": "699",
    "description": "Other Professional, Scientific and Technical Services"
  },
  {
    "code": "6991",
    "description": "Professional Photographic Services"
  },
  {
    "code": "6999",
    "description": "Other Professional, Scientific and Technical Services n.e.c."
  },
  {
    "code": "70",
    "description": "Computer Systems Design and Related Services"
  },
  {
    "code": "700",
    "description": "Computer Systems Design and Related Services"
  },
  {
    "code": "7000",
    "description": "Computer Systems Design and Related Services"
  },
  {
    "code": "N",
    "description": "Administrative and Support Services"
  },
  {
    "code": "72",
    "description": "Administrative Services"
  },
  {
    "code": "721",
    "description": "Employment Services"
  },
  {
    "code": "7211",
    "description": "Employment Placement and Recruitment Services"
  },
  {
    "code": "7212",
    "description": "Labour Supply Services"
  },
  {
    "code": "722",
    "description": "Travel Agency Services"
  },
  {
    "code": "7220",
    "description": "Travel Agency and Tour Arrangement Services"
  },
  {
    "code": "729",
    "description": "Other Administrative Services"
  },
  {
    "code": "7291",
    "description": "Office Administrative Services"
  },
  {
    "code": "7292",
    "description": "Document Preparation Services"
  },
  {
    "code": "7293",
    "description": "Credit Reporting and Debt Collection Services"
  },
  {
    "code": "7294",
    "description": "Call Centre Operation"
  },
  {
    "code": "7299",
    "description": "Other Administrative Services n.e.c."
  },
  {
    "code": "73",
    "description": "Building Cleaning, Pest Control and Other Support Services"
  },
  {
    "code": "731",
    "description": "Building Cleaning, Pest Control and Gardening Services"
  },
  {
    "code": "7311",
    "description": "Buildings Cleaning Services"
  },
  {
    "code": "7312",
    "description": "Buildings Pest Control Services"
  },
  {
    "code": "7313",
    "description": "Gardening Services"
  },
  {
    "code": "732",
    "description": "Packaging and Labelling Services"
  },
  {
    "code": "7320",
    "description": "Packaging Services"
  },
  {
    "code": "O",
    "description": "Public Administration and Safety"
  },
  {
    "code": "75",
    "description": "Public Administration"
  },
  {
    "code": "751",
    "description": "Central Government Administration"
  },
  {
    "code": "7510",
    "description": "Central Government Administration"
  },
  {
    "code": "752",
    "description": "State Government Administration"
  },
  {
    "code": "7520",
    "description": "State Government Administration"
  },
  {
    "code": "753",
    "description": "Local Government Administration"
  },
  {
    "code": "7530",
    "description": "Local Government Administration"
  },
  {
    "code": "754",
    "description": "Justice"
  },
  {
    "code": "7540",
    "description": "Justice"
  },
  {
    "code": "755",
    "description": "Government Representation"
  },
  {
    "code": "7551",
    "description": "Domestic Government Representation"
  },
  {
    "code": "7552",
    "description": "Foreign Government Representation"
  },
  {
    "code": "76",
    "description": "Defence"
  },
  {
    "code": "760",
    "description": "Defence"
  },
  {
    "code": "7600",
    "description": "Defence"
  },
  {
    "code": "77",
    "description": "Public Order, Safety and Regulatory Services"
  },
  {
    "code": "771",
    "description": "Public Order and Safety Services"
  },
  {
    "code": "7711",
    "description": "Police Services"
  },
  {
    "code": "7712",
    "description": "Investigation and Security Services"
  },
  {
    "code": "7713",
    "description": "Fire Protection and Other Emergency Services (except Ambulance Services)"
  },
  {
    "code": "7714",
    "description": "Correctional and Detention Services"
  },
  {
    "code": "7719",
    "description": "Other Public Order and Safety Services"
  },
  {
    "code": "772",
    "description": "Regulatory Services"
  },
  {
    "code": "7720",
    "description": "Regulatory Services"
  },
  {
    "code": "P",
    "description": "Education and Training"
  },
  {
    "code": "80",
    "description": "Preschool and School Education"
  },
  {
    "code": "801",
    "description": "Preschool Education"
  },
  {
    "code": "8010",
    "description": "Preschool Education"
  },
  {
    "code": "802",
    "description": "School Education"
  },
  {
    "code": "8021",
    "description": "Primary Education"
  },
  {
    "code": "8022",
    "description": "Secondary Education"
  },
  {
    "code": "8023",
    "description": "Combined Primary and Secondary Education"
  },
  {
    "code": "8024",
    "description": "Special School Education"
  },
  {
    "code": "81",
    "description": "Tertiary Education"
  },
  {
    "code": "810",
    "description": "Tertiary Education"
  },
  {
    "code": "8101",
    "description": "Technical and Vocational Education and Training"
  },
  {
    "code": "8102",
    "description": "Higher Education"
  },
  {
    "code": "82",
    "description": "Adult, Community and Other Education"
  },
  {
    "code": "821",
    "description": "Adult, Community and Other Education"
  },
  {
    "code": "8211",
    "description": "Sports and Physical Recreation Instruction"
  },
  {
    "code": "8212",
    "description": "Arts Education"
  },
  {
    "code": "8219",
    "description": "Adult, Community and Other Education n.e.c."
  },
  {
    "code": "822",
    "description": "Educational Support Services"
  },
  {
    "code": "8220",
    "description": "Educational Support Services"
  },
  {
    "code": "Q",
    "description": "Health Care and Social Assistance"
  },
  {
    "code": "84",
    "description": "Hospitals"
  },
  {
    "code": "840",
    "description": "Hospitals"
  },
  {
    "code": "8401",
    "description": "Hospitals (except Psychiatric Hospitals)"
  },
  {
    "code": "8402",
    "description": "Psychiatric Hospitals"
  },
  {
    "code": "85",
    "description": "Medical and Other Health Care Services"
  },
  {
    "code": "851",
    "description": "Medical Services"
  },
  {
    "code": "8511",
    "description": "General Practice Medical Services"
  },
  {
    "code": "8512",
    "description": "Specialist Medical Services"
  },
  {
    "code": "852",
    "description": "Pathology and Diagnostic Imaging Services"
  },
  {
    "code": "8520",
    "description": "Pathology and Diagnostic Imaging Services"
  },
  {
    "code": "853",
    "description": "Allied Health Services"
  },
  {
    "code": "8531",
    "description": "Dental Services"
  },
  {
    "code": "8532",
    "description": "Optometry and Optical Dispensing"
  },
  {
    "code": "8533",
    "description": "Physiotherapy Services"
  },
  {
    "code": "8534",
    "description": "Chiropractic and Osteopathic Services"
  },
  {
    "code": "8539",
    "description": "Other Allied Health Services"
  },
  {
    "code": "859",
    "description": "Other Health Care Services"
  },
  {
    "code": "8591",
    "description": "Ambulance Services"
  },
  {
    "code": "8599",
    "description": "Other Health Care Services n.e.c."
  },
  {
    "code": "86",
    "description": "Residential Care Services"
  },
  {
    "code": "860",
    "description": "Residential Care Services"
  },
  {
    "code": "8601",
    "description": "Aged Care Residential Services"
  },
  {
    "code": "8609",
    "description": "Other Residential Care Services"
  },
  {
    "code": "87",
    "description": "Social Assistance Services"
  },
  {
    "code": "871",
    "description": "Child Care Services"
  },
  {
    "code": "8710",
    "description": "Child Care Services"
  },
  {
    "code": "879",
    "description": "Other Social Assistance Services"
  },
  {
    "code": "8790",
    "description": "Other Social Assistance Services"
  },
  {
    "code": "R",
    "description": "Arts and Recreation Services"
  },
  {
    "code": "89",
    "description": "Heritage Activities"
  },
  {
    "code": "891",
    "description": "Museum Operation"
  },
  {
    "code": "8910",
    "description": "Museum Operation"
  },
  {
    "code": "892",
    "description": "Parks and Gardens Operations"
  },
  {
    "code": "8921",
    "description": "Zoological and Botanic Gardens Operation"
  },
  {
    "code": "8922",
    "description": "Nature Reserves and Conservation Parks Operation"
  },
  {
    "code": "90",
    "description": "Artistic Activities"
  },
  {
    "code": "900",
    "description": "Creative and Performing Arts Activities"
  },
  {
    "code": "9001",
    "description": "Performing Arts Operation"
  },
  {
    "code": "9002",
    "description": "Creative Artists, Musicians, Writers and Performers"
  },
  {
    "code": "9003",
    "description": "Performing Arts Venue Operation"
  },
  {
    "code": "91",
    "description": "Sport and Recreation Activities"
  },
  {
    "code": "911",
    "description": "Sport and Physical Recreation Activities"
  },
  {
    "code": "9111",
    "description": "Health and Fitness Centres and Gymnasia Operation"
  },
  {
    "code": "9112",
    "description": "Sport and Physical Recreation Clubs and Sports Professionals"
  },
  {
    "code": "9113",
    "description": "Sports and Physical Recreation Venues, Grounds and Facilities Operation"
  },
  {
    "code": "9114",
    "description": "Sport and Physical Recreation Administrative Service"
  },
  {
    "code": "912",
    "description": "Horse and Dog Racing Activities"
  },
  {
    "code": "9121",
    "description": "Horse and Dog Racing Administration and Track Operation"
  },
  {
    "code": "9129",
    "description": "Other Horse and Dog Racing Activities"
  },
  {
    "code": "913",
    "description": "Amusement and Other Recreation Activities"
  },
  {
    "code": "9131",
    "description": "Amusement Parks and Centres Operation"
  },
  {
    "code": "9139",
    "description": "Amusement and Other Recreation Activities n.e.c."
  },
  {
    "code": "92",
    "description": "Gambling Activities"
  },
  {
    "code": "920",
    "description": "Gambling Activities"
  },
  {
    "code": "9201",
    "description": "Casino Operation"
  },
  {
    "code": "9202",
    "description": "Lottery Operation"
  },
  {
    "code": "9209",
    "description": "Other Gambling Activities"
  },
  {
    "code": "S",
    "description": "Other Services"
  },
  {
    "code": "94",
    "description": "Repair and Maintenance"
  },
  {
    "code": "941",
    "description": "Automotive Repair and Maintenance"
  },
  {
    "code": "9411",
    "description": "Automotive Electrical Services"
  },
  {
    "code": "9412",
    "description": "Automotive Body, Paint and Interior Repair"
  },
  {
    "code": "9419",
    "description": "Other Automotive Repair and Maintenance"
  },
  {
    "code": "942",
    "description": "Machinery and Equipment Repair and Maintenance"
  },
  {
    "code": "9421",
    "description": "Domestic Appliance Repair and Maintenance"
  },
  {
    "code": "9422",
    "description": "Electronic (except Domestic Appliance) and Precision Equipment Repair and Maintenance"
  },
  {
    "code": "9429",
    "description": "Other Machinery and Equipment Repair and Maintenance"
  },
  {
    "code": "949",
    "description": "Other Repair and Maintenance"
  },
  {
    "code": "9491",
    "description": "Clothing and Footwear Repair"
  },
  {
    "code": "9499",
    "description": "Other Repair and Maintenance n.e.c."
  },
  {
    "code": "95",
    "description": "Personal and Other Services"
  },
  {
    "code": "951",
    "description": "Personal Care Services"
  },
  {
    "code": "9511",
    "description": "Hairdressing and Beauty Services"
  },
  {
    "code": "9512",
    "description": "Diet and Weight Reduction Centre Operation"
  },
  {
    "code": "952",
    "description": "Funeral, Crematorium and Cemetery Services"
  },
  {
    "code": "9520",
    "description": "Funeral, Crematorium and Cemetery Services"
  },
  {
    "code": "953",
    "description": "Other Personal Services"
  },
  {
    "code": "9531",
    "description": "Laundry and Dry-Cleaning Services"
  },
  {
    "code": "9532",
    "description": "Photographic Film Processing"
  },
  {
    "code": "9533",
    "description": "Parking Services"
  },
  {
    "code": "9534",
    "description": "Brothel Keeping and Prostitution Services"
  },
  {
    "code": "9539",
    "description": "Other Personal Services n.e.c."
  },
  {
    "code": "954",
    "description": "Religious Services"
  },
  {
    "code": "9540",
    "description": "Religious Services"
  },
  {
    "code": "955",
    "description": "Civic, Professional and Other Interest Group Services"
  },
  {
    "code": "9551",
    "description": "Business and Professional Association Services"
  },
  {
    "code": "9552",
    "description": "Labour Association Services"
  },
  {
    "code": "9559",
    "description": "Other Interest Group Services n"
  },
  {
    "code": "96",
    "description": "Private Households Employing Staff"
  },
  {
    "code": "960",
    "description": "Private Households Employing Staff"
  },
  {
    "code": "9601",
    "description": "Private Households Employing Staff"
  },
  {
    "code": "9602",
    "description": "Undifferentiated Goods-Producing Activities of Private Households for Own Use"
  },
  {
    "code": "9603",
    "description": "Undifferentiated Service-Producing Activities of Private Households for Own Use"
  },
  {
    "code": "T",
    "description": "Not Elsewhere Included"
  },
  {
    "code": "99",
    "description": "Not Elsewhere Included"
  },
  {
    "code": "994",
    "description": "Don't Know"
  },
  {
    "code": "9940",
    "description": "Don't Know"
  },
  {
    "code": "995",
    "description": "Refused to Answer"
  },
  {
    "code": "9950",
    "description": "Refused to Answer"
  },
  {
    "code": "997",
    "description": "Response Unidentifiable"
  },
  {
    "code": "9970",
    "description": "Response Unidentifiable"
  },
  {
    "code": "998",
    "description": "Response Outside Scope"
  },
  {
    "code": "9980",
    "description": "Response Outside Scope"
  },
  {
    "code": "999",
    "description": "Not Stated"
  },
  {
    "code": "9999",
    "description": "Not Stated"
  },
  {
    "code": ""
  }
];

var subdivision = [
  {
    "code": "Subdivision code",
    "description": "Subdivision descriptor"
  },
  {
    "code": "01",
    "description": "Agriculture"
  },
  {
    "code": "02",
    "description": "Aquaculture"
  },
  {
    "code": "03",
    "description": "Forestry and Logging"
  },
  {
    "code": "04",
    "description": "Fishing, Hunting and Trapping"
  },
  {
    "code": "05",
    "description": "Agriculture, Forestry and Fishing Support Services"
  },
  {
    "code": "06",
    "description": "Coal Mining"
  },
  {
    "code": "07",
    "description": "Oil and Gas Extraction"
  },
  {
    "code": "08",
    "description": "Metal Ore Mining"
  },
  {
    "code": "09",
    "description": "Non-Metallic Mineral Mining and Quarrying"
  },
  {
    "code": "10",
    "description": "Exploration and Other Mining Support Services"
  },
  {
    "code": "11",
    "description": "Food Product Manufacturing"
  },
  {
    "code": "12",
    "description": " Beverage and Tobacco Product Manufacturing"
  },
  {
    "code": "13",
    "description": "Textile, Leather, Clothing and Footwear Manufacturing"
  },
  {
    "code": "14",
    "description": "Wood Product Manufacturing"
  },
  {
    "code": "15",
    "description": "Pulp, Paper and Converted Paper Product Manufacturing"
  },
  {
    "code": "16",
    "description": "Printing"
  },
  {
    "code": "17",
    "description": "Petroleum and Coal Product Manufacturing"
  },
  {
    "code": "18",
    "description": "Basic Chemical and Chemical Product Manufacturing"
  },
  {
    "code": "19",
    "description": "Polymer Product and Rubber Product Manufacturing"
  },
  {
    "code": "20",
    "description": "Non-Metallic Mineral Product Manufacturing"
  },
  {
    "code": "21",
    "description": "Primary Metal and Metal Product Manufacturing"
  },
  {
    "code": "22",
    "description": "Fabricated Metal Product Manufacturing"
  },
  {
    "code": "23",
    "description": "Transport Equipment Manufacturing"
  },
  {
    "code": "24",
    "description": "Machinery and Equipment Manufacturing"
  },
  {
    "code": "25",
    "description": "Furniture and Other Manufacturing"
  },
  {
    "code": "26",
    "description": "Electricity Supply"
  },
  {
    "code": "27",
    "description": "Gas Supply"
  },
  {
    "code": "28",
    "description": "Water Supply, Sewerage and Drainage Services"
  },
  {
    "code": "29",
    "description": "Waste Collection, Treatment and Disposal Services"
  },
  {
    "code": "30",
    "description": "Building Construction"
  },
  {
    "code": "31",
    "description": "Heavy and Civil Engineering Construction"
  },
  {
    "code": "32",
    "description": "Construction Services"
  },
  {
    "code": "33",
    "description": "Basic Material Wholesaling"
  },
  {
    "code": "34",
    "description": "Machinery and Equipment Wholesaling"
  },
  {
    "code": "35",
    "description": "Motor Vehicle and Motor Vehicle Parts Wholesaling"
  },
  {
    "code": "36",
    "description": "Grocery, Liquor and Tobacco Product Wholesaling"
  },
  {
    "code": "37",
    "description": "Other Goods Wholesaling"
  },
  {
    "code": "38",
    "description": "Commission Based Wholesaling"
  },
  {
    "code": "39",
    "description": "Motor Vehicle and Motor Vehicle Parts Retailing"
  },
  {
    "code": "40",
    "description": "Fuel Retailing"
  },
  {
    "code": "41",
    "description": "Food Retailing"
  },
  {
    "code": "42",
    "description": "Other Store-Based Retailing"
  },
  {
    "code": "43",
    "description": "Non Store Retailing and Retail Commission Based Buying and/or Selling"
  },
  {
    "code": "44",
    "description": "Accommodation"
  },
  {
    "code": "45",
    "description": "Food and Beverage Services"
  },
  {
    "code": "46",
    "description": "Road Transport"
  },
  {
    "code": "47",
    "description": "Rail Transport"
  },
  {
    "code": "48",
    "description": "Water Transport"
  },
  {
    "code": "49",
    "description": "Air and Space Transport"
  },
  {
    "code": "50",
    "description": "Other Transport"
  },
  {
    "code": "51",
    "description": "Postal and Courier Pick-up and Delivery Services"
  },
  {
    "code": "52",
    "description": "Transport Support Services"
  },
  {
    "code": "53",
    "description": "Warehousing and Storage Services"
  },
  {
    "code": "54",
    "description": "Publishing (except Internet and Music Publishing)"
  },
  {
    "code": "55",
    "description": "Motion Picture and Sound Recording Activities"
  },
  {
    "code": "56",
    "description": "Broadcasting (except Internet)"
  },
  {
    "code": "57",
    "description": "Internet Publishing and Broadcasting"
  },
  {
    "code": "58",
    "description": "Telecommunications Services"
  },
  {
    "code": "59",
    "description": "Internet Service Providers, Web Search Portals and Data Processing Services"
  },
  {
    "code": "60",
    "description": "Library and Other Information Services"
  },
  {
    "code": "62",
    "description": "Finance"
  },
  {
    "code": "63",
    "description": "Insurance and Superannuation Funds"
  },
  {
    "code": "64",
    "description": "Auxiliary Finance and Insurance Services"
  },
  {
    "code": "66",
    "description": "Rental and Hiring Services (except Real Estate)"
  },
  {
    "code": "67",
    "description": "Property Operators and Real Estate Services"
  },
  {
    "code": "69",
    "description": "Professional, Scientific and Technical Services (except Computer Systems Design and Related Services)"
  },
  {
    "code": "70",
    "description": "Computer Systems Design and Related Services"
  },
  {
    "code": "72",
    "description": "Administrative Services"
  },
  {
    "code": "73",
    "description": "Building Cleaning, Pest Control and Other Support Services"
  },
  {
    "code": "75",
    "description": "Public Administration"
  },
  {
    "code": "76",
    "description": "Defence"
  },
  {
    "code": "77",
    "description": "Public Order, Safety and Regulatory Services"
  },
  {
    "code": "80",
    "description": "Preschool and School Education"
  },
  {
    "code": "81",
    "description": "Tertiary Education"
  },
  {
    "code": "82",
    "description": "Adult, Community and Other Education"
  },
  {
    "code": "84",
    "description": "Hospitals"
  },
  {
    "code": "85",
    "description": "Medical and Other Health Care Services"
  },
  {
    "code": "86",
    "description": "Residential Care Services"
  },
  {
    "code": "87",
    "description": "Social Assistance Services"
  },
  {
    "code": "89",
    "description": "Heritage Activities"
  },
  {
    "code": "90",
    "description": "Artistic Activities"
  },
  {
    "code": "91",
    "description": "Sport and Recreation Activities"
  },
  {
    "code": "92",
    "description": "Gambling Activities"
  },
  {
    "code": "94",
    "description": "Repair and Maintenance"
  },
  {
    "code": "95",
    "description": "Personal and Other Services"
  },
  {
    "code": "96",
    "description": "Private Households Employing Staff"
  },
  {
    "code": ""
  }
];

var group = [
  {
    "code": "Group code",
    "description": "Group descriptor"
  },
  {
    "code": "011",
    "description": "Nursery and Floriculture Production"
  },
  {
    "code": "012",
    "description": "Mushroom and Vegetable Growing"
  },
  {
    "code": "013",
    "description": "Fruit and Tree Nut Growing"
  },
  {
    "code": "014",
    "description": "Grain, Sheep and Beef Cattle Farming"
  },
  {
    "code": "015",
    "description": "Other Crop Growing"
  },
  {
    "code": "016",
    "description": "Dairy Cattle Farming"
  },
  {
    "code": "017",
    "description": "Poultry Farming"
  },
  {
    "code": "018",
    "description": "Deer Farming"
  },
  {
    "code": "019",
    "description": "Other Livestock Farming"
  },
  {
    "code": "020",
    "description": "Aquaculture"
  },
  {
    "code": "030",
    "description": "Forestry and Logging"
  },
  {
    "code": "041",
    "description": "Fishing"
  },
  {
    "code": "042",
    "description": "Hunting and Trapping"
  },
  {
    "code": "051",
    "description": "Forestry Support Services"
  },
  {
    "code": "052",
    "description": "Agriculture and Fishing Support Services"
  },
  {
    "code": "060",
    "description": "Coal Mining"
  },
  {
    "code": "070",
    "description": "Oil and Gas Extraction"
  },
  {
    "code": "080",
    "description": "Metal Ore Mining"
  },
  {
    "code": "091",
    "description": "Construction Material Mining"
  },
  {
    "code": "099",
    "description": "Other Non-Metallic Mineral Mining and Quarrying"
  },
  {
    "code": "101",
    "description": "Exploration"
  },
  {
    "code": "109",
    "description": "Other Mining Support Services"
  },
  {
    "code": "111",
    "description": "Meat and Meat Product Manufacturing"
  },
  {
    "code": "112",
    "description": "Seafood Processing"
  },
  {
    "code": "113",
    "description": "Dairy Product Manufacturing"
  },
  {
    "code": "114",
    "description": "Fruit and Vegetable Processing"
  },
  {
    "code": "115",
    "description": "Oil and Fat Manufacturing"
  },
  {
    "code": "116",
    "description": "Grain Mill and Cereal Product Manufacturing"
  },
  {
    "code": "117",
    "description": "Bakery Product Manufacturing"
  },
  {
    "code": "118",
    "description": "Sugar and Confectionery Manufacturing"
  },
  {
    "code": "119",
    "description": "Other Food Product Manufacturing"
  },
  {
    "code": "121",
    "description": "Beverage Manufacturing"
  },
  {
    "code": "122",
    "description": "Cigarette and Tobacco Product Manufacturing"
  },
  {
    "code": "131",
    "description": "Textile Fibre, Yarn and Woven Fabric Manufacturing"
  },
  {
    "code": "132",
    "description": "Leather Tanning and Fur Dressing"
  },
  {
    "code": "133",
    "description": "Textile Product Manufacturing"
  },
  {
    "code": "134",
    "description": "Knitted Product Manufacturing"
  },
  {
    "code": "135",
    "description": "Clothing and Footwear Manufacturing"
  },
  {
    "code": "141",
    "description": "Log Sawmilling and Timber Dressing"
  },
  {
    "code": "149",
    "description": "Other Wood Product Manufacturing"
  },
  {
    "code": "151",
    "description": "Pulp, Paper and Paperboard Manufacturing"
  },
  {
    "code": "152",
    "description": "Converted Paper Product Manufacturing"
  },
  {
    "code": "161",
    "description": "Printing"
  },
  {
    "code": "162",
    "description": "Reproduction of Recorded Media"
  },
  {
    "code": "170",
    "description": "Petroleum Refining and Petroleum and Coal Product Manufacturing"
  },
  {
    "code": "181",
    "description": "Chemical Manufacturing"
  },
  {
    "code": "182",
    "description": "Basic Polymer Manufacturing"
  },
  {
    "code": "183",
    "description": "Fertiliser and Pesticide Manufacturing"
  },
  {
    "code": "184",
    "description": "Pharmaceutical and Medicinal Product Manufacturing"
  },
  {
    "code": "185",
    "description": "Cleaning Compound and Toiletry Preparation Manufacturing"
  },
  {
    "code": "189",
    "description": "Other Basic Chemical Product Manufacturing"
  },
  {
    "code": "191",
    "description": "Polymer Product Manufacturing"
  },
  {
    "code": "192",
    "description": "Natural Rubber Product Manufacturing"
  },
  {
    "code": "201",
    "description": "Glass and Glass Product Manufacturing"
  },
  {
    "code": "202",
    "description": "Ceramic Product Manufacturing"
  },
  {
    "code": "203",
    "description": "Cement, Lime, Plaster and Concrete Product Manufacturing"
  },
  {
    "code": "209",
    "description": "Other Non-Metallic Mineral Product Manufacturing"
  },
  {
    "code": "211",
    "description": "Basic Ferrous Metal Manufacturing"
  },
  {
    "code": "212",
    "description": "Basic Ferrous Metal Product Manufacturing"
  },
  {
    "code": "213",
    "description": "Basic Non-Ferrous Metal Manufacturing"
  },
  {
    "code": "214",
    "description": "Basic Non-Ferrous Metal Product Manufacturing"
  },
  {
    "code": "221",
    "description": "Iron and Steel Forging"
  },
  {
    "code": "222",
    "description": "Structural Metal Product Manufacturing"
  },
  {
    "code": "223",
    "description": "Metal Container Manufacturing"
  },
  {
    "code": "224",
    "description": "Other Sheet Metal Product Manufacturing"
  },
  {
    "code": "229",
    "description": "Other Fabricated Metal Product Manufacturing"
  },
  {
    "code": "231",
    "description": "Motor Vehicle and Motor Vehicle Part Manufacturing"
  },
  {
    "code": "239",
    "description": "Other Transport Equipment Manufacturing"
  },
  {
    "code": "241",
    "description": "Professional and Scientific Equipment Manufacturing"
  },
  {
    "code": "242",
    "description": "Computer and Electronic Equipment Manufacturing"
  },
  {
    "code": "243",
    "description": "Electrical Equipment Manufacturing"
  },
  {
    "code": "244",
    "description": "Domestic Appliance Manufacturing"
  },
  {
    "code": "245",
    "description": "Pump, Compressor, Heating and Ventilation Equipment Manufacturing"
  },
  {
    "code": "246",
    "description": "Specialised Machinery and Equipment Manufacturing"
  },
  {
    "code": "249",
    "description": "Other Machinery and Equipment Manufacturing"
  },
  {
    "code": "251",
    "description": "Furniture Manufacturing"
  },
  {
    "code": "259",
    "description": "Other Manufacturing"
  },
  {
    "code": "261",
    "description": "Electricity Generation"
  },
  {
    "code": "262",
    "description": "Electricity Transmission"
  },
  {
    "code": "263",
    "description": "Electricity Distribution"
  },
  {
    "code": "264",
    "description": "On Selling Electricity and Electricity Market Operation"
  },
  {
    "code": "270",
    "description": "Gas Supply"
  },
  {
    "code": "281",
    "description": "Water Supply, Sewerage and Drainage Services"
  },
  {
    "code": "291",
    "description": "Waste Collection Services"
  },
  {
    "code": "292",
    "description": "Waste Treatment, Disposal and Remediation Services"
  },
  {
    "code": "301",
    "description": "Residential Building Construction"
  },
  {
    "code": "302",
    "description": "Non-Residential Building Construction"
  },
  {
    "code": "310",
    "description": "Heavy and Civil Engineering Construction"
  },
  {
    "code": "321",
    "description": "Land Development and Site Preparation Services"
  },
  {
    "code": "322",
    "description": "Building Structure Services"
  },
  {
    "code": "323",
    "description": "Building Installation Services"
  },
  {
    "code": "324",
    "description": "Building Completion Services"
  },
  {
    "code": "329",
    "description": "Other Construction Services"
  },
  {
    "code": "331",
    "description": "Agricultural Product Wholesaling"
  },
  {
    "code": "332",
    "description": "Mineral, Metal and Chemical Wholesaling"
  },
  {
    "code": "333",
    "description": "Timber and Hardware Goods Wholesaling"
  },
  {
    "code": "341",
    "description": "Specialised Industrial Machinery and Equipment Wholesaling"
  },
  {
    "code": "349",
    "description": "Other Machinery and Equipment Wholesaling"
  },
  {
    "code": "350",
    "description": "Motor Vehicle and Motor Vehicle Parts Wholesaling"
  },
  {
    "code": "360",
    "description": "Grocery, Liquor and Tobacco Product Wholesaling"
  },
  {
    "code": "371",
    "description": "Textile, Clothing and Footwear Wholesaling"
  },
  {
    "code": "372",
    "description": "Pharmaceutical and Toiletry Goods Wholesaling"
  },
  {
    "code": "373",
    "description": "Furniture, Floor Coverings and Other Goods Wholesaling"
  },
  {
    "code": "380",
    "description": "Commission Based Wholesaling"
  },
  {
    "code": "391",
    "description": "Motor Vehicle Retailing"
  },
  {
    "code": "392",
    "description": "Motor Vehicle Parts Retailing"
  },
  {
    "code": "400",
    "description": "Fuel Retailing"
  },
  {
    "code": "411",
    "description": "Supermarket and Grocery Stores"
  },
  {
    "code": "412",
    "description": "Specialised Food Retailing"
  },
  {
    "code": "421",
    "description": "Furniture, Floor Coverings, Houseware and Textile Goods Retailing"
  },
  {
    "code": "422",
    "description": "Electrical and Electronic Goods Retailing"
  },
  {
    "code": "423",
    "description": "Hardware, Building and Garden Supplies Retailing"
  },
  {
    "code": "424",
    "description": "Recreational Goods Retailing"
  },
  {
    "code": "425",
    "description": "Clothing, Footwear and Personal Accessories Retailing"
  },
  {
    "code": "426",
    "description": "Department Stores"
  },
  {
    "code": "427",
    "description": "Pharmaceutical and Other Store-Based Retailing"
  },
  {
    "code": "431",
    "description": "Non Store Retailing"
  },
  {
    "code": "432",
    "description": "Retail Commission Based Buying and/or Selling"
  },
  {
    "code": "440",
    "description": "Accommodation"
  },
  {
    "code": "451",
    "description": "Cafes, Restaurants and Takeaway Food Services"
  },
  {
    "code": "452",
    "description": "Pubs, Taverns and Bars"
  },
  {
    "code": "453",
    "description": "Clubs (Hospitality)"
  },
  {
    "code": "461",
    "description": "Road Freight Transport"
  },
  {
    "code": "462",
    "description": "Road Passenger Transport"
  },
  {
    "code": "471",
    "description": "Rail Freight Transport"
  },
  {
    "code": "472",
    "description": "Rail Passenger Transport"
  },
  {
    "code": "481",
    "description": "Water Freight Transport"
  },
  {
    "code": "482",
    "description": "Water Passenger Transport"
  },
  {
    "code": "490",
    "description": "Air and Space Transport"
  },
  {
    "code": "501",
    "description": "Scenic and Sightseeing Transport"
  },
  {
    "code": "502",
    "description": "Pipeline and Other Transport"
  },
  {
    "code": "510",
    "description": "Postal and Courier Pick-up and Delivery Services"
  },
  {
    "code": "521",
    "description": "Water Transport Support Services"
  },
  {
    "code": "522",
    "description": "Air Transport Support Services"
  },
  {
    "code": "529",
    "description": "Other Transport Support Services"
  },
  {
    "code": "530",
    "description": "Warehousing and Storage Services"
  },
  {
    "code": "541",
    "description": "Newspaper, Periodical, Book and Directory Publishing"
  },
  {
    "code": "542",
    "description": "Software Publishing"
  },
  {
    "code": "551",
    "description": "Motion Picture and Video Activities"
  },
  {
    "code": "552",
    "description": "Sound Recording and Music Publishing"
  },
  {
    "code": "561",
    "description": "Radio Broadcasting"
  },
  {
    "code": "562",
    "description": "Television Broadcasting"
  },
  {
    "code": "570",
    "description": "Internet Publishing and Broadcasting"
  },
  {
    "code": "580",
    "description": "Telecommunications Services"
  },
  {
    "code": "591",
    "description": "Internet Service Providers and Web Search Portals"
  },
  {
    "code": "592",
    "description": "Data Processing, Web Hosting and Electronic Information Storage Services"
  },
  {
    "code": "601",
    "description": "Libraries and Archives"
  },
  {
    "code": "602",
    "description": "Other Information Services"
  },
  {
    "code": "621",
    "description": "Central Banking"
  },
  {
    "code": "622",
    "description": "Depository Financial Intermediation"
  },
  {
    "code": "623",
    "description": "Non-depository Financing"
  },
  {
    "code": "624",
    "description": "Financial Asset Investing"
  },
  {
    "code": "631",
    "description": "Life Insurance"
  },
  {
    "code": "632",
    "description": "Health and General Insurance"
  },
  {
    "code": "633",
    "description": "Superannuation Funds"
  },
  {
    "code": "641",
    "description": "Auxiliary Finance and Investment Services"
  },
  {
    "code": "642",
    "description": "Auxiliary Insurance Services"
  },
  {
    "code": "661",
    "description": "Motor Vehicle and Transport Equipment Rental and Hiring"
  },
  {
    "code": "662",
    "description": "Farm Animals and Bloodstock Leasing"
  },
  {
    "code": "663",
    "description": "Other Goods and Equipment Rental and Hiring"
  },
  {
    "code": "664",
    "description": "Non-Financial Intangible Assets (except Copyrights) Leasing"
  },
  {
    "code": "671",
    "description": "Property Operators"
  },
  {
    "code": "672",
    "description": "Real Estate Services"
  },
  {
    "code": "691",
    "description": "Scientific Research Services"
  },
  {
    "code": "692",
    "description": "Architectural, Engineering and Technical Services"
  },
  {
    "code": "693",
    "description": "Legal and Accounting Services"
  },
  {
    "code": "694",
    "description": "Advertising Services"
  },
  {
    "code": "695",
    "description": "Market Research and Statistical Services"
  },
  {
    "code": "696",
    "description": "Management and Other Consulting Services"
  },
  {
    "code": "697",
    "description": "Veterinary Services"
  },
  {
    "code": "699",
    "description": "Other Professional, Scientific and Technical Services"
  },
  {
    "code": "700",
    "description": "Computer Systems Design and Related Services"
  },
  {
    "code": "721",
    "description": "Employment Services"
  },
  {
    "code": "722",
    "description": "Travel Agency Services"
  },
  {
    "code": "729",
    "description": "Other Administrative Services"
  },
  {
    "code": "731",
    "description": "Building Cleaning, Pest Control and Gardening Services"
  },
  {
    "code": "732",
    "description": "Packaging and Labelling Services"
  },
  {
    "code": "751",
    "description": "Central Government Administration"
  },
  {
    "code": "752",
    "description": "State Government Administration"
  },
  {
    "code": "753",
    "description": "Local Government Administration"
  },
  {
    "code": "754",
    "description": "Justice"
  },
  {
    "code": "755",
    "description": "Government Representation"
  },
  {
    "code": "760",
    "description": "Defence"
  },
  {
    "code": "771",
    "description": "Public Order and Safety Services"
  },
  {
    "code": "772",
    "description": "Regulatory Services"
  },
  {
    "code": "801",
    "description": "Preschool Education"
  },
  {
    "code": "802",
    "description": "School Education"
  },
  {
    "code": "810",
    "description": "Tertiary Education"
  },
  {
    "code": "821",
    "description": "Adult, Community and Other Education"
  },
  {
    "code": "822",
    "description": "Educational Support Services"
  },
  {
    "code": "840",
    "description": "Hospitals"
  },
  {
    "code": "851",
    "description": "Medical Services"
  },
  {
    "code": "852",
    "description": "Pathology and Diagnostic Imaging Services"
  },
  {
    "code": "853",
    "description": "Allied Health Services"
  },
  {
    "code": "859",
    "description": "Other Health Care Services"
  },
  {
    "code": "860",
    "description": "Residential Care Services"
  },
  {
    "code": "871",
    "description": "Child Care Services"
  },
  {
    "code": "879",
    "description": "Other Social Assistance Services"
  },
  {
    "code": "891",
    "description": "Museum Operation"
  },
  {
    "code": "892",
    "description": "Parks and Gardens Operations"
  },
  {
    "code": "900",
    "description": "Creative and Performing Arts Activities"
  },
  {
    "code": "911",
    "description": "Sport and Physical Recreation Activities"
  },
  {
    "code": "912",
    "description": "Horse and Dog Racing Activities"
  },
  {
    "code": "913",
    "description": "Amusement and Other Recreation Activities"
  },
  {
    "code": "920",
    "description": "Gambling Activities"
  },
  {
    "code": "941",
    "description": "Automotive Repair and Maintenance"
  },
  {
    "code": "942",
    "description": "Machinery and Equipment Repair and Maintenance"
  },
  {
    "code": "949",
    "description": "Other Repair and Maintenance"
  },
  {
    "code": "951",
    "description": "Personal Care Services"
  },
  {
    "code": "952",
    "description": "Funeral, Crematorium and Cemetery Services"
  },
  {
    "code": "953",
    "description": "Other Personal Services"
  },
  {
    "code": "954",
    "description": "Religious Services"
  },
  {
    "code": "955",
    "description": "Civic, Professional and Other Interest Group Services"
  },
  {
    "code": "960",
    "description": "Private Households Employing Staff"
  },
  {
    "code": ""
  }
];

var classes = [
  {
    "code": "0111",
    "description": "Nursery Production (Under Cover)"
  },
  {
    "code": "0112",
    "description": "Nursery Production (Outdoors)"
  },
  {
    "code": "0113",
    "description": "Turf Growing"
  },
  {
    "code": "0114",
    "description": "Floriculture Production (Under Cover)"
  },
  {
    "code": "0115",
    "description": "Floriculture Production (Outdoors)"
  },
  {
    "code": "0121",
    "description": "Mushroom Growing"
  },
  {
    "code": "0122",
    "description": "Vegetable Growing (Under Cover)"
  },
  {
    "code": "0123",
    "description": "Vegetable Growing (Outdoors)"
  },
  {
    "code": "0131",
    "description": "Grape Growing"
  },
  {
    "code": "0132",
    "description": "Kiwifruit Growing"
  },
  {
    "code": "0133",
    "description": "Berry Fruit Growing"
  },
  {
    "code": "0134",
    "description": "Apple and Pear Growing"
  },
  {
    "code": "0135",
    "description": "Stonefruit Growing"
  },
  {
    "code": "0136",
    "description": "Citrus Fruit Growing"
  },
  {
    "code": "0137",
    "description": "Olive Growing"
  },
  {
    "code": "0139",
    "description": "Other Fruit and Tree Nut Growing"
  },
  {
    "code": "0141",
    "description": "Sheep Farming (Specialised)"
  },
  {
    "code": "0142",
    "description": "Beef Cattle Farming (Specialised)"
  },
  {
    "code": "0143",
    "description": "Beef Cattle Feedlots (Specialised)"
  },
  {
    "code": "0144",
    "description": "Sheep-Beef Cattle Farming"
  },
  {
    "code": "0145",
    "description": "Grain-Sheep and Grain-Beef Cattle Farming"
  },
  {
    "code": "0146",
    "description": "Rice Growing"
  },
  {
    "code": "0149",
    "description": "Other Grain Growing"
  },
  {
    "code": "0151",
    "description": "Sugar Cane Growing"
  },
  {
    "code": "0152",
    "description": "Cotton Growing"
  },
  {
    "code": "0159",
    "description": "Other Crop Growing n.e.c."
  },
  {
    "code": "0160",
    "description": "Dairy Cattle Farming"
  },
  {
    "code": "0171",
    "description": "Poultry Farming (Meat)"
  },
  {
    "code": "0172",
    "description": "Poultry Farming (Eggs)"
  },
  {
    "code": "0180",
    "description": "Deer Farming"
  },
  {
    "code": "0191",
    "description": "Horse Farming"
  },
  {
    "code": "0192",
    "description": "Pig Farming"
  },
  {
    "code": "0193",
    "description": "Beekeeping"
  },
  {
    "code": "0199",
    "description": "Other Livestock Farming n.e.c."
  },
  {
    "code": "0201",
    "description": "Longline and Rack (Offshore) Aquaculture"
  },
  {
    "code": "0202",
    "description": "Caged (Offshore) Aquaculture"
  },
  {
    "code": "0203",
    "description": "Onshore Aquaculture"
  },
  {
    "code": "0301",
    "description": "Forestry"
  },
  {
    "code": "0302",
    "description": "Logging"
  },
  {
    "code": "0411",
    "description": "Rock Lobster and Crab Potting"
  },
  {
    "code": "0412",
    "description": "Prawn Fishing"
  },
  {
    "code": "0413",
    "description": "Line Fishing"
  },
  {
    "code": "0414",
    "description": "Fish Trawling, Seining and Netting"
  },
  {
    "code": "0419",
    "description": "Other Fishing"
  },
  {
    "code": "0420",
    "description": "Hunting and Trapping"
  },
  {
    "code": "0510",
    "description": "Forestry Support Services"
  },
  {
    "code": "0521",
    "description": "Cotton Ginning"
  },
  {
    "code": "0522",
    "description": "Shearing Services"
  },
  {
    "code": "0529",
    "description": "Other Agriculture and Fishing Support Services"
  },
  {
    "code": "0600",
    "description": "Coal Mining"
  },
  {
    "code": "0700",
    "description": "Oil and Gas Extraction"
  },
  {
    "code": "0801",
    "description": "Iron Ore Mining"
  },
  {
    "code": "0802",
    "description": "Bauxite Mining"
  },
  {
    "code": "0803",
    "description": "Copper Ore Mining"
  },
  {
    "code": "0804",
    "description": "Gold Ore Mining"
  },
  {
    "code": "0805",
    "description": "Mineral Sand Mining"
  },
  {
    "code": "0806",
    "description": "Nickel Ore Mining"
  },
  {
    "code": "0807",
    "description": "Silver-Lead-Zinc Ore Mining"
  },
  {
    "code": "0809",
    "description": "Other Metal Ore Mining"
  },
  {
    "code": "0911",
    "description": "Gravel and Sand Quarrying"
  },
  {
    "code": "0919",
    "description": "Other Construction Material Mining"
  },
  {
    "code": "0990",
    "description": "Other Non-Metallic Mineral Mining and Quarrying"
  },
  {
    "code": "1011",
    "description": "Petroleum Exploration"
  },
  {
    "code": "1012",
    "description": "Mineral Exploration"
  },
  {
    "code": "1090",
    "description": "Other Mining Support Services"
  },
  {
    "code": "1111",
    "description": "Meat Processing"
  },
  {
    "code": "1112",
    "description": "Poultry Processing"
  },
  {
    "code": "1113",
    "description": "Cured Meat and Smallgoods Manufacturing"
  },
  {
    "code": "1120",
    "description": "Seafood Processing"
  },
  {
    "code": "1131",
    "description": "Milk and Cream Processing"
  },
  {
    "code": "1132",
    "description": "Ice Cream Manufacturing"
  },
  {
    "code": "1133",
    "description": "Cheese and Other Dairy Product Manufacturing"
  },
  {
    "code": "1140",
    "description": "Fruit and Vegetable Processing"
  },
  {
    "code": "1150",
    "description": "Oil and Fat Manufacturing"
  },
  {
    "code": "1161",
    "description": "Grain Mill Product Manufacturing"
  },
  {
    "code": "1162",
    "description": "Cereal, Pasta and Baking Mix Manufacturing"
  },
  {
    "code": "1171",
    "description": "Bread Manufacturing (Factory-based)"
  },
  {
    "code": "1172",
    "description": "Cake and Pastry Manufacturing (Factory-based)"
  },
  {
    "code": "1173",
    "description": "Biscuit Manufacturing (Factory-based)"
  },
  {
    "code": "1174",
    "description": "Bakery Product Manufacturing (Non-factory-based)"
  },
  {
    "code": "1181",
    "description": "Sugar Manufacturing"
  },
  {
    "code": "1182",
    "description": "Confectionery Manufacturing"
  },
  {
    "code": "1191",
    "description": "Potato Crisps and Corn Chips Manufacturing"
  },
  {
    "code": "1192",
    "description": "Prepared Animal and Bird Feed Manufacturing"
  },
  {
    "code": "1199",
    "description": "Other Food Products Manufacturing n.e.c."
  },
  {
    "code": "1211",
    "description": "Soft Drink, Cordial and Syrup Manufacturing"
  },
  {
    "code": "1212",
    "description": "Beer Manufacturing"
  },
  {
    "code": "1213",
    "description": "Spirit Manufacturing"
  },
  {
    "code": "1214",
    "description": "Wine and Other Alcoholic Beverage Manufacturing"
  },
  {
    "code": "1220",
    "description": "Cigarette and Tobacco Product Manufacturing"
  },
  {
    "code": "1311",
    "description": "Wool Scouring"
  },
  {
    "code": "1312",
    "description": "Natural Fibre Textile Manufacturing"
  },
  {
    "code": "1313",
    "description": "Synthetic Fibre Textile Manufacturing"
  },
  {
    "code": "1320",
    "description": "Leather Tanning and Fur Dressing"
  },
  {
    "code": "1331",
    "description": "Textile Floor Covering Manufacturing"
  },
  {
    "code": "1332",
    "description": "Rope, Cordage and Twine Manufacturing"
  },
  {
    "code": "1333",
    "description": "Cut and Sewn Textile Product Manufacturing"
  },
  {
    "code": "1334",
    "description": "Textile Finishing and Other Textile Product Manufacturing"
  },
  {
    "code": "1340",
    "description": "Knitted Product Manufacturing"
  },
  {
    "code": "1351",
    "description": "Clothing Manufacturing"
  },
  {
    "code": "1352",
    "description": "Footwear Manufacturing"
  },
  {
    "code": "1411",
    "description": "Log Sawmilling"
  },
  {
    "code": "1412",
    "description": "Wood Chipping"
  },
  {
    "code": "1413",
    "description": "Timber Resawing and Dressing"
  },
  {
    "code": "1491",
    "description": "Prefabricated Wooden Building Manufacturing"
  },
  {
    "code": "1492",
    "description": "Wooden Structural Fittings and Components Manufacturing"
  },
  {
    "code": "1493",
    "description": "Veneer and Plywood Manufacturing"
  },
  {
    "code": "1494",
    "description": "Reconstituted Wood Product Manufacturing"
  },
  {
    "code": "1499",
    "description": "Other Wood Product Manufacturing n.e.c."
  },
  {
    "code": "1510",
    "description": "Pulp, Paper and Paperboard Manufacturing"
  },
  {
    "code": "1521",
    "description": "Corrugated Paperboard and Paperboard Container Manufacturing"
  },
  {
    "code": "1522",
    "description": "Paper Bag and Sack Manufacturing"
  },
  {
    "code": "1523",
    "description": "Paper Stationery Manufacturing"
  },
  {
    "code": "1524",
    "description": "Sanitary Paper Product Manufacturing"
  },
  {
    "code": "1529",
    "description": "Other Converted Paper Product Manufacturing"
  },
  {
    "code": "1611",
    "description": "Printing"
  },
  {
    "code": "1612",
    "description": "Printing Support Services"
  },
  {
    "code": "1620",
    "description": "Reproduction of Recorded Media"
  },
  {
    "code": "1701",
    "description": "Petroleum Refining and Petroleum Fuels Manufacturing"
  },
  {
    "code": "1709",
    "description": "Other Petroleum and Coal Product Manufacturing"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing"
  },
  {
    "code": "1812",
    "description": "Basic Organic Chemical Manufacturing"
  },
  {
    "code": "1813",
    "description": "Basic Inorganic Chemical Manufacturing"
  },
  {
    "code": "1821",
    "description": "Synthetic Resin and Synthetic Rubber Manufacturing"
  },
  {
    "code": "1829",
    "description": "Other Basic Polymer Manufacturing"
  },
  {
    "code": "1831",
    "description": "Fertiliser Manufacturing"
  },
  {
    "code": "1832",
    "description": "Pesticide Manufacturing"
  },
  {
    "code": "1841",
    "description": "Human Pharmaceutical and Medicinal Product Manufacturing"
  },
  {
    "code": "1842",
    "description": "Veterinary Pharmaceutical and Medicinal Product Manufacturing"
  },
  {
    "code": "1851",
    "description": "Cleaning Compound Manufacturing"
  },
  {
    "code": "1852",
    "description": "Cosmetic and Toiletry Preparation Manufacturing"
  },
  {
    "code": "1891",
    "description": "Photographic Chemical Manufacturing"
  },
  {
    "code": "1892",
    "description": "Explosives Manufacturing"
  },
  {
    "code": "1899",
    "description": "Other Basic Chemical Product Manufacturing n.e.c."
  },
  {
    "code": "1911",
    "description": "Polymer Film and Sheet Packaging Material Manufacturing"
  },
  {
    "code": "1912",
    "description": "Rigid and Semi Rigid Polymer Product Manufacturing"
  },
  {
    "code": "1913",
    "description": "Polymer Foam Product Manufacturing"
  },
  {
    "code": "1914",
    "description": "Tyre Manufacturing"
  },
  {
    "code": "1915",
    "description": "Adhesive Manufacturing"
  },
  {
    "code": "1916",
    "description": "Paint and Coatings Manufacturing"
  },
  {
    "code": "1919",
    "description": "Other Polymer Product Manufacturing"
  },
  {
    "code": "1920",
    "description": "Natural Rubber Product Manufacturing"
  },
  {
    "code": "2010",
    "description": "Glass and Glass Product Manufacturing"
  },
  {
    "code": "2021",
    "description": "Clay Brick Manufacturing"
  },
  {
    "code": "2029",
    "description": "Other Ceramic Product Manufacturing"
  },
  {
    "code": "2031",
    "description": "Cement and Lime Manufacturing"
  },
  {
    "code": "2032",
    "description": "Plaster and Gypsum Product Manufacturing"
  },
  {
    "code": "2033",
    "description": "Ready-Mixed Concrete Manufacturing"
  },
  {
    "code": "2034",
    "description": "Concrete Product Manufacturing"
  },
  {
    "code": "2090",
    "description": "Other Non-Metallic Mineral Product Manufacturing"
  },
  {
    "code": "2110",
    "description": "Iron Smelting and Steel Manufacturing"
  },
  {
    "code": "2121",
    "description": "Iron and Steel Casting"
  },
  {
    "code": "2122",
    "description": "Steel Pipe and Tube Manufacturing"
  },
  {
    "code": "2131",
    "description": "Alumina Production"
  },
  {
    "code": "2132",
    "description": "Aluminium Smelting"
  },
  {
    "code": "2133",
    "description": "Copper, Silver, Lead, and Zinc Smelting and Refining"
  },
  {
    "code": "2139",
    "description": "Other Basic Non-Ferrous Metal Manufacturing"
  },
  {
    "code": "2141",
    "description": "Non-Ferrous Metal Casting"
  },
  {
    "code": "2142",
    "description": "Aluminium Rolling, Drawing, Extruding"
  },
  {
    "code": "2149",
    "description": "Other Basic Non-Ferrous Metal Product Manufacturing"
  },
  {
    "code": "2210",
    "description": "Iron and Steel Forging"
  },
  {
    "code": "2221",
    "description": "Structural Steel Fabricating"
  },
  {
    "code": "2222",
    "description": "Prefabricated Metal Building Manufacturing"
  },
  {
    "code": "2223",
    "description": "Architectural Aluminium Product Manufacturing"
  },
  {
    "code": "2224",
    "description": "Metal Roof and Guttering Manufacturing (except Aluminium)"
  },
  {
    "code": "2229",
    "description": "Other Structural Metal Product Manufacturing"
  },
  {
    "code": "2231",
    "description": "Boiler, Tank and Other Heavy Gauge Metal Container Manufacturing"
  },
  {
    "code": "2239",
    "description": "Other Metal Container Manufacturing"
  },
  {
    "code": "2240",
    "description": "Other Sheet Metal Product Manufacturing"
  },
  {
    "code": "2291",
    "description": "Spring and Wire Product Manufacturing"
  },
  {
    "code": "2292",
    "description": "Nut, Bolt, Screw and Rivet Manufacturing"
  },
  {
    "code": "2293",
    "description": "Metal Coating and Finishing"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c."
  },
  {
    "code": "2311",
    "description": "Motor Vehicle Manufacturing"
  },
  {
    "code": "2312",
    "description": "Motor Vehicle Body and Trailer Manufacturing"
  },
  {
    "code": "2313",
    "description": "Automotive Electrical Components Manufacturing"
  },
  {
    "code": "2319",
    "description": "Other Motor Vehicle Parts Manufacturing"
  },
  {
    "code": "2391",
    "description": "Shipbuilding and Repair Services"
  },
  {
    "code": "2392",
    "description": "Boatbuilding and Repair Services"
  },
  {
    "code": "2393",
    "description": "Railway Rolling Stock Manufacturing and Repair Services"
  },
  {
    "code": "2394",
    "description": "Aircraft Manufacturing and Repair Services"
  },
  {
    "code": "2399",
    "description": "Other Transport Equipment Manufacturing n.e.c."
  },
  {
    "code": "2411",
    "description": "Photographic, Optical and Ophthalmic Equipment Manufacturing"
  },
  {
    "code": "2412",
    "description": "Medical and Surgical Equipment Manufacturing"
  },
  {
    "code": "2419",
    "description": "Other Professional and Scientific Equipment Manufacturing"
  },
  {
    "code": "2421",
    "description": "Computer and Electronic Office Equipment Manufacturing"
  },
  {
    "code": "2422",
    "description": "Communications Equipment Manufacturing"
  },
  {
    "code": "2429",
    "description": "Other Electronic Equipment Manufacturing"
  },
  {
    "code": "2431",
    "description": "Electric Cable and Wire Manufacturing"
  },
  {
    "code": "2432",
    "description": "Electric Lighting Equipment Manufacturing"
  },
  {
    "code": "2439",
    "description": "Other Electrical Equipment Manufacturing"
  },
  {
    "code": "2441",
    "description": "Whiteware Appliance Manufacturing"
  },
  {
    "code": "2449",
    "description": "Other Domestic Appliance Manufacturing"
  },
  {
    "code": "2451",
    "description": "Pumps and Compressors Manufacturing"
  },
  {
    "code": "2452",
    "description": "Fixed Space Heating, Cooling and Ventilation Equipment Manufacturing"
  },
  {
    "code": "2461",
    "description": "Agricultural Machinery and Equipment Manufacturing"
  },
  {
    "code": "2462",
    "description": "Mining and Construction Machinery Manufacturing"
  },
  {
    "code": "2463",
    "description": "Machine Tool and Parts Manufacturing"
  },
  {
    "code": "2469",
    "description": "Other Specialised Machinery and Equipment Manufacturing"
  },
  {
    "code": "2491",
    "description": "Lifting and Material Handling Equipment Manufacturing"
  },
  {
    "code": "2499",
    "description": "Other Machinery and Equipment Manufacturing n.e.c."
  },
  {
    "code": "2511",
    "description": "Wooden Furniture and Upholstered Seat Manufacturing"
  },
  {
    "code": "2512",
    "description": "Metal Furniture Manufacturing"
  },
  {
    "code": "2513",
    "description": "Mattress Manufacturing"
  },
  {
    "code": "2519",
    "description": "Other Furniture Manufacturing"
  },
  {
    "code": "2591",
    "description": "Jewellery and Silverware Manufacturing"
  },
  {
    "code": "2592",
    "description": "Toy, Sporting and Recreational Product Manufacturing"
  },
  {
    "code": "2599",
    "description": "Other Manufacturing n.e.c."
  },
  {
    "code": "2611",
    "description": "Fossil Fuel Electricity Generation"
  },
  {
    "code": "2612",
    "description": "Hydro-electricity Generation"
  },
  {
    "code": "2619",
    "description": "Other Electricity Generation"
  },
  {
    "code": "2620",
    "description": "Electricity Transmission"
  },
  {
    "code": "2630",
    "description": "Electricity Distribution"
  },
  {
    "code": "2640",
    "description": "On Selling Electricity and Electricity Market Operation"
  },
  {
    "code": "2700",
    "description": "Gas Supply"
  },
  {
    "code": "2811",
    "description": "Water Supply"
  },
  {
    "code": "2812",
    "description": "Sewerage and Drainage Services"
  },
  {
    "code": "2911",
    "description": "Solid Waste Collection Services"
  },
  {
    "code": "2919",
    "description": "Other Waste Collection Services"
  },
  {
    "code": "2921",
    "description": "Waste Treatment and Disposal Services"
  },
  {
    "code": "2922",
    "description": "Waste Remediation and Materials Recovery Services"
  },
  {
    "code": "3011",
    "description": "House Construction"
  },
  {
    "code": "3019",
    "description": "Other Residential Building Construction"
  },
  {
    "code": "3020",
    "description": "Non-Residential Building Construction"
  },
  {
    "code": "3101",
    "description": "Road and Bridge Construction"
  },
  {
    "code": "3109",
    "description": "Other Heavy and Civil Engineering Construction"
  },
  {
    "code": "3211",
    "description": "Land Development and Subdivision"
  },
  {
    "code": "3212",
    "description": "Site Preparation Services"
  },
  {
    "code": "3221",
    "description": "Concreting Services"
  },
  {
    "code": "3222",
    "description": "Bricklaying Services"
  },
  {
    "code": "3223",
    "description": "Roofing Services"
  },
  {
    "code": "3224",
    "description": "Structural Steel Erection Services"
  },
  {
    "code": "3231",
    "description": "Plumbing Services"
  },
  {
    "code": "3232",
    "description": "Electrical Services"
  },
  {
    "code": "3233",
    "description": "Air Conditioning and Heating Services"
  },
  {
    "code": "3234",
    "description": "Fire and Security Alarm Installation Services"
  },
  {
    "code": "3239",
    "description": "Other Building Installation Services"
  },
  {
    "code": "3241",
    "description": "Plastering and Ceiling Services"
  },
  {
    "code": "3242",
    "description": "Carpentry Services"
  },
  {
    "code": "3243",
    "description": "Tiling and Carpeting Services"
  },
  {
    "code": "3244",
    "description": "Painting and Decorating Services"
  },
  {
    "code": "3245",
    "description": "Glazing Services"
  },
  {
    "code": "3291",
    "description": "Landscape Construction Services"
  },
  {
    "code": "3292",
    "description": "Hire of Construction Machinery with Operator"
  },
  {
    "code": "3299",
    "description": "Other Construction Services n.e.c."
  },
  {
    "code": "3311",
    "description": "Wool Wholesaling"
  },
  {
    "code": "3312",
    "description": "Cereal Grain Wholesaling"
  },
  {
    "code": "3319",
    "description": "Other Agricultural Product Wholesaling"
  },
  {
    "code": "3321",
    "description": "Petroleum Product Wholesaling"
  },
  {
    "code": "3322",
    "description": "Metal and Mineral Wholesaling"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling"
  },
  {
    "code": "3331",
    "description": "Timber Wholesaling"
  },
  {
    "code": "3332",
    "description": "Plumbing Goods Wholesaling"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling"
  },
  {
    "code": "3411",
    "description": "Agricultural and Construction Machinery Wholesaling"
  },
  {
    "code": "3419",
    "description": "Other Specialised Industrial Machinery and Equipment Wholesaling"
  },
  {
    "code": "3491",
    "description": "Professional and Scientific Goods Wholesaling"
  },
  {
    "code": "3492",
    "description": "Computer and Computer Peripherals Wholesaling"
  },
  {
    "code": "3493",
    "description": "Telecommunication Goods Wholesaling"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling"
  },
  {
    "code": "3499",
    "description": "Other Machinery and Equipment Wholesaling n"
  },
  {
    "code": "3501",
    "description": "Car Wholesaling"
  },
  {
    "code": "3502",
    "description": "Commercial Vehicle Wholesaling"
  },
  {
    "code": "3503",
    "description": "Trailer and Other Motor Vehicle Wholesaling"
  },
  {
    "code": "3504",
    "description": "Motor Vehicle New Part Wholesaling"
  },
  {
    "code": "3505",
    "description": "Motor Vehicle Dismantling and Used Part Wholesaling"
  },
  {
    "code": "3601",
    "description": "General Line Groceries Wholesaling"
  },
  {
    "code": "3602",
    "description": "Meat, Poultry and Smallgoods Wholesaling"
  },
  {
    "code": "3603",
    "description": "Dairy Produce Wholesaling"
  },
  {
    "code": "3604",
    "description": "Fish and Seafood Wholesaling"
  },
  {
    "code": "3605",
    "description": "Fruit and Vegetable Wholesaling"
  },
  {
    "code": "3606",
    "description": "Liquor and Tobacco Product Wholesaling"
  },
  {
    "code": "3609",
    "description": "Other Grocery Wholesaling"
  },
  {
    "code": "3711",
    "description": "Textile Product Wholesaling"
  },
  {
    "code": "3712",
    "description": "Clothing and Footwear Wholesaling"
  },
  {
    "code": "3720",
    "description": "Pharmaceutical and Toiletry Goods Wholesaling"
  },
  {
    "code": "3731",
    "description": "Furniture and Floor Coverings Wholesaling"
  },
  {
    "code": "3732",
    "description": "Jewellery and Watch Wholesaling"
  },
  {
    "code": "3733",
    "description": "Kitchen and Dining Ware Wholesaling"
  },
  {
    "code": "3734",
    "description": "Toy and Sporting Goods Wholesaling"
  },
  {
    "code": "3735",
    "description": "Book and Magazine Wholesaling"
  },
  {
    "code": "3736",
    "description": "Paper Product Wholesaling"
  },
  {
    "code": "3739",
    "description": "Other Goods Wholesaling n.e.c."
  },
  {
    "code": "3800",
    "description": "Commission Based Wholesaling"
  },
  {
    "code": "3911",
    "description": "Car Retailing"
  },
  {
    "code": "3912",
    "description": "Motor Cycle Retailing"
  },
  {
    "code": "3913",
    "description": "Trailer and Other Motor Vehicle Retailing"
  },
  {
    "code": "3921",
    "description": "Motor Vehicle Parts Retailing"
  },
  {
    "code": "3922",
    "description": "Tyre Retailing"
  },
  {
    "code": "4000",
    "description": "Fuel Retailing"
  },
  {
    "code": "4110",
    "description": "Supermarket and Grocery Stores"
  },
  {
    "code": "4121",
    "description": "Fresh Meat, Fish and Poultry Retailing"
  },
  {
    "code": "4122",
    "description": "Fruit and Vegetable Retailing"
  },
  {
    "code": "4123",
    "description": "Liquor Retailing"
  },
  {
    "code": "4129",
    "description": "Other Specialised Food Retailing"
  },
  {
    "code": "4211",
    "description": "Furniture Retailing"
  },
  {
    "code": "4212",
    "description": "Floor Coverings Retailing"
  },
  {
    "code": "4213",
    "description": "Houseware Retailing"
  },
  {
    "code": "4214",
    "description": "Manchester and Other Textile Goods Retailing"
  },
  {
    "code": "4221",
    "description": "Electrical, Electronic and Gas Appliance Retailing"
  },
  {
    "code": "4222",
    "description": "Computer and Computer Peripherals Retailing"
  },
  {
    "code": "4229",
    "description": "Other Electrical and Electronic Goods Retailing"
  },
  {
    "code": "4231",
    "description": "Hardware and Building Supplies Retailing"
  },
  {
    "code": "4232",
    "description": "Garden Supplies Retailing"
  },
  {
    "code": "4241",
    "description": "Sport and Camping Equipment Retailing"
  },
  {
    "code": "4242",
    "description": "Entertainment Media Retailing"
  },
  {
    "code": "4243",
    "description": "Toy and Game Retailing"
  },
  {
    "code": "4244",
    "description": "Newspaper and Book Retailing"
  },
  {
    "code": "4245",
    "description": "Marine Equipment Retailing"
  },
  {
    "code": "4251",
    "description": "Clothing Retailing"
  },
  {
    "code": "4252",
    "description": "Footwear Retailing"
  },
  {
    "code": "4253",
    "description": "Watch and Jewellery Retailing"
  },
  {
    "code": "4259",
    "description": "Other Personal Accessories Retailing"
  },
  {
    "code": "4260",
    "description": "Department Stores"
  },
  {
    "code": "4271",
    "description": "Pharmaceutical, Cosmetic and Toiletry Goods Retailing"
  },
  {
    "code": "4272",
    "description": "Stationery Goods Retailing"
  },
  {
    "code": "4273",
    "description": "Antique and Used Goods Retailing"
  },
  {
    "code": "4274",
    "description": "Flower Retailing"
  },
  {
    "code": "4279",
    "description": "Other Store-Based Retailing n.e.c."
  },
  {
    "code": "4310",
    "description": "Non Store Retailing"
  },
  {
    "code": "4320",
    "description": "Retail Commission Based Buying and/or Selling"
  },
  {
    "code": "4400",
    "description": "Accommodation"
  },
  {
    "code": "4511",
    "description": "Cafes and Restaurants"
  },
  {
    "code": "4512",
    "description": "Takeaway Food Services"
  },
  {
    "code": "4513",
    "description": "Catering Services"
  },
  {
    "code": "4520",
    "description": "Pubs, Taverns and Bars"
  },
  {
    "code": "4530",
    "description": "Clubs (Hospitality)"
  },
  {
    "code": "4610",
    "description": "Road Freight Transport"
  },
  {
    "code": "4621",
    "description": "Interurban and Rural Bus Transport"
  },
  {
    "code": "4622",
    "description": "Urban Bus Transport (Including Tramway)"
  },
  {
    "code": "4623",
    "description": "Taxi and Other Road Transport"
  },
  {
    "code": "4710",
    "description": "Rail Freight Transport"
  },
  {
    "code": "4720",
    "description": "Rail Passenger Transport"
  },
  {
    "code": "4810",
    "description": "Water Freight Transport"
  },
  {
    "code": "4820",
    "description": "Water Passenger Transport"
  },
  {
    "code": "4900",
    "description": "Air and Space Transport"
  },
  {
    "code": "5010",
    "description": "Scenic and Sightseeing Transport"
  },
  {
    "code": "5021",
    "description": "Pipeline Transport"
  },
  {
    "code": "5029",
    "description": "Other Transport n.e.c."
  },
  {
    "code": "5101",
    "description": "Postal Services"
  },
  {
    "code": "5102",
    "description": "Courier Pick-up and Delivery Services"
  },
  {
    "code": "5211",
    "description": "Stevedoring Services"
  },
  {
    "code": "5212",
    "description": "Port and Water Transport Terminal Operations"
  },
  {
    "code": "5219",
    "description": "Other Water Transport Support Services"
  },
  {
    "code": "5220",
    "description": "Airport Operations and Other Air Transport Support Services"
  },
  {
    "code": "5291",
    "description": "Customs Agency Services"
  },
  {
    "code": "5292",
    "description": "Freight Forwarding Services"
  },
  {
    "code": "5299",
    "description": "Other Transport Support Services n.e.c"
  },
  {
    "code": "5301",
    "description": "Grain Storage Services"
  },
  {
    "code": "5309",
    "description": "Other Warehousing and Storage Services"
  },
  {
    "code": "5411",
    "description": "Newspaper Publishing"
  },
  {
    "code": "5412",
    "description": "Magazine and Other Periodical Publishing"
  },
  {
    "code": "5413",
    "description": "Book Publishing"
  },
  {
    "code": "5414",
    "description": "Directory and Mailing List Publishing"
  },
  {
    "code": "5419",
    "description": "Other Publishing (except Software, Music and Internet)"
  },
  {
    "code": "5420",
    "description": "Software Publishing"
  },
  {
    "code": "5511",
    "description": "Motion Picture and Video Production"
  },
  {
    "code": "5512",
    "description": "Motion Picture and Video Distribution"
  },
  {
    "code": "5513",
    "description": "Motion Picture Exhibition"
  },
  {
    "code": "5514",
    "description": "Postproduction Services and Other Motion Picture and Video Activities"
  },
  {
    "code": "5521",
    "description": "Music Publishing"
  },
  {
    "code": "5522",
    "description": "Music and Other Sound Recording Activities"
  },
  {
    "code": "5610",
    "description": "Radio Broadcasting"
  },
  {
    "code": "5621",
    "description": "Free-to-Air Television Broadcasting"
  },
  {
    "code": "5622",
    "description": "Cable and Other Subscription Programming"
  },
  {
    "code": "5700",
    "description": "Internet Publishing and Broadcasting"
  },
  {
    "code": "5801",
    "description": "Wired Telecommunications Network Operation"
  },
  {
    "code": "5802",
    "description": "Other Telecommunications Network Operation"
  },
  {
    "code": "5809",
    "description": "Other Telecommunications Services"
  },
  {
    "code": "5910",
    "description": "Internet Access Services"
  },
  {
    "code": "5921",
    "description": "Data Processing and Web Hosting Services"
  },
  {
    "code": "5922",
    "description": "Electronic Information Storage Services"
  },
  {
    "code": "6010",
    "description": "Libraries and Archives"
  },
  {
    "code": "6020",
    "description": "Other Information Services"
  },
  {
    "code": "6210",
    "description": "Central Banking"
  },
  {
    "code": "6221",
    "description": "Banking"
  },
  {
    "code": "6222",
    "description": "Building Society Operation"
  },
  {
    "code": "6223",
    "description": "Credit Union Operation"
  },
  {
    "code": "6229",
    "description": "Other Depository Financial Intermediation"
  },
  {
    "code": "6230",
    "description": "Non-depository Financing"
  },
  {
    "code": "6240",
    "description": "Financial Asset Investing"
  },
  {
    "code": "6310",
    "description": "Life Insurance"
  },
  {
    "code": "6321",
    "description": "Health Insurance"
  },
  {
    "code": "6322",
    "description": "General Insurance"
  },
  {
    "code": "6330",
    "description": "Superannuation Funds"
  },
  {
    "code": "6411",
    "description": "Financial Asset Broking Services"
  },
  {
    "code": "6419",
    "description": "Other Auxiliary Finance and Investment Services"
  },
  {
    "code": "6420",
    "description": "Auxiliary Insurance Services"
  },
  {
    "code": "6611",
    "description": "Passenger Car Rental and Hiring"
  },
  {
    "code": "6619",
    "description": "Other Motor Vehicle and Transport Equipment Rental and Hiring"
  },
  {
    "code": "6620",
    "description": "Farm Animals and Bloodstock Leasing"
  },
  {
    "code": "6631",
    "description": "Heavy Machinery and Scaffolding Rental and Hiring"
  },
  {
    "code": "6632",
    "description": "Video and Other Electronic Media Rental"
  },
  {
    "code": "6639",
    "description": "Other Goods and Equipment Rental and Hiring n.e.c."
  },
  {
    "code": "6640",
    "description": "Non-Financial Intangible Assets (except Copyrights) Leasing"
  },
  {
    "code": "6711",
    "description": "Residential Property Operators"
  },
  {
    "code": "6712",
    "description": "Non-Residential Property Operators"
  },
  {
    "code": "6720",
    "description": "Real Estate Services"
  },
  {
    "code": "6910",
    "description": "Scientific Research Services"
  },
  {
    "code": "6921",
    "description": "Architectural Services"
  },
  {
    "code": "6922",
    "description": "Surveying and Mapping Services"
  },
  {
    "code": "6923",
    "description": "Engineering Design and Engineering Consulting Services"
  },
  {
    "code": "6924",
    "description": "Other Specialised Design Services"
  },
  {
    "code": "6925",
    "description": "Scientific Testing and Analysis Services"
  },
  {
    "code": "6931",
    "description": "Legal Services"
  },
  {
    "code": "6932",
    "description": "Accounting Services"
  },
  {
    "code": "6940",
    "description": "Advertising Services"
  },
  {
    "code": "6950",
    "description": "Market Research and Statistical Services"
  },
  {
    "code": "6961",
    "description": "Corporate Head Office Management Services"
  },
  {
    "code": "6962",
    "description": "Management Advice and Other Consulting Services"
  },
  {
    "code": "6970",
    "description": "Veterinary Services"
  },
  {
    "code": "6991",
    "description": "Professional Photographic Services"
  },
  {
    "code": "6999",
    "description": "Other Professional, Scientific and Technical Services n.e.c."
  },
  {
    "code": "7000",
    "description": "Computer Systems Design and Related Services"
  },
  {
    "code": "7211",
    "description": "Employment Placement and Recruitment Services"
  },
  {
    "code": "7212",
    "description": "Labour Supply Services"
  },
  {
    "code": "7220",
    "description": "Travel Agency and Tour Arrangement Services"
  },
  {
    "code": "7291",
    "description": "Office Administrative Services"
  },
  {
    "code": "7292",
    "description": "Document Preparation Services"
  },
  {
    "code": "7293",
    "description": "Credit Reporting and Debt Collection Services"
  },
  {
    "code": "7294",
    "description": "Call Centre Operation"
  },
  {
    "code": "7299",
    "description": "Other Administrative Services n.e.c."
  },
  {
    "code": "7311",
    "description": "Buildings Cleaning Services"
  },
  {
    "code": "7312",
    "description": "Buildings Pest Control Services"
  },
  {
    "code": "7313",
    "description": "Gardening Services"
  },
  {
    "code": "7320",
    "description": "Packaging Services"
  },
  {
    "code": "7510",
    "description": "Central Government Administration"
  },
  {
    "code": "7520",
    "description": "State Government Administration"
  },
  {
    "code": "7530",
    "description": "Local Government Administration"
  },
  {
    "code": "7540",
    "description": "Justice"
  },
  {
    "code": "7551",
    "description": "Domestic Government Representation"
  },
  {
    "code": "7552",
    "description": "Foreign Government Representation"
  },
  {
    "code": "7600",
    "description": "Defence"
  },
  {
    "code": "7711",
    "description": "Police Services"
  },
  {
    "code": "7712",
    "description": "Investigation and Security Services"
  },
  {
    "code": "7713",
    "description": "Fire Protection and Other Emergency Services (except Ambulance Services)"
  },
  {
    "code": "7714",
    "description": "Correctional and Detention Services"
  },
  {
    "code": "7719",
    "description": "Other Public Order and Safety Services"
  },
  {
    "code": "7720",
    "description": "Regulatory Services"
  },
  {
    "code": "8010",
    "description": "Preschool Education"
  },
  {
    "code": "8021",
    "description": "Primary Education"
  },
  {
    "code": "8022",
    "description": "Secondary Education"
  },
  {
    "code": "8023",
    "description": "Combined Primary and Secondary Education"
  },
  {
    "code": "8024",
    "description": "Special School Education"
  },
  {
    "code": "8101",
    "description": "Technical and Vocational Education and Training"
  },
  {
    "code": "8102",
    "description": "Higher Education"
  },
  {
    "code": "8211",
    "description": "Sports and Physical Recreation Instruction"
  },
  {
    "code": "8212",
    "description": "Arts Education"
  },
  {
    "code": "8219",
    "description": "Adult, Community and Other Education n.e.c."
  },
  {
    "code": "8220",
    "description": "Educational Support Services"
  },
  {
    "code": "8401",
    "description": "Hospitals (except Psychiatric Hospitals)"
  },
  {
    "code": "8402",
    "description": "Psychiatric Hospitals"
  },
  {
    "code": "8511",
    "description": "General Practice Medical Services"
  },
  {
    "code": "8512",
    "description": "Specialist Medical Services"
  },
  {
    "code": "8520",
    "description": "Pathology and Diagnostic Imaging Services"
  },
  {
    "code": "8531",
    "description": "Dental Services"
  },
  {
    "code": "8532",
    "description": "Optometry and Optical Dispensing"
  },
  {
    "code": "8533",
    "description": "Physiotherapy Services"
  },
  {
    "code": "8534",
    "description": "Chiropractic and Osteopathic Services"
  },
  {
    "code": "8539",
    "description": "Other Allied Health Services"
  },
  {
    "code": "8591",
    "description": "Ambulance Services"
  },
  {
    "code": "8599",
    "description": "Other Health Care Services n.e.c."
  },
  {
    "code": "8601",
    "description": "Aged Care Residential Services"
  },
  {
    "code": "8609",
    "description": "Other Residential Care Services"
  },
  {
    "code": "8710",
    "description": "Child Care Services"
  },
  {
    "code": "8790",
    "description": "Other Social Assistance Services"
  },
  {
    "code": "8910",
    "description": "Museum Operation"
  },
  {
    "code": "8921",
    "description": "Zoological and Botanic Gardens Operation"
  },
  {
    "code": "8922",
    "description": "Nature Reserves and Conservation Parks Operation"
  },
  {
    "code": "9001",
    "description": "Performing Arts Operation"
  },
  {
    "code": "9002",
    "description": "Creative Artists, Musicians, Writers and Performers"
  },
  {
    "code": "9003",
    "description": "Performing Arts Venue Operation"
  },
  {
    "code": "9111",
    "description": "Health and Fitness Centres and Gymnasia Operation"
  },
  {
    "code": "9112",
    "description": "Sport and Physical Recreation Clubs and Sports Professionals"
  },
  {
    "code": "9113",
    "description": "Sports and Physical Recreation Venues, Grounds and Facilities Operation"
  },
  {
    "code": "9114",
    "description": "Sport and Physical Recreation Administrative Service"
  },
  {
    "code": "9121",
    "description": "Horse and Dog Racing Administration and Track Operation"
  },
  {
    "code": "9129",
    "description": "Other Horse and Dog Racing Activities"
  },
  {
    "code": "9131",
    "description": "Amusement Parks and Centres Operation"
  },
  {
    "code": "9139",
    "description": "Amusement and Other Recreation Activities n.e.c."
  },
  {
    "code": "9201",
    "description": "Casino Operation"
  },
  {
    "code": "9202",
    "description": "Lottery Operation"
  },
  {
    "code": "9209",
    "description": "Other Gambling Activities"
  },
  {
    "code": "9411",
    "description": "Automotive Electrical Services"
  },
  {
    "code": "9412",
    "description": "Automotive Body, Paint and Interior Repair"
  },
  {
    "code": "9419",
    "description": "Other Automotive Repair and Maintenance"
  },
  {
    "code": "9421",
    "description": "Domestic Appliance Repair and Maintenance"
  },
  {
    "code": "9422",
    "description": "Electronic (except Domestic Appliance) and Precision Equipment Repair and Maintenance"
  },
  {
    "code": "9429",
    "description": "Other Machinery and Equipment Repair and Maintenance"
  },
  {
    "code": "9491",
    "description": "Clothing and Footwear Repair"
  },
  {
    "code": "9499",
    "description": "Other Repair and Maintenance n.e.c."
  },
  {
    "code": "9511",
    "description": "Hairdressing and Beauty Services"
  },
  {
    "code": "9512",
    "description": "Diet and Weight Reduction Centre Operation"
  },
  {
    "code": "9520",
    "description": "Funeral, Crematorium and Cemetery Services"
  },
  {
    "code": "9531",
    "description": "Laundry and Dry-Cleaning Services"
  },
  {
    "code": "9532",
    "description": "Photographic Film Processing"
  },
  {
    "code": "9533",
    "description": "Parking Services"
  },
  {
    "code": "9534",
    "description": "Brothel Keeping and Prostitution Services"
  },
  {
    "code": "9539",
    "description": "Other Personal Services n.e.c."
  },
  {
    "code": "9540",
    "description": "Religious Services"
  },
  {
    "code": "9551",
    "description": "Business and Professional Association Services"
  },
  {
    "code": "9552",
    "description": "Labour Association Services"
  },
  {
    "code": "9559",
    "description": "Other Interest Group Services n.e.c."
  },
  {
    "code": "9601",
    "description": "Private Households Employing Staff"
  },
  {
    "code": "9602",
    "description": "Undifferentiated Goods-Producing Activities of Private Households for Own Use"
  },
  {
    "code": "9603",
    "description": "Undifferentiated Service-Producing Activities of Private Households for Own Use"
  },
  {
    "code": ""
  }
];


var activities = [
  {
    "code": "Class code",
    "description": "Class descriptor",
    "index": "Index of primary activities"
  },
  {
    "code": "0419",
    "description": "Other Fishing",
    "index": "Abalone/paua fishing"
  },
  {
    "code": "1111",
    "description": "Meat Processing",
    "index": "Abattoir operation (except poultry)"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Abrasive wholesaling (except abrasive cleansers)"
  },
  {
    "code": "2090",
    "description": "Other Non-Metallic Mineral Product Manufacturing",
    "index": "Abrasives manufacturing"
  },
  {
    "code": "0990",
    "description": "Other Non-Metallic Mineral Mining and Quarrying",
    "index": "Abrasives mining"
  },
  {
    "code": "6322",
    "description": "General Insurance",
    "index": "Accident insurance provision"
  },
  {
    "code": "9559",
    "description": "Other Interest Group Services n.e.c.",
    "index": "Accident prevention association operation"
  },
  {
    "code": "8601",
    "description": "Aged Care Residential Services",
    "index": "Accommodation for the aged operation"
  },
  {
    "code": "7293",
    "description": "Credit Reporting and Debt Collection Services",
    "index": "Account collection service"
  },
  {
    "code": "9551",
    "description": "Business and Professional Association Services",
    "index": "Accountants' association operation"
  },
  {
    "code": "6932",
    "description": "Accounting Services",
    "index": "Accounting service"
  },
  {
    "code": "1812",
    "description": "Basic Organic Chemical Manufacturing",
    "index": "Acetaldehyde manufacturing"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing",
    "index": "Acetylene gas manufacturing"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Acid wholesaling"
  },
  {
    "code": "1812",
    "description": "Basic Organic Chemical Manufacturing",
    "index": "Acid, acetic, manufacturing"
  },
  {
    "code": "1813",
    "description": "Basic Inorganic Chemical Manufacturing",
    "index": "Acid, inorganic, manufacturing n.e.c."
  },
  {
    "code": "1812",
    "description": "Basic Organic Chemical Manufacturing",
    "index": "Acid, organic, manufacturing"
  },
  {
    "code": "2090",
    "description": "Other Non-Metallic Mineral Product Manufacturing",
    "index": "Acoustic tile, panel or board manufacturing (glass or mineral wool)"
  },
  {
    "code": "2032",
    "description": "Plaster and Gypsum Product Manufacturing",
    "index": "Acoustic tile, plaster, manufacturing"
  },
  {
    "code": "8212",
    "description": "Arts Education",
    "index": "Acting and drama school operation"
  },
  {
    "code": "1812",
    "description": "Basic Organic Chemical Manufacturing",
    "index": "Activated carbon/charcoal manufacturing"
  },
  {
    "code": "6420",
    "description": "Auxiliary Insurance Services",
    "index": "Actuarial service"
  },
  {
    "code": "8539",
    "description": "Other Allied Health Services",
    "index": "Acupuncture service"
  },
  {
    "code": "5414",
    "description": "Directory and Mailing List Publishing",
    "index": "Address list publishing (except internet)"
  },
  {
    "code": "1915",
    "description": "Adhesive Manufacturing",
    "index": "Adhesive manufacturing"
  },
  {
    "code": "1529",
    "description": "Other Converted Paper Product Manufacturing",
    "index": "Adhesive paper label manufacturing"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Adhesive wholesaling"
  },
  {
    "code": "7510",
    "description": "Central Government Administration",
    "index": "Administration, except justice and defence (central government)"
  },
  {
    "code": "7299",
    "description": "Other Administrative Services n.e.c.",
    "index": "Administrative service n.e.c."
  },
  {
    "code": "8790",
    "description": "Other Social Assistance Services",
    "index": "Adoption service"
  },
  {
    "code": "8790",
    "description": "Other Social Assistance Services",
    "index": "Adult day care centre operation"
  },
  {
    "code": "6940",
    "description": "Advertising Services",
    "index": "Advertising agency service"
  },
  {
    "code": "6940",
    "description": "Advertising Services",
    "index": "Advertising material preparation service"
  },
  {
    "code": "6940",
    "description": "Advertising Services",
    "index": "Advertising placement service"
  },
  {
    "code": "6940",
    "description": "Advertising Services",
    "index": "Advertising service (except the sale of advertising space in own publication or broadcast)"
  },
  {
    "code": "6940",
    "description": "Advertising Services",
    "index": "Advertising space selling (on a commission or fee basis)"
  },
  {
    "code": "6931",
    "description": "Legal Services",
    "index": "Advocate service"
  },
  {
    "code": "3609",
    "description": "Other Grocery Wholesaling",
    "index": "Aerated water wholesaling"
  },
  {
    "code": "6940",
    "description": "Advertising Services",
    "index": "Aerial advertising service"
  },
  {
    "code": "8591",
    "description": "Ambulance Services",
    "index": "Aerial ambulance service"
  },
  {
    "code": "5010",
    "description": "Scenic and Sightseeing Transport",
    "index": "Aerial cable car operation"
  },
  {
    "code": "0529",
    "description": "Other Agriculture and Fishing Support Services",
    "index": "Aerial crop spraying or dusting"
  },
  {
    "code": "0529",
    "description": "Other Agriculture and Fishing Support Services",
    "index": "Aerial mustering"
  },
  {
    "code": "0529",
    "description": "Other Agriculture and Fishing Support Services",
    "index": "Aerial pest control or baiting"
  },
  {
    "code": "0529",
    "description": "Other Agriculture and Fishing Support Services",
    "index": "Aerial seeding service"
  },
  {
    "code": "6922",
    "description": "Surveying and Mapping Services",
    "index": "Aerial surveying service"
  },
  {
    "code": "0529",
    "description": "Other Agriculture and Fishing Support Services",
    "index": "Aerial topdressing"
  },
  {
    "code": "8211",
    "description": "Sports and Physical Recreation Instruction",
    "index": "Aerobics instruction"
  },
  {
    "code": "3101",
    "description": "Road and Bridge Construction",
    "index": "Aerodrome runway construction"
  },
  {
    "code": "3491",
    "description": "Professional and Scientific Goods Wholesaling",
    "index": "Aeronautical equipment wholesaling"
  },
  {
    "code": "6910",
    "description": "Scientific Research Services",
    "index": "Aeronautical research service"
  },
  {
    "code": "6619",
    "description": "Other Motor Vehicle and Transport Equipment Rental and Hiring",
    "index": "Aeroplane rental (without pilot)"
  },
  {
    "code": "1852",
    "description": "Cosmetic and Toiletry Preparation Manufacturing",
    "index": "After-shave lotion manufacturing"
  },
  {
    "code": "8790",
    "description": "Other Social Assistance Services",
    "index": "Aged care assistance service"
  },
  {
    "code": "8601",
    "description": "Aged Care Residential Services",
    "index": "Aged care hostel operation"
  },
  {
    "code": "0919",
    "description": "Other Construction Material Mining",
    "index": "Aggregate quarrying"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Agricultural chemical wholesaling"
  },
  {
    "code": "2461",
    "description": "Agricultural Machinery and Equipment Manufacturing",
    "index": "Agricultural harvesting equipment manufacturing"
  },
  {
    "code": "8023",
    "description": "Combined Primary and Secondary Education",
    "index": "Agricultural high school operation (combined primary/secondary school)"
  },
  {
    "code": "8022",
    "description": "Secondary Education",
    "index": "Agricultural high school operation (except combined primary/secondary school"
  },
  {
    "code": "2461",
    "description": "Agricultural Machinery and Equipment Manufacturing",
    "index": "Agricultural implement manufacturing (except garden tools)"
  },
  {
    "code": "3411",
    "description": "Agricultural and Construction Machinery Wholesaling",
    "index": "Agricultural implement wholesaling"
  },
  {
    "code": "6712",
    "description": "Non-Residential Property Operators",
    "index": "Agricultural land renting or leasing"
  },
  {
    "code": "2031",
    "description": "Cement and Lime Manufacturing",
    "index": "Agricultural lime manufacturing"
  },
  {
    "code": "2461",
    "description": "Agricultural Machinery and Equipment Manufacturing",
    "index": "Agricultural machinery or equipment manufacturing n.e.c."
  },
  {
    "code": "6631",
    "description": "Heavy Machinery and Scaffolding Rental and Hiring",
    "index": "Agricultural machinery rental (without operator)"
  },
  {
    "code": "3411",
    "description": "Agricultural and Construction Machinery Wholesaling",
    "index": "Agricultural machinery wholesaling"
  },
  {
    "code": "6962",
    "description": "Management Advice and Other Consulting Services",
    "index": "Agricultural management consulting service"
  },
  {
    "code": "9429",
    "description": "Other Machinery and Equipment Repair and Maintenance",
    "index": "Agricultural or farm machinery and equipment repair and maintenance"
  },
  {
    "code": "2461",
    "description": "Agricultural Machinery and Equipment Manufacturing",
    "index": "Agricultural planting equipment manufacturing"
  },
  {
    "code": "6910",
    "description": "Scientific Research Services",
    "index": "Agricultural research service"
  },
  {
    "code": "0529",
    "description": "Other Agriculture and Fishing Support Services",
    "index": "Agricultural support service n.e.c."
  },
  {
    "code": "2451",
    "description": "Pumps and Compressors Manufacturing",
    "index": "Air compressor manufacturing"
  },
  {
    "code": "2449",
    "description": "Other Domestic Appliance Manufacturing",
    "index": "Air conditioner compressor, domestic, manufacturing"
  },
  {
    "code": "9411",
    "description": "Automotive Electrical Services",
    "index": "Air conditioner repair (automotive)"
  },
  {
    "code": "9421",
    "description": "Domestic Appliance Repair and Maintenance",
    "index": "Air conditioner repair and maintenance"
  },
  {
    "code": "4221",
    "description": "Electrical, Electronic and Gas Appliance Retailing",
    "index": "Air conditioner retailing"
  },
  {
    "code": "2313",
    "description": "Automotive Electrical Components Manufacturing",
    "index": "Air conditioner, automotive, manufacturing"
  },
  {
    "code": "2449",
    "description": "Other Domestic Appliance Manufacturing",
    "index": "Air conditioner, domestic, manufacturing"
  },
  {
    "code": "2452",
    "description": "Fixed Space Heating, Cooling and Ventilation Equipment Manufacturing",
    "index": "Air conditioning compressor or parts, commercial or industrial, manufacturing"
  },
  {
    "code": "3233",
    "description": "Air Conditioning and Heating Services",
    "index": "Air conditioning duct work installation"
  },
  {
    "code": "3233",
    "description": "Air Conditioning and Heating Services",
    "index": "Air conditioning equipment installation (except motor vehicle air conditioning equipment)"
  },
  {
    "code": "2452",
    "description": "Fixed Space Heating, Cooling and Ventilation Equipment Manufacturing",
    "index": "Air conditioning equipment, commercial or industrial, manufacturing (except motor vehicles)"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Air conditioning equipment, electric, wholesaling"
  },
  {
    "code": "3499",
    "description": "Other Machinery and Equipment Wholesaling n",
    "index": "Air conditioning equipment, non-electric, wholesaling"
  },
  {
    "code": "5292",
    "description": "Freight Forwarding Services",
    "index": "Air freight forwarding service"
  },
  {
    "code": "4900",
    "description": "Air and Space Transport",
    "index": "Air freight transport service"
  },
  {
    "code": "4900",
    "description": "Air and Space Transport",
    "index": "Air passenger transport service"
  },
  {
    "code": "5220",
    "description": "Airport Operations and Other Air Transport Support Services",
    "index": "Air traffic control service"
  },
  {
    "code": "5220",
    "description": "Airport Operations and Other Air Transport Support Services",
    "index": "Air transport navigation service"
  },
  {
    "code": "5010",
    "description": "Scenic and Sightseeing Transport",
    "index": "Airboat operation"
  },
  {
    "code": "4900",
    "description": "Air and Space Transport",
    "index": "Aircraft charter, lease or rental, with crew, for freight and/or passengers"
  },
  {
    "code": "2394",
    "description": "Aircraft Manufacturing and Repair Services",
    "index": "Aircraft engine building or repairing"
  },
  {
    "code": "2394",
    "description": "Aircraft Manufacturing and Repair Services",
    "index": "Aircraft manufacturing"
  },
  {
    "code": "5220",
    "description": "Airport Operations and Other Air Transport Support Services",
    "index": "Aircraft support service n.e.c."
  },
  {
    "code": "1914",
    "description": "Tyre Manufacturing",
    "index": "Aircraft tyre manufacturing"
  },
  {
    "code": "1413",
    "description": "Timber Resawing and Dressing",
    "index": "Air-drying timber"
  },
  {
    "code": "2394",
    "description": "Aircraft Manufacturing and Repair Services",
    "index": "Airframe building and repair"
  },
  {
    "code": "4513",
    "description": "Catering Services",
    "index": "Airline food catering service"
  },
  {
    "code": "5220",
    "description": "Airport Operations and Other Air Transport Support Services",
    "index": "Airport baggage handling service"
  },
  {
    "code": "4622",
    "description": "Urban Bus Transport (Including Tramway)",
    "index": "Airport bus service"
  },
  {
    "code": "7713",
    "description": "Fire Protection and Other Emergency Services (except Ambulance Services)",
    "index": "Airport fire service"
  },
  {
    "code": "5220",
    "description": "Airport Operations and Other Air Transport Support Services",
    "index": "Airport operation"
  },
  {
    "code": "5220",
    "description": "Airport Operations and Other Air Transport Support Services",
    "index": "Airport terminal operation"
  },
  {
    "code": "0990",
    "description": "Other Non-Metallic Mineral Mining and Quarrying",
    "index": "Alabaster mining"
  },
  {
    "code": "7712",
    "description": "Investigation and Security Services",
    "index": "Alarm monitoring service"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Alarm system, electric or electronic, wholesaling"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Alcohol, industrial, wholesaling"
  },
  {
    "code": "4123",
    "description": "Liquor Retailing",
    "index": "Alcoholic beverage retailing (for consumption off the premises only)"
  },
  {
    "code": "3606",
    "description": "Liquor and Tobacco Product Wholesaling",
    "index": "Alcoholic beverage wholesaling"
  },
  {
    "code": "8790",
    "description": "Other Social Assistance Services",
    "index": "Alcoholics anonymous operation"
  },
  {
    "code": "1813",
    "description": "Basic Inorganic Chemical Manufacturing",
    "index": "Alkaline salt manufacturing n.e.c."
  },
  {
    "code": "6322",
    "description": "General Insurance",
    "index": "All risks insurance provision"
  },
  {
    "code": "3912",
    "description": "Motor Cycle Retailing",
    "index": "All terrain vehicle retailing"
  },
  {
    "code": "8512",
    "description": "Specialist Medical Services",
    "index": "Allergy specialist service"
  },
  {
    "code": "0804",
    "description": "Gold Ore Mining",
    "index": "Alluvial gold mining"
  },
  {
    "code": "0139",
    "description": "Other Fruit and Tree Nut Growing",
    "index": "Almond growing"
  },
  {
    "code": "0199",
    "description": "Other Livestock Farming n.e.c.",
    "index": "Alpaca farming"
  },
  {
    "code": "0522",
    "description": "Shearing Services",
    "index": "Alpaca shearing"
  },
  {
    "code": "2313",
    "description": "Automotive Electrical Components Manufacturing",
    "index": "Alternator manufacturing"
  },
  {
    "code": "0990",
    "description": "Other Non-Metallic Mineral Mining and Quarrying",
    "index": "Alum mining"
  },
  {
    "code": "2131",
    "description": "Alumina Production",
    "index": "Alumina manufacturing"
  },
  {
    "code": "2132",
    "description": "Aluminium Smelting",
    "index": "Aluminium casting"
  },
  {
    "code": "2142",
    "description": "Aluminium Rolling, Drawing, Extruding",
    "index": "Aluminium foil, household, manufacturing"
  },
  {
    "code": "2223",
    "description": "Architectural Aluminium Product Manufacturing",
    "index": "Aluminium framed door, glazed, manufacturing"
  },
  {
    "code": "2132",
    "description": "Aluminium Smelting",
    "index": "Aluminium from scrap recovery"
  },
  {
    "code": "1813",
    "description": "Basic Inorganic Chemical Manufacturing",
    "index": "Aluminium hydroxide manufacturing"
  },
  {
    "code": "3322",
    "description": "Metal and Mineral Wholesaling",
    "index": "Aluminium or aluminium alloy wholesaling"
  },
  {
    "code": "0802",
    "description": "Bauxite Mining",
    "index": "Aluminium ore mining"
  },
  {
    "code": "2142",
    "description": "Aluminium Rolling, Drawing, Extruding",
    "index": "Aluminium rolling, drawing or extruding"
  },
  {
    "code": "2223",
    "description": "Architectural Aluminium Product Manufacturing",
    "index": "Aluminium roofing manufacturing"
  },
  {
    "code": "2132",
    "description": "Aluminium Smelting",
    "index": "Aluminium smelting (from alumina)"
  },
  {
    "code": "0990",
    "description": "Other Non-Metallic Mineral Mining and Quarrying",
    "index": "Alunite mining"
  },
  {
    "code": "2312",
    "description": "Motor Vehicle Body and Trailer Manufacturing",
    "index": "Ambulance converting"
  },
  {
    "code": "8591",
    "description": "Ambulance Services",
    "index": "Ambulance service"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing",
    "index": "Ammonia gas manufacturing"
  },
  {
    "code": "1813",
    "description": "Basic Inorganic Chemical Manufacturing",
    "index": "Ammonium hydroxide manufacturing"
  },
  {
    "code": "1892",
    "description": "Explosives Manufacturing",
    "index": "Ammonium nitrate, explosive, manufacturing"
  },
  {
    "code": "1831",
    "description": "Fertiliser Manufacturing",
    "index": "Ammonium phosphate manufacturing"
  },
  {
    "code": "1831",
    "description": "Fertiliser Manufacturing",
    "index": "Ammonium sulphate manufacturing"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Ammunition manufacturing"
  },
  {
    "code": "4241",
    "description": "Sport and Camping Equipment Retailing",
    "index": "Ammunition retailing"
  },
  {
    "code": "3734",
    "description": "Toy and Sporting Goods Wholesaling",
    "index": "Ammunition wholesaling"
  },
  {
    "code": "2429",
    "description": "Other Electronic Equipment Manufacturing",
    "index": "Amplifier, audio-frequency, manufacturing"
  },
  {
    "code": "1841",
    "description": "Human Pharmaceutical and Medicinal Product Manufacturing",
    "index": "Ampoule manufacturing"
  },
  {
    "code": "9139",
    "description": "Amusement and Other Recreation Activities n.e.c.",
    "index": "Amusement activity n.e.c."
  },
  {
    "code": "9131",
    "description": "Amusement Parks and Centres Operation",
    "index": "Amusement arcade or centre operation"
  },
  {
    "code": "2469",
    "description": "Other Specialised Machinery and Equipment Manufacturing",
    "index": "Amusement machine manufacturing"
  },
  {
    "code": "9131",
    "description": "Amusement Parks and Centres Operation",
    "index": "Amusement machine or ride operation (including concession operators)"
  },
  {
    "code": "6639",
    "description": "Other Goods and Equipment Rental and Hiring n.e.c.",
    "index": "Amusement machine, coin operated, rental and hiring"
  },
  {
    "code": "9131",
    "description": "Amusement Parks and Centres Operation",
    "index": "Amusement park operation"
  },
  {
    "code": "8512",
    "description": "Specialist Medical Services",
    "index": "Anaesthetist service"
  },
  {
    "code": "1841",
    "description": "Human Pharmaceutical and Medicinal Product Manufacturing",
    "index": "Analgesic manufacturing"
  },
  {
    "code": "1133",
    "description": "Cheese and Other Dairy Product Manufacturing",
    "index": "Anhydrous milk fat (butter oil) manufacturing"
  },
  {
    "code": "9559",
    "description": "Other Interest Group Services n.e.c.",
    "index": "Animal (including wildlife) welfare association or league operation"
  },
  {
    "code": "1831",
    "description": "Fertiliser Manufacturing",
    "index": "Animal and vegetable fertiliser manufacturing"
  },
  {
    "code": "1333",
    "description": "Cut and Sewn Textile Product Manufacturing",
    "index": "Animal blanket/cover manufacturing"
  },
  {
    "code": "6970",
    "description": "Veterinary Services",
    "index": "Animal clinic operation"
  },
  {
    "code": "1832",
    "description": "Pesticide Manufacturing",
    "index": "Animal dip manufacturing"
  },
  {
    "code": "1192",
    "description": "Prepared Animal and Bird Feed Manufacturing",
    "index": "Animal feed, prepared, manufacturing (except uncanned meat or bone meal or protein-enriched skim milk powder)"
  },
  {
    "code": "1192",
    "description": "Prepared Animal and Bird Feed Manufacturing",
    "index": "Animal food, canned, manufacturing"
  },
  {
    "code": "6970",
    "description": "Veterinary Services",
    "index": "Animal hospital operation"
  },
  {
    "code": "1111",
    "description": "Meat Processing",
    "index": "Animal meat packing and freezing"
  },
  {
    "code": "1111",
    "description": "Meat Processing",
    "index": "Animal oil or fat, unrefined, manufacturing"
  },
  {
    "code": "1150",
    "description": "Oil and Fat Manufacturing",
    "index": "Animal oil, refined, manufacturing"
  },
  {
    "code": "6970",
    "description": "Veterinary Services",
    "index": "Animal pathology service"
  },
  {
    "code": "6970",
    "description": "Veterinary Services",
    "index": "Animal quarantine station operation"
  },
  {
    "code": "1832",
    "description": "Pesticide Manufacturing",
    "index": "Animal spray manufacturing"
  },
  {
    "code": "2293",
    "description": "Metal Coating and Finishing",
    "index": "Anodising"
  },
  {
    "code": "1841",
    "description": "Human Pharmaceutical and Medicinal Product Manufacturing",
    "index": "Anthelmintic manufacturing"
  },
  {
    "code": "1841",
    "description": "Human Pharmaceutical and Medicinal Product Manufacturing",
    "index": "Antibacterial manufacturing"
  },
  {
    "code": "1841",
    "description": "Human Pharmaceutical and Medicinal Product Manufacturing",
    "index": "Antibiotic manufacturing"
  },
  {
    "code": "1841",
    "description": "Human Pharmaceutical and Medicinal Product Manufacturing",
    "index": "Antibody manufacturing"
  },
  {
    "code": "1899",
    "description": "Other Basic Chemical Product Manufacturing n.e.c.",
    "index": "Antifreeze manufacturing"
  },
  {
    "code": "1841",
    "description": "Human Pharmaceutical and Medicinal Product Manufacturing",
    "index": "Antigen manufacturing"
  },
  {
    "code": "0809",
    "description": "Other Metal Ore Mining",
    "index": "Antimony ore mining"
  },
  {
    "code": "2139",
    "description": "Other Basic Non-Ferrous Metal Manufacturing",
    "index": "Antimony, refined, manufacturing"
  },
  {
    "code": "4211",
    "description": "Furniture Retailing",
    "index": "Antique reproduction furniture retailing"
  },
  {
    "code": "4273",
    "description": "Antique and Used Goods Retailing",
    "index": "Antique retailing"
  },
  {
    "code": "1841",
    "description": "Human Pharmaceutical and Medicinal Product Manufacturing",
    "index": "Antitoxin manufacturing"
  },
  {
    "code": "6711",
    "description": "Residential Property Operators",
    "index": "Apartment (except holiday apartment) renting or leasing"
  },
  {
    "code": "3019",
    "description": "Other Residential Building Construction",
    "index": "Apartment construction"
  },
  {
    "code": "0193",
    "description": "Beekeeping",
    "index": "Apiculture"
  },
  {
    "code": "7320",
    "description": "Packaging Services",
    "index": "Apparel and textile folding and packaging service"
  },
  {
    "code": "0134",
    "description": "Apple and Pear Growing",
    "index": "Apple growing"
  },
  {
    "code": "9421",
    "description": "Domestic Appliance Repair and Maintenance",
    "index": "Appliance domestic repair"
  },
  {
    "code": "4221",
    "description": "Electrical, Electronic and Gas Appliance Retailing",
    "index": "Appliance, electric, retailing"
  },
  {
    "code": "5921",
    "description": "Data Processing and Web Hosting Services",
    "index": "Application hosting"
  },
  {
    "code": "5921",
    "description": "Data Processing and Web Hosting Services",
    "index": "Application service provision"
  },
  {
    "code": "8101",
    "description": "Technical and Vocational Education and Training",
    "index": "Apprenticeship training program operation"
  },
  {
    "code": "6330",
    "description": "Superannuation Funds",
    "index": "Approved deposit fund (superannuation) operation"
  },
  {
    "code": "0135",
    "description": "Stonefruit Growing",
    "index": "Apricot growing"
  },
  {
    "code": "0529",
    "description": "Other Agriculture and Fishing Support Services",
    "index": "Aquaculture support service"
  },
  {
    "code": "8921",
    "description": "Zoological and Botanic Gardens Operation",
    "index": "Aquarium operation"
  },
  {
    "code": "7540",
    "description": "Justice",
    "index": "Arbitration court operation"
  },
  {
    "code": "8921",
    "description": "Zoological and Botanic Gardens Operation",
    "index": "Arboretum operation"
  },
  {
    "code": "2592",
    "description": "Toy, Sporting and Recreational Product Manufacturing",
    "index": "Archery equipment manufacturing"
  },
  {
    "code": "9551",
    "description": "Business and Professional Association Services",
    "index": "Architects' association operation"
  },
  {
    "code": "2223",
    "description": "Architectural Aluminium Product Manufacturing",
    "index": "Architectural aluminium product manufacturing"
  },
  {
    "code": "2229",
    "description": "Other Structural Metal Product Manufacturing",
    "index": "Architectural metal product manufacturing (except aluminium)"
  },
  {
    "code": "6921",
    "description": "Architectural Services",
    "index": "Architectural service"
  },
  {
    "code": "6010",
    "description": "Libraries and Archives",
    "index": "Archive operation"
  },
  {
    "code": "8023",
    "description": "Combined Primary and Secondary Education",
    "index": "Area school operation (combined primary/secondary school)"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing",
    "index": "Argon gas manufacturing"
  },
  {
    "code": "7600",
    "description": "Defence",
    "index": "Armed forces unit operation (except manufacturing or educational)"
  },
  {
    "code": "7712",
    "description": "Investigation and Security Services",
    "index": "Armoured car service"
  },
  {
    "code": "8539",
    "description": "Other Allied Health Services",
    "index": "Aromatherapy service"
  },
  {
    "code": "1709",
    "description": "Other Petroleum and Coal Product Manufacturing",
    "index": "Aromatic hydrocarbon manufacturing"
  },
  {
    "code": "7220",
    "description": "Travel Agency and Tour Arrangement Services",
    "index": "Arranging and assembling tours"
  },
  {
    "code": "6419",
    "description": "Other Auxiliary Finance and Investment Services",
    "index": "Arranging home loans for others (on a commission or fee basis)"
  },
  {
    "code": "0159",
    "description": "Other Crop Growing n.e.c.",
    "index": "Arrowroot growing"
  },
  {
    "code": "1161",
    "description": "Grain Mill Product Manufacturing",
    "index": "Arrowroot manufacturing"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing",
    "index": "Arsine gas manufacturing"
  },
  {
    "code": "8910",
    "description": "Museum Operation",
    "index": "Art gallery operation (except retail)"
  },
  {
    "code": "4279",
    "description": "Other Store-Based Retailing n.e.c.",
    "index": "Art gallery operation (retail)"
  },
  {
    "code": "8910",
    "description": "Museum Operation",
    "index": "Art museum operation (except retail)"
  },
  {
    "code": "5419",
    "description": "Other Publishing (except Software, Music and Internet)",
    "index": "Art print publishing (except internet)"
  },
  {
    "code": "9202",
    "description": "Lottery Operation",
    "index": "Art union operation"
  },
  {
    "code": "6639",
    "description": "Other Goods and Equipment Rental and Hiring n.e.c.",
    "index": "Art work rental"
  },
  {
    "code": "2412",
    "description": "Medical and Surgical Equipment Manufacturing",
    "index": "Artificial eye manufacturing"
  },
  {
    "code": "0529",
    "description": "Other Agriculture and Fishing Support Services",
    "index": "Artificial insemination service"
  },
  {
    "code": "2412",
    "description": "Medical and Surgical Equipment Manufacturing",
    "index": "Artificial joint manufacturing"
  },
  {
    "code": "2412",
    "description": "Medical and Surgical Equipment Manufacturing",
    "index": "Artificial limb manufacturing"
  },
  {
    "code": "6962",
    "description": "Management Advice and Other Consulting Services",
    "index": "Artist, entertainer or other public figures management service"
  },
  {
    "code": "9002",
    "description": "Creative Artists, Musicians, Writers and Performers",
    "index": "Artists"
  },
  {
    "code": "4272",
    "description": "Stationery Goods Retailing",
    "index": "Artists' supplies retailing"
  },
  {
    "code": "3739",
    "description": "Other Goods Wholesaling n.e.c.",
    "index": "Artists' supplies wholesaling"
  },
  {
    "code": "2922",
    "description": "Waste Remediation and Materials Recovery Services",
    "index": "Asbestos removal service"
  },
  {
    "code": "0123",
    "description": "Vegetable Growing (Outdoors)",
    "index": "Asparagus growing (outdoors)"
  },
  {
    "code": "1709",
    "description": "Other Petroleum and Coal Product Manufacturing",
    "index": "Asphalt and bituminous material manufacturing (except hot-mix bituminous paving)"
  },
  {
    "code": "3101",
    "description": "Road and Bridge Construction",
    "index": "Asphalt surfacing"
  },
  {
    "code": "9559",
    "description": "Other Interest Group Services n.e.c.",
    "index": "Association operation (for promotion of community or sectional interests)"
  },
  {
    "code": "9539",
    "description": "Other Personal Services n.e.c.",
    "index": "Astrology service"
  },
  {
    "code": "9113",
    "description": "Sports and Physical Recreation Venues, Grounds and Facilities Operation",
    "index": "Athletics field or stadium operation"
  },
  {
    "code": "5413",
    "description": "Book Publishing",
    "index": "Atlas publishing (except internet)"
  },
  {
    "code": "3800",
    "description": "Commission Based Wholesaling",
    "index": "Auction service (except real estate)"
  },
  {
    "code": "3800",
    "description": "Commission Based Wholesaling",
    "index": "Auctioning livestock"
  },
  {
    "code": "5921",
    "description": "Data Processing and Web Hosting Services",
    "index": "Audio and visual media streaming service"
  },
  {
    "code": "4242",
    "description": "Entertainment Media Retailing",
    "index": "Audio cassette retailing"
  },
  {
    "code": "5522",
    "description": "Music and Other Sound Recording Activities",
    "index": "Audio service (including for meetings and conferences)"
  },
  {
    "code": "1620",
    "description": "Reproduction of Recorded Media",
    "index": "Audio tape, pre-recorded, reproduction"
  },
  {
    "code": "8539",
    "description": "Other Allied Health Services",
    "index": "Audiology service"
  },
  {
    "code": "6932",
    "description": "Accounting Services",
    "index": "Auditing service"
  },
  {
    "code": "5521",
    "description": "Music Publishing",
    "index": "Authorising use of copyrighted musical composition"
  },
  {
    "code": "2034",
    "description": "Concrete Product Manufacturing",
    "index": "Autoclaved aerated concrete product manufacturing"
  },
  {
    "code": "9411",
    "description": "Automotive Electrical Services",
    "index": "Auto-electrical garage operation"
  },
  {
    "code": "5921",
    "description": "Data Processing and Web Hosting Services",
    "index": "Automated data processing service"
  },
  {
    "code": "9531",
    "description": "Laundry and Dry-Cleaning Services",
    "index": "Automatic laundry operation (coin-operated)"
  },
  {
    "code": "9559",
    "description": "Other Interest Group Services n.e.c.",
    "index": "Automobile association operation"
  },
  {
    "code": "9533",
    "description": "Parking Services",
    "index": "Automobile parking garage or lot operation"
  },
  {
    "code": "3921",
    "description": "Motor Vehicle Parts Retailing",
    "index": "Automotive air conditioning retailing"
  },
  {
    "code": "3504",
    "description": "Motor Vehicle New Part Wholesaling",
    "index": "Automotive air conditioning wholesaling"
  },
  {
    "code": "3921",
    "description": "Motor Vehicle Parts Retailing",
    "index": "Automotive battery retailing"
  },
  {
    "code": "3504",
    "description": "Motor Vehicle New Part Wholesaling",
    "index": "Automotive battery wholesaling"
  },
  {
    "code": "9412",
    "description": "Automotive Body, Paint and Interior Repair",
    "index": "Automotive body repair"
  },
  {
    "code": "4000",
    "description": "Fuel Retailing",
    "index": "Automotive CNG retailing"
  },
  {
    "code": "9419",
    "description": "Other Automotive Repair and Maintenance",
    "index": "Automotive conversion (including non-factory based engine reconditioning services and converting foreign cars from left to right-hand drive)"
  },
  {
    "code": "1701",
    "description": "Petroleum Refining and Petroleum Fuels Manufacturing",
    "index": "Automotive diesel manufacturing"
  },
  {
    "code": "2313",
    "description": "Automotive Electrical Components Manufacturing",
    "index": "Automotive electrical component manufacturing (except batteries)"
  },
  {
    "code": "2313",
    "description": "Automotive Electrical Components Manufacturing",
    "index": "Automotive electrical component, factory reconditioning"
  },
  {
    "code": "9411",
    "description": "Automotive Electrical Services",
    "index": "Automotive electrical product installation and/or repair"
  },
  {
    "code": "2010",
    "description": "Glass and Glass Product Manufacturing",
    "index": "Automotive glass manufacturing"
  },
  {
    "code": "9412",
    "description": "Automotive Body, Paint and Interior Repair",
    "index": "Automotive interior repair"
  },
  {
    "code": "2319",
    "description": "Other Motor Vehicle Parts Manufacturing",
    "index": "Automotive parts manufacturing n.e.c."
  },
  {
    "code": "1701",
    "description": "Petroleum Refining and Petroleum Fuels Manufacturing",
    "index": "Automotive petroleum refining"
  },
  {
    "code": "9419",
    "description": "Other Automotive Repair and Maintenance",
    "index": "Automotive repair garage operation"
  },
  {
    "code": "9412",
    "description": "Automotive Body, Paint and Interior Repair",
    "index": "Automotive reupholstery"
  },
  {
    "code": "9412",
    "description": "Automotive Body, Paint and Interior Repair",
    "index": "Automotive rustproofing and undercoating"
  },
  {
    "code": "9412",
    "description": "Automotive Body, Paint and Interior Repair",
    "index": "Automotive spray painting"
  },
  {
    "code": "9412",
    "description": "Automotive Body, Paint and Interior Repair",
    "index": "Automotive trimming"
  },
  {
    "code": "2313",
    "description": "Automotive Electrical Components Manufacturing",
    "index": "Automotive wire manufacturing"
  },
  {
    "code": "6419",
    "description": "Other Auxiliary Finance and Investment Services",
    "index": "Auxiliary finance service n.e.c."
  },
  {
    "code": "8921",
    "description": "Zoological and Botanic Gardens Operation",
    "index": "Aviary operation"
  },
  {
    "code": "1701",
    "description": "Petroleum Refining and Petroleum Fuels Manufacturing",
    "index": "Aviation fuel (Avgas) manufacturing"
  },
  {
    "code": "2394",
    "description": "Aircraft Manufacturing and Repair Services",
    "index": "Avionics equipment repairing n.e.c."
  },
  {
    "code": "0139",
    "description": "Other Fruit and Tree Nut Growing",
    "index": "Avocado growing"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Awning or blind, metal, manufacturing (including aluminium)"
  },
  {
    "code": "4211",
    "description": "Furniture Retailing",
    "index": "Awning retailing"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Awning wholesaling (except textile)"
  },
  {
    "code": "3239",
    "description": "Other Building Installation Services",
    "index": "Awning, blind or shutter installation"
  },
  {
    "code": "1919",
    "description": "Other Polymer Product Manufacturing",
    "index": "Awning, fibreglass, manufacturing"
  },
  {
    "code": "1333",
    "description": "Cut and Sewn Textile Product Manufacturing",
    "index": "Awning, textile, manufacturing"
  },
  {
    "code": "3711",
    "description": "Textile Product Wholesaling",
    "index": "Awning, textile, wholesaling"
  },
  {
    "code": "1140",
    "description": "Fruit and Vegetable Processing",
    "index": "Baby food, canned or bottled, manufacturing (except milk based)"
  },
  {
    "code": "9531",
    "description": "Laundry and Dry-Cleaning Services",
    "index": "Baby napkin hire service"
  },
  {
    "code": "9539",
    "description": "Other Personal Services n.e.c.",
    "index": "Baby sitting service (except in child care centres or preschools)"
  },
  {
    "code": "2399",
    "description": "Other Transport Equipment Manufacturing n.e.c.",
    "index": "Baby stroller manufacturing"
  },
  {
    "code": "2462",
    "description": "Mining and Construction Machinery Manufacturing",
    "index": "Back hoe manufacturing"
  },
  {
    "code": "1113",
    "description": "Cured Meat and Smallgoods Manufacturing",
    "index": "Bacon manufacturing"
  },
  {
    "code": "3602",
    "description": "Meat, Poultry and Smallgoods Wholesaling",
    "index": "Bacon wholesaling"
  },
  {
    "code": "2591",
    "description": "Jewellery and Silverware Manufacturing",
    "index": "Badge manufacturing n.e.c."
  },
  {
    "code": "1912",
    "description": "Rigid and Semi Rigid Polymer Product Manufacturing",
    "index": "Badge, plastic, manufacturing"
  },
  {
    "code": "1334",
    "description": "Textile Finishing and Other Textile Product Manufacturing",
    "index": "Badge, woven, manufacturing"
  },
  {
    "code": "1333",
    "description": "Cut and Sewn Textile Product Manufacturing",
    "index": "Bag or sack, textile or canvas, manufacturing (for packaging)"
  },
  {
    "code": "3711",
    "description": "Textile Product Wholesaling",
    "index": "Bag or sack, textile, wholesaling"
  },
  {
    "code": "1320",
    "description": "Leather Tanning and Fur Dressing",
    "index": "Bag, leather or leather substitute, manufacturing"
  },
  {
    "code": "1911",
    "description": "Polymer Film and Sheet Packaging Material Manufacturing",
    "index": "Bag, plastic, manufacturing"
  },
  {
    "code": "1911",
    "description": "Polymer Film and Sheet Packaging Material Manufacturing",
    "index": "Bag, sack or packet (plastic film or sheeting), manufacturing"
  },
  {
    "code": "1171",
    "description": "Bread Manufacturing (Factory-based)",
    "index": "Bagel manufacturing (factory based)"
  },
  {
    "code": "1140",
    "description": "Fruit and Vegetable Processing",
    "index": "Baked bean manufacturing"
  },
  {
    "code": "2469",
    "description": "Other Specialised Machinery and Equipment Manufacturing",
    "index": "Bakery machinery manufacturing"
  },
  {
    "code": "1162",
    "description": "Cereal, Pasta and Baking Mix Manufacturing",
    "index": "Baking mix, prepared, manufacturing"
  },
  {
    "code": "1161",
    "description": "Grain Mill Product Manufacturing",
    "index": "Baking powder manufacturing"
  },
  {
    "code": "2229",
    "description": "Other Structural Metal Product Manufacturing",
    "index": "Balcony, metal, manufacturing (except aluminium)"
  },
  {
    "code": "2599",
    "description": "Other Manufacturing n.e.c.",
    "index": "Ball point pen manufacturing"
  },
  {
    "code": "2229",
    "description": "Other Structural Metal Product Manufacturing",
    "index": "Balustrade, metal, manufacturing (except aluminium)"
  },
  {
    "code": "2519",
    "description": "Other Furniture Manufacturing",
    "index": "Bamboo furniture manufacturing"
  },
  {
    "code": "0159",
    "description": "Other Crop Growing n.e.c.",
    "index": "Bamboo growing"
  },
  {
    "code": "0139",
    "description": "Other Fruit and Tree Nut Growing",
    "index": "Banana growing"
  },
  {
    "code": "2110",
    "description": "Iron Smelting and Steel Manufacturing",
    "index": "Band, steel, manufacturing"
  },
  {
    "code": "9551",
    "description": "Business and Professional Association Services",
    "index": "Bankers' association operation"
  },
  {
    "code": "7540",
    "description": "Justice",
    "index": "Bankruptcy court operation"
  },
  {
    "code": "4520",
    "description": "Pubs, Taverns and Bars",
    "index": "Bar operation"
  },
  {
    "code": "2142",
    "description": "Aluminium Rolling, Drawing, Extruding",
    "index": "Bar, aluminium, manufacturing"
  },
  {
    "code": "2110",
    "description": "Iron Smelting and Steel Manufacturing",
    "index": "Bar, iron or steel, manufacturing"
  },
  {
    "code": "2149",
    "description": "Other Basic Non-Ferrous Metal Product Manufacturing",
    "index": "Bar, non-ferrous metal, (except aluminium) manufacturing"
  },
  {
    "code": "4221",
    "description": "Electrical, Electronic and Gas Appliance Retailing",
    "index": "Barbecue retailing"
  },
  {
    "code": "2441",
    "description": "Whiteware Appliance Manufacturing",
    "index": "Barbecue, solid fuel or gas, manufacturing"
  },
  {
    "code": "2291",
    "description": "Spring and Wire Product Manufacturing",
    "index": "Barbed wire manufacturing"
  },
  {
    "code": "9511",
    "description": "Hairdressing and Beauty Services",
    "index": "Barber shop operation"
  },
  {
    "code": "0990",
    "description": "Other Non-Metallic Mineral Mining and Quarrying",
    "index": "Barite mining"
  },
  {
    "code": "0149",
    "description": "Other Grain Growing",
    "index": "Barley growing"
  },
  {
    "code": "1161",
    "description": "Grain Mill Product Manufacturing",
    "index": "Barley malt manufacturing"
  },
  {
    "code": "1161",
    "description": "Grain Mill Product Manufacturing",
    "index": "Barley meal or flour manufacturing"
  },
  {
    "code": "1852",
    "description": "Cosmetic and Toiletry Preparation Manufacturing",
    "index": "Barrier cream manufacturing"
  },
  {
    "code": "6931",
    "description": "Legal Services",
    "index": "Barrister service"
  },
  {
    "code": "1829",
    "description": "Other Basic Polymer Manufacturing",
    "index": "Basic polymer manufacturing n.e.c."
  },
  {
    "code": "9112",
    "description": "Sport and Physical Recreation Clubs and Sports Professionals",
    "index": "Basketball club operation"
  },
  {
    "code": "9113",
    "description": "Sports and Physical Recreation Venues, Grounds and Facilities Operation",
    "index": "Basketball court or stadium operation"
  },
  {
    "code": "1920",
    "description": "Natural Rubber Product Manufacturing",
    "index": "Bath mat, natural rubber, manufacturing"
  },
  {
    "code": "3332",
    "description": "Plumbing Goods Wholesaling",
    "index": "Bath wholesaling"
  },
  {
    "code": "2029",
    "description": "Other Ceramic Product Manufacturing",
    "index": "Bathroom fixture, vitreous china, manufacturing"
  },
  {
    "code": "3332",
    "description": "Plumbing Goods Wholesaling",
    "index": "Bathroom or toilet fitting wholesaling"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Bathroom or toilet fittings, metal, manufacturing"
  },
  {
    "code": "7311",
    "description": "Buildings Cleaning Services",
    "index": "Bathroom/toilet cleaning"
  },
  {
    "code": "1912",
    "description": "Rigid and Semi Rigid Polymer Product Manufacturing",
    "index": "Bathtub, plastic, manufacturing"
  },
  {
    "code": "2439",
    "description": "Other Electrical Equipment Manufacturing",
    "index": "Battery manufacturing (including motor vehicles)"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Battery, dry cell, wholesaling"
  },
  {
    "code": "0802",
    "description": "Bauxite Mining",
    "index": "Bauxite mining"
  },
  {
    "code": "2131",
    "description": "Alumina Production",
    "index": "Bauxite refining"
  },
  {
    "code": "0414",
    "description": "Fish Trawling, Seining and Netting",
    "index": "Beach seining, fishing"
  },
  {
    "code": "2010",
    "description": "Glass and Glass Product Manufacturing",
    "index": "Bead, glass, manufacturing"
  },
  {
    "code": "0123",
    "description": "Vegetable Growing (Outdoors)",
    "index": "Bean growing (outdoors; except dry field beans or soybeans)"
  },
  {
    "code": "1140",
    "description": "Fruit and Vegetable Processing",
    "index": "Bean/legume, dried or canned, manufacturing"
  },
  {
    "code": "2499",
    "description": "Other Machinery and Equipment Manufacturing n.e.c.",
    "index": "Bearing manufacturing"
  },
  {
    "code": "3322",
    "description": "Metal and Mineral Wholesaling",
    "index": "Bearing metal wholesaling"
  },
  {
    "code": "3499",
    "description": "Other Machinery and Equipment Wholesaling n",
    "index": "Bearing wholesaling"
  },
  {
    "code": "9511",
    "description": "Hairdressing and Beauty Services",
    "index": "Beauty service"
  },
  {
    "code": "2513",
    "description": "Mattress Manufacturing",
    "index": "Bed base, upholstered, manufacturing"
  },
  {
    "code": "1333",
    "description": "Cut and Sewn Textile Product Manufacturing",
    "index": "Bed linen manufacturing"
  },
  {
    "code": "0111",
    "description": "Nursery Production (Under Cover)",
    "index": "Bedding plant growing (under cover)"
  },
  {
    "code": "2511",
    "description": "Wooden Furniture and Upholstered Seat Manufacturing",
    "index": "Bedroom suite, wooden, manufacturing"
  },
  {
    "code": "0144",
    "description": "Sheep-Beef Cattle Farming",
    "index": "Beef cattle and sheep farming"
  },
  {
    "code": "0142",
    "description": "Beef Cattle Farming (Specialised)",
    "index": "Beef cattle farming"
  },
  {
    "code": "0145",
    "description": "Grain-Sheep and Grain-Beef Cattle Farming",
    "index": "Beef cattle farming and grain growing"
  },
  {
    "code": "0143",
    "description": "Beef Cattle Feedlots (Specialised)",
    "index": "Beef cattle feedlot operation"
  },
  {
    "code": "0193",
    "description": "Beekeeping",
    "index": "Beekeeping"
  },
  {
    "code": "1212",
    "description": "Beer Manufacturing",
    "index": "Beer manufacturing (except non-alcoholic beer)"
  },
  {
    "code": "1899",
    "description": "Other Basic Chemical Product Manufacturing n.e.c.",
    "index": "Beeswax manufacturing"
  },
  {
    "code": "8710",
    "description": "Child Care Services",
    "index": "Before and/or after school care service"
  },
  {
    "code": "1351",
    "description": "Clothing Manufacturing",
    "index": "Belt manufacturing (for clothing)"
  },
  {
    "code": "0919",
    "description": "Other Construction Material Mining",
    "index": "Bentonite quarrying"
  },
  {
    "code": "1709",
    "description": "Other Petroleum and Coal Product Manufacturing",
    "index": "Benzene manufacturing"
  },
  {
    "code": "0133",
    "description": "Berry Fruit Growing",
    "index": "Berryfruit growing"
  },
  {
    "code": "0809",
    "description": "Other Metal Ore Mining",
    "index": "Beryllium ore mining"
  },
  {
    "code": "9209",
    "description": "Other Gambling Activities",
    "index": "Betting shop operation"
  },
  {
    "code": "2452",
    "description": "Fixed Space Heating, Cooling and Ventilation Equipment Manufacturing",
    "index": "Beverage dispensing equipment (cooling) manufacturing"
  },
  {
    "code": "1214",
    "description": "Wine and Other Alcoholic Beverage Manufacturing",
    "index": "Beverage n.e.c., alcoholic, manufacturing"
  },
  {
    "code": "9540",
    "description": "Religious Services",
    "index": "Bible society operation"
  },
  {
    "code": "2399",
    "description": "Other Transport Equipment Manufacturing n.e.c.",
    "index": "Bicycle manufacturing"
  },
  {
    "code": "3734",
    "description": "Toy and Sporting Goods Wholesaling",
    "index": "Bicycle parts wholesaling"
  },
  {
    "code": "6639",
    "description": "Other Goods and Equipment Rental and Hiring n.e.c.",
    "index": "Bicycle rental"
  },
  {
    "code": "9499",
    "description": "Other Repair and Maintenance n.e.c.",
    "index": "Bicycle repair"
  },
  {
    "code": "4241",
    "description": "Sport and Camping Equipment Retailing",
    "index": "Bicycle retailing"
  },
  {
    "code": "1913",
    "description": "Polymer Foam Product Manufacturing",
    "index": "Bicycle safety helmet manufacturing"
  },
  {
    "code": "3734",
    "description": "Toy and Sporting Goods Wholesaling",
    "index": "Bicycle wholesaling"
  },
  {
    "code": "7293",
    "description": "Credit Reporting and Debt Collection Services",
    "index": "Bill collection service"
  },
  {
    "code": "6229",
    "description": "Other Depository Financial Intermediation",
    "index": "Bill of exchange discounting or financing (except by banks)"
  },
  {
    "code": "9113",
    "description": "Sports and Physical Recreation Venues, Grounds and Facilities Operation",
    "index": "Billiard, snooker or pool hall operation"
  },
  {
    "code": "2592",
    "description": "Toy, Sporting and Recreational Product Manufacturing",
    "index": "Billiard, snooker or pool table and equipment manufacturing"
  },
  {
    "code": "7291",
    "description": "Office Administrative Services",
    "index": "Billing and record-keeping service"
  },
  {
    "code": "2911",
    "description": "Solid Waste Collection Services",
    "index": "Bin hiring and waste collection service"
  },
  {
    "code": "2239",
    "description": "Other Metal Container Manufacturing",
    "index": "Bin, metal, manufacturing"
  },
  {
    "code": "1334",
    "description": "Textile Finishing and Other Textile Product Manufacturing",
    "index": "Binding, textile, manufacturing"
  },
  {
    "code": "2411",
    "description": "Photographic, Optical and Ophthalmic Equipment Manufacturing",
    "index": "Binocular manufacturing"
  },
  {
    "code": "4279",
    "description": "Other Store-Based Retailing n.e.c.",
    "index": "Binocular retailing"
  },
  {
    "code": "3499",
    "description": "Other Machinery and Equipment Wholesaling n",
    "index": "Binocular wholesaling"
  },
  {
    "code": "6910",
    "description": "Scientific Research Services",
    "index": "Biological research service"
  },
  {
    "code": "2619",
    "description": "Other Electricity Generation",
    "index": "Biomass electricity generation n.e.c."
  },
  {
    "code": "1841",
    "description": "Human Pharmaceutical and Medicinal Product Manufacturing",
    "index": "Biotechnological manufacture of pharmaceutical and medicinal products"
  },
  {
    "code": "6910",
    "description": "Scientific Research Services",
    "index": "Biotechnology research service"
  },
  {
    "code": "0199",
    "description": "Other Livestock Farming n.e.c.",
    "index": "Bird breeding (except poultry or game birds)"
  },
  {
    "code": "1192",
    "description": "Prepared Animal and Bird Feed Manufacturing",
    "index": "Bird feed manufacturing"
  },
  {
    "code": "8922",
    "description": "Nature Reserves and Conservation Parks Operation",
    "index": "Bird reserve operation"
  },
  {
    "code": "0420",
    "description": "Hunting and Trapping",
    "index": "Bird trapping"
  },
  {
    "code": "1173",
    "description": "Biscuit Manufacturing (Factory-based)",
    "index": "Biscuit dough manufacturing (factory based)"
  },
  {
    "code": "1173",
    "description": "Biscuit Manufacturing (Factory-based)",
    "index": "Biscuit manufacturing (except pet food biscuits; factory based)"
  },
  {
    "code": "4129",
    "description": "Other Specialised Food Retailing",
    "index": "Biscuit retailing (not manufactured on the same premises)"
  },
  {
    "code": "3609",
    "description": "Other Grocery Wholesaling",
    "index": "Biscuit wholesaling"
  },
  {
    "code": "0809",
    "description": "Other Metal Ore Mining",
    "index": "Bismuth ore mining"
  },
  {
    "code": "2139",
    "description": "Other Basic Non-Ferrous Metal Manufacturing",
    "index": "Bismuth smelting or refining"
  },
  {
    "code": "3321",
    "description": "Petroleum Product Wholesaling",
    "index": "Bitumen wholesaling"
  },
  {
    "code": "1709",
    "description": "Other Petroleum and Coal Product Manufacturing",
    "index": "Bituminous adhesive or mastic manufacturing"
  },
  {
    "code": "0600",
    "description": "Coal Mining",
    "index": "Black coal mining"
  },
  {
    "code": "0133",
    "description": "Berry Fruit Growing",
    "index": "Blackberry growing"
  },
  {
    "code": "0133",
    "description": "Berry Fruit Growing",
    "index": "Blackcurrant growing"
  },
  {
    "code": "9429",
    "description": "Other Machinery and Equipment Repair and Maintenance",
    "index": "Blade sharpening"
  },
  {
    "code": "3499",
    "description": "Other Machinery and Equipment Wholesaling n",
    "index": "Blank cassette wholesaling"
  },
  {
    "code": "3492",
    "description": "Computer and Computer Peripherals Wholesaling",
    "index": "Blank compact disc (CD) wholesaling"
  },
  {
    "code": "2429",
    "description": "Other Electronic Equipment Manufacturing",
    "index": "Blank computer disc manufacturing"
  },
  {
    "code": "3492",
    "description": "Computer and Computer Peripherals Wholesaling",
    "index": "Blank computer disc wholesaling"
  },
  {
    "code": "3492",
    "description": "Computer and Computer Peripherals Wholesaling",
    "index": "Blank digital versatile disc (DVD) wholesaling"
  },
  {
    "code": "2429",
    "description": "Other Electronic Equipment Manufacturing",
    "index": "Blank video cassette manufacturing"
  },
  {
    "code": "2110",
    "description": "Iron Smelting and Steel Manufacturing",
    "index": "Blank, steel, manufacturing"
  },
  {
    "code": "4214",
    "description": "Manchester and Other Textile Goods Retailing",
    "index": "Blanket retailing"
  },
  {
    "code": "3711",
    "description": "Textile Product Wholesaling",
    "index": "Blanket wholesaling"
  },
  {
    "code": "2449",
    "description": "Other Domestic Appliance Manufacturing",
    "index": "Blanket, electric, manufacturing"
  },
  {
    "code": "1892",
    "description": "Explosives Manufacturing",
    "index": "Blasting powder manufacturing"
  },
  {
    "code": "1320",
    "description": "Leather Tanning and Fur Dressing",
    "index": "Bleaching and currying fur"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Bleaching compound wholesaling"
  },
  {
    "code": "1709",
    "description": "Other Petroleum and Coal Product Manufacturing",
    "index": "Blending of tar, asphalt and/or bitumen material"
  },
  {
    "code": "1701",
    "description": "Petroleum Refining and Petroleum Fuels Manufacturing",
    "index": "Blending petroleum fuel with ethanol"
  },
  {
    "code": "4211",
    "description": "Furniture Retailing",
    "index": "Blind retailing"
  },
  {
    "code": "3731",
    "description": "Furniture and Floor Coverings Wholesaling",
    "index": "Blind wholesaling (except textile)"
  },
  {
    "code": "1333",
    "description": "Cut and Sewn Textile Product Manufacturing",
    "index": "Blind, textile, manufacturing (including plastic coated)"
  },
  {
    "code": "3711",
    "description": "Textile Product Wholesaling",
    "index": "Blind, textile, wholesaling"
  },
  {
    "code": "2133",
    "description": "Copper, Silver, Lead, and Zinc Smelting and Refining",
    "index": "Blister copper manufacturing"
  },
  {
    "code": "2034",
    "description": "Concrete Product Manufacturing",
    "index": "Block, concrete, manufacturing"
  },
  {
    "code": "2010",
    "description": "Glass and Glass Product Manufacturing",
    "index": "Block, glass, manufacturing"
  },
  {
    "code": "8599",
    "description": "Other Health Care Services n.e.c.",
    "index": "Blood bank operation"
  },
  {
    "code": "1841",
    "description": "Human Pharmaceutical and Medicinal Product Manufacturing",
    "index": "Blood serum manufacturing"
  },
  {
    "code": "6620",
    "description": "Farm Animals and Bloodstock Leasing",
    "index": "Bloodstock leasing"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Blow torch manufacturing"
  },
  {
    "code": "0919",
    "description": "Other Construction Material Mining",
    "index": "Blue metal stone quarrying"
  },
  {
    "code": "0133",
    "description": "Berry Fruit Growing",
    "index": "Blueberry growing"
  },
  {
    "code": "8023",
    "description": "Combined Primary and Secondary Education",
    "index": "Boarding school operation (combined primary/secondary school)"
  },
  {
    "code": "8021",
    "description": "Primary Education",
    "index": "Boarding school operation (primary school; except combined primary/secondary)"
  },
  {
    "code": "8022",
    "description": "Secondary Education",
    "index": "Boarding school operation (secondary school education; except combined primary/secondary school)"
  },
  {
    "code": "4820",
    "description": "Water Passenger Transport",
    "index": "Boat charter, lease or rental, with crew for passenger transport"
  },
  {
    "code": "6923",
    "description": "Engineering Design and Engineering Consulting Services",
    "index": "Boat designing service"
  },
  {
    "code": "6619",
    "description": "Other Motor Vehicle and Transport Equipment Rental and Hiring",
    "index": "Boat hiring (without crew)"
  },
  {
    "code": "2392",
    "description": "Boatbuilding and Repair Services",
    "index": "Boat repairing"
  },
  {
    "code": "4245",
    "description": "Marine Equipment Retailing",
    "index": "Boat retailing (including used)"
  },
  {
    "code": "2312",
    "description": "Motor Vehicle Body and Trailer Manufacturing",
    "index": "Boat trailer manufacturing"
  },
  {
    "code": "4245",
    "description": "Marine Equipment Retailing",
    "index": "Boat trailer retailing"
  },
  {
    "code": "3499",
    "description": "Other Machinery and Equipment Wholesaling n",
    "index": "Boat wholesaling"
  },
  {
    "code": "2392",
    "description": "Boatbuilding and Repair Services",
    "index": "Boatbuilding"
  },
  {
    "code": "7712",
    "description": "Investigation and Security Services",
    "index": "Body guard service"
  },
  {
    "code": "2231",
    "description": "Boiler, Tank and Other Heavy Gauge Metal Container Manufacturing",
    "index": "Boiler, metal, manufacturing"
  },
  {
    "code": "5309",
    "description": "Other Warehousing and Storage Services",
    "index": "Bond store operation"
  },
  {
    "code": "1831",
    "description": "Fertiliser Manufacturing",
    "index": "Bonedust manufacturing"
  },
  {
    "code": "1831",
    "description": "Fertiliser Manufacturing",
    "index": "Bonemeal fertiliser manufacturing"
  },
  {
    "code": "5413",
    "description": "Book Publishing",
    "index": "Book publishing (except internet)"
  },
  {
    "code": "1612",
    "description": "Printing Support Services",
    "index": "Book repair service"
  },
  {
    "code": "4244",
    "description": "Newspaper and Book Retailing",
    "index": "Book retailing"
  },
  {
    "code": "3735",
    "description": "Book and Magazine Wholesaling",
    "index": "Book wholesaling"
  },
  {
    "code": "1612",
    "description": "Printing Support Services",
    "index": "Bookbinding service"
  },
  {
    "code": "7220",
    "description": "Travel Agency and Tour Arrangement Services",
    "index": "Booking service (accommodation)"
  },
  {
    "code": "7220",
    "description": "Travel Agency and Tour Arrangement Services",
    "index": "Booking service (travel)"
  },
  {
    "code": "6932",
    "description": "Accounting Services",
    "index": "Bookkeeping service"
  },
  {
    "code": "9209",
    "description": "Other Gambling Activities",
    "index": "Bookmaker operation"
  },
  {
    "code": "1352",
    "description": "Footwear Manufacturing",
    "index": "Boot manufacturing"
  },
  {
    "code": "4252",
    "description": "Footwear Retailing",
    "index": "Boot retailing"
  },
  {
    "code": "2293",
    "description": "Metal Coating and Finishing",
    "index": "Boron nitride coating of machine tool parts"
  },
  {
    "code": "8921",
    "description": "Zoological and Botanic Gardens Operation",
    "index": "Botanical garden operation"
  },
  {
    "code": "2240",
    "description": "Other Sheet Metal Product Manufacturing",
    "index": "Bottle closure, metal, manufacturing"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Bottle or can opener manufacturing (except power operated)"
  },
  {
    "code": "2010",
    "description": "Glass and Glass Product Manufacturing",
    "index": "Bottle, glass, manufacturing"
  },
  {
    "code": "1912",
    "description": "Rigid and Semi Rigid Polymer Product Manufacturing",
    "index": "Bottle, plastic, manufacturing"
  },
  {
    "code": "4279",
    "description": "Other Store-Based Retailing n.e.c.",
    "index": "Bottled liquefied petroleum gas (LPG) retailing"
  },
  {
    "code": "3609",
    "description": "Other Grocery Wholesaling",
    "index": "Bottled water wholesaling"
  },
  {
    "code": "7320",
    "description": "Packaging Services",
    "index": "Bottling drinking liquid"
  },
  {
    "code": "2469",
    "description": "Other Specialised Machinery and Equipment Manufacturing",
    "index": "Bottling machine, food or drink, manufacturing"
  },
  {
    "code": "7320",
    "description": "Packaging Services",
    "index": "Bottling or rebottling wine or spirits"
  },
  {
    "code": "7320",
    "description": "Packaging Services",
    "index": "Bottling other liquid"
  },
  {
    "code": "0414",
    "description": "Fish Trawling, Seining and Netting",
    "index": "Bottom gill netting, fishing"
  },
  {
    "code": "0413",
    "description": "Line Fishing",
    "index": "Bottom long line fishing"
  },
  {
    "code": "9113",
    "description": "Sports and Physical Recreation Venues, Grounds and Facilities Operation",
    "index": "Bowling alley, tenpin, operation"
  },
  {
    "code": "9113",
    "description": "Sports and Physical Recreation Venues, Grounds and Facilities Operation",
    "index": "Bowling green operation"
  },
  {
    "code": "2034",
    "description": "Concrete Product Manufacturing",
    "index": "Box culvert, concrete, manufacturing"
  },
  {
    "code": "3913",
    "description": "Trailer and Other Motor Vehicle Retailing",
    "index": "Box trailer retailing"
  },
  {
    "code": "3503",
    "description": "Trailer and Other Motor Vehicle Wholesaling",
    "index": "Box trailer wholesaling"
  },
  {
    "code": "9113",
    "description": "Sports and Physical Recreation Venues, Grounds and Facilities Operation",
    "index": "Boxing stadium operation"
  },
  {
    "code": "0133",
    "description": "Berry Fruit Growing",
    "index": "Boysenberry growing"
  },
  {
    "code": "2291",
    "description": "Spring and Wire Product Manufacturing",
    "index": "Braided ferrous wire, cable or strip, manufacturing"
  },
  {
    "code": "1709",
    "description": "Other Petroleum and Coal Product Manufacturing",
    "index": "Brake fluid manufacturing"
  },
  {
    "code": "9419",
    "description": "Other Automotive Repair and Maintenance",
    "index": "Brake repair"
  },
  {
    "code": "6640",
    "description": "Non-Financial Intangible Assets (except Copyrights) Leasing",
    "index": "Brand-name leasing"
  },
  {
    "code": "1213",
    "description": "Spirit Manufacturing",
    "index": "Brandy manufacturing"
  },
  {
    "code": "2293",
    "description": "Metal Coating and Finishing",
    "index": "Brass finishing or plating"
  },
  {
    "code": "0139",
    "description": "Other Fruit and Tree Nut Growing",
    "index": "Brazil nut growing"
  },
  {
    "code": "1171",
    "description": "Bread Manufacturing (Factory-based)",
    "index": "Bread bakery operation (factory based)"
  },
  {
    "code": "1171",
    "description": "Bread Manufacturing (Factory-based)",
    "index": "Bread dough, frozen, manufacturing (factory based)"
  },
  {
    "code": "1162",
    "description": "Cereal, Pasta and Baking Mix Manufacturing",
    "index": "Bread mix, dry, manufacturing"
  },
  {
    "code": "4129",
    "description": "Other Specialised Food Retailing",
    "index": "Bread retailing (not manufactured on the same premises)"
  },
  {
    "code": "1171",
    "description": "Bread Manufacturing (Factory-based)",
    "index": "Bread roll manufacturing (factory based)"
  },
  {
    "code": "4129",
    "description": "Other Specialised Food Retailing",
    "index": "Bread vendor (not manufactured on the same premises)"
  },
  {
    "code": "1171",
    "description": "Bread Manufacturing (Factory-based)",
    "index": "Bread, leavened or unleavened, manufacturing (factory based)"
  },
  {
    "code": "1171",
    "description": "Bread Manufacturing (Factory-based)",
    "index": "Breadcrumb manufacturing (factory based)"
  },
  {
    "code": "3109",
    "description": "Other Heavy and Civil Engineering Construction",
    "index": "Breakwater construction"
  },
  {
    "code": "3291",
    "description": "Landscape Construction Services",
    "index": "Brick paving"
  },
  {
    "code": "0919",
    "description": "Other Construction Material Mining",
    "index": "Brick shale quarrying"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Brick wholesaling"
  },
  {
    "code": "2021",
    "description": "Clay Brick Manufacturing",
    "index": "Brick, clay, manufacturing (excluding refractory bricks)"
  },
  {
    "code": "2034",
    "description": "Concrete Product Manufacturing",
    "index": "Brick, concrete, manufacturing"
  },
  {
    "code": "2021",
    "description": "Clay Brick Manufacturing",
    "index": "Brick, face or texture, manufacturing"
  },
  {
    "code": "2029",
    "description": "Other Ceramic Product Manufacturing",
    "index": "Brick, fireclay, manufacturing"
  },
  {
    "code": "2029",
    "description": "Other Ceramic Product Manufacturing",
    "index": "Brick, refractory, manufacturing"
  },
  {
    "code": "2090",
    "description": "Other Non-Metallic Mineral Product Manufacturing",
    "index": "Brick, silica lime, manufacturing"
  },
  {
    "code": "3222",
    "description": "Bricklaying Services",
    "index": "Bricklaying"
  },
  {
    "code": "3101",
    "description": "Road and Bridge Construction",
    "index": "Bridge construction (including construction from prefabricated components)"
  },
  {
    "code": "4259",
    "description": "Other Personal Accessories Retailing",
    "index": "Briefcase retailing"
  },
  {
    "code": "4279",
    "description": "Other Store-Based Retailing n.e.c.",
    "index": "Briquette retailing"
  },
  {
    "code": "3322",
    "description": "Metal and Mineral Wholesaling",
    "index": "Briquette wholesaling"
  },
  {
    "code": "6720",
    "description": "Real Estate Services",
    "index": "Broking service (real estate)"
  },
  {
    "code": "2139",
    "description": "Other Basic Non-Ferrous Metal Manufacturing",
    "index": "Bronze manufacturing"
  },
  {
    "code": "2599",
    "description": "Other Manufacturing n.e.c.",
    "index": "Broom manufacturing"
  },
  {
    "code": "9534",
    "description": "Brothel Keeping and Prostitution Services",
    "index": "Brothel operation"
  },
  {
    "code": "0600",
    "description": "Coal Mining",
    "index": "Brown coal mining"
  },
  {
    "code": "1181",
    "description": "Sugar Manufacturing",
    "index": "Brown sugar manufacturing"
  },
  {
    "code": "2599",
    "description": "Other Manufacturing n.e.c.",
    "index": "Brush manufacturing"
  },
  {
    "code": "2439",
    "description": "Other Electrical Equipment Manufacturing",
    "index": "Brush, carbon, manufacturing"
  },
  {
    "code": "9429",
    "description": "Other Machinery and Equipment Repair and Maintenance",
    "index": "Brushcutter repair and maintenance"
  },
  {
    "code": "4213",
    "description": "Houseware Retailing",
    "index": "Brushware retailing"
  },
  {
    "code": "3733",
    "description": "Kitchen and Dining Ware Wholesaling",
    "index": "Brushware wholesaling"
  },
  {
    "code": "1911",
    "description": "Polymer Film and Sheet Packaging Material Manufacturing",
    "index": "Bubble packaging manufacturing"
  },
  {
    "code": "1912",
    "description": "Rigid and Semi Rigid Polymer Product Manufacturing",
    "index": "Bucket, plastic, manufacturing"
  },
  {
    "code": "0420",
    "description": "Hunting and Trapping",
    "index": "Buffalo hunting"
  },
  {
    "code": "0142",
    "description": "Beef Cattle Farming (Specialised)",
    "index": "Buffalo, domesticated, grazing"
  },
  {
    "code": "9551",
    "description": "Business and Professional Association Services",
    "index": "Builders' association operation"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Builders' hardware dealing (wholesaling) n.e.c."
  },
  {
    "code": "2034",
    "description": "Concrete Product Manufacturing",
    "index": "Building board, cement based, manufacturing"
  },
  {
    "code": "2090",
    "description": "Other Non-Metallic Mineral Product Manufacturing",
    "index": "Building board, imitation brick or stone, manufacturing"
  },
  {
    "code": "6923",
    "description": "Engineering Design and Engineering Consulting Services",
    "index": "Building consulting service"
  },
  {
    "code": "7311",
    "description": "Buildings Cleaning Services",
    "index": "Building exterior cleaning (except sand blasting or steam cleaning)"
  },
  {
    "code": "6923",
    "description": "Engineering Design and Engineering Consulting Services",
    "index": "Building inspection service"
  },
  {
    "code": "7311",
    "description": "Buildings Cleaning Services",
    "index": "Building interior cleaning"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Building material dealing (wholesaling) n.e.c."
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Building paper and paper board wholesaling"
  },
  {
    "code": "6222",
    "description": "Building Society Operation",
    "index": "Building society operation"
  },
  {
    "code": "0919",
    "description": "Other Construction Material Mining",
    "index": "Building stone quarrying"
  },
  {
    "code": "1413",
    "description": "Timber Resawing and Dressing",
    "index": "Building timber manufacturing"
  },
  {
    "code": "2222",
    "description": "Prefabricated Metal Building Manufacturing",
    "index": "Building, prefabricated metal, manufacturing"
  },
  {
    "code": "1491",
    "description": "Prefabricated Wooden Building Manufacturing",
    "index": "Building, prefabricated wood, manufacturing"
  },
  {
    "code": "2432",
    "description": "Electric Lighting Equipment Manufacturing",
    "index": "Bulb or tube, electric light, manufacturing"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Bulb or tube, electric light, wholesaling"
  },
  {
    "code": "0112",
    "description": "Nursery Production (Outdoors)",
    "index": "Bulb propagating (outdoors)"
  },
  {
    "code": "0111",
    "description": "Nursery Production (Under Cover)",
    "index": "Bulb propagating (under cover)"
  },
  {
    "code": "4232",
    "description": "Garden Supplies Retailing",
    "index": "Bulb, flower, retailing"
  },
  {
    "code": "5309",
    "description": "Other Warehousing and Storage Services",
    "index": "Bulk petroleum storage service"
  },
  {
    "code": "9139",
    "description": "Amusement and Other Recreation Activities n.e.c.",
    "index": "Bungy jumping operation"
  },
  {
    "code": "7712",
    "description": "Investigation and Security Services",
    "index": "Burglary protection service"
  },
  {
    "code": "2031",
    "description": "Cement and Lime Manufacturing",
    "index": "Burnt lime manufacturing"
  },
  {
    "code": "6619",
    "description": "Other Motor Vehicle and Transport Equipment Rental and Hiring",
    "index": "Bus (except minibus) rental (without driver)"
  },
  {
    "code": "2311",
    "description": "Motor Vehicle Manufacturing",
    "index": "Bus manufacturing"
  },
  {
    "code": "2222",
    "description": "Prefabricated Metal Building Manufacturing",
    "index": "Bus shelter, prefabricated metal, manufacturing"
  },
  {
    "code": "1491",
    "description": "Prefabricated Wooden Building Manufacturing",
    "index": "Bus shelter, prefabricated wood, manufacturing"
  },
  {
    "code": "4621",
    "description": "Interurban and Rural Bus Transport",
    "index": "Bus transport service, outside metropolitan area"
  },
  {
    "code": "2312",
    "description": "Motor Vehicle Body and Trailer Manufacturing",
    "index": "Bus vehicle body assembly on supplied motor and chassis"
  },
  {
    "code": "3502",
    "description": "Commercial Vehicle Wholesaling",
    "index": "Bus, wholesaling"
  },
  {
    "code": "9139",
    "description": "Amusement and Other Recreation Activities n.e.c.",
    "index": "Bush walking operation"
  },
  {
    "code": "7291",
    "description": "Office Administrative Services",
    "index": "Business administrative service"
  },
  {
    "code": "8101",
    "description": "Technical and Vocational Education and Training",
    "index": "Business college and school operation"
  },
  {
    "code": "5414",
    "description": "Directory and Mailing List Publishing",
    "index": "Business directory publishing (except internet)"
  },
  {
    "code": "6962",
    "description": "Management Advice and Other Consulting Services",
    "index": "Business management service"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing",
    "index": "Butane gas manufacturing"
  },
  {
    "code": "4121",
    "description": "Fresh Meat, Fish and Poultry Retailing",
    "index": "Butcher's shop operation (retail)"
  },
  {
    "code": "1133",
    "description": "Cheese and Other Dairy Product Manufacturing",
    "index": "Butter manufacturing"
  },
  {
    "code": "3603",
    "description": "Dairy Produce Wholesaling",
    "index": "Butter wholesaling"
  },
  {
    "code": "1133",
    "description": "Cheese and Other Dairy Product Manufacturing",
    "index": "Buttermilk manufacturing"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Button, metal, manufacturing"
  },
  {
    "code": "2512",
    "description": "Metal Furniture Manufacturing",
    "index": "Cabinet, metal, manufacturing"
  },
  {
    "code": "2512",
    "description": "Metal Furniture Manufacturing",
    "index": "Cabinet, radio, radiogram or television, manufacturing (metal framed)"
  },
  {
    "code": "5622",
    "description": "Cable and Other Subscription Programming",
    "index": "Cable broadcasting network operation"
  },
  {
    "code": "5622",
    "description": "Cable and Other Subscription Programming",
    "index": "Cable broadcasting station operation"
  },
  {
    "code": "2393",
    "description": "Railway Rolling Stock Manufacturing and Repair Services",
    "index": "Cable car manufacturing"
  },
  {
    "code": "3109",
    "description": "Other Heavy and Civil Engineering Construction",
    "index": "Cable laying"
  },
  {
    "code": "1332",
    "description": "Rope, Cordage and Twine Manufacturing",
    "index": "Cable manufacturing (from natural or synthetic fibres)"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Cable or wire, electric, wholesaling"
  },
  {
    "code": "2422",
    "description": "Communications Equipment Manufacturing",
    "index": "Cable television equipment manufacturing"
  },
  {
    "code": "6922",
    "description": "Surveying and Mapping Services",
    "index": "Cadastral surveying service"
  },
  {
    "code": "2293",
    "description": "Metal Coating and Finishing",
    "index": "Cadmium plating"
  },
  {
    "code": "4511",
    "description": "Cafes and Restaurants",
    "index": "Cafe operation"
  },
  {
    "code": "1172",
    "description": "Cake and Pastry Manufacturing (Factory-based)",
    "index": "Cake icing or decorating (factory based)"
  },
  {
    "code": "1162",
    "description": "Cereal, Pasta and Baking Mix Manufacturing",
    "index": "Cake mix manufacturing"
  },
  {
    "code": "1172",
    "description": "Cake and Pastry Manufacturing (Factory-based)",
    "index": "Cake or pastry manufacturing (factory based)"
  },
  {
    "code": "1172",
    "description": "Cake and Pastry Manufacturing (Factory-based)",
    "index": "Cake or pastry, frozen, manufacturing (factory based)"
  },
  {
    "code": "1172",
    "description": "Cake and Pastry Manufacturing (Factory-based)",
    "index": "Cake or pastry-based pudding and dessert manufacturing (factory based)"
  },
  {
    "code": "1172",
    "description": "Cake and Pastry Manufacturing (Factory-based)",
    "index": "Cake or pastry-based slice manufacturing (factory based)"
  },
  {
    "code": "4129",
    "description": "Other Specialised Food Retailing",
    "index": "Cake retailing (not manufactured on the same premises)"
  },
  {
    "code": "2131",
    "description": "Alumina Production",
    "index": "Calcined alumina manufacturing"
  },
  {
    "code": "1813",
    "description": "Basic Inorganic Chemical Manufacturing",
    "index": "Calcium chloride (lime) manufacturing"
  },
  {
    "code": "1831",
    "description": "Fertiliser Manufacturing",
    "index": "Calcium sulphate manufacturing"
  },
  {
    "code": "2421",
    "description": "Computer and Electronic Office Equipment Manufacturing",
    "index": "Calculator manufacturing"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Calculator wholesaling"
  },
  {
    "code": "5419",
    "description": "Other Publishing (except Software, Music and Internet)",
    "index": "Calendar publishing (except internet)"
  },
  {
    "code": "0115",
    "description": "Floriculture Production (Outdoors)",
    "index": "Calla lily growing (outdoor)"
  },
  {
    "code": "2411",
    "description": "Photographic, Optical and Ophthalmic Equipment Manufacturing",
    "index": "Camera manufacturing"
  },
  {
    "code": "4221",
    "description": "Electrical, Electronic and Gas Appliance Retailing",
    "index": "Camera retailing"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Camera wholesaling"
  },
  {
    "code": "2312",
    "description": "Motor Vehicle Body and Trailer Manufacturing",
    "index": "Campervan manufacturing"
  },
  {
    "code": "6639",
    "description": "Other Goods and Equipment Rental and Hiring n.e.c.",
    "index": "Camping equipment rental"
  },
  {
    "code": "4241",
    "description": "Sport and Camping Equipment Retailing",
    "index": "Camping equipment retailing"
  },
  {
    "code": "4400",
    "description": "Accommodation",
    "index": "Camping ground operation"
  },
  {
    "code": "2139",
    "description": "Other Basic Non-Ferrous Metal Manufacturing",
    "index": "Can de-tinning"
  },
  {
    "code": "2469",
    "description": "Other Specialised Machinery and Equipment Manufacturing",
    "index": "Can making or sealing machinery manufacturing (food or drink processing)"
  },
  {
    "code": "2239",
    "description": "Other Metal Container Manufacturing",
    "index": "Can, metal, manufacturing"
  },
  {
    "code": "3739",
    "description": "Other Goods Wholesaling n.e.c.",
    "index": "Can, metal, wholesaling"
  },
  {
    "code": "3109",
    "description": "Other Heavy and Civil Engineering Construction",
    "index": "Canal construction"
  },
  {
    "code": "1851",
    "description": "Cleaning Compound Manufacturing",
    "index": "Candle manufacturing"
  },
  {
    "code": "2519",
    "description": "Other Furniture Manufacturing",
    "index": "Cane furniture manufacturing"
  },
  {
    "code": "1181",
    "description": "Sugar Manufacturing",
    "index": "Cane syrup manufacturing"
  },
  {
    "code": "3609",
    "description": "Other Grocery Wholesaling",
    "index": "Canned food wholesaling"
  },
  {
    "code": "2469",
    "description": "Other Specialised Machinery and Equipment Manufacturing",
    "index": "Canning machinery, food or drink, manufacturing"
  },
  {
    "code": "2392",
    "description": "Boatbuilding and Repair Services",
    "index": "Canoe manufacturing"
  },
  {
    "code": "4241",
    "description": "Sport and Camping Equipment Retailing",
    "index": "Canoe retailing"
  },
  {
    "code": "1333",
    "description": "Cut and Sewn Textile Product Manufacturing",
    "index": "Canvas goods manufacturing n.e.c."
  },
  {
    "code": "3711",
    "description": "Textile Product Wholesaling",
    "index": "Canvas goods wholesaling n.e.c."
  },
  {
    "code": "0122",
    "description": "Vegetable Growing (Under Cover)",
    "index": "Capsicum growing (under cover)"
  },
  {
    "code": "2491",
    "description": "Lifting and Material Handling Equipment Manufacturing",
    "index": "Capstan manufacturing (except for lathes)"
  },
  {
    "code": "2319",
    "description": "Other Motor Vehicle Parts Manufacturing",
    "index": "Car accessory manufacturing"
  },
  {
    "code": "9412",
    "description": "Automotive Body, Paint and Interior Repair",
    "index": "Car detailing"
  },
  {
    "code": "2313",
    "description": "Automotive Electrical Components Manufacturing",
    "index": "Car horn, electric, manufacturing"
  },
  {
    "code": "9533",
    "description": "Parking Services",
    "index": "Car park operation"
  },
  {
    "code": "9411",
    "description": "Automotive Electrical Services",
    "index": "Car radio or CD-player installation and repair"
  },
  {
    "code": "3921",
    "description": "Motor Vehicle Parts Retailing",
    "index": "Car radio or CD-player retailing"
  },
  {
    "code": "3504",
    "description": "Motor Vehicle New Part Wholesaling",
    "index": "Car radio or CD-player wholesaling"
  },
  {
    "code": "6611",
    "description": "Passenger Car Rental and Hiring",
    "index": "Car rental (without driver)"
  },
  {
    "code": "9412",
    "description": "Automotive Body, Paint and Interior Repair",
    "index": "Car wash or cleaning operation"
  },
  {
    "code": "2312",
    "description": "Motor Vehicle Body and Trailer Manufacturing",
    "index": "Caravan manufacturing"
  },
  {
    "code": "4400",
    "description": "Accommodation",
    "index": "Caravan park operation (visitor)"
  },
  {
    "code": "6711",
    "description": "Residential Property Operators",
    "index": "Caravan park, residential (other than holiday), operation"
  },
  {
    "code": "6619",
    "description": "Other Motor Vehicle and Transport Equipment Rental and Hiring",
    "index": "Caravan rental"
  },
  {
    "code": "3913",
    "description": "Trailer and Other Motor Vehicle Retailing",
    "index": "Caravan retailing"
  },
  {
    "code": "3503",
    "description": "Trailer and Other Motor Vehicle Wholesaling",
    "index": "Caravan wholesaling"
  },
  {
    "code": "1812",
    "description": "Basic Organic Chemical Manufacturing",
    "index": "Carbon black manufacturing"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing",
    "index": "Carbon dioxide manufacturing"
  },
  {
    "code": "1829",
    "description": "Other Basic Polymer Manufacturing",
    "index": "Carbon fibre manufacturing (including kevlar material manufacturing)"
  },
  {
    "code": "1916",
    "description": "Paint and Coatings Manufacturing",
    "index": "Carbon ink manufacturing"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing",
    "index": "Carbon monoxide manufacturing"
  },
  {
    "code": "2090",
    "description": "Other Non-Metallic Mineral Product Manufacturing",
    "index": "Carbon product manufacturing (except brushes, electrodes or bearings)"
  },
  {
    "code": "1709",
    "description": "Other Petroleum and Coal Product Manufacturing",
    "index": "Carbon tetrachloride manufacturing"
  },
  {
    "code": "1211",
    "description": "Soft Drink, Cordial and Syrup Manufacturing",
    "index": "Carbonated water or cordial manufacturing"
  },
  {
    "code": "1214",
    "description": "Wine and Other Alcoholic Beverage Manufacturing",
    "index": "Carbonated wine manufacturing"
  },
  {
    "code": "2469",
    "description": "Other Specialised Machinery and Equipment Manufacturing",
    "index": "Carnival or fairground equipment, mechanical, manufacturing"
  },
  {
    "code": "4231",
    "description": "Hardware and Building Supplies Retailing",
    "index": "Carpenters' tool retailing"
  },
  {
    "code": "3242",
    "description": "Carpentry Services",
    "index": "Carpentry work on construction projects"
  },
  {
    "code": "1331",
    "description": "Textile Floor Covering Manufacturing",
    "index": "Carpet manufacturing"
  },
  {
    "code": "3243",
    "description": "Tiling and Carpeting Services",
    "index": "Carpet or carpet tile laying"
  },
  {
    "code": "4212",
    "description": "Floor Coverings Retailing",
    "index": "Carpet retailing"
  },
  {
    "code": "1331",
    "description": "Textile Floor Covering Manufacturing",
    "index": "Carpet tile manufacturing"
  },
  {
    "code": "9531",
    "description": "Laundry and Dry-Cleaning Services",
    "index": "Carpet, upholstery and rug cleaning"
  },
  {
    "code": "2222",
    "description": "Prefabricated Metal Building Manufacturing",
    "index": "Carport, prefabricated metal, manufacturing"
  },
  {
    "code": "1491",
    "description": "Prefabricated Wooden Building Manufacturing",
    "index": "Carport, prefabricated wood, manufacturing"
  },
  {
    "code": "0123",
    "description": "Vegetable Growing (Outdoors)",
    "index": "Carrot growing (outdoors)"
  },
  {
    "code": "9002",
    "description": "Creative Artists, Musicians, Writers and Performers",
    "index": "Cartooning"
  },
  {
    "code": "1915",
    "description": "Adhesive Manufacturing",
    "index": "Casein glue manufacturing"
  },
  {
    "code": "1133",
    "description": "Cheese and Other Dairy Product Manufacturing",
    "index": "Casein manufacturing"
  },
  {
    "code": "2421",
    "description": "Computer and Electronic Office Equipment Manufacturing",
    "index": "Cash register manufacturing"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Cash register wholesaling"
  },
  {
    "code": "0139",
    "description": "Other Fruit and Tree Nut Growing",
    "index": "Cashew nut growing"
  },
  {
    "code": "9201",
    "description": "Casino Operation",
    "index": "Casino operation"
  },
  {
    "code": "3739",
    "description": "Other Goods Wholesaling n.e.c.",
    "index": "Cask wholesaling"
  },
  {
    "code": "1620",
    "description": "Reproduction of Recorded Media",
    "index": "Cassette tape, pre-recorded audio, reproduction"
  },
  {
    "code": "1181",
    "description": "Sugar Manufacturing",
    "index": "Caster sugar manufacturing"
  },
  {
    "code": "7211",
    "description": "Employment Placement and Recruitment Services",
    "index": "Casting agency operation"
  },
  {
    "code": "2121",
    "description": "Iron and Steel Casting",
    "index": "Castings, iron, manufacturing"
  },
  {
    "code": "2141",
    "description": "Non-Ferrous Metal Casting",
    "index": "Castings, non-ferrous metal, manufacturing n.e.c."
  },
  {
    "code": "2121",
    "description": "Iron and Steel Casting",
    "index": "Castings, steel, manufacturing"
  },
  {
    "code": "0199",
    "description": "Other Livestock Farming n.e.c.",
    "index": "Cat breeding"
  },
  {
    "code": "4513",
    "description": "Catering Services",
    "index": "Catering service operation"
  },
  {
    "code": "1192",
    "description": "Prepared Animal and Bird Feed Manufacturing",
    "index": "Cattle lick manufacturing"
  },
  {
    "code": "1916",
    "description": "Paint and Coatings Manufacturing",
    "index": "Caulking compound manufacturing"
  },
  {
    "code": "9139",
    "description": "Amusement and Other Recreation Activities n.e.c.",
    "index": "Cave diving operation"
  },
  {
    "code": "1620",
    "description": "Reproduction of Recorded Media",
    "index": "CD-ROM software, pre-recorded, reproduction"
  },
  {
    "code": "2223",
    "description": "Architectural Aluminium Product Manufacturing",
    "index": "Ceiling section, fabricated aluminium, manufacturing"
  },
  {
    "code": "3493",
    "description": "Telecommunication Goods Wholesaling",
    "index": "Cellular telephone wholesaling"
  },
  {
    "code": "1829",
    "description": "Other Basic Polymer Manufacturing",
    "index": "Cellulose acetate manufacturing"
  },
  {
    "code": "1829",
    "description": "Other Basic Polymer Manufacturing",
    "index": "Cellulose fibre or filament manufacturing n.e.c."
  },
  {
    "code": "1892",
    "description": "Explosives Manufacturing",
    "index": "Cellulose nitrate manufacturing"
  },
  {
    "code": "1821",
    "description": "Synthetic Resin and Synthetic Rubber Manufacturing",
    "index": "Cellulosic resin manufacturing"
  },
  {
    "code": "0919",
    "description": "Other Construction Material Mining",
    "index": "Cement clay quarrying"
  },
  {
    "code": "2469",
    "description": "Other Specialised Machinery and Equipment Manufacturing",
    "index": "Cement making machinery manufacturing"
  },
  {
    "code": "2031",
    "description": "Cement and Lime Manufacturing",
    "index": "Cement manufacturing (except adhesive or refractory)"
  },
  {
    "code": "3241",
    "description": "Plastering and Ceiling Services",
    "index": "Cement rendering of buildings"
  },
  {
    "code": "4231",
    "description": "Hardware and Building Supplies Retailing",
    "index": "Cement retailing"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Cement wholesaling"
  },
  {
    "code": "2029",
    "description": "Other Ceramic Product Manufacturing",
    "index": "Cement, refractory, manufacturing"
  },
  {
    "code": "1090",
    "description": "Other Mining Support Services",
    "index": "Cementing oil and gas well castings"
  },
  {
    "code": "9520",
    "description": "Funeral, Crematorium and Cemetery Services",
    "index": "Cemetery operation"
  },
  {
    "code": "6210",
    "description": "Central Banking",
    "index": "Central banking"
  },
  {
    "code": "8023",
    "description": "Combined Primary and Secondary Education",
    "index": "Central school operation (combined primary/secondary school)"
  },
  {
    "code": "4231",
    "description": "Hardware and Building Supplies Retailing",
    "index": "Ceramic floor tile retailing"
  },
  {
    "code": "2029",
    "description": "Other Ceramic Product Manufacturing",
    "index": "Ceramic goods manufacturing"
  },
  {
    "code": "1162",
    "description": "Cereal, Pasta and Baking Mix Manufacturing",
    "index": "Cereal food manufacturing n.e.c."
  },
  {
    "code": "3609",
    "description": "Other Grocery Wholesaling",
    "index": "Cereal food wholesaling"
  },
  {
    "code": "0149",
    "description": "Other Grain Growing",
    "index": "Cereal grain growing"
  },
  {
    "code": "3312",
    "description": "Cereal Grain Wholesaling",
    "index": "Cereal grain wholesaling"
  },
  {
    "code": "1192",
    "description": "Prepared Animal and Bird Feed Manufacturing",
    "index": "Cereal meal manufacturing (for fodder, except from rice or rye)"
  },
  {
    "code": "1192",
    "description": "Prepared Animal and Bird Feed Manufacturing",
    "index": "Chaff manufacturing"
  },
  {
    "code": "2291",
    "description": "Spring and Wire Product Manufacturing",
    "index": "Chain manufacturing (except forged, cast or sprocket chain)"
  },
  {
    "code": "2121",
    "description": "Iron and Steel Casting",
    "index": "Chain, cast steel, manufacturing"
  },
  {
    "code": "2210",
    "description": "Iron and Steel Forging",
    "index": "Chain, forged steel, manufacturing"
  },
  {
    "code": "5010",
    "description": "Scenic and Sightseeing Transport",
    "index": "Chair lift operation (except ski lift operation)"
  },
  {
    "code": "2511",
    "description": "Wooden Furniture and Upholstered Seat Manufacturing",
    "index": "Chair manufacturing (except dental chairs fitted with mechanical devices)"
  },
  {
    "code": "2090",
    "description": "Other Non-Metallic Mineral Product Manufacturing",
    "index": "Chalk product manufacturing n.e.c."
  },
  {
    "code": "0919",
    "description": "Other Construction Material Mining",
    "index": "Chalk quarrying"
  },
  {
    "code": "9551",
    "description": "Business and Professional Association Services",
    "index": "Chamber of Commerce operation"
  },
  {
    "code": "9551",
    "description": "Business and Professional Association Services",
    "index": "Chamber of Manufacturers operation"
  },
  {
    "code": "1709",
    "description": "Other Petroleum and Coal Product Manufacturing",
    "index": "Char manufacturing"
  },
  {
    "code": "1812",
    "description": "Basic Organic Chemical Manufacturing",
    "index": "Charcoal briquette manufacturing"
  },
  {
    "code": "3322",
    "description": "Metal and Mineral Wholesaling",
    "index": "Charcoal wholesaling"
  },
  {
    "code": "6240",
    "description": "Financial Asset Investing",
    "index": "Charitable/educational trust or foundation operation (investment type; in predominantly financial assets, except trust management services on a commission or fee basis)"
  },
  {
    "code": "4621",
    "description": "Interurban and Rural Bus Transport",
    "index": "Charter bus service, outside metropolitan area"
  },
  {
    "code": "5010",
    "description": "Scenic and Sightseeing Transport",
    "index": "Charter fishing boat operation"
  },
  {
    "code": "1133",
    "description": "Cheese and Other Dairy Product Manufacturing",
    "index": "Cheese manufacturing"
  },
  {
    "code": "3603",
    "description": "Dairy Produce Wholesaling",
    "index": "Cheese wholesaling"
  },
  {
    "code": "6925",
    "description": "Scientific Testing and Analysis Services",
    "index": "Chemical analysis service n.e.c."
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Chemical colour wholesaling"
  },
  {
    "code": "6923",
    "description": "Engineering Design and Engineering Consulting Services",
    "index": "Chemical engineering consulting service"
  },
  {
    "code": "2469",
    "description": "Other Specialised Machinery and Equipment Manufacturing",
    "index": "Chemical processing machinery manufacturing"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Chemical wholesaling n.e.c."
  },
  {
    "code": "1413",
    "description": "Timber Resawing and Dressing",
    "index": "Chemically preserving timber (except chemical preservation of logs sawn at the same unit)"
  },
  {
    "code": "9551",
    "description": "Business and Professional Association Services",
    "index": "Chemists' association operation"
  },
  {
    "code": "0135",
    "description": "Stonefruit Growing",
    "index": "Cherry growing"
  },
  {
    "code": "0139",
    "description": "Other Fruit and Tree Nut Growing",
    "index": "Chestnut growing"
  },
  {
    "code": "1182",
    "description": "Confectionery Manufacturing",
    "index": "Chewing gum manufacturing"
  },
  {
    "code": "1220",
    "description": "Cigarette and Tobacco Product Manufacturing",
    "index": "Chewing tobacco manufacturing"
  },
  {
    "code": "0171",
    "description": "Poultry Farming (Meat)",
    "index": "Chicken farming (for meat)"
  },
  {
    "code": "2319",
    "description": "Other Motor Vehicle Parts Manufacturing",
    "index": "Child car restraint manufacturing"
  },
  {
    "code": "8710",
    "description": "Child Care Services",
    "index": "Child care service"
  },
  {
    "code": "8710",
    "description": "Child Care Services",
    "index": "Childminding service"
  },
  {
    "code": "7540",
    "description": "Justice",
    "index": "Children's court operation"
  },
  {
    "code": "8609",
    "description": "Other Residential Care Services",
    "index": "Children's home operation"
  },
  {
    "code": "8401",
    "description": "Hospitals (except Psychiatric Hospitals)",
    "index": "Children's hospital"
  },
  {
    "code": "8710",
    "description": "Child Care Services",
    "index": "Children's nursery operation (except preschool education)"
  },
  {
    "code": "7311",
    "description": "Buildings Cleaning Services",
    "index": "Chimney cleaning"
  },
  {
    "code": "4213",
    "description": "Houseware Retailing",
    "index": "Chinaware retailing"
  },
  {
    "code": "3733",
    "description": "Kitchen and Dining Ware Wholesaling",
    "index": "Chinaware wholesaling"
  },
  {
    "code": "1494",
    "description": "Reconstituted Wood Product Manufacturing",
    "index": "Chip board manufacturing"
  },
  {
    "code": "8534",
    "description": "Chiropractic and Osteopathic Services",
    "index": "Chiropractic service"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing",
    "index": "Chlorine gas manufacturing"
  },
  {
    "code": "1709",
    "description": "Other Petroleum and Coal Product Manufacturing",
    "index": "Chloroform manufacturing"
  },
  {
    "code": "1182",
    "description": "Confectionery Manufacturing",
    "index": "Chocolate manufacturing"
  },
  {
    "code": "9002",
    "description": "Creative Artists, Musicians, Writers and Performers",
    "index": "Choreography service"
  },
  {
    "code": "2293",
    "description": "Metal Coating and Finishing",
    "index": "Chromium plating"
  },
  {
    "code": "1813",
    "description": "Basic Inorganic Chemical Manufacturing",
    "index": "Chromium sulphate manufacturing (for application in leather tanning)"
  },
  {
    "code": "0990",
    "description": "Other Non-Metallic Mineral Mining and Quarrying",
    "index": "Chrysoprase mining"
  },
  {
    "code": "9540",
    "description": "Religious Services",
    "index": "Church operation"
  },
  {
    "code": "2240",
    "description": "Other Sheet Metal Product Manufacturing",
    "index": "Chute, sheet metal, manufacturing"
  },
  {
    "code": "1140",
    "description": "Fruit and Vegetable Processing",
    "index": "Chutney or relish manufacturing"
  },
  {
    "code": "1214",
    "description": "Wine and Other Alcoholic Beverage Manufacturing",
    "index": "Cider, alcoholic, manufacturing"
  },
  {
    "code": "1211",
    "description": "Soft Drink, Cordial and Syrup Manufacturing",
    "index": "Cider, non-alcoholic, manufacturing"
  },
  {
    "code": "1220",
    "description": "Cigarette and Tobacco Product Manufacturing",
    "index": "Cigar manufacturing"
  },
  {
    "code": "1220",
    "description": "Cigarette and Tobacco Product Manufacturing",
    "index": "Cigarette manufacturing"
  },
  {
    "code": "5513",
    "description": "Motion Picture Exhibition",
    "index": "Cinema operation"
  },
  {
    "code": "2429",
    "description": "Other Electronic Equipment Manufacturing",
    "index": "Circuit board, printed (bare or loaded), manufacturing"
  },
  {
    "code": "9001",
    "description": "Performing Arts Operation",
    "index": "Circus operation"
  },
  {
    "code": "2034",
    "description": "Concrete Product Manufacturing",
    "index": "Cistern, concrete, manufacturing"
  },
  {
    "code": "1812",
    "description": "Basic Organic Chemical Manufacturing",
    "index": "Citric acid manufacturing"
  },
  {
    "code": "0136",
    "description": "Citrus Fruit Growing",
    "index": "Citrus fruit growing"
  },
  {
    "code": "0136",
    "description": "Citrus Fruit Growing",
    "index": "Citrus orchard operation"
  },
  {
    "code": "7600",
    "description": "Defence",
    "index": "Civil defence operation (military)"
  },
  {
    "code": "6923",
    "description": "Engineering Design and Engineering Consulting Services",
    "index": "Civil engineering consulting service"
  },
  {
    "code": "9559",
    "description": "Other Interest Group Services n.e.c.",
    "index": "Civil liberty service"
  },
  {
    "code": "6420",
    "description": "Auxiliary Insurance Services",
    "index": "Claim adjustment service"
  },
  {
    "code": "6420",
    "description": "Auxiliary Insurance Services",
    "index": "Claim assessment service"
  },
  {
    "code": "2029",
    "description": "Other Ceramic Product Manufacturing",
    "index": "Clay paver manufacturing"
  },
  {
    "code": "0919",
    "description": "Other Construction Material Mining",
    "index": "Clay quarrying"
  },
  {
    "code": "2029",
    "description": "Other Ceramic Product Manufacturing",
    "index": "Clay, refractory, manufacturing"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Cleanser, abrasive, wholesaling"
  },
  {
    "code": "6419",
    "description": "Other Auxiliary Finance and Investment Services",
    "index": "Clearing house operation"
  },
  {
    "code": "7291",
    "description": "Office Administrative Services",
    "index": "Clerical service"
  },
  {
    "code": "8539",
    "description": "Other Allied Health Services",
    "index": "Clinical psychology service"
  },
  {
    "code": "9539",
    "description": "Other Personal Services n.e.c.",
    "index": "Cloak room service"
  },
  {
    "code": "2419",
    "description": "Other Professional and Scientific Equipment Manufacturing",
    "index": "Clock manufacturing"
  },
  {
    "code": "4279",
    "description": "Other Store-Based Retailing n.e.c.",
    "index": "Clock retailing"
  },
  {
    "code": "3732",
    "description": "Jewellery and Watch Wholesaling",
    "index": "Clock wholesaling"
  },
  {
    "code": "3234",
    "description": "Fire and Security Alarm Installation Services",
    "index": "Closed circuit video surveillance system installation"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Cloth hoist wholesaling"
  },
  {
    "code": "2441",
    "description": "Whiteware Appliance Manufacturing",
    "index": "Clothes drier, domestic, manufacturing"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Clothes hoist manufacturing"
  },
  {
    "code": "1912",
    "description": "Rigid and Semi Rigid Polymer Product Manufacturing",
    "index": "Clothes peg, plastic, manufacturing"
  },
  {
    "code": "1351",
    "description": "Clothing Manufacturing",
    "index": "Clothing accessory manufacturing n.e.c."
  },
  {
    "code": "4251",
    "description": "Clothing Retailing",
    "index": "Clothing accessory retailing"
  },
  {
    "code": "1351",
    "description": "Clothing Manufacturing",
    "index": "Clothing manufacturing n.e.c."
  },
  {
    "code": "9491",
    "description": "Clothing and Footwear Repair",
    "index": "Clothing repair"
  },
  {
    "code": "4251",
    "description": "Clothing Retailing",
    "index": "Clothing retailing"
  },
  {
    "code": "3712",
    "description": "Clothing and Footwear Wholesaling",
    "index": "Clothing wholesaling"
  },
  {
    "code": "1351",
    "description": "Clothing Manufacturing",
    "index": "Clothing, fur, manufacturing"
  },
  {
    "code": "9531",
    "description": "Laundry and Dry-Cleaning Services",
    "index": "Clothing, hat or garment (including leather), cleaning service"
  },
  {
    "code": "1340",
    "description": "Knitted Product Manufacturing",
    "index": "Clothing, knitted, manufacturing"
  },
  {
    "code": "1351",
    "description": "Clothing Manufacturing",
    "index": "Clothing, leather, manufacturing"
  },
  {
    "code": "1351",
    "description": "Clothing Manufacturing",
    "index": "Clothing, plastic or rubber, manufacturing"
  },
  {
    "code": "9559",
    "description": "Other Interest Group Services n.e.c.",
    "index": "Club operation (for the promotion of community or sectional interests)"
  },
  {
    "code": "2319",
    "description": "Other Motor Vehicle Parts Manufacturing",
    "index": "Clutch assembly manufacturing"
  },
  {
    "code": "9419",
    "description": "Other Automotive Repair and Maintenance",
    "index": "Clutch repair"
  },
  {
    "code": "1709",
    "description": "Other Petroleum and Coal Product Manufacturing",
    "index": "Coal coke manufacturing"
  },
  {
    "code": "2700",
    "description": "Gas Supply",
    "index": "Coal gas distribution through mains system"
  },
  {
    "code": "5212",
    "description": "Port and Water Transport Terminal Operations",
    "index": "Coal loader operation (water transport)"
  },
  {
    "code": "4279",
    "description": "Other Store-Based Retailing n.e.c.",
    "index": "Coal retailing"
  },
  {
    "code": "1709",
    "description": "Other Petroleum and Coal Product Manufacturing",
    "index": "Coal tar distilling"
  },
  {
    "code": "3322",
    "description": "Metal and Mineral Wholesaling",
    "index": "Coal wholesaling"
  },
  {
    "code": "0149",
    "description": "Other Grain Growing",
    "index": "Coarse grain growing"
  },
  {
    "code": "4810",
    "description": "Water Freight Transport",
    "index": "Coastal sea freight transport service between domestic ports"
  },
  {
    "code": "7719",
    "description": "Other Public Order and Safety Services",
    "index": "Coastwatch service"
  },
  {
    "code": "1162",
    "description": "Cereal, Pasta and Baking Mix Manufacturing",
    "index": "Coatings made from cereal food (except biscuit or breadcrumb) manufacturing"
  },
  {
    "code": "2431",
    "description": "Electric Cable and Wire Manufacturing",
    "index": "Co-axial cable manufacturing"
  },
  {
    "code": "1182",
    "description": "Confectionery Manufacturing",
    "index": "Cocoa product manufacturing"
  },
  {
    "code": "0139",
    "description": "Other Fruit and Tree Nut Growing",
    "index": "Coconut growing"
  },
  {
    "code": "1140",
    "description": "Fruit and Vegetable Processing",
    "index": "Coconut, desiccated, manufacturing"
  },
  {
    "code": "1199",
    "description": "Other Food Products Manufacturing n.e.c.",
    "index": "Coffee manufacturing"
  },
  {
    "code": "3609",
    "description": "Other Grocery Wholesaling",
    "index": "Coffee wholesaling"
  },
  {
    "code": "3739",
    "description": "Other Goods Wholesaling n.e.c.",
    "index": "Coffin wholesaling"
  },
  {
    "code": "4273",
    "description": "Antique and Used Goods Retailing",
    "index": "Coin dealing (retailing)"
  },
  {
    "code": "2591",
    "description": "Jewellery and Silverware Manufacturing",
    "index": "Coin minting"
  },
  {
    "code": "4279",
    "description": "Other Store-Based Retailing n.e.c.",
    "index": "Coke retailing"
  },
  {
    "code": "3322",
    "description": "Metal and Mineral Wholesaling",
    "index": "Coke wholesaling"
  },
  {
    "code": "2122",
    "description": "Steel Pipe and Tube Manufacturing",
    "index": "Cold drawn steel pipe or tube manufacturing"
  },
  {
    "code": "7293",
    "description": "Credit Reporting and Debt Collection Services",
    "index": "Collection agency operation"
  },
  {
    "code": "8102",
    "description": "Higher Education",
    "index": "Colleges of education operation"
  },
  {
    "code": "1612",
    "description": "Printing Support Services",
    "index": "Colour separation service, printing"
  },
  {
    "code": "1199",
    "description": "Other Food Products Manufacturing n.e.c.",
    "index": "Colouring, food, manufacturing"
  },
  {
    "code": "9520",
    "description": "Funeral, Crematorium and Cemetery Services",
    "index": "Columbarium operation"
  },
  {
    "code": "5412",
    "description": "Magazine and Other Periodical Publishing",
    "index": "Comic book publishing (except internet)"
  },
  {
    "code": "6924",
    "description": "Other Specialised Design Services",
    "index": "Commercial art service"
  },
  {
    "code": "3020",
    "description": "Non-Residential Building Construction",
    "index": "Commercial building construction"
  },
  {
    "code": "6229",
    "description": "Other Depository Financial Intermediation",
    "index": "Commercial finance company operation"
  },
  {
    "code": "6712",
    "description": "Non-Residential Property Operators",
    "index": "Commercial or industrial property renting or leasing"
  },
  {
    "code": "6712",
    "description": "Non-Residential Property Operators",
    "index": "Commercial property body corporation"
  },
  {
    "code": "6712",
    "description": "Non-Residential Property Operators",
    "index": "Commercial property strata corporation"
  },
  {
    "code": "3502",
    "description": "Commercial Vehicle Wholesaling",
    "index": "Commercial vehicle wholesaling n.e.c."
  },
  {
    "code": "4320",
    "description": "Retail Commission Based Buying and/or Selling",
    "index": "Commission buying service"
  },
  {
    "code": "4320",
    "description": "Retail Commission Based Buying and/or Selling",
    "index": "Commission retailing of books"
  },
  {
    "code": "4320",
    "description": "Retail Commission Based Buying and/or Selling",
    "index": "Commission retailing of cosmetics"
  },
  {
    "code": "4320",
    "description": "Retail Commission Based Buying and/or Selling",
    "index": "Commission retailing of health foods"
  },
  {
    "code": "4320",
    "description": "Retail Commission Based Buying and/or Selling",
    "index": "Commission selling service"
  },
  {
    "code": "4320",
    "description": "Retail Commission Based Buying and/or Selling",
    "index": "Commission-based milk vending"
  },
  {
    "code": "6411",
    "description": "Financial Asset Broking Services",
    "index": "Commodity futures broking or dealing (on a commission or transaction fee basis)"
  },
  {
    "code": "9422",
    "description": "Electronic (except Domestic Appliance) and Precision Equipment Repair and Maintenance",
    "index": "Communication equipment, repair and maintenance"
  },
  {
    "code": "3493",
    "description": "Telecommunication Goods Wholesaling",
    "index": "Communication equipment, wholesaling"
  },
  {
    "code": "9559",
    "description": "Other Interest Group Services n.e.c.",
    "index": "Community association operation"
  },
  {
    "code": "8609",
    "description": "Other Residential Care Services",
    "index": "Community mental health hostel"
  },
  {
    "code": "4720",
    "description": "Rail Passenger Transport",
    "index": "Commuter rail passenger service"
  },
  {
    "code": "4222",
    "description": "Computer and Computer Peripherals Retailing",
    "index": "Compact disc burner retailing"
  },
  {
    "code": "2429",
    "description": "Other Electronic Equipment Manufacturing",
    "index": "Compact disc player manufacturing"
  },
  {
    "code": "4221",
    "description": "Electrical, Electronic and Gas Appliance Retailing",
    "index": "Compact disc player retailing"
  },
  {
    "code": "4242",
    "description": "Entertainment Media Retailing",
    "index": "Compact disc retailing"
  },
  {
    "code": "1620",
    "description": "Reproduction of Recorded Media",
    "index": "Compact disc, pre-recorded, reproduction"
  },
  {
    "code": "9002",
    "description": "Creative Artists, Musicians, Writers and Performers",
    "index": "Composing (including musical composition)"
  },
  {
    "code": "3499",
    "description": "Other Machinery and Equipment Wholesaling n",
    "index": "Compressor, air or gas, wholesaling"
  },
  {
    "code": "9422",
    "description": "Electronic (except Domestic Appliance) and Precision Equipment Repair and Maintenance",
    "index": "Computer and computer peripheral equipment repair and maintenance"
  },
  {
    "code": "4279",
    "description": "Other Store-Based Retailing n.e.c.",
    "index": "Computer consumables (toners, inks) retailing"
  },
  {
    "code": "5922",
    "description": "Electronic Information Storage Services",
    "index": "Computer data storage and retrieval service (except library service)"
  },
  {
    "code": "4222",
    "description": "Computer and Computer Peripherals Retailing",
    "index": "Computer equipment retailing"
  },
  {
    "code": "4222",
    "description": "Computer and Computer Peripherals Retailing",
    "index": "Computer game console retailing"
  },
  {
    "code": "6632",
    "description": "Video and Other Electronic Media Rental",
    "index": "Computer game rental"
  },
  {
    "code": "4242",
    "description": "Entertainment Media Retailing",
    "index": "Computer game retailing"
  },
  {
    "code": "3492",
    "description": "Computer and Computer Peripherals Wholesaling",
    "index": "Computer game wholesaling"
  },
  {
    "code": "5514",
    "description": "Postproduction Services and Other Motion Picture and Video Activities",
    "index": "Computer graphic, animation and special effect post-production service"
  },
  {
    "code": "7000",
    "description": "Computer Systems Design and Related Services",
    "index": "Computer hardware consulting service"
  },
  {
    "code": "4222",
    "description": "Computer and Computer Peripherals Retailing",
    "index": "Computer hardware retailing"
  },
  {
    "code": "5921",
    "description": "Data Processing and Web Hosting Services",
    "index": "Computer input preparation service"
  },
  {
    "code": "2421",
    "description": "Computer and Electronic Office Equipment Manufacturing",
    "index": "Computer manufacturing"
  },
  {
    "code": "2421",
    "description": "Computer and Electronic Office Equipment Manufacturing",
    "index": "Computer monitor manufacturing"
  },
  {
    "code": "2421",
    "description": "Computer and Electronic Office Equipment Manufacturing",
    "index": "Computer peripheral manufacturing"
  },
  {
    "code": "3492",
    "description": "Computer and Computer Peripherals Wholesaling",
    "index": "Computer peripheral wholesaling n.e.c."
  },
  {
    "code": "2421",
    "description": "Computer and Electronic Office Equipment Manufacturing",
    "index": "Computer printer manufacturing"
  },
  {
    "code": "7000",
    "description": "Computer Systems Design and Related Services",
    "index": "Computer programming service"
  },
  {
    "code": "7000",
    "description": "Computer Systems Design and Related Services",
    "index": "Computer software consulting service"
  },
  {
    "code": "4222",
    "description": "Computer and Computer Peripherals Retailing",
    "index": "Computer software retailing (except computer games)"
  },
  {
    "code": "3492",
    "description": "Computer and Computer Peripherals Wholesaling",
    "index": "Computer software wholesaling"
  },
  {
    "code": "1620",
    "description": "Reproduction of Recorded Media",
    "index": "Computer tape or disk, pre-recorded, reproduction"
  },
  {
    "code": "5921",
    "description": "Data Processing and Web Hosting Services",
    "index": "Computer time leasing or renting"
  },
  {
    "code": "5921",
    "description": "Data Processing and Web Hosting Services",
    "index": "Computer time sharing service"
  },
  {
    "code": "3492",
    "description": "Computer and Computer Peripherals Wholesaling",
    "index": "Computer wholesaling"
  },
  {
    "code": "9003",
    "description": "Performing Arts Venue Operation",
    "index": "Concert hall operation"
  },
  {
    "code": "7540",
    "description": "Justice",
    "index": "Conciliation and Arbitration Commission operation"
  },
  {
    "code": "1899",
    "description": "Other Basic Chemical Product Manufacturing n.e.c.",
    "index": "Concrete additive or masonry surface treatment manufacturing"
  },
  {
    "code": "3222",
    "description": "Bricklaying Services",
    "index": "Concrete block laying"
  },
  {
    "code": "3221",
    "description": "Concreting Services",
    "index": "Concrete footpath construction"
  },
  {
    "code": "3221",
    "description": "Concreting Services",
    "index": "Concrete foundation construction"
  },
  {
    "code": "3221",
    "description": "Concreting Services",
    "index": "Concrete kerb and guttering construction"
  },
  {
    "code": "2462",
    "description": "Mining and Construction Machinery Manufacturing",
    "index": "Concrete mixer manufacturing"
  },
  {
    "code": "3221",
    "description": "Concreting Services",
    "index": "Concrete pumping"
  },
  {
    "code": "2033",
    "description": "Ready-Mixed Concrete Manufacturing",
    "index": "Concrete slurry manufacturing"
  },
  {
    "code": "3221",
    "description": "Concreting Services",
    "index": "Concrete work on construction projects"
  },
  {
    "code": "2034",
    "description": "Concrete Product Manufacturing",
    "index": "Concrete/styrofoam composite product manufacturing"
  },
  {
    "code": "1133",
    "description": "Cheese and Other Dairy Product Manufacturing",
    "index": "Condensed milk manufacturing"
  },
  {
    "code": "3609",
    "description": "Other Grocery Wholesaling",
    "index": "Condiment wholesaling"
  },
  {
    "code": "1920",
    "description": "Natural Rubber Product Manufacturing",
    "index": "Condom, natural rubber, manufacturing"
  },
  {
    "code": "1182",
    "description": "Confectionery Manufacturing",
    "index": "Confectionery manufacturing"
  },
  {
    "code": "4129",
    "description": "Other Specialised Food Retailing",
    "index": "Confectionery retailing"
  },
  {
    "code": "3609",
    "description": "Other Grocery Wholesaling",
    "index": "Confectionery wholesaling"
  },
  {
    "code": "1132",
    "description": "Ice Cream Manufacturing",
    "index": "Confections, frozen manufacturing"
  },
  {
    "code": "9559",
    "description": "Other Interest Group Services n.e.c.",
    "index": "Conservation (including wildlife) association operation"
  },
  {
    "code": "8922",
    "description": "Nature Reserves and Conservation Parks Operation",
    "index": "Conservation park operation"
  },
  {
    "code": "8531",
    "description": "Dental Services",
    "index": "Conservative dental service"
  },
  {
    "code": "1491",
    "description": "Prefabricated Wooden Building Manufacturing",
    "index": "Conservatory, prefabricated wood, manufacturing"
  },
  {
    "code": "6923",
    "description": "Engineering Design and Engineering Consulting Services",
    "index": "Construction consulting service"
  },
  {
    "code": "9429",
    "description": "Other Machinery and Equipment Repair and Maintenance",
    "index": "Construction machinery and equipment repair and maintenance"
  },
  {
    "code": "3292",
    "description": "Hire of Construction Machinery with Operator",
    "index": "Construction machinery hiring with operator (except earthmoving equipment)"
  },
  {
    "code": "3411",
    "description": "Agricultural and Construction Machinery Wholesaling",
    "index": "Construction machinery or equipment wholesaling"
  },
  {
    "code": "6631",
    "description": "Heavy Machinery and Scaffolding Rental and Hiring",
    "index": "Construction machinery rental (without operator)"
  },
  {
    "code": "0919",
    "description": "Other Construction Material Mining",
    "index": "Construction material crushing or screening"
  },
  {
    "code": "7551",
    "description": "Domestic Government Representation",
    "index": "Consulate operation (domestic government)"
  },
  {
    "code": "7552",
    "description": "Foreign Government Representation",
    "index": "Consulate operation (foreign government)"
  },
  {
    "code": "7293",
    "description": "Credit Reporting and Debt Collection Services",
    "index": "Consumer credit reporting service"
  },
  {
    "code": "7720",
    "description": "Regulatory Services",
    "index": "Consumer protection service"
  },
  {
    "code": "9559",
    "description": "Other Interest Group Services n.e.c.",
    "index": "Consumers' association operation"
  },
  {
    "code": "8532",
    "description": "Optometry and Optical Dispensing",
    "index": "Contact lens dispensing"
  },
  {
    "code": "2411",
    "description": "Photographic, Optical and Ophthalmic Equipment Manufacturing",
    "index": "Contact lens manufacturing"
  },
  {
    "code": "5299",
    "description": "Other Transport Support Services n.e.c",
    "index": "Container terminal operation (road and rail)"
  },
  {
    "code": "5212",
    "description": "Port and Water Transport Terminal Operations",
    "index": "Container terminal operation (water transport)"
  },
  {
    "code": "3739",
    "description": "Other Goods Wholesaling n.e.c.",
    "index": "Container wholesaling (except of paper or paper board)"
  },
  {
    "code": "2010",
    "description": "Glass and Glass Product Manufacturing",
    "index": "Container, glass, manufacturing"
  },
  {
    "code": "1499",
    "description": "Other Wood Product Manufacturing n.e.c.",
    "index": "Container, wooden, manufacturing"
  },
  {
    "code": "1841",
    "description": "Human Pharmaceutical and Medicinal Product Manufacturing",
    "index": "Contraceptive, medicinal, manufacturing (except rubber contraceptives)"
  },
  {
    "code": "7212",
    "description": "Labour Supply Services",
    "index": "Contract labour service"
  },
  {
    "code": "7320",
    "description": "Packaging Services",
    "index": "Contract packing or filling"
  },
  {
    "code": "2419",
    "description": "Other Professional and Scientific Equipment Manufacturing",
    "index": "Control equipment, electrical, manufacturing"
  },
  {
    "code": "5309",
    "description": "Other Warehousing and Storage Services",
    "index": "Controlled atmosphere store operation"
  },
  {
    "code": "1831",
    "description": "Fertiliser Manufacturing",
    "index": "Controlled release fertiliser preparation manufacturing"
  },
  {
    "code": "4110",
    "description": "Supermarket and Grocery Stores",
    "index": "Convenience store operation"
  },
  {
    "code": "9540",
    "description": "Religious Services",
    "index": "Convent operation (except schools)"
  },
  {
    "code": "6931",
    "description": "Legal Services",
    "index": "Conveyancing service"
  },
  {
    "code": "1920",
    "description": "Natural Rubber Product Manufacturing",
    "index": "Conveyor belt, natural rubber, manufacturing"
  },
  {
    "code": "1919",
    "description": "Other Polymer Product Manufacturing",
    "index": "Conveyor belt, plastic or composite, manufacturing"
  },
  {
    "code": "2491",
    "description": "Lifting and Material Handling Equipment Manufacturing",
    "index": "Conveyor or conveying system manufacturing"
  },
  {
    "code": "3609",
    "description": "Other Grocery Wholesaling",
    "index": "Cooking oil or fat wholesaling"
  },
  {
    "code": "4213",
    "description": "Houseware Retailing",
    "index": "Cooking utensil retailing (except electric)"
  },
  {
    "code": "3733",
    "description": "Kitchen and Dining Ware Wholesaling",
    "index": "Cooking utensil wholesaling (except electric appliances)"
  },
  {
    "code": "4221",
    "description": "Electrical, Electronic and Gas Appliance Retailing",
    "index": "Cooking utensil, electric, retailing"
  },
  {
    "code": "5309",
    "description": "Other Warehousing and Storage Services",
    "index": "Cool room storage service"
  },
  {
    "code": "1913",
    "description": "Polymer Foam Product Manufacturing",
    "index": "Cooler and ice chest, polymeric foam, manufacturing"
  },
  {
    "code": "9419",
    "description": "Other Automotive Repair and Maintenance",
    "index": "Cooling system and/or radiator repair (automotive)"
  },
  {
    "code": "2452",
    "description": "Fixed Space Heating, Cooling and Ventilation Equipment Manufacturing",
    "index": "Coolroom refrigeration plant manufacturing"
  },
  {
    "code": "3233",
    "description": "Air Conditioning and Heating Services",
    "index": "Coolroom refrigerator installation"
  },
  {
    "code": "6419",
    "description": "Other Auxiliary Finance and Investment Services",
    "index": "Co-operative housing society management service (on a commission or fee basis)"
  },
  {
    "code": "6230",
    "description": "Non-depository Financing",
    "index": "Co-operative housing society operation (except co-operative housing society management services on a commission or fee basis)"
  },
  {
    "code": "3322",
    "description": "Metal and Mineral Wholesaling",
    "index": "Copper or copper alloy wholesaling"
  },
  {
    "code": "0803",
    "description": "Copper Ore Mining",
    "index": "Copper ore leaching"
  },
  {
    "code": "0803",
    "description": "Copper Ore Mining",
    "index": "Copper ore mining"
  },
  {
    "code": "2293",
    "description": "Metal Coating and Finishing",
    "index": "Copper plating"
  },
  {
    "code": "2133",
    "description": "Copper, Silver, Lead, and Zinc Smelting and Refining",
    "index": "Copper smelting, refining"
  },
  {
    "code": "2133",
    "description": "Copper, Silver, Lead, and Zinc Smelting and Refining",
    "index": "Copper, silver, lead or zinc from scrap or waste material recovering"
  },
  {
    "code": "2240",
    "description": "Other Sheet Metal Product Manufacturing",
    "index": "Coppersmithing (except boiler making)"
  },
  {
    "code": "1332",
    "description": "Rope, Cordage and Twine Manufacturing",
    "index": "Cord manufacturing (except wire rope or tyre cord)"
  },
  {
    "code": "1332",
    "description": "Rope, Cordage and Twine Manufacturing",
    "index": "Cordage manufacturing"
  },
  {
    "code": "3711",
    "description": "Textile Product Wholesaling",
    "index": "Cordage wholesaling"
  },
  {
    "code": "1211",
    "description": "Soft Drink, Cordial and Syrup Manufacturing",
    "index": "Cordial manufacturing"
  },
  {
    "code": "3609",
    "description": "Other Grocery Wholesaling",
    "index": "Cordial, aerated or carbonated, wholesaling"
  },
  {
    "code": "1493",
    "description": "Veneer and Plywood Manufacturing",
    "index": "Core, plywood or veneer, manufacturing"
  },
  {
    "code": "1494",
    "description": "Reconstituted Wood Product Manufacturing",
    "index": "Corestock manufacturing"
  },
  {
    "code": "1191",
    "description": "Potato Crisps and Corn Chips Manufacturing",
    "index": "Corn chip manufacturing"
  },
  {
    "code": "1113",
    "description": "Cured Meat and Smallgoods Manufacturing",
    "index": "Corned meat manufacturing (including canned)"
  },
  {
    "code": "1161",
    "description": "Grain Mill Product Manufacturing",
    "index": "Cornflour manufacturing"
  },
  {
    "code": "2032",
    "description": "Plaster and Gypsum Product Manufacturing",
    "index": "Cornice, plaster, manufacturing"
  },
  {
    "code": "2240",
    "description": "Other Sheet Metal Product Manufacturing",
    "index": "Cornice, sheet metal, manufacturing"
  },
  {
    "code": "1161",
    "description": "Grain Mill Product Manufacturing",
    "index": "Cornmeal manufacturing"
  },
  {
    "code": "6961",
    "description": "Corporate Head Office Management Services",
    "index": "Corporate head office management"
  },
  {
    "code": "7714",
    "description": "Correctional and Detention Services",
    "index": "Correctional centre operation"
  },
  {
    "code": "1521",
    "description": "Corrugated Paperboard and Paperboard Container Manufacturing",
    "index": "Corrugated paperboard container manufacturing"
  },
  {
    "code": "1521",
    "description": "Corrugated Paperboard and Paperboard Container Manufacturing",
    "index": "Corrugated paperboard manufacturing"
  },
  {
    "code": "1852",
    "description": "Cosmetic and Toiletry Preparation Manufacturing",
    "index": "Cosmetic deodorant manufacturing"
  },
  {
    "code": "4271",
    "description": "Pharmaceutical, Cosmetic and Toiletry Goods Retailing",
    "index": "Cosmetic retailing"
  },
  {
    "code": "3720",
    "description": "Pharmaceutical and Toiletry Goods Wholesaling",
    "index": "Cosmetic wholesaling"
  },
  {
    "code": "9002",
    "description": "Creative Artists, Musicians, Writers and Performers",
    "index": "Costume designing"
  },
  {
    "code": "6639",
    "description": "Other Goods and Equipment Rental and Hiring n.e.c.",
    "index": "Costume hire"
  },
  {
    "code": "2591",
    "description": "Jewellery and Silverware Manufacturing",
    "index": "Costume jewellery manufacturing"
  },
  {
    "code": "3732",
    "description": "Jewellery and Watch Wholesaling",
    "index": "Costume jewellery wholesaling"
  },
  {
    "code": "0521",
    "description": "Cotton Ginning",
    "index": "Cotton ginning"
  },
  {
    "code": "0152",
    "description": "Cotton Growing",
    "index": "Cotton growing"
  },
  {
    "code": "1150",
    "description": "Oil and Fat Manufacturing",
    "index": "Cotton seed oil manufacturing"
  },
  {
    "code": "1312",
    "description": "Natural Fibre Textile Manufacturing",
    "index": "Cotton sewing thread manufacturing"
  },
  {
    "code": "1333",
    "description": "Cut and Sewn Textile Product Manufacturing",
    "index": "Cotton textile furnishing manufacturing"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Coupling, metal, manufacturing"
  },
  {
    "code": "0411",
    "description": "Rock Lobster and Crab Potting",
    "index": "Crab fishing or potting"
  },
  {
    "code": "4279",
    "description": "Other Store-Based Retailing n.e.c.",
    "index": "Craft goods retailing"
  },
  {
    "code": "0133",
    "description": "Berry Fruit Growing",
    "index": "Cranberry growing"
  },
  {
    "code": "3292",
    "description": "Hire of Construction Machinery with Operator",
    "index": "Crane hiring with operator"
  },
  {
    "code": "2491",
    "description": "Lifting and Material Handling Equipment Manufacturing",
    "index": "Crane manufacturing"
  },
  {
    "code": "3739",
    "description": "Other Goods Wholesaling n.e.c.",
    "index": "Crate, wooden, wholesaling"
  },
  {
    "code": "7320",
    "description": "Packaging Services",
    "index": "Crating service"
  },
  {
    "code": "2462",
    "description": "Mining and Construction Machinery Manufacturing",
    "index": "Crawler tractor manufacturing"
  },
  {
    "code": "3603",
    "description": "Dairy Produce Wholesaling",
    "index": "Cream wholesaling"
  },
  {
    "code": "1133",
    "description": "Cheese and Other Dairy Product Manufacturing",
    "index": "Cream, canned, manufacturing"
  },
  {
    "code": "1131",
    "description": "Milk and Cream Processing",
    "index": "Cream, pasteurised, manufacturing (except canned)"
  },
  {
    "code": "9002",
    "description": "Creative Artists, Musicians, Writers and Performers",
    "index": "Creative arts service"
  },
  {
    "code": "7293",
    "description": "Credit Reporting and Debt Collection Services",
    "index": "Credit bureau or agency operation"
  },
  {
    "code": "6419",
    "description": "Other Auxiliary Finance and Investment Services",
    "index": "Credit card administration service"
  },
  {
    "code": "6230",
    "description": "Non-depository Financing",
    "index": "Credit card issuing operation"
  },
  {
    "code": "7293",
    "description": "Credit Reporting and Debt Collection Services",
    "index": "Credit investigation service"
  },
  {
    "code": "7293",
    "description": "Credit Reporting and Debt Collection Services",
    "index": "Credit rating service"
  },
  {
    "code": "6223",
    "description": "Credit Union Operation",
    "index": "Credit union operation"
  },
  {
    "code": "9520",
    "description": "Funeral, Crematorium and Cemetery Services",
    "index": "Crematorium operation"
  },
  {
    "code": "1821",
    "description": "Synthetic Resin and Synthetic Rubber Manufacturing",
    "index": "Cresol formaldehyde manufacturing"
  },
  {
    "code": "9112",
    "description": "Sport and Physical Recreation Clubs and Sports Professionals",
    "index": "Cricket club operation"
  },
  {
    "code": "8211",
    "description": "Sports and Physical Recreation Instruction",
    "index": "Cricket coaching"
  },
  {
    "code": "9113",
    "description": "Sports and Physical Recreation Venues, Grounds and Facilities Operation",
    "index": "Cricket ground operation"
  },
  {
    "code": "2592",
    "description": "Toy, Sporting and Recreational Product Manufacturing",
    "index": "Cricket set manufacturing"
  },
  {
    "code": "8609",
    "description": "Other Residential Care Services",
    "index": "Crisis care accommodation operation"
  },
  {
    "code": "1191",
    "description": "Potato Crisps and Corn Chips Manufacturing",
    "index": "Crisp manufacturing"
  },
  {
    "code": "1340",
    "description": "Knitted Product Manufacturing",
    "index": "Crocheted fabric manufacturing"
  },
  {
    "code": "2029",
    "description": "Other Ceramic Product Manufacturing",
    "index": "Crockery manufacturing"
  },
  {
    "code": "4213",
    "description": "Houseware Retailing",
    "index": "Crockery retailing"
  },
  {
    "code": "3733",
    "description": "Kitchen and Dining Ware Wholesaling",
    "index": "Crockery wholesaling"
  },
  {
    "code": "0199",
    "description": "Other Livestock Farming n.e.c.",
    "index": "Crocodile farming"
  },
  {
    "code": "0420",
    "description": "Hunting and Trapping",
    "index": "Crocodile hunting"
  },
  {
    "code": "0529",
    "description": "Other Agriculture and Fishing Support Services",
    "index": "Crop harvesting"
  },
  {
    "code": "1113",
    "description": "Cured Meat and Smallgoods Manufacturing",
    "index": "Croquette manufacturing n.e.c."
  },
  {
    "code": "2240",
    "description": "Other Sheet Metal Product Manufacturing",
    "index": "Crown seal, metal, manufacturing"
  },
  {
    "code": "2029",
    "description": "Other Ceramic Product Manufacturing",
    "index": "Crucible, refractory, manufacturing"
  },
  {
    "code": "3321",
    "description": "Petroleum Product Wholesaling",
    "index": "Crude oil wholesaling"
  },
  {
    "code": "3321",
    "description": "Petroleum Product Wholesaling",
    "index": "Crude petroleum wholesaling"
  },
  {
    "code": "1172",
    "description": "Cake and Pastry Manufacturing (Factory-based)",
    "index": "Crumpet manufacturing (factory based)"
  },
  {
    "code": "1192",
    "description": "Prepared Animal and Bird Feed Manufacturing",
    "index": "Crushed grain manufacturing (including mixed; for fodder)"
  },
  {
    "code": "2469",
    "description": "Other Specialised Machinery and Equipment Manufacturing",
    "index": "Crushing machinery manufacturing (food processing)"
  },
  {
    "code": "2462",
    "description": "Mining and Construction Machinery Manufacturing",
    "index": "Crushing machinery manufacturing n.e.c."
  },
  {
    "code": "0203",
    "description": "Onshore Aquaculture",
    "index": "Crustacean or mollusc breeding or farming (pond or tank)"
  },
  {
    "code": "3604",
    "description": "Fish and Seafood Wholesaling",
    "index": "Crustacean wholesaling (including processed, except canned)"
  },
  {
    "code": "1120",
    "description": "Seafood Processing",
    "index": "Crustacean, processed, manufacturing (including cooked and/or frozen) n.e.c."
  },
  {
    "code": "2010",
    "description": "Glass and Glass Product Manufacturing",
    "index": "Crystal glass manufacturing"
  },
  {
    "code": "1182",
    "description": "Confectionery Manufacturing",
    "index": "Crystallised or glace fruit manufacturing"
  },
  {
    "code": "0122",
    "description": "Vegetable Growing (Under Cover)",
    "index": "Cucumber growing (under cover)"
  },
  {
    "code": "0420",
    "description": "Hunting and Trapping",
    "index": "Culling of wild animals"
  },
  {
    "code": "0121",
    "description": "Mushroom Growing",
    "index": "Cultivated mushroom growing"
  },
  {
    "code": "1912",
    "description": "Rigid and Semi Rigid Polymer Product Manufacturing",
    "index": "Cultured marble surfacing product manufacturing"
  },
  {
    "code": "1913",
    "description": "Polymer Foam Product Manufacturing",
    "index": "Cup, polymeric foam, manufacturing"
  },
  {
    "code": "8220",
    "description": "Educational Support Services",
    "index": "Curriculum development, educational"
  },
  {
    "code": "1320",
    "description": "Leather Tanning and Fur Dressing",
    "index": "Currying hides"
  },
  {
    "code": "9531",
    "description": "Laundry and Dry-Cleaning Services",
    "index": "Curtain and drapery cleaning service"
  },
  {
    "code": "3239",
    "description": "Other Building Installation Services",
    "index": "Curtain installation"
  },
  {
    "code": "1333",
    "description": "Cut and Sewn Textile Product Manufacturing",
    "index": "Curtain manufacturing"
  },
  {
    "code": "4214",
    "description": "Manchester and Other Textile Goods Retailing",
    "index": "Curtain retailing"
  },
  {
    "code": "2223",
    "description": "Architectural Aluminium Product Manufacturing",
    "index": "Curtain wall, aluminium, manufacturing"
  },
  {
    "code": "2229",
    "description": "Other Structural Metal Product Manufacturing",
    "index": "Curtain wall, metal, manufacturing (except aluminium)"
  },
  {
    "code": "1333",
    "description": "Cut and Sewn Textile Product Manufacturing",
    "index": "Cushion manufacturing (except rubber)"
  },
  {
    "code": "0139",
    "description": "Other Fruit and Tree Nut Growing",
    "index": "Custard apple growing"
  },
  {
    "code": "1162",
    "description": "Cereal, Pasta and Baking Mix Manufacturing",
    "index": "Custard powder manufacturing"
  },
  {
    "code": "5291",
    "description": "Customs Agency Services",
    "index": "Custom agency service"
  },
  {
    "code": "5291",
    "description": "Customs Agency Services",
    "index": "Custom clearance service"
  },
  {
    "code": "1340",
    "description": "Knitted Product Manufacturing",
    "index": "Custom knitting of pullovers or cardigans"
  },
  {
    "code": "5102",
    "description": "Courier Pick-up and Delivery Services",
    "index": "Customised express pick-up and delivery service"
  },
  {
    "code": "2591",
    "description": "Jewellery and Silverware Manufacturing",
    "index": "Custom-made jewellery manufacturing"
  },
  {
    "code": "4274",
    "description": "Flower Retailing",
    "index": "Cut flower retailing"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Cutlery manufacturing (except of solid silver or gold)"
  },
  {
    "code": "4213",
    "description": "Houseware Retailing",
    "index": "Cutlery retailing"
  },
  {
    "code": "3733",
    "description": "Kitchen and Dining Ware Wholesaling",
    "index": "Cutlery wholesaling"
  },
  {
    "code": "0142",
    "description": "Beef Cattle Farming (Specialised)",
    "index": "Dairy cattle agistment service"
  },
  {
    "code": "0160",
    "description": "Dairy Cattle Farming",
    "index": "Dairy cattle farming"
  },
  {
    "code": "6620",
    "description": "Farm Animals and Bloodstock Leasing",
    "index": "Dairy cattle leasing (for sharemilking purposes)"
  },
  {
    "code": "0142",
    "description": "Beef Cattle Farming (Specialised)",
    "index": "Dairy cattle replacement farming"
  },
  {
    "code": "0199",
    "description": "Other Livestock Farming n.e.c.",
    "index": "Dairy goat farming"
  },
  {
    "code": "0529",
    "description": "Other Agriculture and Fishing Support Services",
    "index": "Dairy herd testing"
  },
  {
    "code": "1133",
    "description": "Cheese and Other Dairy Product Manufacturing",
    "index": "Dairy product manufacturing n.e.c."
  },
  {
    "code": "3603",
    "description": "Dairy Produce Wholesaling",
    "index": "Dairy product wholesaling"
  },
  {
    "code": "3109",
    "description": "Other Heavy and Civil Engineering Construction",
    "index": "Dam construction"
  },
  {
    "code": "2811",
    "description": "Water Supply",
    "index": "Dam operation (water supply)"
  },
  {
    "code": "9001",
    "description": "Performing Arts Operation",
    "index": "Dance and ballet company operation"
  },
  {
    "code": "8212",
    "description": "Arts Education",
    "index": "Dance and ballet school operation"
  },
  {
    "code": "0414",
    "description": "Fish Trawling, Seining and Netting",
    "index": "Danish seining, fishing"
  },
  {
    "code": "9112",
    "description": "Sport and Physical Recreation Clubs and Sports Professionals",
    "index": "Dart club operation"
  },
  {
    "code": "5921",
    "description": "Data Processing and Web Hosting Services",
    "index": "Data capture imaging service"
  },
  {
    "code": "5921",
    "description": "Data Processing and Web Hosting Services",
    "index": "Data entry service (electronic)"
  },
  {
    "code": "5921",
    "description": "Data Processing and Web Hosting Services",
    "index": "Data processing computer service"
  },
  {
    "code": "2422",
    "description": "Communications Equipment Manufacturing",
    "index": "Data transmission equipment (bridges, gateways, routers e.t.c.) manufacturing"
  },
  {
    "code": "8401",
    "description": "Hospitals (except Psychiatric Hospitals)",
    "index": "Day hospital"
  },
  {
    "code": "7293",
    "description": "Credit Reporting and Debt Collection Services",
    "index": "Debt collection service"
  },
  {
    "code": "3241",
    "description": "Plastering and Ceiling Services",
    "index": "Decorative plaster fixing"
  },
  {
    "code": "0180",
    "description": "Deer Farming",
    "index": "Deer breeding"
  },
  {
    "code": "0180",
    "description": "Deer Farming",
    "index": "Deer farming for venison"
  },
  {
    "code": "0420",
    "description": "Hunting and Trapping",
    "index": "Deer hunting"
  },
  {
    "code": "0180",
    "description": "Deer Farming",
    "index": "Deer velvet production"
  },
  {
    "code": "1192",
    "description": "Prepared Animal and Bird Feed Manufacturing",
    "index": "Dehydrated lucerne manufacturing"
  },
  {
    "code": "3212",
    "description": "Site Preparation Services",
    "index": "Demolition of buildings or other structures"
  },
  {
    "code": "1821",
    "description": "Synthetic Resin and Synthetic Rubber Manufacturing",
    "index": "Dendritic polymer (dendrimer) manufacturing"
  },
  {
    "code": "2412",
    "description": "Medical and Surgical Equipment Manufacturing",
    "index": "Dental amalgam manufacturing"
  },
  {
    "code": "2412",
    "description": "Medical and Surgical Equipment Manufacturing",
    "index": "Dental chair manufacturing (fitted with mechanical device)"
  },
  {
    "code": "9422",
    "description": "Electronic (except Domestic Appliance) and Precision Equipment Repair and Maintenance",
    "index": "Dental equipment repair and maintenance"
  },
  {
    "code": "8531",
    "description": "Dental Services",
    "index": "Dental hospital (out-patient)"
  },
  {
    "code": "8539",
    "description": "Other Allied Health Services",
    "index": "Dental hygiene service"
  },
  {
    "code": "2412",
    "description": "Medical and Surgical Equipment Manufacturing",
    "index": "Dental instrument or equipment manufacturing"
  },
  {
    "code": "3491",
    "description": "Professional and Scientific Goods Wholesaling",
    "index": "Dental instrument or equipment wholesaling"
  },
  {
    "code": "6321",
    "description": "Health Insurance",
    "index": "Dental insurance provision"
  },
  {
    "code": "2412",
    "description": "Medical and Surgical Equipment Manufacturing",
    "index": "Dental plaster or cement manufacturing"
  },
  {
    "code": "8531",
    "description": "Dental Services",
    "index": "Dental practice service"
  },
  {
    "code": "8531",
    "description": "Dental Services",
    "index": "Dental practitioner service"
  },
  {
    "code": "8531",
    "description": "Dental Services",
    "index": "Dental surgery service"
  },
  {
    "code": "9551",
    "description": "Business and Professional Association Services",
    "index": "Dentists' association operation"
  },
  {
    "code": "1851",
    "description": "Cleaning Compound Manufacturing",
    "index": "Denture cleaner manufacturing"
  },
  {
    "code": "2412",
    "description": "Medical and Surgical Equipment Manufacturing",
    "index": "Denture manufacturing"
  },
  {
    "code": "1150",
    "description": "Oil and Fat Manufacturing",
    "index": "Deodorised vegetable oil manufacturing"
  },
  {
    "code": "4260",
    "description": "Department Stores",
    "index": "Department store operation"
  },
  {
    "code": "1852",
    "description": "Cosmetic and Toiletry Preparation Manufacturing",
    "index": "Depilatory manufacturing"
  },
  {
    "code": "6229",
    "description": "Other Depository Financial Intermediation",
    "index": "Depository financial intermediation n.e.c."
  },
  {
    "code": "8512",
    "description": "Specialist Medical Services",
    "index": "Dermatology service"
  },
  {
    "code": "2491",
    "description": "Lifting and Material Handling Equipment Manufacturing",
    "index": "Derrick manufacturing"
  },
  {
    "code": "2811",
    "description": "Water Supply",
    "index": "Desalination plant operation"
  },
  {
    "code": "7292",
    "description": "Document Preparation Services",
    "index": "Desktop publishing (document preparation service)"
  },
  {
    "code": "1199",
    "description": "Other Food Products Manufacturing n.e.c.",
    "index": "Dessert mix, liquid, manufacturing"
  },
  {
    "code": "1162",
    "description": "Cereal, Pasta and Baking Mix Manufacturing",
    "index": "Dessert, dried prepared, manufacturing"
  },
  {
    "code": "7712",
    "description": "Investigation and Security Services",
    "index": "Detective agency service"
  },
  {
    "code": "7714",
    "description": "Correctional and Detention Services",
    "index": "Detention centre operation"
  },
  {
    "code": "1851",
    "description": "Cleaning Compound Manufacturing",
    "index": "Detergent manufacturing"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Detergent, industrial, wholesaling"
  },
  {
    "code": "1892",
    "description": "Explosives Manufacturing",
    "index": "Detonator manufacturing (cap or fuse)"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing",
    "index": "Deuterium gas manufacturing"
  },
  {
    "code": "5514",
    "description": "Postproduction Services and Other Motion Picture and Video Activities",
    "index": "Developing and printing motion picture film"
  },
  {
    "code": "6221",
    "description": "Banking",
    "index": "Development bank operation"
  },
  {
    "code": "1161",
    "description": "Grain Mill Product Manufacturing",
    "index": "Dextrin manufacturing"
  },
  {
    "code": "1161",
    "description": "Grain Mill Product Manufacturing",
    "index": "Dextrose manufacturing (except prepared)"
  },
  {
    "code": "9422",
    "description": "Electronic (except Domestic Appliance) and Precision Equipment Repair and Maintenance",
    "index": "Diagnostic imaging equipment repair and maintenance"
  },
  {
    "code": "8520",
    "description": "Pathology and Diagnostic Imaging Services",
    "index": "Diagnostic imaging service"
  },
  {
    "code": "1841",
    "description": "Human Pharmaceutical and Medicinal Product Manufacturing",
    "index": "Diagnostic substance manufacturing"
  },
  {
    "code": "2591",
    "description": "Jewellery and Silverware Manufacturing",
    "index": "Diamond cutting"
  },
  {
    "code": "0990",
    "description": "Other Non-Metallic Mineral Mining and Quarrying",
    "index": "Diamond mining"
  },
  {
    "code": "2090",
    "description": "Other Non-Metallic Mineral Product Manufacturing",
    "index": "Diamond powder manufacturing"
  },
  {
    "code": "1920",
    "description": "Natural Rubber Product Manufacturing",
    "index": "Diaphragm, natural rubber, manufacturing"
  },
  {
    "code": "5419",
    "description": "Other Publishing (except Software, Music and Internet)",
    "index": "Diary publishing (except internet)"
  },
  {
    "code": "0990",
    "description": "Other Non-Metallic Mineral Mining and Quarrying",
    "index": "Diatomite mining"
  },
  {
    "code": "2141",
    "description": "Non-Ferrous Metal Casting",
    "index": "Die casting, non-ferrous metal, manufacturing n.e.c."
  },
  {
    "code": "2463",
    "description": "Machine Tool and Parts Manufacturing",
    "index": "Die, metalworking, manufacturing (hand or machine tool)"
  },
  {
    "code": "2121",
    "description": "Iron and Steel Casting",
    "index": "Die-casting, steel, manufacturing"
  },
  {
    "code": "2499",
    "description": "Other Machinery and Equipment Manufacturing n.e.c.",
    "index": "Diesel engine manufacturing n.e.c."
  },
  {
    "code": "4000",
    "description": "Fuel Retailing",
    "index": "Diesel oil retailing"
  },
  {
    "code": "3321",
    "description": "Petroleum Product Wholesaling",
    "index": "Diesel oil wholesaling"
  },
  {
    "code": "8539",
    "description": "Other Allied Health Services",
    "index": "Dietician service"
  },
  {
    "code": "9532",
    "description": "Photographic Film Processing",
    "index": "Digital photograph processing"
  },
  {
    "code": "1611",
    "description": "Printing",
    "index": "Digital printing"
  },
  {
    "code": "4221",
    "description": "Electrical, Electronic and Gas Appliance Retailing",
    "index": "Digital versatile disc (DVD) player retailing"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Digital versatile disc (DVD) players wholesaling"
  },
  {
    "code": "4242",
    "description": "Entertainment Media Retailing",
    "index": "Digital versatile disc (DVD) retailing"
  },
  {
    "code": "1620",
    "description": "Reproduction of Recorded Media",
    "index": "Digital video disc (DVD), pre-recorded, reproduction"
  },
  {
    "code": "0919",
    "description": "Other Construction Material Mining",
    "index": "Dimension stone quarrying"
  },
  {
    "code": "2392",
    "description": "Boatbuilding and Repair Services",
    "index": "Dinghy manufacturing"
  },
  {
    "code": "0420",
    "description": "Hunting and Trapping",
    "index": "Dingo hunting or trapping"
  },
  {
    "code": "2511",
    "description": "Wooden Furniture and Upholstered Seat Manufacturing",
    "index": "Dining room furniture, wooden, manufacturing"
  },
  {
    "code": "1912",
    "description": "Rigid and Semi Rigid Polymer Product Manufacturing",
    "index": "Dinnerware, plastic, manufacturing"
  },
  {
    "code": "9540",
    "description": "Religious Services",
    "index": "Diocesan registry operation"
  },
  {
    "code": "2121",
    "description": "Iron and Steel Casting",
    "index": "Direct casting, iron, manufacturing"
  },
  {
    "code": "2121",
    "description": "Iron and Steel Casting",
    "index": "Direct casting, steel, manufacturing"
  },
  {
    "code": "6940",
    "description": "Advertising Services",
    "index": "Direct mail advertising service"
  },
  {
    "code": "4310",
    "description": "Non Store Retailing",
    "index": "Direct mail retailing"
  },
  {
    "code": "2110",
    "description": "Iron Smelting and Steel Manufacturing",
    "index": "Direct reduction iron (DRI) manufacturing"
  },
  {
    "code": "4310",
    "description": "Non Store Retailing",
    "index": "Direct selling of books"
  },
  {
    "code": "4310",
    "description": "Non Store Retailing",
    "index": "Direct selling of cosmetics"
  },
  {
    "code": "4310",
    "description": "Non Store Retailing",
    "index": "Direct selling of goods n.e.c."
  },
  {
    "code": "1090",
    "description": "Other Mining Support Services",
    "index": "Directional drilling and redrilling"
  },
  {
    "code": "5414",
    "description": "Directory and Mailing List Publishing",
    "index": "Directory publishing (except internet)"
  },
  {
    "code": "8790",
    "description": "Other Social Assistance Services",
    "index": "Disabilities assistance service"
  },
  {
    "code": "2512",
    "description": "Metal Furniture Manufacturing",
    "index": "Disassembled furniture, metal, manufacturing"
  },
  {
    "code": "2511",
    "description": "Wooden Furniture and Upholstered Seat Manufacturing",
    "index": "Disassembled furniture, wooden, manufacturing"
  },
  {
    "code": "2511",
    "description": "Wooden Furniture and Upholstered Seat Manufacturing",
    "index": "Disassembled kitchen furniture, wooden, manufacturing"
  },
  {
    "code": "9559",
    "description": "Other Interest Group Services n.e.c.",
    "index": "Disease research (including cancer and heart disease) fundraising"
  },
  {
    "code": "2441",
    "description": "Whiteware Appliance Manufacturing",
    "index": "Dishwasher, domestic, manufacturing"
  },
  {
    "code": "1851",
    "description": "Cleaning Compound Manufacturing",
    "index": "Dishwashing detergent manufacturing"
  },
  {
    "code": "1851",
    "description": "Cleaning Compound Manufacturing",
    "index": "Disinfectant manufacturing"
  },
  {
    "code": "5921",
    "description": "Data Processing and Web Hosting Services",
    "index": "Disk and diskette conversion and recertification service"
  },
  {
    "code": "0115",
    "description": "Floriculture Production (Outdoors)",
    "index": "Display foliage growing (outdoors)"
  },
  {
    "code": "0114",
    "description": "Floriculture Production (Under Cover)",
    "index": "Display foliage growing (under cover)"
  },
  {
    "code": "4274",
    "description": "Flower Retailing",
    "index": "Display foliage retailing"
  },
  {
    "code": "2032",
    "description": "Plaster and Gypsum Product Manufacturing",
    "index": "Display model, plaster, manufacturing"
  },
  {
    "code": "3499",
    "description": "Other Machinery and Equipment Wholesaling n",
    "index": "Display or notice board wholesaling"
  },
  {
    "code": "1524",
    "description": "Sanitary Paper Product Manufacturing",
    "index": "Disposable paper nappy (cellulose-based) manufacturing"
  },
  {
    "code": "4273",
    "description": "Antique and Used Goods Retailing",
    "index": "Disposals retailing"
  },
  {
    "code": "4000",
    "description": "Fuel Retailing",
    "index": "Distillate retailing"
  },
  {
    "code": "3321",
    "description": "Petroleum Product Wholesaling",
    "index": "Distillate wholesaling"
  },
  {
    "code": "3419",
    "description": "Other Specialised Industrial Machinery and Equipment Wholesaling",
    "index": "Distilling equipment wholesaling"
  },
  {
    "code": "2469",
    "description": "Other Specialised Machinery and Equipment Manufacturing",
    "index": "Distilling equipment, beverage, manufacturing"
  },
  {
    "code": "2439",
    "description": "Other Electrical Equipment Manufacturing",
    "index": "Distribution box or board, electricity, manufacturing"
  },
  {
    "code": "3109",
    "description": "Other Heavy and Civil Engineering Construction",
    "index": "Distribution line, electricity or communication, construction"
  },
  {
    "code": "8023",
    "description": "Combined Primary and Secondary Education",
    "index": "District school operation (combined primary/secondary school)"
  },
  {
    "code": "8211",
    "description": "Sports and Physical Recreation Instruction",
    "index": "Diving instruction"
  },
  {
    "code": "6639",
    "description": "Other Goods and Equipment Rental and Hiring n.e.c.",
    "index": "DIY equipment rental"
  },
  {
    "code": "7292",
    "description": "Document Preparation Services",
    "index": "Document editing or proofreading service"
  },
  {
    "code": "1192",
    "description": "Prepared Animal and Bird Feed Manufacturing",
    "index": "Dog and cat biscuit manufacturing"
  },
  {
    "code": "0199",
    "description": "Other Livestock Farming n.e.c.",
    "index": "Dog breeding"
  },
  {
    "code": "9121",
    "description": "Horse and Dog Racing Administration and Track Operation",
    "index": "Dog race course or track operation"
  },
  {
    "code": "4243",
    "description": "Toy and Game Retailing",
    "index": "Doll retailing"
  },
  {
    "code": "2449",
    "description": "Other Domestic Appliance Manufacturing",
    "index": "Domestic appliance manufacturing n.e.c."
  },
  {
    "code": "2010",
    "description": "Glass and Glass Product Manufacturing",
    "index": "Domestic glassware manufacturing"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Door handle, metal, manufacturing"
  },
  {
    "code": "2223",
    "description": "Architectural Aluminium Product Manufacturing",
    "index": "Door or door frame, aluminium, manufacturing"
  },
  {
    "code": "2229",
    "description": "Other Structural Metal Product Manufacturing",
    "index": "Door or door frame, metal, manufacturing (except aluminium)"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Door or window wholesaling"
  },
  {
    "code": "2229",
    "description": "Other Structural Metal Product Manufacturing",
    "index": "Door, fire resistant, manufacturing"
  },
  {
    "code": "1172",
    "description": "Cake and Pastry Manufacturing (Factory-based)",
    "index": "Doughnut manufacturing (factory based)"
  },
  {
    "code": "2292",
    "description": "Nut, Bolt, Screw and Rivet Manufacturing",
    "index": "Dowel pin, metal, manufacturing"
  },
  {
    "code": "3332",
    "description": "Plumbing Goods Wholesaling",
    "index": "Downpipe or guttering wholesaling"
  },
  {
    "code": "2223",
    "description": "Architectural Aluminium Product Manufacturing",
    "index": "Downpipe, aluminium, manufacturing"
  },
  {
    "code": "2462",
    "description": "Mining and Construction Machinery Manufacturing",
    "index": "Dozer, angle dozer, bulldozer manufacturing"
  },
  {
    "code": "6921",
    "description": "Architectural Services",
    "index": "Drafting service, architectural"
  },
  {
    "code": "6923",
    "description": "Engineering Design and Engineering Consulting Services",
    "index": "Drafting service, engineering"
  },
  {
    "code": "3231",
    "description": "Plumbing Services",
    "index": "Drain construction or repairing (except sewerage or stormwater drainage systems)"
  },
  {
    "code": "3491",
    "description": "Professional and Scientific Goods Wholesaling",
    "index": "Draughting instrument wholesaling"
  },
  {
    "code": "1916",
    "description": "Paint and Coatings Manufacturing",
    "index": "Drawing ink manufacturing"
  },
  {
    "code": "3109",
    "description": "Other Heavy and Civil Engineering Construction",
    "index": "Dredging (harbours or rivers)"
  },
  {
    "code": "1413",
    "description": "Timber Resawing and Dressing",
    "index": "Dressed timber or moulding manufacturing"
  },
  {
    "code": "4214",
    "description": "Manchester and Other Textile Goods Retailing",
    "index": "Dressmaking requisites retailing"
  },
  {
    "code": "4274",
    "description": "Flower Retailing",
    "index": "Dried flower retailing"
  },
  {
    "code": "1133",
    "description": "Cheese and Other Dairy Product Manufacturing",
    "index": "Dried ice cream, soft serve or milk shake mix manufacturing"
  },
  {
    "code": "2463",
    "description": "Machine Tool and Parts Manufacturing",
    "index": "Drill, portable electric, manufacturing"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Drilling bit manufacturing (except twist drills)"
  },
  {
    "code": "2462",
    "description": "Mining and Construction Machinery Manufacturing",
    "index": "Drilling machinery manufacturing n.e.c."
  },
  {
    "code": "2463",
    "description": "Machine Tool and Parts Manufacturing",
    "index": "Drilling machinery, woodworking or metalworking, manufacturing"
  },
  {
    "code": "1182",
    "description": "Confectionery Manufacturing",
    "index": "Drinking chocolate manufacturing"
  },
  {
    "code": "1912",
    "description": "Rigid and Semi Rigid Polymer Product Manufacturing",
    "index": "Drinking fountain, plastic, manufacturing"
  },
  {
    "code": "2010",
    "description": "Glass and Glass Product Manufacturing",
    "index": "Drinking glass manufacturing"
  },
  {
    "code": "5513",
    "description": "Motion Picture Exhibition",
    "index": "Drive-in theatre operation"
  },
  {
    "code": "8219",
    "description": "Adult, Community and Other Education n.e.c.",
    "index": "Driving school operation"
  },
  {
    "code": "1841",
    "description": "Human Pharmaceutical and Medicinal Product Manufacturing",
    "index": "Drug manufacturing (except veterinary)"
  },
  {
    "code": "4271",
    "description": "Pharmaceutical, Cosmetic and Toiletry Goods Retailing",
    "index": "Drug retailing"
  },
  {
    "code": "3720",
    "description": "Pharmaceutical and Toiletry Goods Wholesaling",
    "index": "Drug wholesaling"
  },
  {
    "code": "2239",
    "description": "Other Metal Container Manufacturing",
    "index": "Drum, metal, manufacturing"
  },
  {
    "code": "2439",
    "description": "Other Electrical Equipment Manufacturing",
    "index": "Dry cell battery manufacturing"
  },
  {
    "code": "4229",
    "description": "Other Electrical and Electronic Goods Retailing",
    "index": "Dry cell battery retailing"
  },
  {
    "code": "1899",
    "description": "Other Basic Chemical Product Manufacturing n.e.c.",
    "index": "Dry cleaning compound manufacturing"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing",
    "index": "Dry ice manufacturing"
  },
  {
    "code": "2033",
    "description": "Ready-Mixed Concrete Manufacturing",
    "index": "Dry mix concrete manufacturing"
  },
  {
    "code": "9531",
    "description": "Laundry and Dry-Cleaning Services",
    "index": "Dry-cleaning agency operation"
  },
  {
    "code": "2469",
    "description": "Other Specialised Machinery and Equipment Manufacturing",
    "index": "Dry-cleaning machinery manufacturing"
  },
  {
    "code": "3419",
    "description": "Other Specialised Industrial Machinery and Equipment Wholesaling",
    "index": "Dry-cleaning machinery or equipment wholesaling"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Dry-cleaning preparation wholesaling"
  },
  {
    "code": "9531",
    "description": "Laundry and Dry-Cleaning Services",
    "index": "Dry-cleaning service"
  },
  {
    "code": "2391",
    "description": "Shipbuilding and Repair Services",
    "index": "Drydock operation"
  },
  {
    "code": "0171",
    "description": "Poultry Farming (Meat)",
    "index": "Duck farming"
  },
  {
    "code": "7311",
    "description": "Buildings Cleaning Services",
    "index": "Duct cleaning"
  },
  {
    "code": "2240",
    "description": "Other Sheet Metal Product Manufacturing",
    "index": "Duct work, air conditioning, manufacturing"
  },
  {
    "code": "2240",
    "description": "Other Sheet Metal Product Manufacturing",
    "index": "Duct, sheet metal, manufacturing"
  },
  {
    "code": "1920",
    "description": "Natural Rubber Product Manufacturing",
    "index": "Dummy, natural rubber, manufacturing"
  },
  {
    "code": "3019",
    "description": "Other Residential Building Construction",
    "index": "Duplex house construction"
  },
  {
    "code": "4279",
    "description": "Other Store-Based Retailing n.e.c.",
    "index": "Duty free store operation"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Dyestuff wholesaling"
  },
  {
    "code": "1892",
    "description": "Explosives Manufacturing",
    "index": "Dynamite manufacturing"
  },
  {
    "code": "2439",
    "description": "Other Electrical Equipment Manufacturing",
    "index": "Dynamo manufacturing n.e.c."
  },
  {
    "code": "8401",
    "description": "Hospitals (except Psychiatric Hospitals)",
    "index": "Ear, nose and throat hospital"
  },
  {
    "code": "8512",
    "description": "Specialist Medical Services",
    "index": "Ear, nose and throat specialist service"
  },
  {
    "code": "2429",
    "description": "Other Electronic Equipment Manufacturing",
    "index": "Earphone manufacturing"
  },
  {
    "code": "0919",
    "description": "Other Construction Material Mining",
    "index": "Earth, soil or filling quarrying"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Earthenware construction good wholesaling"
  },
  {
    "code": "2029",
    "description": "Other Ceramic Product Manufacturing",
    "index": "Earthenware, table or kitchen, manufacturing"
  },
  {
    "code": "3212",
    "description": "Site Preparation Services",
    "index": "Earthmoving"
  },
  {
    "code": "2462",
    "description": "Mining and Construction Machinery Manufacturing",
    "index": "Earthmoving machinery manufacturing"
  },
  {
    "code": "3411",
    "description": "Agricultural and Construction Machinery Wholesaling",
    "index": "Earthmoving machinery wholesaling"
  },
  {
    "code": "3212",
    "description": "Site Preparation Services",
    "index": "Earthmoving plant and equipment hiring with operator"
  },
  {
    "code": "6910",
    "description": "Scientific Research Services",
    "index": "Economic research service"
  },
  {
    "code": "1150",
    "description": "Oil and Fat Manufacturing",
    "index": "Edible oil or fat, blended, manufacturing"
  },
  {
    "code": "8220",
    "description": "Educational Support Services",
    "index": "Educational support services n.e.c."
  },
  {
    "code": "6962",
    "description": "Management Advice and Other Consulting Services",
    "index": "Efficiency advisory service"
  },
  {
    "code": "3609",
    "description": "Other Grocery Wholesaling",
    "index": "Egg and egg product wholesaling"
  },
  {
    "code": "0172",
    "description": "Poultry Farming (Eggs)",
    "index": "Egg farm operation"
  },
  {
    "code": "1199",
    "description": "Other Food Products Manufacturing n.e.c.",
    "index": "Egg pulping or drying"
  },
  {
    "code": "3711",
    "description": "Textile Product Wholesaling",
    "index": "Elasticised fabrics wholesaling"
  },
  {
    "code": "6639",
    "description": "Other Goods and Equipment Rental and Hiring n.e.c.",
    "index": "Electric and electronic appliance rental"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Electric fitting dealing (wholesaling) n.e.c."
  },
  {
    "code": "4229",
    "description": "Other Electrical and Electronic Goods Retailing",
    "index": "Electric light fittings retailing"
  },
  {
    "code": "3232",
    "description": "Electrical Services",
    "index": "Electric light installation"
  },
  {
    "code": "2439",
    "description": "Other Electrical Equipment Manufacturing",
    "index": "Electric motor manufacturing n.e.c."
  },
  {
    "code": "9429",
    "description": "Other Machinery and Equipment Repair and Maintenance",
    "index": "Electric motor repair and maintenance, including armature rewinding (except factory based)"
  },
  {
    "code": "2439",
    "description": "Other Electrical Equipment Manufacturing",
    "index": "Electric motor rewinding"
  },
  {
    "code": "2449",
    "description": "Other Domestic Appliance Manufacturing",
    "index": "Electric toothbrush manufacturing"
  },
  {
    "code": "3232",
    "description": "Electrical Services",
    "index": "Electric wiring installation"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Electrical distribution equipment wholesaling"
  },
  {
    "code": "6923",
    "description": "Engineering Design and Engineering Consulting Services",
    "index": "Electrical engineering consulting service"
  },
  {
    "code": "2439",
    "description": "Other Electrical Equipment Manufacturing",
    "index": "Electrical equipment or machinery manufacturing n.e.c."
  },
  {
    "code": "9429",
    "description": "Other Machinery and Equipment Repair and Maintenance",
    "index": "Electrical generating and transmission equipment repair and maintenance"
  },
  {
    "code": "4229",
    "description": "Other Electrical and Electronic Goods Retailing",
    "index": "Electrical goods retailing n.e.c."
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Electrical goods wholesaling n.e.c."
  },
  {
    "code": "3232",
    "description": "Electrical Services",
    "index": "Electrical installation work (e.g. switchboards, circuit breakers, e.t.c.)"
  },
  {
    "code": "1912",
    "description": "Rigid and Semi Rigid Polymer Product Manufacturing",
    "index": "Electrical insulation box, polymer, manufacturing"
  },
  {
    "code": "3109",
    "description": "Other Heavy and Civil Engineering Construction",
    "index": "Electrical machinery, heavy, installation (on-site assembly)"
  },
  {
    "code": "9422",
    "description": "Electronic (except Domestic Appliance) and Precision Equipment Repair and Maintenance",
    "index": "Electrical measuring instrument repair and maintenance"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Electrical measuring or testing instrument wholesaling"
  },
  {
    "code": "9411",
    "description": "Automotive Electrical Services",
    "index": "Electrical repair (automotive)"
  },
  {
    "code": "2419",
    "description": "Other Professional and Scientific Equipment Manufacturing",
    "index": "Electricity and electric signal testing equipment manufacturing"
  },
  {
    "code": "2630",
    "description": "Electricity Distribution",
    "index": "Electricity distribution"
  },
  {
    "code": "2619",
    "description": "Other Electricity Generation",
    "index": "Electricity generation n.e.c."
  },
  {
    "code": "2611",
    "description": "Fossil Fuel Electricity Generation",
    "index": "Electricity generation using coal or coal derived products"
  },
  {
    "code": "2611",
    "description": "Fossil Fuel Electricity Generation",
    "index": "Electricity generation using mineral gas including coal gas"
  },
  {
    "code": "2611",
    "description": "Fossil Fuel Electricity Generation",
    "index": "Electricity generation using mineral oil or mineral oil derived products"
  },
  {
    "code": "2611",
    "description": "Fossil Fuel Electricity Generation",
    "index": "Electricity generation using other mineral fuels"
  },
  {
    "code": "2640",
    "description": "On Selling Electricity and Electricity Market Operation",
    "index": "Electricity market operation"
  },
  {
    "code": "3109",
    "description": "Other Heavy and Civil Engineering Construction",
    "index": "Electricity power plant construction (except buildings)"
  },
  {
    "code": "2640",
    "description": "On Selling Electricity and Electricity Market Operation",
    "index": "Electricity retailing"
  },
  {
    "code": "2620",
    "description": "Electricity Transmission",
    "index": "Electricity sub-station operation"
  },
  {
    "code": "2620",
    "description": "Electricity Transmission",
    "index": "Electricity transmission"
  },
  {
    "code": "2640",
    "description": "On Selling Electricity and Electricity Market Operation",
    "index": "Electricity wholesaling"
  },
  {
    "code": "0803",
    "description": "Copper Ore Mining",
    "index": "Electro won copper production"
  },
  {
    "code": "9511",
    "description": "Hairdressing and Beauty Services",
    "index": "Electrolysis service"
  },
  {
    "code": "2132",
    "description": "Aluminium Smelting",
    "index": "Electrolytic aluminium manufacturing"
  },
  {
    "code": "2133",
    "description": "Copper, Silver, Lead, and Zinc Smelting and Refining",
    "index": "Electrolytic copper manufacturing"
  },
  {
    "code": "2133",
    "description": "Copper, Silver, Lead, and Zinc Smelting and Refining",
    "index": "Electrolytic zinc manufacturing"
  },
  {
    "code": "2412",
    "description": "Medical and Surgical Equipment Manufacturing",
    "index": "Electromedical equipment manufacturing"
  },
  {
    "code": "4221",
    "description": "Electrical, Electronic and Gas Appliance Retailing",
    "index": "Electronic beeper retailing"
  },
  {
    "code": "2429",
    "description": "Other Electronic Equipment Manufacturing",
    "index": "Electronic circuit component manufacturing"
  },
  {
    "code": "5921",
    "description": "Data Processing and Web Hosting Services",
    "index": "Electronic data processing service"
  },
  {
    "code": "6923",
    "description": "Engineering Design and Engineering Consulting Services",
    "index": "Electronic engineering consulting service"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Electronic good wholesaling n.e.c."
  },
  {
    "code": "4229",
    "description": "Other Electrical and Electronic Goods Retailing",
    "index": "Electronic goods retailing n.e.c."
  },
  {
    "code": "5922",
    "description": "Electronic Information Storage Services",
    "index": "Electronic information storage and retrieval service (except library service)"
  },
  {
    "code": "2432",
    "description": "Electric Lighting Equipment Manufacturing",
    "index": "Element, electrical, manufacturing"
  },
  {
    "code": "3101",
    "description": "Road and Bridge Construction",
    "index": "Elevated highway construction"
  },
  {
    "code": "2491",
    "description": "Lifting and Material Handling Equipment Manufacturing",
    "index": "Elevator manufacturing"
  },
  {
    "code": "3239",
    "description": "Other Building Installation Services",
    "index": "Elevator, escalator or lift installation"
  },
  {
    "code": "0804",
    "description": "Gold Ore Mining",
    "index": "Eluvial gold mining"
  },
  {
    "code": "1899",
    "description": "Other Basic Chemical Product Manufacturing n.e.c.",
    "index": "Embalming compound manufacturing (formaldehyde and additives)"
  },
  {
    "code": "9520",
    "description": "Funeral, Crematorium and Cemetery Services",
    "index": "Embalming service"
  },
  {
    "code": "7551",
    "description": "Domestic Government Representation",
    "index": "Embassy operation (domestic government)"
  },
  {
    "code": "7552",
    "description": "Foreign Government Representation",
    "index": "Embassy operation (foreign government)"
  },
  {
    "code": "1320",
    "description": "Leather Tanning and Fur Dressing",
    "index": "Embossing hides and skins"
  },
  {
    "code": "1334",
    "description": "Textile Finishing and Other Textile Product Manufacturing",
    "index": "Embroidered apparel manufacturing"
  },
  {
    "code": "1334",
    "description": "Textile Finishing and Other Textile Product Manufacturing",
    "index": "Embroidered fabric manufacturing"
  },
  {
    "code": "7713",
    "description": "Fire Protection and Other Emergency Services (except Ambulance Services)",
    "index": "Emergency service (other than defence and police)"
  },
  {
    "code": "9552",
    "description": "Labour Association Services",
    "index": "Employees' association operation"
  },
  {
    "code": "9551",
    "description": "Business and Professional Association Services",
    "index": "Employers' association operation"
  },
  {
    "code": "7211",
    "description": "Employment Placement and Recruitment Services",
    "index": "Employment agency operation"
  },
  {
    "code": "7211",
    "description": "Employment Placement and Recruitment Services",
    "index": "Employment recruitment service"
  },
  {
    "code": "7211",
    "description": "Employment Placement and Recruitment Services",
    "index": "Employment registry operation"
  },
  {
    "code": "0199",
    "description": "Other Livestock Farming n.e.c.",
    "index": "Emu farming"
  },
  {
    "code": "1851",
    "description": "Cleaning Compound Manufacturing",
    "index": "Emulsifier manufacturing"
  },
  {
    "code": "1709",
    "description": "Other Petroleum and Coal Product Manufacturing",
    "index": "Emulsion, bituminous, manufacturing"
  },
  {
    "code": "1916",
    "description": "Paint and Coatings Manufacturing",
    "index": "Enamel manufacturing"
  },
  {
    "code": "2293",
    "description": "Metal Coating and Finishing",
    "index": "Enamelling of metal"
  },
  {
    "code": "4213",
    "description": "Houseware Retailing",
    "index": "Enamelware retailing"
  },
  {
    "code": "3733",
    "description": "Kitchen and Dining Ware Wholesaling",
    "index": "Enamelware wholesaling"
  },
  {
    "code": "5413",
    "description": "Book Publishing",
    "index": "Encyclopaedia publishing (except internet)"
  },
  {
    "code": "8531",
    "description": "Dental Services",
    "index": "Endodontic service"
  },
  {
    "code": "1211",
    "description": "Soft Drink, Cordial and Syrup Manufacturing",
    "index": "Energy drink manufacturing"
  },
  {
    "code": "4000",
    "description": "Fuel Retailing",
    "index": "Engine oil retailing"
  },
  {
    "code": "9429",
    "description": "Other Machinery and Equipment Repair and Maintenance",
    "index": "Engine repair (except automotive)"
  },
  {
    "code": "9419",
    "description": "Other Automotive Repair and Maintenance",
    "index": "Engine repair or reconditioning (automotive, except factory reconditioning)"
  },
  {
    "code": "2499",
    "description": "Other Machinery and Equipment Manufacturing n.e.c.",
    "index": "Engine, internal combustion, manufacturing n.e.c."
  },
  {
    "code": "6923",
    "description": "Engineering Design and Engineering Consulting Services",
    "index": "Engineering consulting service n.e.c."
  },
  {
    "code": "6922",
    "description": "Surveying and Mapping Services",
    "index": "Engineering surveying service"
  },
  {
    "code": "9551",
    "description": "Business and Professional Association Services",
    "index": "Engineers' association operation (except trade union)"
  },
  {
    "code": "1171",
    "description": "Bread Manufacturing (Factory-based)",
    "index": "English muffin manufacturing (factory based)"
  },
  {
    "code": "2293",
    "description": "Metal Coating and Finishing",
    "index": "Engraving on metal (except process or photographic)"
  },
  {
    "code": "7712",
    "description": "Investigation and Security Services",
    "index": "Enquiry agency service"
  },
  {
    "code": "9003",
    "description": "Performing Arts Venue Operation",
    "index": "Entertainment centre operation"
  },
  {
    "code": "6962",
    "description": "Management Advice and Other Consulting Services",
    "index": "Environmental consulting service"
  },
  {
    "code": "4241",
    "description": "Sport and Camping Equipment Retailing",
    "index": "Equestrian equipment retailing"
  },
  {
    "code": "2491",
    "description": "Lifting and Material Handling Equipment Manufacturing",
    "index": "Escalator or escalator parts manufacturing"
  },
  {
    "code": "9534",
    "description": "Brothel Keeping and Prostitution Services",
    "index": "Escort service (prostitution)"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing",
    "index": "Ethane gas manufacturing"
  },
  {
    "code": "1812",
    "description": "Basic Organic Chemical Manufacturing",
    "index": "Ethanol manufacturing"
  },
  {
    "code": "1812",
    "description": "Basic Organic Chemical Manufacturing",
    "index": "Ether manufacturing"
  },
  {
    "code": "1829",
    "description": "Other Basic Polymer Manufacturing",
    "index": "Ethyl cellulose manufacturing"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing",
    "index": "Ethylene gas manufacturing"
  },
  {
    "code": "1812",
    "description": "Basic Organic Chemical Manufacturing",
    "index": "Ethylene glycol manufacturing"
  },
  {
    "code": "1899",
    "description": "Other Basic Chemical Product Manufacturing n.e.c.",
    "index": "Eucalyptus oil distilling"
  },
  {
    "code": "1133",
    "description": "Cheese and Other Dairy Product Manufacturing",
    "index": "Evaporated milk manufacturing"
  },
  {
    "code": "7299",
    "description": "Other Administrative Services n.e.c.",
    "index": "Event management service"
  },
  {
    "code": "3212",
    "description": "Site Preparation Services",
    "index": "Excavation"
  },
  {
    "code": "3411",
    "description": "Agricultural and Construction Machinery Wholesaling",
    "index": "Excavation machinery wholesaling"
  },
  {
    "code": "7211",
    "description": "Employment Placement and Recruitment Services",
    "index": "Executive placement service"
  },
  {
    "code": "6419",
    "description": "Other Auxiliary Finance and Investment Services",
    "index": "Executor service"
  },
  {
    "code": "9419",
    "description": "Other Automotive Repair and Maintenance",
    "index": "Exhaust system or muffler repair (automotive)"
  },
  {
    "code": "2090",
    "description": "Other Non-Metallic Mineral Product Manufacturing",
    "index": "Expanded non-metallic mineral manufacturing"
  },
  {
    "code": "2292",
    "description": "Nut, Bolt, Screw and Rivet Manufacturing",
    "index": "Expansion bolt, metal, manufacturing"
  },
  {
    "code": "1892",
    "description": "Explosives Manufacturing",
    "index": "Explosive fuse manufacturing"
  },
  {
    "code": "2463",
    "description": "Machine Tool and Parts Manufacturing",
    "index": "Explosive powered tool manufacturing (except for construction work)"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Explosive wholesaling (except ammunition)"
  },
  {
    "code": "3212",
    "description": "Site Preparation Services",
    "index": "Explosives laying"
  },
  {
    "code": "3800",
    "description": "Commission Based Wholesaling",
    "index": "Export agent, wholesaler"
  },
  {
    "code": "5291",
    "description": "Customs Agency Services",
    "index": "Export documentation preparation service"
  },
  {
    "code": "2031",
    "description": "Cement and Lime Manufacturing",
    "index": "Exterior cement-based cladding manufacturing"
  },
  {
    "code": "7312",
    "description": "Buildings Pest Control Services",
    "index": "Exterminating service (except agricultural and forestry)"
  },
  {
    "code": "1812",
    "description": "Basic Organic Chemical Manufacturing",
    "index": "Extraction and/or distillation of wood and gum"
  },
  {
    "code": "1899",
    "description": "Other Basic Chemical Product Manufacturing n.e.c.",
    "index": "Extraction of essential oils"
  },
  {
    "code": "8401",
    "description": "Hospitals (except Psychiatric Hospitals)",
    "index": "Eye hospital"
  },
  {
    "code": "1852",
    "description": "Cosmetic and Toiletry Preparation Manufacturing",
    "index": "Eye shadow manufacturing"
  },
  {
    "code": "8532",
    "description": "Optometry and Optical Dispensing",
    "index": "Eye testing (optometrist)"
  },
  {
    "code": "2240",
    "description": "Other Sheet Metal Product Manufacturing",
    "index": "Eyelet, metal, manufacturing"
  },
  {
    "code": "4214",
    "description": "Manchester and Other Textile Goods Retailing",
    "index": "Fabric, textile, retailing"
  },
  {
    "code": "3711",
    "description": "Textile Product Wholesaling",
    "index": "Fabric, textile, wholesaling"
  },
  {
    "code": "1313",
    "description": "Synthetic Fibre Textile Manufacturing",
    "index": "Fabric, woven, manufacturing (elastic or elastomeric)"
  },
  {
    "code": "1313",
    "description": "Synthetic Fibre Textile Manufacturing",
    "index": "Fabric, woven, manufacturing (predominantly of synthetic fibre)"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Fabricated metal product manufacturing n.e.c."
  },
  {
    "code": "2221",
    "description": "Structural Steel Fabricating",
    "index": "Fabricated structural steel manufacturing (ready-made parts for structures)"
  },
  {
    "code": "1852",
    "description": "Cosmetic and Toiletry Preparation Manufacturing",
    "index": "Face cream and lotion manufacturing"
  },
  {
    "code": "1524",
    "description": "Sanitary Paper Product Manufacturing",
    "index": "Facial tissue manufacturing"
  },
  {
    "code": "9422",
    "description": "Electronic (except Domestic Appliance) and Precision Equipment Repair and Maintenance",
    "index": "Facsimile (fax) machine repair and maintenance"
  },
  {
    "code": "3493",
    "description": "Telecommunication Goods Wholesaling",
    "index": "Facsimile (fax) machine wholesaling"
  },
  {
    "code": "2319",
    "description": "Other Motor Vehicle Parts Manufacturing",
    "index": "Factory reconditioning of changeover motors"
  },
  {
    "code": "6712",
    "description": "Non-Residential Property Operators",
    "index": "Factory renting or leasing"
  },
  {
    "code": "8710",
    "description": "Child Care Services",
    "index": "Family day care service"
  },
  {
    "code": "2449",
    "description": "Other Domestic Appliance Manufacturing",
    "index": "Fan, domestic electric, manufacturing"
  },
  {
    "code": "4221",
    "description": "Electrical, Electronic and Gas Appliance Retailing",
    "index": "Fan, electric, retailing"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Fan, electric, wholesaling"
  },
  {
    "code": "2499",
    "description": "Other Machinery and Equipment Manufacturing n.e.c.",
    "index": "Fan, industrial, manufacturing"
  },
  {
    "code": "6620",
    "description": "Farm Animals and Bloodstock Leasing",
    "index": "Farm animal leasing"
  },
  {
    "code": "0529",
    "description": "Other Agriculture and Fishing Support Services",
    "index": "Farm irrigation service"
  },
  {
    "code": "3319",
    "description": "Other Agricultural Product Wholesaling",
    "index": "Farm produce wholesaling n.e.c."
  },
  {
    "code": "2231",
    "description": "Boiler, Tank and Other Heavy Gauge Metal Container Manufacturing",
    "index": "Farm storage tank, metal, manufacturing"
  },
  {
    "code": "9551",
    "description": "Business and Professional Association Services",
    "index": "Farmers' association operation"
  },
  {
    "code": "2223",
    "description": "Architectural Aluminium Product Manufacturing",
    "index": "Fascia, aluminium, manufacturing"
  },
  {
    "code": "2229",
    "description": "Other Structural Metal Product Manufacturing",
    "index": "Fascia, metal, manufacturing (except aluminium)"
  },
  {
    "code": "6924",
    "description": "Other Specialised Design Services",
    "index": "Fashion design service"
  },
  {
    "code": "8922",
    "description": "Nature Reserves and Conservation Parks Operation",
    "index": "Fauna reserve operation (fauna not actively managed)"
  },
  {
    "code": "3319",
    "description": "Other Agricultural Product Wholesaling",
    "index": "Feed wholesaling"
  },
  {
    "code": "0139",
    "description": "Other Fruit and Tree Nut Growing",
    "index": "Feijoa growing"
  },
  {
    "code": "2090",
    "description": "Other Non-Metallic Mineral Product Manufacturing",
    "index": "Feldspar, ground, manufacturing"
  },
  {
    "code": "1320",
    "description": "Leather Tanning and Fur Dressing",
    "index": "Fellmongery operation"
  },
  {
    "code": "0990",
    "description": "Other Non-Metallic Mineral Mining and Quarrying",
    "index": "Felspar quarrying"
  },
  {
    "code": "1334",
    "description": "Textile Finishing and Other Textile Product Manufacturing",
    "index": "Felt manufacturing"
  },
  {
    "code": "3711",
    "description": "Textile Product Wholesaling",
    "index": "Felt wholesaling (except floor coverings)"
  },
  {
    "code": "3291",
    "description": "Landscape Construction Services",
    "index": "Fence construction"
  },
  {
    "code": "2291",
    "description": "Spring and Wire Product Manufacturing",
    "index": "Fence dropper, wire, manufacturing"
  },
  {
    "code": "2291",
    "description": "Spring and Wire Product Manufacturing",
    "index": "Fence post or dropper, rolled steel, manufacturing"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Fence post wholesaling (except timber)"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Fencing wire wholesaling"
  },
  {
    "code": "2110",
    "description": "Iron Smelting and Steel Manufacturing",
    "index": "Ferro-alloy manufacturing (including, manganese, silicon or chrome)"
  },
  {
    "code": "4820",
    "description": "Water Passenger Transport",
    "index": "Ferry operation, including vehicular"
  },
  {
    "code": "1831",
    "description": "Fertiliser Manufacturing",
    "index": "Fertiliser manufacturing n.e.c."
  },
  {
    "code": "4232",
    "description": "Garden Supplies Retailing",
    "index": "Fertiliser retailing"
  },
  {
    "code": "0529",
    "description": "Other Agriculture and Fishing Support Services",
    "index": "Fertiliser spreading (including aerial)"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Fertiliser wholesaling"
  },
  {
    "code": "5513",
    "description": "Motion Picture Exhibition",
    "index": "Festival operation (exhibition of motion pictures)"
  },
  {
    "code": "2031",
    "description": "Cement and Lime Manufacturing",
    "index": "Fibre cement exterior wall manufacturing"
  },
  {
    "code": "1494",
    "description": "Reconstituted Wood Product Manufacturing",
    "index": "Fibreboard manufacturing"
  },
  {
    "code": "1313",
    "description": "Synthetic Fibre Textile Manufacturing",
    "index": "Fibreglass fabric manufacturing"
  },
  {
    "code": "2519",
    "description": "Other Furniture Manufacturing",
    "index": "Fibreglass furniture manufacturing"
  },
  {
    "code": "3241",
    "description": "Plastering and Ceiling Services",
    "index": "Fibrous plaster fixing or finishing"
  },
  {
    "code": "2032",
    "description": "Plaster and Gypsum Product Manufacturing",
    "index": "Fibrous plaster product manufacturing"
  },
  {
    "code": "0149",
    "description": "Other Grain Growing",
    "index": "Field pea or field bean growing"
  },
  {
    "code": "0139",
    "description": "Other Fruit and Tree Nut Growing",
    "index": "Fig growing"
  },
  {
    "code": "2512",
    "description": "Metal Furniture Manufacturing",
    "index": "Filing cabinet, metal, manufacturing"
  },
  {
    "code": "1916",
    "description": "Paint and Coatings Manufacturing",
    "index": "Filler and putty manufacturing (including spray forms)"
  },
  {
    "code": "6010",
    "description": "Libraries and Archives",
    "index": "Film archive operation"
  },
  {
    "code": "9532",
    "description": "Photographic Film Processing",
    "index": "Film developing and printing (except motion picture)"
  },
  {
    "code": "5512",
    "description": "Motion Picture and Video Distribution",
    "index": "Film distribution"
  },
  {
    "code": "5514",
    "description": "Postproduction Services and Other Motion Picture and Video Activities",
    "index": "Film or tape closed captioning"
  },
  {
    "code": "5514",
    "description": "Postproduction Services and Other Motion Picture and Video Activities",
    "index": "Film or video transfer service"
  },
  {
    "code": "1911",
    "description": "Polymer Film and Sheet Packaging Material Manufacturing",
    "index": "Film, plastic, manufacturing"
  },
  {
    "code": "2469",
    "description": "Other Specialised Machinery and Equipment Manufacturing",
    "index": "Filter manufacturing (food processing machinery)"
  },
  {
    "code": "2499",
    "description": "Other Machinery and Equipment Manufacturing n.e.c.",
    "index": "Filter, internal combustion engine, manufacturing"
  },
  {
    "code": "6419",
    "description": "Other Auxiliary Finance and Investment Services",
    "index": "Finance consultant service"
  },
  {
    "code": "7510",
    "description": "Central Government Administration",
    "index": "Financial and economic management except banking (central government)"
  },
  {
    "code": "7530",
    "description": "Local Government Administration",
    "index": "Financial and economic management except banking (local government)"
  },
  {
    "code": "7520",
    "description": "State Government Administration",
    "index": "Financial and economic management except banking (state government)"
  },
  {
    "code": "6411",
    "description": "Financial Asset Broking Services",
    "index": "Financial asset broking service (on a commission or transaction fee basis)"
  },
  {
    "code": "6419",
    "description": "Other Auxiliary Finance and Investment Services",
    "index": "Financial asset investment consultant service"
  },
  {
    "code": "6210",
    "description": "Central Banking",
    "index": "Financial regulatory service"
  },
  {
    "code": "0202",
    "description": "Caged (Offshore) Aquaculture",
    "index": "Finfish farming (caged)"
  },
  {
    "code": "0414",
    "description": "Fish Trawling, Seining and Netting",
    "index": "Finfish trawling"
  },
  {
    "code": "1492",
    "description": "Wooden Structural Fittings and Components Manufacturing",
    "index": "Finger-jointing manufacturing"
  },
  {
    "code": "1320",
    "description": "Leather Tanning and Fur Dressing",
    "index": "Finishing hides and skins"
  },
  {
    "code": "2429",
    "description": "Other Electronic Equipment Manufacturing",
    "index": "Fire alarm apparatus manufacturing"
  },
  {
    "code": "3234",
    "description": "Fire and Security Alarm Installation Services",
    "index": "Fire alarm system installation"
  },
  {
    "code": "7713",
    "description": "Fire Protection and Other Emergency Services (except Ambulance Services)",
    "index": "Fire brigade service"
  },
  {
    "code": "2229",
    "description": "Other Structural Metal Product Manufacturing",
    "index": "Fire escape, prefabricated metal, manufacturing (except aluminium)"
  },
  {
    "code": "7713",
    "description": "Fire Protection and Other Emergency Services (except Ambulance Services)",
    "index": "Fire fighting service"
  },
  {
    "code": "6322",
    "description": "General Insurance",
    "index": "Fire insurance provision"
  },
  {
    "code": "7713",
    "description": "Fire Protection and Other Emergency Services (except Ambulance Services)",
    "index": "Fire prevention service"
  },
  {
    "code": "3499",
    "description": "Other Machinery and Equipment Wholesaling n",
    "index": "Fire protection equipment, wholesaling"
  },
  {
    "code": "3234",
    "description": "Fire and Security Alarm Installation Services",
    "index": "Fire sprinkler installation"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Fire sprinkler manufacturing"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Firearm manufacturing"
  },
  {
    "code": "2312",
    "description": "Motor Vehicle Body and Trailer Manufacturing",
    "index": "Firetruck converting"
  },
  {
    "code": "0302",
    "description": "Logging",
    "index": "Firewood cutting (forest)"
  },
  {
    "code": "4279",
    "description": "Other Store-Based Retailing n.e.c.",
    "index": "Firewood retailing"
  },
  {
    "code": "3739",
    "description": "Other Goods Wholesaling n.e.c.",
    "index": "Firewood wholesaling"
  },
  {
    "code": "4279",
    "description": "Other Store-Based Retailing n.e.c.",
    "index": "Firework retailing"
  },
  {
    "code": "1892",
    "description": "Explosives Manufacturing",
    "index": "Fireworks manufacturing"
  },
  {
    "code": "2412",
    "description": "Medical and Surgical Equipment Manufacturing",
    "index": "First aid equipment manufacturing"
  },
  {
    "code": "0203",
    "description": "Onshore Aquaculture",
    "index": "Fish breeding or farming (pond or tank)"
  },
  {
    "code": "1120",
    "description": "Seafood Processing",
    "index": "Fish cleaning or filleting"
  },
  {
    "code": "1120",
    "description": "Seafood Processing",
    "index": "Fish fillet manufacturing"
  },
  {
    "code": "0203",
    "description": "Onshore Aquaculture",
    "index": "Fish hatchery operation"
  },
  {
    "code": "1120",
    "description": "Seafood Processing",
    "index": "Fish loaf or cake manufacturing"
  },
  {
    "code": "1332",
    "description": "Rope, Cordage and Twine Manufacturing",
    "index": "Fish net manufacturing"
  },
  {
    "code": "1150",
    "description": "Oil and Fat Manufacturing",
    "index": "Fish or other marine animal oil or meal manufacturing"
  },
  {
    "code": "1120",
    "description": "Seafood Processing",
    "index": "Fish paste manufacturing"
  },
  {
    "code": "1120",
    "description": "Seafood Processing",
    "index": "Fish pate manufacturing"
  },
  {
    "code": "3604",
    "description": "Fish and Seafood Wholesaling",
    "index": "Fish wholesaling"
  },
  {
    "code": "1120",
    "description": "Seafood Processing",
    "index": "Fish, canned, manufacturing"
  },
  {
    "code": "1120",
    "description": "Seafood Processing",
    "index": "Fish, dried or smoked, manufacturing"
  },
  {
    "code": "4121",
    "description": "Fresh Meat, Fish and Poultry Retailing",
    "index": "Fish, fresh, retailing"
  },
  {
    "code": "0529",
    "description": "Other Agriculture and Fishing Support Services",
    "index": "Fishing support service"
  },
  {
    "code": "2592",
    "description": "Toy, Sporting and Recreational Product Manufacturing",
    "index": "Fishing tackle manufacturing"
  },
  {
    "code": "4241",
    "description": "Sport and Camping Equipment Retailing",
    "index": "Fishing tackle retailing"
  },
  {
    "code": "1831",
    "description": "Fertiliser Manufacturing",
    "index": "Fishmeal fertiliser manufacturing"
  },
  {
    "code": "9111",
    "description": "Health and Fitness Centres and Gymnasia Operation",
    "index": "Fitness centre operation"
  },
  {
    "code": "4241",
    "description": "Sport and Camping Equipment Retailing",
    "index": "Fitness equipment retailing"
  },
  {
    "code": "2432",
    "description": "Electric Lighting Equipment Manufacturing",
    "index": "Fittings, electric light, manufacturing (except automotive)"
  },
  {
    "code": "2210",
    "description": "Iron and Steel Forging",
    "index": "Fittings, steam, gas or water, forged iron or steel, manufacturing"
  },
  {
    "code": "2122",
    "description": "Steel Pipe and Tube Manufacturing",
    "index": "Fittings, steam, gas or water, manufacturing (ferrous metal; except cast or forged)"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Fittings, steam, gas or water, manufacturing (non-ferrous metal)"
  },
  {
    "code": "1333",
    "description": "Cut and Sewn Textile Product Manufacturing",
    "index": "Flag or banner, manufacturing"
  },
  {
    "code": "2432",
    "description": "Electric Lighting Equipment Manufacturing",
    "index": "Flashlight bulb manufacturing"
  },
  {
    "code": "3019",
    "description": "Other Residential Building Construction",
    "index": "Flat construction"
  },
  {
    "code": "2010",
    "description": "Glass and Glass Product Manufacturing",
    "index": "Flat glass manufacturing"
  },
  {
    "code": "2110",
    "description": "Iron Smelting and Steel Manufacturing",
    "index": "Flat-rolled product, iron or steel, manufacturing"
  },
  {
    "code": "6711",
    "description": "Residential Property Operators",
    "index": "Flats (except holiday flats) renting or leasing"
  },
  {
    "code": "1133",
    "description": "Cheese and Other Dairy Product Manufacturing",
    "index": "Flavoured milk manufacturing"
  },
  {
    "code": "1199",
    "description": "Other Food Products Manufacturing n.e.c.",
    "index": "Flavoured water pack manufacturing (for freezing into flavoured ice)"
  },
  {
    "code": "0159",
    "description": "Other Crop Growing n.e.c.",
    "index": "Flax seed growing"
  },
  {
    "code": "0990",
    "description": "Other Non-Metallic Mineral Mining and Quarrying",
    "index": "Flint quarrying"
  },
  {
    "code": "3109",
    "description": "Other Heavy and Civil Engineering Construction",
    "index": "Flood control system construction"
  },
  {
    "code": "3243",
    "description": "Tiling and Carpeting Services",
    "index": "Floor covering laying n.e.c."
  },
  {
    "code": "1920",
    "description": "Natural Rubber Product Manufacturing",
    "index": "Floor covering or underlay, resilient natural rubber, manufacturing"
  },
  {
    "code": "3731",
    "description": "Furniture and Floor Coverings Wholesaling",
    "index": "Floor covering wholesaling (except ceramic floor tiles)"
  },
  {
    "code": "1919",
    "description": "Other Polymer Product Manufacturing",
    "index": "Floor covering, resilient polymer, manufacturing"
  },
  {
    "code": "1331",
    "description": "Textile Floor Covering Manufacturing",
    "index": "Floor covering, textile, manufacturing n.e.c."
  },
  {
    "code": "4212",
    "description": "Floor Coverings Retailing",
    "index": "Floor coverings retailing (except ceramic floor tiles)"
  },
  {
    "code": "2599",
    "description": "Other Manufacturing n.e.c.",
    "index": "Floor mop manufacturing"
  },
  {
    "code": "2034",
    "description": "Concrete Product Manufacturing",
    "index": "Floor or wall tile, concrete, manufacturing"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Floor polisher wholesaling"
  },
  {
    "code": "4221",
    "description": "Electrical, Electronic and Gas Appliance Retailing",
    "index": "Floor polisher, electric, retailing"
  },
  {
    "code": "4212",
    "description": "Floor Coverings Retailing",
    "index": "Floor rug retailing"
  },
  {
    "code": "1331",
    "description": "Textile Floor Covering Manufacturing",
    "index": "Floor rug, textile, manufacturing"
  },
  {
    "code": "3243",
    "description": "Tiling and Carpeting Services",
    "index": "Floor sanding"
  },
  {
    "code": "4212",
    "description": "Floor Coverings Retailing",
    "index": "Floor tile retailing (lino, vinyl, cork, carpet or rubber)"
  },
  {
    "code": "3243",
    "description": "Tiling and Carpeting Services",
    "index": "Floor tiling (using ceramic, concrete or cut stone tiles)"
  },
  {
    "code": "2090",
    "description": "Other Non-Metallic Mineral Product Manufacturing",
    "index": "Flooring material magnesite, manufacturing"
  },
  {
    "code": "8922",
    "description": "Nature Reserves and Conservation Parks Operation",
    "index": "Flora reserve operation"
  },
  {
    "code": "4274",
    "description": "Flower Retailing",
    "index": "Florist, retail, operation"
  },
  {
    "code": "2469",
    "description": "Other Specialised Machinery and Equipment Manufacturing",
    "index": "Flour milling machinery manufacturing"
  },
  {
    "code": "0115",
    "description": "Floriculture Production (Outdoors)",
    "index": "Flower growing (outdoors)"
  },
  {
    "code": "0114",
    "description": "Floriculture Production (Under Cover)",
    "index": "Flower growing (under cover)"
  },
  {
    "code": "2029",
    "description": "Other Ceramic Product Manufacturing",
    "index": "Flower pot, ceramic, manufacturing"
  },
  {
    "code": "2034",
    "description": "Concrete Product Manufacturing",
    "index": "Flower pot, concrete, manufacturing"
  },
  {
    "code": "3319",
    "description": "Other Agricultural Product Wholesaling",
    "index": "Flower, cut, wholesaling"
  },
  {
    "code": "1813",
    "description": "Basic Inorganic Chemical Manufacturing",
    "index": "Fluoride manufacturing"
  },
  {
    "code": "0990",
    "description": "Other Non-Metallic Mineral Mining and Quarrying",
    "index": "Fluorspar mining"
  },
  {
    "code": "1899",
    "description": "Other Basic Chemical Product Manufacturing n.e.c.",
    "index": "Flux manufacturing (welding and soldering)"
  },
  {
    "code": "2223",
    "description": "Architectural Aluminium Product Manufacturing",
    "index": "Fly screen door, aluminium, manufacturing"
  },
  {
    "code": "2229",
    "description": "Other Structural Metal Product Manufacturing",
    "index": "Fly screen door, metal, manufacturing (except aluminium)"
  },
  {
    "code": "8511",
    "description": "General Practice Medical Services",
    "index": "Flying doctor service"
  },
  {
    "code": "8219",
    "description": "Adult, Community and Other Education n.e.c.",
    "index": "Flying school operation"
  },
  {
    "code": "1832",
    "description": "Pesticide Manufacturing",
    "index": "Flyspray manufacturing"
  },
  {
    "code": "3239",
    "description": "Other Building Installation Services",
    "index": "Flywire screen installation"
  },
  {
    "code": "0159",
    "description": "Other Crop Growing n.e.c.",
    "index": "Fodder growing"
  },
  {
    "code": "1192",
    "description": "Prepared Animal and Bird Feed Manufacturing",
    "index": "Fodder, prepared, manufacturing"
  },
  {
    "code": "2142",
    "description": "Aluminium Rolling, Drawing, Extruding",
    "index": "Foil, aluminium, manufacturing"
  },
  {
    "code": "2149",
    "description": "Other Basic Non-Ferrous Metal Product Manufacturing",
    "index": "Foil, non-ferrous metal, manufacturing (except aluminium)"
  },
  {
    "code": "2239",
    "description": "Other Metal Container Manufacturing",
    "index": "Food and drink can manufacturing"
  },
  {
    "code": "1912",
    "description": "Rigid and Semi Rigid Polymer Product Manufacturing",
    "index": "Food container, plastic, manufacturing (including microwave safe)"
  },
  {
    "code": "1913",
    "description": "Polymer Foam Product Manufacturing",
    "index": "Food container, polymeric foam, manufacturing"
  },
  {
    "code": "1199",
    "description": "Other Food Products Manufacturing n.e.c.",
    "index": "Food dressing manufacturing"
  },
  {
    "code": "1199",
    "description": "Other Food Products Manufacturing n.e.c.",
    "index": "Food flavouring manufacturing"
  },
  {
    "code": "9429",
    "description": "Other Machinery and Equipment Repair and Maintenance",
    "index": "Food machinery and equipment (industrial) repair and maintenance"
  },
  {
    "code": "1199",
    "description": "Other Food Products Manufacturing n.e.c.",
    "index": "Food manufacturing n.e.c."
  },
  {
    "code": "2469",
    "description": "Other Specialised Machinery and Equipment Manufacturing",
    "index": "Food packing machinery manufacturing"
  },
  {
    "code": "3419",
    "description": "Other Specialised Industrial Machinery and Equipment Wholesaling",
    "index": "Food processing machinery or equipment wholesaling"
  },
  {
    "code": "2469",
    "description": "Other Specialised Machinery and Equipment Manufacturing",
    "index": "Food processing machinery, commercial, manufacturing"
  },
  {
    "code": "6910",
    "description": "Scientific Research Services",
    "index": "Food research service"
  },
  {
    "code": "2441",
    "description": "Whiteware Appliance Manufacturing",
    "index": "Food waste disposal unit, domestic, manufacturing"
  },
  {
    "code": "1911",
    "description": "Polymer Film and Sheet Packaging Material Manufacturing",
    "index": "Food wrapping, plastic, manufacturing"
  },
  {
    "code": "9112",
    "description": "Sport and Physical Recreation Clubs and Sports Professionals",
    "index": "Football club operation"
  },
  {
    "code": "9113",
    "description": "Sports and Physical Recreation Venues, Grounds and Facilities Operation",
    "index": "Football field or stadium operation"
  },
  {
    "code": "8211",
    "description": "Sports and Physical Recreation Instruction",
    "index": "Football instruction"
  },
  {
    "code": "9202",
    "description": "Lottery Operation",
    "index": "Football pool operation"
  },
  {
    "code": "9491",
    "description": "Clothing and Footwear Repair",
    "index": "Footwear (including boot and shoe) repair"
  },
  {
    "code": "1352",
    "description": "Footwear Manufacturing",
    "index": "Footwear component manufacturing"
  },
  {
    "code": "1352",
    "description": "Footwear Manufacturing",
    "index": "Footwear manufacturing (including safety or protective footwear)"
  },
  {
    "code": "4252",
    "description": "Footwear Retailing",
    "index": "Footwear retailing"
  },
  {
    "code": "3712",
    "description": "Clothing and Footwear Wholesaling",
    "index": "Footwear wholesaling"
  },
  {
    "code": "0159",
    "description": "Other Crop Growing n.e.c.",
    "index": "Forage sorghum growing"
  },
  {
    "code": "6925",
    "description": "Scientific Testing and Analysis Services",
    "index": "Forensic science service (except pathology service)"
  },
  {
    "code": "0510",
    "description": "Forestry Support Services",
    "index": "Forest conservation service"
  },
  {
    "code": "7713",
    "description": "Fire Protection and Other Emergency Services (except Ambulance Services)",
    "index": "Forest fire fighting service"
  },
  {
    "code": "0510",
    "description": "Forestry Support Services",
    "index": "Forest nursery operation or service"
  },
  {
    "code": "0510",
    "description": "Forestry Support Services",
    "index": "Forest pest control service (except aerial or wild animal control)"
  },
  {
    "code": "0510",
    "description": "Forestry Support Services",
    "index": "Forest planting"
  },
  {
    "code": "0301",
    "description": "Forestry",
    "index": "Forest product gathering"
  },
  {
    "code": "0301",
    "description": "Forestry",
    "index": "Forestry growing operation"
  },
  {
    "code": "9429",
    "description": "Other Machinery and Equipment Repair and Maintenance",
    "index": "Forestry machinery and equipment repair and maintenance"
  },
  {
    "code": "6962",
    "description": "Management Advice and Other Consulting Services",
    "index": "Forestry management consulting service"
  },
  {
    "code": "2463",
    "description": "Machine Tool and Parts Manufacturing",
    "index": "Forging machinery manufacturing"
  },
  {
    "code": "3419",
    "description": "Other Specialised Industrial Machinery and Equipment Wholesaling",
    "index": "Forging machinery or equipment wholesaling"
  },
  {
    "code": "2210",
    "description": "Iron and Steel Forging",
    "index": "Forgings, iron or steel, manufacturing"
  },
  {
    "code": "2491",
    "description": "Lifting and Material Handling Equipment Manufacturing",
    "index": "Forklift truck manufacturing"
  },
  {
    "code": "1812",
    "description": "Basic Organic Chemical Manufacturing",
    "index": "Formaldehyde manufacturing"
  },
  {
    "code": "1832",
    "description": "Pesticide Manufacturing",
    "index": "Formulated pest control product manufacturing"
  },
  {
    "code": "1213",
    "description": "Spirit Manufacturing",
    "index": "Fortified spirit manufacturing"
  },
  {
    "code": "1214",
    "description": "Wine and Other Alcoholic Beverage Manufacturing",
    "index": "Fortified wine manufacturing"
  },
  {
    "code": "9539",
    "description": "Other Personal Services n.e.c.",
    "index": "Fortune telling service"
  },
  {
    "code": "4251",
    "description": "Clothing Retailing",
    "index": "Foundation garment retailing"
  },
  {
    "code": "2090",
    "description": "Other Non-Metallic Mineral Product Manufacturing",
    "index": "Foundry core, sand, manufacturing"
  },
  {
    "code": "9429",
    "description": "Other Machinery and Equipment Repair and Maintenance",
    "index": "Foundry machinery and equipment repair and maintenance"
  },
  {
    "code": "2463",
    "description": "Machine Tool and Parts Manufacturing",
    "index": "Foundry machinery manufacturing (except furnaces)"
  },
  {
    "code": "3419",
    "description": "Other Specialised Industrial Machinery and Equipment Wholesaling",
    "index": "Foundry machinery or equipment wholesaling"
  },
  {
    "code": "3503",
    "description": "Trailer and Other Motor Vehicle Wholesaling",
    "index": "Four-wheeled motor cycle wholesaling"
  },
  {
    "code": "6640",
    "description": "Non-Financial Intangible Assets (except Copyrights) Leasing",
    "index": "Franchise agreement leasing"
  },
  {
    "code": "5309",
    "description": "Other Warehousing and Storage Services",
    "index": "Free store operation (storage of goods not under bond)"
  },
  {
    "code": "5621",
    "description": "Free-to-Air Television Broadcasting",
    "index": "Free-to-air television service"
  },
  {
    "code": "3233",
    "description": "Air Conditioning and Heating Services",
    "index": "Freezer room construction"
  },
  {
    "code": "2441",
    "description": "Whiteware Appliance Manufacturing",
    "index": "Freezer, domestic, manufacturing"
  },
  {
    "code": "5299",
    "description": "Other Transport Support Services n.e.c",
    "index": "Freight brokerage service"
  },
  {
    "code": "4810",
    "description": "Water Freight Transport",
    "index": "Freight ferry service"
  },
  {
    "code": "0419",
    "description": "Other Fishing",
    "index": "Freshwater eel fishing"
  },
  {
    "code": "0419",
    "description": "Other Fishing",
    "index": "Freshwater fishing n.e.c."
  },
  {
    "code": "6240",
    "description": "Financial Asset Investing",
    "index": "Friendly society operation (investment type; in predominantly financial assets)"
  },
  {
    "code": "2462",
    "description": "Mining and Construction Machinery Manufacturing",
    "index": "Front-end loader manufacturing"
  },
  {
    "code": "3603",
    "description": "Dairy Produce Wholesaling",
    "index": "Frozen dessert wholesaling"
  },
  {
    "code": "3602",
    "description": "Meat, Poultry and Smallgoods Wholesaling",
    "index": "Frozen meat wholesaling"
  },
  {
    "code": "1112",
    "description": "Poultry Processing",
    "index": "Frozen poultry manufacturing"
  },
  {
    "code": "1140",
    "description": "Fruit and Vegetable Processing",
    "index": "Fruit dehydrating or drying (except sun drying) manufacturing"
  },
  {
    "code": "1211",
    "description": "Soft Drink, Cordial and Syrup Manufacturing",
    "index": "Fruit drink, less than 100 percent pure juice, manufacturing"
  },
  {
    "code": "1132",
    "description": "Ice Cream Manufacturing",
    "index": "Fruit ice, frozen, manufacturing"
  },
  {
    "code": "3609",
    "description": "Other Grocery Wholesaling",
    "index": "Fruit juice wholesaling"
  },
  {
    "code": "1140",
    "description": "Fruit and Vegetable Processing",
    "index": "Fruit juice, 100 percent pure or concentrated, manufacturing"
  },
  {
    "code": "1171",
    "description": "Bread Manufacturing (Factory-based)",
    "index": "Fruit loaf manufacturing (factory based)"
  },
  {
    "code": "0529",
    "description": "Other Agriculture and Fishing Support Services",
    "index": "Fruit or vegetable picking"
  },
  {
    "code": "1140",
    "description": "Fruit and Vegetable Processing",
    "index": "Fruit pulp, puree or spread manufacturing"
  },
  {
    "code": "1140",
    "description": "Fruit and Vegetable Processing",
    "index": "Fruit salad manufacturing"
  },
  {
    "code": "0112",
    "description": "Nursery Production (Outdoors)",
    "index": "Fruit tree nursery operation (outdoors)"
  },
  {
    "code": "0111",
    "description": "Nursery Production (Under Cover)",
    "index": "Fruit tree nursery operation (under cover)"
  },
  {
    "code": "4122",
    "description": "Fruit and Vegetable Retailing",
    "index": "Fruit, fresh, retailing"
  },
  {
    "code": "3605",
    "description": "Fruit and Vegetable Wholesaling",
    "index": "Fruit, fresh, wholesaling"
  },
  {
    "code": "1140",
    "description": "Fruit and Vegetable Processing",
    "index": "Fruit, frozen, manufacturing"
  },
  {
    "code": "1140",
    "description": "Fruit and Vegetable Processing",
    "index": "Fruit, preserved, manufacturing (including canned or bottled)"
  },
  {
    "code": "1709",
    "description": "Other Petroleum and Coal Product Manufacturing",
    "index": "Fuel briquette manufacturing (except charcoal)"
  },
  {
    "code": "2700",
    "description": "Gas Supply",
    "index": "Fuel gas distribution through mains system"
  },
  {
    "code": "1701",
    "description": "Petroleum Refining and Petroleum Fuels Manufacturing",
    "index": "Fuel oil manufacturing"
  },
  {
    "code": "3321",
    "description": "Petroleum Product Wholesaling",
    "index": "Fuel oil wholesaling"
  },
  {
    "code": "0919",
    "description": "Other Construction Material Mining",
    "index": "Fullers earth quarrying"
  },
  {
    "code": "2090",
    "description": "Other Non-Metallic Mineral Product Manufacturing",
    "index": "Fullers earth, ground, manufacturing"
  },
  {
    "code": "7312",
    "description": "Buildings Pest Control Services",
    "index": "Fumigating service (except crop fumigating)"
  },
  {
    "code": "6321",
    "description": "Health Insurance",
    "index": "Funeral benefit provision"
  },
  {
    "code": "9520",
    "description": "Funeral, Crematorium and Cemetery Services",
    "index": "Funeral directing"
  },
  {
    "code": "1832",
    "description": "Pesticide Manufacturing",
    "index": "Fungicide manufacturing"
  },
  {
    "code": "2240",
    "description": "Other Sheet Metal Product Manufacturing",
    "index": "Funnel, sheet metal, manufacturing"
  },
  {
    "code": "4251",
    "description": "Clothing Retailing",
    "index": "Fur clothing retailing"
  },
  {
    "code": "1320",
    "description": "Leather Tanning and Fur Dressing",
    "index": "Fur rug manufacturing"
  },
  {
    "code": "0199",
    "description": "Other Livestock Farming n.e.c.",
    "index": "Fur skin animal (including possum and ferret) farming"
  },
  {
    "code": "0420",
    "description": "Hunting and Trapping",
    "index": "Fur skin animal hunting or trapping"
  },
  {
    "code": "1320",
    "description": "Leather Tanning and Fur Dressing",
    "index": "Fur skin dressing or dyeing"
  },
  {
    "code": "3739",
    "description": "Other Goods Wholesaling n.e.c.",
    "index": "Fur, dyed or dressed, wholesaling"
  },
  {
    "code": "3109",
    "description": "Other Heavy and Civil Engineering Construction",
    "index": "Furnace construction (for industrial plants from prefabricated components)"
  },
  {
    "code": "3499",
    "description": "Other Machinery and Equipment Wholesaling n",
    "index": "Furnace or furnace equipment, industrial, wholesaling (except electrical)"
  },
  {
    "code": "2439",
    "description": "Other Electrical Equipment Manufacturing",
    "index": "Furnace, electric, manufacturing (except space heaters)"
  },
  {
    "code": "2499",
    "description": "Other Machinery and Equipment Manufacturing n.e.c.",
    "index": "Furnace, industrial, manufacturing (except electric furnaces or space heaters)"
  },
  {
    "code": "2512",
    "description": "Metal Furniture Manufacturing",
    "index": "Furniture fittings, metal, manufacturing"
  },
  {
    "code": "2519",
    "description": "Other Furniture Manufacturing",
    "index": "Furniture manufacturing n.e.c."
  },
  {
    "code": "2519",
    "description": "Other Furniture Manufacturing",
    "index": "Furniture part manufacturing n.e.c."
  },
  {
    "code": "2512",
    "description": "Metal Furniture Manufacturing",
    "index": "Furniture part, metal, manufacturing"
  },
  {
    "code": "2511",
    "description": "Wooden Furniture and Upholstered Seat Manufacturing",
    "index": "Furniture part, wooden, manufacturing"
  },
  {
    "code": "4610",
    "description": "Road Freight Transport",
    "index": "Furniture removal service"
  },
  {
    "code": "6639",
    "description": "Other Goods and Equipment Rental and Hiring n.e.c.",
    "index": "Furniture rental"
  },
  {
    "code": "9499",
    "description": "Other Repair and Maintenance n.e.c.",
    "index": "Furniture repair"
  },
  {
    "code": "4211",
    "description": "Furniture Retailing",
    "index": "Furniture retailing"
  },
  {
    "code": "2511",
    "description": "Wooden Furniture and Upholstered Seat Manufacturing",
    "index": "Furniture reupholstering"
  },
  {
    "code": "5309",
    "description": "Other Warehousing and Storage Services",
    "index": "Furniture storage service"
  },
  {
    "code": "3731",
    "description": "Furniture and Floor Coverings Wholesaling",
    "index": "Furniture wholesaling"
  },
  {
    "code": "2512",
    "description": "Metal Furniture Manufacturing",
    "index": "Furniture, metal, manufacturing"
  },
  {
    "code": "1912",
    "description": "Rigid and Semi Rigid Polymer Product Manufacturing",
    "index": "Furniture, plastic, manufacturing"
  },
  {
    "code": "2439",
    "description": "Other Electrical Equipment Manufacturing",
    "index": "Fuse or cutout manufacturing"
  },
  {
    "code": "2431",
    "description": "Electric Cable and Wire Manufacturing",
    "index": "Fuse wire manufacturing"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Galvanised iron product wholesaling"
  },
  {
    "code": "2122",
    "description": "Steel Pipe and Tube Manufacturing",
    "index": "Galvanised seamless or welded steel pipe or tube manufacturing"
  },
  {
    "code": "2293",
    "description": "Metal Coating and Finishing",
    "index": "Galvanising of client supplied materials"
  },
  {
    "code": "9209",
    "description": "Other Gambling Activities",
    "index": "Gambling activity n.e.c."
  },
  {
    "code": "1112",
    "description": "Poultry Processing",
    "index": "Game bird (e.g. pheasant, quail) slaughtering"
  },
  {
    "code": "0171",
    "description": "Poultry Farming (Meat)",
    "index": "Game bird farming"
  },
  {
    "code": "0420",
    "description": "Hunting and Trapping",
    "index": "Game preserve, commercial, operation"
  },
  {
    "code": "4243",
    "description": "Toy and Game Retailing",
    "index": "Game retailing"
  },
  {
    "code": "7714",
    "description": "Correctional and Detention Services",
    "index": "Gaol operation"
  },
  {
    "code": "3011",
    "description": "House Construction",
    "index": "Garage construction"
  },
  {
    "code": "2223",
    "description": "Architectural Aluminium Product Manufacturing",
    "index": "Garage door, aluminium, manufacturing"
  },
  {
    "code": "2229",
    "description": "Other Structural Metal Product Manufacturing",
    "index": "Garage door, metal, manufacturing (except aluminium)"
  },
  {
    "code": "2222",
    "description": "Prefabricated Metal Building Manufacturing",
    "index": "Garage, prefabricated metal, manufacturing"
  },
  {
    "code": "1491",
    "description": "Prefabricated Wooden Building Manufacturing",
    "index": "Garage, prefabricated wood, manufacturing"
  },
  {
    "code": "1911",
    "description": "Polymer Film and Sheet Packaging Material Manufacturing",
    "index": "Garbage bag, plastic, manufacturing"
  },
  {
    "code": "1919",
    "description": "Other Polymer Product Manufacturing",
    "index": "Garbage bin, plastic, manufacturing"
  },
  {
    "code": "2239",
    "description": "Other Metal Container Manufacturing",
    "index": "Garbage can, metal, manufacturing"
  },
  {
    "code": "2911",
    "description": "Solid Waste Collection Services",
    "index": "Garbage collection service"
  },
  {
    "code": "2921",
    "description": "Waste Treatment and Disposal Services",
    "index": "Garbage disposal service"
  },
  {
    "code": "1920",
    "description": "Natural Rubber Product Manufacturing",
    "index": "Garden hose, natural rubber, manufacturing"
  },
  {
    "code": "1919",
    "description": "Other Polymer Product Manufacturing",
    "index": "Garden hose, plastic or composite, manufacturing"
  },
  {
    "code": "7313",
    "description": "Gardening Services",
    "index": "Garden maintenance service"
  },
  {
    "code": "4232",
    "description": "Garden Supplies Retailing",
    "index": "Garden ornament retailing"
  },
  {
    "code": "4232",
    "description": "Garden Supplies Retailing",
    "index": "Garden supplies retailing n.e.c."
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Garden tool manufacturing (except power operated)"
  },
  {
    "code": "4231",
    "description": "Hardware and Building Supplies Retailing",
    "index": "Garden tool retailing"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Garden tool wholesaling"
  },
  {
    "code": "7313",
    "description": "Gardening Services",
    "index": "Gardening service"
  },
  {
    "code": "0123",
    "description": "Vegetable Growing (Outdoors)",
    "index": "Garlic growing (outdoors)"
  },
  {
    "code": "4221",
    "description": "Electrical, Electronic and Gas Appliance Retailing",
    "index": "Gas appliance retailing"
  },
  {
    "code": "2499",
    "description": "Other Machinery and Equipment Manufacturing n.e.c.",
    "index": "Gas burner, industrial, manufacturing"
  },
  {
    "code": "2451",
    "description": "Pumps and Compressors Manufacturing",
    "index": "Gas compressor manufacturing (except refrigeration or air conditioning compressors)"
  },
  {
    "code": "2231",
    "description": "Boiler, Tank and Other Heavy Gauge Metal Container Manufacturing",
    "index": "Gas cylinder manufacturing"
  },
  {
    "code": "3332",
    "description": "Plumbing Goods Wholesaling",
    "index": "Gas fitting wholesaling"
  },
  {
    "code": "3499",
    "description": "Other Machinery and Equipment Wholesaling n",
    "index": "Gas generator or equipment wholesaling"
  },
  {
    "code": "3499",
    "description": "Other Machinery and Equipment Wholesaling n",
    "index": "Gas heater wholesaling"
  },
  {
    "code": "2449",
    "description": "Other Domestic Appliance Manufacturing",
    "index": "Gas heating appliance, domestic, manufacturing"
  },
  {
    "code": "2419",
    "description": "Other Professional and Scientific Equipment Manufacturing",
    "index": "Gas meter manufacturing"
  },
  {
    "code": "1701",
    "description": "Petroleum Refining and Petroleum Fuels Manufacturing",
    "index": "Gas oil manufacturing"
  },
  {
    "code": "3231",
    "description": "Plumbing Services",
    "index": "Gas plumbing"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Gas, industrial, wholesaling (except liquefied petroleum gas)"
  },
  {
    "code": "2223",
    "description": "Architectural Aluminium Product Manufacturing",
    "index": "Gate, aluminium, manufacturing"
  },
  {
    "code": "2229",
    "description": "Other Structural Metal Product Manufacturing",
    "index": "Gate, metal, manufacturing (except aluminium or wire)"
  },
  {
    "code": "2291",
    "description": "Spring and Wire Product Manufacturing",
    "index": "Gate, wire, manufacturing"
  },
  {
    "code": "1491",
    "description": "Prefabricated Wooden Building Manufacturing",
    "index": "Gazebo, prefabricated wood, manufacturing"
  },
  {
    "code": "2319",
    "description": "Other Motor Vehicle Parts Manufacturing",
    "index": "Gearbox manufacturing"
  },
  {
    "code": "9419",
    "description": "Other Automotive Repair and Maintenance",
    "index": "Gearbox repair (automotive)"
  },
  {
    "code": "1199",
    "description": "Other Food Products Manufacturing n.e.c.",
    "index": "Gelatine manufacturing"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Gelatine wholesaling"
  },
  {
    "code": "1132",
    "description": "Ice Cream Manufacturing",
    "index": "Gelato manufacturing"
  },
  {
    "code": "2591",
    "description": "Jewellery and Silverware Manufacturing",
    "index": "Gem cutting"
  },
  {
    "code": "0990",
    "description": "Other Non-Metallic Mineral Mining and Quarrying",
    "index": "Gemstone mining"
  },
  {
    "code": "3732",
    "description": "Jewellery and Watch Wholesaling",
    "index": "Gemstone wholesaling"
  },
  {
    "code": "9539",
    "description": "Other Personal Services n.e.c.",
    "index": "Genealogy service"
  },
  {
    "code": "9419",
    "description": "Other Automotive Repair and Maintenance",
    "index": "General automotive repair"
  },
  {
    "code": "8401",
    "description": "Hospitals (except Psychiatric Hospitals)",
    "index": "General hospital"
  },
  {
    "code": "6322",
    "description": "General Insurance",
    "index": "General insurance provision"
  },
  {
    "code": "3601",
    "description": "General Line Groceries Wholesaling",
    "index": "General line grocery wholesaling"
  },
  {
    "code": "8511",
    "description": "General Practice Medical Services",
    "index": "General medical practitioner service"
  },
  {
    "code": "8511",
    "description": "General Practice Medical Services",
    "index": "General practice medical clinic service"
  },
  {
    "code": "2439",
    "description": "Other Electrical Equipment Manufacturing",
    "index": "Generator manufacturing (except wind powered)"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Generator, electricity, wholesaling"
  },
  {
    "code": "2499",
    "description": "Other Machinery and Equipment Manufacturing n.e.c.",
    "index": "Generator, gas, manufacturing"
  },
  {
    "code": "6922",
    "description": "Surveying and Mapping Services",
    "index": "Geodetic surveying service"
  },
  {
    "code": "6925",
    "description": "Scientific Testing and Analysis Services",
    "index": "Geology and geophysical testing service"
  },
  {
    "code": "6923",
    "description": "Engineering Design and Engineering Consulting Services",
    "index": "Geotechnical engineering consulting service"
  },
  {
    "code": "2619",
    "description": "Other Electricity Generation",
    "index": "Geothermal electricity generation"
  },
  {
    "code": "1211",
    "description": "Soft Drink, Cordial and Syrup Manufacturing",
    "index": "Ginger beer, non-alcoholic, manufacturing"
  },
  {
    "code": "0159",
    "description": "Other Crop Growing n.e.c.",
    "index": "Ginger growing"
  },
  {
    "code": "1199",
    "description": "Other Food Products Manufacturing n.e.c.",
    "index": "Ginger product manufacturing (except confectionery)"
  },
  {
    "code": "2221",
    "description": "Structural Steel Fabricating",
    "index": "Girder, prefabricated steel, manufacturing"
  },
  {
    "code": "3739",
    "description": "Other Goods Wholesaling n.e.c.",
    "index": "Glass container wholesaling"
  },
  {
    "code": "3711",
    "description": "Textile Product Wholesaling",
    "index": "Glass fibre fabric wholesaling"
  },
  {
    "code": "2010",
    "description": "Glass and Glass Product Manufacturing",
    "index": "Glass or glass product manufacturing (except glass wool or glass wool products)"
  },
  {
    "code": "2010",
    "description": "Glass and Glass Product Manufacturing",
    "index": "Glass, sheet, manufacturing"
  },
  {
    "code": "4213",
    "description": "Houseware Retailing",
    "index": "Glassware retailing"
  },
  {
    "code": "3733",
    "description": "Kitchen and Dining Ware Wholesaling",
    "index": "Glassware wholesaling"
  },
  {
    "code": "0990",
    "description": "Other Non-Metallic Mineral Mining and Quarrying",
    "index": "Glauconite mining"
  },
  {
    "code": "3245",
    "description": "Glazing Services",
    "index": "Glazing"
  },
  {
    "code": "2394",
    "description": "Aircraft Manufacturing and Repair Services",
    "index": "Glider manufacturing and repair (except hang glider)"
  },
  {
    "code": "5010",
    "description": "Scenic and Sightseeing Transport",
    "index": "Glider operation"
  },
  {
    "code": "2419",
    "description": "Other Professional and Scientific Equipment Manufacturing",
    "index": "Global positioning system (GPS) equipment manufacturing"
  },
  {
    "code": "1351",
    "description": "Clothing Manufacturing",
    "index": "Glove manufacturing (except rubber)"
  },
  {
    "code": "4251",
    "description": "Clothing Retailing",
    "index": "Glove retailing"
  },
  {
    "code": "1919",
    "description": "Other Polymer Product Manufacturing",
    "index": "Gloves, plastic, manufacturing"
  },
  {
    "code": "1161",
    "description": "Grain Mill Product Manufacturing",
    "index": "Glucose manufacturing"
  },
  {
    "code": "1493",
    "description": "Veneer and Plywood Manufacturing",
    "index": "Glue laminated lumber (Glulam) manufacturing"
  },
  {
    "code": "1915",
    "description": "Adhesive Manufacturing",
    "index": "Glue manufacturing"
  },
  {
    "code": "1161",
    "description": "Grain Mill Product Manufacturing",
    "index": "Gluten manufacturing"
  },
  {
    "code": "1851",
    "description": "Cleaning Compound Manufacturing",
    "index": "Glycerine manufacturing"
  },
  {
    "code": "1812",
    "description": "Basic Organic Chemical Manufacturing",
    "index": "Glycol manufacturing n.e.c."
  },
  {
    "code": "0199",
    "description": "Other Livestock Farming n.e.c.",
    "index": "Goat farming"
  },
  {
    "code": "0522",
    "description": "Shearing Services",
    "index": "Goat shearing"
  },
  {
    "code": "9131",
    "description": "Amusement Parks and Centres Operation",
    "index": "Go-kart venue operation"
  },
  {
    "code": "3912",
    "description": "Motor Cycle Retailing",
    "index": "Go-kart, motorised, retailing"
  },
  {
    "code": "0804",
    "description": "Gold Ore Mining",
    "index": "Gold bullion production"
  },
  {
    "code": "0804",
    "description": "Gold Ore Mining",
    "index": "Gold dredging"
  },
  {
    "code": "0804",
    "description": "Gold Ore Mining",
    "index": "Gold mining"
  },
  {
    "code": "0804",
    "description": "Gold Ore Mining",
    "index": "Gold ore roasting and flotation extraction, including metallurgical hydro-extraction"
  },
  {
    "code": "2293",
    "description": "Metal Coating and Finishing",
    "index": "Gold plating"
  },
  {
    "code": "2139",
    "description": "Other Basic Non-Ferrous Metal Manufacturing",
    "index": "Gold refining"
  },
  {
    "code": "0804",
    "description": "Gold Ore Mining",
    "index": "Gold washing or sluicing"
  },
  {
    "code": "2591",
    "description": "Jewellery and Silverware Manufacturing",
    "index": "Goldsmithing"
  },
  {
    "code": "2399",
    "description": "Other Transport Equipment Manufacturing n.e.c.",
    "index": "Golf buggy manufacturing"
  },
  {
    "code": "9112",
    "description": "Sport and Physical Recreation Clubs and Sports Professionals",
    "index": "Golf club operation"
  },
  {
    "code": "3109",
    "description": "Other Heavy and Civil Engineering Construction",
    "index": "Golf course construction"
  },
  {
    "code": "9113",
    "description": "Sports and Physical Recreation Venues, Grounds and Facilities Operation",
    "index": "Golf course or practice range operation"
  },
  {
    "code": "8211",
    "description": "Sports and Physical Recreation Instruction",
    "index": "Golf instruction"
  },
  {
    "code": "4241",
    "description": "Sport and Camping Equipment Retailing",
    "index": "Golfing equipment retailing"
  },
  {
    "code": "3800",
    "description": "Commission Based Wholesaling",
    "index": "Goods wholesale broking n.e.c."
  },
  {
    "code": "0171",
    "description": "Poultry Farming (Meat)",
    "index": "Goose farming"
  },
  {
    "code": "0133",
    "description": "Berry Fruit Growing",
    "index": "Gooseberry growing"
  },
  {
    "code": "7600",
    "description": "Defence",
    "index": "Government administration (defence)"
  },
  {
    "code": "7510",
    "description": "Central Government Administration",
    "index": "Governor-General's unit operation"
  },
  {
    "code": "3411",
    "description": "Agricultural and Construction Machinery Wholesaling",
    "index": "Grader wholesaling"
  },
  {
    "code": "2462",
    "description": "Mining and Construction Machinery Manufacturing",
    "index": "Grader, road, manufacturing"
  },
  {
    "code": "5301",
    "description": "Grain Storage Services",
    "index": "Grain elevator operation"
  },
  {
    "code": "0145",
    "description": "Grain-Sheep and Grain-Beef Cattle Farming",
    "index": "Grain growing and sheep or beef cattle farming"
  },
  {
    "code": "5212",
    "description": "Port and Water Transport Terminal Operations",
    "index": "Grain loader operation (water transport)"
  },
  {
    "code": "1192",
    "description": "Prepared Animal and Bird Feed Manufacturing",
    "index": "Grain offal manufacturing (for fodder; except from rice or rye)"
  },
  {
    "code": "0149",
    "description": "Other Grain Growing",
    "index": "Grain seed growing"
  },
  {
    "code": "5301",
    "description": "Grain Storage Services",
    "index": "Grain silo operation"
  },
  {
    "code": "5301",
    "description": "Grain Storage Services",
    "index": "Grain storage service"
  },
  {
    "code": "0919",
    "description": "Other Construction Material Mining",
    "index": "Granite quarrying"
  },
  {
    "code": "2090",
    "description": "Other Non-Metallic Mineral Product Manufacturing",
    "index": "Granulated slag manufacturing"
  },
  {
    "code": "1140",
    "description": "Fruit and Vegetable Processing",
    "index": "Grape crushing"
  },
  {
    "code": "0131",
    "description": "Grape Growing",
    "index": "Grape growing"
  },
  {
    "code": "0131",
    "description": "Grape Growing",
    "index": "Grape sundrying"
  },
  {
    "code": "0136",
    "description": "Citrus Fruit Growing",
    "index": "Grapefruit growing"
  },
  {
    "code": "6924",
    "description": "Other Specialised Design Services",
    "index": "Graphic design service"
  },
  {
    "code": "2029",
    "description": "Other Ceramic Product Manufacturing",
    "index": "Graphite crucible or foundry accessory manufacturing"
  },
  {
    "code": "0990",
    "description": "Other Non-Metallic Mineral Mining and Quarrying",
    "index": "Graphite mining"
  },
  {
    "code": "2090",
    "description": "Other Non-Metallic Mineral Product Manufacturing",
    "index": "Graphite product manufacturing n.e.c."
  },
  {
    "code": "6922",
    "description": "Surveying and Mapping Services",
    "index": "Gravimetric surveying service"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Grease gun manufacturing (except pneumatic or power operated)"
  },
  {
    "code": "0990",
    "description": "Other Non-Metallic Mineral Mining and Quarrying",
    "index": "Green sand mining"
  },
  {
    "code": "4122",
    "description": "Fruit and Vegetable Retailing",
    "index": "Greengrocery operation (retail)"
  },
  {
    "code": "5419",
    "description": "Other Publishing (except Software, Music and Internet)",
    "index": "Greeting card publishing (except internet)"
  },
  {
    "code": "4279",
    "description": "Other Store-Based Retailing n.e.c.",
    "index": "Greeting card retailing"
  },
  {
    "code": "3736",
    "description": "Paper Product Wholesaling",
    "index": "Greeting card wholesaling"
  },
  {
    "code": "1709",
    "description": "Other Petroleum and Coal Product Manufacturing",
    "index": "Grinding oil manufacturing"
  },
  {
    "code": "5102",
    "description": "Courier Pick-up and Delivery Services",
    "index": "Grocery delivery service"
  },
  {
    "code": "4110",
    "description": "Supermarket and Grocery Stores",
    "index": "Grocery retailing"
  },
  {
    "code": "4110",
    "description": "Supermarket and Grocery Stores",
    "index": "Grocery supermarket operation"
  },
  {
    "code": "3212",
    "description": "Site Preparation Services",
    "index": "Ground de-watering"
  },
  {
    "code": "2291",
    "description": "Spring and Wire Product Manufacturing",
    "index": "Guard, wire, manufacturing"
  },
  {
    "code": "2394",
    "description": "Aircraft Manufacturing and Repair Services",
    "index": "Guided missile manufacturing"
  },
  {
    "code": "1812",
    "description": "Basic Organic Chemical Manufacturing",
    "index": "Gum chemical manufacturing"
  },
  {
    "code": "9112",
    "description": "Sport and Physical Recreation Clubs and Sports Professionals",
    "index": "Gun club operation"
  },
  {
    "code": "1892",
    "description": "Explosives Manufacturing",
    "index": "Gun cotton manufacturing"
  },
  {
    "code": "4241",
    "description": "Sport and Camping Equipment Retailing",
    "index": "Gun or rifle retailing"
  },
  {
    "code": "1912",
    "description": "Rigid and Semi Rigid Polymer Product Manufacturing",
    "index": "Gutter and spout, plastic, manufacturing"
  },
  {
    "code": "7311",
    "description": "Buildings Cleaning Services",
    "index": "Gutter cleaning"
  },
  {
    "code": "2223",
    "description": "Architectural Aluminium Product Manufacturing",
    "index": "Guttering, aluminium, manufacturing"
  },
  {
    "code": "2224",
    "description": "Metal Roof and Guttering Manufacturing (except Aluminium)",
    "index": "Guttering, metal, manufacturing (except aluminium)"
  },
  {
    "code": "3231",
    "description": "Plumbing Services",
    "index": "Guttering, roof, installation or repair"
  },
  {
    "code": "9111",
    "description": "Health and Fitness Centres and Gymnasia Operation",
    "index": "Gymnasia operation"
  },
  {
    "code": "4241",
    "description": "Sport and Camping Equipment Retailing",
    "index": "Gymnasium equipment retailing"
  },
  {
    "code": "8512",
    "description": "Specialist Medical Services",
    "index": "Gynaecology service"
  },
  {
    "code": "0990",
    "description": "Other Non-Metallic Mineral Mining and Quarrying",
    "index": "Gypsum mining"
  },
  {
    "code": "2599",
    "description": "Other Manufacturing n.e.c.",
    "index": "Hair brush manufacturing"
  },
  {
    "code": "2449",
    "description": "Other Domestic Appliance Manufacturing",
    "index": "Hair drier, domestic electric, manufacturing"
  },
  {
    "code": "1852",
    "description": "Cosmetic and Toiletry Preparation Manufacturing",
    "index": "Hair preparation manufacturing"
  },
  {
    "code": "9511",
    "description": "Hairdressing and Beauty Services",
    "index": "Hair restoration service (except hair transplant service)"
  },
  {
    "code": "8512",
    "description": "Specialist Medical Services",
    "index": "Hair transplant service (by registered medical practitioner)"
  },
  {
    "code": "3499",
    "description": "Other Machinery and Equipment Wholesaling n",
    "index": "Hairdressing equipment wholesaling"
  },
  {
    "code": "9511",
    "description": "Hairdressing and Beauty Services",
    "index": "Hairdressing service"
  },
  {
    "code": "3602",
    "description": "Meat, Poultry and Smallgoods Wholesaling",
    "index": "Ham wholesaling"
  },
  {
    "code": "1113",
    "description": "Cured Meat and Smallgoods Manufacturing",
    "index": "Ham, canned, manufacturing"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Hand tool manufacturing (except pneumatic or power operated)"
  },
  {
    "code": "6639",
    "description": "Other Goods and Equipment Rental and Hiring n.e.c.",
    "index": "Hand tool rental"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Hand tool wholesaling (including power operated)"
  },
  {
    "code": "2463",
    "description": "Machine Tool and Parts Manufacturing",
    "index": "Hand tool, pneumatic or power operated, manufacturing"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Handbag frame, metal, manufacturing"
  },
  {
    "code": "1320",
    "description": "Leather Tanning and Fur Dressing",
    "index": "Handbag manufacturing (including metal mesh handbags)"
  },
  {
    "code": "4259",
    "description": "Other Personal Accessories Retailing",
    "index": "Handbag retailing"
  },
  {
    "code": "1351",
    "description": "Clothing Manufacturing",
    "index": "Handkerchief manufacturing"
  },
  {
    "code": "2592",
    "description": "Toy, Sporting and Recreational Product Manufacturing",
    "index": "Hang glider manufacturing"
  },
  {
    "code": "4810",
    "description": "Water Freight Transport",
    "index": "Harbour freight transport service"
  },
  {
    "code": "5010",
    "description": "Scenic and Sightseeing Transport",
    "index": "Harbour sightseeing tour operation"
  },
  {
    "code": "3109",
    "description": "Other Heavy and Civil Engineering Construction",
    "index": "Harbour work construction (except buildings)"
  },
  {
    "code": "1331",
    "description": "Textile Floor Covering Manufacturing",
    "index": "Hard fibre floor covering manufacturing (including sisal, coir and grass mat manufacturing)"
  },
  {
    "code": "1494",
    "description": "Reconstituted Wood Product Manufacturing",
    "index": "Hardboard manufacturing"
  },
  {
    "code": "4231",
    "description": "Hardware and Building Supplies Retailing",
    "index": "Hardware retailing"
  },
  {
    "code": "1412",
    "description": "Wood Chipping",
    "index": "Hardwood wood chip manufacturing"
  },
  {
    "code": "1320",
    "description": "Leather Tanning and Fur Dressing",
    "index": "Harness manufacturing"
  },
  {
    "code": "3411",
    "description": "Agricultural and Construction Machinery Wholesaling",
    "index": "Harvester wholesaling"
  },
  {
    "code": "1351",
    "description": "Clothing Manufacturing",
    "index": "Hat and cap manufacturing"
  },
  {
    "code": "0529",
    "description": "Other Agriculture and Fishing Support Services",
    "index": "Hay or silage baling or pressing"
  },
  {
    "code": "2922",
    "description": "Waste Remediation and Materials Recovery Services",
    "index": "Hazardous material removal"
  },
  {
    "code": "2919",
    "description": "Other Waste Collection Services",
    "index": "Hazardous waste (except solid) collection service"
  },
  {
    "code": "2921",
    "description": "Waste Treatment and Disposal Services",
    "index": "Hazardous waste treatment or disposal service"
  },
  {
    "code": "2911",
    "description": "Solid Waste Collection Services",
    "index": "Hazardous waste, solid, collection service"
  },
  {
    "code": "2429",
    "description": "Other Electronic Equipment Manufacturing",
    "index": "Headphone manufacturing"
  },
  {
    "code": "2090",
    "description": "Other Non-Metallic Mineral Product Manufacturing",
    "index": "Headstone manufacturing (except concrete)"
  },
  {
    "code": "1351",
    "description": "Clothing Manufacturing",
    "index": "Headwear manufacturing"
  },
  {
    "code": "8599",
    "description": "Other Health Care Services n.e.c.",
    "index": "Health assessment service"
  },
  {
    "code": "8599",
    "description": "Other Health Care Services n.e.c.",
    "index": "Health care service n.e.c."
  },
  {
    "code": "9111",
    "description": "Health and Fitness Centres and Gymnasia Operation",
    "index": "Health club operation"
  },
  {
    "code": "3609",
    "description": "Other Grocery Wholesaling",
    "index": "Health food wholesaling"
  },
  {
    "code": "6321",
    "description": "Health Insurance",
    "index": "Health insurance provision"
  },
  {
    "code": "1199",
    "description": "Other Food Products Manufacturing n.e.c.",
    "index": "Health supplement manufacturing"
  },
  {
    "code": "8539",
    "description": "Other Allied Health Services",
    "index": "Hearing aid dispensing"
  },
  {
    "code": "2412",
    "description": "Medical and Surgical Equipment Manufacturing",
    "index": "Hearing aid manufacturing"
  },
  {
    "code": "2293",
    "description": "Metal Coating and Finishing",
    "index": "Heat treating metal or metal products"
  },
  {
    "code": "9421",
    "description": "Domestic Appliance Repair and Maintenance",
    "index": "Heater (domestic) repair"
  },
  {
    "code": "2313",
    "description": "Automotive Electrical Components Manufacturing",
    "index": "Heater and demister, automotive, manufacturing"
  },
  {
    "code": "2449",
    "description": "Other Domestic Appliance Manufacturing",
    "index": "Heater, domestic, manufacturing"
  },
  {
    "code": "3233",
    "description": "Air Conditioning and Heating Services",
    "index": "Heating equipment installation (except industrial furnaces)"
  },
  {
    "code": "4221",
    "description": "Electrical, Electronic and Gas Appliance Retailing",
    "index": "Heating equipment, electric or gas, retailing"
  },
  {
    "code": "3321",
    "description": "Petroleum Product Wholesaling",
    "index": "Heating oil dealing (wholesaling)"
  },
  {
    "code": "1701",
    "description": "Petroleum Refining and Petroleum Fuels Manufacturing",
    "index": "Heating oil manufacturing"
  },
  {
    "code": "9429",
    "description": "Other Machinery and Equipment Repair and Maintenance",
    "index": "Heavy machinery and equipment repair and maintenance"
  },
  {
    "code": "2394",
    "description": "Aircraft Manufacturing and Repair Services",
    "index": "Helicopter manufacturing or repairing"
  },
  {
    "code": "5010",
    "description": "Scenic and Sightseeing Transport",
    "index": "Helicopter ride operation (for sightseeing)"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing",
    "index": "Helium manufacturing"
  },
  {
    "code": "1351",
    "description": "Clothing Manufacturing",
    "index": "Helmet, fabric or leather, manufacturing"
  },
  {
    "code": "9539",
    "description": "Other Personal Services n.e.c.",
    "index": "Heraldry service"
  },
  {
    "code": "0123",
    "description": "Vegetable Growing (Outdoors)",
    "index": "Herb growing (outdoors)"
  },
  {
    "code": "0122",
    "description": "Vegetable Growing (Under Cover)",
    "index": "Herb growing (under cover)"
  },
  {
    "code": "1199",
    "description": "Other Food Products Manufacturing n.e.c.",
    "index": "Herb, processed, manufacturing"
  },
  {
    "code": "1841",
    "description": "Human Pharmaceutical and Medicinal Product Manufacturing",
    "index": "Herbal drug manufacturing"
  },
  {
    "code": "8539",
    "description": "Other Allied Health Services",
    "index": "Herbalist service"
  },
  {
    "code": "8921",
    "description": "Zoological and Botanic Gardens Operation",
    "index": "Herbarium operation"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Herbicide wholesaling"
  },
  {
    "code": "3319",
    "description": "Other Agricultural Product Wholesaling",
    "index": "Hide wholesaling"
  },
  {
    "code": "2110",
    "description": "Iron Smelting and Steel Manufacturing",
    "index": "High carbon tool steel manufacturing"
  },
  {
    "code": "7551",
    "description": "Domestic Government Representation",
    "index": "High commission operation (domestic government)"
  },
  {
    "code": "7552",
    "description": "Foreign Government Representation",
    "index": "High commission operation (foreign government)"
  },
  {
    "code": "2110",
    "description": "Iron Smelting and Steel Manufacturing",
    "index": "High speed steel manufacturing"
  },
  {
    "code": "1919",
    "description": "Other Polymer Product Manufacturing",
    "index": "High-density safety equipment manufacturing (e.g. military helmets)"
  },
  {
    "code": "3019",
    "description": "Other Residential Building Construction",
    "index": "High-rise flat construction"
  },
  {
    "code": "4623",
    "description": "Taxi and Other Road Transport",
    "index": "Hire car service (with driver)"
  },
  {
    "code": "8910",
    "description": "Museum Operation",
    "index": "Historic or heritage place, site or house operation"
  },
  {
    "code": "9112",
    "description": "Sport and Physical Recreation Clubs and Sports Professionals",
    "index": "Hockey club operation"
  },
  {
    "code": "2491",
    "description": "Lifting and Material Handling Equipment Manufacturing",
    "index": "Hoist or hoisting equipment manufacturing (except clothes hoists)"
  },
  {
    "code": "6240",
    "description": "Financial Asset Investing",
    "index": "Holding company operation (viz. holding shares in subsidiary companies)"
  },
  {
    "code": "4400",
    "description": "Accommodation",
    "index": "Holiday house and flat operation"
  },
  {
    "code": "2240",
    "description": "Other Sheet Metal Product Manufacturing",
    "index": "Holloware, pressed or spun metal, manufacturing"
  },
  {
    "code": "8219",
    "description": "Adult, Community and Other Education n.e.c.",
    "index": "Home computing and keyboard skill instruction"
  },
  {
    "code": "5102",
    "description": "Courier Pick-up and Delivery Services",
    "index": "Home delivery service"
  },
  {
    "code": "8219",
    "description": "Adult, Community and Other Education n.e.c.",
    "index": "Home economics and personal management instruction"
  },
  {
    "code": "8609",
    "description": "Other Residential Care Services",
    "index": "Home for the disadvantaged operation n.e.c."
  },
  {
    "code": "8539",
    "description": "Other Allied Health Services",
    "index": "Homoeopathic service"
  },
  {
    "code": "3609",
    "description": "Other Grocery Wholesaling",
    "index": "Honey wholesaling"
  },
  {
    "code": "1199",
    "description": "Other Food Products Manufacturing n.e.c.",
    "index": "Honey, blended, manufacturing"
  },
  {
    "code": "2291",
    "description": "Spring and Wire Product Manufacturing",
    "index": "Hook, wire, manufacturing"
  },
  {
    "code": "1199",
    "description": "Other Food Products Manufacturing n.e.c.",
    "index": "Hop extract, concentrated, manufacturing"
  },
  {
    "code": "0159",
    "description": "Other Crop Growing n.e.c.",
    "index": "Hop growing"
  },
  {
    "code": "2240",
    "description": "Other Sheet Metal Product Manufacturing",
    "index": "Hopper, sheet metal, manufacturing"
  },
  {
    "code": "1841",
    "description": "Human Pharmaceutical and Medicinal Product Manufacturing",
    "index": "Hormone manufacturing (except veterinary)"
  },
  {
    "code": "0191",
    "description": "Horse Farming",
    "index": "Horse agistment service"
  },
  {
    "code": "0191",
    "description": "Horse Farming",
    "index": "Horse breeding"
  },
  {
    "code": "2399",
    "description": "Other Transport Equipment Manufacturing n.e.c.",
    "index": "Horse drawn vehicle manufacturing"
  },
  {
    "code": "2312",
    "description": "Motor Vehicle Body and Trailer Manufacturing",
    "index": "Horse float manufacturing"
  },
  {
    "code": "3913",
    "description": "Trailer and Other Motor Vehicle Retailing",
    "index": "Horse float retailing"
  },
  {
    "code": "3503",
    "description": "Trailer and Other Motor Vehicle Wholesaling",
    "index": "Horse float wholesaling"
  },
  {
    "code": "9121",
    "description": "Horse and Dog Racing Administration and Track Operation",
    "index": "Horse race course or track operation"
  },
  {
    "code": "8211",
    "description": "Sports and Physical Recreation Instruction",
    "index": "Horse riding school operation"
  },
  {
    "code": "2210",
    "description": "Iron and Steel Forging",
    "index": "Horse shoe mass production"
  },
  {
    "code": "0990",
    "description": "Other Non-Metallic Mineral Mining and Quarrying",
    "index": "Horticultural peat extraction"
  },
  {
    "code": "6640",
    "description": "Non-Financial Intangible Assets (except Copyrights) Leasing",
    "index": "Horticultural plant variety right leasing"
  },
  {
    "code": "1333",
    "description": "Cut and Sewn Textile Product Manufacturing",
    "index": "Hose, canvas, manufacturing"
  },
  {
    "code": "1920",
    "description": "Natural Rubber Product Manufacturing",
    "index": "Hose, natural rubber, manufacturing, n.e.c."
  },
  {
    "code": "1919",
    "description": "Other Polymer Product Manufacturing",
    "index": "Hose, plastic or composite, manufacturing"
  },
  {
    "code": "1340",
    "description": "Knitted Product Manufacturing",
    "index": "Hosiery manufacturing"
  },
  {
    "code": "4251",
    "description": "Clothing Retailing",
    "index": "Hosiery retailing"
  },
  {
    "code": "3712",
    "description": "Clothing and Footwear Wholesaling",
    "index": "Hosiery wholesaling"
  },
  {
    "code": "8609",
    "description": "Other Residential Care Services",
    "index": "Hospice operation"
  },
  {
    "code": "8401",
    "description": "Hospitals (except Psychiatric Hospitals)",
    "index": "Hospital (except psychiatric or veterinary hospitals)"
  },
  {
    "code": "4530",
    "description": "Clubs (Hospitality)",
    "index": "Hospitality club operation"
  },
  {
    "code": "5010",
    "description": "Scenic and Sightseeing Transport",
    "index": "Hot air balloon ride operation"
  },
  {
    "code": "2122",
    "description": "Steel Pipe and Tube Manufacturing",
    "index": "Hot rolling pipe and tube manufacturing"
  },
  {
    "code": "1920",
    "description": "Natural Rubber Product Manufacturing",
    "index": "Hot water bottle, natural rubber, manufacturing"
  },
  {
    "code": "3231",
    "description": "Plumbing Services",
    "index": "Hot water system installation"
  },
  {
    "code": "3332",
    "description": "Plumbing Goods Wholesaling",
    "index": "Hot water system wholesaling"
  },
  {
    "code": "2449",
    "description": "Other Domestic Appliance Manufacturing",
    "index": "Hot water system, domestic, manufacturing"
  },
  {
    "code": "2449",
    "description": "Other Domestic Appliance Manufacturing",
    "index": "Hot water urn, domestic, manufacturing"
  },
  {
    "code": "4520",
    "description": "Pubs, Taverns and Bars",
    "index": "Hotel bar operation"
  },
  {
    "code": "4400",
    "description": "Accommodation",
    "index": "Hotel operation"
  },
  {
    "code": "6711",
    "description": "Residential Property Operators",
    "index": "House (except holiday house) renting or leasing"
  },
  {
    "code": "3011",
    "description": "House Construction",
    "index": "House construction, alteration or renovation"
  },
  {
    "code": "3244",
    "description": "Painting and Decorating Services",
    "index": "House painting"
  },
  {
    "code": "3011",
    "description": "House Construction",
    "index": "House, prefabricated, assembly, erection or installation (on site)"
  },
  {
    "code": "6619",
    "description": "Other Motor Vehicle and Transport Equipment Rental and Hiring",
    "index": "Houseboat rental"
  },
  {
    "code": "2291",
    "description": "Spring and Wire Product Manufacturing",
    "index": "Household articles, wire, manufacturing"
  },
  {
    "code": "6322",
    "description": "General Insurance",
    "index": "Household insurance provision"
  },
  {
    "code": "4214",
    "description": "Manchester and Other Textile Goods Retailing",
    "index": "Household textile retailing"
  },
  {
    "code": "9602",
    "description": "Undifferentiated Goods-Producing Activities of Private Households for Own Use",
    "index": "Household undifferentiated goods-producing activities (for own use)"
  },
  {
    "code": "9603",
    "description": "Undifferentiated Service-Producing Activities of Private Households for Own Use",
    "index": "Household undifferentiated service-producing activities (for own use)"
  },
  {
    "code": "9601",
    "description": "Private Households Employing Staff",
    "index": "Household, private, employing"
  },
  {
    "code": "2399",
    "description": "Other Transport Equipment Manufacturing n.e.c.",
    "index": "Hovercraft manufacturing"
  },
  {
    "code": "5010",
    "description": "Scenic and Sightseeing Transport",
    "index": "Hovercraft operation"
  },
  {
    "code": "2391",
    "description": "Shipbuilding and Repair Services",
    "index": "Hull cleaning"
  },
  {
    "code": "1919",
    "description": "Other Polymer Product Manufacturing",
    "index": "Hull, boat building, manufacturing"
  },
  {
    "code": "9559",
    "description": "Other Interest Group Services n.e.c.",
    "index": "Human rights association operation"
  },
  {
    "code": "1831",
    "description": "Fertiliser Manufacturing",
    "index": "Humic substance manufacturing"
  },
  {
    "code": "9112",
    "description": "Sport and Physical Recreation Clubs and Sports Professionals",
    "index": "Hunting club operation"
  },
  {
    "code": "0115",
    "description": "Floriculture Production (Outdoors)",
    "index": "Hydrangea growing (outdoors)"
  },
  {
    "code": "2031",
    "description": "Cement and Lime Manufacturing",
    "index": "Hydrated lime manufacturing"
  },
  {
    "code": "2031",
    "description": "Cement and Lime Manufacturing",
    "index": "Hydraulic cement manufacturing"
  },
  {
    "code": "2499",
    "description": "Other Machinery and Equipment Manufacturing n.e.c.",
    "index": "Hydraulic cylinder manufacturing"
  },
  {
    "code": "6923",
    "description": "Engineering Design and Engineering Consulting Services",
    "index": "Hydraulic engineering consulting service"
  },
  {
    "code": "9429",
    "description": "Other Machinery and Equipment Repair and Maintenance",
    "index": "Hydraulic equipment repair and maintenance"
  },
  {
    "code": "1709",
    "description": "Other Petroleum and Coal Product Manufacturing",
    "index": "Hydraulic fluid manufacturing"
  },
  {
    "code": "2491",
    "description": "Lifting and Material Handling Equipment Manufacturing",
    "index": "Hydraulic lifting equipment and parts manufacturing"
  },
  {
    "code": "2451",
    "description": "Pumps and Compressors Manufacturing",
    "index": "Hydraulic pump, fluid power, manufacturing"
  },
  {
    "code": "1813",
    "description": "Basic Inorganic Chemical Manufacturing",
    "index": "Hydrochloric acid manufacturing"
  },
  {
    "code": "2612",
    "description": "Hydro-electricity Generation",
    "index": "Hydro-electricity generation"
  },
  {
    "code": "1813",
    "description": "Basic Inorganic Chemical Manufacturing",
    "index": "Hydrofluoric acid manufacturing"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing",
    "index": "Hydrogen chloride gas manufacturing"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing",
    "index": "Hydrogen manufacturing"
  },
  {
    "code": "1813",
    "description": "Basic Inorganic Chemical Manufacturing",
    "index": "Hydrogen peroxide manufacturing"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing",
    "index": "Hydrogen sulphide gas manufacturing"
  },
  {
    "code": "2311",
    "description": "Motor Vehicle Manufacturing",
    "index": "Hydrogen, fuelcell, hybrid or electric vehicle manufacturing"
  },
  {
    "code": "6922",
    "description": "Surveying and Mapping Services",
    "index": "Hydrographic surveying service"
  },
  {
    "code": "8539",
    "description": "Other Allied Health Services",
    "index": "Hydropathic service"
  },
  {
    "code": "1851",
    "description": "Cleaning Compound Manufacturing",
    "index": "Hypochlorite-based bleach manufacturing"
  },
  {
    "code": "2412",
    "description": "Medical and Surgical Equipment Manufacturing",
    "index": "Hypodermic needle or syringe manufacturing"
  },
  {
    "code": "1813",
    "description": "Basic Inorganic Chemical Manufacturing",
    "index": "Hypophosphite manufacturing"
  },
  {
    "code": "1173",
    "description": "Biscuit Manufacturing (Factory-based)",
    "index": "Ice cream cone or wafer manufacturing (factory based)"
  },
  {
    "code": "1132",
    "description": "Ice Cream Manufacturing",
    "index": "Ice cream manufacturing"
  },
  {
    "code": "3603",
    "description": "Dairy Produce Wholesaling",
    "index": "Ice cream wholesaling"
  },
  {
    "code": "1211",
    "description": "Soft Drink, Cordial and Syrup Manufacturing",
    "index": "Ice manufacturing (except dry ice)"
  },
  {
    "code": "9113",
    "description": "Sports and Physical Recreation Venues, Grounds and Facilities Operation",
    "index": "Ice or roller skating rink operation"
  },
  {
    "code": "4279",
    "description": "Other Store-Based Retailing n.e.c.",
    "index": "Ice retailing"
  },
  {
    "code": "1181",
    "description": "Sugar Manufacturing",
    "index": "Icing sugar manufacturing"
  },
  {
    "code": "2313",
    "description": "Automotive Electrical Components Manufacturing",
    "index": "Ignition coil manufacturing"
  },
  {
    "code": "0805",
    "description": "Mineral Sand Mining",
    "index": "Ilmenite sand mining"
  },
  {
    "code": "1612",
    "description": "Printing Support Services",
    "index": "Image setting service, printing"
  },
  {
    "code": "3800",
    "description": "Commission Based Wholesaling",
    "index": "Import agent, wholesaler"
  },
  {
    "code": "5291",
    "description": "Customs Agency Services",
    "index": "Import documentation preparation service"
  },
  {
    "code": "7220",
    "description": "Travel Agency and Tour Arrangement Services",
    "index": "Inbound tour operator service"
  },
  {
    "code": "9131",
    "description": "Amusement Parks and Centres Operation",
    "index": "Indoor climbing operation"
  },
  {
    "code": "1812",
    "description": "Basic Organic Chemical Manufacturing",
    "index": "Industrial alcohol manufacturing"
  },
  {
    "code": "3499",
    "description": "Other Machinery and Equipment Wholesaling n",
    "index": "Industrial brush wholesaling"
  },
  {
    "code": "3020",
    "description": "Non-Residential Building Construction",
    "index": "Industrial building construction"
  },
  {
    "code": "6923",
    "description": "Engineering Design and Engineering Consulting Services",
    "index": "Industrial design service"
  },
  {
    "code": "1701",
    "description": "Petroleum Refining and Petroleum Fuels Manufacturing",
    "index": "Industrial diesel manufacturing"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing",
    "index": "Industrial gas manufacturing n.e.c."
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Industrial oil or fat wholesaling"
  },
  {
    "code": "7540",
    "description": "Justice",
    "index": "Industrial relations court operation"
  },
  {
    "code": "6910",
    "description": "Scientific Research Services",
    "index": "Industrial research service"
  },
  {
    "code": "1813",
    "description": "Basic Inorganic Chemical Manufacturing",
    "index": "Industrial salt manufacturing"
  },
  {
    "code": "9552",
    "description": "Labour Association Services",
    "index": "Industrial union operation"
  },
  {
    "code": "2919",
    "description": "Other Waste Collection Services",
    "index": "Industrial waste (except solid) collection service"
  },
  {
    "code": "2911",
    "description": "Solid Waste Collection Services",
    "index": "Industrial waste, solid, collection service"
  },
  {
    "code": "1351",
    "description": "Clothing Manufacturing",
    "index": "Infants' clothing manufacturing"
  },
  {
    "code": "1133",
    "description": "Cheese and Other Dairy Product Manufacturing",
    "index": "Infants' milk-based formula and food manufacturing"
  },
  {
    "code": "8401",
    "description": "Hospitals (except Psychiatric Hospitals)",
    "index": "Infectious diseases hospital (including human quarantine stations)"
  },
  {
    "code": "2392",
    "description": "Boatbuilding and Repair Services",
    "index": "Inflatable boat manufacturing"
  },
  {
    "code": "8101",
    "description": "Technical and Vocational Education and Training",
    "index": "Information technology training centre operation"
  },
  {
    "code": "1916",
    "description": "Paint and Coatings Manufacturing",
    "index": "Ink manufacturing n.e.c."
  },
  {
    "code": "4272",
    "description": "Stationery Goods Retailing",
    "index": "Ink retailing"
  },
  {
    "code": "1916",
    "description": "Paint and Coatings Manufacturing",
    "index": "Inkjet ink manufacturing"
  },
  {
    "code": "3492",
    "description": "Computer and Computer Peripherals Wholesaling",
    "index": "Inkjet printer wholesaling"
  },
  {
    "code": "2513",
    "description": "Mattress Manufacturing",
    "index": "Inner spring mattress manufacturing"
  },
  {
    "code": "1914",
    "description": "Tyre Manufacturing",
    "index": "Inner tube manufacturing"
  },
  {
    "code": "1813",
    "description": "Basic Inorganic Chemical Manufacturing",
    "index": "Inorganic dye or pigment manufacturing"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing",
    "index": "Inorganic gas manufacturing"
  },
  {
    "code": "7312",
    "description": "Buildings Pest Control Services",
    "index": "Insect control service (except agricultural and forestry)"
  },
  {
    "code": "1832",
    "description": "Pesticide Manufacturing",
    "index": "Insect repellent manufacturing"
  },
  {
    "code": "1832",
    "description": "Pesticide Manufacturing",
    "index": "Insecticide manufacturing"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Insecticide wholesaling"
  },
  {
    "code": "3232",
    "description": "Electrical Services",
    "index": "Installation of television antennae or cable"
  },
  {
    "code": "3232",
    "description": "Electrical Services",
    "index": "Installation of television satellite dish"
  },
  {
    "code": "8101",
    "description": "Technical and Vocational Education and Training",
    "index": "Institute of technology operation"
  },
  {
    "code": "8219",
    "description": "Adult, Community and Other Education n.e.c.",
    "index": "Instruction in diet, exercise and lifestyle factors"
  },
  {
    "code": "8219",
    "description": "Adult, Community and Other Education n.e.c.",
    "index": "Instruction through Universities of the Third Age and Schools for Seniors"
  },
  {
    "code": "2032",
    "description": "Plaster and Gypsum Product Manufacturing",
    "index": "Insulating board, plaster, manufacturing"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Insulating material wholesaling"
  },
  {
    "code": "1913",
    "description": "Polymer Foam Product Manufacturing",
    "index": "Insulation and cushioning material, polymer, manufacturing"
  },
  {
    "code": "3239",
    "description": "Other Building Installation Services",
    "index": "Insulation material installation"
  },
  {
    "code": "2090",
    "description": "Other Non-Metallic Mineral Product Manufacturing",
    "index": "Insulation, glass fibre or mineral wool, manufacturing"
  },
  {
    "code": "2010",
    "description": "Glass and Glass Product Manufacturing",
    "index": "Insulator, glass, manufacturing"
  },
  {
    "code": "2029",
    "description": "Other Ceramic Product Manufacturing",
    "index": "Insulator, porcelain, manufacturing"
  },
  {
    "code": "6420",
    "description": "Auxiliary Insurance Services",
    "index": "Insurance agency service"
  },
  {
    "code": "6420",
    "description": "Auxiliary Insurance Services",
    "index": "Insurance broking service"
  },
  {
    "code": "6420",
    "description": "Auxiliary Insurance Services",
    "index": "Insurance consultant service"
  },
  {
    "code": "6419",
    "description": "Other Auxiliary Finance and Investment Services",
    "index": "Insurance fund management service (on a commission or fee basis)"
  },
  {
    "code": "6322",
    "description": "General Insurance",
    "index": "Insurance provision n.e.c."
  },
  {
    "code": "2429",
    "description": "Other Electronic Equipment Manufacturing",
    "index": "Integrated circuit manufacturing"
  },
  {
    "code": "7711",
    "description": "Police Services",
    "index": "Intelligence service operation"
  },
  {
    "code": "2422",
    "description": "Communications Equipment Manufacturing",
    "index": "Intercom equipment manufacturing"
  },
  {
    "code": "9559",
    "description": "Other Interest Group Services n.e.c.",
    "index": "Interest group service n.e.c."
  },
  {
    "code": "6924",
    "description": "Other Specialised Design Services",
    "index": "Interior design service"
  },
  {
    "code": "8021",
    "description": "Primary Education",
    "index": "Intermediate school operation (NZ only)"
  },
  {
    "code": "3499",
    "description": "Other Machinery and Equipment Wholesaling n",
    "index": "Internal combustion engine wholesaling (except motor vehicle engines)"
  },
  {
    "code": "7552",
    "description": "Foreign Government Representation",
    "index": "International government organisation (United Nations, World Trade Organisation, e.t.c.) administration"
  },
  {
    "code": "4810",
    "description": "Water Freight Transport",
    "index": "International sea freight transport service between domestic and international ports"
  },
  {
    "code": "5801",
    "description": "Wired Telecommunications Network Operation",
    "index": "International telephone network operation (wired)"
  },
  {
    "code": "5910",
    "description": "Internet Access Services",
    "index": "Internet access provision"
  },
  {
    "code": "5910",
    "description": "Internet Access Services",
    "index": "Internet access service, on-line"
  },
  {
    "code": "7000",
    "description": "Computer Systems Design and Related Services",
    "index": "Internet and web design consulting service"
  },
  {
    "code": "5700",
    "description": "Internet Publishing and Broadcasting",
    "index": "Internet art print publishing"
  },
  {
    "code": "5700",
    "description": "Internet Publishing and Broadcasting",
    "index": "Internet atlas publishing"
  },
  {
    "code": "5700",
    "description": "Internet Publishing and Broadcasting",
    "index": "Internet audio broadcasting"
  },
  {
    "code": "5700",
    "description": "Internet Publishing and Broadcasting",
    "index": "Internet book publishing"
  },
  {
    "code": "5700",
    "description": "Internet Publishing and Broadcasting",
    "index": "Internet directory publishing"
  },
  {
    "code": "5700",
    "description": "Internet Publishing and Broadcasting",
    "index": "Internet encyclopaedia and dictionary publishing"
  },
  {
    "code": "9209",
    "description": "Other Gambling Activities",
    "index": "Internet gambling operation"
  },
  {
    "code": "5700",
    "description": "Internet Publishing and Broadcasting",
    "index": "Internet greeting card publishing"
  },
  {
    "code": "5700",
    "description": "Internet Publishing and Broadcasting",
    "index": "Internet journal publishing"
  },
  {
    "code": "5700",
    "description": "Internet Publishing and Broadcasting",
    "index": "Internet magazine publishing"
  },
  {
    "code": "5700",
    "description": "Internet Publishing and Broadcasting",
    "index": "Internet news publishing"
  },
  {
    "code": "5700",
    "description": "Internet Publishing and Broadcasting",
    "index": "Internet periodical publishing"
  },
  {
    "code": "4310",
    "description": "Non Store Retailing",
    "index": "Internet retailing"
  },
  {
    "code": "5910",
    "description": "Internet Access Services",
    "index": "Internet search portal operation"
  },
  {
    "code": "5910",
    "description": "Internet Access Services",
    "index": "Internet search web site operation"
  },
  {
    "code": "5910",
    "description": "Internet Access Services",
    "index": "Internet service provision (ISP)"
  },
  {
    "code": "5700",
    "description": "Internet Publishing and Broadcasting",
    "index": "Internet video broadcasting"
  },
  {
    "code": "6999",
    "description": "Other Professional, Scientific and Technical Services n.e.c.",
    "index": "Interpretation service"
  },
  {
    "code": "4621",
    "description": "Interurban and Rural Bus Transport",
    "index": "Interurban bus service"
  },
  {
    "code": "9539",
    "description": "Other Personal Services n.e.c.",
    "index": "Introductory agency operation"
  },
  {
    "code": "6240",
    "description": "Financial Asset Investing",
    "index": "Investment operation (own account; in predominantly financial assets; except superannuation funds)"
  },
  {
    "code": "0801",
    "description": "Iron Ore Mining",
    "index": "Iron ore dressing or beneficiating"
  },
  {
    "code": "0801",
    "description": "Iron Ore Mining",
    "index": "Iron ore mining"
  },
  {
    "code": "0809",
    "description": "Other Metal Ore Mining",
    "index": "Iron pyrite mining"
  },
  {
    "code": "0801",
    "description": "Iron Ore Mining",
    "index": "Iron sand mining"
  },
  {
    "code": "2469",
    "description": "Other Specialised Machinery and Equipment Manufacturing",
    "index": "Ironing or pressing machinery, industrial, manufacturing"
  },
  {
    "code": "2461",
    "description": "Agricultural Machinery and Equipment Manufacturing",
    "index": "Irrigation equipment manufacturing"
  },
  {
    "code": "3109",
    "description": "Other Heavy and Civil Engineering Construction",
    "index": "Irrigation system construction"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing",
    "index": "Isobutane gas manufacturing"
  },
  {
    "code": "2462",
    "description": "Mining and Construction Machinery Manufacturing",
    "index": "Jack hammer manufacturing"
  },
  {
    "code": "1340",
    "description": "Knitted Product Manufacturing",
    "index": "Jacket, knitted, manufacturing"
  },
  {
    "code": "2491",
    "description": "Lifting and Material Handling Equipment Manufacturing",
    "index": "Jacking equipment manufacturing"
  },
  {
    "code": "0990",
    "description": "Other Non-Metallic Mineral Mining and Quarrying",
    "index": "Jade mining"
  },
  {
    "code": "1140",
    "description": "Fruit and Vegetable Processing",
    "index": "Jam manufacturing (including conserves, jellies or fruit spreads)"
  },
  {
    "code": "7311",
    "description": "Buildings Cleaning Services",
    "index": "Janitorial service (including transport equipment)"
  },
  {
    "code": "1320",
    "description": "Leather Tanning and Fur Dressing",
    "index": "Japanning hides and skins"
  },
  {
    "code": "2010",
    "description": "Glass and Glass Product Manufacturing",
    "index": "Jar, glass, manufacturing"
  },
  {
    "code": "1351",
    "description": "Clothing Manufacturing",
    "index": "Jeans manufacturing"
  },
  {
    "code": "1199",
    "description": "Other Food Products Manufacturing n.e.c.",
    "index": "Jelly crystal manufacturing"
  },
  {
    "code": "1340",
    "description": "Knitted Product Manufacturing",
    "index": "Jersey, knitted, manufacturing"
  },
  {
    "code": "2392",
    "description": "Boatbuilding and Repair Services",
    "index": "Jet boat building"
  },
  {
    "code": "1701",
    "description": "Petroleum Refining and Petroleum Fuels Manufacturing",
    "index": "Jet fuel manufacturing"
  },
  {
    "code": "3499",
    "description": "Other Machinery and Equipment Wholesaling n",
    "index": "Jetski part wholesaling"
  },
  {
    "code": "3499",
    "description": "Other Machinery and Equipment Wholesaling n",
    "index": "Jetski wholesaling"
  },
  {
    "code": "3109",
    "description": "Other Heavy and Civil Engineering Construction",
    "index": "Jetty construction"
  },
  {
    "code": "6924",
    "description": "Other Specialised Design Services",
    "index": "Jewellery design service"
  },
  {
    "code": "9499",
    "description": "Other Repair and Maintenance n.e.c.",
    "index": "Jewellery repair"
  },
  {
    "code": "4253",
    "description": "Watch and Jewellery Retailing",
    "index": "Jewellery retailing"
  },
  {
    "code": "3732",
    "description": "Jewellery and Watch Wholesaling",
    "index": "Jewellery wholesaling"
  },
  {
    "code": "3242",
    "description": "Carpentry Services",
    "index": "Joinery work on construction projects (on-site fabrication only)"
  },
  {
    "code": "2221",
    "description": "Structural Steel Fabricating",
    "index": "Joist, prefabricated steel, manufacturing"
  },
  {
    "code": "5412",
    "description": "Magazine and Other Periodical Publishing",
    "index": "Journal (including trade journal) publishing (except internet)"
  },
  {
    "code": "9002",
    "description": "Creative Artists, Musicians, Writers and Performers",
    "index": "Journalistic service"
  },
  {
    "code": "2421",
    "description": "Computer and Electronic Office Equipment Manufacturing",
    "index": "Joystick manufacturing"
  },
  {
    "code": "7540",
    "description": "Justice",
    "index": "Judicial authority operation (federal or state)"
  },
  {
    "code": "4512",
    "description": "Takeaway Food Services",
    "index": "Juice bar operation"
  },
  {
    "code": "2469",
    "description": "Other Specialised Machinery and Equipment Manufacturing",
    "index": "Juice extractor, fruit or vegetable, commercial, manufacturing"
  },
  {
    "code": "0159",
    "description": "Other Crop Growing n.e.c.",
    "index": "Jute growing"
  },
  {
    "code": "1331",
    "description": "Textile Floor Covering Manufacturing",
    "index": "Jute matting manufacturing"
  },
  {
    "code": "7714",
    "description": "Correctional and Detention Services",
    "index": "Juvenile detention centre operation"
  },
  {
    "code": "0420",
    "description": "Hunting and Trapping",
    "index": "Kangaroo hunting"
  },
  {
    "code": "0301",
    "description": "Forestry",
    "index": "Kauri gum digging"
  },
  {
    "code": "9202",
    "description": "Lottery Operation",
    "index": "Keno operation"
  },
  {
    "code": "3499",
    "description": "Other Machinery and Equipment Wholesaling n",
    "index": "Kerosene heater wholesaling"
  },
  {
    "code": "2449",
    "description": "Other Domestic Appliance Manufacturing",
    "index": "Kerosene heater, domestic, manufacturing"
  },
  {
    "code": "1701",
    "description": "Petroleum Refining and Petroleum Fuels Manufacturing",
    "index": "Kerosene manufacturing"
  },
  {
    "code": "4000",
    "description": "Fuel Retailing",
    "index": "Kerosene retailing"
  },
  {
    "code": "3321",
    "description": "Petroleum Product Wholesaling",
    "index": "Kerosene wholesaling"
  },
  {
    "code": "2449",
    "description": "Other Domestic Appliance Manufacturing",
    "index": "Kettle or jug, electric, manufacturing"
  },
  {
    "code": "9499",
    "description": "Other Repair and Maintenance n.e.c.",
    "index": "Key duplicating"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Key manufacturing"
  },
  {
    "code": "2421",
    "description": "Computer and Electronic Office Equipment Manufacturing",
    "index": "Keyboard manufacturing"
  },
  {
    "code": "3492",
    "description": "Computer and Computer Peripherals Wholesaling",
    "index": "Keyboard wholesaling"
  },
  {
    "code": "1413",
    "description": "Timber Resawing and Dressing",
    "index": "Kiln drying timber"
  },
  {
    "code": "8010",
    "description": "Preschool Education",
    "index": "Kindergarten, preschool, operation (except child minding centre)"
  },
  {
    "code": "7320",
    "description": "Packaging Services",
    "index": "Kit assembling and packaging service"
  },
  {
    "code": "2222",
    "description": "Prefabricated Metal Building Manufacturing",
    "index": "Kit set home, prefabricated metal, manufacturing"
  },
  {
    "code": "1491",
    "description": "Prefabricated Wooden Building Manufacturing",
    "index": "Kit set home, prefabricated wood, manufacturing"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Kitchen appliance, electric, wholesaling"
  },
  {
    "code": "4213",
    "description": "Houseware Retailing",
    "index": "Kitchenware retailing"
  },
  {
    "code": "3733",
    "description": "Kitchen and Dining Ware Wholesaling",
    "index": "Kitchenware wholesaling"
  },
  {
    "code": "2010",
    "description": "Glass and Glass Product Manufacturing",
    "index": "Kitchenware, glass, manufacturing"
  },
  {
    "code": "0132",
    "description": "Kiwifruit Growing",
    "index": "Kiwifruit growing"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Knife blank manufacturing"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Knife, hand held, manufacturing (except power operated)"
  },
  {
    "code": "1340",
    "description": "Knitted Product Manufacturing",
    "index": "Knitted fabric manufacturing"
  },
  {
    "code": "2469",
    "description": "Other Specialised Machinery and Equipment Manufacturing",
    "index": "Knitting machine, industrial, manufacturing"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing",
    "index": "Krypton gas manufacturing"
  },
  {
    "code": "0123",
    "description": "Vegetable Growing (Outdoors)",
    "index": "Kumara growing (outdoors)"
  },
  {
    "code": "0990",
    "description": "Other Non-Metallic Mineral Mining and Quarrying",
    "index": "Kyanite mining"
  },
  {
    "code": "1334",
    "description": "Textile Finishing and Other Textile Product Manufacturing",
    "index": "Label, printed cloth, manufacturing"
  },
  {
    "code": "1334",
    "description": "Textile Finishing and Other Textile Product Manufacturing",
    "index": "Label, woven cloth, manufacturing"
  },
  {
    "code": "2419",
    "description": "Other Professional and Scientific Equipment Manufacturing",
    "index": "Laboratory analytic instrument manufacturing"
  },
  {
    "code": "2010",
    "description": "Glass and Glass Product Manufacturing",
    "index": "Laboratory glassware manufacturing"
  },
  {
    "code": "9422",
    "description": "Electronic (except Domestic Appliance) and Precision Equipment Repair and Maintenance",
    "index": "Laboratory instrument repair and maintenance"
  },
  {
    "code": "6925",
    "description": "Scientific Testing and Analysis Services",
    "index": "Laboratory operation (providing chemical, food, electrical engineering or other technical services)"
  },
  {
    "code": "7212",
    "description": "Labour Supply Services",
    "index": "Labour on-hiring service"
  },
  {
    "code": "7212",
    "description": "Labour Supply Services",
    "index": "Labour staffing service"
  },
  {
    "code": "7212",
    "description": "Labour Supply Services",
    "index": "Labour supply service"
  },
  {
    "code": "3711",
    "description": "Textile Product Wholesaling",
    "index": "Lace wholesaling"
  },
  {
    "code": "1351",
    "description": "Clothing Manufacturing",
    "index": "Laces manufacturing"
  },
  {
    "code": "1313",
    "description": "Synthetic Fibre Textile Manufacturing",
    "index": "Lacing, woven, manufacturing"
  },
  {
    "code": "1916",
    "description": "Paint and Coatings Manufacturing",
    "index": "Lacquer manufacturing"
  },
  {
    "code": "4231",
    "description": "Hardware and Building Supplies Retailing",
    "index": "Lacquer retailing"
  },
  {
    "code": "1812",
    "description": "Basic Organic Chemical Manufacturing",
    "index": "Lactic acid manufacturing"
  },
  {
    "code": "1133",
    "description": "Cheese and Other Dairy Product Manufacturing",
    "index": "Lactose manufacturing"
  },
  {
    "code": "1812",
    "description": "Basic Organic Chemical Manufacturing",
    "index": "Lake colour manufacturing"
  },
  {
    "code": "3109",
    "description": "Other Heavy and Civil Engineering Construction",
    "index": "Lake construction"
  },
  {
    "code": "2010",
    "description": "Glass and Glass Product Manufacturing",
    "index": "Laminated sheet glass manufacturing"
  },
  {
    "code": "1493",
    "description": "Veneer and Plywood Manufacturing",
    "index": "Laminated veneer lumber (LVL) manufacturing"
  },
  {
    "code": "1494",
    "description": "Reconstituted Wood Product Manufacturing",
    "index": "Laminations of timber and non-timber materials manufacturing"
  },
  {
    "code": "2432",
    "description": "Electric Lighting Equipment Manufacturing",
    "index": "Lamp, infra-red or ultra-violet, manufacturing"
  },
  {
    "code": "3212",
    "description": "Site Preparation Services",
    "index": "Land clearing"
  },
  {
    "code": "3211",
    "description": "Land Development and Subdivision",
    "index": "Land subdivision or development"
  },
  {
    "code": "6922",
    "description": "Surveying and Mapping Services",
    "index": "Land surveying service"
  },
  {
    "code": "6921",
    "description": "Architectural Services",
    "index": "Landscape architectural service"
  },
  {
    "code": "3291",
    "description": "Landscape Construction Services",
    "index": "Landscape construction"
  },
  {
    "code": "1311",
    "description": "Wool Scouring",
    "index": "Lanolin manufacturing"
  },
  {
    "code": "2591",
    "description": "Jewellery and Silverware Manufacturing",
    "index": "Lapidary work"
  },
  {
    "code": "2421",
    "description": "Computer and Electronic Office Equipment Manufacturing",
    "index": "Laptop manufacturing"
  },
  {
    "code": "1111",
    "description": "Meat Processing",
    "index": "Lard or tallow rendering"
  },
  {
    "code": "1150",
    "description": "Oil and Fat Manufacturing",
    "index": "Lard, refined, manufacturing"
  },
  {
    "code": "3492",
    "description": "Computer and Computer Peripherals Wholesaling",
    "index": "Laser printer wholesaling"
  },
  {
    "code": "2463",
    "description": "Machine Tool and Parts Manufacturing",
    "index": "Lathe, woodworking or metal working, manufacturing"
  },
  {
    "code": "9531",
    "description": "Laundry and Dry-Cleaning Services",
    "index": "Laundry agency operation"
  },
  {
    "code": "9531",
    "description": "Laundry and Dry-Cleaning Services",
    "index": "Laundry and dry-cleaning service"
  },
  {
    "code": "1851",
    "description": "Cleaning Compound Manufacturing",
    "index": "Laundry detergent manufacturing"
  },
  {
    "code": "2469",
    "description": "Other Specialised Machinery and Equipment Manufacturing",
    "index": "Laundry machinery, industrial, manufacturing"
  },
  {
    "code": "9531",
    "description": "Laundry and Dry-Cleaning Services",
    "index": "Laundry operation"
  },
  {
    "code": "0159",
    "description": "Other Crop Growing n.e.c.",
    "index": "Lavender growing"
  },
  {
    "code": "7540",
    "description": "Justice",
    "index": "Law court operation"
  },
  {
    "code": "2592",
    "description": "Toy, Sporting and Recreational Product Manufacturing",
    "index": "Lawn bowls equipment manufacturing"
  },
  {
    "code": "7313",
    "description": "Gardening Services",
    "index": "Lawn care service (e.g. fertilising, seeding, spraying)"
  },
  {
    "code": "3291",
    "description": "Landscape Construction Services",
    "index": "Lawn construction"
  },
  {
    "code": "2461",
    "description": "Agricultural Machinery and Equipment Manufacturing",
    "index": "Lawn mower manufacturing"
  },
  {
    "code": "9429",
    "description": "Other Machinery and Equipment Repair and Maintenance",
    "index": "Lawn mower repair and maintenance"
  },
  {
    "code": "4231",
    "description": "Hardware and Building Supplies Retailing",
    "index": "Lawn mower retailing"
  },
  {
    "code": "3411",
    "description": "Agricultural and Construction Machinery Wholesaling",
    "index": "Lawn mower wholesaling"
  },
  {
    "code": "7313",
    "description": "Gardening Services",
    "index": "Lawn mowing service"
  },
  {
    "code": "9551",
    "description": "Business and Professional Association Services",
    "index": "Lawyers' association operation"
  },
  {
    "code": "0807",
    "description": "Silver-Lead-Zinc Ore Mining",
    "index": "Lead ore mining"
  },
  {
    "code": "2922",
    "description": "Waste Remediation and Materials Recovery Services",
    "index": "Lead paint abatement service"
  },
  {
    "code": "2133",
    "description": "Copper, Silver, Lead, and Zinc Smelting and Refining",
    "index": "Lead smelting or refining"
  },
  {
    "code": "4251",
    "description": "Clothing Retailing",
    "index": "Leather clothing retailing"
  },
  {
    "code": "3712",
    "description": "Clothing and Footwear Wholesaling",
    "index": "Leather clothing wholesaling"
  },
  {
    "code": "3739",
    "description": "Other Goods Wholesaling n.e.c.",
    "index": "Leather good wholesaling (except clothing or footwear)"
  },
  {
    "code": "4259",
    "description": "Other Personal Accessories Retailing",
    "index": "Leather goods retailing (except clothing and footwear)"
  },
  {
    "code": "1320",
    "description": "Leather Tanning and Fur Dressing",
    "index": "Leather or leather substitute goods manufacturing n.e.c."
  },
  {
    "code": "1320",
    "description": "Leather Tanning and Fur Dressing",
    "index": "Leather packing, industrial, manufacturing"
  },
  {
    "code": "3319",
    "description": "Other Agricultural Product Wholesaling",
    "index": "Leather wholesaling"
  },
  {
    "code": "3419",
    "description": "Other Specialised Industrial Machinery and Equipment Wholesaling",
    "index": "Leather working machinery or equipment wholesaling"
  },
  {
    "code": "6931",
    "description": "Legal Services",
    "index": "Legal aid service"
  },
  {
    "code": "6931",
    "description": "Legal Services",
    "index": "Legal service"
  },
  {
    "code": "7551",
    "description": "Domestic Government Representation",
    "index": "Legation operation (domestic government)"
  },
  {
    "code": "7552",
    "description": "Foreign Government Representation",
    "index": "Legation operation (foreign government)"
  },
  {
    "code": "7510",
    "description": "Central Government Administration",
    "index": "Legislation enactment (central government)"
  },
  {
    "code": "7520",
    "description": "State Government Administration",
    "index": "Legislation enactment and enforcement (state government)"
  },
  {
    "code": "0136",
    "description": "Citrus Fruit Growing",
    "index": "Lemon growing"
  },
  {
    "code": "6010",
    "description": "Libraries and Archives",
    "index": "Lending library operation"
  },
  {
    "code": "2239",
    "description": "Other Metal Container Manufacturing",
    "index": "Letter box, metal, manufacturing"
  },
  {
    "code": "7292",
    "description": "Document Preparation Services",
    "index": "Letter writing service"
  },
  {
    "code": "0122",
    "description": "Vegetable Growing (Under Cover)",
    "index": "Lettuce growing (under cover)"
  },
  {
    "code": "0805",
    "description": "Mineral Sand Mining",
    "index": "Leucoxene sand mining"
  },
  {
    "code": "3212",
    "description": "Site Preparation Services",
    "index": "Levelling (construction sites)"
  },
  {
    "code": "6010",
    "description": "Libraries and Archives",
    "index": "Library operation (except motion picture stock footage and distribution)"
  },
  {
    "code": "7720",
    "description": "Regulatory Services",
    "index": "Licensing and permit issuance"
  },
  {
    "code": "1182",
    "description": "Confectionery Manufacturing",
    "index": "Licorice manufacturing"
  },
  {
    "code": "6310",
    "description": "Life Insurance",
    "index": "Life insurance provision"
  },
  {
    "code": "1333",
    "description": "Cut and Sewn Textile Product Manufacturing",
    "index": "Life jacket manufacturing"
  },
  {
    "code": "6310",
    "description": "Life Insurance",
    "index": "Life reinsurance provision"
  },
  {
    "code": "9112",
    "description": "Sport and Physical Recreation Clubs and Sports Professionals",
    "index": "Life-saving club operation"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Light fitting, electric, wholesaling"
  },
  {
    "code": "2313",
    "description": "Automotive Electrical Components Manufacturing",
    "index": "Light fittings, automotive, manufacturing"
  },
  {
    "code": "1912",
    "description": "Rigid and Semi Rigid Polymer Product Manufacturing",
    "index": "Light switch and plug, polymer, manufacturing"
  },
  {
    "code": "5219",
    "description": "Other Water Transport Support Services",
    "index": "Lighterage service"
  },
  {
    "code": "0600",
    "description": "Coal Mining",
    "index": "Lignite mining"
  },
  {
    "code": "2031",
    "description": "Cement and Lime Manufacturing",
    "index": "Lime manufacturing"
  },
  {
    "code": "0919",
    "description": "Other Construction Material Mining",
    "index": "Limestone quarrying"
  },
  {
    "code": "0413",
    "description": "Line Fishing",
    "index": "Line fishing"
  },
  {
    "code": "9531",
    "description": "Laundry and Dry-Cleaning Services",
    "index": "Linen hire service"
  },
  {
    "code": "4214",
    "description": "Manchester and Other Textile Goods Retailing",
    "index": "Linen retailing"
  },
  {
    "code": "3711",
    "description": "Textile Product Wholesaling",
    "index": "Linen wholesaling"
  },
  {
    "code": "3243",
    "description": "Tiling and Carpeting Services",
    "index": "Linoleum or linotile fixing"
  },
  {
    "code": "1852",
    "description": "Cosmetic and Toiletry Preparation Manufacturing",
    "index": "Lip balm manufacturing"
  },
  {
    "code": "1852",
    "description": "Cosmetic and Toiletry Preparation Manufacturing",
    "index": "Lipstick manufacturing"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Liquefied gas wholesaling (except liquefied petroleum gas)"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing",
    "index": "Liquefied natural gas manufacturing"
  },
  {
    "code": "1701",
    "description": "Petroleum Refining and Petroleum Fuels Manufacturing",
    "index": "Liquefied petroleum gas (LPG) manufacturing (in conjunction with petroleum refining)"
  },
  {
    "code": "3321",
    "description": "Petroleum Product Wholesaling",
    "index": "Liquefied petroleum gas (LPG) wholesaling (in bulk or in containers)"
  },
  {
    "code": "2700",
    "description": "Gas Supply",
    "index": "Liquefied petroleum gas distribution through mains system"
  },
  {
    "code": "2700",
    "description": "Gas Supply",
    "index": "Liquefied petroleum gas reforming for distribution through mains system"
  },
  {
    "code": "1213",
    "description": "Spirit Manufacturing",
    "index": "Liqueur manufacturing"
  },
  {
    "code": "1133",
    "description": "Cheese and Other Dairy Product Manufacturing",
    "index": "Liquid ice cream, soft serve or milk shake mix manufacturing"
  },
  {
    "code": "2919",
    "description": "Other Waste Collection Services",
    "index": "Liquid waste collection service"
  },
  {
    "code": "2919",
    "description": "Other Waste Collection Services",
    "index": "Liquid waste haulage service (local)"
  },
  {
    "code": "0990",
    "description": "Other Non-Metallic Mineral Mining and Quarrying",
    "index": "Lithium mineral mining"
  },
  {
    "code": "3800",
    "description": "Commission Based Wholesaling",
    "index": "Livestock agent"
  },
  {
    "code": "0529",
    "description": "Other Agriculture and Fishing Support Services",
    "index": "Livestock dipping"
  },
  {
    "code": "0529",
    "description": "Other Agriculture and Fishing Support Services",
    "index": "Livestock drafting or droving"
  },
  {
    "code": "0199",
    "description": "Other Livestock Farming n.e.c.",
    "index": "Livestock raising n.e.c."
  },
  {
    "code": "3319",
    "description": "Other Agricultural Product Wholesaling",
    "index": "Livestock wholesaling"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Livestock yarding equipment, metal, manufacturing"
  },
  {
    "code": "7530",
    "description": "Local Government Administration",
    "index": "Local government administration (except justice)"
  },
  {
    "code": "5801",
    "description": "Wired Telecommunications Network Operation",
    "index": "Local telephone network operation (wired)"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Lock manufacturing"
  },
  {
    "code": "4231",
    "description": "Hardware and Building Supplies Retailing",
    "index": "Lock retailing"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Lock wholesaling"
  },
  {
    "code": "7712",
    "description": "Investigation and Security Services",
    "index": "Locksmith service"
  },
  {
    "code": "2393",
    "description": "Railway Rolling Stock Manufacturing and Repair Services",
    "index": "Locomotive manufacturing"
  },
  {
    "code": "4610",
    "description": "Road Freight Transport",
    "index": "Log haulage service (road)"
  },
  {
    "code": "1411",
    "description": "Log Sawmilling",
    "index": "Log sawmilling"
  },
  {
    "code": "0133",
    "description": "Berry Fruit Growing",
    "index": "Loganberry growing"
  },
  {
    "code": "0302",
    "description": "Logging",
    "index": "Logging"
  },
  {
    "code": "5801",
    "description": "Wired Telecommunications Network Operation",
    "index": "Long distance telephone network operation (wired)"
  },
  {
    "code": "0139",
    "description": "Other Fruit and Tree Nut Growing",
    "index": "Loquat growing"
  },
  {
    "code": "9202",
    "description": "Lottery Operation",
    "index": "Lottery agency operation"
  },
  {
    "code": "9202",
    "description": "Lottery Operation",
    "index": "Lottery operation"
  },
  {
    "code": "2429",
    "description": "Other Electronic Equipment Manufacturing",
    "index": "Loudspeaker manufacturing"
  },
  {
    "code": "2511",
    "description": "Wooden Furniture and Upholstered Seat Manufacturing",
    "index": "Lounge suite manufacturing"
  },
  {
    "code": "4000",
    "description": "Fuel Retailing",
    "index": "LPG, automotive, retailing"
  },
  {
    "code": "3499",
    "description": "Other Machinery and Equipment Wholesaling n",
    "index": "Lubricating machinery or equipment wholesaling"
  },
  {
    "code": "1709",
    "description": "Other Petroleum and Coal Product Manufacturing",
    "index": "Lubricating oil and grease manufacturing"
  },
  {
    "code": "4000",
    "description": "Fuel Retailing",
    "index": "Lubricating oil or grease retailing"
  },
  {
    "code": "1192",
    "description": "Prepared Animal and Bird Feed Manufacturing",
    "index": "Lucerne cube manufacturing"
  },
  {
    "code": "0159",
    "description": "Other Crop Growing n.e.c.",
    "index": "Lucerne growing"
  },
  {
    "code": "1192",
    "description": "Prepared Animal and Bird Feed Manufacturing",
    "index": "Lucerne meal manufacturing"
  },
  {
    "code": "9499",
    "description": "Other Repair and Maintenance n.e.c.",
    "index": "Luggage repair"
  },
  {
    "code": "4259",
    "description": "Other Personal Accessories Retailing",
    "index": "Luggage retailing"
  },
  {
    "code": "3739",
    "description": "Other Goods Wholesaling n.e.c.",
    "index": "Luggage wholesaling"
  },
  {
    "code": "0149",
    "description": "Other Grain Growing",
    "index": "Lupin growing"
  },
  {
    "code": "0139",
    "description": "Other Fruit and Tree Nut Growing",
    "index": "Macadamia nut growing"
  },
  {
    "code": "3419",
    "description": "Other Specialised Industrial Machinery and Equipment Wholesaling",
    "index": "Machine attachment, part or accessory wholesaling"
  },
  {
    "code": "1320",
    "description": "Leather Tanning and Fur Dressing",
    "index": "Machine belting, leather or leather substitute, manufacturing"
  },
  {
    "code": "2240",
    "description": "Other Sheet Metal Product Manufacturing",
    "index": "Machine guard, sheet metal, manufacturing"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Machine knife or blades manufacturing"
  },
  {
    "code": "2292",
    "description": "Nut, Bolt, Screw and Rivet Manufacturing",
    "index": "Machine screw, metal, manufacturing"
  },
  {
    "code": "2463",
    "description": "Machine Tool and Parts Manufacturing",
    "index": "Machine tool attachment or parts manufacturing n.e.c."
  },
  {
    "code": "9429",
    "description": "Other Machinery and Equipment Repair and Maintenance",
    "index": "Machine tool repair and maintenance"
  },
  {
    "code": "3419",
    "description": "Other Specialised Industrial Machinery and Equipment Wholesaling",
    "index": "Machine tool wholesaling"
  },
  {
    "code": "3499",
    "description": "Other Machinery and Equipment Wholesaling n",
    "index": "Machinery and equipment wholesaling n.e.c."
  },
  {
    "code": "2499",
    "description": "Other Machinery and Equipment Manufacturing n.e.c.",
    "index": "Machinery or equipment manufacturing n.e.c."
  },
  {
    "code": "5412",
    "description": "Magazine and Other Periodical Publishing",
    "index": "Magazine publishing (except internet)"
  },
  {
    "code": "4244",
    "description": "Newspaper and Book Retailing",
    "index": "Magazine retailing"
  },
  {
    "code": "3735",
    "description": "Book and Magazine Wholesaling",
    "index": "Magazine wholesaling"
  },
  {
    "code": "0990",
    "description": "Other Non-Metallic Mineral Mining and Quarrying",
    "index": "Magnesite mining"
  },
  {
    "code": "2439",
    "description": "Other Electrical Equipment Manufacturing",
    "index": "Magnet manufacturing"
  },
  {
    "code": "2419",
    "description": "Other Professional and Scientific Equipment Manufacturing",
    "index": "Magnetic resonance imaging (except medical) equipment manufacturing"
  },
  {
    "code": "2412",
    "description": "Medical and Surgical Equipment Manufacturing",
    "index": "Magnetic resonance imaging (medical) equipment manufacturing"
  },
  {
    "code": "5101",
    "description": "Postal Services",
    "index": "Mail service"
  },
  {
    "code": "5101",
    "description": "Postal Services",
    "index": "Mailbox rental service"
  },
  {
    "code": "5414",
    "description": "Directory and Mailing List Publishing",
    "index": "Mailing list publishing (except internet)"
  },
  {
    "code": "7313",
    "description": "Gardening Services",
    "index": "Maintenance of plants and shrubs in buildings"
  },
  {
    "code": "0149",
    "description": "Other Grain Growing",
    "index": "Maize growing"
  },
  {
    "code": "9511",
    "description": "Hairdressing and Beauty Services",
    "index": "Make-up service"
  },
  {
    "code": "1161",
    "description": "Grain Mill Product Manufacturing",
    "index": "Malt extract manufacturing"
  },
  {
    "code": "1161",
    "description": "Grain Mill Product Manufacturing",
    "index": "Malt manufacturing"
  },
  {
    "code": "1133",
    "description": "Cheese and Other Dairy Product Manufacturing",
    "index": "Malted milk powder manufacturing"
  },
  {
    "code": "6962",
    "description": "Management Advice and Other Consulting Services",
    "index": "Management consulting service"
  },
  {
    "code": "0136",
    "description": "Citrus Fruit Growing",
    "index": "Mandarin growing"
  },
  {
    "code": "0809",
    "description": "Other Metal Ore Mining",
    "index": "Manganese ore mining"
  },
  {
    "code": "0139",
    "description": "Other Fruit and Tree Nut Growing",
    "index": "Mango growing"
  },
  {
    "code": "2034",
    "description": "Concrete Product Manufacturing",
    "index": "Manhole cover, concrete, manufacturing"
  },
  {
    "code": "9551",
    "description": "Business and Professional Association Services",
    "index": "Manufacturers' association operation"
  },
  {
    "code": "3800",
    "description": "Commission Based Wholesaling",
    "index": "Manufacturer's sales agent"
  },
  {
    "code": "1174",
    "description": "Bakery Product Manufacturing (Non-factory-based)",
    "index": "Manufacturing and selling bread from the same premises (non-factory based)"
  },
  {
    "code": "1174",
    "description": "Bakery Product Manufacturing (Non-factory-based)",
    "index": "Manufacturing and selling other bakery products from the same premises (non-factory based)"
  },
  {
    "code": "2599",
    "description": "Other Manufacturing n.e.c.",
    "index": "Manufacturing n.e.c."
  },
  {
    "code": "6922",
    "description": "Surveying and Mapping Services",
    "index": "Map preparation service"
  },
  {
    "code": "4279",
    "description": "Other Store-Based Retailing n.e.c.",
    "index": "Map retailing"
  },
  {
    "code": "0919",
    "description": "Other Construction Material Mining",
    "index": "Marble quarrying"
  },
  {
    "code": "1150",
    "description": "Oil and Fat Manufacturing",
    "index": "Margarine manufacturing"
  },
  {
    "code": "3609",
    "description": "Other Grocery Wholesaling",
    "index": "Margarine wholesaling"
  },
  {
    "code": "4245",
    "description": "Marine Equipment Retailing",
    "index": "Marine accessory retailing n.e.c."
  },
  {
    "code": "2319",
    "description": "Other Motor Vehicle Parts Manufacturing",
    "index": "Marine conversion of automotive engines"
  },
  {
    "code": "2499",
    "description": "Other Machinery and Equipment Manufacturing n.e.c.",
    "index": "Marine engine manufacturing (except diesel inboard engines 37kW brake power and over)"
  },
  {
    "code": "3499",
    "description": "Other Machinery and Equipment Wholesaling n",
    "index": "Marine engine wholesaling"
  },
  {
    "code": "6923",
    "description": "Engineering Design and Engineering Consulting Services",
    "index": "Marine engineering consulting service"
  },
  {
    "code": "3499",
    "description": "Other Machinery and Equipment Wholesaling n",
    "index": "Marine equipment wholesaling n.e.c."
  },
  {
    "code": "2499",
    "description": "Other Machinery and Equipment Manufacturing n.e.c.",
    "index": "Marine jet unit manufacturing"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Marine oil wholesaling"
  },
  {
    "code": "0419",
    "description": "Other Fishing",
    "index": "Marine water fishery product gathering"
  },
  {
    "code": "6950",
    "description": "Market Research and Statistical Services",
    "index": "Market research service"
  },
  {
    "code": "9539",
    "description": "Other Personal Services n.e.c.",
    "index": "Marriage celebrant service"
  },
  {
    "code": "8790",
    "description": "Other Social Assistance Services",
    "index": "Marriage guidance service"
  },
  {
    "code": "1182",
    "description": "Confectionery Manufacturing",
    "index": "Marshmallow manufacturing"
  },
  {
    "code": "9112",
    "description": "Sport and Physical Recreation Clubs and Sports Professionals",
    "index": "Martial arts club operation"
  },
  {
    "code": "8211",
    "description": "Sports and Physical Recreation Instruction",
    "index": "Martial arts school operation"
  },
  {
    "code": "1182",
    "description": "Confectionery Manufacturing",
    "index": "Marzipan manufacturing"
  },
  {
    "code": "1852",
    "description": "Cosmetic and Toiletry Preparation Manufacturing",
    "index": "Mascara manufacturing"
  },
  {
    "code": "2292",
    "description": "Nut, Bolt, Screw and Rivet Manufacturing",
    "index": "Masonry anchor, metal, manufacturing"
  },
  {
    "code": "9534",
    "description": "Brothel Keeping and Prostitution Services",
    "index": "Massage parlour operation"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Mast, aluminium, manufacturing"
  },
  {
    "code": "1892",
    "description": "Explosives Manufacturing",
    "index": "Match manufacturing"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Match wholesaling"
  },
  {
    "code": "9429",
    "description": "Other Machinery and Equipment Repair and Maintenance",
    "index": "Material handling equipment repair and maintenance"
  },
  {
    "code": "3499",
    "description": "Other Machinery and Equipment Wholesaling n",
    "index": "Material handling equipment wholesaling"
  },
  {
    "code": "6923",
    "description": "Engineering Design and Engineering Consulting Services",
    "index": "Materials handling engineering consulting service"
  },
  {
    "code": "2922",
    "description": "Waste Remediation and Materials Recovery Services",
    "index": "Materials recovery station operation"
  },
  {
    "code": "2922",
    "description": "Waste Remediation and Materials Recovery Services",
    "index": "Materials separating and sorting operation"
  },
  {
    "code": "6925",
    "description": "Scientific Testing and Analysis Services",
    "index": "Materials strength testing service"
  },
  {
    "code": "8401",
    "description": "Hospitals (except Psychiatric Hospitals)",
    "index": "Maternity hospital"
  },
  {
    "code": "3491",
    "description": "Professional and Scientific Goods Wholesaling",
    "index": "Mathematical instrument wholesaling"
  },
  {
    "code": "8022",
    "description": "Secondary Education",
    "index": "Matriculation college operation (except combined primary/secondary school)"
  },
  {
    "code": "1920",
    "description": "Natural Rubber Product Manufacturing",
    "index": "Mattress protector, natural rubber, manufacturing"
  },
  {
    "code": "4211",
    "description": "Furniture Retailing",
    "index": "Mattress retailing"
  },
  {
    "code": "2513",
    "description": "Mattress Manufacturing",
    "index": "Mattress support manufacturing"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Mattress support, woven wire, link mesh or wire spring, manufacturing (except upholstered)"
  },
  {
    "code": "3731",
    "description": "Furniture and Floor Coverings Wholesaling",
    "index": "Mattress wholesaling"
  },
  {
    "code": "2513",
    "description": "Mattress Manufacturing",
    "index": "Mattress, plastic, rubber, latex or sponge, manufacturing"
  },
  {
    "code": "2513",
    "description": "Mattress Manufacturing",
    "index": "Mattress, upholstered, manufacturing"
  },
  {
    "code": "9520",
    "description": "Funeral, Crematorium and Cemetery Services",
    "index": "Mausoleum operation"
  },
  {
    "code": "1214",
    "description": "Wine and Other Alcoholic Beverage Manufacturing",
    "index": "Mead manufacturing"
  },
  {
    "code": "9422",
    "description": "Electronic (except Domestic Appliance) and Precision Equipment Repair and Maintenance",
    "index": "Measuring equipment repair and maintenance"
  },
  {
    "code": "2419",
    "description": "Other Professional and Scientific Equipment Manufacturing",
    "index": "Measuring instrument manufacturing"
  },
  {
    "code": "1111",
    "description": "Meat Processing",
    "index": "Meat extract or essence manufacturing"
  },
  {
    "code": "1111",
    "description": "Meat Processing",
    "index": "Meat manufacturing (except bacon, ham and poultry)"
  },
  {
    "code": "3319",
    "description": "Other Agricultural Product Wholesaling",
    "index": "Meat meal wholesaling"
  },
  {
    "code": "1111",
    "description": "Meat Processing",
    "index": "Meat or bone meal manufacturing (except fish or poultry meal)"
  },
  {
    "code": "1111",
    "description": "Meat Processing",
    "index": "Meat packing (except poultry)"
  },
  {
    "code": "1113",
    "description": "Cured Meat and Smallgoods Manufacturing",
    "index": "Meat speciality manufacturing"
  },
  {
    "code": "3602",
    "description": "Meat, Poultry and Smallgoods Wholesaling",
    "index": "Meat wholesaling (except canned)"
  },
  {
    "code": "1111",
    "description": "Meat Processing",
    "index": "Meat, canned, manufacturing (except poultry, bacon, ham and corned meat)"
  },
  {
    "code": "1111",
    "description": "Meat Processing",
    "index": "Meat, dehydrated, manufacturing (except poultry)"
  },
  {
    "code": "4121",
    "description": "Fresh Meat, Fish and Poultry Retailing",
    "index": "Meat, fresh, retailing"
  },
  {
    "code": "1111",
    "description": "Meat Processing",
    "index": "Meat, frozen, manufacturing (except poultry)"
  },
  {
    "code": "6923",
    "description": "Engineering Design and Engineering Consulting Services",
    "index": "Mechanical engineering consulting service"
  },
  {
    "code": "2591",
    "description": "Jewellery and Silverware Manufacturing",
    "index": "Medal manufacturing"
  },
  {
    "code": "9422",
    "description": "Electronic (except Domestic Appliance) and Precision Equipment Repair and Maintenance",
    "index": "Medical and surgical equipment repair and maintenance"
  },
  {
    "code": "9551",
    "description": "Business and Professional Association Services",
    "index": "Medical association operation"
  },
  {
    "code": "2412",
    "description": "Medical and Surgical Equipment Manufacturing",
    "index": "Medical diagnostic apparatus manufacturing"
  },
  {
    "code": "2412",
    "description": "Medical and Surgical Equipment Manufacturing",
    "index": "Medical equipment manufacturing"
  },
  {
    "code": "3491",
    "description": "Professional and Scientific Goods Wholesaling",
    "index": "Medical equipment wholesaling"
  },
  {
    "code": "8520",
    "description": "Pathology and Diagnostic Imaging Services",
    "index": "Medical laboratory service"
  },
  {
    "code": "6910",
    "description": "Scientific Research Services",
    "index": "Medical research service"
  },
  {
    "code": "2412",
    "description": "Medical and Surgical Equipment Manufacturing",
    "index": "Medical ultrasound equipment manufacturing"
  },
  {
    "code": "1841",
    "description": "Human Pharmaceutical and Medicinal Product Manufacturing",
    "index": "Medicinal capsule manufacturing"
  },
  {
    "code": "1841",
    "description": "Human Pharmaceutical and Medicinal Product Manufacturing",
    "index": "Medicinal chemical manufacturing"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing",
    "index": "Medicinal gas manufacturing"
  },
  {
    "code": "1841",
    "description": "Human Pharmaceutical and Medicinal Product Manufacturing",
    "index": "Medicinal ointment manufacturing"
  },
  {
    "code": "1841",
    "description": "Human Pharmaceutical and Medicinal Product Manufacturing",
    "index": "Medicine manufacturing (except veterinary)"
  },
  {
    "code": "3720",
    "description": "Pharmaceutical and Toiletry Goods Wholesaling",
    "index": "Medicine wholesaling"
  },
  {
    "code": "1494",
    "description": "Reconstituted Wood Product Manufacturing",
    "index": "Medium density fibreboard (MDF) manufacturing"
  },
  {
    "code": "1821",
    "description": "Synthetic Resin and Synthetic Rubber Manufacturing",
    "index": "Melamine formaldehyde manufacturing"
  },
  {
    "code": "0123",
    "description": "Vegetable Growing (Outdoors)",
    "index": "Melon growing (outdoors)"
  },
  {
    "code": "9520",
    "description": "Funeral, Crematorium and Cemetery Services",
    "index": "Memorial garden (i.e. burial place) operation"
  },
  {
    "code": "1351",
    "description": "Clothing Manufacturing",
    "index": "Men's and boys' wear manufacturing"
  },
  {
    "code": "7293",
    "description": "Credit Reporting and Debt Collection Services",
    "index": "Mercantile credit reporting service"
  },
  {
    "code": "6962",
    "description": "Management Advice and Other Consulting Services",
    "index": "Merchandising consulting service"
  },
  {
    "code": "6229",
    "description": "Other Depository Financial Intermediation",
    "index": "Merchant banking operation"
  },
  {
    "code": "9131",
    "description": "Amusement Parks and Centres Operation",
    "index": "Merry-go-round operation"
  },
  {
    "code": "5102",
    "description": "Courier Pick-up and Delivery Services",
    "index": "Messenger service"
  },
  {
    "code": "2911",
    "description": "Solid Waste Collection Services",
    "index": "Metal barrel/skip hiring and waste collection service"
  },
  {
    "code": "2293",
    "description": "Metal Coating and Finishing",
    "index": "Metal coating n.e.c."
  },
  {
    "code": "2239",
    "description": "Other Metal Container Manufacturing",
    "index": "Metal container, metal, manufacturing n.e.c."
  },
  {
    "code": "2512",
    "description": "Metal Furniture Manufacturing",
    "index": "Metal furniture manufacturing n.e.c."
  },
  {
    "code": "2463",
    "description": "Machine Tool and Parts Manufacturing",
    "index": "Metal moulding machinery manufacturing"
  },
  {
    "code": "2293",
    "description": "Metal Coating and Finishing",
    "index": "Metal polishing or finishing"
  },
  {
    "code": "3223",
    "description": "Roofing Services",
    "index": "Metal roof fixing"
  },
  {
    "code": "3322",
    "description": "Metal and Mineral Wholesaling",
    "index": "Metal scrap wholesaling"
  },
  {
    "code": "3224",
    "description": "Structural Steel Erection Services",
    "index": "Metal silo erection"
  },
  {
    "code": "3224",
    "description": "Structural Steel Erection Services",
    "index": "Metal storage tank erection"
  },
  {
    "code": "2231",
    "description": "Boiler, Tank and Other Heavy Gauge Metal Container Manufacturing",
    "index": "Metal vat or tank manufacturing"
  },
  {
    "code": "3299",
    "description": "Other Construction Services n.e.c.",
    "index": "Metal wall cladding fixing to buildings"
  },
  {
    "code": "0809",
    "description": "Other Metal Ore Mining",
    "index": "Metallic ore mining n.e.c."
  },
  {
    "code": "3322",
    "description": "Metal and Mineral Wholesaling",
    "index": "Metallic ore wholesaling"
  },
  {
    "code": "2463",
    "description": "Machine Tool and Parts Manufacturing",
    "index": "Metalworking machinery manufacturing n.e.c."
  },
  {
    "code": "3419",
    "description": "Other Specialised Industrial Machinery and Equipment Wholesaling",
    "index": "Metalworking machinery wholesaling"
  },
  {
    "code": "2419",
    "description": "Other Professional and Scientific Equipment Manufacturing",
    "index": "Meteorological instrument manufacturing n.e.c."
  },
  {
    "code": "9422",
    "description": "Electronic (except Domestic Appliance) and Precision Equipment Repair and Maintenance",
    "index": "Meteorological instrument repair and maintenance"
  },
  {
    "code": "6999",
    "description": "Other Professional, Scientific and Technical Services n.e.c.",
    "index": "Meteorological service"
  },
  {
    "code": "2034",
    "description": "Concrete Product Manufacturing",
    "index": "Meter box, concrete, manufacturing"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing",
    "index": "Methane manufacturing"
  },
  {
    "code": "1812",
    "description": "Basic Organic Chemical Manufacturing",
    "index": "Methanol manufacturing"
  },
  {
    "code": "1829",
    "description": "Other Basic Polymer Manufacturing",
    "index": "Methyl cellulose manufacturing"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Methylated spirit wholesaling"
  },
  {
    "code": "1829",
    "description": "Other Basic Polymer Manufacturing",
    "index": "Methylstyrene manufacturing"
  },
  {
    "code": "4622",
    "description": "Urban Bus Transport (Including Tramway)",
    "index": "Metropolitan bus service"
  },
  {
    "code": "4622",
    "description": "Urban Bus Transport (Including Tramway)",
    "index": "Metropolitan charter bus service"
  },
  {
    "code": "4720",
    "description": "Rail Passenger Transport",
    "index": "Metropolitan rail passenger service"
  },
  {
    "code": "0990",
    "description": "Other Non-Metallic Mineral Mining and Quarrying",
    "index": "Mica mining"
  },
  {
    "code": "2090",
    "description": "Other Non-Metallic Mineral Product Manufacturing",
    "index": "Mica product manufacturing"
  },
  {
    "code": "5921",
    "description": "Data Processing and Web Hosting Services",
    "index": "Microfiche or microfilm recording and imaging service"
  },
  {
    "code": "2429",
    "description": "Other Electronic Equipment Manufacturing",
    "index": "Microphone manufacturing"
  },
  {
    "code": "2411",
    "description": "Photographic, Optical and Ophthalmic Equipment Manufacturing",
    "index": "Microscope manufacturing"
  },
  {
    "code": "2441",
    "description": "Whiteware Appliance Manufacturing",
    "index": "Microwave oven, domestic, manufacturing"
  },
  {
    "code": "9421",
    "description": "Domestic Appliance Repair and Maintenance",
    "index": "Microwave oven, domestic, repair"
  },
  {
    "code": "8539",
    "description": "Other Allied Health Services",
    "index": "Midwifery service"
  },
  {
    "code": "1133",
    "description": "Cheese and Other Dairy Product Manufacturing",
    "index": "Milk and coffee mixtures, condensed or concentrated, manufacturing"
  },
  {
    "code": "1133",
    "description": "Cheese and Other Dairy Product Manufacturing",
    "index": "Milk powder manufacturing"
  },
  {
    "code": "3419",
    "description": "Other Specialised Industrial Machinery and Equipment Wholesaling",
    "index": "Milk processing machinery or equipment wholesaling"
  },
  {
    "code": "4310",
    "description": "Non Store Retailing",
    "index": "Milk vending"
  },
  {
    "code": "3603",
    "description": "Dairy Produce Wholesaling",
    "index": "Milk wholesaling (except canned)"
  },
  {
    "code": "3609",
    "description": "Other Grocery Wholesaling",
    "index": "Milk, dried, condensed or concentrated, wholesaling"
  },
  {
    "code": "1131",
    "description": "Milk and Cream Processing",
    "index": "Milk, low fat, manufacturing"
  },
  {
    "code": "1131",
    "description": "Milk and Cream Processing",
    "index": "Milk, pasteurised, manufacturing"
  },
  {
    "code": "0149",
    "description": "Other Grain Growing",
    "index": "Millet growing"
  },
  {
    "code": "4251",
    "description": "Clothing Retailing",
    "index": "Millinery retailing"
  },
  {
    "code": "3712",
    "description": "Clothing and Footwear Wholesaling",
    "index": "Millinery wholesaling"
  },
  {
    "code": "2463",
    "description": "Machine Tool and Parts Manufacturing",
    "index": "Milling machine, metalworking, manufacturing"
  },
  {
    "code": "2922",
    "description": "Waste Remediation and Materials Recovery Services",
    "index": "Mine reclamation activities"
  },
  {
    "code": "3109",
    "description": "Other Heavy and Civil Engineering Construction",
    "index": "Mine site construction n.e.c."
  },
  {
    "code": "0302",
    "description": "Logging",
    "index": "Mine timber hewing (forest)"
  },
  {
    "code": "3322",
    "description": "Metal and Mineral Wholesaling",
    "index": "Mineral earths wholesaling"
  },
  {
    "code": "2090",
    "description": "Other Non-Metallic Mineral Product Manufacturing",
    "index": "Mineral earths, ground, manufacturing"
  },
  {
    "code": "1012",
    "description": "Mineral Exploration",
    "index": "Mineral exploration"
  },
  {
    "code": "6640",
    "description": "Non-Financial Intangible Assets (except Copyrights) Leasing",
    "index": "Mineral exploration right on-leasing"
  },
  {
    "code": "0990",
    "description": "Other Non-Metallic Mineral Mining and Quarrying",
    "index": "Mineral pigment mining n.e.c."
  },
  {
    "code": "0805",
    "description": "Mineral Sand Mining",
    "index": "Mineral sand mining"
  },
  {
    "code": "1709",
    "description": "Other Petroleum and Coal Product Manufacturing",
    "index": "Mineral turpentine manufacturing"
  },
  {
    "code": "4231",
    "description": "Hardware and Building Supplies Retailing",
    "index": "Mineral turpentine retailing"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Mineral turpentine wholesaling"
  },
  {
    "code": "1211",
    "description": "Soft Drink, Cordial and Syrup Manufacturing",
    "index": "Mineral water manufacturing"
  },
  {
    "code": "2811",
    "description": "Water Supply",
    "index": "Mineral water supply from the ground"
  },
  {
    "code": "3322",
    "description": "Metal and Mineral Wholesaling",
    "index": "Mineral wholesaling n.e.c."
  },
  {
    "code": "2090",
    "description": "Other Non-Metallic Mineral Product Manufacturing",
    "index": "Mineral wool manufacturing"
  },
  {
    "code": "2090",
    "description": "Other Non-Metallic Mineral Product Manufacturing",
    "index": "Mineral wool product manufacturing"
  },
  {
    "code": "9131",
    "description": "Amusement Parks and Centres Operation",
    "index": "Mini-golf centre operation"
  },
  {
    "code": "9551",
    "description": "Business and Professional Association Services",
    "index": "Mining association operation"
  },
  {
    "code": "1090",
    "description": "Other Mining Support Services",
    "index": "Mining draining and pumping service"
  },
  {
    "code": "6923",
    "description": "Engineering Design and Engineering Consulting Services",
    "index": "Mining engineering consulting service"
  },
  {
    "code": "9429",
    "description": "Other Machinery and Equipment Repair and Maintenance",
    "index": "Mining machinery and equipment repair and maintenance"
  },
  {
    "code": "2462",
    "description": "Mining and Construction Machinery Manufacturing",
    "index": "Mining machinery manufacturing"
  },
  {
    "code": "3419",
    "description": "Other Specialised Industrial Machinery and Equipment Wholesaling",
    "index": "Mining machinery or equipment wholesaling"
  },
  {
    "code": "6631",
    "description": "Heavy Machinery and Scaffolding Rental and Hiring",
    "index": "Mining machinery rental (without operator)"
  },
  {
    "code": "6922",
    "description": "Surveying and Mapping Services",
    "index": "Mining surveying service"
  },
  {
    "code": "2010",
    "description": "Glass and Glass Product Manufacturing",
    "index": "Mirror manufacturing"
  },
  {
    "code": "9540",
    "description": "Religious Services",
    "index": "Missionary society operation"
  },
  {
    "code": "1140",
    "description": "Fruit and Vegetable Processing",
    "index": "Mixed meat and vegetable manufacturing"
  },
  {
    "code": "4310",
    "description": "Non Store Retailing",
    "index": "Mobile food retailing (except takeaway food)"
  },
  {
    "code": "4512",
    "description": "Takeaway Food Services",
    "index": "Mobile food van operation"
  },
  {
    "code": "3913",
    "description": "Trailer and Other Motor Vehicle Retailing",
    "index": "Mobile home retailing"
  },
  {
    "code": "6010",
    "description": "Libraries and Archives",
    "index": "Mobile library operation"
  },
  {
    "code": "3493",
    "description": "Telecommunication Goods Wholesaling",
    "index": "Mobile phone accessory wholesaling"
  },
  {
    "code": "3493",
    "description": "Telecommunication Goods Wholesaling",
    "index": "Mobile phone battery wholesaling"
  },
  {
    "code": "4221",
    "description": "Electrical, Electronic and Gas Appliance Retailing",
    "index": "Mobile phone retailing"
  },
  {
    "code": "3493",
    "description": "Telecommunication Goods Wholesaling",
    "index": "Mobile phone wholesaling"
  },
  {
    "code": "6631",
    "description": "Heavy Machinery and Scaffolding Rental and Hiring",
    "index": "Mobile platform rental"
  },
  {
    "code": "5802",
    "description": "Other Telecommunications Network Operation",
    "index": "Mobile telecommunications network operation"
  },
  {
    "code": "2422",
    "description": "Communications Equipment Manufacturing",
    "index": "Modem manufacturing"
  },
  {
    "code": "4221",
    "description": "Electrical, Electronic and Gas Appliance Retailing",
    "index": "Modem retailing"
  },
  {
    "code": "3493",
    "description": "Telecommunication Goods Wholesaling",
    "index": "Modem wholesaling"
  },
  {
    "code": "1181",
    "description": "Sugar Manufacturing",
    "index": "Molasses manufacturing"
  },
  {
    "code": "3604",
    "description": "Fish and Seafood Wholesaling",
    "index": "Mollusc wholesaling (including processed, except canned)"
  },
  {
    "code": "1120",
    "description": "Seafood Processing",
    "index": "Mollusc, processed, manufacturing (including shelled)"
  },
  {
    "code": "0809",
    "description": "Other Metal Ore Mining",
    "index": "Molybdenite mining"
  },
  {
    "code": "2139",
    "description": "Other Basic Non-Ferrous Metal Manufacturing",
    "index": "Molybdenum metal powder or flake manufacturing"
  },
  {
    "code": "9540",
    "description": "Religious Services",
    "index": "Monastery operation (except schools)"
  },
  {
    "code": "0805",
    "description": "Mineral Sand Mining",
    "index": "Monazite sand mining"
  },
  {
    "code": "6419",
    "description": "Other Auxiliary Finance and Investment Services",
    "index": "Money changing service (non-bank)"
  },
  {
    "code": "6229",
    "description": "Other Depository Financial Intermediation",
    "index": "Money market dealing"
  },
  {
    "code": "4720",
    "description": "Rail Passenger Transport",
    "index": "Monorail operation"
  },
  {
    "code": "2090",
    "description": "Other Non-Metallic Mineral Product Manufacturing",
    "index": "Monument making (except concrete)"
  },
  {
    "code": "2034",
    "description": "Concrete Product Manufacturing",
    "index": "Monument or grave marker, concrete, manufacturing"
  },
  {
    "code": "1841",
    "description": "Human Pharmaceutical and Medicinal Product Manufacturing",
    "index": "Morphine manufacturing"
  },
  {
    "code": "2033",
    "description": "Ready-Mixed Concrete Manufacturing",
    "index": "Mortar, dry mix, manufacturing"
  },
  {
    "code": "6322",
    "description": "General Insurance",
    "index": "Mortgage insurance provision"
  },
  {
    "code": "9520",
    "description": "Funeral, Crematorium and Cemetery Services",
    "index": "Mortician service"
  },
  {
    "code": "3243",
    "description": "Tiling and Carpeting Services",
    "index": "Mosaic work on construction projects"
  },
  {
    "code": "9540",
    "description": "Religious Services",
    "index": "Mosque operation"
  },
  {
    "code": "4400",
    "description": "Accommodation",
    "index": "Motel operation"
  },
  {
    "code": "5512",
    "description": "Motion Picture and Video Distribution",
    "index": "Motion picture and video distribution"
  },
  {
    "code": "6010",
    "description": "Libraries and Archives",
    "index": "Motion picture film archive operation"
  },
  {
    "code": "5514",
    "description": "Postproduction Services and Other Motion Picture and Video Activities",
    "index": "Motion picture film reproducing"
  },
  {
    "code": "5512",
    "description": "Motion Picture and Video Distribution",
    "index": "Motion picture leasing"
  },
  {
    "code": "5512",
    "description": "Motion Picture and Video Distribution",
    "index": "Motion picture library operation (stock footage)"
  },
  {
    "code": "5514",
    "description": "Postproduction Services and Other Motion Picture and Video Activities",
    "index": "Motion picture or video editing service"
  },
  {
    "code": "5511",
    "description": "Motion Picture and Video Production",
    "index": "Motion picture production"
  },
  {
    "code": "5514",
    "description": "Postproduction Services and Other Motion Picture and Video Activities",
    "index": "Motion picture production, special effects"
  },
  {
    "code": "5513",
    "description": "Motion Picture Exhibition",
    "index": "Motion picture screening"
  },
  {
    "code": "5513",
    "description": "Motion Picture Exhibition",
    "index": "Motion picture theatre operation"
  },
  {
    "code": "2311",
    "description": "Motor Vehicle Manufacturing",
    "index": "Motor car manufacturing"
  },
  {
    "code": "3504",
    "description": "Motor Vehicle New Part Wholesaling",
    "index": "Motor cycle accessory, new, wholesaling"
  },
  {
    "code": "3505",
    "description": "Motor Vehicle Dismantling and Used Part Wholesaling",
    "index": "Motor cycle dismantling"
  },
  {
    "code": "2399",
    "description": "Other Transport Equipment Manufacturing n.e.c.",
    "index": "Motor cycle manufacturing"
  },
  {
    "code": "3921",
    "description": "Motor Vehicle Parts Retailing",
    "index": "Motor cycle or scooter parts or accessory retailing"
  },
  {
    "code": "9419",
    "description": "Other Automotive Repair and Maintenance",
    "index": "Motor cycle or scooter repair"
  },
  {
    "code": "3912",
    "description": "Motor Cycle Retailing",
    "index": "Motor cycle or scooter retailing"
  },
  {
    "code": "3922",
    "description": "Tyre Retailing",
    "index": "Motor cycle or scooter tyre and tube retailing"
  },
  {
    "code": "3504",
    "description": "Motor Vehicle New Part Wholesaling",
    "index": "Motor cycle part, new, wholesaling"
  },
  {
    "code": "6619",
    "description": "Other Motor Vehicle and Transport Equipment Rental and Hiring",
    "index": "Motor cycle rental"
  },
  {
    "code": "3503",
    "description": "Trailer and Other Motor Vehicle Wholesaling",
    "index": "Motor cycle wholesaling"
  },
  {
    "code": "6619",
    "description": "Other Motor Vehicle and Transport Equipment Rental and Hiring",
    "index": "Motor home rental"
  },
  {
    "code": "1709",
    "description": "Other Petroleum and Coal Product Manufacturing",
    "index": "Motor oil manufacturing"
  },
  {
    "code": "9113",
    "description": "Sports and Physical Recreation Venues, Grounds and Facilities Operation",
    "index": "Motor racing track or speedway operation"
  },
  {
    "code": "1701",
    "description": "Petroleum Refining and Petroleum Fuels Manufacturing",
    "index": "Motor spirit manufacturing"
  },
  {
    "code": "3921",
    "description": "Motor Vehicle Parts Retailing",
    "index": "Motor vehicle accessory retailing"
  },
  {
    "code": "3504",
    "description": "Motor Vehicle New Part Wholesaling",
    "index": "Motor vehicle accessory, new, wholesaling"
  },
  {
    "code": "1919",
    "description": "Other Polymer Product Manufacturing",
    "index": "Motor vehicle and boat parts, fibreglass, manufacturing"
  },
  {
    "code": "2311",
    "description": "Motor Vehicle Manufacturing",
    "index": "Motor vehicle assembling"
  },
  {
    "code": "2312",
    "description": "Motor Vehicle Body and Trailer Manufacturing",
    "index": "Motor vehicle converting"
  },
  {
    "code": "1333",
    "description": "Cut and Sewn Textile Product Manufacturing",
    "index": "Motor vehicle cover manufacturing"
  },
  {
    "code": "3505",
    "description": "Motor Vehicle Dismantling and Used Part Wholesaling",
    "index": "Motor vehicle dismantling"
  },
  {
    "code": "2311",
    "description": "Motor Vehicle Manufacturing",
    "index": "Motor vehicle engine manufacturing"
  },
  {
    "code": "6322",
    "description": "General Insurance",
    "index": "Motor vehicle insurance provision"
  },
  {
    "code": "2240",
    "description": "Other Sheet Metal Product Manufacturing",
    "index": "Motor vehicle number plate manufacturing"
  },
  {
    "code": "3504",
    "description": "Motor Vehicle New Part Wholesaling",
    "index": "Motor vehicle part, new, wholesaling"
  },
  {
    "code": "3921",
    "description": "Motor Vehicle Parts Retailing",
    "index": "Motor vehicle parts retailing"
  },
  {
    "code": "7720",
    "description": "Regulatory Services",
    "index": "Motor vehicle testing"
  },
  {
    "code": "1914",
    "description": "Tyre Manufacturing",
    "index": "Motor vehicle tyre manufacturing"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Motor, electric, wholesaling"
  },
  {
    "code": "2392",
    "description": "Boatbuilding and Repair Services",
    "index": "Motorboat, inboard and outboard, building"
  },
  {
    "code": "3503",
    "description": "Trailer and Other Motor Vehicle Wholesaling",
    "index": "Motorhome wholesaling"
  },
  {
    "code": "3912",
    "description": "Motor Cycle Retailing",
    "index": "Motorised minibike retailing"
  },
  {
    "code": "2463",
    "description": "Machine Tool and Parts Manufacturing",
    "index": "Mould making machinery manufacturing"
  },
  {
    "code": "2121",
    "description": "Iron and Steel Casting",
    "index": "Moulded cast iron pipe or tube manufacturing"
  },
  {
    "code": "1529",
    "description": "Other Converted Paper Product Manufacturing",
    "index": "Moulded paper pulp product (e.g. egg trays or cartons) manufacturing"
  },
  {
    "code": "2469",
    "description": "Other Specialised Machinery and Equipment Manufacturing",
    "index": "Moulding machine manufacturing n.e.c."
  },
  {
    "code": "2034",
    "description": "Concrete Product Manufacturing",
    "index": "Moulding, concrete, manufacturing"
  },
  {
    "code": "2032",
    "description": "Plaster and Gypsum Product Manufacturing",
    "index": "Moulding, plaster, manufacturing"
  },
  {
    "code": "2461",
    "description": "Agricultural Machinery and Equipment Manufacturing",
    "index": "Mowing equipment manufacturing"
  },
  {
    "code": "2319",
    "description": "Other Motor Vehicle Parts Manufacturing",
    "index": "Muffler manufacturing"
  },
  {
    "code": "9419",
    "description": "Other Automotive Repair and Maintenance",
    "index": "Muffler repair (automotive)"
  },
  {
    "code": "8910",
    "description": "Museum Operation",
    "index": "Museum operation n.e.c."
  },
  {
    "code": "0121",
    "description": "Mushroom Growing",
    "index": "Mushroom spawn growing"
  },
  {
    "code": "6010",
    "description": "Libraries and Archives",
    "index": "Music archive operation"
  },
  {
    "code": "5521",
    "description": "Music Publishing",
    "index": "Music book (bound sheet music) publishing"
  },
  {
    "code": "5521",
    "description": "Music Publishing",
    "index": "Music book publishing"
  },
  {
    "code": "9003",
    "description": "Performing Arts Venue Operation",
    "index": "Music bowl operation"
  },
  {
    "code": "5521",
    "description": "Music Publishing",
    "index": "Music copyright buying and selling"
  },
  {
    "code": "5521",
    "description": "Music Publishing",
    "index": "Music publishing"
  },
  {
    "code": "8212",
    "description": "Arts Education",
    "index": "Music school operation"
  },
  {
    "code": "9001",
    "description": "Performing Arts Operation",
    "index": "Musical comedy company operation"
  },
  {
    "code": "2599",
    "description": "Other Manufacturing n.e.c.",
    "index": "Musical instrument manufacturing"
  },
  {
    "code": "4279",
    "description": "Other Store-Based Retailing n.e.c.",
    "index": "Musical instrument retailing"
  },
  {
    "code": "9499",
    "description": "Other Repair and Maintenance n.e.c.",
    "index": "Musical instrument tuning and repair"
  },
  {
    "code": "3739",
    "description": "Other Goods Wholesaling n.e.c.",
    "index": "Musical instrument wholesaling"
  },
  {
    "code": "9001",
    "description": "Performing Arts Operation",
    "index": "Musical productions"
  },
  {
    "code": "9002",
    "description": "Creative Artists, Musicians, Writers and Performers",
    "index": "Musicians"
  },
  {
    "code": "0201",
    "description": "Longline and Rack (Offshore) Aquaculture",
    "index": "Mussel farming (longline)"
  },
  {
    "code": "0159",
    "description": "Other Crop Growing n.e.c.",
    "index": "Mustard growing"
  },
  {
    "code": "0420",
    "description": "Hunting and Trapping",
    "index": "Mutton bird catching"
  },
  {
    "code": "6240",
    "description": "Financial Asset Investing",
    "index": "Mutual fund operation (except fund management on a commission or fee basis)"
  },
  {
    "code": "9511",
    "description": "Hairdressing and Beauty Services",
    "index": "Nail care service"
  },
  {
    "code": "2291",
    "description": "Spring and Wire Product Manufacturing",
    "index": "Nail manufacturing"
  },
  {
    "code": "1852",
    "description": "Cosmetic and Toiletry Preparation Manufacturing",
    "index": "Nail polish preparation manufacturing"
  },
  {
    "code": "4231",
    "description": "Hardware and Building Supplies Retailing",
    "index": "Nail retailing"
  },
  {
    "code": "1709",
    "description": "Other Petroleum and Coal Product Manufacturing",
    "index": "Naphthalene manufacturing"
  },
  {
    "code": "3711",
    "description": "Textile Product Wholesaling",
    "index": "Narrow fabrics wholesaling"
  },
  {
    "code": "0134",
    "description": "Apple and Pear Growing",
    "index": "Nashi pear growing"
  },
  {
    "code": "8922",
    "description": "Nature Reserves and Conservation Parks Operation",
    "index": "National or state/territory park or reserve operation"
  },
  {
    "code": "9114",
    "description": "Sport and Physical Recreation Administrative Service",
    "index": "National sporting association or league"
  },
  {
    "code": "0301",
    "description": "Forestry",
    "index": "Native orchid gathering"
  },
  {
    "code": "2700",
    "description": "Gas Supply",
    "index": "Natural gas distribution through mains system"
  },
  {
    "code": "1011",
    "description": "Petroleum Exploration",
    "index": "Natural gas exploration"
  },
  {
    "code": "0700",
    "description": "Oil and Gas Extraction",
    "index": "Natural gas extraction"
  },
  {
    "code": "8910",
    "description": "Museum Operation",
    "index": "Natural history and science museum operation"
  },
  {
    "code": "8539",
    "description": "Other Allied Health Services",
    "index": "Naturopathic service"
  },
  {
    "code": "2419",
    "description": "Other Professional and Scientific Equipment Manufacturing",
    "index": "Nautical instrument manufacturing"
  },
  {
    "code": "6923",
    "description": "Engineering Design and Engineering Consulting Services",
    "index": "Naval architecture service"
  },
  {
    "code": "3491",
    "description": "Professional and Scientific Goods Wholesaling",
    "index": "Navigation equipment wholesaling"
  },
  {
    "code": "9422",
    "description": "Electronic (except Domestic Appliance) and Precision Equipment Repair and Maintenance",
    "index": "Navigation instrument (including radar and sonar) repair and maintenance"
  },
  {
    "code": "5219",
    "description": "Other Water Transport Support Services",
    "index": "Navigation service (water transport)"
  },
  {
    "code": "2419",
    "description": "Other Professional and Scientific Equipment Manufacturing",
    "index": "Navigational systems and equipment manufacturing"
  },
  {
    "code": "0135",
    "description": "Stonefruit Growing",
    "index": "Nectarine growing"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing",
    "index": "Neon gas manufacturing"
  },
  {
    "code": "2432",
    "description": "Electric Lighting Equipment Manufacturing",
    "index": "Neon sign manufacturing"
  },
  {
    "code": "1332",
    "description": "Rope, Cordage and Twine Manufacturing",
    "index": "Net manufacturing n.e.c."
  },
  {
    "code": "9112",
    "description": "Sport and Physical Recreation Clubs and Sports Professionals",
    "index": "Netball club operation"
  },
  {
    "code": "9113",
    "description": "Sports and Physical Recreation Venues, Grounds and Facilities Operation",
    "index": "Netball court or stadium operation"
  },
  {
    "code": "3711",
    "description": "Textile Product Wholesaling",
    "index": "Netting, textile wholesaling"
  },
  {
    "code": "1332",
    "description": "Rope, Cordage and Twine Manufacturing",
    "index": "Netting, textile, manufacturing"
  },
  {
    "code": "8512",
    "description": "Specialist Medical Services",
    "index": "Neurology service"
  },
  {
    "code": "3911",
    "description": "Car Retailing",
    "index": "New car retailing"
  },
  {
    "code": "3501",
    "description": "Car Wholesaling",
    "index": "New car wholesaling"
  },
  {
    "code": "6020",
    "description": "Other Information Services",
    "index": "News collection service"
  },
  {
    "code": "5412",
    "description": "Magazine and Other Periodical Publishing",
    "index": "Newsletter publishing (except internet)"
  },
  {
    "code": "5411",
    "description": "Newspaper Publishing",
    "index": "Newspaper publishing (except internet)"
  },
  {
    "code": "4244",
    "description": "Newspaper and Book Retailing",
    "index": "Newspaper retailing"
  },
  {
    "code": "3735",
    "description": "Book and Magazine Wholesaling",
    "index": "Newspaper wholesaling"
  },
  {
    "code": "1510",
    "description": "Pulp, Paper and Paperboard Manufacturing",
    "index": "Newsprint manufacturing"
  },
  {
    "code": "0806",
    "description": "Nickel Ore Mining",
    "index": "Nickel ore mining"
  },
  {
    "code": "2139",
    "description": "Other Basic Non-Ferrous Metal Manufacturing",
    "index": "Nickel oxide production in association with nickel smelting"
  },
  {
    "code": "2293",
    "description": "Metal Coating and Finishing",
    "index": "Nickel plating"
  },
  {
    "code": "2139",
    "description": "Other Basic Non-Ferrous Metal Manufacturing",
    "index": "Nickel smelting or refining"
  },
  {
    "code": "4520",
    "description": "Pubs, Taverns and Bars",
    "index": "Night club operation"
  },
  {
    "code": "2911",
    "description": "Solid Waste Collection Services",
    "index": "Night soil collection service"
  },
  {
    "code": "7712",
    "description": "Investigation and Security Services",
    "index": "Night watchman service"
  },
  {
    "code": "1813",
    "description": "Basic Inorganic Chemical Manufacturing",
    "index": "Nitric acid manufacturing"
  },
  {
    "code": "1813",
    "description": "Basic Inorganic Chemical Manufacturing",
    "index": "Nitrite manufacturing"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing",
    "index": "Nitrogen (gas and liquid) manufacturing"
  },
  {
    "code": "1831",
    "description": "Fertiliser Manufacturing",
    "index": "Nitrogenous fertiliser material manufacturing"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing",
    "index": "Nitrous oxide manufacturing"
  },
  {
    "code": "1311",
    "description": "Wool Scouring",
    "index": "Noil, wool, manufacturing"
  },
  {
    "code": "6419",
    "description": "Other Auxiliary Finance and Investment Services",
    "index": "Nominee service"
  },
  {
    "code": "4129",
    "description": "Other Specialised Food Retailing",
    "index": "Non-alcoholic drinks retailing"
  },
  {
    "code": "1829",
    "description": "Other Basic Polymer Manufacturing",
    "index": "Non-cellulose fibre or filament manufacturing n.e.c."
  },
  {
    "code": "1821",
    "description": "Synthetic Resin and Synthetic Rubber Manufacturing",
    "index": "Non-cellulose resin manufacturing"
  },
  {
    "code": "6230",
    "description": "Non-depository Financing",
    "index": "Non-depository financing"
  },
  {
    "code": "6230",
    "description": "Non-depository Financing",
    "index": "Non-depository home lending operation"
  },
  {
    "code": "6230",
    "description": "Non-depository Financing",
    "index": "Non-depository money lending operation"
  },
  {
    "code": "6925",
    "description": "Scientific Testing and Analysis Services",
    "index": "Non-destructive testing service"
  },
  {
    "code": "2139",
    "description": "Other Basic Non-Ferrous Metal Manufacturing",
    "index": "Non-ferrous alloy manufacturing n.e.c."
  },
  {
    "code": "2431",
    "description": "Electric Cable and Wire Manufacturing",
    "index": "Non-ferrous cable, wire or strip manufacturing"
  },
  {
    "code": "2139",
    "description": "Other Basic Non-Ferrous Metal Manufacturing",
    "index": "Non-ferrous metal n.e.c. from waste material recovering"
  },
  {
    "code": "2139",
    "description": "Other Basic Non-Ferrous Metal Manufacturing",
    "index": "Non-ferrous metal n.e.c. refining"
  },
  {
    "code": "2149",
    "description": "Other Basic Non-Ferrous Metal Product Manufacturing",
    "index": "Non-ferrous metal rolling, drawing or extruding (except aluminium)"
  },
  {
    "code": "1821",
    "description": "Synthetic Resin and Synthetic Rubber Manufacturing",
    "index": "Non-vulcanisable elastomer manufacturing"
  },
  {
    "code": "1162",
    "description": "Cereal, Pasta and Baking Mix Manufacturing",
    "index": "Noodle manufacturing"
  },
  {
    "code": "6931",
    "description": "Legal Services",
    "index": "Notary service"
  },
  {
    "code": "4272",
    "description": "Stationery Goods Retailing",
    "index": "Note book retailing"
  },
  {
    "code": "0112",
    "description": "Nursery Production (Outdoors)",
    "index": "Nursery production n.e.c. (outdoors)"
  },
  {
    "code": "0111",
    "description": "Nursery Production (Under Cover)",
    "index": "Nursery production n.e.c. (under cover)"
  },
  {
    "code": "4232",
    "description": "Garden Supplies Retailing",
    "index": "Nursery stock retailing"
  },
  {
    "code": "3319",
    "description": "Other Agricultural Product Wholesaling",
    "index": "Nursery stock, horticultural, wholesaling"
  },
  {
    "code": "8601",
    "description": "Aged Care Residential Services",
    "index": "Nursing home operation"
  },
  {
    "code": "8539",
    "description": "Other Allied Health Services",
    "index": "Nursing service"
  },
  {
    "code": "2292",
    "description": "Nut, Bolt, Screw and Rivet Manufacturing",
    "index": "Nut or bolt, metal, manufacturing"
  },
  {
    "code": "1182",
    "description": "Confectionery Manufacturing",
    "index": "Nut, candied, manufacturing"
  },
  {
    "code": "3609",
    "description": "Other Grocery Wholesaling",
    "index": "Nuts wholesaling (roasted, salted or sugar coated)"
  },
  {
    "code": "1829",
    "description": "Other Basic Polymer Manufacturing",
    "index": "Nylon manufacturing"
  },
  {
    "code": "0149",
    "description": "Other Grain Growing",
    "index": "Oat growing"
  },
  {
    "code": "1162",
    "description": "Cereal, Pasta and Baking Mix Manufacturing",
    "index": "Oatmeal manufacturing"
  },
  {
    "code": "1162",
    "description": "Cereal, Pasta and Baking Mix Manufacturing",
    "index": "Oats, hulled or shelled, manufacturing"
  },
  {
    "code": "1162",
    "description": "Cereal, Pasta and Baking Mix Manufacturing",
    "index": "Oats, kilned or unkilned, manufacturing"
  },
  {
    "code": "6910",
    "description": "Scientific Research Services",
    "index": "Observatory research service"
  },
  {
    "code": "8401",
    "description": "Hospitals (except Psychiatric Hospitals)",
    "index": "Obstetric hospital"
  },
  {
    "code": "8512",
    "description": "Specialist Medical Services",
    "index": "Obstetrics service"
  },
  {
    "code": "8539",
    "description": "Other Allied Health Services",
    "index": "Occupational therapy service"
  },
  {
    "code": "0413",
    "description": "Line Fishing",
    "index": "Ocean trolling"
  },
  {
    "code": "6922",
    "description": "Surveying and Mapping Services",
    "index": "Oceanographic surveying service"
  },
  {
    "code": "2462",
    "description": "Mining and Construction Machinery Manufacturing",
    "index": "Off-highway truck manufacturing"
  },
  {
    "code": "7291",
    "description": "Office Administrative Services",
    "index": "Office administrative service n.e.c."
  },
  {
    "code": "3020",
    "description": "Non-Residential Building Construction",
    "index": "Office building construction"
  },
  {
    "code": "2511",
    "description": "Wooden Furniture and Upholstered Seat Manufacturing",
    "index": "Office furniture, wooden, manufacturing"
  },
  {
    "code": "2421",
    "description": "Computer and Electronic Office Equipment Manufacturing",
    "index": "Office machine (electronic) manufacturing"
  },
  {
    "code": "9422",
    "description": "Electronic (except Domestic Appliance) and Precision Equipment Repair and Maintenance",
    "index": "Office machine repair and maintenance"
  },
  {
    "code": "6639",
    "description": "Other Goods and Equipment Rental and Hiring n.e.c.",
    "index": "Office machinery rental"
  },
  {
    "code": "6712",
    "description": "Non-Residential Property Operators",
    "index": "Office space renting or leasing"
  },
  {
    "code": "1611",
    "description": "Printing",
    "index": "Off-set lithographic printing"
  },
  {
    "code": "0201",
    "description": "Longline and Rack (Offshore) Aquaculture",
    "index": "Offshore longline or rack aquaculture"
  },
  {
    "code": "1090",
    "description": "Other Mining Support Services",
    "index": "Oil and gas field support service n.e.c."
  },
  {
    "code": "2499",
    "description": "Other Machinery and Equipment Manufacturing n.e.c.",
    "index": "Oil burner, industrial, manufacturing"
  },
  {
    "code": "2919",
    "description": "Other Waste Collection Services",
    "index": "Oil collection service"
  },
  {
    "code": "3233",
    "description": "Air Conditioning and Heating Services",
    "index": "Oil heater installation"
  },
  {
    "code": "3499",
    "description": "Other Machinery and Equipment Wholesaling n",
    "index": "Oil heater wholesaling"
  },
  {
    "code": "2449",
    "description": "Other Domestic Appliance Manufacturing",
    "index": "Oil heater, domestic, manufacturing"
  },
  {
    "code": "1701",
    "description": "Petroleum Refining and Petroleum Fuels Manufacturing",
    "index": "Oil or grease base stock manufacturing"
  },
  {
    "code": "3321",
    "description": "Petroleum Product Wholesaling",
    "index": "Oil or grease, industrial or lubricating, wholesaling"
  },
  {
    "code": "3109",
    "description": "Other Heavy and Civil Engineering Construction",
    "index": "Oil refinery construction (except buildings)"
  },
  {
    "code": "0700",
    "description": "Oil and Gas Extraction",
    "index": "Oil shale mining"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Oil treating compound wholesaling"
  },
  {
    "code": "0149",
    "description": "Other Grain Growing",
    "index": "Oilseed growing n.e.c."
  },
  {
    "code": "0137",
    "description": "Olive Growing",
    "index": "Olive growing"
  },
  {
    "code": "1150",
    "description": "Oil and Fat Manufacturing",
    "index": "Olive oil manufacturing"
  },
  {
    "code": "0123",
    "description": "Vegetable Growing (Outdoors)",
    "index": "Onion growing (outdoors)"
  },
  {
    "code": "0990",
    "description": "Other Non-Metallic Mineral Mining and Quarrying",
    "index": "Opal mining"
  },
  {
    "code": "9001",
    "description": "Performing Arts Operation",
    "index": "Opera company operation"
  },
  {
    "code": "9003",
    "description": "Performing Arts Venue Operation",
    "index": "Opera house operation"
  },
  {
    "code": "7714",
    "description": "Correctional and Detention Services",
    "index": "Operating correctional facility on a contract or fee basis"
  },
  {
    "code": "2921",
    "description": "Waste Treatment and Disposal Services",
    "index": "Operating landfills"
  },
  {
    "code": "2921",
    "description": "Waste Treatment and Disposal Services",
    "index": "Operating other waste treatment facilities"
  },
  {
    "code": "8790",
    "description": "Other Social Assistance Services",
    "index": "Operation of soup kitchen (including mobile)"
  },
  {
    "code": "6962",
    "description": "Management Advice and Other Consulting Services",
    "index": "Operations research service (commercial)"
  },
  {
    "code": "2411",
    "description": "Photographic, Optical and Ophthalmic Equipment Manufacturing",
    "index": "Ophthalmic article manufacturing"
  },
  {
    "code": "8512",
    "description": "Specialist Medical Services",
    "index": "Ophthalmology service"
  },
  {
    "code": "8532",
    "description": "Optometry and Optical Dispensing",
    "index": "Optical dispensing"
  },
  {
    "code": "2431",
    "description": "Electric Cable and Wire Manufacturing",
    "index": "Optical fibre cable, insulated, manufacturing"
  },
  {
    "code": "2419",
    "description": "Other Professional and Scientific Equipment Manufacturing",
    "index": "Optical fibre cable, uninsulated, manufacturing"
  },
  {
    "code": "2010",
    "description": "Glass and Glass Product Manufacturing",
    "index": "Optical glass or blanks for lenses manufacturing"
  },
  {
    "code": "9422",
    "description": "Electronic (except Domestic Appliance) and Precision Equipment Repair and Maintenance",
    "index": "Optical instrument (including microscopes and telescopes) repair and maintenance"
  },
  {
    "code": "2411",
    "description": "Photographic, Optical and Ophthalmic Equipment Manufacturing",
    "index": "Optical instrument or equipment manufacturing"
  },
  {
    "code": "3491",
    "description": "Professional and Scientific Goods Wholesaling",
    "index": "Optical instrument wholesaling"
  },
  {
    "code": "2411",
    "description": "Photographic, Optical and Ophthalmic Equipment Manufacturing",
    "index": "Optical lens grinding"
  },
  {
    "code": "5921",
    "description": "Data Processing and Web Hosting Services",
    "index": "Optical scanning service"
  },
  {
    "code": "8532",
    "description": "Optometry and Optical Dispensing",
    "index": "Optician service"
  },
  {
    "code": "8531",
    "description": "Dental Services",
    "index": "Oral pathology service"
  },
  {
    "code": "8531",
    "description": "Dental Services",
    "index": "Oral surgery service"
  },
  {
    "code": "0136",
    "description": "Citrus Fruit Growing",
    "index": "Orange growing"
  },
  {
    "code": "9001",
    "description": "Performing Arts Operation",
    "index": "Orchestra operation"
  },
  {
    "code": "0114",
    "description": "Floriculture Production (Under Cover)",
    "index": "Orchid growing (under cover)"
  },
  {
    "code": "1812",
    "description": "Basic Organic Chemical Manufacturing",
    "index": "Organic dye or pigment manufacturing"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing",
    "index": "Organic gas manufacturing"
  },
  {
    "code": "1494",
    "description": "Reconstituted Wood Product Manufacturing",
    "index": "Oriented strand board (OSB) manufacturing"
  },
  {
    "code": "9112",
    "description": "Sport and Physical Recreation Clubs and Sports Professionals",
    "index": "Orienteering club operation"
  },
  {
    "code": "2223",
    "description": "Architectural Aluminium Product Manufacturing",
    "index": "Ornamental architectural aluminium work manufacturing"
  },
  {
    "code": "2229",
    "description": "Other Structural Metal Product Manufacturing",
    "index": "Ornamental architectural metalwork manufacturing (except aluminium)"
  },
  {
    "code": "2034",
    "description": "Concrete Product Manufacturing",
    "index": "Ornamental concrete or terrazzo product manufacturing"
  },
  {
    "code": "0203",
    "description": "Onshore Aquaculture",
    "index": "Ornamental fish farming"
  },
  {
    "code": "2010",
    "description": "Glass and Glass Product Manufacturing",
    "index": "Ornamental glassware manufacturing"
  },
  {
    "code": "0112",
    "description": "Nursery Production (Outdoors)",
    "index": "Ornamental plant growing (outdoors)"
  },
  {
    "code": "0111",
    "description": "Nursery Production (Under Cover)",
    "index": "Ornamental plant growing (under cover)"
  },
  {
    "code": "1499",
    "description": "Other Wood Product Manufacturing n.e.c.",
    "index": "Ornamental woodwork manufacturing"
  },
  {
    "code": "8531",
    "description": "Dental Services",
    "index": "Orthodontic service"
  },
  {
    "code": "1352",
    "description": "Footwear Manufacturing",
    "index": "Orthopaedic shoe manufacturing (excluding orthopaedic extension footwear)"
  },
  {
    "code": "8512",
    "description": "Specialist Medical Services",
    "index": "Orthopaedic specialist service"
  },
  {
    "code": "8532",
    "description": "Optometry and Optical Dispensing",
    "index": "Orthoptic service"
  },
  {
    "code": "2412",
    "description": "Medical and Surgical Equipment Manufacturing",
    "index": "Orthotics (arch support) manufacturing"
  },
  {
    "code": "8534",
    "description": "Chiropractic and Osteopathic Services",
    "index": "Osteopathic service"
  },
  {
    "code": "0199",
    "description": "Other Livestock Farming n.e.c.",
    "index": "Ostrich farming"
  },
  {
    "code": "2499",
    "description": "Other Machinery and Equipment Manufacturing n.e.c.",
    "index": "Outboard motor manufacturing"
  },
  {
    "code": "9429",
    "description": "Other Machinery and Equipment Repair and Maintenance",
    "index": "Outboard motor repair"
  },
  {
    "code": "4245",
    "description": "Marine Equipment Retailing",
    "index": "Outboard motor retailing"
  },
  {
    "code": "9139",
    "description": "Amusement and Other Recreation Activities n.e.c.",
    "index": "Outdoor adventure operation n.e.c."
  },
  {
    "code": "2511",
    "description": "Wooden Furniture and Upholstered Seat Manufacturing",
    "index": "Outdoor furniture, wooden, manufacturing"
  },
  {
    "code": "1351",
    "description": "Clothing Manufacturing",
    "index": "Outerwear manufacturing"
  },
  {
    "code": "2499",
    "description": "Other Machinery and Equipment Manufacturing n.e.c.",
    "index": "Oven, industrial, manufacturing (except electric)"
  },
  {
    "code": "2441",
    "description": "Whiteware Appliance Manufacturing",
    "index": "Ovens, domestic, manufacturing"
  },
  {
    "code": "2010",
    "description": "Glass and Glass Product Manufacturing",
    "index": "Ovenware, glass, manufacturing"
  },
  {
    "code": "5029",
    "description": "Other Transport n.e.c.",
    "index": "Over snow transport operation"
  },
  {
    "code": "3101",
    "description": "Road and Bridge Construction",
    "index": "Overpass construction"
  },
  {
    "code": "6322",
    "description": "General Insurance",
    "index": "Owner's liability insurance provision"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing",
    "index": "Oxygen manufacturing"
  },
  {
    "code": "0419",
    "description": "Other Fishing",
    "index": "Oyster catching (except from cultivated oyster beds)"
  },
  {
    "code": "0201",
    "description": "Longline and Rack (Offshore) Aquaculture",
    "index": "Oyster farming (rack)"
  },
  {
    "code": "1120",
    "description": "Seafood Processing",
    "index": "Oyster, shelling, freezing or bottling in brine"
  },
  {
    "code": "2412",
    "description": "Medical and Surgical Equipment Manufacturing",
    "index": "Pacemaker manufacturing"
  },
  {
    "code": "7320",
    "description": "Packaging Services",
    "index": "Packing fresh fruit and vegetables"
  },
  {
    "code": "7320",
    "description": "Packaging Services",
    "index": "Packing pharmaceutical and medical products"
  },
  {
    "code": "8512",
    "description": "Specialist Medical Services",
    "index": "Paediatric service"
  },
  {
    "code": "8531",
    "description": "Dental Services",
    "index": "Paedodontic service"
  },
  {
    "code": "2422",
    "description": "Communications Equipment Manufacturing",
    "index": "Pager manufacturing"
  },
  {
    "code": "4221",
    "description": "Electrical, Electronic and Gas Appliance Retailing",
    "index": "Pager retailing"
  },
  {
    "code": "5809",
    "description": "Other Telecommunications Services",
    "index": "Paging service"
  },
  {
    "code": "2599",
    "description": "Other Manufacturing n.e.c.",
    "index": "Paint brush manufacturing"
  },
  {
    "code": "1916",
    "description": "Paint and Coatings Manufacturing",
    "index": "Paint or varnish remover manufacturing"
  },
  {
    "code": "4231",
    "description": "Hardware and Building Supplies Retailing",
    "index": "Paint retailing"
  },
  {
    "code": "1916",
    "description": "Paint and Coatings Manufacturing",
    "index": "Paint tinting manufacturing"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Paint wholesaling"
  },
  {
    "code": "8212",
    "description": "Arts Education",
    "index": "Painting instruction"
  },
  {
    "code": "3244",
    "description": "Painting and Decorating Services",
    "index": "Painting of buildings or other structures"
  },
  {
    "code": "2293",
    "description": "Metal Coating and Finishing",
    "index": "Painting of manufactured metal products"
  },
  {
    "code": "0414",
    "description": "Fish Trawling, Seining and Netting",
    "index": "Pair trawling"
  },
  {
    "code": "1499",
    "description": "Other Wood Product Manufacturing n.e.c.",
    "index": "Pallet (wooden) manufacturing"
  },
  {
    "code": "9412",
    "description": "Automotive Body, Paint and Interior Repair",
    "index": "Panel beating (motor body repairing)"
  },
  {
    "code": "2034",
    "description": "Concrete Product Manufacturing",
    "index": "Panel or section, prefabricated concrete, manufacturing"
  },
  {
    "code": "1171",
    "description": "Bread Manufacturing (Factory-based)",
    "index": "Panini manufacturing (factory based)"
  },
  {
    "code": "1340",
    "description": "Knitted Product Manufacturing",
    "index": "Panty hose manufacturing"
  },
  {
    "code": "1522",
    "description": "Paper Bag and Sack Manufacturing",
    "index": "Paper bag manufacturing"
  },
  {
    "code": "1523",
    "description": "Paper Stationery Manufacturing",
    "index": "Paper label manufacturing (except adhesive)"
  },
  {
    "code": "9429",
    "description": "Other Machinery and Equipment Repair and Maintenance",
    "index": "Paper making and printing trade machinery repair and maintenance"
  },
  {
    "code": "2469",
    "description": "Other Specialised Machinery and Equipment Manufacturing",
    "index": "Paper making machinery or equipment manufacturing"
  },
  {
    "code": "3419",
    "description": "Other Specialised Industrial Machinery and Equipment Wholesaling",
    "index": "Paper making machinery or equipment wholesaling"
  },
  {
    "code": "1510",
    "description": "Pulp, Paper and Paperboard Manufacturing",
    "index": "Paper manufacturing"
  },
  {
    "code": "1524",
    "description": "Sanitary Paper Product Manufacturing",
    "index": "Paper napkin manufacturing"
  },
  {
    "code": "3736",
    "description": "Paper Product Wholesaling",
    "index": "Paper or paper board container wholesaling"
  },
  {
    "code": "1529",
    "description": "Other Converted Paper Product Manufacturing",
    "index": "Paper product manufacturing n.e.c."
  },
  {
    "code": "3736",
    "description": "Paper Product Wholesaling",
    "index": "Paper product wholesaling n.e.c."
  },
  {
    "code": "1510",
    "description": "Pulp, Paper and Paperboard Manufacturing",
    "index": "Paper pulp manufacturing"
  },
  {
    "code": "1523",
    "description": "Paper Stationery Manufacturing",
    "index": "Paper stationery manufacturing"
  },
  {
    "code": "3736",
    "description": "Paper Product Wholesaling",
    "index": "Paper stationery wholesaling"
  },
  {
    "code": "1524",
    "description": "Sanitary Paper Product Manufacturing",
    "index": "Paper towel manufacturing"
  },
  {
    "code": "3736",
    "description": "Paper Product Wholesaling",
    "index": "Paper wholesaling"
  },
  {
    "code": "2142",
    "description": "Aluminium Rolling, Drawing, Extruding",
    "index": "Paper-backed aluminium foil manufacturing"
  },
  {
    "code": "1521",
    "description": "Corrugated Paperboard and Paperboard Container Manufacturing",
    "index": "Paperboard container manufacturing"
  },
  {
    "code": "1523",
    "description": "Paper Stationery Manufacturing",
    "index": "Paperboard game manufacturing"
  },
  {
    "code": "1510",
    "description": "Pulp, Paper and Paperboard Manufacturing",
    "index": "Paperboard manufacturing"
  },
  {
    "code": "1523",
    "description": "Paper Stationery Manufacturing",
    "index": "Paperboard toy manufacturing"
  },
  {
    "code": "1333",
    "description": "Cut and Sewn Textile Product Manufacturing",
    "index": "Parachute manufacturing"
  },
  {
    "code": "1709",
    "description": "Other Petroleum and Coal Product Manufacturing",
    "index": "Paraffin wax manufacturing"
  },
  {
    "code": "3321",
    "description": "Petroleum Product Wholesaling",
    "index": "Paraffin wholesaling"
  },
  {
    "code": "8219",
    "description": "Adult, Community and Other Education n.e.c.",
    "index": "Parental education program operation"
  },
  {
    "code": "9559",
    "description": "Other Interest Group Services n.e.c.",
    "index": "Parent-teachers' association operation"
  },
  {
    "code": "3101",
    "description": "Road and Bridge Construction",
    "index": "Parking lot construction (except buildings)"
  },
  {
    "code": "2419",
    "description": "Other Professional and Scientific Equipment Manufacturing",
    "index": "Parking meter manufacturing"
  },
  {
    "code": "9533",
    "description": "Parking Services",
    "index": "Parking service"
  },
  {
    "code": "9533",
    "description": "Parking Services",
    "index": "Parking station operation"
  },
  {
    "code": "7510",
    "description": "Central Government Administration",
    "index": "Parliament operation (central government)"
  },
  {
    "code": "7520",
    "description": "State Government Administration",
    "index": "Parliament operation (state government)"
  },
  {
    "code": "4212",
    "description": "Floor Coverings Retailing",
    "index": "Parquetry retailing"
  },
  {
    "code": "1494",
    "description": "Reconstituted Wood Product Manufacturing",
    "index": "Particleboard manufacturing"
  },
  {
    "code": "2223",
    "description": "Architectural Aluminium Product Manufacturing",
    "index": "Partition, prefabricated aluminium, manufacturing"
  },
  {
    "code": "2229",
    "description": "Other Structural Metal Product Manufacturing",
    "index": "Partition, prefabricated metal, manufacturing (except aluminium)"
  },
  {
    "code": "3411",
    "description": "Agricultural and Construction Machinery Wholesaling",
    "index": "Parts, agricultural or construction machinery, wholesaling"
  },
  {
    "code": "4820",
    "description": "Water Passenger Transport",
    "index": "Passenger ferry service"
  },
  {
    "code": "4820",
    "description": "Water Passenger Transport",
    "index": "Passenger ship management service (i.e. operation of ships on behalf of owners)"
  },
  {
    "code": "0139",
    "description": "Other Fruit and Tree Nut Growing",
    "index": "Passionfruit growing"
  },
  {
    "code": "1162",
    "description": "Cereal, Pasta and Baking Mix Manufacturing",
    "index": "Pasta, fresh or dried, manufacturing"
  },
  {
    "code": "1172",
    "description": "Cake and Pastry Manufacturing (Factory-based)",
    "index": "Pastry manufacturing (includes frozen dough; factory based)"
  },
  {
    "code": "1162",
    "description": "Cereal, Pasta and Baking Mix Manufacturing",
    "index": "Pastry mix manufacturing"
  },
  {
    "code": "4129",
    "description": "Other Specialised Food Retailing",
    "index": "Pastry retailing (not manufactured on the same premises)"
  },
  {
    "code": "0159",
    "description": "Other Crop Growing n.e.c.",
    "index": "Pasture growing for hay or silage"
  },
  {
    "code": "0149",
    "description": "Other Grain Growing",
    "index": "Pasture seed growing"
  },
  {
    "code": "1113",
    "description": "Cured Meat and Smallgoods Manufacturing",
    "index": "Pate manufacturing (except fish)"
  },
  {
    "code": "6931",
    "description": "Legal Services",
    "index": "Patent attorney service"
  },
  {
    "code": "6640",
    "description": "Non-Financial Intangible Assets (except Copyrights) Leasing",
    "index": "Patent leasing"
  },
  {
    "code": "4271",
    "description": "Pharmaceutical, Cosmetic and Toiletry Goods Retailing",
    "index": "Patent medicine retailing"
  },
  {
    "code": "8520",
    "description": "Pathology and Diagnostic Imaging Services",
    "index": "Pathology laboratory service"
  },
  {
    "code": "0201",
    "description": "Longline and Rack (Offshore) Aquaculture",
    "index": "Paua farming (longline or rack)"
  },
  {
    "code": "0203",
    "description": "Onshore Aquaculture",
    "index": "Paua farming (pond)"
  },
  {
    "code": "4273",
    "description": "Antique and Used Goods Retailing",
    "index": "Pawnbroking"
  },
  {
    "code": "0139",
    "description": "Other Fruit and Tree Nut Growing",
    "index": "Pawpaw growing"
  },
  {
    "code": "5622",
    "description": "Cable and Other Subscription Programming",
    "index": "Pay television, broadcasting network operation"
  },
  {
    "code": "5622",
    "description": "Cable and Other Subscription Programming",
    "index": "Pay television, broadcasting service"
  },
  {
    "code": "5622",
    "description": "Cable and Other Subscription Programming",
    "index": "Pay television, broadcasting station operation"
  },
  {
    "code": "7291",
    "description": "Office Administrative Services",
    "index": "Payroll processing"
  },
  {
    "code": "0123",
    "description": "Vegetable Growing (Outdoors)",
    "index": "Pea growing (outdoors; except dry field peas)"
  },
  {
    "code": "0135",
    "description": "Stonefruit Growing",
    "index": "Peach growing"
  },
  {
    "code": "0159",
    "description": "Other Crop Growing n.e.c.",
    "index": "Peanut growing"
  },
  {
    "code": "0134",
    "description": "Apple and Pear Growing",
    "index": "Pear growing"
  },
  {
    "code": "0201",
    "description": "Longline and Rack (Offshore) Aquaculture",
    "index": "Pearl oyster farming (rack)"
  },
  {
    "code": "0419",
    "description": "Other Fishing",
    "index": "Pearling (except pearl oyster farming)"
  },
  {
    "code": "0600",
    "description": "Coal Mining",
    "index": "Peat cutting (except horticultural)"
  },
  {
    "code": "0911",
    "description": "Gravel and Sand Quarrying",
    "index": "Pebble quarrying"
  },
  {
    "code": "0139",
    "description": "Other Fruit and Tree Nut Growing",
    "index": "Pecan nut growing"
  },
  {
    "code": "1320",
    "description": "Leather Tanning and Fur Dressing",
    "index": "Pelt finishing and tanning"
  },
  {
    "code": "2599",
    "description": "Other Manufacturing n.e.c.",
    "index": "Pen manufacturing"
  },
  {
    "code": "4272",
    "description": "Stationery Goods Retailing",
    "index": "Pen or pencil retailing"
  },
  {
    "code": "2599",
    "description": "Other Manufacturing n.e.c.",
    "index": "Pencil manufacturing"
  },
  {
    "code": "1851",
    "description": "Cleaning Compound Manufacturing",
    "index": "Penetrant manufacturing"
  },
  {
    "code": "6330",
    "description": "Superannuation Funds",
    "index": "Pension fund, separately constituted, operation"
  },
  {
    "code": "9559",
    "description": "Other Interest Group Services n.e.c.",
    "index": "Pensioners' association operation"
  },
  {
    "code": "0115",
    "description": "Floriculture Production (Outdoors)",
    "index": "Peony growing (outdoor)"
  },
  {
    "code": "0111",
    "description": "Nursery Production (Under Cover)",
    "index": "Perennial growing (under cover)"
  },
  {
    "code": "9001",
    "description": "Performing Arts Operation",
    "index": "Performing arts operation n.e.c."
  },
  {
    "code": "8212",
    "description": "Arts Education",
    "index": "Performing arts school operation"
  },
  {
    "code": "9003",
    "description": "Performing Arts Venue Operation",
    "index": "Performing arts venue operation n.e.c."
  },
  {
    "code": "1852",
    "description": "Cosmetic and Toiletry Preparation Manufacturing",
    "index": "Perfume manufacturing"
  },
  {
    "code": "4271",
    "description": "Pharmaceutical, Cosmetic and Toiletry Goods Retailing",
    "index": "Perfume retailing"
  },
  {
    "code": "3720",
    "description": "Pharmaceutical and Toiletry Goods Wholesaling",
    "index": "Perfume wholesaling"
  },
  {
    "code": "5412",
    "description": "Magazine and Other Periodical Publishing",
    "index": "Periodical publishing (except internet)"
  },
  {
    "code": "4244",
    "description": "Newspaper and Book Retailing",
    "index": "Periodical retailing"
  },
  {
    "code": "3735",
    "description": "Book and Magazine Wholesaling",
    "index": "Periodical wholesaling"
  },
  {
    "code": "8531",
    "description": "Dental Services",
    "index": "Periodontic service"
  },
  {
    "code": "2090",
    "description": "Other Non-Metallic Mineral Product Manufacturing",
    "index": "Perlite, expanded, manufacturing"
  },
  {
    "code": "1851",
    "description": "Cleaning Compound Manufacturing",
    "index": "Peroxide preparation manufacturing"
  },
  {
    "code": "1214",
    "description": "Wine and Other Alcoholic Beverage Manufacturing",
    "index": "Perry, alcoholic, manufacturing"
  },
  {
    "code": "0139",
    "description": "Other Fruit and Tree Nut Growing",
    "index": "Persimmon growing"
  },
  {
    "code": "4259",
    "description": "Other Personal Accessories Retailing",
    "index": "Personal accessory retailing n.e.c."
  },
  {
    "code": "9539",
    "description": "Other Personal Services n.e.c.",
    "index": "Personal fitness training service"
  },
  {
    "code": "6962",
    "description": "Management Advice and Other Consulting Services",
    "index": "Personnel management consulting service"
  },
  {
    "code": "7312",
    "description": "Buildings Pest Control Services",
    "index": "Pest control service (except agricultural and forestry)"
  },
  {
    "code": "1832",
    "description": "Pesticide Manufacturing",
    "index": "Pesticide manufacturing n.e.c."
  },
  {
    "code": "4232",
    "description": "Garden Supplies Retailing",
    "index": "Pesticide retailing"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Pesticide wholesaling"
  },
  {
    "code": "4279",
    "description": "Other Store-Based Retailing n.e.c.",
    "index": "Pet and pet accessory retailing"
  },
  {
    "code": "9539",
    "description": "Other Personal Services n.e.c.",
    "index": "Pet boarding service"
  },
  {
    "code": "0199",
    "description": "Other Livestock Farming n.e.c.",
    "index": "Pet breeding"
  },
  {
    "code": "9520",
    "description": "Funeral, Crematorium and Cemetery Services",
    "index": "Pet cemetery operation"
  },
  {
    "code": "3739",
    "description": "Other Goods Wholesaling n.e.c.",
    "index": "Pet food wholesaling"
  },
  {
    "code": "1192",
    "description": "Prepared Animal and Bird Feed Manufacturing",
    "index": "Pet food, canned, manufacturing"
  },
  {
    "code": "9539",
    "description": "Other Personal Services n.e.c.",
    "index": "Pet grooming service"
  },
  {
    "code": "3299",
    "description": "Other Construction Services n.e.c.",
    "index": "Petrol bowser installation"
  },
  {
    "code": "2451",
    "description": "Pumps and Compressors Manufacturing",
    "index": "Petrol pump manufacturing"
  },
  {
    "code": "4000",
    "description": "Fuel Retailing",
    "index": "Petrol retailing"
  },
  {
    "code": "1709",
    "description": "Other Petroleum and Coal Product Manufacturing",
    "index": "Petroleum coke and petroleum coke product manufacturing"
  },
  {
    "code": "1011",
    "description": "Petroleum Exploration",
    "index": "Petroleum exploration"
  },
  {
    "code": "0700",
    "description": "Oil and Gas Extraction",
    "index": "Petroleum gas extraction"
  },
  {
    "code": "1709",
    "description": "Other Petroleum and Coal Product Manufacturing",
    "index": "Petroleum jelly manufacturing"
  },
  {
    "code": "1709",
    "description": "Other Petroleum and Coal Product Manufacturing",
    "index": "Petroleum oil blending"
  },
  {
    "code": "3321",
    "description": "Petroleum Product Wholesaling",
    "index": "Petroleum product wholesaling"
  },
  {
    "code": "1701",
    "description": "Petroleum Refining and Petroleum Fuels Manufacturing",
    "index": "Petroleum refining or blending"
  },
  {
    "code": "1709",
    "description": "Other Petroleum and Coal Product Manufacturing",
    "index": "Petroleum solvent manufacturing"
  },
  {
    "code": "1709",
    "description": "Other Petroleum and Coal Product Manufacturing",
    "index": "Petroleum wax manufacturing"
  },
  {
    "code": "0159",
    "description": "Other Crop Growing n.e.c.",
    "index": "Pharmaceutical/cosmetic plant growing"
  },
  {
    "code": "4271",
    "description": "Pharmaceutical, Cosmetic and Toiletry Goods Retailing",
    "index": "Pharmacy, retail, operation"
  },
  {
    "code": "1821",
    "description": "Synthetic Resin and Synthetic Rubber Manufacturing",
    "index": "Phenol formaldehyde manufacturing"
  },
  {
    "code": "1709",
    "description": "Other Petroleum and Coal Product Manufacturing",
    "index": "Phenol manufacturing"
  },
  {
    "code": "1831",
    "description": "Fertiliser Manufacturing",
    "index": "Phosphate fertiliser material manufacturing"
  },
  {
    "code": "0990",
    "description": "Other Non-Metallic Mineral Mining and Quarrying",
    "index": "Phosphate rock mining"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing",
    "index": "Phosphine gas manufacturing"
  },
  {
    "code": "1813",
    "description": "Basic Inorganic Chemical Manufacturing",
    "index": "Phosphoric acid manufacturing"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Photocopier wholesaling"
  },
  {
    "code": "2421",
    "description": "Computer and Electronic Office Equipment Manufacturing",
    "index": "Photocopying machine manufacturing"
  },
  {
    "code": "9422",
    "description": "Electronic (except Domestic Appliance) and Precision Equipment Repair and Maintenance",
    "index": "Photocopying machine repair and maintenance"
  },
  {
    "code": "1611",
    "description": "Printing",
    "index": "Photocopying service"
  },
  {
    "code": "9532",
    "description": "Photographic Film Processing",
    "index": "Photofinishing laboratory operation"
  },
  {
    "code": "9532",
    "description": "Photographic Film Processing",
    "index": "Photofinishing service"
  },
  {
    "code": "6922",
    "description": "Surveying and Mapping Services",
    "index": "Photogrammetry"
  },
  {
    "code": "9422",
    "description": "Electronic (except Domestic Appliance) and Precision Equipment Repair and Maintenance",
    "index": "Photographic (including camera) equipment repair"
  },
  {
    "code": "1891",
    "description": "Photographic Chemical Manufacturing",
    "index": "Photographic chemical manufacturing"
  },
  {
    "code": "4279",
    "description": "Other Store-Based Retailing n.e.c.",
    "index": "Photographic chemical retailing"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Photographic chemical wholesaling"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Photographic equipment, electrical or electronic, wholesaling"
  },
  {
    "code": "4279",
    "description": "Other Store-Based Retailing n.e.c.",
    "index": "Photographic film or paper retailing"
  },
  {
    "code": "9532",
    "description": "Photographic Film Processing",
    "index": "Photographic film processing"
  },
  {
    "code": "3499",
    "description": "Other Machinery and Equipment Wholesaling n",
    "index": "Photographic film wholesaling"
  },
  {
    "code": "1891",
    "description": "Photographic Chemical Manufacturing",
    "index": "Photographic sensitised cloth manufacturing"
  },
  {
    "code": "1891",
    "description": "Photographic Chemical Manufacturing",
    "index": "Photographic sensitised film manufacturing"
  },
  {
    "code": "1891",
    "description": "Photographic Chemical Manufacturing",
    "index": "Photographic sensitised paper manufacturing"
  },
  {
    "code": "1891",
    "description": "Photographic Chemical Manufacturing",
    "index": "Photographic sensitised plate manufacturing"
  },
  {
    "code": "3499",
    "description": "Other Machinery and Equipment Wholesaling n",
    "index": "Photographic supply wholesaling n.e.c."
  },
  {
    "code": "8212",
    "description": "Arts Education",
    "index": "Photography school operation"
  },
  {
    "code": "8533",
    "description": "Physiotherapy Services",
    "index": "Physiotherapy service"
  },
  {
    "code": "5102",
    "description": "Courier Pick-up and Delivery Services",
    "index": "Pick-up and delivery service n.e.c."
  },
  {
    "code": "4213",
    "description": "Houseware Retailing",
    "index": "Picnicware retailing"
  },
  {
    "code": "1499",
    "description": "Other Wood Product Manufacturing n.e.c.",
    "index": "Picture or mirror frame, wooden, manufacturing"
  },
  {
    "code": "1172",
    "description": "Cake and Pastry Manufacturing (Factory-based)",
    "index": "Pie manufacturing (including meat, fruit or vegetable pies; factory based)"
  },
  {
    "code": "4214",
    "description": "Manchester and Other Textile Goods Retailing",
    "index": "Piece-goods retailing"
  },
  {
    "code": "3711",
    "description": "Textile Product Wholesaling",
    "index": "Piece-goods wholesaling"
  },
  {
    "code": "0192",
    "description": "Pig Farming",
    "index": "Pig farming"
  },
  {
    "code": "2110",
    "description": "Iron Smelting and Steel Manufacturing",
    "index": "Pig iron manufacturing"
  },
  {
    "code": "0192",
    "description": "Pig Farming",
    "index": "Pig raising"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Pigment wholesaling"
  },
  {
    "code": "3109",
    "description": "Other Heavy and Civil Engineering Construction",
    "index": "Pile driving"
  },
  {
    "code": "1333",
    "description": "Cut and Sewn Textile Product Manufacturing",
    "index": "Pillow manufacturing (except rubber)"
  },
  {
    "code": "1920",
    "description": "Natural Rubber Product Manufacturing",
    "index": "Pillow or cushion, natural rubber, manufacturing"
  },
  {
    "code": "5219",
    "description": "Other Water Transport Support Services",
    "index": "Pilotage service"
  },
  {
    "code": "2291",
    "description": "Spring and Wire Product Manufacturing",
    "index": "Pin manufacturing (except metallic dowel pins)"
  },
  {
    "code": "0301",
    "description": "Forestry",
    "index": "Pine cone collecting"
  },
  {
    "code": "0139",
    "description": "Other Fruit and Tree Nut Growing",
    "index": "Pineapple growing"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Pipe coil manufacturing"
  },
  {
    "code": "2121",
    "description": "Iron and Steel Casting",
    "index": "Pipe fitting, cast, ferrous, manufacturing"
  },
  {
    "code": "2210",
    "description": "Iron and Steel Forging",
    "index": "Pipe fittings, forged iron or steel, manufacturing"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Pipe fittings, non-ferrous metal, manufacturing"
  },
  {
    "code": "1912",
    "description": "Rigid and Semi Rigid Polymer Product Manufacturing",
    "index": "Pipe fittings, plastic, manufacturing"
  },
  {
    "code": "1220",
    "description": "Cigarette and Tobacco Product Manufacturing",
    "index": "Pipe tobacco manufacturing"
  },
  {
    "code": "2142",
    "description": "Aluminium Rolling, Drawing, Extruding",
    "index": "Pipe, aluminium, manufacturing"
  },
  {
    "code": "2029",
    "description": "Other Ceramic Product Manufacturing",
    "index": "Pipe, ceramic, manufacturing (including vitreous china or porcelain)"
  },
  {
    "code": "2034",
    "description": "Concrete Product Manufacturing",
    "index": "Pipe, concrete, manufacturing"
  },
  {
    "code": "2149",
    "description": "Other Basic Non-Ferrous Metal Product Manufacturing",
    "index": "Pipe, non-ferrous metal, manufacturing (except aluminium)"
  },
  {
    "code": "1912",
    "description": "Rigid and Semi Rigid Polymer Product Manufacturing",
    "index": "Pipe, plastic, manufacturing"
  },
  {
    "code": "3109",
    "description": "Other Heavy and Civil Engineering Construction",
    "index": "Pipeline construction"
  },
  {
    "code": "6923",
    "description": "Engineering Design and Engineering Consulting Services",
    "index": "Pipeline engineering consulting service"
  },
  {
    "code": "5021",
    "description": "Pipeline Transport",
    "index": "Pipeline operation for the transport of gas, oil and other material"
  },
  {
    "code": "3332",
    "description": "Plumbing Goods Wholesaling",
    "index": "Pipes and pipe fitting wholesaling"
  },
  {
    "code": "1171",
    "description": "Bread Manufacturing (Factory-based)",
    "index": "Pita bread manufacturing (factory based)"
  },
  {
    "code": "4232",
    "description": "Garden Supplies Retailing",
    "index": "Plant, garden, retailing"
  },
  {
    "code": "2032",
    "description": "Plaster and Gypsum Product Manufacturing",
    "index": "Plaster of paris manufacturing"
  },
  {
    "code": "2032",
    "description": "Plaster and Gypsum Product Manufacturing",
    "index": "Plaster product manufacturing (except dental or medical plasters)"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Plaster wholesaling"
  },
  {
    "code": "3241",
    "description": "Plastering and Ceiling Services",
    "index": "Plaster work on construction projects"
  },
  {
    "code": "3241",
    "description": "Plastering and Ceiling Services",
    "index": "Plasterboard fixing or finishing"
  },
  {
    "code": "2032",
    "description": "Plaster and Gypsum Product Manufacturing",
    "index": "Plasterboard manufacturing"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Plastic block, rod, plate or other unfinished form wholesaling"
  },
  {
    "code": "2293",
    "description": "Metal Coating and Finishing",
    "index": "Plastic coating of metal"
  },
  {
    "code": "4213",
    "description": "Houseware Retailing",
    "index": "Plastic container retailing"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Plastic decorative laminated sheet wholesaling"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Plastic film sheeting wholesaling"
  },
  {
    "code": "1911",
    "description": "Polymer Film and Sheet Packaging Material Manufacturing",
    "index": "Plastic lamination with paper"
  },
  {
    "code": "1912",
    "description": "Rigid and Semi Rigid Polymer Product Manufacturing",
    "index": "Plastic union manufacturing"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Plastic wood wholesaling"
  },
  {
    "code": "2142",
    "description": "Aluminium Rolling, Drawing, Extruding",
    "index": "Plastic-coated aluminium foil manufacturing"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Plasticiser wholesaling"
  },
  {
    "code": "2010",
    "description": "Glass and Glass Product Manufacturing",
    "index": "Plate glass manufacturing"
  },
  {
    "code": "2142",
    "description": "Aluminium Rolling, Drawing, Extruding",
    "index": "Plate, aluminium, manufacturing"
  },
  {
    "code": "2149",
    "description": "Other Basic Non-Ferrous Metal Product Manufacturing",
    "index": "Plate, non-ferrous metal, manufacturing (except aluminium)"
  },
  {
    "code": "1612",
    "description": "Printing Support Services",
    "index": "Platemaking service, printing"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Platework n.e.c."
  },
  {
    "code": "0809",
    "description": "Other Metal Ore Mining",
    "index": "Platinum group metal mining"
  },
  {
    "code": "8010",
    "description": "Preschool Education",
    "index": "Playcentre operation (NZ only)"
  },
  {
    "code": "2592",
    "description": "Toy, Sporting and Recreational Product Manufacturing",
    "index": "Playground equipment manufacturing"
  },
  {
    "code": "3734",
    "description": "Toy and Sporting Goods Wholesaling",
    "index": "Playground equipment wholesaling"
  },
  {
    "code": "9003",
    "description": "Performing Arts Venue Operation",
    "index": "Playhouse operation"
  },
  {
    "code": "1523",
    "description": "Paper Stationery Manufacturing",
    "index": "Playing cards manufacturing"
  },
  {
    "code": "9002",
    "description": "Creative Artists, Musicians, Writers and Performers",
    "index": "Playwriting or screenwriting"
  },
  {
    "code": "1920",
    "description": "Natural Rubber Product Manufacturing",
    "index": "Plug, natural rubber, manufacturing"
  },
  {
    "code": "0135",
    "description": "Stonefruit Growing",
    "index": "Plum or prune growing"
  },
  {
    "code": "3332",
    "description": "Plumbing Goods Wholesaling",
    "index": "Plumber's fitting wholesaling"
  },
  {
    "code": "4231",
    "description": "Hardware and Building Supplies Retailing",
    "index": "Plumbers' fittings retailing"
  },
  {
    "code": "4231",
    "description": "Hardware and Building Supplies Retailing",
    "index": "Plumbers' tools retailing"
  },
  {
    "code": "3231",
    "description": "Plumbing Services",
    "index": "Plumbing (except marine)"
  },
  {
    "code": "1912",
    "description": "Rigid and Semi Rigid Polymer Product Manufacturing",
    "index": "Plumbing fittings, plastic, manufacturing (including joints, elbows and flanges)"
  },
  {
    "code": "3332",
    "description": "Plumbing Goods Wholesaling",
    "index": "Plumbing tool wholesaling"
  },
  {
    "code": "1493",
    "description": "Veneer and Plywood Manufacturing",
    "index": "Plywood manufacturing"
  },
  {
    "code": "3331",
    "description": "Timber Wholesaling",
    "index": "Plywood wholesaling"
  },
  {
    "code": "2491",
    "description": "Lifting and Material Handling Equipment Manufacturing",
    "index": "Pneumatic conveyor system manufacturing"
  },
  {
    "code": "2462",
    "description": "Mining and Construction Machinery Manufacturing",
    "index": "Pneumatic drill manufacturing (for construction work)"
  },
  {
    "code": "2463",
    "description": "Machine Tool and Parts Manufacturing",
    "index": "Pneumatic tool manufacturing n.e.c."
  },
  {
    "code": "4221",
    "description": "Electrical, Electronic and Gas Appliance Retailing",
    "index": "Pocket calculator, electronic, retailing"
  },
  {
    "code": "8539",
    "description": "Other Allied Health Services",
    "index": "Podiatry service"
  },
  {
    "code": "0302",
    "description": "Logging",
    "index": "Pole hewing (forest)"
  },
  {
    "code": "7711",
    "description": "Police Services",
    "index": "Police service operation"
  },
  {
    "code": "7711",
    "description": "Police Services",
    "index": "Police station operation"
  },
  {
    "code": "7510",
    "description": "Central Government Administration",
    "index": "Policy formulation and administration (central government)"
  },
  {
    "code": "7530",
    "description": "Local Government Administration",
    "index": "Policy formulation and administration (local government)"
  },
  {
    "code": "7520",
    "description": "State Government Administration",
    "index": "Policy formulation and administration (state government)"
  },
  {
    "code": "1851",
    "description": "Cleaning Compound Manufacturing",
    "index": "Polish manufacturing"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Polish wholesaling"
  },
  {
    "code": "9559",
    "description": "Other Interest Group Services n.e.c.",
    "index": "Political party operation"
  },
  {
    "code": "1161",
    "description": "Grain Mill Product Manufacturing",
    "index": "Pollard manufacturing (from wheat, barley or rye)"
  },
  {
    "code": "6925",
    "description": "Scientific Testing and Analysis Services",
    "index": "Pollution monitoring service"
  },
  {
    "code": "1821",
    "description": "Synthetic Resin and Synthetic Rubber Manufacturing",
    "index": "Polyacrylate manufacturing"
  },
  {
    "code": "1821",
    "description": "Synthetic Resin and Synthetic Rubber Manufacturing",
    "index": "Polybutadiene manufacturing"
  },
  {
    "code": "1821",
    "description": "Synthetic Resin and Synthetic Rubber Manufacturing",
    "index": "Polycarbonate manufacturing (except polycarbonate sheet)"
  },
  {
    "code": "1912",
    "description": "Rigid and Semi Rigid Polymer Product Manufacturing",
    "index": "Polycarbonate sheet manufacturing"
  },
  {
    "code": "1829",
    "description": "Other Basic Polymer Manufacturing",
    "index": "Polyester manufacturing"
  },
  {
    "code": "1821",
    "description": "Synthetic Resin and Synthetic Rubber Manufacturing",
    "index": "Polyethylene manufacturing"
  },
  {
    "code": "1912",
    "description": "Rigid and Semi Rigid Polymer Product Manufacturing",
    "index": "Polymer container manufacturing n.e.c."
  },
  {
    "code": "1919",
    "description": "Other Polymer Product Manufacturing",
    "index": "Polymer product manufacturing n.e.c."
  },
  {
    "code": "1913",
    "description": "Polymer Foam Product Manufacturing",
    "index": "Polymeric foam product manufacturing n.e.c."
  },
  {
    "code": "1821",
    "description": "Synthetic Resin and Synthetic Rubber Manufacturing",
    "index": "Polymethacrylate manufacturing"
  },
  {
    "code": "1829",
    "description": "Other Basic Polymer Manufacturing",
    "index": "Polyolefin manufacturing"
  },
  {
    "code": "1821",
    "description": "Synthetic Resin and Synthetic Rubber Manufacturing",
    "index": "Polypropylene manufacturing"
  },
  {
    "code": "1821",
    "description": "Synthetic Resin and Synthetic Rubber Manufacturing",
    "index": "Polystyrene manufacturing"
  },
  {
    "code": "1821",
    "description": "Synthetic Resin and Synthetic Rubber Manufacturing",
    "index": "Polyurethane manufacturing"
  },
  {
    "code": "1821",
    "description": "Synthetic Resin and Synthetic Rubber Manufacturing",
    "index": "Polyvinyl acetate manufacturing"
  },
  {
    "code": "1821",
    "description": "Synthetic Resin and Synthetic Rubber Manufacturing",
    "index": "Polyvinylchoride (PVC) manufacturing"
  },
  {
    "code": "3291",
    "description": "Landscape Construction Services",
    "index": "Pond construction"
  },
  {
    "code": "1182",
    "description": "Confectionery Manufacturing",
    "index": "Popcorn, candied, manufacturing"
  },
  {
    "code": "2029",
    "description": "Other Ceramic Product Manufacturing",
    "index": "Porcelain goods manufacturing"
  },
  {
    "code": "5212",
    "description": "Port and Water Transport Terminal Operations",
    "index": "Port operation"
  },
  {
    "code": "3499",
    "description": "Other Machinery and Equipment Wholesaling n",
    "index": "Portable fire extinguisher wholesaling"
  },
  {
    "code": "2911",
    "description": "Solid Waste Collection Services",
    "index": "Portable toilet hiring and waste collection service"
  },
  {
    "code": "5910",
    "description": "Internet Access Services",
    "index": "Portal web search operation"
  },
  {
    "code": "6419",
    "description": "Other Auxiliary Finance and Investment Services",
    "index": "Portfolio, investment, management service (on a commission or fee basis)"
  },
  {
    "code": "2031",
    "description": "Cement and Lime Manufacturing",
    "index": "Portland cement manufacturing"
  },
  {
    "code": "6991",
    "description": "Professional Photographic Services",
    "index": "Portrait photography service"
  },
  {
    "code": "0420",
    "description": "Hunting and Trapping",
    "index": "Possum hunting and trapping"
  },
  {
    "code": "5101",
    "description": "Postal Services",
    "index": "Post office operation"
  },
  {
    "code": "2034",
    "description": "Concrete Product Manufacturing",
    "index": "Post or pole, concrete, manufacturing"
  },
  {
    "code": "0302",
    "description": "Logging",
    "index": "Post shaping (forest)"
  },
  {
    "code": "5514",
    "description": "Postproduction Services and Other Motion Picture and Video Activities",
    "index": "Post synchronisation sound dubbing"
  },
  {
    "code": "5101",
    "description": "Postal Services",
    "index": "Postal agency operation"
  },
  {
    "code": "5419",
    "description": "Other Publishing (except Software, Music and Internet)",
    "index": "Postcard publishing (except internet)"
  },
  {
    "code": "8102",
    "description": "Higher Education",
    "index": "Postgraduate school, university operation"
  },
  {
    "code": "5514",
    "description": "Postproduction Services and Other Motion Picture and Video Activities",
    "index": "Post-production facility, motion picture or video"
  },
  {
    "code": "6639",
    "description": "Other Goods and Equipment Rental and Hiring n.e.c.",
    "index": "Pot plant hire"
  },
  {
    "code": "4232",
    "description": "Garden Supplies Retailing",
    "index": "Pot plant retailing"
  },
  {
    "code": "1213",
    "description": "Spirit Manufacturing",
    "index": "Potable spirit manufacturing"
  },
  {
    "code": "1831",
    "description": "Fertiliser Manufacturing",
    "index": "Potash fertiliser manufacturing"
  },
  {
    "code": "1831",
    "description": "Fertiliser Manufacturing",
    "index": "Potassium chloride fertiliser manufacturing"
  },
  {
    "code": "1191",
    "description": "Potato Crisps and Corn Chips Manufacturing",
    "index": "Potato crisp manufacturing"
  },
  {
    "code": "3609",
    "description": "Other Grocery Wholesaling",
    "index": "Potato crisp wholesaling"
  },
  {
    "code": "0123",
    "description": "Vegetable Growing (Outdoors)",
    "index": "Potato growing (outdoors)"
  },
  {
    "code": "2029",
    "description": "Other Ceramic Product Manufacturing",
    "index": "Pottery goods manufacturing"
  },
  {
    "code": "1112",
    "description": "Poultry Processing",
    "index": "Poultry abattoir operation"
  },
  {
    "code": "1112",
    "description": "Poultry Processing",
    "index": "Poultry croquette manufacturing"
  },
  {
    "code": "0172",
    "description": "Poultry Farming (Eggs)",
    "index": "Poultry farming (for eggs)"
  },
  {
    "code": "0171",
    "description": "Poultry Farming (Meat)",
    "index": "Poultry farming (for meat)"
  },
  {
    "code": "1192",
    "description": "Prepared Animal and Bird Feed Manufacturing",
    "index": "Poultry feed, prepared, manufacturing"
  },
  {
    "code": "0172",
    "description": "Poultry Farming (Eggs)",
    "index": "Poultry hatchery operation (egg breeds)"
  },
  {
    "code": "0171",
    "description": "Poultry Farming (Meat)",
    "index": "Poultry hatchery operation (meat breeds)"
  },
  {
    "code": "1112",
    "description": "Poultry Processing",
    "index": "Poultry meat or bone meal manufacturing"
  },
  {
    "code": "1112",
    "description": "Poultry Processing",
    "index": "Poultry meat packing"
  },
  {
    "code": "1112",
    "description": "Poultry Processing",
    "index": "Poultry meat processing (including canning)"
  },
  {
    "code": "1113",
    "description": "Cured Meat and Smallgoods Manufacturing",
    "index": "Poultry smallgoods manufacturing"
  },
  {
    "code": "3602",
    "description": "Meat, Poultry and Smallgoods Wholesaling",
    "index": "Poultry wholesaling (except canned)"
  },
  {
    "code": "4121",
    "description": "Fresh Meat, Fish and Poultry Retailing",
    "index": "Poultry, fresh, retailing"
  },
  {
    "code": "2293",
    "description": "Metal Coating and Finishing",
    "index": "Powder coating of metal and metal products"
  },
  {
    "code": "1211",
    "description": "Soft Drink, Cordial and Syrup Manufacturing",
    "index": "Powder flavour manufacturing (for soft drinks)"
  },
  {
    "code": "2142",
    "description": "Aluminium Rolling, Drawing, Extruding",
    "index": "Powder or flake, aluminium, manufacturing"
  },
  {
    "code": "2149",
    "description": "Other Basic Non-Ferrous Metal Product Manufacturing",
    "index": "Powder or flake, non-ferrous metal, manufacturing, n.e.c."
  },
  {
    "code": "2110",
    "description": "Iron Smelting and Steel Manufacturing",
    "index": "Powder, iron or steel, manufacturing"
  },
  {
    "code": "2463",
    "description": "Machine Tool and Parts Manufacturing",
    "index": "Power tool, pneumatic or power operated, manufacturing n.e.c."
  },
  {
    "code": "2392",
    "description": "Boatbuilding and Repair Services",
    "index": "Powerboat building"
  },
  {
    "code": "4279",
    "description": "Other Store-Based Retailing n.e.c.",
    "index": "Pram retailing"
  },
  {
    "code": "0203",
    "description": "Onshore Aquaculture",
    "index": "Prawn farming (pond)"
  },
  {
    "code": "0412",
    "description": "Prawn Fishing",
    "index": "Prawn fishing"
  },
  {
    "code": "3322",
    "description": "Metal and Mineral Wholesaling",
    "index": "Precious metal scrap dealing (wholesaling)"
  },
  {
    "code": "3732",
    "description": "Jewellery and Watch Wholesaling",
    "index": "Precious metal wholesaling"
  },
  {
    "code": "9422",
    "description": "Electronic (except Domestic Appliance) and Precision Equipment Repair and Maintenance",
    "index": "Precision equipment calibration"
  },
  {
    "code": "2034",
    "description": "Concrete Product Manufacturing",
    "index": "Prefabricated concrete building manufacturing"
  },
  {
    "code": "3020",
    "description": "Non-Residential Building Construction",
    "index": "Prefabricated non-residential building assembly, erection or installation on-site (except sheds, garages or carports)"
  },
  {
    "code": "2221",
    "description": "Structural Steel Fabricating",
    "index": "Prefabricated structural steel parts manufacturing"
  },
  {
    "code": "3020",
    "description": "Non-Residential Building Construction",
    "index": "Prefabricated temperature controlled structures installation"
  },
  {
    "code": "1162",
    "description": "Cereal, Pasta and Baking Mix Manufacturing",
    "index": "Prepared breakfast cereal manufacturing"
  },
  {
    "code": "1199",
    "description": "Other Food Products Manufacturing n.e.c.",
    "index": "Pre-prepared meal, frozen, manufacturing"
  },
  {
    "code": "1612",
    "description": "Printing Support Services",
    "index": "Pre-press printing service"
  },
  {
    "code": "3739",
    "description": "Other Goods Wholesaling n.e.c.",
    "index": "Pre-recorded audio media wholesaling"
  },
  {
    "code": "6632",
    "description": "Video and Other Electronic Media Rental",
    "index": "Pre-recorded electronic media rental"
  },
  {
    "code": "3739",
    "description": "Other Goods Wholesaling n.e.c.",
    "index": "Pre-recorded entertainment media wholesaling"
  },
  {
    "code": "6632",
    "description": "Video and Other Electronic Media Rental",
    "index": "Pre-recorded video cassette rental"
  },
  {
    "code": "6632",
    "description": "Video and Other Electronic Media Rental",
    "index": "Pre-recorded video disc rental"
  },
  {
    "code": "3739",
    "description": "Other Goods Wholesaling n.e.c.",
    "index": "Pre-recorded video media wholesaling"
  },
  {
    "code": "8010",
    "description": "Preschool Education",
    "index": "Pre-school operation"
  },
  {
    "code": "4271",
    "description": "Pharmaceutical, Cosmetic and Toiletry Goods Retailing",
    "index": "Prescription, medicine, dispensing"
  },
  {
    "code": "3609",
    "description": "Other Grocery Wholesaling",
    "index": "Preserved fruit or vegetable wholesaling"
  },
  {
    "code": "2499",
    "description": "Other Machinery and Equipment Manufacturing n.e.c.",
    "index": "Press, mechanical, manual or hydraulic, manufacturing n.e.c."
  },
  {
    "code": "2463",
    "description": "Machine Tool and Parts Manufacturing",
    "index": "Press, woodworking or metal working, manufacturing"
  },
  {
    "code": "2499",
    "description": "Other Machinery and Equipment Manufacturing n.e.c.",
    "index": "Pressure gauge manufacturing"
  },
  {
    "code": "1831",
    "description": "Fertiliser Manufacturing",
    "index": "Prilled ammonium nitrate manufacturing"
  },
  {
    "code": "8021",
    "description": "Primary Education",
    "index": "Primary school operation (except combined primary/secondary school)"
  },
  {
    "code": "0141",
    "description": "Sheep Farming (Specialised)",
    "index": "Prime lamb raising"
  },
  {
    "code": "0145",
    "description": "Grain-Sheep and Grain-Beef Cattle Farming",
    "index": "Prime lamb raising and grain growing"
  },
  {
    "code": "1916",
    "description": "Paint and Coatings Manufacturing",
    "index": "Primer manufacturing"
  },
  {
    "code": "4222",
    "description": "Computer and Computer Peripherals Retailing",
    "index": "Printer retailing"
  },
  {
    "code": "1916",
    "description": "Paint and Coatings Manufacturing",
    "index": "Printing ink manufacturing"
  },
  {
    "code": "2469",
    "description": "Other Specialised Machinery and Equipment Manufacturing",
    "index": "Printing machinery or equipment manufacturing"
  },
  {
    "code": "3419",
    "description": "Other Specialised Industrial Machinery and Equipment Wholesaling",
    "index": "Printing machinery or equipment wholesaling"
  },
  {
    "code": "1612",
    "description": "Printing Support Services",
    "index": "Printing support service n.e.c."
  },
  {
    "code": "7714",
    "description": "Correctional and Detention Services",
    "index": "Prison farm operation"
  },
  {
    "code": "7714",
    "description": "Correctional and Detention Services",
    "index": "Prison operation"
  },
  {
    "code": "9601",
    "description": "Private Households Employing Staff",
    "index": "Private household employing domestic personnel"
  },
  {
    "code": "9601",
    "description": "Private Households Employing Staff",
    "index": "Private household employing staff"
  },
  {
    "code": "6923",
    "description": "Engineering Design and Engineering Consulting Services",
    "index": "Process engineering consulting service"
  },
  {
    "code": "2090",
    "description": "Other Non-Metallic Mineral Product Manufacturing",
    "index": "Processed lightweight aggregate manufacturing"
  },
  {
    "code": "9002",
    "description": "Creative Artists, Musicians, Writers and Performers",
    "index": "Producing or directing original artistic or cultural work"
  },
  {
    "code": "5522",
    "description": "Music and Other Sound Recording Activities",
    "index": "Producing pre-recorded radio programming"
  },
  {
    "code": "8101",
    "description": "Technical and Vocational Education and Training",
    "index": "Professional and management development training"
  },
  {
    "code": "2419",
    "description": "Other Professional and Scientific Equipment Manufacturing",
    "index": "Professional and scientific equipment manufacturing n.e.c."
  },
  {
    "code": "3491",
    "description": "Professional and Scientific Goods Wholesaling",
    "index": "Professional equipment wholesaling n.e.c."
  },
  {
    "code": "6991",
    "description": "Professional Photographic Services",
    "index": "Professional photography service"
  },
  {
    "code": "6999",
    "description": "Other Professional, Scientific and Technical Services n.e.c.",
    "index": "Professional, scientific and technical services n.e.c."
  },
  {
    "code": "1912",
    "description": "Rigid and Semi Rigid Polymer Product Manufacturing",
    "index": "Profile shapes, plastic, manufacturing n.e.c."
  },
  {
    "code": "4221",
    "description": "Electrical, Electronic and Gas Appliance Retailing",
    "index": "Projector retailing"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing",
    "index": "Propane gas manufacturing"
  },
  {
    "code": "1892",
    "description": "Explosives Manufacturing",
    "index": "Propellent powder manufacturing"
  },
  {
    "code": "8531",
    "description": "Dental Services",
    "index": "Prosthodontic service"
  },
  {
    "code": "9534",
    "description": "Brothel Keeping and Prostitution Services",
    "index": "Prostitution service"
  },
  {
    "code": "7712",
    "description": "Investigation and Security Services",
    "index": "Protection service"
  },
  {
    "code": "8402",
    "description": "Psychiatric Hospitals",
    "index": "Psychiatric hospital"
  },
  {
    "code": "8512",
    "description": "Specialist Medical Services",
    "index": "Psychiatry service"
  },
  {
    "code": "9539",
    "description": "Other Personal Services n.e.c.",
    "index": "Psychic service"
  },
  {
    "code": "4520",
    "description": "Pubs, Taverns and Bars",
    "index": "Pub operation"
  },
  {
    "code": "6950",
    "description": "Market Research and Statistical Services",
    "index": "Public opinion research service"
  },
  {
    "code": "7719",
    "description": "Other Public Order and Safety Services",
    "index": "Public order and safety service n.e.c."
  },
  {
    "code": "8219",
    "description": "Adult, Community and Other Education n.e.c.",
    "index": "Public speaking training"
  },
  {
    "code": "1320",
    "description": "Leather Tanning and Fur Dressing",
    "index": "Pulling sheep and lamb skin"
  },
  {
    "code": "9429",
    "description": "Other Machinery and Equipment Repair and Maintenance",
    "index": "Pump and compressor repair"
  },
  {
    "code": "2451",
    "description": "Pumps and Compressors Manufacturing",
    "index": "Pump manufacturing"
  },
  {
    "code": "2451",
    "description": "Pumps and Compressors Manufacturing",
    "index": "Pumping equipment manufacturing"
  },
  {
    "code": "3499",
    "description": "Other Machinery and Equipment Wholesaling n",
    "index": "Pumping machinery or equipment wholesaling"
  },
  {
    "code": "1211",
    "description": "Soft Drink, Cordial and Syrup Manufacturing",
    "index": "Purified water manufacturing"
  },
  {
    "code": "0414",
    "description": "Fish Trawling, Seining and Netting",
    "index": "Purse seining"
  },
  {
    "code": "1892",
    "description": "Explosives Manufacturing",
    "index": "Pyrotechnic goods manufacturing"
  },
  {
    "code": "1892",
    "description": "Explosives Manufacturing",
    "index": "Pyrotechnic manufacturing"
  },
  {
    "code": "6923",
    "description": "Engineering Design and Engineering Consulting Services",
    "index": "Quantity surveying service"
  },
  {
    "code": "0990",
    "description": "Other Non-Metallic Mineral Mining and Quarrying",
    "index": "Quartz quarrying n.e.c."
  },
  {
    "code": "2031",
    "description": "Cement and Lime Manufacturing",
    "index": "Quick hydrated lime manufacturing"
  },
  {
    "code": "0134",
    "description": "Apple and Pear Growing",
    "index": "Quince growing"
  },
  {
    "code": "0199",
    "description": "Other Livestock Farming n.e.c.",
    "index": "Rabbit farming"
  },
  {
    "code": "0420",
    "description": "Hunting and Trapping",
    "index": "Rabbit hunting or trapping"
  },
  {
    "code": "3602",
    "description": "Meat, Poultry and Smallgoods Wholesaling",
    "index": "Rabbit meat wholesaling"
  },
  {
    "code": "9129",
    "description": "Other Horse and Dog Racing Activities",
    "index": "Race dog training operation"
  },
  {
    "code": "6620",
    "description": "Farm Animals and Bloodstock Leasing",
    "index": "Racehorse leasing"
  },
  {
    "code": "9129",
    "description": "Other Horse and Dog Racing Activities",
    "index": "Racehorse training operation"
  },
  {
    "code": "9121",
    "description": "Horse and Dog Racing Administration and Track Operation",
    "index": "Racing authority or board"
  },
  {
    "code": "9112",
    "description": "Sport and Physical Recreation Clubs and Sports Professionals",
    "index": "Racing car club operation"
  },
  {
    "code": "5412",
    "description": "Magazine and Other Periodical Publishing",
    "index": "Racing form publishing (except internet)"
  },
  {
    "code": "9129",
    "description": "Other Horse and Dog Racing Activities",
    "index": "Racing kennels operation"
  },
  {
    "code": "9129",
    "description": "Other Horse and Dog Racing Activities",
    "index": "Racing stables operation"
  },
  {
    "code": "9422",
    "description": "Electronic (except Domestic Appliance) and Precision Equipment Repair and Maintenance",
    "index": "Radar and sonar equipment repair and maintenance"
  },
  {
    "code": "2419",
    "description": "Other Professional and Scientific Equipment Manufacturing",
    "index": "Radar systems and equipment manufacturing"
  },
  {
    "code": "1919",
    "description": "Other Polymer Product Manufacturing",
    "index": "Radiator and heating hose, plastic or composite, manufacturing"
  },
  {
    "code": "2319",
    "description": "Other Motor Vehicle Parts Manufacturing",
    "index": "Radiator manufacturing"
  },
  {
    "code": "5610",
    "description": "Radio Broadcasting",
    "index": "Radio (including satellite radio) network operation"
  },
  {
    "code": "9421",
    "description": "Domestic Appliance Repair and Maintenance",
    "index": "Radio and stereo repair and maintenance (except automotive)"
  },
  {
    "code": "5412",
    "description": "Magazine and Other Periodical Publishing",
    "index": "Radio and television guide publishing (except internet)"
  },
  {
    "code": "2422",
    "description": "Communications Equipment Manufacturing",
    "index": "Radio broadcast studio equipment manufacturing"
  },
  {
    "code": "5610",
    "description": "Radio Broadcasting",
    "index": "Radio broadcasting service"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Radio or television part wholesaling"
  },
  {
    "code": "2429",
    "description": "Other Electronic Equipment Manufacturing",
    "index": "Radio receiving set manufacturing"
  },
  {
    "code": "4221",
    "description": "Electrical, Electronic and Gas Appliance Retailing",
    "index": "Radio receiving set retailing (except car radios)"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Radio receiving set wholesaling"
  },
  {
    "code": "2419",
    "description": "Other Professional and Scientific Equipment Manufacturing",
    "index": "Radio remote control equipment manufacturing n.e.c."
  },
  {
    "code": "6640",
    "description": "Non-Financial Intangible Assets (except Copyrights) Leasing",
    "index": "Radio spectrum right leasing"
  },
  {
    "code": "5610",
    "description": "Radio Broadcasting",
    "index": "Radio station operation"
  },
  {
    "code": "2422",
    "description": "Communications Equipment Manufacturing",
    "index": "Radio transceiver manufacturing"
  },
  {
    "code": "2422",
    "description": "Communications Equipment Manufacturing",
    "index": "Radio transmitter manufacturing"
  },
  {
    "code": "2221",
    "description": "Structural Steel Fabricating",
    "index": "Rafter, prefabricated steel, manufacturing"
  },
  {
    "code": "2393",
    "description": "Railway Rolling Stock Manufacturing and Repair Services",
    "index": "Rail carriage manufacturing"
  },
  {
    "code": "2110",
    "description": "Iron Smelting and Steel Manufacturing",
    "index": "Rail fastening or other rail accessory manufacturing"
  },
  {
    "code": "5292",
    "description": "Freight Forwarding Services",
    "index": "Rail freight forwarding service"
  },
  {
    "code": "4710",
    "description": "Rail Freight Transport",
    "index": "Rail freight transport service"
  },
  {
    "code": "4720",
    "description": "Rail Passenger Transport",
    "index": "Rail passenger transport service"
  },
  {
    "code": "2110",
    "description": "Iron Smelting and Steel Manufacturing",
    "index": "Rail, steel, manufacturing"
  },
  {
    "code": "2223",
    "description": "Architectural Aluminium Product Manufacturing",
    "index": "Railing, aluminium, manufacturing"
  },
  {
    "code": "2229",
    "description": "Other Structural Metal Product Manufacturing",
    "index": "Railing, metal, manufacturing (except aluminium)"
  },
  {
    "code": "3109",
    "description": "Other Heavy and Civil Engineering Construction",
    "index": "Railway permanent way construction"
  },
  {
    "code": "2393",
    "description": "Railway Rolling Stock Manufacturing and Repair Services",
    "index": "Railway rolling stock manufacturing"
  },
  {
    "code": "0302",
    "description": "Logging",
    "index": "Railway sleeper hewing"
  },
  {
    "code": "2034",
    "description": "Concrete Product Manufacturing",
    "index": "Railway sleeper, concrete, manufacturing"
  },
  {
    "code": "5299",
    "description": "Other Transport Support Services n.e.c",
    "index": "Railway station or terminal operation"
  },
  {
    "code": "6619",
    "description": "Other Motor Vehicle and Transport Equipment Rental and Hiring",
    "index": "Railway stock leasing"
  },
  {
    "code": "2441",
    "description": "Whiteware Appliance Manufacturing",
    "index": "Rangehood, domestic, manufacturing"
  },
  {
    "code": "2139",
    "description": "Other Basic Non-Ferrous Metal Manufacturing",
    "index": "Rare earth metal smelting"
  },
  {
    "code": "0133",
    "description": "Berry Fruit Growing",
    "index": "Raspberry growing"
  },
  {
    "code": "1832",
    "description": "Pesticide Manufacturing",
    "index": "Rat poison manufacturing"
  },
  {
    "code": "2519",
    "description": "Other Furniture Manufacturing",
    "index": "Rattan furniture manufacturing"
  },
  {
    "code": "0160",
    "description": "Dairy Cattle Farming",
    "index": "Raw cattle milk production"
  },
  {
    "code": "0141",
    "description": "Sheep Farming (Specialised)",
    "index": "Raw sheep milk production"
  },
  {
    "code": "1829",
    "description": "Other Basic Polymer Manufacturing",
    "index": "Rayon manufacturing"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Razor or razor blade manufacturing (except power operated)"
  },
  {
    "code": "2033",
    "description": "Ready-Mixed Concrete Manufacturing",
    "index": "Ready-mixed concrete manufacturing"
  },
  {
    "code": "6720",
    "description": "Real Estate Services",
    "index": "Real estate agency service"
  },
  {
    "code": "6720",
    "description": "Real Estate Services",
    "index": "Real estate auctioning service"
  },
  {
    "code": "6720",
    "description": "Real Estate Services",
    "index": "Real estate management service"
  },
  {
    "code": "6720",
    "description": "Real Estate Services",
    "index": "Real estate rental agency service"
  },
  {
    "code": "7291",
    "description": "Office Administrative Services",
    "index": "Reception service"
  },
  {
    "code": "5522",
    "description": "Music and Other Sound Recording Activities",
    "index": "Record distribution"
  },
  {
    "code": "2429",
    "description": "Other Electronic Equipment Manufacturing",
    "index": "Record player manufacturing"
  },
  {
    "code": "5522",
    "description": "Music and Other Sound Recording Activities",
    "index": "Record production"
  },
  {
    "code": "5522",
    "description": "Music and Other Sound Recording Activities",
    "index": "Record production and distribution"
  },
  {
    "code": "1709",
    "description": "Other Petroleum and Coal Product Manufacturing",
    "index": "Recovery of lubricating oil or grease from used petroleum waste products"
  },
  {
    "code": "9139",
    "description": "Amusement and Other Recreation Activities n.e.c.",
    "index": "Recreational activity n.e.c."
  },
  {
    "code": "0133",
    "description": "Berry Fruit Growing",
    "index": "Redcurrant growing"
  },
  {
    "code": "6010",
    "description": "Libraries and Archives",
    "index": "Reference library operation"
  },
  {
    "code": "0510",
    "description": "Forestry Support Services",
    "index": "Reforestation service"
  },
  {
    "code": "2029",
    "description": "Other Ceramic Product Manufacturing",
    "index": "Refractory product manufacturing"
  },
  {
    "code": "5309",
    "description": "Other Warehousing and Storage Services",
    "index": "Refrigerated storage service"
  },
  {
    "code": "1919",
    "description": "Other Polymer Product Manufacturing",
    "index": "Refrigeration container insulation sheet manufacturing"
  },
  {
    "code": "9429",
    "description": "Other Machinery and Equipment Repair and Maintenance",
    "index": "Refrigeration equipment (industrial) repair and maintenance"
  },
  {
    "code": "3233",
    "description": "Air Conditioning and Heating Services",
    "index": "Refrigeration equipment installation"
  },
  {
    "code": "2452",
    "description": "Fixed Space Heating, Cooling and Ventilation Equipment Manufacturing",
    "index": "Refrigeration equipment, commercial or industrial, manufacturing"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Refrigeration equipment, wholesaling"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing",
    "index": "Refrigeration gas manufacturing"
  },
  {
    "code": "2441",
    "description": "Whiteware Appliance Manufacturing",
    "index": "Refrigerator compressor, domestic, manufacturing"
  },
  {
    "code": "2441",
    "description": "Whiteware Appliance Manufacturing",
    "index": "Refrigerator, domestic, manufacturing"
  },
  {
    "code": "9421",
    "description": "Domestic Appliance Repair and Maintenance",
    "index": "Refrigerator, domestic, repair"
  },
  {
    "code": "4221",
    "description": "Electrical, Electronic and Gas Appliance Retailing",
    "index": "Refrigerator, retailing"
  },
  {
    "code": "9114",
    "description": "Sport and Physical Recreation Administrative Service",
    "index": "Regional/district sporting association or league"
  },
  {
    "code": "7720",
    "description": "Regulatory Services",
    "index": "Regulating casino and other gambling"
  },
  {
    "code": "7720",
    "description": "Regulatory Services",
    "index": "Regulating food and agricultural standards"
  },
  {
    "code": "7720",
    "description": "Regulatory Services",
    "index": "Regulating qualification standards"
  },
  {
    "code": "7530",
    "description": "Local Government Administration",
    "index": "Regulation enactment and enforcement (local government)"
  },
  {
    "code": "2221",
    "description": "Structural Steel Fabricating",
    "index": "Reinforcing mesh, welded steel, manufacturing"
  },
  {
    "code": "3224",
    "description": "Structural Steel Erection Services",
    "index": "Reinforcing steel erection"
  },
  {
    "code": "2221",
    "description": "Structural Steel Fabricating",
    "index": "Reinforcing steel rod, processed, manufacturing (from wire bar or merchant bar)"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Reinforcing wire wholesaling"
  },
  {
    "code": "6322",
    "description": "General Insurance",
    "index": "Reinsurance (except life) provision"
  },
  {
    "code": "1611",
    "description": "Printing",
    "index": "Relief printing, including letterpress and flexographic printing"
  },
  {
    "code": "4244",
    "description": "Newspaper and Book Retailing",
    "index": "Religious book retailing"
  },
  {
    "code": "4279",
    "description": "Other Store-Based Retailing n.e.c.",
    "index": "Religious goods (except books) retailing"
  },
  {
    "code": "9540",
    "description": "Religious Services",
    "index": "Religious organisation operation"
  },
  {
    "code": "9540",
    "description": "Religious Services",
    "index": "Religious shrine operation"
  },
  {
    "code": "9540",
    "description": "Religious Services",
    "index": "Religious temple operation"
  },
  {
    "code": "7714",
    "description": "Correctional and Detention Services",
    "index": "Remand centre operation"
  },
  {
    "code": "2922",
    "description": "Waste Remediation and Materials Recovery Services",
    "index": "Remediation service, environmental"
  },
  {
    "code": "2422",
    "description": "Communications Equipment Manufacturing",
    "index": "Remote monitoring alarm system equipment manufacturing"
  },
  {
    "code": "3212",
    "description": "Site Preparation Services",
    "index": "Removal of overburden"
  },
  {
    "code": "3020",
    "description": "Non-Residential Building Construction",
    "index": "Renovation or alteration of non-residential buildings"
  },
  {
    "code": "3019",
    "description": "Other Residential Building Construction",
    "index": "Renovation or alteration of residential building n.e.c."
  },
  {
    "code": "3222",
    "description": "Bricklaying Services",
    "index": "Repair of brickwork"
  },
  {
    "code": "3234",
    "description": "Fire and Security Alarm Installation Services",
    "index": "Repair of installed fire or burglar security alarm systems"
  },
  {
    "code": "3231",
    "description": "Plumbing Services",
    "index": "Repair of installed plumbing"
  },
  {
    "code": "3221",
    "description": "Concreting Services",
    "index": "Repair of kerbs, gutters or other concrete structural products"
  },
  {
    "code": "2393",
    "description": "Railway Rolling Stock Manufacturing and Repair Services",
    "index": "Repair of locomotives and rolling stock"
  },
  {
    "code": "3232",
    "description": "Electrical Services",
    "index": "Repair or maintenance of electrical wiring (except of electricity transmission or distribution lines)"
  },
  {
    "code": "3101",
    "description": "Road and Bridge Construction",
    "index": "Repair or maintenance of roads or bridges"
  },
  {
    "code": "7293",
    "description": "Credit Reporting and Debt Collection Services",
    "index": "Repossession service"
  },
  {
    "code": "8921",
    "description": "Zoological and Botanic Gardens Operation",
    "index": "Reptile park operation"
  },
  {
    "code": "7713",
    "description": "Fire Protection and Other Emergency Services (except Ambulance Services)",
    "index": "Rescue service"
  },
  {
    "code": "6910",
    "description": "Scientific Research Services",
    "index": "Research farm operation"
  },
  {
    "code": "8102",
    "description": "Higher Education",
    "index": "Research school, university operation"
  },
  {
    "code": "7311",
    "description": "Buildings Cleaning Services",
    "index": "Residential building cleaning"
  },
  {
    "code": "8601",
    "description": "Aged Care Residential Services",
    "index": "Residential care for the aged operation"
  },
  {
    "code": "6711",
    "description": "Residential Property Operators",
    "index": "Residential property body corporate operation"
  },
  {
    "code": "6711",
    "description": "Residential Property Operators",
    "index": "Residential property strata corporation operation"
  },
  {
    "code": "8609",
    "description": "Other Residential Care Services",
    "index": "Residential refuge operation"
  },
  {
    "code": "2090",
    "description": "Other Non-Metallic Mineral Product Manufacturing",
    "index": "Resin coated sand manufacturing"
  },
  {
    "code": "0301",
    "description": "Forestry",
    "index": "Resin gathering"
  },
  {
    "code": "4400",
    "description": "Accommodation",
    "index": "Resort operation"
  },
  {
    "code": "2412",
    "description": "Medical and Surgical Equipment Manufacturing",
    "index": "Respirator manufacturing"
  },
  {
    "code": "8609",
    "description": "Other Residential Care Services",
    "index": "Respite residential care operation"
  },
  {
    "code": "4511",
    "description": "Cafes and Restaurants",
    "index": "Restaurant operation"
  },
  {
    "code": "7292",
    "description": "Document Preparation Services",
    "index": "Resume writing service"
  },
  {
    "code": "9551",
    "description": "Business and Professional Association Services",
    "index": "Retail traders' association operation"
  },
  {
    "code": "3291",
    "description": "Landscape Construction Services",
    "index": "Retaining wall construction"
  },
  {
    "code": "1914",
    "description": "Tyre Manufacturing",
    "index": "Retread or rebuilt tyre manufacturing"
  },
  {
    "code": "0804",
    "description": "Gold Ore Mining",
    "index": "Reworking of mullock heaps or tailings for gold"
  },
  {
    "code": "8512",
    "description": "Specialist Medical Services",
    "index": "Rheumatology service"
  },
  {
    "code": "1161",
    "description": "Grain Mill Product Manufacturing",
    "index": "Rice flour, meal or offal manufacturing"
  },
  {
    "code": "0146",
    "description": "Rice Growing",
    "index": "Rice growing"
  },
  {
    "code": "1161",
    "description": "Grain Mill Product Manufacturing",
    "index": "Rice manufacturing (including parboiled)"
  },
  {
    "code": "1199",
    "description": "Other Food Products Manufacturing n.e.c.",
    "index": "Rice preparation manufacturing n.e.c."
  },
  {
    "code": "1140",
    "description": "Fruit and Vegetable Processing",
    "index": "Rice preparation, canned, manufacturing"
  },
  {
    "code": "1161",
    "description": "Grain Mill Product Manufacturing",
    "index": "Rice starch manufacturing"
  },
  {
    "code": "3312",
    "description": "Cereal Grain Wholesaling",
    "index": "Rice wholesaling"
  },
  {
    "code": "3609",
    "description": "Other Grocery Wholesaling",
    "index": "Rice, milled or polished, wholesaling"
  },
  {
    "code": "4810",
    "description": "Water Freight Transport",
    "index": "River freight transport service"
  },
  {
    "code": "0911",
    "description": "Gravel and Sand Quarrying",
    "index": "River gravel quarrying, washing or screening"
  },
  {
    "code": "3109",
    "description": "Other Heavy and Civil Engineering Construction",
    "index": "River work construction"
  },
  {
    "code": "2292",
    "description": "Nut, Bolt, Screw and Rivet Manufacturing",
    "index": "Rivet, metal, manufacturing"
  },
  {
    "code": "3101",
    "description": "Road and Bridge Construction",
    "index": "Road construction or sealing"
  },
  {
    "code": "0919",
    "description": "Other Construction Material Mining",
    "index": "Road fill quarrying"
  },
  {
    "code": "5292",
    "description": "Freight Forwarding Services",
    "index": "Road freight forwarding service"
  },
  {
    "code": "5299",
    "description": "Other Transport Support Services n.e.c",
    "index": "Road freight terminal operation"
  },
  {
    "code": "4610",
    "description": "Road Freight Transport",
    "index": "Road freight transport service"
  },
  {
    "code": "5299",
    "description": "Other Transport Support Services n.e.c",
    "index": "Road passenger terminal operation"
  },
  {
    "code": "4623",
    "description": "Taxi and Other Road Transport",
    "index": "Road passenger transport n.e.c"
  },
  {
    "code": "7311",
    "description": "Buildings Cleaning Services",
    "index": "Road sweeping"
  },
  {
    "code": "5299",
    "description": "Other Transport Support Services n.e.c",
    "index": "Road vehicle driving service (except owner/operator)"
  },
  {
    "code": "4610",
    "description": "Road Freight Transport",
    "index": "Road vehicle towing"
  },
  {
    "code": "2491",
    "description": "Lifting and Material Handling Equipment Manufacturing",
    "index": "Robotic material handling equipment manufacturing"
  },
  {
    "code": "0411",
    "description": "Rock Lobster and Crab Potting",
    "index": "Rock lobster fishing or potting"
  },
  {
    "code": "0911",
    "description": "Gravel and Sand Quarrying",
    "index": "Rock, ornamental, gathering"
  },
  {
    "code": "3291",
    "description": "Landscape Construction Services",
    "index": "Rockery work"
  },
  {
    "code": "2090",
    "description": "Other Non-Metallic Mineral Product Manufacturing",
    "index": "Rockwool manufacturing"
  },
  {
    "code": "1912",
    "description": "Rigid and Semi Rigid Polymer Product Manufacturing",
    "index": "Rod or tube, plastic, manufacturing"
  },
  {
    "code": "2142",
    "description": "Aluminium Rolling, Drawing, Extruding",
    "index": "Rod, aluminium, manufacturing"
  },
  {
    "code": "2149",
    "description": "Other Basic Non-Ferrous Metal Product Manufacturing",
    "index": "Rod, non-ferrous metal, manufacturing (except aluminium)"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Roller shutter wholesaling"
  },
  {
    "code": "2223",
    "description": "Architectural Aluminium Product Manufacturing",
    "index": "Roller shutter, aluminium, manufacturing"
  },
  {
    "code": "2229",
    "description": "Other Structural Metal Product Manufacturing",
    "index": "Roller shutter, metal, manufacturing (except aluminium)"
  },
  {
    "code": "2462",
    "description": "Mining and Construction Machinery Manufacturing",
    "index": "Roller, road, manufacturing"
  },
  {
    "code": "2034",
    "description": "Concrete Product Manufacturing",
    "index": "Roof component, concrete, manufacturing"
  },
  {
    "code": "2110",
    "description": "Iron Smelting and Steel Manufacturing",
    "index": "Roof decking, steel, manufacturing"
  },
  {
    "code": "3223",
    "description": "Roofing Services",
    "index": "Roof painting, spraying or coating"
  },
  {
    "code": "2319",
    "description": "Other Motor Vehicle Parts Manufacturing",
    "index": "Roof rack manufacturing"
  },
  {
    "code": "2029",
    "description": "Other Ceramic Product Manufacturing",
    "index": "Roof tile, clay or terracotta, manufacturing"
  },
  {
    "code": "2034",
    "description": "Concrete Product Manufacturing",
    "index": "Roof tile, concrete, manufacturing"
  },
  {
    "code": "3223",
    "description": "Roofing Services",
    "index": "Roof tiling"
  },
  {
    "code": "2221",
    "description": "Structural Steel Fabricating",
    "index": "Roof truss, prefabricated steel, manufacturing"
  },
  {
    "code": "3242",
    "description": "Carpentry Services",
    "index": "Roof truss, wooden, fixing"
  },
  {
    "code": "1492",
    "description": "Wooden Structural Fittings and Components Manufacturing",
    "index": "Roof truss, wooden, manufacturing"
  },
  {
    "code": "2224",
    "description": "Metal Roof and Guttering Manufacturing (except Aluminium)",
    "index": "Roofing component, metal, manufacturing (except aluminium)"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Roofing material wholesaling"
  },
  {
    "code": "2224",
    "description": "Metal Roof and Guttering Manufacturing (except Aluminium)",
    "index": "Roofing, metal, manufacturing (except aluminium)"
  },
  {
    "code": "1332",
    "description": "Rope, Cordage and Twine Manufacturing",
    "index": "Rope manufacturing (except wire rope)"
  },
  {
    "code": "3711",
    "description": "Textile Product Wholesaling",
    "index": "Rope wholesaling (except wire rope)"
  },
  {
    "code": "1411",
    "description": "Log Sawmilling",
    "index": "Rough sawn timber manufacturing"
  },
  {
    "code": "0302",
    "description": "Logging",
    "index": "Rough shaping of forest timber"
  },
  {
    "code": "2291",
    "description": "Spring and Wire Product Manufacturing",
    "index": "Round wire manufacturing"
  },
  {
    "code": "7540",
    "description": "Justice",
    "index": "Royal commission operation"
  },
  {
    "code": "1915",
    "description": "Adhesive Manufacturing",
    "index": "Rubber adhesives manufacturing"
  },
  {
    "code": "1920",
    "description": "Natural Rubber Product Manufacturing",
    "index": "Rubber balloon, natural rubber, manufacturing"
  },
  {
    "code": "1920",
    "description": "Natural Rubber Product Manufacturing",
    "index": "Rubber band, natural rubber, manufacturing"
  },
  {
    "code": "1920",
    "description": "Natural Rubber Product Manufacturing",
    "index": "Rubber glove, natural rubber, manufacturing"
  },
  {
    "code": "3419",
    "description": "Other Specialised Industrial Machinery and Equipment Wholesaling",
    "index": "Rubber making or working machinery or equipment wholesaling"
  },
  {
    "code": "1916",
    "description": "Paint and Coatings Manufacturing",
    "index": "Rubbing compound (frits) manufacturing"
  },
  {
    "code": "2911",
    "description": "Solid Waste Collection Services",
    "index": "Rubbish collection service"
  },
  {
    "code": "2921",
    "description": "Waste Treatment and Disposal Services",
    "index": "Rubbish dump or tip operation"
  },
  {
    "code": "4621",
    "description": "Interurban and Rural Bus Transport",
    "index": "Rural bus service"
  },
  {
    "code": "8511",
    "description": "General Practice Medical Services",
    "index": "Rural general medical practice service"
  },
  {
    "code": "1709",
    "description": "Other Petroleum and Coal Product Manufacturing",
    "index": "Rust arresting compound manufacturing"
  },
  {
    "code": "0805",
    "description": "Mineral Sand Mining",
    "index": "Rutile sand mining"
  },
  {
    "code": "1161",
    "description": "Grain Mill Product Manufacturing",
    "index": "Rye flour, meal or offal manufacturing"
  },
  {
    "code": "1841",
    "description": "Human Pharmaceutical and Medicinal Product Manufacturing",
    "index": "Saccharin manufacturing"
  },
  {
    "code": "1320",
    "description": "Leather Tanning and Fur Dressing",
    "index": "Saddle manufacturing"
  },
  {
    "code": "1892",
    "description": "Explosives Manufacturing",
    "index": "Safety fuse manufacturing"
  },
  {
    "code": "2010",
    "description": "Glass and Glass Product Manufacturing",
    "index": "Safety glass manufacturing"
  },
  {
    "code": "1912",
    "description": "Rigid and Semi Rigid Polymer Product Manufacturing",
    "index": "Safety goggle, plastic, manufacturing"
  },
  {
    "code": "2291",
    "description": "Spring and Wire Product Manufacturing",
    "index": "Safety pin manufacturing"
  },
  {
    "code": "0149",
    "description": "Other Grain Growing",
    "index": "Safflower growing"
  },
  {
    "code": "1161",
    "description": "Grain Mill Product Manufacturing",
    "index": "Sago manufacturing"
  },
  {
    "code": "3711",
    "description": "Textile Product Wholesaling",
    "index": "Sail cloth wholesaling"
  },
  {
    "code": "1333",
    "description": "Cut and Sewn Textile Product Manufacturing",
    "index": "Sail manufacturing"
  },
  {
    "code": "2592",
    "description": "Toy, Sporting and Recreational Product Manufacturing",
    "index": "Sailboard manufacturing"
  },
  {
    "code": "4241",
    "description": "Sport and Camping Equipment Retailing",
    "index": "Sailboard retailing"
  },
  {
    "code": "2392",
    "description": "Boatbuilding and Repair Services",
    "index": "Sailboat manufacturing"
  },
  {
    "code": "4245",
    "description": "Marine Equipment Retailing",
    "index": "Sailing or nautical accessory retailing"
  },
  {
    "code": "8211",
    "description": "Sports and Physical Recreation Instruction",
    "index": "Sailing school operation"
  },
  {
    "code": "6962",
    "description": "Management Advice and Other Consulting Services",
    "index": "Sales advisory service"
  },
  {
    "code": "0202",
    "description": "Caged (Offshore) Aquaculture",
    "index": "Salmon farming (caged)"
  },
  {
    "code": "0203",
    "description": "Onshore Aquaculture",
    "index": "Salmon farming (pond or tank)"
  },
  {
    "code": "0990",
    "description": "Other Non-Metallic Mineral Mining and Quarrying",
    "index": "Salt harvesting"
  },
  {
    "code": "1199",
    "description": "Other Food Products Manufacturing n.e.c.",
    "index": "Salt, cooking or table, manufacturing"
  },
  {
    "code": "3609",
    "description": "Other Grocery Wholesaling",
    "index": "Salt, household, wholesaling"
  },
  {
    "code": "0411",
    "description": "Rock Lobster and Crab Potting",
    "index": "Saltwater crayfish fishing"
  },
  {
    "code": "5219",
    "description": "Other Water Transport Support Services",
    "index": "Salvage service, marine"
  },
  {
    "code": "6940",
    "description": "Advertising Services",
    "index": "Sample distribution service"
  },
  {
    "code": "3299",
    "description": "Other Construction Services n.e.c.",
    "index": "Sand blasting or steam cleaning of building exteriors"
  },
  {
    "code": "0911",
    "description": "Gravel and Sand Quarrying",
    "index": "Sand quarrying, washing or screening"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Sand wholesaling"
  },
  {
    "code": "1352",
    "description": "Footwear Manufacturing",
    "index": "Sandal manufacturing"
  },
  {
    "code": "1899",
    "description": "Other Basic Chemical Product Manufacturing n.e.c.",
    "index": "Sandalwood oil distilling"
  },
  {
    "code": "0919",
    "description": "Other Construction Material Mining",
    "index": "Sandstone quarrying"
  },
  {
    "code": "2921",
    "description": "Waste Treatment and Disposal Services",
    "index": "Sanitary disposal service"
  },
  {
    "code": "6923",
    "description": "Engineering Design and Engineering Consulting Services",
    "index": "Sanitary engineering consulting service"
  },
  {
    "code": "1524",
    "description": "Sanitary Paper Product Manufacturing",
    "index": "Sanitary napkin (cellulose-based) manufacturing"
  },
  {
    "code": "1524",
    "description": "Sanitary Paper Product Manufacturing",
    "index": "Sanitary paper product manufacturing n.e.c."
  },
  {
    "code": "5622",
    "description": "Cable and Other Subscription Programming",
    "index": "Satellite broadcasting network operation"
  },
  {
    "code": "5622",
    "description": "Cable and Other Subscription Programming",
    "index": "Satellite broadcasting station operation"
  },
  {
    "code": "5809",
    "description": "Other Telecommunications Services",
    "index": "Satellite earth station operation"
  },
  {
    "code": "5802",
    "description": "Other Telecommunications Network Operation",
    "index": "Satellite telecommunications network operation"
  },
  {
    "code": "1140",
    "description": "Fruit and Vegetable Processing",
    "index": "Sauce manufacturing (except Worcestershire sauce)"
  },
  {
    "code": "9539",
    "description": "Other Personal Services n.e.c.",
    "index": "Sauna bath operation"
  },
  {
    "code": "3602",
    "description": "Meat, Poultry and Smallgoods Wholesaling",
    "index": "Sausage wholesaling"
  },
  {
    "code": "6221",
    "description": "Banking",
    "index": "Savings bank operation"
  },
  {
    "code": "1199",
    "description": "Other Food Products Manufacturing n.e.c.",
    "index": "Savoury speciality manufacturing"
  },
  {
    "code": "2463",
    "description": "Machine Tool and Parts Manufacturing",
    "index": "Saw, power operated, manufacturing"
  },
  {
    "code": "3299",
    "description": "Other Construction Services n.e.c.",
    "index": "Scaffolding construction"
  },
  {
    "code": "6631",
    "description": "Heavy Machinery and Scaffolding Rental and Hiring",
    "index": "Scaffolding rental (except erection of scaffolding)"
  },
  {
    "code": "2221",
    "description": "Structural Steel Fabricating",
    "index": "Scaffolding, prefabricated steel, manufacturing"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Scale, electrical or electronic, wholesaling"
  },
  {
    "code": "3499",
    "description": "Other Machinery and Equipment Wholesaling n",
    "index": "Scale, non-electrical or non-electronic, wholesaling"
  },
  {
    "code": "9422",
    "description": "Electronic (except Domestic Appliance) and Precision Equipment Repair and Maintenance",
    "index": "Scales, professional or scientific, repair and maintenance"
  },
  {
    "code": "1120",
    "description": "Seafood Processing",
    "index": "Scallop, preserved, manufacturing"
  },
  {
    "code": "0412",
    "description": "Prawn Fishing",
    "index": "Scampi fishing"
  },
  {
    "code": "5010",
    "description": "Scenic and Sightseeing Transport",
    "index": "Scenic railway operation"
  },
  {
    "code": "4622",
    "description": "Urban Bus Transport (Including Tramway)",
    "index": "School bus service"
  },
  {
    "code": "3491",
    "description": "Professional and Scientific Goods Wholesaling",
    "index": "Scientific equipment wholesaling"
  },
  {
    "code": "2010",
    "description": "Glass and Glass Product Manufacturing",
    "index": "Scientific glassware manufacturing"
  },
  {
    "code": "6910",
    "description": "Scientific Research Services",
    "index": "Scientific research service"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Scissor manufacturing (except electric)"
  },
  {
    "code": "3503",
    "description": "Trailer and Other Motor Vehicle Wholesaling",
    "index": "Scooter wholesaling"
  },
  {
    "code": "2399",
    "description": "Other Transport Equipment Manufacturing n.e.c.",
    "index": "Scooter, electronic, manufacturing"
  },
  {
    "code": "1311",
    "description": "Wool Scouring",
    "index": "Scoured wool manufacturing"
  },
  {
    "code": "1851",
    "description": "Cleaning Compound Manufacturing",
    "index": "Scouring compound manufacturing"
  },
  {
    "code": "1320",
    "description": "Leather Tanning and Fur Dressing",
    "index": "Scraping fur and pelt"
  },
  {
    "code": "2512",
    "description": "Metal Furniture Manufacturing",
    "index": "Screen partition, metal, manufacturing"
  },
  {
    "code": "1611",
    "description": "Printing",
    "index": "Screen printing on made-up clothing"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Screening wire wholesaling"
  },
  {
    "code": "2291",
    "description": "Spring and Wire Product Manufacturing",
    "index": "Screening, wire, manufacturing"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Screens, window, wholesaling"
  },
  {
    "code": "2292",
    "description": "Nut, Bolt, Screw and Rivet Manufacturing",
    "index": "Screw, metal, manufacturing"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Screwdriver manufacturing (including bits or blades; except pneumatic or power operated)"
  },
  {
    "code": "9002",
    "description": "Creative Artists, Musicians, Writers and Performers",
    "index": "Sculpting"
  },
  {
    "code": "8212",
    "description": "Arts Education",
    "index": "Sculpture instruction"
  },
  {
    "code": "1120",
    "description": "Seafood Processing",
    "index": "Seafood, canned, manufacturing"
  },
  {
    "code": "3609",
    "description": "Other Grocery Wholesaling",
    "index": "Seafood, canned, wholesaling"
  },
  {
    "code": "3604",
    "description": "Fish and Seafood Wholesaling",
    "index": "Seafood, fresh or frozen, wholesaling"
  },
  {
    "code": "4121",
    "description": "Fresh Meat, Fish and Poultry Retailing",
    "index": "Seafood, fresh, retailing"
  },
  {
    "code": "1120",
    "description": "Seafood Processing",
    "index": "Seafood, preserved, manufacturing"
  },
  {
    "code": "1413",
    "description": "Timber Resawing and Dressing",
    "index": "Seasoning timber"
  },
  {
    "code": "1199",
    "description": "Other Food Products Manufacturing n.e.c.",
    "index": "Seasoning, food, manufacturing"
  },
  {
    "code": "2319",
    "description": "Other Motor Vehicle Parts Manufacturing",
    "index": "Seat belt manufacturing"
  },
  {
    "code": "1320",
    "description": "Leather Tanning and Fur Dressing",
    "index": "Seat cover, sheepskin, manufacturing"
  },
  {
    "code": "1333",
    "description": "Cut and Sewn Textile Product Manufacturing",
    "index": "Seat cover, textile, manufacturing (except sheepskin)"
  },
  {
    "code": "2511",
    "description": "Wooden Furniture and Upholstered Seat Manufacturing",
    "index": "Seat, upholstered, manufacturing"
  },
  {
    "code": "0201",
    "description": "Longline and Rack (Offshore) Aquaculture",
    "index": "Seaweed farming (longline or rack)"
  },
  {
    "code": "0419",
    "description": "Other Fishing",
    "index": "Seaweed harvesting"
  },
  {
    "code": "3505",
    "description": "Motor Vehicle Dismantling and Used Part Wholesaling",
    "index": "Second hand motor cycle parts wholesaling"
  },
  {
    "code": "3505",
    "description": "Motor Vehicle Dismantling and Used Part Wholesaling",
    "index": "Second hand motor vehicle parts wholesaling"
  },
  {
    "code": "8023",
    "description": "Combined Primary and Secondary Education",
    "index": "Secondary college operation (combined primary/secondary school)"
  },
  {
    "code": "8022",
    "description": "Secondary Education",
    "index": "Secondary college operation (except combined primary/secondary school)"
  },
  {
    "code": "8023",
    "description": "Combined Primary and Secondary Education",
    "index": "Secondary school operation (combined primary/secondary school)"
  },
  {
    "code": "8022",
    "description": "Secondary Education",
    "index": "Secondary school operation (except combined primary/ secondary school)"
  },
  {
    "code": "4273",
    "description": "Antique and Used Goods Retailing",
    "index": "Second-hand book retailing"
  },
  {
    "code": "3739",
    "description": "Other Goods Wholesaling n.e.c.",
    "index": "Second-hand bottle dealing (wholesaling)"
  },
  {
    "code": "4273",
    "description": "Antique and Used Goods Retailing",
    "index": "Second-hand cloth retailing"
  },
  {
    "code": "4273",
    "description": "Antique and Used Goods Retailing",
    "index": "Second-hand electrical, electronic or computer equipment retailing"
  },
  {
    "code": "4273",
    "description": "Antique and Used Goods Retailing",
    "index": "Second-hand furniture retailing"
  },
  {
    "code": "4273",
    "description": "Antique and Used Goods Retailing",
    "index": "Second-hand goods retailing n.e.c."
  },
  {
    "code": "3739",
    "description": "Other Goods Wholesaling n.e.c.",
    "index": "Second-hand goods wholesaling n.e.c."
  },
  {
    "code": "4273",
    "description": "Antique and Used Goods Retailing",
    "index": "Second-hand jewellery retailing"
  },
  {
    "code": "4273",
    "description": "Antique and Used Goods Retailing",
    "index": "Second-hand record, tape, CD, DVD or videos retailing"
  },
  {
    "code": "4273",
    "description": "Antique and Used Goods Retailing",
    "index": "Second-hand sports card retailing"
  },
  {
    "code": "8101",
    "description": "Technical and Vocational Education and Training",
    "index": "Secretarial training"
  },
  {
    "code": "2142",
    "description": "Aluminium Rolling, Drawing, Extruding",
    "index": "Section, aluminium, rolling, drawing or extruding"
  },
  {
    "code": "2149",
    "description": "Other Basic Non-Ferrous Metal Product Manufacturing",
    "index": "Section, non-ferrous metal, rolling, drawing or extruding (except aluminium)"
  },
  {
    "code": "2110",
    "description": "Iron Smelting and Steel Manufacturing",
    "index": "Section, steel, manufacturing"
  },
  {
    "code": "7712",
    "description": "Investigation and Security Services",
    "index": "Security alarm monitoring service"
  },
  {
    "code": "7712",
    "description": "Investigation and Security Services",
    "index": "Security guard service"
  },
  {
    "code": "3234",
    "description": "Fire and Security Alarm Installation Services",
    "index": "Security system installation"
  },
  {
    "code": "6419",
    "description": "Other Auxiliary Finance and Investment Services",
    "index": "Security valuation service"
  },
  {
    "code": "0529",
    "description": "Other Agriculture and Fishing Support Services",
    "index": "Seed grading or cleaning"
  },
  {
    "code": "0159",
    "description": "Other Crop Growing n.e.c.",
    "index": "Seed growing n.e.c."
  },
  {
    "code": "3319",
    "description": "Other Agricultural Product Wholesaling",
    "index": "Seed, farm or garden, wholesaling"
  },
  {
    "code": "0115",
    "description": "Floriculture Production (Outdoors)",
    "index": "Seed, flower, growing (outdoors)"
  },
  {
    "code": "0114",
    "description": "Floriculture Production (Under Cover)",
    "index": "Seed, flower, growing (under cover)"
  },
  {
    "code": "4232",
    "description": "Garden Supplies Retailing",
    "index": "Seed, garden, retailing"
  },
  {
    "code": "0112",
    "description": "Nursery Production (Outdoors)",
    "index": "Seedling growing (outdoors)"
  },
  {
    "code": "0111",
    "description": "Nursery Production (Under Cover)",
    "index": "Seedling growing (under cover)"
  },
  {
    "code": "4232",
    "description": "Garden Supplies Retailing",
    "index": "Seedlings retailing"
  },
  {
    "code": "6925",
    "description": "Scientific Testing and Analysis Services",
    "index": "Seismic survey data analysis service"
  },
  {
    "code": "6922",
    "description": "Surveying and Mapping Services",
    "index": "Seismic surveying service"
  },
  {
    "code": "1161",
    "description": "Grain Mill Product Manufacturing",
    "index": "Self-raising flour manufacturing"
  },
  {
    "code": "9531",
    "description": "Laundry and Dry-Cleaning Services",
    "index": "Self-service laundry operation"
  },
  {
    "code": "6712",
    "description": "Non-Residential Property Operators",
    "index": "Self-storage renting or leasing"
  },
  {
    "code": "2429",
    "description": "Other Electronic Equipment Manufacturing",
    "index": "Semi-conductor manufacturing"
  },
  {
    "code": "3019",
    "description": "Other Residential Building Construction",
    "index": "Semi-detached house construction"
  },
  {
    "code": "2110",
    "description": "Iron Smelting and Steel Manufacturing",
    "index": "Semi-finished product, iron or steel, manufacturing"
  },
  {
    "code": "1161",
    "description": "Grain Mill Product Manufacturing",
    "index": "Semolina manufacturing"
  },
  {
    "code": "3231",
    "description": "Plumbing Services",
    "index": "Septic tank installation (including repair)"
  },
  {
    "code": "2921",
    "description": "Waste Treatment and Disposal Services",
    "index": "Septic tank pumping or cleaning service (except repairs and maintenance)"
  },
  {
    "code": "2919",
    "description": "Other Waste Collection Services",
    "index": "Septic tank waste collection service (except repairs and maintenance)"
  },
  {
    "code": "1611",
    "description": "Printing",
    "index": "Seriography (screen printing)"
  },
  {
    "code": "1841",
    "description": "Human Pharmaceutical and Medicinal Product Manufacturing",
    "index": "Serum manufacturing"
  },
  {
    "code": "4000",
    "description": "Fuel Retailing",
    "index": "Service station operation (mainly petrol retailing)"
  },
  {
    "code": "4400",
    "description": "Accommodation",
    "index": "Serviced apartments"
  },
  {
    "code": "9002",
    "description": "Creative Artists, Musicians, Writers and Performers",
    "index": "Set designing service"
  },
  {
    "code": "0414",
    "description": "Fish Trawling, Seining and Netting",
    "index": "Set netting, fishing"
  },
  {
    "code": "2292",
    "description": "Nut, Bolt, Screw and Rivet Manufacturing",
    "index": "Set screw, metal, manufacturing"
  },
  {
    "code": "3109",
    "description": "Other Heavy and Civil Engineering Construction",
    "index": "Sewage or stormwater drainage system construction"
  },
  {
    "code": "2812",
    "description": "Sewerage and Drainage Services",
    "index": "Sewage pumping station operation"
  },
  {
    "code": "3109",
    "description": "Other Heavy and Civil Engineering Construction",
    "index": "Sewage treatment plant construction"
  },
  {
    "code": "2812",
    "description": "Sewerage and Drainage Services",
    "index": "Sewage treatment plant operation"
  },
  {
    "code": "2812",
    "description": "Sewerage and Drainage Services",
    "index": "Sewerage system operation"
  },
  {
    "code": "9421",
    "description": "Domestic Appliance Repair and Maintenance",
    "index": "Sewing machine (domestic) repair"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Sewing machine wholesaling"
  },
  {
    "code": "2449",
    "description": "Other Domestic Appliance Manufacturing",
    "index": "Sewing machine, domestic, manufacturing"
  },
  {
    "code": "2469",
    "description": "Other Specialised Machinery and Equipment Manufacturing",
    "index": "Sewing machine, industrial, manufacturing"
  },
  {
    "code": "3711",
    "description": "Textile Product Wholesaling",
    "index": "Sewing thread wholesaling"
  },
  {
    "code": "6419",
    "description": "Other Auxiliary Finance and Investment Services",
    "index": "Share registry operation"
  },
  {
    "code": "0160",
    "description": "Dairy Cattle Farming",
    "index": "Sharemilking dairy cattle"
  },
  {
    "code": "4221",
    "description": "Electrical, Electronic and Gas Appliance Retailing",
    "index": "Shaver, electric, retailing"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Shaver, electric, wholesaling"
  },
  {
    "code": "1852",
    "description": "Cosmetic and Toiletry Preparation Manufacturing",
    "index": "Shaving preparation manufacturing"
  },
  {
    "code": "2222",
    "description": "Prefabricated Metal Building Manufacturing",
    "index": "Shed, prefabricated metal, manufacturing"
  },
  {
    "code": "1491",
    "description": "Prefabricated Wooden Building Manufacturing",
    "index": "Shed, prefabricated wood, manufacturing"
  },
  {
    "code": "0141",
    "description": "Sheep Farming (Specialised)",
    "index": "Sheep agistment service"
  },
  {
    "code": "0144",
    "description": "Sheep-Beef Cattle Farming",
    "index": "Sheep and beef cattle farming"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Sheep dip wholesaling"
  },
  {
    "code": "0141",
    "description": "Sheep Farming (Specialised)",
    "index": "Sheep farming"
  },
  {
    "code": "0145",
    "description": "Grain-Sheep and Grain-Beef Cattle Farming",
    "index": "Sheep farming and grain growing"
  },
  {
    "code": "1192",
    "description": "Prepared Animal and Bird Feed Manufacturing",
    "index": "Sheep lick manufacturing"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Sheep lick wholesaling"
  },
  {
    "code": "0522",
    "description": "Shearing Services",
    "index": "Sheep shearing"
  },
  {
    "code": "1913",
    "description": "Polymer Foam Product Manufacturing",
    "index": "Sheet foam manufacturing"
  },
  {
    "code": "5521",
    "description": "Music Publishing",
    "index": "Sheet music publishing"
  },
  {
    "code": "3739",
    "description": "Other Goods Wholesaling n.e.c.",
    "index": "Sheet music wholesaling"
  },
  {
    "code": "2142",
    "description": "Aluminium Rolling, Drawing, Extruding",
    "index": "Sheet, aluminium, manufacturing"
  },
  {
    "code": "2149",
    "description": "Other Basic Non-Ferrous Metal Product Manufacturing",
    "index": "Sheet, non-ferrous metal, manufacturing (except aluminium)"
  },
  {
    "code": "2032",
    "description": "Plaster and Gypsum Product Manufacturing",
    "index": "Sheet, plaster, manufacturing"
  },
  {
    "code": "1916",
    "description": "Paint and Coatings Manufacturing",
    "index": "Shellac manufacturing"
  },
  {
    "code": "2512",
    "description": "Metal Furniture Manufacturing",
    "index": "Shelving, metal, manufacturing"
  },
  {
    "code": "1214",
    "description": "Wine and Other Alcoholic Beverage Manufacturing",
    "index": "Sherry manufacturing"
  },
  {
    "code": "4820",
    "description": "Water Passenger Transport",
    "index": "Ship charter, lease or rental, with crew, for passenger transport"
  },
  {
    "code": "4810",
    "description": "Water Freight Transport",
    "index": "Ship freight management service (i.e. operation of ships on behalf of owners)"
  },
  {
    "code": "5211",
    "description": "Stevedoring Services",
    "index": "Ship loading or unloading service (provision of labour)"
  },
  {
    "code": "5212",
    "description": "Port and Water Transport Terminal Operations",
    "index": "Ship mooring service"
  },
  {
    "code": "5219",
    "description": "Other Water Transport Support Services",
    "index": "Ship registration and agency service"
  },
  {
    "code": "6619",
    "description": "Other Motor Vehicle and Transport Equipment Rental and Hiring",
    "index": "Ship rental (without crew)"
  },
  {
    "code": "2391",
    "description": "Shipbuilding and Repair Services",
    "index": "Ship repairing"
  },
  {
    "code": "2391",
    "description": "Shipbuilding and Repair Services",
    "index": "Ship wrecking"
  },
  {
    "code": "2391",
    "description": "Shipbuilding and Repair Services",
    "index": "Shipbuilding"
  },
  {
    "code": "9429",
    "description": "Other Machinery and Equipment Repair and Maintenance",
    "index": "Shipping barrel and drum reconditioning and repairing"
  },
  {
    "code": "6619",
    "description": "Other Motor Vehicle and Transport Equipment Rental and Hiring",
    "index": "Shipping container rental"
  },
  {
    "code": "2319",
    "description": "Other Motor Vehicle Parts Manufacturing",
    "index": "Shock absorber manufacturing"
  },
  {
    "code": "1352",
    "description": "Footwear Manufacturing",
    "index": "Shoe manufacturing"
  },
  {
    "code": "4252",
    "description": "Footwear Retailing",
    "index": "Shoe retailing"
  },
  {
    "code": "9539",
    "description": "Other Personal Services n.e.c.",
    "index": "Shoe shining"
  },
  {
    "code": "1411",
    "description": "Log Sawmilling",
    "index": "Shook manufacturing (for containers)"
  },
  {
    "code": "2223",
    "description": "Architectural Aluminium Product Manufacturing",
    "index": "Shop front, aluminium, manufacturing"
  },
  {
    "code": "2229",
    "description": "Other Structural Metal Product Manufacturing",
    "index": "Shop front, metal, manufacturing (except aluminium)"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Shop or office scale wholesaling"
  },
  {
    "code": "6712",
    "description": "Non-Residential Property Operators",
    "index": "Shopping centre renting or leasing"
  },
  {
    "code": "2291",
    "description": "Spring and Wire Product Manufacturing",
    "index": "Shopping trolley manufacturing"
  },
  {
    "code": "2223",
    "description": "Architectural Aluminium Product Manufacturing",
    "index": "Shower screen, aluminium framed, manufacturing"
  },
  {
    "code": "1912",
    "description": "Rigid and Semi Rigid Polymer Product Manufacturing",
    "index": "Shower stall, plastic, manufacturing"
  },
  {
    "code": "7320",
    "description": "Packaging Services",
    "index": "Shrink wrapping service"
  },
  {
    "code": "4232",
    "description": "Garden Supplies Retailing",
    "index": "Shrub or tree retailing"
  },
  {
    "code": "2229",
    "description": "Other Structural Metal Product Manufacturing",
    "index": "Shutter, metal, manufacturing (except aluminium)"
  },
  {
    "code": "5010",
    "description": "Scenic and Sightseeing Transport",
    "index": "Sightseeing bus, coach or tramway operation"
  },
  {
    "code": "2599",
    "description": "Other Manufacturing n.e.c.",
    "index": "Sign manufacturing (except electrical)"
  },
  {
    "code": "2432",
    "description": "Electric Lighting Equipment Manufacturing",
    "index": "Sign, electric, manufacturing"
  },
  {
    "code": "1892",
    "description": "Explosives Manufacturing",
    "index": "Signal flare manufacturing"
  },
  {
    "code": "2419",
    "description": "Other Professional and Scientific Equipment Manufacturing",
    "index": "Signalling equipment, electrical, manufacturing n.e.c."
  },
  {
    "code": "6924",
    "description": "Other Specialised Design Services",
    "index": "Signwriting"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing",
    "index": "Silane gas manufacturing"
  },
  {
    "code": "2029",
    "description": "Other Ceramic Product Manufacturing",
    "index": "Silica brick, refractory, manufacturing"
  },
  {
    "code": "0990",
    "description": "Other Non-Metallic Mineral Mining and Quarrying",
    "index": "Silica mining (for industrial purposes)"
  },
  {
    "code": "1813",
    "description": "Basic Inorganic Chemical Manufacturing",
    "index": "Silicate manufacturing"
  },
  {
    "code": "2090",
    "description": "Other Non-Metallic Mineral Product Manufacturing",
    "index": "Silicon carbide abrasives manufacturing"
  },
  {
    "code": "2139",
    "description": "Other Basic Non-Ferrous Metal Manufacturing",
    "index": "Silicon smelting"
  },
  {
    "code": "1916",
    "description": "Paint and Coatings Manufacturing",
    "index": "Silk screen ink manufacturing"
  },
  {
    "code": "2231",
    "description": "Boiler, Tank and Other Heavy Gauge Metal Container Manufacturing",
    "index": "Silo, metal, manufacturing"
  },
  {
    "code": "0807",
    "description": "Silver-Lead-Zinc Ore Mining",
    "index": "Silver ore mining"
  },
  {
    "code": "2293",
    "description": "Metal Coating and Finishing",
    "index": "Silver plating"
  },
  {
    "code": "2133",
    "description": "Copper, Silver, Lead, and Zinc Smelting and Refining",
    "index": "Silver smelting, refining"
  },
  {
    "code": "2133",
    "description": "Copper, Silver, Lead, and Zinc Smelting and Refining",
    "index": "Silver-lead bullion manufacturing"
  },
  {
    "code": "0807",
    "description": "Silver-Lead-Zinc Ore Mining",
    "index": "Silver-lead-zinc ore mining"
  },
  {
    "code": "2591",
    "description": "Jewellery and Silverware Manufacturing",
    "index": "Silverware manufacturing"
  },
  {
    "code": "4213",
    "description": "Houseware Retailing",
    "index": "Silverware retailing"
  },
  {
    "code": "0510",
    "description": "Forestry Support Services",
    "index": "Silvicultural service"
  },
  {
    "code": "3332",
    "description": "Plumbing Goods Wholesaling",
    "index": "Sink and basin wholesaling"
  },
  {
    "code": "2034",
    "description": "Concrete Product Manufacturing",
    "index": "Sink or tub, concrete, manufacturing"
  },
  {
    "code": "2592",
    "description": "Toy, Sporting and Recreational Product Manufacturing",
    "index": "Skateboard manufacturing"
  },
  {
    "code": "2110",
    "description": "Iron Smelting and Steel Manufacturing",
    "index": "Skelp, steel, manufacturing"
  },
  {
    "code": "2291",
    "description": "Spring and Wire Product Manufacturing",
    "index": "Skewer, metal, manufacturing"
  },
  {
    "code": "8211",
    "description": "Sports and Physical Recreation Instruction",
    "index": "Ski instruction"
  },
  {
    "code": "5029",
    "description": "Other Transport n.e.c.",
    "index": "Ski lift operation"
  },
  {
    "code": "5029",
    "description": "Other Transport n.e.c.",
    "index": "Ski tow operation"
  },
  {
    "code": "4400",
    "description": "Accommodation",
    "index": "Ski-lodge operation"
  },
  {
    "code": "1131",
    "description": "Milk and Cream Processing",
    "index": "Skim milk manufacturing"
  },
  {
    "code": "9511",
    "description": "Hairdressing and Beauty Services",
    "index": "Skin care service"
  },
  {
    "code": "2223",
    "description": "Architectural Aluminium Product Manufacturing",
    "index": "Skylight, aluminium, manufacturing"
  },
  {
    "code": "2229",
    "description": "Other Structural Metal Product Manufacturing",
    "index": "Skylight, metal, manufacturing (except aluminium)"
  },
  {
    "code": "2031",
    "description": "Cement and Lime Manufacturing",
    "index": "Slag cement manufacturing"
  },
  {
    "code": "2090",
    "description": "Other Non-Metallic Mineral Product Manufacturing",
    "index": "Slag crushing"
  },
  {
    "code": "1311",
    "description": "Wool Scouring",
    "index": "Slag wool manufacturing"
  },
  {
    "code": "2031",
    "description": "Cement and Lime Manufacturing",
    "index": "Slake lime manufacturing"
  },
  {
    "code": "3243",
    "description": "Tiling and Carpeting Services",
    "index": "Slate flooring installation"
  },
  {
    "code": "0919",
    "description": "Other Construction Material Mining",
    "index": "Slate quarrying"
  },
  {
    "code": "1333",
    "description": "Cut and Sewn Textile Product Manufacturing",
    "index": "Sleeping bag manufacturing"
  },
  {
    "code": "1351",
    "description": "Clothing Manufacturing",
    "index": "Sleepwear manufacturing"
  },
  {
    "code": "2469",
    "description": "Other Specialised Machinery and Equipment Manufacturing",
    "index": "Slicing machinery, food, manufacturing"
  },
  {
    "code": "9512",
    "description": "Diet and Weight Reduction Centre Operation",
    "index": "Slimming service (non-medical)"
  },
  {
    "code": "2291",
    "description": "Spring and Wire Product Manufacturing",
    "index": "Sling, wire, manufacturing"
  },
  {
    "code": "1320",
    "description": "Leather Tanning and Fur Dressing",
    "index": "Slipe wool manufacturing"
  },
  {
    "code": "1352",
    "description": "Footwear Manufacturing",
    "index": "Slipper manufacturing"
  },
  {
    "code": "1113",
    "description": "Cured Meat and Smallgoods Manufacturing",
    "index": "Smallgoods manufacturing"
  },
  {
    "code": "4129",
    "description": "Other Specialised Food Retailing",
    "index": "Smallgoods retailing"
  },
  {
    "code": "3602",
    "description": "Meat, Poultry and Smallgoods Wholesaling",
    "index": "Smallgoods wholesaling"
  },
  {
    "code": "9412",
    "description": "Automotive Body, Paint and Interior Repair",
    "index": "Smash repair"
  },
  {
    "code": "3234",
    "description": "Fire and Security Alarm Installation Services",
    "index": "Smoke detector installation"
  },
  {
    "code": "0420",
    "description": "Hunting and Trapping",
    "index": "Snake catching"
  },
  {
    "code": "0199",
    "description": "Other Livestock Farming n.e.c.",
    "index": "Snake farming"
  },
  {
    "code": "4241",
    "description": "Sport and Camping Equipment Retailing",
    "index": "Snow ski retailing"
  },
  {
    "code": "1220",
    "description": "Cigarette and Tobacco Product Manufacturing",
    "index": "Snuff manufacturing"
  },
  {
    "code": "1851",
    "description": "Cleaning Compound Manufacturing",
    "index": "Soap manufacturing"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Soap, industrial, wholesaling"
  },
  {
    "code": "9112",
    "description": "Sport and Physical Recreation Clubs and Sports Professionals",
    "index": "Soccer club operation"
  },
  {
    "code": "8219",
    "description": "Adult, Community and Other Education n.e.c.",
    "index": "Social and interpersonal skill training"
  },
  {
    "code": "9559",
    "description": "Other Interest Group Services n.e.c.",
    "index": "Social club operation"
  },
  {
    "code": "8910",
    "description": "Museum Operation",
    "index": "Social history museum"
  },
  {
    "code": "6910",
    "description": "Scientific Research Services",
    "index": "Social science research service"
  },
  {
    "code": "1340",
    "description": "Knitted Product Manufacturing",
    "index": "Sock manufacturing"
  },
  {
    "code": "1211",
    "description": "Soft Drink, Cordial and Syrup Manufacturing",
    "index": "Soda water manufacturing"
  },
  {
    "code": "1813",
    "description": "Basic Inorganic Chemical Manufacturing",
    "index": "Sodium bicarbonate manufacturing"
  },
  {
    "code": "1813",
    "description": "Basic Inorganic Chemical Manufacturing",
    "index": "Sodium carbonate manufacturing"
  },
  {
    "code": "1813",
    "description": "Basic Inorganic Chemical Manufacturing",
    "index": "Sodium hydroxide manufacturing"
  },
  {
    "code": "1831",
    "description": "Fertiliser Manufacturing",
    "index": "Sodium nitrate fertiliser manufacturing"
  },
  {
    "code": "1211",
    "description": "Soft Drink, Cordial and Syrup Manufacturing",
    "index": "Soft drink manufacturing"
  },
  {
    "code": "3609",
    "description": "Other Grocery Wholesaling",
    "index": "Soft drink wholesaling"
  },
  {
    "code": "1333",
    "description": "Cut and Sewn Textile Product Manufacturing",
    "index": "Soft furnishing manufacturing"
  },
  {
    "code": "4214",
    "description": "Manchester and Other Textile Goods Retailing",
    "index": "Soft furnishing retailing"
  },
  {
    "code": "3711",
    "description": "Textile Product Wholesaling",
    "index": "Soft furnishings wholesaling"
  },
  {
    "code": "7000",
    "description": "Computer Systems Design and Related Services",
    "index": "Software development (customised) service (except publishing)"
  },
  {
    "code": "7000",
    "description": "Computer Systems Design and Related Services",
    "index": "Software installation service"
  },
  {
    "code": "5420",
    "description": "Software Publishing",
    "index": "Software publishing (non-customised)"
  },
  {
    "code": "1412",
    "description": "Wood Chipping",
    "index": "Softwood wood chip manufacturing"
  },
  {
    "code": "1832",
    "description": "Pesticide Manufacturing",
    "index": "Soil fumigant manufacturing"
  },
  {
    "code": "2619",
    "description": "Other Electricity Generation",
    "index": "Solar electricity generation"
  },
  {
    "code": "3231",
    "description": "Plumbing Services",
    "index": "Solar hot water system installation"
  },
  {
    "code": "2452",
    "description": "Fixed Space Heating, Cooling and Ventilation Equipment Manufacturing",
    "index": "Solar water heating system, commercial or industrial, manufacturing"
  },
  {
    "code": "2139",
    "description": "Other Basic Non-Ferrous Metal Manufacturing",
    "index": "Solder manufacturing"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Soldering iron manufacturing (except power operated)"
  },
  {
    "code": "2439",
    "description": "Other Electrical Equipment Manufacturing",
    "index": "Soldering iron, electrical, manufacturing"
  },
  {
    "code": "6931",
    "description": "Legal Services",
    "index": "Solicitor service"
  },
  {
    "code": "2911",
    "description": "Solid Waste Collection Services",
    "index": "Solid waste collection service"
  },
  {
    "code": "2911",
    "description": "Solid Waste Collection Services",
    "index": "Solid waste haulage service (local)"
  },
  {
    "code": "2419",
    "description": "Other Professional and Scientific Equipment Manufacturing",
    "index": "Sonar systems and equipment manufacturing"
  },
  {
    "code": "5521",
    "description": "Music Publishing",
    "index": "Song publishing"
  },
  {
    "code": "1132",
    "description": "Ice Cream Manufacturing",
    "index": "Sorbet manufacturing"
  },
  {
    "code": "0149",
    "description": "Other Grain Growing",
    "index": "Sorghum growing (except forage sorghum)"
  },
  {
    "code": "5514",
    "description": "Postproduction Services and Other Motion Picture and Video Activities",
    "index": "Sound dubbing service, motion picture"
  },
  {
    "code": "2429",
    "description": "Other Electronic Equipment Manufacturing",
    "index": "Sound recording equipment manufacturing"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Sound recording or reproducing equipment, wholesaling"
  },
  {
    "code": "5522",
    "description": "Music and Other Sound Recording Activities",
    "index": "Sound recording post-production service"
  },
  {
    "code": "5522",
    "description": "Music and Other Sound Recording Activities",
    "index": "Sound recording studio operation"
  },
  {
    "code": "2429",
    "description": "Other Electronic Equipment Manufacturing",
    "index": "Sound reproducing equipment manufacturing"
  },
  {
    "code": "6639",
    "description": "Other Goods and Equipment Rental and Hiring n.e.c.",
    "index": "Sound reproducing equipment rental"
  },
  {
    "code": "4221",
    "description": "Electrical, Electronic and Gas Appliance Retailing",
    "index": "Sound reproducing equipment retailing"
  },
  {
    "code": "1133",
    "description": "Cheese and Other Dairy Product Manufacturing",
    "index": "Sour cream manufacturing"
  },
  {
    "code": "1199",
    "description": "Other Food Products Manufacturing n.e.c.",
    "index": "Soya bean concentrate, isolate or textured protein manufacturing"
  },
  {
    "code": "0149",
    "description": "Other Grain Growing",
    "index": "Soybean growing"
  },
  {
    "code": "2449",
    "description": "Other Domestic Appliance Manufacturing",
    "index": "Space heater, domestic, manufacturing"
  },
  {
    "code": "2452",
    "description": "Fixed Space Heating, Cooling and Ventilation Equipment Manufacturing",
    "index": "Space heating system, commercial or industrial, manufacturing"
  },
  {
    "code": "6910",
    "description": "Scientific Research Services",
    "index": "Space tracking research station operation"
  },
  {
    "code": "1140",
    "description": "Fruit and Vegetable Processing",
    "index": "Spaghetti, canned, manufacturing"
  },
  {
    "code": "2313",
    "description": "Automotive Electrical Components Manufacturing",
    "index": "Spark plug manufacturing"
  },
  {
    "code": "1214",
    "description": "Wine and Other Alcoholic Beverage Manufacturing",
    "index": "Sparkling wine manufacturing"
  },
  {
    "code": "0419",
    "description": "Other Fishing",
    "index": "Spat catching"
  },
  {
    "code": "6970",
    "description": "Veterinary Services",
    "index": "Spaying service"
  },
  {
    "code": "9002",
    "description": "Creative Artists, Musicians, Writers and Performers",
    "index": "Speaking service (including radio and television announcing)"
  },
  {
    "code": "8024",
    "description": "Special School Education",
    "index": "Special school operation (for children with disabilities and special needs; not providing mainstream primary or secondary school education)"
  },
  {
    "code": "4129",
    "description": "Other Specialised Food Retailing",
    "index": "Specialised food retailing n.e.c."
  },
  {
    "code": "3609",
    "description": "Other Grocery Wholesaling",
    "index": "Specialised food wholesaling n.e.c."
  },
  {
    "code": "2469",
    "description": "Other Specialised Machinery and Equipment Manufacturing",
    "index": "Specialised machinery and equipment manufacturing n.e.c."
  },
  {
    "code": "8102",
    "description": "Higher Education",
    "index": "Specialist institute or college"
  },
  {
    "code": "8512",
    "description": "Specialist Medical Services",
    "index": "Specialist medical clinic service"
  },
  {
    "code": "8512",
    "description": "Specialist Medical Services",
    "index": "Specialist medical practitioner service n.e.c."
  },
  {
    "code": "8512",
    "description": "Specialist Medical Services",
    "index": "Specialist surgical service"
  },
  {
    "code": "4279",
    "description": "Other Store-Based Retailing n.e.c.",
    "index": "Specialty stores n.e.c."
  },
  {
    "code": "3609",
    "description": "Other Grocery Wholesaling",
    "index": "Specific cultural grocery wholesaling"
  },
  {
    "code": "2411",
    "description": "Photographic, Optical and Ophthalmic Equipment Manufacturing",
    "index": "Spectacle frame manufacturing"
  },
  {
    "code": "2411",
    "description": "Photographic, Optical and Ophthalmic Equipment Manufacturing",
    "index": "Spectacle lens grinding"
  },
  {
    "code": "8532",
    "description": "Optometry and Optical Dispensing",
    "index": "Spectacles dispensing"
  },
  {
    "code": "8539",
    "description": "Other Allied Health Services",
    "index": "Speech pathology service"
  },
  {
    "code": "2133",
    "description": "Copper, Silver, Lead, and Zinc Smelting and Refining",
    "index": "Spelter manufacturing"
  },
  {
    "code": "0301",
    "description": "Forestry",
    "index": "Sphagnum moss gathering"
  },
  {
    "code": "0159",
    "description": "Other Crop Growing n.e.c.",
    "index": "Spice crop growing"
  },
  {
    "code": "1199",
    "description": "Other Food Products Manufacturing n.e.c.",
    "index": "Spice manufacturing"
  },
  {
    "code": "2291",
    "description": "Spring and Wire Product Manufacturing",
    "index": "Spike, wire, manufacturing"
  },
  {
    "code": "1213",
    "description": "Spirit Manufacturing",
    "index": "Spirit-based mixed drink manufacturing"
  },
  {
    "code": "1920",
    "description": "Natural Rubber Product Manufacturing",
    "index": "Sponge, natural rubber, manufacturing"
  },
  {
    "code": "7299",
    "description": "Other Administrative Services n.e.c.",
    "index": "Sport, art and similar event promotion service (without facilities)"
  },
  {
    "code": "4241",
    "description": "Sport and Camping Equipment Retailing",
    "index": "Sporting equipment retailing (except clothing or footwear)"
  },
  {
    "code": "3734",
    "description": "Toy and Sporting Goods Wholesaling",
    "index": "Sporting goods wholesaling (except clothing or footwear)"
  },
  {
    "code": "2499",
    "description": "Other Machinery and Equipment Manufacturing n.e.c.",
    "index": "Sporting machinery manufacturing n.e.c."
  },
  {
    "code": "9114",
    "description": "Sport and Physical Recreation Administrative Service",
    "index": "Sports administration service"
  },
  {
    "code": "6639",
    "description": "Other Goods and Equipment Rental and Hiring n.e.c.",
    "index": "Sports and recreation equipment rental"
  },
  {
    "code": "4251",
    "description": "Clothing Retailing",
    "index": "Sports clothing retailing"
  },
  {
    "code": "3712",
    "description": "Clothing and Footwear Wholesaling",
    "index": "Sports clothing wholesaling"
  },
  {
    "code": "8211",
    "description": "Sports and Physical Recreation Instruction",
    "index": "Sports coaching"
  },
  {
    "code": "2592",
    "description": "Toy, Sporting and Recreational Product Manufacturing",
    "index": "Sports equipment manufacturing n.e.c."
  },
  {
    "code": "9499",
    "description": "Other Repair and Maintenance n.e.c.",
    "index": "Sports equipment repair"
  },
  {
    "code": "3109",
    "description": "Other Heavy and Civil Engineering Construction",
    "index": "Sports field construction"
  },
  {
    "code": "4252",
    "description": "Footwear Retailing",
    "index": "Sports footwear retailing"
  },
  {
    "code": "3712",
    "description": "Clothing and Footwear Wholesaling",
    "index": "Sports footwear wholesaling"
  },
  {
    "code": "9113",
    "description": "Sports and Physical Recreation Venues, Grounds and Facilities Operation",
    "index": "Sports ground, stadium or venue operation n.e.c."
  },
  {
    "code": "9112",
    "description": "Sport and Physical Recreation Clubs and Sports Professionals",
    "index": "Sports professional"
  },
  {
    "code": "7299",
    "description": "Other Administrative Services n.e.c.",
    "index": "Sports ticketing service"
  },
  {
    "code": "2432",
    "description": "Electric Lighting Equipment Manufacturing",
    "index": "Spotlight manufacturing (except automotive)"
  },
  {
    "code": "2313",
    "description": "Automotive Electrical Components Manufacturing",
    "index": "Spotlight, automotive, manufacturing"
  },
  {
    "code": "3244",
    "description": "Painting and Decorating Services",
    "index": "Spray painting of buildings or other structures"
  },
  {
    "code": "2291",
    "description": "Spring and Wire Product Manufacturing",
    "index": "Spring manufacturing"
  },
  {
    "code": "2110",
    "description": "Iron Smelting and Steel Manufacturing",
    "index": "Spring steel manufacturing"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Sprocket chain manufacturing"
  },
  {
    "code": "0122",
    "description": "Vegetable Growing (Under Cover)",
    "index": "Sprout growing (under cover)"
  },
  {
    "code": "9113",
    "description": "Sports and Physical Recreation Venues, Grounds and Facilities Operation",
    "index": "Squash court operation"
  },
  {
    "code": "0413",
    "description": "Line Fishing",
    "index": "Squid jigging"
  },
  {
    "code": "1916",
    "description": "Paint and Coatings Manufacturing",
    "index": "Stain manufacturing (including decking stains and oils)"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Stain wholesaling"
  },
  {
    "code": "2010",
    "description": "Glass and Glass Product Manufacturing",
    "index": "Stained glass sheet manufacturing"
  },
  {
    "code": "2121",
    "description": "Iron and Steel Casting",
    "index": "Stainless steel cast, seamless pipe or tube manufacturing"
  },
  {
    "code": "2110",
    "description": "Iron Smelting and Steel Manufacturing",
    "index": "Stainless steel manufacturing"
  },
  {
    "code": "2240",
    "description": "Other Sheet Metal Product Manufacturing",
    "index": "Stainless steel pressed holloware manufacturing"
  },
  {
    "code": "2229",
    "description": "Other Structural Metal Product Manufacturing",
    "index": "Stair or staircase, prefabricated metal, manufacturing (except aluminium)"
  },
  {
    "code": "2491",
    "description": "Lifting and Material Handling Equipment Manufacturing",
    "index": "Staking machinery manufacturing"
  },
  {
    "code": "2599",
    "description": "Other Manufacturing n.e.c.",
    "index": "Stamp pad manufacturing"
  },
  {
    "code": "4273",
    "description": "Antique and Used Goods Retailing",
    "index": "Stamp, collectible, dealing (retailing)"
  },
  {
    "code": "1131",
    "description": "Milk and Cream Processing",
    "index": "Standard milk manufacturing"
  },
  {
    "code": "2599",
    "description": "Other Manufacturing n.e.c.",
    "index": "Stapler manufacturing"
  },
  {
    "code": "1161",
    "description": "Grain Mill Product Manufacturing",
    "index": "Starch manufacturing"
  },
  {
    "code": "2313",
    "description": "Automotive Electrical Components Manufacturing",
    "index": "Starter motor manufacturing"
  },
  {
    "code": "7520",
    "description": "State Government Administration",
    "index": "State government administration (except justice)"
  },
  {
    "code": "7520",
    "description": "State Government Administration",
    "index": "State governor's unit operation"
  },
  {
    "code": "9114",
    "description": "Sport and Physical Recreation Administrative Service",
    "index": "State/territory sporting association or league"
  },
  {
    "code": "4272",
    "description": "Stationery Goods Retailing",
    "index": "Stationery retailing"
  },
  {
    "code": "6950",
    "description": "Market Research and Statistical Services",
    "index": "Statistical bureau operation"
  },
  {
    "code": "6950",
    "description": "Market Research and Statistical Services",
    "index": "Statistical consulting service"
  },
  {
    "code": "2231",
    "description": "Boiler, Tank and Other Heavy Gauge Metal Container Manufacturing",
    "index": "Steam generating boiler manufacturing"
  },
  {
    "code": "2231",
    "description": "Boiler, Tank and Other Heavy Gauge Metal Container Manufacturing",
    "index": "Steam superheater manufacturing"
  },
  {
    "code": "5010",
    "description": "Scenic and Sightseeing Transport",
    "index": "Steam train operation"
  },
  {
    "code": "2110",
    "description": "Iron Smelting and Steel Manufacturing",
    "index": "Steel alloy manufacturing"
  },
  {
    "code": "3322",
    "description": "Metal and Mineral Wholesaling",
    "index": "Steel bar, plate, rod, sheet or strip wholesaling"
  },
  {
    "code": "2221",
    "description": "Structural Steel Fabricating",
    "index": "Steel plate, perforated, manufacturing"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Steel wool manufacturing"
  },
  {
    "code": "7292",
    "description": "Document Preparation Services",
    "index": "Stenographic service"
  },
  {
    "code": "4221",
    "description": "Electrical, Electronic and Gas Appliance Retailing",
    "index": "Stereo retailing"
  },
  {
    "code": "5211",
    "description": "Stevedoring Services",
    "index": "Stevedoring service"
  },
  {
    "code": "3800",
    "description": "Commission Based Wholesaling",
    "index": "Stock and station agent"
  },
  {
    "code": "6411",
    "description": "Financial Asset Broking Services",
    "index": "Stock broking or trading (on a commission or transaction fee basis)"
  },
  {
    "code": "2312",
    "description": "Motor Vehicle Body and Trailer Manufacturing",
    "index": "Stock crate manufacturing"
  },
  {
    "code": "6419",
    "description": "Other Auxiliary Finance and Investment Services",
    "index": "Stock exchange operation"
  },
  {
    "code": "1340",
    "description": "Knitted Product Manufacturing",
    "index": "Stocking manufacturing"
  },
  {
    "code": "3800",
    "description": "Commission Based Wholesaling",
    "index": "Stockyard operation"
  },
  {
    "code": "2090",
    "description": "Other Non-Metallic Mineral Product Manufacturing",
    "index": "Stone cutting, dressing, polishing or shaping"
  },
  {
    "code": "2090",
    "description": "Other Non-Metallic Mineral Product Manufacturing",
    "index": "Stone product manufacturing"
  },
  {
    "code": "0919",
    "description": "Other Construction Material Mining",
    "index": "Stone quarrying"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Stonecutter's tool wholesaling"
  },
  {
    "code": "2029",
    "description": "Other Ceramic Product Manufacturing",
    "index": "Stoneware pipe or fittings manufacturing"
  },
  {
    "code": "3222",
    "description": "Bricklaying Services",
    "index": "Stonework on construction projects"
  },
  {
    "code": "5309",
    "description": "Other Warehousing and Storage Services",
    "index": "Storage n.e.c."
  },
  {
    "code": "2231",
    "description": "Boiler, Tank and Other Heavy Gauge Metal Container Manufacturing",
    "index": "Storage tank, metal, manufacturing"
  },
  {
    "code": "4279",
    "description": "Other Store-Based Retailing n.e.c.",
    "index": "Store-based retailing n.e.c."
  },
  {
    "code": "2812",
    "description": "Sewerage and Drainage Services",
    "index": "Stormwater drainage system operation"
  },
  {
    "code": "9421",
    "description": "Domestic Appliance Repair and Maintenance",
    "index": "Stove and/or oven (domestic) repair"
  },
  {
    "code": "9429",
    "description": "Other Machinery and Equipment Repair and Maintenance",
    "index": "Stove and/or oven (industrial) repair and maintenance"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Stove or heater wholesaling"
  },
  {
    "code": "2240",
    "description": "Other Sheet Metal Product Manufacturing",
    "index": "Stove pipe, sheet metal, manufacturing"
  },
  {
    "code": "2441",
    "description": "Whiteware Appliance Manufacturing",
    "index": "Stove, domestic, manufacturing"
  },
  {
    "code": "4221",
    "description": "Electrical, Electronic and Gas Appliance Retailing",
    "index": "Stove, retailing"
  },
  {
    "code": "2291",
    "description": "Spring and Wire Product Manufacturing",
    "index": "Stranded ferrous wire, cable or strip, manufacturing"
  },
  {
    "code": "0133",
    "description": "Berry Fruit Growing",
    "index": "Strawberry growing"
  },
  {
    "code": "7311",
    "description": "Buildings Cleaning Services",
    "index": "Street cleaning"
  },
  {
    "code": "6991",
    "description": "Professional Photographic Services",
    "index": "Street photography service"
  },
  {
    "code": "3291",
    "description": "Landscape Construction Services",
    "index": "Streetscape planting"
  },
  {
    "code": "1332",
    "description": "Rope, Cordage and Twine Manufacturing",
    "index": "String manufacturing"
  },
  {
    "code": "3711",
    "description": "Textile Product Wholesaling",
    "index": "String wholesaling"
  },
  {
    "code": "2142",
    "description": "Aluminium Rolling, Drawing, Extruding",
    "index": "Strip, aluminium, manufacturing"
  },
  {
    "code": "2149",
    "description": "Other Basic Non-Ferrous Metal Product Manufacturing",
    "index": "Strip, non-ferrous metal, manufacturing (except insulated or from aluminium)"
  },
  {
    "code": "3224",
    "description": "Structural Steel Erection Services",
    "index": "Structural steel erection"
  },
  {
    "code": "2110",
    "description": "Iron Smelting and Steel Manufacturing",
    "index": "Structural steel shape manufacturing (not fabricated)"
  },
  {
    "code": "0191",
    "description": "Horse Farming",
    "index": "Stud farm operation (horses)"
  },
  {
    "code": "4400",
    "description": "Accommodation",
    "index": "Student residences operation (except boarding schools)"
  },
  {
    "code": "6991",
    "description": "Professional Photographic Services",
    "index": "Studio photography service"
  },
  {
    "code": "8219",
    "description": "Adult, Community and Other Education n.e.c.",
    "index": "Study skill, career development and job search training"
  },
  {
    "code": "1709",
    "description": "Other Petroleum and Coal Product Manufacturing",
    "index": "Styrene manufacturing"
  },
  {
    "code": "2391",
    "description": "Shipbuilding and Repair Services",
    "index": "Submarine constructing"
  },
  {
    "code": "5622",
    "description": "Cable and Other Subscription Programming",
    "index": "Subscription television broadcasting service"
  },
  {
    "code": "5514",
    "description": "Postproduction Services and Other Motion Picture and Video Activities",
    "index": "Subtitling of motion picture, film or video"
  },
  {
    "code": "4710",
    "description": "Rail Freight Transport",
    "index": "Suburban rail freight service"
  },
  {
    "code": "0159",
    "description": "Other Crop Growing n.e.c.",
    "index": "Sudan grass growing"
  },
  {
    "code": "0123",
    "description": "Vegetable Growing (Outdoors)",
    "index": "Sugar beet growing (outdoors)"
  },
  {
    "code": "0151",
    "description": "Sugar Cane Growing",
    "index": "Sugar cane growing"
  },
  {
    "code": "1181",
    "description": "Sugar Manufacturing",
    "index": "Sugar manufacturing"
  },
  {
    "code": "3319",
    "description": "Other Agricultural Product Wholesaling",
    "index": "Sugar, raw, wholesaling"
  },
  {
    "code": "6639",
    "description": "Other Goods and Equipment Rental and Hiring n.e.c.",
    "index": "Suit hire"
  },
  {
    "code": "1320",
    "description": "Leather Tanning and Fur Dressing",
    "index": "Suitcase manufacturing (including canvas)"
  },
  {
    "code": "1813",
    "description": "Basic Inorganic Chemical Manufacturing",
    "index": "Sulphide manufacturing"
  },
  {
    "code": "1813",
    "description": "Basic Inorganic Chemical Manufacturing",
    "index": "Sulphur compound manufacturing"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing",
    "index": "Sulphur dioxide gas manufacturing"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing",
    "index": "Sulphur hexafluoride gas manufacturing"
  },
  {
    "code": "1813",
    "description": "Basic Inorganic Chemical Manufacturing",
    "index": "Sulphuric acid manufacturing (except smelter by-product)"
  },
  {
    "code": "1831",
    "description": "Fertiliser Manufacturing",
    "index": "Sulphuric lime manufacturing"
  },
  {
    "code": "0149",
    "description": "Other Grain Growing",
    "index": "Sunflower growing"
  },
  {
    "code": "4259",
    "description": "Other Personal Accessories Retailing",
    "index": "Sunglass retailing"
  },
  {
    "code": "2411",
    "description": "Photographic, Optical and Ophthalmic Equipment Manufacturing",
    "index": "Sunglasses manufacturing"
  },
  {
    "code": "1852",
    "description": "Cosmetic and Toiletry Preparation Manufacturing",
    "index": "Sunscreen preparation manufacturing"
  },
  {
    "code": "6419",
    "description": "Other Auxiliary Finance and Investment Services",
    "index": "Superannuation fund management service (on a commission or fee basis)"
  },
  {
    "code": "6330",
    "description": "Superannuation Funds",
    "index": "Superannuation fund, separately constituted, operation"
  },
  {
    "code": "1831",
    "description": "Fertiliser Manufacturing",
    "index": "Superphosphate manufacturing"
  },
  {
    "code": "0413",
    "description": "Line Fishing",
    "index": "Surface long line fishing"
  },
  {
    "code": "0414",
    "description": "Fish Trawling, Seining and Netting",
    "index": "Surface netting, fishing"
  },
  {
    "code": "2592",
    "description": "Toy, Sporting and Recreational Product Manufacturing",
    "index": "Surfboard manufacturing"
  },
  {
    "code": "2412",
    "description": "Medical and Surgical Equipment Manufacturing",
    "index": "Surgical equipment manufacturing"
  },
  {
    "code": "9422",
    "description": "Electronic (except Domestic Appliance) and Precision Equipment Repair and Maintenance",
    "index": "Surgical equipment repair and maintenance"
  },
  {
    "code": "3491",
    "description": "Professional and Scientific Goods Wholesaling",
    "index": "Surgical equipment wholesaling"
  },
  {
    "code": "7719",
    "description": "Other Public Order and Safety Services",
    "index": "Surveillance of country borders (by land, sea and air)"
  },
  {
    "code": "9422",
    "description": "Electronic (except Domestic Appliance) and Precision Equipment Repair and Maintenance",
    "index": "Surveying equipment repair and maintenance"
  },
  {
    "code": "2419",
    "description": "Other Professional and Scientific Equipment Manufacturing",
    "index": "Surveying instrument manufacturing"
  },
  {
    "code": "9551",
    "description": "Business and Professional Association Services",
    "index": "Surveyors' association operation"
  },
  {
    "code": "8219",
    "description": "Adult, Community and Other Education n.e.c.",
    "index": "Survival skill training"
  },
  {
    "code": "2319",
    "description": "Other Motor Vehicle Parts Manufacturing",
    "index": "Suspension component manufacturing"
  },
  {
    "code": "0123",
    "description": "Vegetable Growing (Outdoors)",
    "index": "Sweetcorn growing (outdoors)"
  },
  {
    "code": "9112",
    "description": "Sport and Physical Recreation Clubs and Sports Professionals",
    "index": "Swimming club operation"
  },
  {
    "code": "8211",
    "description": "Sports and Physical Recreation Instruction",
    "index": "Swimming instruction"
  },
  {
    "code": "7311",
    "description": "Buildings Cleaning Services",
    "index": "Swimming pool cleaning"
  },
  {
    "code": "9113",
    "description": "Sports and Physical Recreation Venues, Grounds and Facilities Operation",
    "index": "Swimming pool operation"
  },
  {
    "code": "4279",
    "description": "Other Store-Based Retailing n.e.c.",
    "index": "Swimming pool retailing"
  },
  {
    "code": "3109",
    "description": "Other Heavy and Civil Engineering Construction",
    "index": "Swimming pool, below ground concrete or fibreglass, construction"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Swimming pool, below ground fibreglass, wholesaling"
  },
  {
    "code": "1351",
    "description": "Clothing Manufacturing",
    "index": "Swimwear manufacturing"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Switchgear, electrical, wholesaling"
  },
  {
    "code": "9540",
    "description": "Religious Services",
    "index": "Synagogue operation"
  },
  {
    "code": "1829",
    "description": "Other Basic Polymer Manufacturing",
    "index": "Synthetic fibre or filament manufacturing"
  },
  {
    "code": "1333",
    "description": "Cut and Sewn Textile Product Manufacturing",
    "index": "Synthetic fibre textile furnishing manufacturing"
  },
  {
    "code": "2090",
    "description": "Other Non-Metallic Mineral Product Manufacturing",
    "index": "Synthetic gemstone manufacturing"
  },
  {
    "code": "1709",
    "description": "Other Petroleum and Coal Product Manufacturing",
    "index": "Synthetic motor oil manufacturing"
  },
  {
    "code": "1821",
    "description": "Synthetic Resin and Synthetic Rubber Manufacturing",
    "index": "Synthetic resin manufacturing"
  },
  {
    "code": "1821",
    "description": "Synthetic Resin and Synthetic Rubber Manufacturing",
    "index": "Synthetic rubber composite manufacturing"
  },
  {
    "code": "1821",
    "description": "Synthetic Resin and Synthetic Rubber Manufacturing",
    "index": "Synthetic rubber manufacturing"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Synthetic rubber wholesaling"
  },
  {
    "code": "0805",
    "description": "Mineral Sand Mining",
    "index": "Synthetic rutile production"
  },
  {
    "code": "1211",
    "description": "Soft Drink, Cordial and Syrup Manufacturing",
    "index": "Syrup, chocolate, caramel or vanilla, manufacturing"
  },
  {
    "code": "1211",
    "description": "Soft Drink, Cordial and Syrup Manufacturing",
    "index": "Syrup, fruit, manufacturing"
  },
  {
    "code": "7000",
    "description": "Computer Systems Design and Related Services",
    "index": "Systems analysis service"
  },
  {
    "code": "9209",
    "description": "Other Gambling Activities",
    "index": "TAB operation"
  },
  {
    "code": "0131",
    "description": "Grape Growing",
    "index": "Table grape growing"
  },
  {
    "code": "2511",
    "description": "Wooden Furniture and Upholstered Seat Manufacturing",
    "index": "Table, wooden, manufacturing"
  },
  {
    "code": "3733",
    "description": "Kitchen and Dining Ware Wholesaling",
    "index": "Tableware wholesaling"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Tackle block, metal, manufacturing"
  },
  {
    "code": "1191",
    "description": "Potato Crisps and Corn Chips Manufacturing",
    "index": "Taco, tortilla or tostada shell manufacturing"
  },
  {
    "code": "2240",
    "description": "Other Sheet Metal Product Manufacturing",
    "index": "Tag, sheet metal, manufacturing"
  },
  {
    "code": "4512",
    "description": "Takeaway Food Services",
    "index": "Takeaway food operation"
  },
  {
    "code": "0990",
    "description": "Other Non-Metallic Mineral Mining and Quarrying",
    "index": "Talc quarrying"
  },
  {
    "code": "2090",
    "description": "Other Non-Metallic Mineral Product Manufacturing",
    "index": "Talc, ground, manufacturing"
  },
  {
    "code": "1852",
    "description": "Cosmetic and Toiletry Preparation Manufacturing",
    "index": "Talcum powder manufacturing"
  },
  {
    "code": "1812",
    "description": "Basic Organic Chemical Manufacturing",
    "index": "Tall oil manufacturing"
  },
  {
    "code": "3319",
    "description": "Other Agricultural Product Wholesaling",
    "index": "Tallow wholesaling"
  },
  {
    "code": "1150",
    "description": "Oil and Fat Manufacturing",
    "index": "Tallow, refined, manufacturing"
  },
  {
    "code": "0139",
    "description": "Other Fruit and Tree Nut Growing",
    "index": "Tamarillo growing"
  },
  {
    "code": "1524",
    "description": "Sanitary Paper Product Manufacturing",
    "index": "Tampon (cellulose-based) manufacturing"
  },
  {
    "code": "0136",
    "description": "Citrus Fruit Growing",
    "index": "Tangelo growing"
  },
  {
    "code": "2034",
    "description": "Concrete Product Manufacturing",
    "index": "Tank, concrete, manufacturing"
  },
  {
    "code": "9511",
    "description": "Hairdressing and Beauty Services",
    "index": "Tanning (solarium) service"
  },
  {
    "code": "1812",
    "description": "Basic Organic Chemical Manufacturing",
    "index": "Tanning extract, organic, manufacturing"
  },
  {
    "code": "1320",
    "description": "Leather Tanning and Fur Dressing",
    "index": "Tanning hides and skins"
  },
  {
    "code": "3419",
    "description": "Other Specialised Industrial Machinery and Equipment Wholesaling",
    "index": "Tanning machinery or equipment wholesaling"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Tanning requisite wholesaling"
  },
  {
    "code": "0809",
    "description": "Other Metal Ore Mining",
    "index": "Tantalite mining"
  },
  {
    "code": "2139",
    "description": "Other Basic Non-Ferrous Metal Manufacturing",
    "index": "Tantalum metal powder manufacturing"
  },
  {
    "code": "3332",
    "description": "Plumbing Goods Wholesaling",
    "index": "Tap wholesaling"
  },
  {
    "code": "2429",
    "description": "Other Electronic Equipment Manufacturing",
    "index": "Tape recorder manufacturing"
  },
  {
    "code": "1161",
    "description": "Grain Mill Product Manufacturing",
    "index": "Tapioca manufacturing"
  },
  {
    "code": "1709",
    "description": "Other Petroleum and Coal Product Manufacturing",
    "index": "Tar, refined, manufacturing"
  },
  {
    "code": "6962",
    "description": "Management Advice and Other Consulting Services",
    "index": "Tariff consulting service"
  },
  {
    "code": "3711",
    "description": "Textile Product Wholesaling",
    "index": "Tarpaulins wholesaling"
  },
  {
    "code": "9539",
    "description": "Other Personal Services n.e.c.",
    "index": "Tattooing and piercing service"
  },
  {
    "code": "4520",
    "description": "Pubs, Taverns and Bars",
    "index": "Tavern operation"
  },
  {
    "code": "6932",
    "description": "Accounting Services",
    "index": "Tax agent service"
  },
  {
    "code": "4623",
    "description": "Taxi and Other Road Transport",
    "index": "Taxi cab management service (i.e. operation on behalf of owner)"
  },
  {
    "code": "6640",
    "description": "Non-Financial Intangible Assets (except Copyrights) Leasing",
    "index": "Taxi cab plate leasing"
  },
  {
    "code": "2419",
    "description": "Other Professional and Scientific Equipment Manufacturing",
    "index": "Taxi meter manufacturing"
  },
  {
    "code": "5299",
    "description": "Other Transport Support Services n.e.c",
    "index": "Taxi radio base operation"
  },
  {
    "code": "4623",
    "description": "Taxi and Other Road Transport",
    "index": "Taxi service"
  },
  {
    "code": "4610",
    "description": "Road Freight Transport",
    "index": "Taxi truck service (with driver)"
  },
  {
    "code": "1199",
    "description": "Other Food Products Manufacturing n.e.c.",
    "index": "Tea blending"
  },
  {
    "code": "1199",
    "description": "Other Food Products Manufacturing n.e.c.",
    "index": "Tea manufacturing"
  },
  {
    "code": "3609",
    "description": "Other Grocery Wholesaling",
    "index": "Tea wholesaling"
  },
  {
    "code": "8102",
    "description": "Higher Education",
    "index": "Teachers' college operation"
  },
  {
    "code": "1899",
    "description": "Other Basic Chemical Product Manufacturing n.e.c.",
    "index": "Tea-tree oil distilling"
  },
  {
    "code": "8101",
    "description": "Technical and Vocational Education and Training",
    "index": "Technical and further education college operation"
  },
  {
    "code": "8101",
    "description": "Technical and Vocational Education and Training",
    "index": "Technical college operation"
  },
  {
    "code": "5413",
    "description": "Book Publishing",
    "index": "Technical manual publishing (except internet)"
  },
  {
    "code": "1920",
    "description": "Natural Rubber Product Manufacturing",
    "index": "Teething ring, natural rubber, manufacturing"
  },
  {
    "code": "3232",
    "description": "Electrical Services",
    "index": "Telecommunication cable or wire installation (except transmission lines)"
  },
  {
    "code": "2422",
    "description": "Communications Equipment Manufacturing",
    "index": "Telecommunication equipment manufacturing"
  },
  {
    "code": "3493",
    "description": "Telecommunication Goods Wholesaling",
    "index": "Telecommunication equipment parts wholesaling"
  },
  {
    "code": "2431",
    "description": "Electric Cable and Wire Manufacturing",
    "index": "Telecommunications cable manufacturing"
  },
  {
    "code": "5801",
    "description": "Wired Telecommunications Network Operation",
    "index": "Telecommunications network operation (wired)"
  },
  {
    "code": "5809",
    "description": "Other Telecommunications Services",
    "index": "Telecommunications reselling (including satellite systems)"
  },
  {
    "code": "7294",
    "description": "Call Centre Operation",
    "index": "Telemarketing service"
  },
  {
    "code": "3493",
    "description": "Telecommunication Goods Wholesaling",
    "index": "Telephone and electric cable ducting system wholesaling"
  },
  {
    "code": "7294",
    "description": "Call Centre Operation",
    "index": "Telephone answering service"
  },
  {
    "code": "7294",
    "description": "Call Centre Operation",
    "index": "Telephone call centre operation"
  },
  {
    "code": "5414",
    "description": "Directory and Mailing List Publishing",
    "index": "Telephone directory publishing (except internet)"
  },
  {
    "code": "2422",
    "description": "Communications Equipment Manufacturing",
    "index": "Telephone equipment manufacturing"
  },
  {
    "code": "9422",
    "description": "Electronic (except Domestic Appliance) and Precision Equipment Repair and Maintenance",
    "index": "Telephone equipment repair and maintenance"
  },
  {
    "code": "3493",
    "description": "Telecommunication Goods Wholesaling",
    "index": "Telephone or telegraph equipment wholesaling"
  },
  {
    "code": "2422",
    "description": "Communications Equipment Manufacturing",
    "index": "Telephone switching equipment manufacturing"
  },
  {
    "code": "2422",
    "description": "Communications Equipment Manufacturing",
    "index": "Telephone, cellular, manufacturing"
  },
  {
    "code": "6020",
    "description": "Other Information Services",
    "index": "Telephone-based recorded information service"
  },
  {
    "code": "5514",
    "description": "Postproduction Services and Other Motion Picture and Video Activities",
    "index": "Teleproduction service"
  },
  {
    "code": "2411",
    "description": "Photographic, Optical and Ophthalmic Equipment Manufacturing",
    "index": "Telescope manufacturing"
  },
  {
    "code": "2422",
    "description": "Communications Equipment Manufacturing",
    "index": "Television antenna or parts manufacturing"
  },
  {
    "code": "4221",
    "description": "Electrical, Electronic and Gas Appliance Retailing",
    "index": "Television antennae retailing"
  },
  {
    "code": "5621",
    "description": "Free-to-Air Television Broadcasting",
    "index": "Television broadcasting network operation"
  },
  {
    "code": "5621",
    "description": "Free-to-Air Television Broadcasting",
    "index": "Television broadcasting station operation"
  },
  {
    "code": "5511",
    "description": "Motion Picture and Video Production",
    "index": "Television commercial production"
  },
  {
    "code": "3109",
    "description": "Other Heavy and Civil Engineering Construction",
    "index": "Television or radio transmitting tower construction"
  },
  {
    "code": "5512",
    "description": "Motion Picture and Video Distribution",
    "index": "Television program distribution"
  },
  {
    "code": "5511",
    "description": "Motion Picture and Video Production",
    "index": "Television program production"
  },
  {
    "code": "2429",
    "description": "Other Electronic Equipment Manufacturing",
    "index": "Television receiving set manufacturing"
  },
  {
    "code": "9421",
    "description": "Domestic Appliance Repair and Maintenance",
    "index": "Television repair and maintenance"
  },
  {
    "code": "4221",
    "description": "Electrical, Electronic and Gas Appliance Retailing",
    "index": "Television set retailing"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Television set wholesaling"
  },
  {
    "code": "2422",
    "description": "Communications Equipment Manufacturing",
    "index": "Television studio equipment manufacturing"
  },
  {
    "code": "7212",
    "description": "Labour Supply Services",
    "index": "Temporary labour hire service"
  },
  {
    "code": "9112",
    "description": "Sport and Physical Recreation Clubs and Sports Professionals",
    "index": "Tennis club operation"
  },
  {
    "code": "8211",
    "description": "Sports and Physical Recreation Instruction",
    "index": "Tennis coaching"
  },
  {
    "code": "9113",
    "description": "Sports and Physical Recreation Venues, Grounds and Facilities Operation",
    "index": "Tennis court operation"
  },
  {
    "code": "1333",
    "description": "Cut and Sewn Textile Product Manufacturing",
    "index": "Tent manufacturing (except oxygen tents or toy tents)"
  },
  {
    "code": "3711",
    "description": "Textile Product Wholesaling",
    "index": "Tents wholesaling"
  },
  {
    "code": "7312",
    "description": "Buildings Pest Control Services",
    "index": "Termite control service (except agricultural and forestry)"
  },
  {
    "code": "2029",
    "description": "Other Ceramic Product Manufacturing",
    "index": "Terracotta goods manufacturing"
  },
  {
    "code": "3243",
    "description": "Tiling and Carpeting Services",
    "index": "Terrazzo laying"
  },
  {
    "code": "2034",
    "description": "Concrete Product Manufacturing",
    "index": "Terrazzo product manufacturing"
  },
  {
    "code": "8220",
    "description": "Educational Support Services",
    "index": "Test and exam development and evaluation, educational"
  },
  {
    "code": "8220",
    "description": "Educational Support Services",
    "index": "Test and exam service, educational"
  },
  {
    "code": "6925",
    "description": "Scientific Testing and Analysis Services",
    "index": "Testing or assay service on fee or contract"
  },
  {
    "code": "5413",
    "description": "Book Publishing",
    "index": "Textbook publishing (except internet)"
  },
  {
    "code": "6924",
    "description": "Other Specialised Design Services",
    "index": "Textile design service"
  },
  {
    "code": "1334",
    "description": "Textile Finishing and Other Textile Product Manufacturing",
    "index": "Textile dyeing"
  },
  {
    "code": "1334",
    "description": "Textile Finishing and Other Textile Product Manufacturing",
    "index": "Textile fabric coating"
  },
  {
    "code": "1333",
    "description": "Cut and Sewn Textile Product Manufacturing",
    "index": "Textile furnishing manufacturing n.e.c."
  },
  {
    "code": "9429",
    "description": "Other Machinery and Equipment Repair and Maintenance",
    "index": "Textile machinery repair and maintenance"
  },
  {
    "code": "1334",
    "description": "Textile Finishing and Other Textile Product Manufacturing",
    "index": "Textile printing (except screen printing)"
  },
  {
    "code": "1334",
    "description": "Textile Finishing and Other Textile Product Manufacturing",
    "index": "Textile product manufacturing n.e.c."
  },
  {
    "code": "2469",
    "description": "Other Specialised Machinery and Equipment Manufacturing",
    "index": "Textile working machinery manufacturing"
  },
  {
    "code": "3419",
    "description": "Other Specialised Industrial Machinery and Equipment Wholesaling",
    "index": "Textile working machinery or equipment wholesaling"
  },
  {
    "code": "3711",
    "description": "Textile Product Wholesaling",
    "index": "Textiles wholesaling n.e.c."
  },
  {
    "code": "7299",
    "description": "Other Administrative Services n.e.c.",
    "index": "Theatre and concert booking service"
  },
  {
    "code": "9002",
    "description": "Creative Artists, Musicians, Writers and Performers",
    "index": "Theatre lighting design service"
  },
  {
    "code": "9003",
    "description": "Performing Arts Venue Operation",
    "index": "Theatre operation (except motion picture theatre)"
  },
  {
    "code": "9001",
    "description": "Performing Arts Operation",
    "index": "Theatre restaurant operation (mainly entertainment facility)"
  },
  {
    "code": "9001",
    "description": "Performing Arts Operation",
    "index": "Theatrical company operation"
  },
  {
    "code": "9131",
    "description": "Amusement Parks and Centres Operation",
    "index": "Theme park operation"
  },
  {
    "code": "8539",
    "description": "Other Allied Health Services",
    "index": "Therapeutic massage service"
  },
  {
    "code": "2412",
    "description": "Medical and Surgical Equipment Manufacturing",
    "index": "Thermometer, medical, manufacturing"
  },
  {
    "code": "6322",
    "description": "General Insurance",
    "index": "Third party insurance provision"
  },
  {
    "code": "8512",
    "description": "Specialist Medical Services",
    "index": "Thoracic specialist service"
  },
  {
    "code": "3711",
    "description": "Textile Product Wholesaling",
    "index": "Thread wholesaling"
  },
  {
    "code": "6924",
    "description": "Other Specialised Design Services",
    "index": "Ticket writing"
  },
  {
    "code": "2619",
    "description": "Other Electricity Generation",
    "index": "Tidal electricity generation"
  },
  {
    "code": "1351",
    "description": "Clothing Manufacturing",
    "index": "Tie manufacturing"
  },
  {
    "code": "1340",
    "description": "Knitted Product Manufacturing",
    "index": "Tights manufacturing"
  },
  {
    "code": "0919",
    "description": "Other Construction Material Mining",
    "index": "Tile clay quarrying"
  },
  {
    "code": "2029",
    "description": "Other Ceramic Product Manufacturing",
    "index": "Tile, ceramic, wall or floor, manufacturing"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Tile, ceramic, wholesaling"
  },
  {
    "code": "2034",
    "description": "Concrete Product Manufacturing",
    "index": "Tile, concrete, manufacturing"
  },
  {
    "code": "2032",
    "description": "Plaster and Gypsum Product Manufacturing",
    "index": "Tile, plaster, manufacturing"
  },
  {
    "code": "3331",
    "description": "Timber Wholesaling",
    "index": "Timber dealing, wholesaling, (except firewood)"
  },
  {
    "code": "0302",
    "description": "Logging",
    "index": "Timber hewing (forest)"
  },
  {
    "code": "0510",
    "description": "Forestry Support Services",
    "index": "Timber plantation maintenance"
  },
  {
    "code": "4231",
    "description": "Hardware and Building Supplies Retailing",
    "index": "Timber retailing"
  },
  {
    "code": "0510",
    "description": "Forestry Support Services",
    "index": "Timber tract maintenance"
  },
  {
    "code": "6720",
    "description": "Real Estate Services",
    "index": "Time share apartment management service"
  },
  {
    "code": "0809",
    "description": "Other Metal Ore Mining",
    "index": "Tin ore mining"
  },
  {
    "code": "2139",
    "description": "Other Basic Non-Ferrous Metal Manufacturing",
    "index": "Tin smelting"
  },
  {
    "code": "2110",
    "description": "Iron Smelting and Steel Manufacturing",
    "index": "Tinplate sheet or strip manufacturing"
  },
  {
    "code": "2139",
    "description": "Other Basic Non-Ferrous Metal Manufacturing",
    "index": "Titanium smelting"
  },
  {
    "code": "6931",
    "description": "Legal Services",
    "index": "Title-searching service"
  },
  {
    "code": "5514",
    "description": "Postproduction Services and Other Motion Picture and Video Activities",
    "index": "Titling of motion picture film or video"
  },
  {
    "code": "2469",
    "description": "Other Specialised Machinery and Equipment Manufacturing",
    "index": "Toaster, commercial electric, manufacturing"
  },
  {
    "code": "2449",
    "description": "Other Domestic Appliance Manufacturing",
    "index": "Toaster, domestic electric, manufacturing"
  },
  {
    "code": "0159",
    "description": "Other Crop Growing n.e.c.",
    "index": "Tobacco growing"
  },
  {
    "code": "1220",
    "description": "Cigarette and Tobacco Product Manufacturing",
    "index": "Tobacco leaf redrying"
  },
  {
    "code": "3319",
    "description": "Other Agricultural Product Wholesaling",
    "index": "Tobacco leaf wholesaling"
  },
  {
    "code": "1220",
    "description": "Cigarette and Tobacco Product Manufacturing",
    "index": "Tobacco manufacturing"
  },
  {
    "code": "4279",
    "description": "Other Store-Based Retailing n.e.c.",
    "index": "Tobacco product retailing"
  },
  {
    "code": "3606",
    "description": "Liquor and Tobacco Product Wholesaling",
    "index": "Tobacco product wholesaling"
  },
  {
    "code": "1912",
    "description": "Rigid and Semi Rigid Polymer Product Manufacturing",
    "index": "Toilet fixture, plastic, manufacturing"
  },
  {
    "code": "1852",
    "description": "Cosmetic and Toiletry Preparation Manufacturing",
    "index": "Toilet lanolin manufacturing"
  },
  {
    "code": "1524",
    "description": "Sanitary Paper Product Manufacturing",
    "index": "Toilet tissue manufacturing"
  },
  {
    "code": "3332",
    "description": "Plumbing Goods Wholesaling",
    "index": "Toilet wholesaling"
  },
  {
    "code": "1912",
    "description": "Rigid and Semi Rigid Polymer Product Manufacturing",
    "index": "Toilet, plastic, manufacturing"
  },
  {
    "code": "4271",
    "description": "Pharmaceutical, Cosmetic and Toiletry Goods Retailing",
    "index": "Toiletry retailing"
  },
  {
    "code": "3720",
    "description": "Pharmaceutical and Toiletry Goods Wholesaling",
    "index": "Toiletry wholesaling"
  },
  {
    "code": "5299",
    "description": "Other Transport Support Services n.e.c",
    "index": "Toll bridge operation"
  },
  {
    "code": "5299",
    "description": "Other Transport Support Services n.e.c",
    "index": "Toll road operation"
  },
  {
    "code": "1709",
    "description": "Other Petroleum and Coal Product Manufacturing",
    "index": "Toluene manufacturing"
  },
  {
    "code": "0123",
    "description": "Vegetable Growing (Outdoors)",
    "index": "Tomato growing (outdoors)"
  },
  {
    "code": "0122",
    "description": "Vegetable Growing (Under Cover)",
    "index": "Tomato growing (under cover)"
  },
  {
    "code": "1916",
    "description": "Paint and Coatings Manufacturing",
    "index": "Toner manufacturing n.e.c."
  },
  {
    "code": "1211",
    "description": "Soft Drink, Cordial and Syrup Manufacturing",
    "index": "Tonic water manufacturing"
  },
  {
    "code": "2239",
    "description": "Other Metal Container Manufacturing",
    "index": "Tool box, metal, manufacturing"
  },
  {
    "code": "1499",
    "description": "Other Wood Product Manufacturing n.e.c.",
    "index": "Tool handle, wooden, manufacturing"
  },
  {
    "code": "4231",
    "description": "Hardware and Building Supplies Retailing",
    "index": "Tool retailing"
  },
  {
    "code": "2599",
    "description": "Other Manufacturing n.e.c.",
    "index": "Tooth brush manufacturing (except electrical)"
  },
  {
    "code": "1851",
    "description": "Cleaning Compound Manufacturing",
    "index": "Toothpaste manufacturing"
  },
  {
    "code": "1311",
    "description": "Wool Scouring",
    "index": "Tops, unspun wool, manufacturing"
  },
  {
    "code": "7220",
    "description": "Travel Agency and Tour Arrangement Services",
    "index": "Tour arrangement service"
  },
  {
    "code": "7220",
    "description": "Travel Agency and Tour Arrangement Services",
    "index": "Tour operator service (arranging and assembling tours)"
  },
  {
    "code": "7220",
    "description": "Travel Agency and Tour Arrangement Services",
    "index": "Tour retailing service"
  },
  {
    "code": "7220",
    "description": "Travel Agency and Tour Arrangement Services",
    "index": "Tour wholesaling service"
  },
  {
    "code": "6962",
    "description": "Management Advice and Other Consulting Services",
    "index": "Tourism development consulting service"
  },
  {
    "code": "8922",
    "description": "Nature Reserves and Conservation Parks Operation",
    "index": "Tourist caves operation"
  },
  {
    "code": "7299",
    "description": "Other Administrative Services n.e.c.",
    "index": "Tourist information centre operation"
  },
  {
    "code": "1312",
    "description": "Natural Fibre Textile Manufacturing",
    "index": "Tow manufacturing (from flax, hemp or jute)"
  },
  {
    "code": "5219",
    "description": "Other Water Transport Support Services",
    "index": "Towboat and tugboat operation"
  },
  {
    "code": "3711",
    "description": "Textile Product Wholesaling",
    "index": "Towels wholesaling"
  },
  {
    "code": "2812",
    "description": "Sewerage and Drainage Services",
    "index": "Town drainage system operation"
  },
  {
    "code": "6921",
    "description": "Architectural Services",
    "index": "Town planning service"
  },
  {
    "code": "2922",
    "description": "Waste Remediation and Materials Recovery Services",
    "index": "Toxic material abatement"
  },
  {
    "code": "2592",
    "description": "Toy, Sporting and Recreational Product Manufacturing",
    "index": "Toy manufacturing (except fur or leather)"
  },
  {
    "code": "4243",
    "description": "Toy and Game Retailing",
    "index": "Toy retailing"
  },
  {
    "code": "3734",
    "description": "Toy and Sporting Goods Wholesaling",
    "index": "Toy wholesaling"
  },
  {
    "code": "1320",
    "description": "Leather Tanning and Fur Dressing",
    "index": "Toy, leather, manufacturing"
  },
  {
    "code": "2461",
    "description": "Agricultural Machinery and Equipment Manufacturing",
    "index": "Tractor attachment, agricultural, manufacturing"
  },
  {
    "code": "2491",
    "description": "Lifting and Material Handling Equipment Manufacturing",
    "index": "Tractor manufacturing n.e.c."
  },
  {
    "code": "3411",
    "description": "Agricultural and Construction Machinery Wholesaling",
    "index": "Tractor wholesaling"
  },
  {
    "code": "2461",
    "description": "Agricultural Machinery and Equipment Manufacturing",
    "index": "Tractor, agricultural, manufacturing (except crawler tractors)"
  },
  {
    "code": "2462",
    "description": "Mining and Construction Machinery Manufacturing",
    "index": "Tractor, construction or earthmoving, manufacturing"
  },
  {
    "code": "9551",
    "description": "Business and Professional Association Services",
    "index": "Trade association operation (except trade union)"
  },
  {
    "code": "7551",
    "description": "Domestic Government Representation",
    "index": "Trade commission operation (domestic government)"
  },
  {
    "code": "7552",
    "description": "Foreign Government Representation",
    "index": "Trade commission operation (foreign government)"
  },
  {
    "code": "9552",
    "description": "Labour Association Services",
    "index": "Trade union operation"
  },
  {
    "code": "6640",
    "description": "Non-Financial Intangible Assets (except Copyrights) Leasing",
    "index": "Trademark leasing"
  },
  {
    "code": "6221",
    "description": "Banking",
    "index": "Trading bank operation"
  },
  {
    "code": "6411",
    "description": "Financial Asset Broking Services",
    "index": "Trading of mortgages operation (on a commission or transaction fee basis)"
  },
  {
    "code": "6923",
    "description": "Engineering Design and Engineering Consulting Services",
    "index": "Traffic engineering consulting service"
  },
  {
    "code": "7711",
    "description": "Police Services",
    "index": "Traffic policing activity"
  },
  {
    "code": "3232",
    "description": "Electrical Services",
    "index": "Traffic signal installation"
  },
  {
    "code": "2419",
    "description": "Other Professional and Scientific Equipment Manufacturing",
    "index": "Traffic signal, electrical, manufacturing"
  },
  {
    "code": "2312",
    "description": "Motor Vehicle Body and Trailer Manufacturing",
    "index": "Trailer manufacturing"
  },
  {
    "code": "6619",
    "description": "Other Motor Vehicle and Transport Equipment Rental and Hiring",
    "index": "Trailer rental"
  },
  {
    "code": "9419",
    "description": "Other Automotive Repair and Maintenance",
    "index": "Trailer repair (boat or box)"
  },
  {
    "code": "3913",
    "description": "Trailer and Other Motor Vehicle Retailing",
    "index": "Trailer retailing (except boat trailers)"
  },
  {
    "code": "3503",
    "description": "Trailer and Other Motor Vehicle Wholesaling",
    "index": "Trailer wholesaling n.e.c."
  },
  {
    "code": "2393",
    "description": "Railway Rolling Stock Manufacturing and Repair Services",
    "index": "Tram manufacturing"
  },
  {
    "code": "4622",
    "description": "Urban Bus Transport (Including Tramway)",
    "index": "Tramway passenger transport service"
  },
  {
    "code": "7292",
    "description": "Document Preparation Services",
    "index": "Transcription service"
  },
  {
    "code": "2439",
    "description": "Other Electrical Equipment Manufacturing",
    "index": "Transformer manufacturing"
  },
  {
    "code": "2429",
    "description": "Other Electronic Equipment Manufacturing",
    "index": "Transistor manufacturing"
  },
  {
    "code": "6999",
    "description": "Other Professional, Scientific and Technical Services n.e.c.",
    "index": "Translation service"
  },
  {
    "code": "1919",
    "description": "Other Polymer Product Manufacturing",
    "index": "Transmission belt, plastic or composite, manufacturing"
  },
  {
    "code": "2439",
    "description": "Other Electrical Equipment Manufacturing",
    "index": "Transmission equipment, electrical, manufacturing"
  },
  {
    "code": "1709",
    "description": "Other Petroleum and Coal Product Manufacturing",
    "index": "Transmission fluid manufacturing"
  },
  {
    "code": "2319",
    "description": "Other Motor Vehicle Parts Manufacturing",
    "index": "Transmission manufacturing"
  },
  {
    "code": "9419",
    "description": "Other Automotive Repair and Maintenance",
    "index": "Transmission repair (automotive)"
  },
  {
    "code": "8910",
    "description": "Museum Operation",
    "index": "Transport and maritime museum operation"
  },
  {
    "code": "7311",
    "description": "Buildings Cleaning Services",
    "index": "Transport equipment cleaning"
  },
  {
    "code": "5029",
    "description": "Other Transport n.e.c.",
    "index": "Transport operation n.e.c."
  },
  {
    "code": "7220",
    "description": "Travel Agency and Tour Arrangement Services",
    "index": "Travel agency operation"
  },
  {
    "code": "5413",
    "description": "Book Publishing",
    "index": "Travel guide book publishing (except internet)"
  },
  {
    "code": "6322",
    "description": "General Insurance",
    "index": "Travel insurance provision"
  },
  {
    "code": "7220",
    "description": "Travel Agency and Tour Arrangement Services",
    "index": "Travel ticket agency operation"
  },
  {
    "code": "1181",
    "description": "Sugar Manufacturing",
    "index": "Treacle manufacturing"
  },
  {
    "code": "0302",
    "description": "Logging",
    "index": "Tree cutting or felling"
  },
  {
    "code": "3319",
    "description": "Other Agricultural Product Wholesaling",
    "index": "Tree or shrub, potted, wholesaling"
  },
  {
    "code": "0510",
    "description": "Forestry Support Services",
    "index": "Tree pruning (forest)"
  },
  {
    "code": "0510",
    "description": "Forestry Support Services",
    "index": "Tree thinning (forest)"
  },
  {
    "code": "1499",
    "description": "Other Wood Product Manufacturing n.e.c.",
    "index": "Trellis, wooden, manufacturing"
  },
  {
    "code": "3212",
    "description": "Site Preparation Services",
    "index": "Trench digging"
  },
  {
    "code": "9112",
    "description": "Sport and Physical Recreation Clubs and Sports Professionals",
    "index": "Triathlon club operation"
  },
  {
    "code": "2592",
    "description": "Toy, Sporting and Recreational Product Manufacturing",
    "index": "Tricycle manufacturing"
  },
  {
    "code": "3711",
    "description": "Textile Product Wholesaling",
    "index": "Trimmings, textile, wholesaling"
  },
  {
    "code": "2591",
    "description": "Jewellery and Silverware Manufacturing",
    "index": "Trophy manufacturing"
  },
  {
    "code": "2399",
    "description": "Other Transport Equipment Manufacturing n.e.c.",
    "index": "Trotting gig manufacturing"
  },
  {
    "code": "0202",
    "description": "Caged (Offshore) Aquaculture",
    "index": "Trout farming (caged)"
  },
  {
    "code": "0203",
    "description": "Onshore Aquaculture",
    "index": "Trout farming (pond or tank)"
  },
  {
    "code": "2312",
    "description": "Motor Vehicle Body and Trailer Manufacturing",
    "index": "Truck body manufacturing"
  },
  {
    "code": "4610",
    "description": "Road Freight Transport",
    "index": "Truck hire service (with driver)"
  },
  {
    "code": "2311",
    "description": "Motor Vehicle Manufacturing",
    "index": "Truck manufacturing (except off-highway)"
  },
  {
    "code": "6619",
    "description": "Other Motor Vehicle and Transport Equipment Rental and Hiring",
    "index": "Truck rental (without driver)"
  },
  {
    "code": "9419",
    "description": "Other Automotive Repair and Maintenance",
    "index": "Truck repair (automotive)"
  },
  {
    "code": "2312",
    "description": "Motor Vehicle Body and Trailer Manufacturing",
    "index": "Truck tipper tray manufacturing"
  },
  {
    "code": "3502",
    "description": "Commercial Vehicle Wholesaling",
    "index": "Truck wholesaling"
  },
  {
    "code": "0123",
    "description": "Vegetable Growing (Outdoors)",
    "index": "Truffle growing (outdoors)"
  },
  {
    "code": "3224",
    "description": "Structural Steel Erection Services",
    "index": "Truss or joist, steel, erection"
  },
  {
    "code": "6419",
    "description": "Other Auxiliary Finance and Investment Services",
    "index": "Trustee service"
  },
  {
    "code": "2210",
    "description": "Iron and Steel Forging",
    "index": "Tube fittings, forged iron or steel, manufacturing"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Tube fittings, non-ferrous metal, manufacturing"
  },
  {
    "code": "2142",
    "description": "Aluminium Rolling, Drawing, Extruding",
    "index": "Tube, aluminium, manufacturing"
  },
  {
    "code": "2149",
    "description": "Other Basic Non-Ferrous Metal Product Manufacturing",
    "index": "Tube, non-ferrous metal, manufacturing (except aluminium)"
  },
  {
    "code": "2121",
    "description": "Iron and Steel Casting",
    "index": "Tube, spun-cast iron, manufacturing"
  },
  {
    "code": "4232",
    "description": "Garden Supplies Retailing",
    "index": "Tuber, flower, retailing"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Tubing, flexible metal, manufacturing"
  },
  {
    "code": "2010",
    "description": "Glass and Glass Product Manufacturing",
    "index": "Tubing, glass, manufacturing"
  },
  {
    "code": "1920",
    "description": "Natural Rubber Product Manufacturing",
    "index": "Tubing, natural rubber, manufacturing"
  },
  {
    "code": "0202",
    "description": "Caged (Offshore) Aquaculture",
    "index": "Tuna farming (caged)"
  },
  {
    "code": "0203",
    "description": "Onshore Aquaculture",
    "index": "Tuna farming (pond or tank)"
  },
  {
    "code": "0809",
    "description": "Other Metal Ore Mining",
    "index": "Tungsten ore mining"
  },
  {
    "code": "3109",
    "description": "Other Heavy and Civil Engineering Construction",
    "index": "Tunnel construction"
  },
  {
    "code": "0113",
    "description": "Turf Growing",
    "index": "Turf growing"
  },
  {
    "code": "0171",
    "description": "Poultry Farming (Meat)",
    "index": "Turkey farming"
  },
  {
    "code": "9539",
    "description": "Other Personal Services n.e.c.",
    "index": "Turkish bath operation"
  },
  {
    "code": "2292",
    "description": "Nut, Bolt, Screw and Rivet Manufacturing",
    "index": "Turnbuckle, metal, manufacturing"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Turnstile, metal, manufacturing"
  },
  {
    "code": "1812",
    "description": "Basic Organic Chemical Manufacturing",
    "index": "Turpentine (except mineral turpentine) manufacturing"
  },
  {
    "code": "0419",
    "description": "Other Fishing",
    "index": "Turtle hunting"
  },
  {
    "code": "8219",
    "description": "Adult, Community and Other Education n.e.c.",
    "index": "Tutoring service"
  },
  {
    "code": "1332",
    "description": "Rope, Cordage and Twine Manufacturing",
    "index": "Twine manufacturing"
  },
  {
    "code": "4221",
    "description": "Electrical, Electronic and Gas Appliance Retailing",
    "index": "Two-way radio equipment retailing"
  },
  {
    "code": "3493",
    "description": "Telecommunication Goods Wholesaling",
    "index": "Two-way radio equipment wholesaling"
  },
  {
    "code": "1612",
    "description": "Printing Support Services",
    "index": "Typesetting service"
  },
  {
    "code": "2421",
    "description": "Computer and Electronic Office Equipment Manufacturing",
    "index": "Typewriter (electronic) manufacturing"
  },
  {
    "code": "7292",
    "description": "Document Preparation Services",
    "index": "Typing service"
  },
  {
    "code": "1312",
    "description": "Natural Fibre Textile Manufacturing",
    "index": "Tyre cord yarn or fabric, cotton, manufacturing"
  },
  {
    "code": "1313",
    "description": "Synthetic Fibre Textile Manufacturing",
    "index": "Tyre cord yarn or fabric, synthetic fibre, manufacturing"
  },
  {
    "code": "1914",
    "description": "Tyre Manufacturing",
    "index": "Tyre manufacturing (pneumatic, semi-pneumatic or solid)"
  },
  {
    "code": "2463",
    "description": "Machine Tool and Parts Manufacturing",
    "index": "Tyre matrix manufacturing"
  },
  {
    "code": "3922",
    "description": "Tyre Retailing",
    "index": "Tyre or tube, motor vehicle, retailing"
  },
  {
    "code": "2469",
    "description": "Other Specialised Machinery and Equipment Manufacturing",
    "index": "Tyre retreading or repairing machinery manufacturing"
  },
  {
    "code": "3504",
    "description": "Motor Vehicle New Part Wholesaling",
    "index": "Tyre wholesaling"
  },
  {
    "code": "1131",
    "description": "Milk and Cream Processing",
    "index": "Ultra heat treatment milk manufacturing"
  },
  {
    "code": "2599",
    "description": "Other Manufacturing n.e.c.",
    "index": "Umbrella manufacturing"
  },
  {
    "code": "4259",
    "description": "Other Personal Accessories Retailing",
    "index": "Umbrella retailing"
  },
  {
    "code": "1916",
    "description": "Paint and Coatings Manufacturing",
    "index": "Undercoat and top coat paint manufacturing"
  },
  {
    "code": "1334",
    "description": "Textile Finishing and Other Textile Product Manufacturing",
    "index": "Underfelt manufacturing"
  },
  {
    "code": "8102",
    "description": "Higher Education",
    "index": "Undergraduate school, university operation"
  },
  {
    "code": "9520",
    "description": "Funeral, Crematorium and Cemetery Services",
    "index": "Undertaking service"
  },
  {
    "code": "1351",
    "description": "Clothing Manufacturing",
    "index": "Underwear manufacturing"
  },
  {
    "code": "1214",
    "description": "Wine and Other Alcoholic Beverage Manufacturing",
    "index": "Unfortified wine manufacturing"
  },
  {
    "code": "9531",
    "description": "Laundry and Dry-Cleaning Services",
    "index": "Uniform hire service"
  },
  {
    "code": "1351",
    "description": "Clothing Manufacturing",
    "index": "Uniform manufacturing"
  },
  {
    "code": "9552",
    "description": "Labour Association Services",
    "index": "Union association operation"
  },
  {
    "code": "6240",
    "description": "Financial Asset Investing",
    "index": "Unit trust operation (investment type; in predominantly financial assets; except trust management on a commission or fee basis)"
  },
  {
    "code": "8102",
    "description": "Higher Education",
    "index": "University operation"
  },
  {
    "code": "1161",
    "description": "Grain Mill Product Manufacturing",
    "index": "Unpopped corn manufacturing (for popcorn)"
  },
  {
    "code": "2399",
    "description": "Other Transport Equipment Manufacturing n.e.c.",
    "index": "Unusual terrain vehicle manufacturing"
  },
  {
    "code": "2511",
    "description": "Wooden Furniture and Upholstered Seat Manufacturing",
    "index": "Upholstered furniture manufacturing"
  },
  {
    "code": "0809",
    "description": "Other Metal Ore Mining",
    "index": "Uranium ore mining"
  },
  {
    "code": "4622",
    "description": "Urban Bus Transport (Including Tramway)",
    "index": "Urban bus service"
  },
  {
    "code": "1821",
    "description": "Synthetic Resin and Synthetic Rubber Manufacturing",
    "index": "Urea formaldehyde manufacturing"
  },
  {
    "code": "1831",
    "description": "Fertiliser Manufacturing",
    "index": "Urea, fertiliser grade, manufacturing"
  },
  {
    "code": "8512",
    "description": "Specialist Medical Services",
    "index": "Urology service"
  },
  {
    "code": "3911",
    "description": "Car Retailing",
    "index": "Used car retailing"
  },
  {
    "code": "3501",
    "description": "Car Wholesaling",
    "index": "Used car wholesaling"
  },
  {
    "code": "1841",
    "description": "Human Pharmaceutical and Medicinal Product Manufacturing",
    "index": "Vaccine manufacturing (except veterinary)"
  },
  {
    "code": "2239",
    "description": "Other Metal Container Manufacturing",
    "index": "Vacuum bottle and jug manufacturing"
  },
  {
    "code": "1919",
    "description": "Other Polymer Product Manufacturing",
    "index": "Vacuum cleaner belt, plastic or composite, manufacturing"
  },
  {
    "code": "4221",
    "description": "Electrical, Electronic and Gas Appliance Retailing",
    "index": "Vacuum cleaner retailing"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Vacuum cleaner wholesaling"
  },
  {
    "code": "2469",
    "description": "Other Specialised Machinery and Equipment Manufacturing",
    "index": "Vacuum cleaner, commercial, manufacturing"
  },
  {
    "code": "2449",
    "description": "Other Domestic Appliance Manufacturing",
    "index": "Vacuum cleaner, domestic, manufacturing"
  },
  {
    "code": "2599",
    "description": "Other Manufacturing n.e.c.",
    "index": "Vacuum flask manufacturing"
  },
  {
    "code": "9533",
    "description": "Parking Services",
    "index": "Valet parking service"
  },
  {
    "code": "6720",
    "description": "Real Estate Services",
    "index": "Valuing service (real estate)"
  },
  {
    "code": "2121",
    "description": "Iron and Steel Casting",
    "index": "Valve or valve parts, steam, gas or water, cast, manufacturing (ferrous metal)"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Valve or valve parts, steam, gas or water, manufacturing (non-ferrous metal)"
  },
  {
    "code": "2210",
    "description": "Iron and Steel Forging",
    "index": "Valves or valve parts, steam, gas or water, forged iron or steel, manufacturing"
  },
  {
    "code": "2311",
    "description": "Motor Vehicle Manufacturing",
    "index": "Van manufacturing"
  },
  {
    "code": "4279",
    "description": "Other Store-Based Retailing n.e.c.",
    "index": "Variety store operation"
  },
  {
    "code": "1916",
    "description": "Paint and Coatings Manufacturing",
    "index": "Varnish manufacturing"
  },
  {
    "code": "1919",
    "description": "Other Polymer Product Manufacturing",
    "index": "V-belt, plastic or composite, manufacturing"
  },
  {
    "code": "9421",
    "description": "Domestic Appliance Repair and Maintenance",
    "index": "VCR and DVD repair and maintenance"
  },
  {
    "code": "0159",
    "description": "Other Crop Growing n.e.c.",
    "index": "Vegetable growing for fodder"
  },
  {
    "code": "0123",
    "description": "Vegetable Growing (Outdoors)",
    "index": "Vegetable growing n.e.c. (outdoors)"
  },
  {
    "code": "0122",
    "description": "Vegetable Growing (Under Cover)",
    "index": "Vegetable growing n.e.c. (under cover)"
  },
  {
    "code": "1140",
    "description": "Fruit and Vegetable Processing",
    "index": "Vegetable juice or soup manufacturing"
  },
  {
    "code": "3319",
    "description": "Other Agricultural Product Wholesaling",
    "index": "Vegetable oil meal wholesaling"
  },
  {
    "code": "1150",
    "description": "Oil and Fat Manufacturing",
    "index": "Vegetable oil, meal or cake manufacturing"
  },
  {
    "code": "1140",
    "description": "Fruit and Vegetable Processing",
    "index": "Vegetable salad manufacturing"
  },
  {
    "code": "0123",
    "description": "Vegetable Growing (Outdoors)",
    "index": "Vegetable seed growing (outdoors)"
  },
  {
    "code": "1140",
    "description": "Fruit and Vegetable Processing",
    "index": "Vegetable soup manufacturing"
  },
  {
    "code": "4122",
    "description": "Fruit and Vegetable Retailing",
    "index": "Vegetable, fresh, retailing"
  },
  {
    "code": "3605",
    "description": "Fruit and Vegetable Wholesaling",
    "index": "Vegetable, fresh, wholesaling"
  },
  {
    "code": "1140",
    "description": "Fruit and Vegetable Processing",
    "index": "Vegetable, frozen, manufacturing"
  },
  {
    "code": "1140",
    "description": "Fruit and Vegetable Processing",
    "index": "Vegetable, preserved, manufacturing (including canned, dehydrated, dried or quick frozen)"
  },
  {
    "code": "2499",
    "description": "Other Machinery and Equipment Manufacturing n.e.c.",
    "index": "Vending machine manufacturing (except refrigerated)"
  },
  {
    "code": "4310",
    "description": "Non Store Retailing",
    "index": "Vending machine operation (except leasing)"
  },
  {
    "code": "2452",
    "description": "Fixed Space Heating, Cooling and Ventilation Equipment Manufacturing",
    "index": "Vending machine, refrigerated, manufacturing"
  },
  {
    "code": "1493",
    "description": "Veneer and Plywood Manufacturing",
    "index": "Veneer manufacturing"
  },
  {
    "code": "3331",
    "description": "Timber Wholesaling",
    "index": "Veneer, wood, wholesaling"
  },
  {
    "code": "3233",
    "description": "Air Conditioning and Heating Services",
    "index": "Ventilation equipment installation n.e.c."
  },
  {
    "code": "2240",
    "description": "Other Sheet Metal Product Manufacturing",
    "index": "Ventilator, sheet metal, manufacturing"
  },
  {
    "code": "0990",
    "description": "Other Non-Metallic Mineral Mining and Quarrying",
    "index": "Vermiculite mining"
  },
  {
    "code": "2090",
    "description": "Other Non-Metallic Mineral Product Manufacturing",
    "index": "Vermiculite, expanded, manufacturing"
  },
  {
    "code": "9559",
    "description": "Other Interest Group Services n.e.c.",
    "index": "Veterans' association operation"
  },
  {
    "code": "6970",
    "description": "Veterinary Services",
    "index": "Veterinary clinic operation"
  },
  {
    "code": "1842",
    "description": "Veterinary Pharmaceutical and Medicinal Product Manufacturing",
    "index": "Veterinary drug manufacturing"
  },
  {
    "code": "3720",
    "description": "Pharmaceutical and Toiletry Goods Wholesaling",
    "index": "Veterinary drug wholesaling"
  },
  {
    "code": "2412",
    "description": "Medical and Surgical Equipment Manufacturing",
    "index": "Veterinary instrument manufacturing"
  },
  {
    "code": "1842",
    "description": "Veterinary Pharmaceutical and Medicinal Product Manufacturing",
    "index": "Veterinary medicinal preparation manufacturing n.e.c."
  },
  {
    "code": "3720",
    "description": "Pharmaceutical and Toiletry Goods Wholesaling",
    "index": "Veterinary medicine wholesaling"
  },
  {
    "code": "6970",
    "description": "Veterinary Services",
    "index": "Veterinary service"
  },
  {
    "code": "1841",
    "description": "Human Pharmaceutical and Medicinal Product Manufacturing",
    "index": "Vial manufacturing"
  },
  {
    "code": "2299",
    "description": "Other Fabricated Metal Product Manufacturing n.e.c.",
    "index": "Vice, bench, manufacturing"
  },
  {
    "code": "4221",
    "description": "Electrical, Electronic and Gas Appliance Retailing",
    "index": "Video cassette recorder (VCR) retailing"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Video cassette recorder (VCR) wholesaling"
  },
  {
    "code": "4242",
    "description": "Entertainment Media Retailing",
    "index": "Video cassette retailing"
  },
  {
    "code": "5514",
    "description": "Postproduction Services and Other Motion Picture and Video Activities",
    "index": "Video conversion service (between audio and visual media formats)"
  },
  {
    "code": "6991",
    "description": "Professional Photographic Services",
    "index": "Video filming of special events (e.g. birthdays, weddings)"
  },
  {
    "code": "6632",
    "description": "Video and Other Electronic Media Rental",
    "index": "Video game rental"
  },
  {
    "code": "5511",
    "description": "Motion Picture and Video Production",
    "index": "Video production"
  },
  {
    "code": "6639",
    "description": "Other Goods and Equipment Rental and Hiring n.e.c.",
    "index": "Video recorder or player rental"
  },
  {
    "code": "1620",
    "description": "Reproduction of Recorded Media",
    "index": "Video tape, pre-recorded, reproduction"
  },
  {
    "code": "0112",
    "description": "Nursery Production (Outdoors)",
    "index": "Vine stock nursery operation (outdoors)"
  },
  {
    "code": "0111",
    "description": "Nursery Production (Under Cover)",
    "index": "Vine stock nursery operation (under cover)"
  },
  {
    "code": "1140",
    "description": "Fruit and Vegetable Processing",
    "index": "Vinegar manufacturing (except wine vinegar)"
  },
  {
    "code": "3609",
    "description": "Other Grocery Wholesaling",
    "index": "Vinegar wholesaling"
  },
  {
    "code": "0131",
    "description": "Grape Growing",
    "index": "Vineyard operation"
  },
  {
    "code": "1812",
    "description": "Basic Organic Chemical Manufacturing",
    "index": "Vinyl chloride manufacturing"
  },
  {
    "code": "4222",
    "description": "Computer and Computer Peripherals Retailing",
    "index": "Visual display unit (VDU) retailing"
  },
  {
    "code": "1841",
    "description": "Human Pharmaceutical and Medicinal Product Manufacturing",
    "index": "Vitamin product manufacturing"
  },
  {
    "code": "2029",
    "description": "Other Ceramic Product Manufacturing",
    "index": "Vitreous china goods manufacturing"
  },
  {
    "code": "2293",
    "description": "Metal Coating and Finishing",
    "index": "Vitreous enamelling"
  },
  {
    "code": "8101",
    "description": "Technical and Vocational Education and Training",
    "index": "Vocational computer training"
  },
  {
    "code": "7294",
    "description": "Call Centre Operation",
    "index": "Voice mailbox service"
  },
  {
    "code": "2034",
    "description": "Concrete Product Manufacturing",
    "index": "Wall fitting, terrazzo, manufacturing"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Wall or ceiling board wholesaling"
  },
  {
    "code": "2032",
    "description": "Plaster and Gypsum Product Manufacturing",
    "index": "Wall or ceiling board, plaster, manufacturing"
  },
  {
    "code": "3243",
    "description": "Tiling and Carpeting Services",
    "index": "Wall tiling (using ceramic, concrete or cut stone tiles)"
  },
  {
    "code": "1320",
    "description": "Leather Tanning and Fur Dressing",
    "index": "Wallet manufacturing (including metal mesh wallets)"
  },
  {
    "code": "1529",
    "description": "Other Converted Paper Product Manufacturing",
    "index": "Wallpaper manufacturing"
  },
  {
    "code": "4231",
    "description": "Hardware and Building Supplies Retailing",
    "index": "Wallpaper retailing"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Wallpaper wholesaling"
  },
  {
    "code": "3244",
    "description": "Painting and Decorating Services",
    "index": "Wallpapering"
  },
  {
    "code": "0139",
    "description": "Other Fruit and Tree Nut Growing",
    "index": "Walnut growing"
  },
  {
    "code": "8910",
    "description": "Museum Operation",
    "index": "War memorial museum operation"
  },
  {
    "code": "6712",
    "description": "Non-Residential Property Operators",
    "index": "Warehouse renting or leasing"
  },
  {
    "code": "5309",
    "description": "Other Warehousing and Storage Services",
    "index": "Warehousing n.e.c."
  },
  {
    "code": "3332",
    "description": "Plumbing Goods Wholesaling",
    "index": "Wash basin wholesaling"
  },
  {
    "code": "2292",
    "description": "Nut, Bolt, Screw and Rivet Manufacturing",
    "index": "Washer, metal, manufacturing"
  },
  {
    "code": "1920",
    "description": "Natural Rubber Product Manufacturing",
    "index": "Washer, natural rubber, manufacturing"
  },
  {
    "code": "9421",
    "description": "Domestic Appliance Repair and Maintenance",
    "index": "Washing machine and/or clothes dryer (domestic) repair"
  },
  {
    "code": "9429",
    "description": "Other Machinery and Equipment Repair and Maintenance",
    "index": "Washing machine and/or clothes dryer (industrial) repair and maintenance"
  },
  {
    "code": "4221",
    "description": "Electrical, Electronic and Gas Appliance Retailing",
    "index": "Washing machine retailing"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Washing machine wholesaling"
  },
  {
    "code": "2441",
    "description": "Whiteware Appliance Manufacturing",
    "index": "Washing machine, domestic, manufacturing"
  },
  {
    "code": "2919",
    "description": "Other Waste Collection Services",
    "index": "Waste collection service n.e.c."
  },
  {
    "code": "2922",
    "description": "Waste Remediation and Materials Recovery Services",
    "index": "Waste remediation"
  },
  {
    "code": "2911",
    "description": "Solid Waste Collection Services",
    "index": "Waste, solid, collection service"
  },
  {
    "code": "2419",
    "description": "Other Professional and Scientific Equipment Manufacturing",
    "index": "Watch manufacturing"
  },
  {
    "code": "3732",
    "description": "Jewellery and Watch Wholesaling",
    "index": "Watch or clock part wholesaling"
  },
  {
    "code": "9499",
    "description": "Other Repair and Maintenance n.e.c.",
    "index": "Watch repair"
  },
  {
    "code": "4253",
    "description": "Watch and Jewellery Retailing",
    "index": "Watch retailing"
  },
  {
    "code": "3732",
    "description": "Jewellery and Watch Wholesaling",
    "index": "Watch wholesaling"
  },
  {
    "code": "4810",
    "description": "Water Freight Transport",
    "index": "Water (river, sea and lake) freight transport service"
  },
  {
    "code": "2452",
    "description": "Fixed Space Heating, Cooling and Ventilation Equipment Manufacturing",
    "index": "Water cooler, commercial or industrial, manufacturing"
  },
  {
    "code": "2811",
    "description": "Water Supply",
    "index": "Water distribution by pipelines"
  },
  {
    "code": "2811",
    "description": "Water Supply",
    "index": "Water filtration plant operation"
  },
  {
    "code": "5292",
    "description": "Freight Forwarding Services",
    "index": "Water freight forwarding service"
  },
  {
    "code": "5212",
    "description": "Port and Water Transport Terminal Operations",
    "index": "Water freight terminal operation"
  },
  {
    "code": "2452",
    "description": "Fixed Space Heating, Cooling and Ventilation Equipment Manufacturing",
    "index": "Water heater, commercial or industrial, manufacturing"
  },
  {
    "code": "2513",
    "description": "Mattress Manufacturing",
    "index": "Water mattress manufacturing"
  },
  {
    "code": "2419",
    "description": "Other Professional and Scientific Equipment Manufacturing",
    "index": "Water meter manufacturing"
  },
  {
    "code": "9131",
    "description": "Amusement Parks and Centres Operation",
    "index": "Water park operation"
  },
  {
    "code": "5212",
    "description": "Port and Water Transport Terminal Operations",
    "index": "Water passenger terminal operation"
  },
  {
    "code": "4820",
    "description": "Water Passenger Transport",
    "index": "Water passenger transport service"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Water proofing compound wholesaling"
  },
  {
    "code": "1916",
    "description": "Paint and Coatings Manufacturing",
    "index": "Water repellent coating manufacturing (for concrete and masonry)"
  },
  {
    "code": "2811",
    "description": "Water Supply",
    "index": "Water reservoir operation"
  },
  {
    "code": "2811",
    "description": "Water Supply",
    "index": "Water supply for irrigation"
  },
  {
    "code": "2811",
    "description": "Water Supply",
    "index": "Water supply pumping station operation"
  },
  {
    "code": "2811",
    "description": "Water Supply",
    "index": "Water supply system operation"
  },
  {
    "code": "3109",
    "description": "Other Heavy and Civil Engineering Construction",
    "index": "Water tank construction (except for structural steel)"
  },
  {
    "code": "4820",
    "description": "Water Passenger Transport",
    "index": "Water taxi service"
  },
  {
    "code": "2499",
    "description": "Other Machinery and Equipment Manufacturing n.e.c.",
    "index": "Water treatment equipment, commercial, manufacturing"
  },
  {
    "code": "2449",
    "description": "Other Domestic Appliance Manufacturing",
    "index": "Water treatment equipment, domestic, manufacturing"
  },
  {
    "code": "5219",
    "description": "Other Water Transport Support Services",
    "index": "Water vessel towing service"
  },
  {
    "code": "1912",
    "description": "Rigid and Semi Rigid Polymer Product Manufacturing",
    "index": "Watering can, plastic, manufacturing"
  },
  {
    "code": "1351",
    "description": "Clothing Manufacturing",
    "index": "Waterproof clothing manufacturing"
  },
  {
    "code": "3299",
    "description": "Other Construction Services n.e.c.",
    "index": "Waterproofing of building"
  },
  {
    "code": "6999",
    "description": "Other Professional, Scientific and Technical Services n.e.c.",
    "index": "Weather station operation"
  },
  {
    "code": "5921",
    "description": "Data Processing and Web Hosting Services",
    "index": "Web hosting"
  },
  {
    "code": "5910",
    "description": "Internet Access Services",
    "index": "Web search portal operation"
  },
  {
    "code": "9539",
    "description": "Other Personal Services n.e.c.",
    "index": "Wedding chapel operation (except church)"
  },
  {
    "code": "6991",
    "description": "Professional Photographic Services",
    "index": "Wedding photography service"
  },
  {
    "code": "7312",
    "description": "Buildings Pest Control Services",
    "index": "Weed control service (except agricultural and forestry)"
  },
  {
    "code": "1832",
    "description": "Pesticide Manufacturing",
    "index": "Weedkiller manufacturing"
  },
  {
    "code": "3323",
    "description": "Industrial and Agricultural Chemical Product Wholesaling",
    "index": "Weedkiller wholesaling"
  },
  {
    "code": "5299",
    "description": "Other Transport Support Services n.e.c",
    "index": "Weighbridge operation"
  },
  {
    "code": "2499",
    "description": "Other Machinery and Equipment Manufacturing n.e.c.",
    "index": "Weighing machinery manufacturing (except electronic)"
  },
  {
    "code": "3499",
    "description": "Other Machinery and Equipment Wholesaling n",
    "index": "Weighing machinery wholesaling n.e.c."
  },
  {
    "code": "9512",
    "description": "Diet and Weight Reduction Centre Operation",
    "index": "Weight loss centre operation (non-medical)"
  },
  {
    "code": "9512",
    "description": "Diet and Weight Reduction Centre Operation",
    "index": "Weight loss service (non-medical)"
  },
  {
    "code": "2592",
    "description": "Toy, Sporting and Recreational Product Manufacturing",
    "index": "Weight training equipment manufacturing"
  },
  {
    "code": "7720",
    "description": "Regulatory Services",
    "index": "Weights and measures regulation"
  },
  {
    "code": "2291",
    "description": "Spring and Wire Product Manufacturing",
    "index": "Welded link chain manufacturing"
  },
  {
    "code": "2439",
    "description": "Other Electrical Equipment Manufacturing",
    "index": "Welding equipment, electrical, manufacturing"
  },
  {
    "code": "3494",
    "description": "Other Electrical and Electronic Goods Wholesaling",
    "index": "Welding equipment, electrical, wholesaling"
  },
  {
    "code": "3419",
    "description": "Other Specialised Industrial Machinery and Equipment Wholesaling",
    "index": "Welding machinery or equipment, non-electric, wholesaling"
  },
  {
    "code": "2463",
    "description": "Machine Tool and Parts Manufacturing",
    "index": "Welding or cutting equipment, gas, manufacturing"
  },
  {
    "code": "9429",
    "description": "Other Machinery and Equipment Repair and Maintenance",
    "index": "Welding repair service (including automotive)"
  },
  {
    "code": "2139",
    "description": "Other Basic Non-Ferrous Metal Manufacturing",
    "index": "Welding rod manufacturing"
  },
  {
    "code": "3224",
    "description": "Structural Steel Erection Services",
    "index": "Welding work on construction projects"
  },
  {
    "code": "8790",
    "description": "Other Social Assistance Services",
    "index": "Welfare counselling service"
  },
  {
    "code": "9559",
    "description": "Other Interest Group Services n.e.c.",
    "index": "Welfare fundraising"
  },
  {
    "code": "2439",
    "description": "Other Electrical Equipment Manufacturing",
    "index": "Wet cell battery manufacturing"
  },
  {
    "code": "1351",
    "description": "Clothing Manufacturing",
    "index": "Wetsuit manufacturing"
  },
  {
    "code": "4241",
    "description": "Sport and Camping Equipment Retailing",
    "index": "Wetsuit retailing"
  },
  {
    "code": "5010",
    "description": "Scenic and Sightseeing Transport",
    "index": "Whale watching cruise operation"
  },
  {
    "code": "5212",
    "description": "Port and Water Transport Terminal Operations",
    "index": "Wharf operation"
  },
  {
    "code": "1161",
    "description": "Grain Mill Product Manufacturing",
    "index": "Wheat germ manufacturing"
  },
  {
    "code": "0149",
    "description": "Other Grain Growing",
    "index": "Wheat growing"
  },
  {
    "code": "3312",
    "description": "Cereal Grain Wholesaling",
    "index": "Wheat wholesaling"
  },
  {
    "code": "1161",
    "description": "Grain Mill Product Manufacturing",
    "index": "Wheaten bran manufacturing"
  },
  {
    "code": "1161",
    "description": "Grain Mill Product Manufacturing",
    "index": "Wheaten flour manufacturing"
  },
  {
    "code": "1161",
    "description": "Grain Mill Product Manufacturing",
    "index": "Wheaten malt manufacturing"
  },
  {
    "code": "1161",
    "description": "Grain Mill Product Manufacturing",
    "index": "Wheatmeal manufacturing"
  },
  {
    "code": "2319",
    "description": "Other Motor Vehicle Parts Manufacturing",
    "index": "Wheel manufacturing"
  },
  {
    "code": "2399",
    "description": "Other Transport Equipment Manufacturing n.e.c.",
    "index": "Wheelbarrow manufacturing"
  },
  {
    "code": "2399",
    "description": "Other Transport Equipment Manufacturing n.e.c.",
    "index": "Wheelchair manufacturing"
  },
  {
    "code": "9499",
    "description": "Other Repair and Maintenance n.e.c.",
    "index": "Wheelchair repair and maintenance"
  },
  {
    "code": "2399",
    "description": "Other Transport Equipment Manufacturing n.e.c.",
    "index": "Wheelchair, electronic, manufacturing"
  },
  {
    "code": "1133",
    "description": "Cheese and Other Dairy Product Manufacturing",
    "index": "Whey or whey powder manufacturing"
  },
  {
    "code": "9139",
    "description": "Amusement and Other Recreation Activities n.e.c.",
    "index": "White water rafting operation"
  },
  {
    "code": "1120",
    "description": "Seafood Processing",
    "index": "Whole fin fish freezing"
  },
  {
    "code": "3739",
    "description": "Other Goods Wholesaling n.e.c.",
    "index": "Wholesale trade n.e.c."
  },
  {
    "code": "3800",
    "description": "Commission Based Wholesaling",
    "index": "Wholesaler's sales agent"
  },
  {
    "code": "2599",
    "description": "Other Manufacturing n.e.c.",
    "index": "Wig manufacturing"
  },
  {
    "code": "4259",
    "description": "Other Personal Accessories Retailing",
    "index": "Wig retailing"
  },
  {
    "code": "8921",
    "description": "Zoological and Botanic Gardens Operation",
    "index": "Wildlife park or reserve operation (wildlife actively managed)"
  },
  {
    "code": "8922",
    "description": "Nature Reserves and Conservation Parks Operation",
    "index": "Wildlife park or reserve operation (wildlife not actively managed)"
  },
  {
    "code": "2491",
    "description": "Lifting and Material Handling Equipment Manufacturing",
    "index": "Winch manufacturing"
  },
  {
    "code": "2619",
    "description": "Other Electricity Generation",
    "index": "Wind electricity generation"
  },
  {
    "code": "3411",
    "description": "Agricultural and Construction Machinery Wholesaling",
    "index": "Windmill wholesaling"
  },
  {
    "code": "2461",
    "description": "Agricultural Machinery and Equipment Manufacturing",
    "index": "Windmill, agricultural, manufacturing"
  },
  {
    "code": "7311",
    "description": "Buildings Cleaning Services",
    "index": "Window cleaning"
  },
  {
    "code": "3245",
    "description": "Glazing Services",
    "index": "Window frame installation"
  },
  {
    "code": "2223",
    "description": "Architectural Aluminium Product Manufacturing",
    "index": "Window frame or sash, aluminium, manufacturing"
  },
  {
    "code": "2229",
    "description": "Other Structural Metal Product Manufacturing",
    "index": "Window frame or sash, metal, manufacturing (except aluminium)"
  },
  {
    "code": "2010",
    "description": "Glass and Glass Product Manufacturing",
    "index": "Window glass manufacturing"
  },
  {
    "code": "3245",
    "description": "Glazing Services",
    "index": "Window installation"
  },
  {
    "code": "3245",
    "description": "Glazing Services",
    "index": "Window insulation fixing"
  },
  {
    "code": "2223",
    "description": "Architectural Aluminium Product Manufacturing",
    "index": "Window screen, aluminium, manufacturing"
  },
  {
    "code": "2229",
    "description": "Other Structural Metal Product Manufacturing",
    "index": "Window screen, metal, manufacturing (except aluminium)"
  },
  {
    "code": "2223",
    "description": "Architectural Aluminium Product Manufacturing",
    "index": "Window, aluminium framed, manufacturing (complete with glass)"
  },
  {
    "code": "2010",
    "description": "Glass and Glass Product Manufacturing",
    "index": "Windscreen glass manufacturing"
  },
  {
    "code": "9412",
    "description": "Automotive Body, Paint and Interior Repair",
    "index": "Windscreen replacement and/or repair (including window tinting)"
  },
  {
    "code": "2313",
    "description": "Automotive Electrical Components Manufacturing",
    "index": "Windscreen wiper manufacturing"
  },
  {
    "code": "4520",
    "description": "Pubs, Taverns and Bars",
    "index": "Wine bar operation"
  },
  {
    "code": "0131",
    "description": "Grape Growing",
    "index": "Wine grape growing"
  },
  {
    "code": "1214",
    "description": "Wine and Other Alcoholic Beverage Manufacturing",
    "index": "Wine manufacturing"
  },
  {
    "code": "6925",
    "description": "Scientific Testing and Analysis Services",
    "index": "Wine testing"
  },
  {
    "code": "1214",
    "description": "Wine and Other Alcoholic Beverage Manufacturing",
    "index": "Wine vinegar manufacturing"
  },
  {
    "code": "1214",
    "description": "Wine and Other Alcoholic Beverage Manufacturing",
    "index": "Wine-based fruit drink 'cooler' manufacturing"
  },
  {
    "code": "2291",
    "description": "Spring and Wire Product Manufacturing",
    "index": "Wire mesh manufacturing (except reinforcing mesh)"
  },
  {
    "code": "2291",
    "description": "Spring and Wire Product Manufacturing",
    "index": "Wire netting manufacturing"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Wire netting wholesaling"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Wire or cable wholesaling (except electric cable)"
  },
  {
    "code": "2431",
    "description": "Electric Cable and Wire Manufacturing",
    "index": "Wire or cable, electric, manufacturing"
  },
  {
    "code": "2291",
    "description": "Spring and Wire Product Manufacturing",
    "index": "Wire product manufacturing n.e.c."
  },
  {
    "code": "2499",
    "description": "Other Machinery and Equipment Manufacturing n.e.c.",
    "index": "Wire working machinery manufacturing"
  },
  {
    "code": "3499",
    "description": "Other Machinery and Equipment Wholesaling n",
    "index": "Wire working machinery or equipment wholesaling"
  },
  {
    "code": "2142",
    "description": "Aluminium Rolling, Drawing, Extruding",
    "index": "Wire, aluminium, manufacturing"
  },
  {
    "code": "2149",
    "description": "Other Basic Non-Ferrous Metal Product Manufacturing",
    "index": "Wire, non-ferrous metal, manufacturing (except stranded, braided or insulated or from aluminium)"
  },
  {
    "code": "2133",
    "description": "Copper, Silver, Lead, and Zinc Smelting and Refining",
    "index": "Wirebar, copper, manufacturing"
  },
  {
    "code": "5802",
    "description": "Other Telecommunications Network Operation",
    "index": "Wireless telecommunications network operation"
  },
  {
    "code": "1351",
    "description": "Clothing Manufacturing",
    "index": "Women's and girls' wear manufacturing"
  },
  {
    "code": "8401",
    "description": "Hospitals (except Psychiatric Hospitals)",
    "index": "Women's hospital"
  },
  {
    "code": "9559",
    "description": "Other Interest Group Services n.e.c.",
    "index": "Women's interest group association operation"
  },
  {
    "code": "1492",
    "description": "Wooden Structural Fittings and Components Manufacturing",
    "index": "Wood or wood-framed door manufacturing"
  },
  {
    "code": "1499",
    "description": "Other Wood Product Manufacturing n.e.c.",
    "index": "Wood product manufacturing n.e.c."
  },
  {
    "code": "1510",
    "description": "Pulp, Paper and Paperboard Manufacturing",
    "index": "Wood pulp manufacturing"
  },
  {
    "code": "1812",
    "description": "Basic Organic Chemical Manufacturing",
    "index": "Wood tar manufacturing"
  },
  {
    "code": "1499",
    "description": "Other Wood Product Manufacturing n.e.c.",
    "index": "Wood turning"
  },
  {
    "code": "3242",
    "description": "Carpentry Services",
    "index": "Wooden flooring installation"
  },
  {
    "code": "1413",
    "description": "Timber Resawing and Dressing",
    "index": "Wooden flooring manufacturing (solid timber only)"
  },
  {
    "code": "3242",
    "description": "Carpentry Services",
    "index": "Wooden formwork erection"
  },
  {
    "code": "3242",
    "description": "Carpentry Services",
    "index": "Wooden kitchen cabinet installation"
  },
  {
    "code": "1492",
    "description": "Wooden Structural Fittings and Components Manufacturing",
    "index": "Wooden kitchen cabinet manufacturing"
  },
  {
    "code": "3242",
    "description": "Carpentry Services",
    "index": "Wooden roof truss installation"
  },
  {
    "code": "1492",
    "description": "Wooden Structural Fittings and Components Manufacturing",
    "index": "Wooden structural component/fitting manufacturing"
  },
  {
    "code": "1492",
    "description": "Wooden Structural Fittings and Components Manufacturing",
    "index": "Wood-framed window manufacturing"
  },
  {
    "code": "2463",
    "description": "Machine Tool and Parts Manufacturing",
    "index": "Woodworking machinery manufacturing n.e.c."
  },
  {
    "code": "3419",
    "description": "Other Specialised Industrial Machinery and Equipment Wholesaling",
    "index": "Woodworking machinery or equipment wholesaling"
  },
  {
    "code": "4231",
    "description": "Hardware and Building Supplies Retailing",
    "index": "Woodworking tool retailing"
  },
  {
    "code": "3339",
    "description": "Other Hardware Goods Wholesaling",
    "index": "Woodworking tool wholesaling"
  },
  {
    "code": "3800",
    "description": "Commission Based Wholesaling",
    "index": "Wool broking"
  },
  {
    "code": "0529",
    "description": "Other Agriculture and Fishing Support Services",
    "index": "Wool classing (including reclassing and bulk classing)"
  },
  {
    "code": "1311",
    "description": "Wool Scouring",
    "index": "Wool grease manufacturing"
  },
  {
    "code": "0141",
    "description": "Sheep Farming (Specialised)",
    "index": "Wool growing"
  },
  {
    "code": "5309",
    "description": "Other Warehousing and Storage Services",
    "index": "Wool storage service"
  },
  {
    "code": "6925",
    "description": "Scientific Testing and Analysis Services",
    "index": "Wool testing service"
  },
  {
    "code": "1311",
    "description": "Wool Scouring",
    "index": "Wool wax manufacturing"
  },
  {
    "code": "3311",
    "description": "Wool Wholesaling",
    "index": "Wool wholesaling"
  },
  {
    "code": "1311",
    "description": "Wool Scouring",
    "index": "Wool, carded or combed, manufacturing"
  },
  {
    "code": "1333",
    "description": "Cut and Sewn Textile Product Manufacturing",
    "index": "Woollen textile furnishing manufacturing"
  },
  {
    "code": "1199",
    "description": "Other Food Products Manufacturing n.e.c.",
    "index": "Worcestershire sauce manufacturing"
  },
  {
    "code": "7292",
    "description": "Document Preparation Services",
    "index": "Word processing service"
  },
  {
    "code": "4251",
    "description": "Clothing Retailing",
    "index": "Work clothing retailing"
  },
  {
    "code": "6322",
    "description": "General Insurance",
    "index": "Worker's compensation insurance provision"
  },
  {
    "code": "1351",
    "description": "Clothing Manufacturing",
    "index": "Workwear manufacturing"
  },
  {
    "code": "0199",
    "description": "Other Livestock Farming n.e.c.",
    "index": "Worm farming"
  },
  {
    "code": "1312",
    "description": "Natural Fibre Textile Manufacturing",
    "index": "Woven fabric, cotton, manufacturing"
  },
  {
    "code": "1312",
    "description": "Natural Fibre Textile Manufacturing",
    "index": "Woven fabric, woollen or worsted wool, manufacturing"
  },
  {
    "code": "2291",
    "description": "Spring and Wire Product Manufacturing",
    "index": "Woven wire product manufacturing (except mattress supports)"
  },
  {
    "code": "9002",
    "description": "Creative Artists, Musicians, Writers and Performers",
    "index": "Writing (including poetry and comedy)"
  },
  {
    "code": "1916",
    "description": "Paint and Coatings Manufacturing",
    "index": "Writing ink manufacturing"
  },
  {
    "code": "4272",
    "description": "Stationery Goods Retailing",
    "index": "Writing material retailing"
  },
  {
    "code": "1811",
    "description": "Industrial Gases Manufacturing",
    "index": "Xenon gas manufacturing"
  },
  {
    "code": "8520",
    "description": "Pathology and Diagnostic Imaging Services",
    "index": "X-ray clinic service"
  },
  {
    "code": "3491",
    "description": "Professional and Scientific Goods Wholesaling",
    "index": "X-ray equipment or film wholesaling"
  },
  {
    "code": "0203",
    "description": "Onshore Aquaculture",
    "index": "Yabby farming (pond or tank)"
  },
  {
    "code": "9112",
    "description": "Sport and Physical Recreation Clubs and Sports Professionals",
    "index": "Yacht club operation"
  },
  {
    "code": "2392",
    "description": "Boatbuilding and Repair Services",
    "index": "Yacht construction"
  },
  {
    "code": "4245",
    "description": "Marine Equipment Retailing",
    "index": "Yacht retailing"
  },
  {
    "code": "4214",
    "description": "Manchester and Other Textile Goods Retailing",
    "index": "Yarn retailing"
  },
  {
    "code": "1312",
    "description": "Natural Fibre Textile Manufacturing",
    "index": "Yarn, cotton, flax or silk, manufacturing"
  },
  {
    "code": "1313",
    "description": "Synthetic Fibre Textile Manufacturing",
    "index": "Yarn, elastic or elastomeric, manufacturing"
  },
  {
    "code": "1313",
    "description": "Synthetic Fibre Textile Manufacturing",
    "index": "Yarn, synthetic fibre, manufacturing"
  },
  {
    "code": "1312",
    "description": "Natural Fibre Textile Manufacturing",
    "index": "Yarn, woollen, manufacturing"
  },
  {
    "code": "3711",
    "description": "Textile Product Wholesaling",
    "index": "Yarns wholesaling"
  },
  {
    "code": "1199",
    "description": "Other Food Products Manufacturing n.e.c.",
    "index": "Yeast or yeast extract manufacturing"
  },
  {
    "code": "3609",
    "description": "Other Grocery Wholesaling",
    "index": "Yeast wholesaling"
  },
  {
    "code": "1133",
    "description": "Cheese and Other Dairy Product Manufacturing",
    "index": "Yoghurt manufacturing"
  },
  {
    "code": "9559",
    "description": "Other Interest Group Services n.e.c.",
    "index": "Youth club/association (including girl guides and scouts) operation"
  },
  {
    "code": "4400",
    "description": "Accommodation",
    "index": "Youth hostel operation"
  },
  {
    "code": "8790",
    "description": "Other Social Assistance Services",
    "index": "Youth welfare service"
  },
  {
    "code": "0990",
    "description": "Other Non-Metallic Mineral Mining and Quarrying",
    "index": "Zeolite mining"
  },
  {
    "code": "0807",
    "description": "Silver-Lead-Zinc Ore Mining",
    "index": "Zinc ore mining"
  },
  {
    "code": "1813",
    "description": "Basic Inorganic Chemical Manufacturing",
    "index": "Zinc oxide manufacturing"
  },
  {
    "code": "1813",
    "description": "Basic Inorganic Chemical Manufacturing",
    "index": "Zinc peroxide manufacturing"
  },
  {
    "code": "2133",
    "description": "Copper, Silver, Lead, and Zinc Smelting and Refining",
    "index": "Zinc smelting or refining"
  },
  {
    "code": "2599",
    "description": "Other Manufacturing n.e.c.",
    "index": "Zipper manufacturing"
  },
  {
    "code": "0805",
    "description": "Mineral Sand Mining",
    "index": "Zircon sand mining"
  },
  {
    "code": "2029",
    "description": "Other Ceramic Product Manufacturing",
    "index": "Zirconia, ceramic, manufacturing"
  },
  {
    "code": "8921",
    "description": "Zoological and Botanic Gardens Operation",
    "index": "Zoological park or garden operation"
  },
  {
    "code": ""
  }
];

  return {
    division : division,
    structure : structure,
    subdivision : subdivision,
    group : group,
    classes : classes,
    activities : activities
  }
})();
