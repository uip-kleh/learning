let postStatus: 'draft' | `published` | `deleted`;

postStatus = `draft`;
// postStatus = `drafts`; // error

function compare(a: string, b: string): -1 | 0 | 1{
    return a === b ? 0 : a > b ? 1: -1;
}

