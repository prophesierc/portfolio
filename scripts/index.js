import { helpText, helpMe, enter, hack, whitespace } from './helper.js';

const term = $('body').terminal(async (command) =>{ 

    if (/help/i.test(command) || command == '--h' || command == '-h')
    {
        term.echo(helpText, { typing: true, delay: 5 });
    }
    
    else if (/enter/i.test(command) || command == '')
    {
        await term.echo(enter, { typing: true, delay: 0});
        await term.typing('enter', 100, 'sshnuke 10.2.2.2 -rootpw="********"');
            for (let i = 21; i <= 48; i++)
            {
                await new Promise(resolve => 
                {
                setTimeout(() => 
                    {
                        term.echo(`Grid Node ${i} offline...`);
                        resolve();
                    }, 100);
                }
            )};   
        // await term.echo(whitespace, { typing: true, delay: 0});
        // (WIP) allow whitespace to clear screen slowly
    } 
    else
    {
        term.echo(helpMe, { typing: true, delay: 5, newline: true });
    }

},
{

    greetings: "Prophesierc v4.24 System Status: Online, Stable \nType 'help', '--h', or '-h' to ask for help. \n[[b;red;]ENTER] if you're ready",
    prompt: '\nguest@prophesierC>'

});


