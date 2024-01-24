import { AdminDataType, Item, SalesType, Total } from "../Types";
import { IoCalendarOutline } from "react-icons/io5";
import { IoMdArrowDropup } from "react-icons/io";

// Admin Login form data for authorization
export const adminData: AdminDataType = {
  email: "admin@gmail.com",
  password: "123456",
};

// sales data in admin dashboard panel
export const salesDetails: SalesType[] = [
  {
    title: "Total sales",
    Icon: IoCalendarOutline,
    value: "365.61",
    color: "text-sky-500",
    currency: "AED",
    footer: {
      Icon: IoMdArrowDropup,
      value: "8 % than yesterday",
      color: "text-green-300",
    },
  },
  {
    title: "Top sale time",
    value: "322.61",
    color: "text-yellow-300",
    currency: "AED",
    footer: { value: "12 pm - 3 pm", color: "text-white" },
  },
  {
    title: "Door delivery sales",
    value: "322.61",
    color: "text-orange-400",
    currency: "AED",
    footer: { value: "Bills 08", color: "text-white" },
  },
  {
    title: "Bill & Pax",
    value: "11/25",
    color: "text-red-500",
  },
  {
    title: "Void",
    value: "0/0",
    color: "text-blue-300",
    footer: {
      value: "Bills/Items",
      color: "text-white",
    },
  },
];

// Sales chart data
export const salesChartData = [
  ["Dining", "Takeaway", "Delivery", "Talabat", "Zomato", "Swiggy"],
  [94, 86, 68, 55, 51, 45],
];

// Sales purchase and payment data
export const total: Total = {
  purchase: { cash: "322.61", credit: "322.61" },
  payment: { cash: "322.61", cheque: "322.61" },
};

// Price data in daily basis for area chart
export const price: { x: string; y: number }[] = [
  { x: "1", y: 1000 },
  { x: "2", y: 1500 },
  { x: "3", y: 2000 },
  { x: "4", y: 2300 },
  { x: "5", y: 2100 },
  { x: "6", y: 1800 },
  { x: "7", y: 992 },
  { x: "8", y: 990 },
  { x: "9", y: 1200 },
  { x: "10", y: 500 },
];

// Top selling product data
export const topSailedProduct: Item[] = [
  { item: "Chicken sizzler", color: "bg-blue-500", price: "55.5 AED/5 pc" },
  { item: "Special biriyani", color: "bg-yellow-500", price: "35 AED/2 pc" },
  {
    item: "beef bicol express",
    color: "bg-orange-500",
    price: "29.75 AED/3 pc",
  },
  { item: "beef kafta", color: "bg-red-500", price: "29.75 AED/3 pc" },
  { item: "Beef brisket", color: "bg-violet-500", price: "29.75 AED/3 pc" },
];

// Least selling product data
export const latestSell: Item[] = [
  {
    item: "Open item",
    color: "bg-violet-500",
    price: "55 AED/1 pc",
    percentage: 15,
  },
  {
    item: "Delivery challan",
    color: "bg-red-500",
    price: "56 AED/5 pc",
    percentage: 20,
  },
  {
    item: "Sprite",
    color: "bg-orange-500",
    price: "70 AED/11 pc",
    percentage: 30,
  },
  {
    item: "Budget meals",
    color: "bg-yellow-500",
    price: "44 AED/15 pc",
    percentage: 40,
  },
  {
    item: "Goto service",
    color: "bg-blue-500",
    price: "33 AED/22 pc",
    percentage: 90,
  },
];

// Total amount data for donut chart
export const chartData: number[] = [15, 30, 25, 40];

