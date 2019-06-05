$(document).ready(function() {
    initialize();
    // peersData();
    // setInterval(initialize, 60000);
});

function initialize() {

        // $.getJSON('https://storage-testnet.shiftproject.com/peers?callback=?', function(response){
        //     if(!response.data){
        //         console.log("Error, can't retrieve data"); 
        //         console.log(response.data);  
        //     } else {
        //         console.log(response.data);
        
        //         var peers = response.data;
        //         var offline_count = 0;
        //         var online_count = 0;
        //         var i = 0;
        
        //         peers.sort(function(x, y) {
        //             // true values first
        //             return (x["Online"] === y["Online"])? 0 : x["Online"]? -1 : 1;
        //             // false values first
        //             // return (x === y)? 0 : x? 1 : -1;
        //         });
        
        //         for (i in peers) {
        //             if (peers[i]["Online"] == false) {
        //                 class_status = "class='danger'";
        //                 offline_count++;
        //             }
        //             if (peers[i]["Online"] == true) {
        //                 class_status = "";
        //                 online_count++;
        //             }
        //             var table_row = `<tr ${class_status}>` +
        //                 "<td id='peer" + i + `' class="text-center">${Number(i) + 1}</td>` +
        //                 "<td id='peer" + i + `_host'>${peers[i]["Host"]}</td>` +
        //                 "<td id='peer" + i + `_status' class='text-center'>${peers[i]["Online"]}</td>` +
        //                 "<td id='peer" + i + `_port'>${peers[i]["Port"]}</td>` +
        //                 "<td id='peer" + i + `_public_key'>${peers[i]["PublicKey"]}</td>` +
        //                 "<td id='peer" + i + `_version'>${peers[i]["Version"]}</td>` +
        //                 "</tr>";
        //             $("#nodeTable").append(table_row);
        //         }
        //         $("#online_peers").text(online_count);
        //         $("#offline_peers").text(offline_count);
        //     }
        // });

    // $.ajax({
    //     url: 'https://storage-testnet.shiftproject.com/peers?callback=?',
    //     type: "GET",
    //     dataType: 'jsonp',
    //     crossDomain: true,
    //     cache: false,
    //     jsonpCallback: 'peersData'
    // });

    
    // $.ajax({
    //     type: 'GET',    
    //     url: 'https://storage-testnet.shiftproject.com/peers?callback=?',
    //     data:{todo:"jsonp"},
    //     dataType: "jsonp",
    //     crossDomain: true,          
    //     cache:false, 
    //     success: peersData,
    //     error: function(jqXHR, textStatus, errorThrown){
    //       alert(errorThrown);
    //     }
    // });



    // $.getJSON("https://storage-testnet.shiftproject.com/peers?callback=?", function(result){
    //     //response data are now in the result variable
    //     alert(result);
    // });

    $.ajax({ 
        type: 'GET', 
        url: 'https://cors-anywhere.herokuapp.com/storage-testnet.shiftproject.com/peers',
        dataType: 'json',
        success: function (data) {
            if(!data){
                console.log("Error, can't retrieve data");   
            } else {
                console.log(data)

                var peers = data;
                var offline_count = 0;
                var online_count = 0;
                var i = 0;
        
                peers.sort(function(x, y) {
                    // true values first
                    return (x["Online"] === y["Online"])? 0 : x["Online"]? -1 : 1;
                    // false values first
                    // return (x === y)? 0 : x? 1 : -1;
                });
        
                for (i in peers) {
                    if (peers[i]["Online"] == false) {
                        class_status = "class='danger'";
                        offline_count++;
                    }
                    if (peers[i]["Online"] == true) {
                        class_status = "";
                        online_count++;
                    }
                    var table_row = `<tr ${class_status}>` +
                        "<td id='peer" + i + `' class="text-center">${Number(i) + 1}</td>` +
                        "<td id='peer" + i + `_host'>${peers[i]["Host"]}</td>` +
                        "<td id='peer" + i + `_status' class='text-center'>${peers[i]["Online"]}</td>` +
                        "<td id='peer" + i + `_port'>${peers[i]["Port"]}</td>` +
                        "<td id='peer" + i + `_public_key'>${peers[i]["PublicKey"]}</td>` +
                        "<td id='peer" + i + `_version'>${peers[i]["Version"]}</td>` +
                        "</tr>";
                    $("#nodeTable").append(table_row);
                }
                $("#online_peers").text(online_count);
                $("#offline_peers").text(offline_count);
            }
        },
        error: function (request, status, error) {
            console.log('Error!');
        }
    });

    // $.getJSON("peers.json", function(json) {
    //     var peers = json;
    //     var offline_count = 0;
    //     var online_count = 0;
    //     var i = 0;

    //     peers.sort(function(x, y) {
    //         // true values first
    //         return (x["Online"] === y["Online"])? 0 : x["Online"]? -1 : 1;
    //         // false values first
    //         // return (x === y)? 0 : x? 1 : -1;
    //     });

    //     for (i in peers) {
    //         if (peers[i]["Online"] == false) {
    //             class_status = "class='danger'";
    //             offline_count++;
    //         }
    //         if (peers[i]["Online"] == true) {
    //             class_status = "";
    //             online_count++;
    //         }
    //         var table_row = `<tr ${class_status}>` +
    //             "<td id='peer" + i + `' class="text-center">${Number(i) + 1}</td>` +
    //             "<td id='peer" + i + `_host'>${peers[i]["Host"]}</td>` +
    //             "<td id='peer" + i + `_status'>${peers[i]["Online"]}</td>` +
    //             "<td id='peer" + i + `_port'>${peers[i]["Port"]}</td>` +
    //             "<td id='peer" + i + `_public_key'>${peers[i]["PublicKey"]}</td>` +
    //             "<td id='peer" + i + `_version'>${peers[i]["Version"]}</td>` +
    //             "</tr>";
    //         $("#nodeTable").append(table_row);
    //     }
    //     $("#online_peers").text(online_count);
    //     $("#offline_peers").text(offline_count);

    // });
}

// var peersData = function (data) {
//     if(!data){
//         console.log("Error, can't retrieve data");   
//     } else {
//         console.log(data)

//         var peers = data;
//         var offline_count = 0;
//         var online_count = 0;
//         var i = 0;

//         peers.sort(function(x, y) {
//             // true values first
//             return (x["Online"] === y["Online"])? 0 : x["Online"]? -1 : 1;
//             // false values first
//             // return (x === y)? 0 : x? 1 : -1;
//         });

//         for (i in peers) {
//             if (peers[i]["Online"] == false) {
//                 class_status = "class='danger'";
//                 offline_count++;
//             }
//             if (peers[i]["Online"] == true) {
//                 class_status = "";
//                 online_count++;
//             }
//             var table_row = `<tr ${class_status}>` +
//                 "<td id='peer" + i + `' class="text-center">${Number(i) + 1}</td>` +
//                 "<td id='peer" + i + `_host'>${peers[i]["Host"]}</td>` +
//                 "<td id='peer" + i + `_status' class='text-center'>${peers[i]["Online"]}</td>` +
//                 "<td id='peer" + i + `_port'>${peers[i]["Port"]}</td>` +
//                 "<td id='peer" + i + `_public_key'>${peers[i]["PublicKey"]}</td>` +
//                 "<td id='peer" + i + `_version'>${peers[i]["Version"]}</td>` +
//                 "</tr>";
//             $("#nodeTable").append(table_row);
//         }
//         $("#online_peers").text(online_count);
//         $("#offline_peers").text(offline_count);
//     }
// }   