let orderStatus = null
var synth = window.speechSynthesis;
let voices = synth.getVoices();

//let msg = document.querySelector("#orderMessage").innerHTML
setInterval(() => {
    fetch('listOrders', {
        method: 'get',
        headers: {'Content-Type': 'application/json'},
        //body: JSON.stringify({
        //   'name': name,
        //   'order': order,
        //   'barista': barista,
        //   'complete': true
          // 'thumbUp':thumbUp
        //})
      })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        // console.log(data)
        if(orderStatus === null){
            orderStatus = data.orders
        }else{
            for(order of orderStatus){
                if(order.complete === false){
                    for(newOrder of data.orders){
                        if(newOrder._id === order._id){
                           if(newOrder.complete === true){
              
                                document.querySelector("#orderMessage").innerHTML= `${newOrder.name}, your ${newOrder.order} is ready`
                                var utterThis = new SpeechSynthesisUtterance(`${newOrder.name}, your ${newOrder.order} is ready`)  
                                utterThis.voice = voices[3] ///select google US  voice
                                synth.speak(utterThis)  
                           }
                        }
                    }
                    
                }
            }
        }
        //window.location.reload(true)
      })
    // });
}, 3000);