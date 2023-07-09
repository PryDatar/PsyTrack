import os

def list_files(startpath):
    with open('architecture.txt', 'w') as f:
        for root, dirs, files in os.walk(startpath):
            level = root.replace(startpath, '').count(os.sep)
            indent = ' ' * 4 * (level)
            f.write('{}{}/\n'.format(indent, os.path.basename(root)))
            subindent = ' ' * 4 * (level + 1)
            for f_name in files:
                f.write('{}{}\n'.format(subindent, f_name))

if __name__=="__main__":
    list_files('.')