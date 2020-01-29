import { expect } from 'chai'
import { sum, sub, mult, div } from '../src/main.js'
// var expect = require('chai').expect
// var calc = require('../src/main.js')
describe('Calc', () => {

    //smoke tests
    describe('Smoke tests',  () => {

        it('should exist the method `sum`', () => {
            expect(sum).to.exist;
            expect(sum).to.be.a('function');
        })
        it('should exist the method `sub`', () => {
            expect(sub).to.exist;
            expect(sub).to.be.a('function');
        })
        it('should exist the method `mult`', () => {
            expect(mult).to.exist;
            expect(mult).to.be.a('function');
        })
        it('should exist the method `div`', () => {
            expect(div).to.exist;
            expect(div).to.be.a('function');
        })

    })

    describe('Sum', function() {
        it('should return 4 when `sum(2,2)`', function() {
            expect(sum(2,2)).to.equal(4)
        })
    })
    describe('Sub', function() {
        it('should return 4 when `sub(6,2)`', function() {
            expect(sub(6,2)).to.equal(4)
        })
    })
    describe('Mult', function() {
        it('should return 4 when `mult(2,2)`', function() {
            expect(mult(2,2)).to.equal(4)
        })
    })
    describe('Div', function() {
        it('should return 4 when `div(16,4)`', function() {
            expect(div(16,4)).to.equal(4)
        })
        it('should return `Não da pra dividir por Zero!` when `div(16,0)`', function() {
            expect(div(16,0)).to.equal('Não da pra dividir por Zero!');
        })
    })
})