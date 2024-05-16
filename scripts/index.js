import { helpMe, enter, hack, helpTextFunction } from './helper.js';

async function matrixNmap()
{
    await this.typing('enter', 100, 'sshnuke 10.2.2.2 -rootpw="********"');
    for (let i = 21; i <= 48; i++)
    {
        await new Promise(resolve => 
        {
            setTimeout(() => 
                {
                    this.echo(`Grid Node ${i} offline...`);
                    resolve();
                }, 100);
        }
    )};   
}

async function main()
{
    await this.echo(enter, { typing: true, delay: 0});
    await matrixNmap.call(this);
    await this.echo(hack, { typing: true, delay: 0});    
    scroll_to_bottom()
    window.location.assign('root/home.html');
}

const commands = 
{
    help: helpTextFunction,
    HELP: helpTextFunction,
    '--h': helpTextFunction,
    '-h': helpTextFunction,
    Enter: main,
    enter: main,
    ENTER: main
    
    
}

const terminalOptions =
{
    greetings: "[[!;;;;https://github.com/prophesierc]ProphesierC] v4.24 System Status: Online, Stable \nType 'help', '--h', or '-h' to ask for help. \n[[b;red;]ENTER] if you're ready",
    prompt: '\nguest@prophesierC> ',
    onCommandNotFound: function() { this.echo(helpMe, { typing: true, delay: 0});}
}


let terminal = $('body').terminal(commands, terminalOptions);
function handleEnterKeyPress(event) 
{
    if (event.keyCode === 13 && terminal.get_command().trim() === '') 
    {
        main.call(terminal);
        $('.terminal').off('keydown', handleEnterKeyPress);
    }
}
$('.terminal').on('keydown',handleEnterKeyPress);
