var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "273000",
        "ok": "272993",
        "ko": "7"
    },
    "minResponseTime": {
        "total": "15",
        "ok": "15",
        "ko": "24"
    },
    "maxResponseTime": {
        "total": "7096",
        "ok": "1071",
        "ko": "7096"
    },
    "meanResponseTime": {
        "total": "22",
        "ok": "22",
        "ko": "1038"
    },
    "standardDeviation": {
        "total": "19",
        "ok": "14",
        "ko": "2473"
    },
    "percentiles1": {
        "total": "20",
        "ok": "20",
        "ko": "27"
    },
    "percentiles2": {
        "total": "22",
        "ok": "22",
        "ko": "36"
    },
    "percentiles3": {
        "total": "29",
        "ok": "29",
        "ko": "4980"
    },
    "percentiles4": {
        "total": "39",
        "ok": "39",
        "ko": "6673"
    },
    "group1": {
        "name": "t < 30 ms",
        "count": 259669,
        "percentage": 95
    },
    "group2": {
        "name": "30 ms < t < 50 ms",
        "count": 12259,
        "percentage": 4
    },
    "group3": {
        "name": "t > 50 ms",
        "count": 1065,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 7,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "149.099",
        "ok": "149.095",
        "ko": "0.004"
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
        "total": "273000",
        "ok": "272993",
        "ko": "7"
    },
    "minResponseTime": {
        "total": "15",
        "ok": "15",
        "ko": "24"
    },
    "maxResponseTime": {
        "total": "7096",
        "ok": "1071",
        "ko": "7096"
    },
    "meanResponseTime": {
        "total": "22",
        "ok": "22",
        "ko": "1038"
    },
    "standardDeviation": {
        "total": "19",
        "ok": "14",
        "ko": "2473"
    },
    "percentiles1": {
        "total": "20",
        "ok": "20",
        "ko": "27"
    },
    "percentiles2": {
        "total": "22",
        "ok": "22",
        "ko": "36"
    },
    "percentiles3": {
        "total": "29",
        "ok": "29",
        "ko": "4980"
    },
    "percentiles4": {
        "total": "39",
        "ok": "39",
        "ko": "6673"
    },
    "group1": {
        "name": "t < 30 ms",
        "count": 259669,
        "percentage": 95
    },
    "group2": {
        "name": "30 ms < t < 50 ms",
        "count": 12259,
        "percentage": 4
    },
    "group3": {
        "name": "t > 50 ms",
        "count": 1065,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 7,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "149.099",
        "ok": "149.095",
        "ko": "0.004"
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
