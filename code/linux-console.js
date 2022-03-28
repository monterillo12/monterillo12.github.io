let inputCommand = document.querySelector('#input-command');
let commandList = document.querySelector('.console-commandlist');

inputCommand.addEventListener('keydown', function(k) {

    let value = this.value

    if (k.key === 'Enter') {
        commandList.innerHTML += `<div style="color: #fff;"><span style="color: #0a0;">root@m12terminal:</span><span style="color: #0ad;">~</span>$ ${value}</div>`
        inputCommand.value = '';
    
        try {
            Commands[value]();
        } catch {
            commandList.innerHTML += '<span style="color: #a00;">Error!</span> Command not found. Try: ls, whoami, clear...';
        };
        
    };
});