let Commands = {};

// Shows available commands
Commands['help'] = () => {
    commandList.innerHTML += 'Here you have a list with all abailable commands :)<br>'
    commandList.innerHTML += `<span style="color: #24f">
                              - whoami<br>
                              - ls<br>
                              - clear<br>
                              - help<br>
                              - hacker<br>
                              - destroy<br>
                              - hello
                              </span>`
};

// Shows personal information
Commands['whoami'] = () => {
    commandList.innerHTML += 'Hi! I\'m monterillo12 ^^<br>I\'m stuing Multiplatform Applications Development but<br>I also like web development and lean by myself';
};

// Shows social media list
Commands['ls'] = () => {
    for (i = 0; i < Config['socialMedia'].length; i++) {
        commandList.innerHTML += `<a class="command-ls-link" target="_blank" href="${Config['socialMedia'][i].link}">${Config['socialMedia'][i].name}</a>`;
    };
};

// Clear the terminal
Commands['clear'] = () => {
    commandList.innerHTML = '';
};

// When the command is null do nothing
Commands[''] = () => {};

// Shows a funny meme of hacker
Commands['hacker'] = () => {
    commandList.innerHTML += '<img src="https://www.icegif.com/wp-content/uploads/2022/01/icegif-165.gif" alt="Super mega master pro debiloper" style="width: 50%; border-radius: .4vw;">';
};

Commands['destroy'] = () => {
    let body = document.querySelector('body');
    body.style.display = 'none';
};

Commands['hello'] = () => {
    commandList.innerHTML += 'Hello Wold! 🤓👨‍💻';
};