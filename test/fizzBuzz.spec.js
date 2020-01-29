    // Desafio FizzBuzz

    // Escreva uma lib que receba um número e:

    // Se o número for divisível por 3, no lugar do número escreva 'Fizz'
    // Se o número for divisível por 5, no lugar do número escreva 'Buzz'
    // Se o número for divisível por 3 e 5, no lugar do número escreva 'FizzBuzz'
    // Se o número não for múltiplo de NamedNodeMap, retorna o número

    import { expect } from 'chai'
    import FizzBuzz from '../src/fizzBuzz'

    describe.only('FizzBuzz', () => {
        it ('should return `Fizz` when multiple of 3', () => {
            expect(FizzBuzz(3)).to.be.equal('Fizz')
            expect(FizzBuzz(12)).to.be.equal('Fizz')
        })
        it ('should return `Buzz` when multiple of 5', () => {
            expect(FizzBuzz(5)).to.be.equal('Buzz')
            expect(FizzBuzz(55)).to.be.equal('Buzz')
        })
        it ('should return `FizBuzz` when multiple of 3 and 5', () => {
            expect(FizzBuzz(15)).to.be.equal('FizzBuzz')
            expect(FizzBuzz(30)).to.be.equal('FizzBuzz')
        })
        it ('should return `num` when not multiple of 3 and 5', () => {
            expect(FizzBuzz(4)).to.be.equal(4)
        })
        it ('should return `Zero não é divísivel` when num = 0', () => {
            expect(FizzBuzz(0)).to.be.equal('Zero não é divísivel!')
        })
    })
