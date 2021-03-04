setInterval(() => {
    var d=new Date();
    let hour=('0'+d.getHours()).slice(-2);
    let minutes=('0'+d.getMinutes()).slice(-2);
    let seconds=('0'+d.getSeconds()).slice(-2);
    if(hour>12)
    {
        hour=hour-12;
        str1='PM';
    }
    else
    {
        str1='AM'
    }
    document.getElementById('time2').innerHTML=`${hour}:${minutes}:${seconds}`;
    document.getElementById('str1').innerHTML=str1;
}, 1000);
var modal = document.getElementById("myModal");

var btn = document.getElementById("set_alarm");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal1 || event.target == modal || event.target == modal2 || event.target == modal3) {
      modal.style.display = "none";
      modal1.style.display = "none";
      modal2.style.display = "none";
      modal3.style.display = "none";
    }
  }
var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("stopwatch");

var span1 = document.getElementsByClassName("close")[1];

btn1.onclick = function() {
  modal1.style.display = "block";
}

span1.onclick = function() {
  modal1.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal1 || event.target == modal || event.target == modal2 || event.target == modal3) {
      modal.style.display = "none";
      modal1.style.display = "none";
      modal2.style.display = "none";
      modal3.style.display = "none";
    }
  }
var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("custom_time");

var span2 = document.getElementsByClassName("close")[2];

btn2.onclick = function() {
  modal2.style.display = "block";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal1 || event.target == modal || event.target == modal2 || event.target == modal3) {
      modal.style.display = "none";
      modal1.style.display = "none";
      modal2.style.display = "none";
      modal3.style.display = "none";
    }
  }
var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("time_by_country");

var span3 = document.getElementsByClassName("close")[3];

btn3.onclick = function() {
  modal3.style.display = "block";
}

span3.onclick = function() {
  modal3.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal1 || event.target == modal || event.target == modal2 || event.target == modal3) {
    modal.style.display = "none";
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
  }
}
var	clsStopwatch = function() {
    // Private vars
    var	startAt	= 0;	// Time of last start / resume. (0 if not running)
    var	lapTime	= 0;	// Time on the clock when last stopped in milliseconds

    var	now	= function() {
            return (new Date()).getTime(); 
        }; 

    // Public methods
    // Start or resume
    this.start = function() {
            startAt	= startAt ? startAt : now();
        };

    // Stop or pause
    this.stop = function() {
            // If running, update elapsed time otherwise keep it
            lapTime	= startAt ? lapTime + now() - startAt : lapTime;
            startAt	= 0; // Paused
        };

    // Reset
    this.reset = function() {
            lapTime = startAt = 0;
        };

    // Duration
    this.time = function() {
            return lapTime + (startAt ? now() - startAt : 0); 
        };
};

var x = new clsStopwatch();
var $time;
var clocktimer;

function pad(num, size) {
var s = "0000" + num;
return s.substr(s.length - size);
}

function formatTime(time) {
var h = m = s = ms = 0;
var newTime = '';

h = Math.floor( time / (60 * 60 * 1000) );
time = time % (60 * 60 * 1000);
m = Math.floor( time / (60 * 1000) );
time = time % (60 * 1000);
s = Math.floor( time / 1000 );
ms = time % 1000;

newTime = pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s, 2) + ':' + pad(ms, 3);
return newTime;
}

function show() {
$time = document.getElementById('time1');
update();
}

function update() {
$time.innerHTML = formatTime(x.time());
}

function start() {
clocktimer = setInterval("update()", 1);
x.start();
}

function stop() {
x.stop();
clearInterval(clocktimer);
}