export const salesChartData1:number[][] =[
  [1327359600000, 1300],
  [1327446000000, 1250],
  [1327532400000, 1250],
  [1327618800000, 1230],
  [1327878000000, 1300],
  [1327964400000, 1400],
  [1328050800000, 1500],
  [1328223600000, 1450],
  [1328482800000, 1480],
  [1328569200000, 1500],
  [1328655600000, 1532],
  [1328742000000, 1600],
  [1328828400000, 1680],
  [1329087600000, 1600],
  [1329174000000, 1611],
  [1329260400000, 1600],
  [1329346800000, 1620],
  [1329433200000, 1630],
  [1329778800000, 1635],
  [1329865200000, 1630],
  [1329951600000, 1625],
  [1330038000000, 1615],
  [1330297200000, 2000],
  [1330383600000, 2000],
  [1330470000000, 2000],
  [1330556400000, 2000],
  [1330642800000, 2000],
  [1330902000000, 2000],
  [1330988400000, 2000],
  [1331074800000, 2300],
  [1331161200000, 2000],
  [1331247600000, 2000],
  [1331506800000, 2000],
  [1331593200000, 2000],
  [1331679600000, 2000],
  [1331766000000, 2000],
  [1331852400000, 2000],
  [1332111600000, 2000],
  [1332198000000, 2000],
  [1332284400000, 2000],
  [1332370800000, 2000],
  [1332457200000, 2000],
  [1332712800000, 2000],
  [1332799200000, 2000],
  [1332885600000, 2000],
  [1332972000000, 2000],
  [1333058400000, 2000],
  [1333317600000, 2000],
  [1333404000000, 2000],
  [1333490400000, 2000],
  [1333576800000, 2000],
  [1333922400000, 2000],
  [1334008800000, 2000],
  [1334095200000, 2000],
  [1334181600000, 2000],
  [1334268000000, 2000],
  [1334527200000, 2000],
  [1334613600000, 2000],
  [1334700000000, 2000],
  [1334786400000, 2000],
  [1334872800000, 2000],
  [1335132000000, 2000],
  [1335218400000, 2000],
  [1335304800000, 2000],
  [1335391200000, 2000],
  [1335477600000, 2000],
  [1335736800000, 2000],
  [1335823200000, 2000],
  [1335909600000, 2000],
  [1335996000000, 2000],
  [1336082400000, 2000],
  [1336341600000, 2000],
  [1336428000000, 2000],
  [1336514400000, 2000],
  [1336600800000, 2000],
  [1336687200000, 2000],
  [1336946400000, 2000],
  [1337032800000, 2000],
  [1337119200000, 2000],
  [1337205600000, 2000],
  [1337292000000, 2000],
  [1337551200000, 2000],
  [1337637600000, 2000],
  [1337724000000, 2000],
  [1337810400000, 2000],
  [1337896800000, 2000],
  [1338242400000, 2000],
  [1338328800000, 2000],
  [1338415200000, 2000],
  [1338501600000, 2000],
  [1338760800000, 2000],
  [1338847200000, 2000],
  [1338933600000, 2000],
  [1339020000000, 2000],
  [1339106400000, 2000],
  [1339365600000, 2000],
  [1339452000000, 2000],
  [1339538400000, 2000],
  [1339624800000, 2000],
  [1339711200000, 2000],
  [1339970400000, 2000],
  [1340056800000, 2000],
  [1340143200000, 2000],
  [1340229600000, 2000],
  [1340316000000, 2000],
  [1340575200000, 2000],
  [1340661600000, 2000],
  [1340748000000, 2000],
  [1340834400000, 2000],
  [1340920800000, 2000],
  [1341180000000, 2000],
  [1341266400000, 2000],
  [1341439200000, 2000],
  [1341525600000, 2000],
  [1341784800000, 2000],
  [1341871200000, 2000],
  [1341957600000, 2000],
  [1342044000000, 2000],
  [1342130400000, 2000],
  [1342389600000, 2000],
  [1342476000000, 2000],
  [1342562400000, 2000],
  [1342648800000, 2000],
  [1342735200000, 2000],
  [1342994400000, 2000],
  [1343080800000, 2000],
  [1343167200000, 2000],
  [1343253600000, 2000],
  [1343340000000, 2000],
  [1343599200000, 2000],
  [1343685600000, 2000],
  [1343772000000, 2000],
  [1343858400000, 2000],
  [1343944800000, 2000],
  [1344204000000, 2000],
  [1344290400000, 2000],
  [1344376800000, 2000],
  [1344463200000, 2000],
  [1344549600000, 2000],
  [1344808800000, 2000],
  [1344895200000, 2000],
  [1344981600000, 2000],
  [1345068000000, 2000],
  [1345154400000, 2000],
  [1345413600000, 2000],
  [1345500000000, 2000],
  [1345586400000, 2000],
  [1345672800000, 2000],
  [1345759200000, 2000],
  [1346018400000, 2000],
  [1346104800000, 2000],
  [1346191200000, 2000],
  [1346277600000, 2000],
  [1346364000000, 2000],
  [1346709600000, 2000],
  [1346796000000, 2000],
  [1346882400000, 2000],
  [1346968800000, 2000],
  [1347228000000, 2000],
  [1347314400000, 2000],
  [1347400800000, 2000],
  [1347487200000, 2000],
  [1347573600000, 2000],
  [1347832800000, 2000],
  [1347919200000, 2000],
  [1348005600000, 2000],
  [1348092000000, 2000],
  [1348178400000, 2000],
  [1348437600000, 2000],
  [1348524000000, 2000],
  [1348610400000, 2000],
  [1348696800000, 2000],
  [1348783200000, 2000],
  [1349042400000, 2000],
  [1349128800000, 2000],
  [1349215200000, 2000],
  [1349301600000, 2000],
  [1349388000000, 2000],
  [1349647200000, 2000],
  [1349733600000, 2000],
  [1349820000000, 2000],
  [1349906400000, 2000],
  [1349992800000, 2000],
  [1350252000000, 2000],
  [1350338400000, 2000],
  [1350424800000, 2000],
  [1350511200000, 2000],
  [1350597600000, 2000],
  [1350856800000, 2000],
  [1350943200000, 2000],
  [1351029600000, 2000],
  [1351116000000, 2000],
  [1351202400000, 2000],
  [1351638000000, 2000],
  [1351724400000, 2000],
  [1351810800000, 2000],
  [1352070000000, 2000],
  [1352156400000, 2000],
  [1352242800000, 2000],
  [1352329200000, 2000],
  [1352415600000, 2000],
  [1352674800000, 2000],
  [1352761200000, 2000],
  [1352847600000, 2000],
  [1352934000000, 2000],
  [1353020400000, 2000],
  [1353279600000, 2000],
  [1353366000000, 2000],
  [1353452400000, 2000],
  [1353625200000, 2000],
  [1353884400000, 2000],
  [1353970800000, 2000],
  [1354057200000, 2000],
  [1354143600000, 2000],
  [1354230000000, 2000],
  [1354489200000, 2000],
  [1354575600000, 2000],
  [1354662000000, 2000],
  [1354748400000, 2000],
  [1354834800000, 2000],
  [1355094000000, 2000],
  [1355180400000, 2000],
  [1355266800000, 2000],
  [1355353200000, 2000],
  [1355439600000, 2000],
  [1355698800000, 2000],
  [1355785200000, 2000],
  [1355871600000, 2000],
  [1355958000000, 2000],
  [1356044400000, 2000],
  [1356303600000, 2000],
  [1356476400000, 2000],
  [1356562800000, 2000],
  [1356649200000, 2000],
  [1356908400000, 2000],
  [1357081200000, 2000],
  [1357167600000, 2000],
  [1357254000000, 2000],
  [1357513200000, 2000],
  [1357599600000, 2000],
  [1357686000000, 2000],
  [1357772400000, 2000],
  [1357858800000, 2000],
  [1358118000000, 2000],
  [1358204400000, 2000],
  [1358290800000, 2000],
  [1358377200000, 2000],
  [1358463600000, 2000],
  [1358809200000, 2000],
  [1358895600000, 2000],
  [1358982000000, 2000],
  [1359068400000, 2000],
  [1359327600000, 2000],
  [1359414000000, 2000],
  [1359500400000, 2000],
  [1359586800000, 2000],
  [1359673200000, 2000],
  [1359932400000, 2000],
  [1360018800000, 2000],
  [1360105200000, 2000],
  [1360191600000, 2000],
  [1360278000000, 2000],
  [1360537200000, 2000],
  [1360623600000, 2000],
  [1360710000000, 2000],
  [1360796400000, 2000],
  [1360882800000, 2000],
  [1361228400000, 2000],
  [1361314800000, 2000],
  [1361401200000, 2000],
  [1361487600000, 2000],
  [1361746800000, 2000],
  [1361833200000, 2000],
  [1361919600000, 2000],
]

