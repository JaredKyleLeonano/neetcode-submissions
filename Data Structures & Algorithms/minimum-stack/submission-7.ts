class MinStack {
    private stack: number[]
    private stackMin: number[]

    constructor() {
        this.stack = []
        this.stackMin = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val)
        
        const currentMin = this.stackMin[this.stackMin.length - 1] ?? Infinity
        if(val < currentMin){
            this.stackMin.push(val)
            return
        }
        this.stackMin.push(currentMin)

    }

    /**
     * @return {void}
     */
    pop(): void {
        if(this.stack.length > 0){
            this.stack.pop()
        }

        if(this.stackMin.length > 0){
            this.stackMin.pop()
        }
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.stackMin[this.stackMin.length - 1]
    }
}
