var listImg=new Array();
var current=null;
var count=0;
var remainingTime;
var flag='';
var run;
listImg[0]="images/Lol_img1.jpg";
listImg[1]="images/Lol_img2.jpg";
listImg[2]="images/Lol_img1.jpg";
listImg[3]="images/Lol_img2.jpg";
listImg[4]="images/Lol_img3.jpg";
listImg[5]="images/Lol_img4.jpg";
listImg[6]="images/Lol_img3.jpg";
listImg[7]="images/Lol_img4.jpg";
listImg[8]="images/Lol_img5.jpg";
listImg[9]="images/Lol_img6.png";
listImg[10]="images/Lol_img5.jpg";
listImg[11]="images/Lol_img6.png";
listImg[12]="images/Lol_img7.jpg";
listImg[13]="images/Lol_img8.png";
listImg[14]="images/Lol_img7.jpg";
listImg[15]="images/Lol_img8.png";
listImg[16]="images/Lol_img9.png";
listImg[17]="images/Lol_img10.png";
listImg[18]="images/Lol_img9.png";
listImg[19]="images/Lol_img10.png";

function getModal(){
	//start Modal
	/*
		var st=document.getElementById("start");
		var modal=document.getElementById("defaut_modals");
		var main=document.getElementById("container");
		st.addEventListener('click',function(){
		modal.style.display="none";
		main.style.display="block";
	});
	*/
		
	$('#defaut_modals').fadeOut(500);
	$('#container').fadeIn(1500);
	$('#clock').fadeIn(1500);
}





function flip(card){
	
		$(card).toggleClass('flipped');
				
		if(!current)
		{
			current=$(card);
			console.log(current);
			
		}
			else {
				console.log($(card).attr('data'));
				if(current.attr('data') != $(card).attr('data'))
				{
					console.log("false");
					setTimeout(function(){
						$(card).toggleClass('flipped');
						current.toggleClass('flipped');
						current=null;
					},500);
				}
				else 
				{
					console.log("true");
					setTimeout(function(){
						$(card).css('opacity','0');
						current.css('opacity','0');
						current=null;
						count++;
						console.log(count);
						if(count==10){
							clearInterval(run);
							run=null;
							$('#win_modals').fadeIn();
							$('#container').fadeOut();
						

						}
					},400);
						
				}
			}

}

window.addEventListener("load",function(){	
			var front=$('.front');
			var card=$('.card');
			var back=$('.back');
			var memory_arr=new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19);
			var index;
			
			var temp;
			
			for(var i=0;i<front.length;i++)
			{	
				
				index=Math.floor(Math.random()*front.length);
				temp=memory_arr[i];
				memory_arr[i]=memory_arr[index];
				memory_arr[index]=temp;
			}
			/*
			for (var i =0; i <front.length; i++) {		
				var html="<img src='"+listImg[memory_arr[i]]+"'>";	
				front[i].insertAdjacentHTML('beforeend',html);	//thay cho innerHTMl
			}*/
			var html='';
			for(var i=0;i<card.length;i++)
			{
				 html+='<div class="card" onclick="flip(this)" data="'+listImg[memory_arr[i]]+'">'+
				'<div class="front">'+'<img src="'+listImg[memory_arr[i]]+'"></div>'+
				'<div class="back"><img src="images/img_back.png"></div></div> ';
			}
			$('#container').html(html);
			$('#ez-m').click(function()
			{
				remainingTime=120;
			});
			$('#nm-m').click(function()
			{
				remainingTime=90;
			});
			$('#cr-m').click(function()
			{
				remainingTime=50;
			});

			 run=setInterval(function(){	
			 	remainingTime--;
			 	console.log(remainingTime);			
			 	$('#clock').html(remainingTime);
				if(remainingTime===0)
				{
					clearInterval(run);
					run=null;
					$('#container').fadeOut();
					$('#lose_modals').fadeIn(500);	
				}
			},1000);
			
			
			

},false);




