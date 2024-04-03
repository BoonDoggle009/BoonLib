var b = {log: function(text){console.log(text)}, randomInt: function(first,second){var inT = Math.floor(Math.random() * second) + first; return inT}, detectOverlapA: function(element1, element2) {
                var el11 = document.getElementById(element1)
                var el22 = document.getElementById(element2)
                var el1 = el11.getBoundingClientRect()
                var el2 = el22.getBoundingClientRect()
                var colliding = 0
                
                if (el1.x >= el2.x - el2.width + 1 && el1.x <= el2.x + el2.width && el1.y >= el2.y - el2.width + 1 && el1.y <= el2.y + el2.width){
                    console.log("collision")
                    colliding = 1
                }
                return colliding
            },
        }
