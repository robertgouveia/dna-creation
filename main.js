// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (_specimenNum, _dna) => {
  return {
    _specimenNum,
    _dna,
    mutate(){
      let mutateInt = Math.floor(Math.random() * 15)
      let mutation = returnRandBase()
      while(mutation === this._dna[mutateInt]){
        mutation = returnRandBase()
      }
      this._dna[mutateInt] = mutation
    },
    compareDNA(pAquor){
      let count = 0
      for(let i = 0; i <= 15; i++){
        if(pAquor._dna[i] === this._dna[i]){
          count++
        }
      }
      let number = (count / 15) * 100
      console.log(`specimen: #${this._specimenNum} and specimen: #${pAquor._specimenNum} have ${number.toFixed(2)}% DNA in common`)
    },
    willLikelySurvive(){
      return ((this._dna.filter(strand => {
        return strand === 'C' || strand === 'G'
      }).length) / 15 * 100).toFixed(0) >= 60
    }
  }
}

const teamPAequor = []
let pAequorId = 0

while(teamPAequor.length <= 30){
  pAequorId++
  let pAequor = pAequorFactory(pAequorId, mockUpStrand())
  if(pAequor.willLikelySurvive()){
    teamPAequor.push(pAequor)
  }
}

console.log(teamPAequor)
