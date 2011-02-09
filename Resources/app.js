/*

The basic purpose of this script is to provoke the app to show the Network read error produced by the Titanium AudioPlayer class. This error shows up randomly and has in my other apps made the app useless as it becomes inresponsive, variables get lost and animation stops working.

The reason I made this is because the script will save you the trouble of having to press play until you get the error (although it could happen the very first time it tries to play, but like I said, it's appears randomly). Also the script will not stop once the error appears, becayse there is no way of knowing wheter it occured or not.

*/



// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});

var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});


var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);

var streamer = Ti.Media.createAudioPlayer({
	allowBackground: true
});

function get_random_url(){
	var radioData = [
		{ channel:"NRK P1", url:'http://lyd.nrk.no/nrk_radio_p1_ostlandssendingen_mp3_m'},
		{ channel:"NRK P2", url:'http://lyd.nrk.no/nrk_radio_p2_mp3_m'},
		{ channel:"NRK P3", url:'http://lyd.nrk.no/nrk_radio_p3_mp3_m'},
		{ channel:"NRK MP3", url:'http://lyd.nrk.no/nrk_radio_mp3_mp3_m'},
		{ channel:"P4", url:'http://mms-live.online.no/p4_norge'}
	];
	
	return radioData[Math.floor(Math.random()*5)];
}

setInterval(function(){
	//Break the streamer
	var stream = get_random_url();
	
	label1.text = stream.channel;
	
	streamer.url = stream.url;
	
	streamer.start();
	
},10000);


//
//  add tabs
//
tabGroup.addTab(tab1); 


// open tab group
tabGroup.open();