function reset() {
stop();
x.reset();
update();
// show();
}
document.getElementById('alarm-btn').addEventListener('click',()=>{
    let d=new Date();
    let hour=d.getHours();
    let minutes=d.getMinutes();
    let user_hour=document.getElementById('hour').value;
    let user_minute=document.getElementById('minute').value;
    if(document.getElementById('am').checked)
    {
        if(hour>11)
        {
            hour=hour-12;
            if(hour==0)
            {
                ts=(24-Math.abs(hour-user_hour))*60*60*1000+(user_minute-minutes)*60*1000;
                audio=new Audio('alarm.mp3');
                setTimeout(() => {
                    audio.play();
                }, ts);
            }
            if(user_hour<hour)
            {
                ts=(12-Math.abs(hour-user_hour))*60*60*1000+(user_minute-minutes)*60*1000;
                audio=new Audio('alarm.mp3');
                setTimeout(() => {
                    audio.play();
                }, ts);
            }
            else
            {
                ts=(Math.abs(hour-user_hour)+12)*60*60*1000+(user_minute-minutes)*60*1000;
                audio=new Audio('alarm.mp3');
                setTimeout(() => {
                    audio.play();
                }, ts);
            }   
        }
        else
        {
            if(user_hour<hour)
            {
                ts=(24-(Math.abs(hour-user_hour)))*60*60*1000+(user_minute-minutes)*60*1000;
                audio=new Audio('alarm.mp3');
                setTimeout(() => {
                    audio.play();
                }, ts);
            }
            else if(user_hour==hour)
            {
                if(user_minute<minutes)
                {
                    ts=(24*60*60*1000)-(user_minute-minutes)*60*1000;
                    audio=new Audio('alarm.mp3');
                    setTimeout(() => {
                        audio.play();
                    }, ts);
                }
                else
                {
                    ts=(Math.abs(minutes-user_minute))*60*1000;
                    audio=new Audio('alarm.mp3');
                    setTimeout(() => {
                        audio.play();
                    }, ts);
                }
            }
            else
            {
                ts=(Math.abs(hour-user_hour))*60*60*1000+(user_minute-minutes)*60*1000;
                audio=new Audio('alarm.mp3');
                setTimeout(() => {
                    audio.play();
                }, ts);
            }
        }
    }
    else
    {
        if(hour>11)
        {
            hour=hour-12;
            if(hour==0)
            {
                if(user_hour==12)
                {
                    ts=(Math.abs(minutes-user_minute))*60*1000;
                    audio=new Audio('alarm.mp3');
                    setTimeout(() => {
                        audio.play();
                    }, ts);
                }
                else
                {
                    ts=(Math.abs(hour-user_hour))*60*60*1000+(user_minute-minutes)*60*1000;
                    audio=new Audio('alarm.mp3');
                    setTimeout(() => {
                        audio.play();
                    }, ts);
                }
            }
            else if(user_hour> hour)
            {
                ts=(Math.abs(hour-user_hour))*60*60*1000+(user_minute-minutes)*60*1000;
                audio=new Audio('alarm.mp3');
                setTimeout(() => {
                    audio.play();
                }, ts);
            }
            else if(user_hour==hour)
            {
                ts=(Math.abs(minutes-user_minute))*60*1000;
                audio=new Audio('alarm.mp3');
                setTimeout(() => {
                    audio.play();
                }, ts);
            }
            else
            {
                ts=(24-Math.abs(hour-user_hour))*60*60*1000+(user_minute-minutes)*60*1000;
                audio=new Audio('alarm.mp3');
                setTimeout(() => {
                    audio.play();
                }, ts);
            }
        }
        else
        {
            if(user_hour<hour)
            {
                ts=(12-(Math.abs(hour-user_hour)))*60*60*1000+(user_minute-minutes)*60*1000;
                audio=new Audio('alarm.mp3');
                setTimeout(() => {
                    audio.play();
                }, ts);
            }
            else if(user_hour==hour)
            {
                ts=(12)*60*60*1000+(user_minute-minutes)*60*1000;
                audio=new Audio('alarm.mp3');
                setTimeout(() => {
                    audio.play();
                }, ts);
            }
            else
            {
                ts=(12+(Math.abs(hour-user_hour)))*60*60*1000+(user_minute-minutes)*60*1000;
                audio=new Audio('alarm.mp3');
                setTimeout(() => {
                    audio.play();
                }, ts);
            }
        }
    }
    document.getElementById('alarm-set').innerHTML='Alarm has been set.';
    setTimeout(() => {
        document.getElementById('alarm-set').innerHTML='';
    }, 4000);  
})
document.querySelector('.change_color').style.display='none';
document.getElementById('colors').addEventListener('click',()=>{
    document.querySelector('.change_color').style.display='flex';
})
document.addEventListener('mouseup',(e)=>{
    let b3=document.querySelector('.change_color');
    if(!b3.contains(e.target))
    {
        b3.style.display='none';
    }
})
document.querySelector('.color-btn').addEventListener('click',()=>{
    let color1=document.getElementById('c_color').value;
    document.getElementById('time2').style.color=color1;
})
document.getElementById('set_time-btn').addEventListener('click',()=>{
    let c_hour=document.getElementById('set_hour').value;
    let c_min=document.getElementById('set_min').value;
    let c_sec=document.getElementById('set_sec').value;
    let n1=c_hour;
    let n2=c_min;
    let n3=c_sec;
    let tm = setInterval(() => {
        if(c_hour>0)
        {
            if(c_min>0)
            {
                document.getElementById('set_hour').value=('0'+n1).slice(-2);
                document.getElementById('set_min').value=('0'+n2).slice(-2);
                document.getElementById('set_sec').value=('0'+n3).slice(-2);
                n3-=1;
                if(n3<0)
                {
                    n3=59;
                    n2-=1;
                }
                if(n2==0)
                {
                    n2=59;
                    n1-=1;
                }
                if(n1==0 && n2==0 && n3<0)
                {
                    clearInterval(tm);
                }
            }
            else
            {
                document.getElementById('set_hour').value=('0'+n1).slice(-2);
                document.getElementById('set_min').value=('0'+n2).slice(-2);
                document.getElementById('set_sec').value=('0'+n3).slice(-2);
                n3-=1;
                if(n3<0)
                {
                    if(n2==0)
                    {
                        n1-=1;
                        n2=59;
                        n3=59;
                    }
                    else
                    {
                        n3=59;
                        n2-=1;
                    }
                }
                if(n2==0)
                {
                    n1-=1;
                    n2=59;
                }
                if(n1==0 && n2==0 && n3<0)
                {
                    clearInterval(tm);
                }
            }
        }
        else
        {
            if(c_min==0)
            {
                document.getElementById('set_hour').value=('0'+n1).slice(-2);
                document.getElementById('set_min').value=('0'+n2).slice(-2);
                document.getElementById('set_sec').value=('0'+n3).slice(-2);
                n3-=1;
                if(n3<0)
                {
                    clearInterval(tm);
                }
            }
            else
            {
                document.getElementById('set_hour').value=('0'+n1).slice(-2);
                document.getElementById('set_min').value=('0'+n2).slice(-2);
                document.getElementById('set_sec').value=('0'+n3).slice(-2);
                n3-=1;
                if(n2==0 && n3<0)
                {
                    clearInterval(tm);
                }
                if(n3<0)
                {
                    n2-=1;
                    n3=59;
                }
            }
        }
    }, 1000);
})
for(i of document.querySelector('.tz_list').children)
{
    i.onclick=(e)=>{
        n=e.target.tabIndex;
    }
}
int_list=[];
document.querySelector('.set_timezone-btn').addEventListener('click',()=>{
    if(n!=1)
    {
        document.getElementById('time2').style.display='none';
        document.getElementById('time21').style.display='flex';
    }
    if(n==1)
    {
        for(i=0;i<int_list.length;i++)
        {
            var temp=int_list[i];
            clearInterval(window[temp]);
        }
        document.getElementById('time_location1').innerText='India';
        document.getElementById('time_location').innerText='';
        document.getElementById('time2').style.display='flex';
        document.getElementById('time21').style.display='none';
        document.getElementById('str2').style.display='none';
        document.getElementById('str1').style.display='block';
    }
    if(n==10)
    {
        int_list.push('ns10');
        for(i=0;i<int_list.length;i++)
        {
            if(int_list[i]!='ns10')
            {
                var temp=int_list[i];
                clearInterval(window[temp]);
            }
        }
        document.getElementById('time_location1').innerText='';
        document.getElementById('time_location').innerText='China';
        ns10=setInterval(() => {
            var d=new Date();
            utc=d.getTime()+(d.getTimezoneOffset()*60*1000);
            nd=new Date(utc+(60*60*1000*(8)));
            hour=('0'+nd.getHours()).slice(-2);
            minutes=('0'+nd.getMinutes()).slice(-2);
            seconds=('0'+nd.getSeconds()).slice(-2);
            if(hour>12)
            {
                hour=hour-12;
                str2='PM';
            }
            else
            {
                str2='AM'
            }
            document.getElementById('str1').style.display='none';
            document.getElementById('str2').style.display='block';
            document.getElementById('str2').innerText=str2;
            document.getElementById('time21').innerHTML=`${hour}:${minutes}:${seconds}`;
        }, 1000);
    }
    if(n==2)
    {
        int_list.push('ns2');
        for(i=0;i<int_list.length;i++)
        {
            if(int_list[i]!='ns2')
            {
                var temp=int_list[i];
                clearInterval(window[temp]);
            }
        }
        document.getElementById('time_location1').innerText='';
        document.getElementById('time_location').innerText='Pacific Time (US)';
        ns2=setInterval(() => {
            var d=new Date();
            utc=d.getTime()+(d.getTimezoneOffset()*60*1000);
            nd=new Date(utc+(60*60*1000*(-8)));
            hour=('0'+nd.getHours()).slice(-2);
            minutes=('0'+nd.getMinutes()).slice(-2);
            seconds=('0'+nd.getSeconds()).slice(-2);
            if(hour>12)
            {
                hour=hour-12;
                str2='PM';
            }
            else
            {
                str2='AM'
            }
            document.getElementById('str1').style.display='none';
            document.getElementById('str2').style.display='block';
            document.getElementById('str2').innerText=str2;
            document.getElementById('time21').innerHTML=`${hour}:${minutes}:${seconds}`;
        }, 1000);
    }
    if(n==3)
    {
        int_list.push('ns3');
        for(i=0;i<int_list.length;i++)
        {
            if(int_list[i]!='ns3')
            {
                var temp=int_list[i];
                clearInterval(window[temp]);
            }
        }
        document.getElementById('time_location1').innerText='';
        document.getElementById('time_location').innerText='Central Time (US)';
        ns3=setInterval(() => {
            var d=new Date();
            utc=d.getTime()+(d.getTimezoneOffset()*60*1000);
            nd=new Date(utc+(60*60*1000*(-6)));
            hour=('0'+nd.getHours()).slice(-2);
            minutes=('0'+nd.getMinutes()).slice(-2);
            seconds=('0'+nd.getSeconds()).slice(-2);
            if(hour>12)
            {
                hour=hour-12;
                str2='PM';
            }
            else
            {
                str2='AM'
            }
            document.getElementById('str1').style.display='none';
            document.getElementById('str2').style.display='block';
            document.getElementById('str2').innerText=str2;
            document.getElementById('time21').innerHTML=`${hour}:${minutes}:${seconds}`;
        }, 1000);
    }
    if(n==4)
    {
        int_list.push('ns4');
        for(i=0;i<int_list.length;i++)
        {
            if(int_list[i]!='ns4')
            {
                var temp=int_list[i];
                clearInterval(window[temp]);
            }
        }
        document.getElementById('time21').innerHTML='';
        document.getElementById('time_location1').innerText='';
        document.getElementById('time_location').innerText='Brazil';
        ns4=setInterval(() => {
            var d=new Date();
            utc=d.getTime()+(d.getTimezoneOffset()*60*1000);
            nd=new Date(utc+(60*60*1000*(-3)));
            hour=('0'+nd.getHours()).slice(-2);
            minutes=('0'+nd.getMinutes()).slice(-2);
            seconds=('0'+nd.getSeconds()).slice(-2);
            if(hour>12)
            {
                hour=hour-12;
                str2='PM';
            }
            else
            {
                str2='AM'
            }
            document.getElementById('str1').style.display='none';
            document.getElementById('str2').style.display='block';
            document.getElementById('str2').innerText=str2;
            document.getElementById('time21').innerHTML=`${hour}:${minutes}:${seconds}`;
        }, 1000);
    }
    if(n==5)
    {
        int_list.push('ns5');
        for(i=0;i<int_list.length;i++)
        {
            if(int_list[i]!='ns5')
            {
                var temp=int_list[i];
                clearInterval(window[temp]);
            }
        }
        document.getElementById('time21').innerHTML='';
        document.getElementById('time_location1').innerText='';
        document.getElementById('time_location').innerText='London (UK)';
        ns5=setInterval(() => {
            var d=new Date();
            utc=d.getTime()+(d.getTimezoneOffset()*60*1000);
            nd=new Date(utc+(60*60*1000*(0)));
            hour=('0'+nd.getHours()).slice(-2);
            minutes=('0'+nd.getMinutes()).slice(-2);
            seconds=('0'+nd.getSeconds()).slice(-2);
            if(hour>12)
            {
                hour=hour-12;
                str2='PM';
            }
            else
            {
                str2='AM'
            }
            document.getElementById('str1').style.display='none';
            document.getElementById('str2').style.display='block';
            document.getElementById('str2').innerText=str2;
            document.getElementById('time21').innerHTML=`${hour}:${minutes}:${seconds}`;
        }, 1000);
    }
    if(n==6)
    {
        int_list.push('ns6');
        for(i=0;i<int_list.length;i++)
        {
            if(int_list[i]!='ns6')
            {
                var temp=int_list[i];
                clearInterval(window[temp]);
            }
        }
        document.getElementById('time21').innerHTML='';
        document.getElementById('time_location1').innerText='';
        document.getElementById('time_location').innerText='Germany';
        ns6=setInterval(() => {
            var d=new Date();
            utc=d.getTime()+(d.getTimezoneOffset()*60*1000);
            nd=new Date(utc+(60*60*1000*(1)));
            hour=('0'+nd.getHours()).slice(-2);
            minutes=('0'+nd.getMinutes()).slice(-2);
            seconds=('0'+nd.getSeconds()).slice(-2);
            if(hour>12)
            {
                hour=hour-12;
                str2='PM';
            }
            else
            {
                str2='AM'
            }
            document.getElementById('str1').style.display='none';
            document.getElementById('str2').style.display='block';
            document.getElementById('str2').innerText=str2;
            document.getElementById('time21').innerHTML=`${hour}:${minutes}:${seconds}`;
        }, 1000);
    }
    if(n==7)
    {
        int_list.push('ns7');
        for(i=0;i<int_list.length;i++)
        {
            if(int_list[i]!='ns7')
            {
                var temp=int_list[i];
                clearInterval(window[temp]);
            }
        }
        document.getElementById('time21').innerHTML='';
        document.getElementById('time_location1').innerText='';
        document.getElementById('time_location').innerText='Russia';
        ns7=setInterval(() => {
            var d=new Date();
            utc=d.getTime()+(d.getTimezoneOffset()*60*1000);
            nd=new Date(utc+(60*60*1000*(3)));
            hour=('0'+nd.getHours()).slice(-2);
            minutes=('0'+nd.getMinutes()).slice(-2);
            seconds=('0'+nd.getSeconds()).slice(-2);
            if(hour>12)
            {
                hour=hour-12;
                str2='PM';
            }
            else
            {
                str2='AM'
            }
            document.getElementById('str1').style.display='none';
            document.getElementById('str2').style.display='block';
            document.getElementById('str2').innerText=str2;
            document.getElementById('time21').innerHTML=`${hour}:${minutes}:${seconds}`;
        }, 1000);
    }
    if(n==8)
    {
        int_list.push('ns8');
        for(i=0;i<int_list.length;i++)
        {
            if(int_list[i]!='ns8')
            {
                var temp=int_list[i];
                clearInterval(window[temp]);
            }
        }
        document.getElementById('time21').innerHTML='';
        document.getElementById('time_location1').innerText='';
        document.getElementById('time_location').innerText='Dubai';
        ns8=setInterval(() => {
            var d=new Date();
            utc=d.getTime()+(d.getTimezoneOffset()*60*1000);
            nd=new Date(utc+(60*60*1000*(4)));
            hour=('0'+nd.getHours()).slice(-2);
            minutes=('0'+nd.getMinutes()).slice(-2);
            seconds=('0'+nd.getSeconds()).slice(-2);
            if(hour>12)
            {
                hour=hour-12;
                str2='PM';
            }
            else
            {
                str2='AM'
            }
            document.getElementById('str1').style.display='none';
            document.getElementById('str2').style.display='block';
            document.getElementById('str2').innerText=str2;
            document.getElementById('time21').innerHTML=`${hour}:${minutes}:${seconds}`;
        }, 1000);
    }
    if(n==9)
    {
        int_list.push('ns9');
        for(i=0;i<int_list.length;i++)
        {
            if(int_list[i]!='ns9')
            {
                var temp=int_list[i];
                clearInterval(window[temp]);
            }
        }
        document.getElementById('time21').innerHTML='';
        document.getElementById('time_location1').innerText='';
        document.getElementById('time_location').innerText='Singapore';
        ns9=setInterval(() => {
            var d=new Date();
            utc=d.getTime()+(d.getTimezoneOffset()*60*1000);
            nd=new Date(utc+(60*60*1000*(8)));
            hour=('0'+nd.getHours()).slice(-2);
            minutes=('0'+nd.getMinutes()).slice(-2);
            seconds=('0'+nd.getSeconds()).slice(-2);
            if(hour>12)
            {
                hour=hour-12;
                str2='PM';
            }
            else
            {
                str2='AM'
            }
            document.getElementById('str1').style.display='none';
            document.getElementById('str2').style.display='block';
            document.getElementById('str2').innerText=str2;
            document.getElementById('time21').innerHTML=`${hour}:${minutes}:${seconds}`;
        }, 1000);
    }
    if(n==11)
    {
        int_list.push('ns11');
        for(i=0;i<int_list.length;i++)
        {
            if(int_list[i]!='ns11')
            {
                var temp=int_list[i];
                clearInterval(window[temp]);
            }
        }
        document.getElementById('time21').innerHTML='';
        document.getElementById('time_location1').innerText='';
        document.getElementById('time_location').innerText='Japan';
        ns11=setInterval(() => {
            var d=new Date();
            utc=d.getTime()+(d.getTimezoneOffset()*60*1000);
            nd=new Date(utc+(60*60*1000*(9)));
            hour=('0'+nd.getHours()).slice(-2);
            minutes=('0'+nd.getMinutes()).slice(-2);
            seconds=('0'+nd.getSeconds()).slice(-2);
            if(hour>12)
            {
                hour=hour-12;
                str2='PM';
            }
            else
            {
                str2='AM'
            }
            document.getElementById('str1').style.display='none';
            document.getElementById('str2').style.display='block';
            document.getElementById('str2').innerText=str2;
            document.getElementById('time21').innerHTML=`${hour}:${minutes}:${seconds}`;
        }, 1000);
    }
    if(n==12)
    {
        int_list.push('ns12');
        for(i=0;i<int_list.length;i++)
        {
            if(int_list[i]!='ns12')
            {
                var temp=int_list[i];
                clearInterval(window[temp]);
            }
        }
        document.getElementById('time21').innerHTML='';
        document.getElementById('time_location1').innerText='';
        document.getElementById('time_location').innerText='Australia';
        ns12=setInterval(() => {
            var d=new Date();
            utc=d.getTime()+(d.getTimezoneOffset()*60*1000);
            nd=new Date(utc+(60*60*1000*(11)));
            hour=('0'+nd.getHours()).slice(-2);
            minutes=('0'+nd.getMinutes()).slice(-2);
            seconds=('0'+nd.getSeconds()).slice(-2);
            if(hour>12)
            {
                hour=hour-12;
                str2='PM';
            }
            else
            {
                str2='AM'
            }
            document.getElementById('str1').style.display='none';
            document.getElementById('str2').style.display='block';
            document.getElementById('str2').innerText=str2;
            document.getElementById('time21').innerHTML=`${hour}:${minutes}:${seconds}`;
        }, 1000);
    }
})