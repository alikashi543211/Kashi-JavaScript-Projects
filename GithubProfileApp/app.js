const APIURL = "https://api.github.com/users/";

const main = document.querySelector("#main")

const searchBox = document.querySelector("#search");

const getUser = async (username) => {

    const response = await fetch(APIURL + username)

    const data = await response.json();

    console.log(data)

    if(data.message != 'Not Found')
    {

        const card = `
    
            <div class="card">
                <div>
                    <img class="avatar" src="${data.avatar_url}" alt="Florin Pop">
                </div>
                <div class="user-info">
                    <h2>${data.name}</h2>
                    <p>${data.bio}</p>

                    <ul class="info">
                        <li>${data.followers}<strong>Followers</strong></li>
                        <li>${data.following}<strong>Following</strong></li>
                        <li>${data.public_repos}<strong>Repos</strong></li>
                    </ul>

                    <div id="repos">
                        
                    </div>
                </div>
            </div>

        `;

        main.innerHTML = card;

        getRepos(username)

    }else{

        const card = `
        
            <div class="card">
                <div>
                    <img class="avatar" src="https://picsum.photos/200" alt="Florin Pop">
                </div>
                <div class="user-info">
                    <h2>Not Found</h2>
                    <p>Not Found</p>

                    <ul class="info">
                        <li>###<strong>Followers</strong></li>
                        <li>##<strong>Following</strong></li>
                        <li>###<strong>Repos</strong></li>
                    </ul>

                    <div id="repos">
                        <a class="repo" href="#" target="_blank">Repo 1</a>
                        <a class="repo" href="#" target="_blank">Repo 2</a>
                        <a class="repo" href="#" target="_blank">Repo 3</a>
                    </div>
                </div>
            </div>
        
        `;

        main.innerHTML = card;

    }

    

}

// Github Username Examples
    // alikashi543211
    // taylorotwell
    // i-am-bhaggi
    // bhagirath-wscubetech

//getUser("taylorotwell");

const getRepos = async (username) => {

    const respos = document.querySelector("#repos");

    const response = await fetch(APIURL + username + '/repos')

    const data = await response.json();

    console.log(data);

    data.forEach(

        (item) => {

            console.log(item)
        
            const elem = document.createElement("a");

            elem.classList.add("repo")

            elem.href = item.html_url;

            elem.target = "_blank";

            elem.innerText = item.name;

            repos.appendChild(elem)

        }

    )

}

const formSubmit = () => {
    

    if(searchBox.value != "")
    {

        getUser(searchBox.value)

        searchBox.value = "";

    }

    return false;

}

searchBox.addEventListener(

    "focusout",
    
    function() {

        formSubmit()

    }

)

/*

<a class="repo" href="#" target="_blank">Repo 1</a>
<a class="repo" href="#" target="_blank">Repo 2</a>
<a class="repo" href="#" target="_blank">Repo 3</a>

*/