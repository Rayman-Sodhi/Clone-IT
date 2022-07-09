import React from 'react';
import Card from '../../../Card/Card';
import Link from '../../../Link/Link';

const SearchProblems = () => {
    return (
        <Card title="Search Problems">
            <Link href="https://www.codechef.com/tags/problems" fontSize="13px">
                You can view all problem tags here
            </Link>
        </Card>
    );
}

export default SearchProblems;