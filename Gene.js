
var Gene = function(dna)
{
    return {
        DNA:dna,
        Generate:function (deviate) 
        {
            var generation = [];
            generation.push(this.DNA);
            for(let i=0;i<this.DNA.length;i++)
            {
                var carry = this.DNA;
                carry[i] += deviate;
                generation.push(carry);
                carry = this.DNA;
                carry[i] -= deviate;
                generation.push(carry);
            }
        }
    }
}
