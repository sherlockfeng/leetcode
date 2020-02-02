/**
 * @file 无向图.js
 * @author heyunfeng
 */

class Graph {
    constructor(edges) {
        this.V = 0;
        this.E = 0;
        this.adj = new Map();
        for (let i = 0; i < edges.length; i++) {
            const edge = edges[i];
            for (let j = 0; j < edge.length; j++) {
                if (!this.adj.has(edge[j])) {
                    this.V++;
                    this.adj.set(edge[j], new Set());
                }
            }
            this.addEdge(edge[0], edge[1]);
        }
    }

    addEdge(i, j) {
        let m = this.adj.get(i);
        let n = this.adj.get(j);
        const oldSizeM = m.size;
        m.add(j);
        if (m.size > oldSizeM) {
            this.E++;
            n.add(i);
        }
    }
}
