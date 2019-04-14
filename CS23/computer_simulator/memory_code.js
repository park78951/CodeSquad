function Memory() {
    this.memory = new Uint16Array(131072);
    this.textCount = 0;
}

Memory.prototype.checkCapacityOftext = function() {
    if(this.textCount > 65535) throw new Error('The capacity of text overflows');
}

Memory.prototype.peek = function(address) {
    this.checkCapacityOftext();
    if(address < 0 || address > 131071) throw new Error('Out of range exception');
    return address < 65536 ? this.memory[address] : this.memory[address];
}

Memory.prototype.locate = function(programText) {
    this.checkCapacityOftext();
    if(this.textCount + programText.length > 65535) throw new Error('Out of range exception');
    for(let text of programText) {
        this.memory[this.textCount] = text
        this.textCount++;
    }
}

Memory.prototype.fetch = function(address) {
    this.checkCapacityOftext();
    if(address > 65535) throw new Error('There is access to the wrong address');
    return this.memory[address];
}

Memory.prototype.load = function(address) {
    if(address + 65535 > 131071) throw new Error('Out of range exception');

    return this.memory[address + 65535]
}

Memory.prototype.store = function(address, data) {
    if(address + 65535 > 131071) throw new Error('Out of range exception');

    this.memory[address + 65535] = data;
}

let memory = new Memory();

memory.locate("go");
memory.store(0, "data");

memory.fetch(0);
memory.load(0);