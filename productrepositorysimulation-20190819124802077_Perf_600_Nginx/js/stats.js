var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "579000",
        "ok": "579000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "12",
        "ok": "12",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3296",
        "ok": "3296",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "19",
        "ok": "19",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "37",
        "ok": "37",
        "ko": "-"
    },
    "percentiles1": {
        "total": "17",
        "ok": "17",
        "ko": "-"
    },
    "percentiles2": {
        "total": "19",
        "ok": "19",
        "ko": "-"
    },
    "percentiles3": {
        "total": "26",
        "ok": "26",
        "ko": "-"
    },
    "percentiles4": {
        "total": "36",
        "ok": "36",
        "ko": "-"
    },
    "group1": {
        "name": "t < 30 ms",
        "count": 562987,
        "percentage": 97
    },
    "group2": {
        "name": "30 ms < t < 50 ms",
        "count": 14257,
        "percentage": 2
    },
    "group3": {
        "name": "t > 50 ms",
        "count": 1756,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "567.091",
        "ok": "567.091",
        "ko": "-"
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
        "ok": "579000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "12",
        "ok": "12",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3296",
        "ok": "3296",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "19",
        "ok": "19",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "37",
        "ok": "37",
        "ko": "-"
    },
    "percentiles1": {
        "total": "17",
        "ok": "17",
        "ko": "-"
    },
    "percentiles2": {
        "total": "19",
        "ok": "19",
        "ko": "-"
    },
    "percentiles3": {
        "total": "26",
        "ok": "26",
        "ko": "-"
    },
    "percentiles4": {
        "total": "36",
        "ok": "36",
        "ko": "-"
    },
    "group1": {
        "name": "t < 30 ms",
        "count": 562987,
        "percentage": 97
    },
    "group2": {
        "name": "30 ms < t < 50 ms",
        "count": 14257,
        "percentage": 2
    },
    "group3": {
        "name": "t > 50 ms",
        "count": 1756,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "567.091",
        "ok": "567.091",
        "ko": "-"
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
