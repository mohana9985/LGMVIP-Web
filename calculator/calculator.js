let result = document.getElementById('result');

        function appendCharacter(char) {
            if (result.value.slice(-1) != 'r') 
            {
                result.value += char;
            }
            else {
                result.value = ''
                result.value += char;
            }
        }

        function Delete() 
        {
           result.value = result.value.slice(0, -1);
        }

        function Clean() 
        {
           result.value = '';
        }

        function Calresult() 
        {
           try 
           {
              result.value = eval(result.value);
           }
           catch (error) 
           {
              result.value = 'Error';

           }

        }