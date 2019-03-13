export class CartesianProduct
    public newCartesianCombinations(
        comboCollections: any,
        recursionCount: number,
        callback: (cartesianProduct: string [][]) => void) {

        let c1, c2, all = [], replaceA = [];
        replaceA = comboCollections;
        const combined = [];
        if (!!comboCollections && comboCollections.length === 1) {
            callback(comboCollections[0]);
            return;
        }

        if (!recursionCount) {
            recursionCount = 0;
        }
        c1 = replaceA[0];
        c2 = replaceA[1];

        if (comboCollections.length > 2) {
            all = (replaceA.splice(2, comboCollections.length - 2));
        }

        for (let i = 0; i < c1.length; i++) {
            const first = c1[i];

            for (let k = 0; k < c2.length; k++) {
                const nxt = c2[k];

                let newElement = [];
                if (!!recursionCount) {
                    for (let z = 0; z < first.length; z++) {
                        newElement.push(first[z]);
                    }

                    newElement.push(nxt);
                } else {
                    newElement = [first, nxt];
                }

                combined.push(newElement);
            }
        }

        all.push(combined);
        all.reverse();
        this.newCartesianCombinations(all, ++recursionCount, callback);

        return;

    }
}
