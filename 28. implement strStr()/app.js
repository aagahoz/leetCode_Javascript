var strStr = function (haystack, needle) 
{
    if (needle == "" || haystack == "")
    {
        return 0;
    }

    const tempNeedleArray = needle.split("");

    for (let i = 0; i < haystack.length; i++)
    {
        if (haystack[i] == tempNeedleArray[0])
        {
            let tempHaystackArray = haystack.split("");
            for (let j = 0; j < tempNeedleArray.length; j++)
            {
                if (tempHaystackArray[i + j] != tempNeedleArray[j])
                {
                    break;
                }
                else if (j == tempNeedleArray.length - 1)
                {
                    return i;
                }
            }
        }
    }
    return -1;
};

console.log(strStr("hello", ""));
console.log(strStr("", ""));
console.log(strStr("hello", "ll"));
console.log(strStr("aaaaa", "bba"));
console.log(strStr("abc", "c"));