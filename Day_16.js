// write a ask bob program
//Bob is a lackadaisical teenager. In conversation, his responses are very 
//limited.
//Bob answers 'Sure.' if you ask him a question, such as "How are you?".
//He answers 'Whoa, chill out!' if you YELL AT HIM (in all capitals).
//He answers 'Calm down, I know what I'm doing!' if you yell a question at him.
//He says 'Fine. Be that way!' if you address him without actually saying 
//anything.
//He answers 'Whatever.' to anything else.
//Bob's conversational partner is a purist when it comes to written communication 
//and always follows normal rules regarding sentence punctuation in English.
function ask_bob(message)
{
	var str = message.replace(/\s/g,'');
    if (str.length === 0)
    {
    	return 'Fine. Be that way!';
    }
    if (str === str.toUpperCase() && str.endsWith('?'))
    {
    	return 'Calm down, I know what I\'m doing!';
    }
    if (str === str.toUpperCase())
    {
    	return 'Whoa, chill out!';
    }
    if (str.endsWith('?'))
    {
    	return 'Sure.';
    }
    else
    {
    	return 'Whatever';
    }
}
