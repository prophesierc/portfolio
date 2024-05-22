import { helpMe, enter, hackInit, hackFinish, helpTextFunction } from './helper.js';

class Terminal 
{
    constructor() 
    {
        this.terminalOptions = 
        {
            greetings: "[[!;;;;https://github.com/prophesierc]ProphesierC] v4.24 System Status: Online, Stable \nType 'help', '--h', or '-h' to ask for help. \n[[b;red;]ENTER] if you're ready",
            prompt: '\nguest@prophesierC> ',
            onCommandNotFound: () => this.terminal.echo(helpMe, { typing: true, delay: 0 })
        };

        this.commands = 
        {
            help: helpTextFunction,
            HELP: helpTextFunction,
            '--h': helpTextFunction,
            '-h': helpTextFunction,
            Enter: () => this.main(),
            enter: () => this.main(),
            ENTER: () => this.main()
        };

        this.terminal = $('body').terminal(this.commands, this.terminalOptions);
        this.handleEnterKeyPress = this.handleEnterKeyPress.bind(this);
        $('.terminal').on('keydown', this.handleEnterKeyPress);
    }

    async matrixNmap() 
    {
        await this.terminal.typing('enter', 100, 'sshnuke 10.2.2.2 -rootpw="********"');
        for (let i = 21; i <= 48; i++) 
        {
            await new Promise(resolve => 
            {
                setTimeout(() => 
                {
                    this.terminal.echo(`Grid Node ${i} offline...`);
                    resolve();
                }, 100);
            });
        }
    }

    async main()    
    {
        await this.terminal.echo(enter, { typing: true, delay: 0 });
        await this.matrixNmap();
        await this.terminal.echo(hackInit, { typing: true, delay: 0 });
        $('body').fadeOut('slow', 'swing');
        await this.terminal.echo(hackFinish, { typing: true, delay: 0 });
        window.location.assign('root/home.html');
    }

    handleEnterKeyPress(event) 
    {
        if (event.keyCode === 13 && this.terminal.get_command().trim() === '') 
        {
            this.main();
            $('.terminal').off('keydown', this.handleEnterKeyPress);
        }
    }
    
}

$(document).ready(() => 
{
    const app = new Terminal();
});
