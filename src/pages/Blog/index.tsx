import { Post } from './components/Post';
import { Profile } from './components/Profile';
import { SearchInput } from './components/SearchInput';
import { PostsListConainer } from './styles';

export function Blog() {
    return (
        <div>
            <Profile />
            <SearchInput />
            <PostsListConainer>
                <Post />
                <Post />
            </PostsListConainer>
        </div>
    );
}
