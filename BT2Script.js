        let api_key = "376f19f0a28617666784ffbb84aff432"
        let ipval = document.getElementById("ip")
        let searchbtn = document.getElementById("search")
        let degval = document.getElementById("degrees")
        let Location = document.getElementById("location")
        let moodval = document.getElementById("mood")

        searchbtn.onclick = function () {
            if (ipval.value == "") {
                alert("please enter location Name")
            }
            else {
                loc = ipval.value
                let url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${api_key}`
                var details = fetch(url).then(res => res.json()).then(data => {
                    console.log(data)
                    const { name } = data
                    const { feels_like } = data.main
                    const { description } = data.weather[0]
                    degval.innerText = Math.floor(feels_like - 273)
                    Location.innerText = name
                    moodval.innerText = description
                }).catch(data => {
                    alert("please enter a valid location")
                }
                )
            }
        }
