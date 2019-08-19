var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "579000",
        "ok": "576339",
        "ko": "2661"
    },
    "minResponseTime": {
        "total": "16",
        "ok": "16",
        "ko": "28"
    },
    "maxResponseTime": {
        "total": "9348",
        "ok": "9348",
        "ko": "7163"
    },
    "meanResponseTime": {
        "total": "179",
        "ok": "171",
        "ko": "1978"
    },
    "standardDeviation": {
        "total": "521",
        "ok": "501",
        "ko": "1192"
    },
    "percentiles1": {
        "total": "51",
        "ok": "51",
        "ko": "1693"
    },
    "percentiles2": {
        "total": "79",
        "ok": "79",
        "ko": "2494"
    },
    "percentiles3": {
        "total": "1049",
        "ok": "909",
        "ko": "4165"
    },
    "percentiles4": {
        "total": "2813",
        "ok": "2747",
        "ko": "6237"
    },
    "group1": {
        "name": "t < 30 ms",
        "count": 107110,
        "percentage": 18
    },
    "group2": {
        "name": "30 ms < t < 50 ms",
        "count": 180247,
        "percentage": 31
    },
    "group3": {
        "name": "t > 50 ms",
        "count": 288982,
        "percentage": 50
    },
    "group4": {
        "name": "failed",
        "count": 2661,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "567.091",
        "ok": "564.485",
        "ko": "2.606"
    }
},
contents: {
"req_-12412619-12779-1aa91": {
        type: "REQUEST",
        name: "[12412619,12779795,13308688,13224425,18853933,12855962,13217372,13175299,13629211,16872516,13561202,15232429,13223852,12855911,13223887,82001568,14073112,15814710,13224062,12508901,81960853,18877847,82001565,13308354,13151211]",
path: "[12412619,12779795,13308688,13224425,18853933,12855962,13217372,13175299,13629211,16872516,13561202,15232429,13223852,12855911,13223887,82001568,14073112,15814710,13224062,12508901,81960853,18877847,82001565,13308354,13151211]",
pathFormatted: "req_-12412619-12779-1aa91",
stats: {
    "name": "[12412619,12779795,13308688,13224425,18853933,12855962,13217372,13175299,13629211,16872516,13561202,15232429,13223852,12855911,13223887,82001568,14073112,15814710,13224062,12508901,81960853,18877847,82001565,13308354,13151211]",
    "numberOfRequests": {
        "total": "579000",
        "ok": "576339",
        "ko": "2661"
    },
    "minResponseTime": {
        "total": "16",
        "ok": "16",
        "ko": "28"
    },
    "maxResponseTime": {
        "total": "9348",
        "ok": "9348",
        "ko": "7163"
    },
    "meanResponseTime": {
        "total": "179",
        "ok": "171",
        "ko": "1978"
    },
    "standardDeviation": {
        "total": "521",
        "ok": "501",
        "ko": "1192"
    },
    "percentiles1": {
        "total": "51",
        "ok": "51",
        "ko": "1693"
    },
    "percentiles2": {
        "total": "79",
        "ok": "79",
        "ko": "2494"
    },
    "percentiles3": {
        "total": "1049",
        "ok": "909",
        "ko": "4165"
    },
    "percentiles4": {
        "total": "2813",
        "ok": "2747",
        "ko": "6237"
    },
    "group1": {
        "name": "t < 30 ms",
        "count": 107110,
        "percentage": 18
    },
    "group2": {
        "name": "30 ms < t < 50 ms",
        "count": 180247,
        "percentage": 31
    },
    "group3": {
        "name": "t > 50 ms",
        "count": 288982,
        "percentage": 50
    },
    "group4": {
        "name": "failed",
        "count": 2661,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "567.091",
        "ok": "564.485",
        "ko": "2.606"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
