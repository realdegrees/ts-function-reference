// None of these work
import { foo as regularDirectImport } from '../reference/lib';
import { foo as regularIndexImport } from '../reference/index';
import {foo as pathsImport} from '@reference';
pathsImport();
regularDirectImport();
regularIndexImport();