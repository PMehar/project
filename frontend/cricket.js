function registerPlayer(e) {
    e.preventDefault();
    alert("form is submitted");

    var name = document.getElementById('name').value;
    var birth = document.getElementById('birth').value;
    var url = document.getElementById('url').value;
    var birth_place = document.getElementById('birth_place').value;
    var career = document.getElementById('career').value;
    var matches = document.getElementById('matches').value;
    var score = document.getElementById('score').value;
    var fifties = document.getElementById('fifties').value; 
    var centuries = document.getElementById('centuries').value;
    var wickets = document.getElementById('wickets').value;
    var avg = document.getElementById('avg').value;
    
    e.target.reset();
    
    var obj = {
        name, birth, url, birth_place,  career, matches,score, fifties, centuries, wickets, avg
    };

    axios.post("http://localhost:3000/cricket/add-cricket", obj)
        .then((response) => {
            DispCricket(response.data.newCricketDetails); 
            // console.log(response.data.newCricketDetails);
        })
        .catch((err) => {
            document.body.innerHTML = document.body.innerHTML + "<h4> Something went wrong... in post request <h4>"
            console.log(err)
        })
}
window.addEventListener("DOMContentLoaded", () => {
    const data = axios.get("http://localhost:3000/cricket/get-crickets")
        .then((response) => {
            //console.log(response)
            for (var i = 0; i < response.data.allCrickets.length; i++) {
                DispCricket(response.data.allCrickets[i]);
                console.log(response.data.allCrickets[i]);
            }
        })
        .catch((err) => {
            console.log(err)
        })
})
function DispCricket(obj) {
    var pElement = document.getElementById('list');
    var img = document.createElement('img');
    img.src = obj.url;

    var cElement = document.createElement('li');
    cElement.textContent = " - " + obj.name+ " - " + obj.birth + " - " + obj.career  + " - " + obj.matches + " - " + obj.fiftees + " - " + obj.centuries + " - " + obj.wickets + " - " + obj.average+ " - " + obj.career;
    // var heading = document.createElement('h2');
    // heading.textContent = "Personel Information";

    // var info1 = document.createElement('p');
    // info1.textContent = "Career  : " + obj.career;

    // var info2 = document.createElement('p');
    // info2.textContent = "No.of Matches  : " + obj.matches;

    // var info3 = document.createElement('p');
    // info3.textContent = "Runs  : " + obj.score;

    // var info4 = document.createElement('p');
    // info4.textContent = "No.of fifties  : " + obj.fifties;

    // var info5 = document.createElement('p');
    // info5.textContent = "No.of centuries  : " + obj.centuries;

    // var info6 = document.createElement('p');
    // info6.textContent = "Wickets  : " + obj.wickets;

    // var info7 = document.createElement('p');
    // info7.textContent = "Average : " + obj.Average;

    // var info8 = document.createElement('p');
    // info8.textContent = "No.of Matches  : " + obj.matches;

    cElement.style.fontSize = "1.3rem";

    function deleteCricket(cricketId) {
        axios.delete('http://localhost:3000/cricket/delete-cricket/'+cricketId)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err)
            })
    }
    var edit = document.createElement('input');
    edit.type = 'button';
    edit.value = 'Edit';
    edit.style.backgroundColor = "rgb(145, 225, 189)";
    edit.style.margin = "0 0 0 1rem ";
    edit.style.padding= "0.2rem 0.5rem";

    function editCricket(cricketId) {
        // axios.put('http://localhost:3000/cricket/add-user/'+cricketId)
        //     .then((response) => {
        //         console.log(response);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })
        console.log()
    }
    cElement.appendChild(edit);
    // cElement.appendChild(del);



    del.onclick = () => {
        pElement.removeChild(cElement);
        deleteCricket(obj.id);
    }
    
    edit.onclick = () => {
        pElement.removeChild(cElement);
        editCricket(obj.id);
        deleteCricket(obj.id);
        document.getElementById('name').value = obj.name;
        document.getElementById('birth').value = obj.birth;
        document.getElementById('url').value = obj.url;
        document.getElementById('birthPlace').value = obj.birthPlace;
        document.getElementById('career').value = obj.career;
        document.getElementById('mathches').value = obj.mathches;
        document.getElementById('score').value = obj.score;
        document.getElementById('fiftees').value = obj.fiftees;
        document.getElementById('centuries').value = obj.centuries;
        document.getElementById('wickets').value = obj.wickets;
        document.getElementById('avg').value = obj.avg;
    }
    pElement.appendChild(img);
    img.appendChild(cElement);
}