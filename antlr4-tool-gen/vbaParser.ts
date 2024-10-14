// Generated from vba.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import vbaListener from "./vbaListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class vbaParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly ACCESS = 9;
	public static readonly ADDRESSOF = 10;
	public static readonly ALIAS = 11;
	public static readonly AND = 12;
	public static readonly ATTRIBUTE = 13;
	public static readonly APPACTIVATE = 14;
	public static readonly APPEND = 15;
	public static readonly AS = 16;
	public static readonly BEGIN = 17;
	public static readonly BEEP = 18;
	public static readonly BINARY = 19;
	public static readonly BOOLEAN = 20;
	public static readonly BYVAL = 21;
	public static readonly BYREF = 22;
	public static readonly BYTE = 23;
	public static readonly CALL = 24;
	public static readonly CASE = 25;
	public static readonly CHDIR = 26;
	public static readonly CHDRIVE = 27;
	public static readonly CLASS = 28;
	public static readonly CLOSE = 29;
	public static readonly COLLECTION = 30;
	public static readonly CONST = 31;
	public static readonly DATABASE = 32;
	public static readonly DATE = 33;
	public static readonly DECLARE = 34;
	public static readonly DEFBOOL = 35;
	public static readonly DEFBYTE = 36;
	public static readonly DEFDATE = 37;
	public static readonly DEFDBL = 38;
	public static readonly DEFDEC = 39;
	public static readonly DEFCUR = 40;
	public static readonly DEFINT = 41;
	public static readonly DEFLNG = 42;
	public static readonly DEFOBJ = 43;
	public static readonly DEFSNG = 44;
	public static readonly DEFSTR = 45;
	public static readonly DEFVAR = 46;
	public static readonly DELETESETTING = 47;
	public static readonly DIM = 48;
	public static readonly DO = 49;
	public static readonly DOUBLE = 50;
	public static readonly EACH = 51;
	public static readonly ELSE = 52;
	public static readonly ELSEIF = 53;
	public static readonly END_ENUM = 54;
	public static readonly END_FUNCTION = 55;
	public static readonly END_IF = 56;
	public static readonly END_PROPERTY = 57;
	public static readonly END_SELECT = 58;
	public static readonly END_SUB = 59;
	public static readonly END_TYPE = 60;
	public static readonly END_WITH = 61;
	public static readonly END = 62;
	public static readonly ENUM = 63;
	public static readonly EQV = 64;
	public static readonly ERASE = 65;
	public static readonly ERROR = 66;
	public static readonly EVENT = 67;
	public static readonly EXIT_DO = 68;
	public static readonly EXIT_FOR = 69;
	public static readonly EXIT_FUNCTION = 70;
	public static readonly EXIT_PROPERTY = 71;
	public static readonly EXIT_SUB = 72;
	public static readonly FALSE = 73;
	public static readonly FILECOPY = 74;
	public static readonly FRIEND = 75;
	public static readonly FOR = 76;
	public static readonly FUNCTION = 77;
	public static readonly GET = 78;
	public static readonly GLOBAL = 79;
	public static readonly GOSUB = 80;
	public static readonly GOTO = 81;
	public static readonly IF = 82;
	public static readonly IMP = 83;
	public static readonly IMPLEMENTS = 84;
	public static readonly IN = 85;
	public static readonly INPUT = 86;
	public static readonly IS = 87;
	public static readonly INTEGER = 88;
	public static readonly KILL = 89;
	public static readonly LOAD = 90;
	public static readonly LOCK = 91;
	public static readonly LONG = 92;
	public static readonly LOOP = 93;
	public static readonly LEN = 94;
	public static readonly LET = 95;
	public static readonly LIB = 96;
	public static readonly LIKE = 97;
	public static readonly LINE_INPUT = 98;
	public static readonly LOCK_READ = 99;
	public static readonly LOCK_WRITE = 100;
	public static readonly LOCK_READ_WRITE = 101;
	public static readonly LSET = 102;
	public static readonly MACRO_CONST = 103;
	public static readonly MACRO_IF = 104;
	public static readonly MACRO_ELSEIF = 105;
	public static readonly MACRO_ELSE = 106;
	public static readonly MACRO_END_IF = 107;
	public static readonly ME = 108;
	public static readonly MID = 109;
	public static readonly MKDIR = 110;
	public static readonly MOD = 111;
	public static readonly NAME = 112;
	public static readonly NEXT = 113;
	public static readonly NEW = 114;
	public static readonly NOT = 115;
	public static readonly NOTHING = 116;
	public static readonly NULL_ = 117;
	public static readonly ON = 118;
	public static readonly ON_ERROR = 119;
	public static readonly ON_LOCAL_ERROR = 120;
	public static readonly OPEN = 121;
	public static readonly OPTIONAL = 122;
	public static readonly OPTION_BASE = 123;
	public static readonly OPTION_EXPLICIT = 124;
	public static readonly OPTION_COMPARE = 125;
	public static readonly OPTION_PRIVATE_MODULE = 126;
	public static readonly OR = 127;
	public static readonly OUTPUT = 128;
	public static readonly PARAMARRAY = 129;
	public static readonly PRESERVE = 130;
	public static readonly PRINT = 131;
	public static readonly PRIVATE = 132;
	public static readonly PROPERTY_GET = 133;
	public static readonly PROPERTY_LET = 134;
	public static readonly PROPERTY_SET = 135;
	public static readonly PTRSAFE = 136;
	public static readonly PUBLIC = 137;
	public static readonly PUT = 138;
	public static readonly RANDOM = 139;
	public static readonly RANDOMIZE = 140;
	public static readonly RAISEEVENT = 141;
	public static readonly READ = 142;
	public static readonly READ_WRITE = 143;
	public static readonly REDIM = 144;
	public static readonly REM = 145;
	public static readonly RESET = 146;
	public static readonly RESUME = 147;
	public static readonly RETURN = 148;
	public static readonly RMDIR = 149;
	public static readonly RSET = 150;
	public static readonly SAVEPICTURE = 151;
	public static readonly SAVESETTING = 152;
	public static readonly SEEK = 153;
	public static readonly SELECT = 154;
	public static readonly SENDKEYS = 155;
	public static readonly SET = 156;
	public static readonly SETATTR = 157;
	public static readonly SHARED = 158;
	public static readonly SINGLE = 159;
	public static readonly SPC = 160;
	public static readonly STATIC = 161;
	public static readonly STEP = 162;
	public static readonly STOP = 163;
	public static readonly STRING = 164;
	public static readonly SUB = 165;
	public static readonly TAB = 166;
	public static readonly TEXT = 167;
	public static readonly THEN = 168;
	public static readonly TIME = 169;
	public static readonly TO = 170;
	public static readonly TRUE = 171;
	public static readonly TYPE = 172;
	public static readonly TYPEOF = 173;
	public static readonly UNLOAD = 174;
	public static readonly UNLOCK = 175;
	public static readonly UNTIL = 176;
	public static readonly VARIANT = 177;
	public static readonly VERSION = 178;
	public static readonly WEND = 179;
	public static readonly WHILE = 180;
	public static readonly WIDTH = 181;
	public static readonly WITH = 182;
	public static readonly WITHEVENTS = 183;
	public static readonly WRITE = 184;
	public static readonly XOR = 185;
	public static readonly AMPERSAND = 186;
	public static readonly ASSIGN = 187;
	public static readonly DIV = 188;
	public static readonly EQ = 189;
	public static readonly GEQ = 190;
	public static readonly GT = 191;
	public static readonly LEQ = 192;
	public static readonly LPAREN = 193;
	public static readonly LT = 194;
	public static readonly MINUS = 195;
	public static readonly MINUS_EQ = 196;
	public static readonly MULT = 197;
	public static readonly NEQ = 198;
	public static readonly PLUS = 199;
	public static readonly PLUS_EQ = 200;
	public static readonly POW = 201;
	public static readonly RPAREN = 202;
	public static readonly L_SQUARE_BRACKET = 203;
	public static readonly R_SQUARE_BRACKET = 204;
	public static readonly GUID = 205;
	public static readonly STRINGLITERAL = 206;
	public static readonly OCTLITERAL = 207;
	public static readonly HEXLITERAL = 208;
	public static readonly SHORTLITERAL = 209;
	public static readonly INTEGERLITERAL = 210;
	public static readonly DOUBLELITERAL = 211;
	public static readonly DATELITERAL = 212;
	public static readonly LINE_CONTINUATION = 213;
	public static readonly NEWLINE = 214;
	public static readonly REMCOMMENT = 215;
	public static readonly COMMENT = 216;
	public static readonly SINGLEQUOTE = 217;
	public static readonly COLON = 218;
	public static readonly UNDERSCORE = 219;
	public static readonly WS = 220;
	public static readonly IDENTIFIER = 221;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_startRule = 0;
	public static readonly RULE_module = 1;
	public static readonly RULE_moduleHeader = 2;
	public static readonly RULE_moduleConfig = 3;
	public static readonly RULE_moduleConfigElement = 4;
	public static readonly RULE_moduleAttributes = 5;
	public static readonly RULE_moduleDeclarations = 6;
	public static readonly RULE_moduleOption = 7;
	public static readonly RULE_moduleDeclarationsElement = 8;
	public static readonly RULE_macroStmt = 9;
	public static readonly RULE_moduleBody = 10;
	public static readonly RULE_moduleBodyElement = 11;
	public static readonly RULE_attributeStmt = 12;
	public static readonly RULE_block = 13;
	public static readonly RULE_blockStmt = 14;
	public static readonly RULE_appactivateStmt = 15;
	public static readonly RULE_beepStmt = 16;
	public static readonly RULE_chdirStmt = 17;
	public static readonly RULE_chdriveStmt = 18;
	public static readonly RULE_closeStmt = 19;
	public static readonly RULE_constStmt = 20;
	public static readonly RULE_constSubStmt = 21;
	public static readonly RULE_dateStmt = 22;
	public static readonly RULE_declareStmt = 23;
	public static readonly RULE_deftypeStmt = 24;
	public static readonly RULE_deleteSettingStmt = 25;
	public static readonly RULE_doLoopStmt = 26;
	public static readonly RULE_endStmt = 27;
	public static readonly RULE_enumerationStmt = 28;
	public static readonly RULE_enumerationStmt_Constant = 29;
	public static readonly RULE_eraseStmt = 30;
	public static readonly RULE_errorStmt = 31;
	public static readonly RULE_eventStmt = 32;
	public static readonly RULE_exitStmt = 33;
	public static readonly RULE_filecopyStmt = 34;
	public static readonly RULE_forEachStmt = 35;
	public static readonly RULE_forNextStmt = 36;
	public static readonly RULE_functionStmt = 37;
	public static readonly RULE_getStmt = 38;
	public static readonly RULE_goSubStmt = 39;
	public static readonly RULE_goToStmt = 40;
	public static readonly RULE_ifThenElseStmt = 41;
	public static readonly RULE_ifBlockStmt = 42;
	public static readonly RULE_ifConditionStmt = 43;
	public static readonly RULE_ifElseIfBlockStmt = 44;
	public static readonly RULE_ifElseBlockStmt = 45;
	public static readonly RULE_implementsStmt = 46;
	public static readonly RULE_inputStmt = 47;
	public static readonly RULE_killStmt = 48;
	public static readonly RULE_letStmt = 49;
	public static readonly RULE_lineInputStmt = 50;
	public static readonly RULE_lineNumber = 51;
	public static readonly RULE_loadStmt = 52;
	public static readonly RULE_lockStmt = 53;
	public static readonly RULE_lsetStmt = 54;
	public static readonly RULE_macroConstStmt = 55;
	public static readonly RULE_macroIfThenElseStmt = 56;
	public static readonly RULE_macroIfBlockStmt = 57;
	public static readonly RULE_macroElseIfBlockStmt = 58;
	public static readonly RULE_macroElseBlockStmt = 59;
	public static readonly RULE_midStmt = 60;
	public static readonly RULE_mkdirStmt = 61;
	public static readonly RULE_nameStmt = 62;
	public static readonly RULE_onErrorStmt = 63;
	public static readonly RULE_onGoToStmt = 64;
	public static readonly RULE_onGoSubStmt = 65;
	public static readonly RULE_openStmt = 66;
	public static readonly RULE_outputList = 67;
	public static readonly RULE_outputList_Expression = 68;
	public static readonly RULE_printStmt = 69;
	public static readonly RULE_propertyGetStmt = 70;
	public static readonly RULE_propertySetStmt = 71;
	public static readonly RULE_propertyLetStmt = 72;
	public static readonly RULE_putStmt = 73;
	public static readonly RULE_raiseEventStmt = 74;
	public static readonly RULE_randomizeStmt = 75;
	public static readonly RULE_redimStmt = 76;
	public static readonly RULE_redimSubStmt = 77;
	public static readonly RULE_resetStmt = 78;
	public static readonly RULE_resumeStmt = 79;
	public static readonly RULE_returnStmt = 80;
	public static readonly RULE_rmdirStmt = 81;
	public static readonly RULE_rsetStmt = 82;
	public static readonly RULE_savepictureStmt = 83;
	public static readonly RULE_saveSettingStmt = 84;
	public static readonly RULE_seekStmt = 85;
	public static readonly RULE_selectCaseStmt = 86;
	public static readonly RULE_sC_Selection = 87;
	public static readonly RULE_sC_Case = 88;
	public static readonly RULE_sC_Cond = 89;
	public static readonly RULE_sendkeysStmt = 90;
	public static readonly RULE_setattrStmt = 91;
	public static readonly RULE_setStmt = 92;
	public static readonly RULE_stopStmt = 93;
	public static readonly RULE_subStmt = 94;
	public static readonly RULE_timeStmt = 95;
	public static readonly RULE_typeStmt = 96;
	public static readonly RULE_typeStmt_Element = 97;
	public static readonly RULE_typeOfStmt = 98;
	public static readonly RULE_unloadStmt = 99;
	public static readonly RULE_unlockStmt = 100;
	public static readonly RULE_valueStmt = 101;
	public static readonly RULE_variableStmt = 102;
	public static readonly RULE_variableListStmt = 103;
	public static readonly RULE_variableSubStmt = 104;
	public static readonly RULE_whileWendStmt = 105;
	public static readonly RULE_widthStmt = 106;
	public static readonly RULE_withStmt = 107;
	public static readonly RULE_writeStmt = 108;
	public static readonly RULE_fileNumber = 109;
	public static readonly RULE_explicitCallStmt = 110;
	public static readonly RULE_eCS_ProcedureCall = 111;
	public static readonly RULE_eCS_MemberProcedureCall = 112;
	public static readonly RULE_implicitCallStmt_InBlock = 113;
	public static readonly RULE_iCS_B_MemberProcedureCall = 114;
	public static readonly RULE_iCS_B_ProcedureCall = 115;
	public static readonly RULE_implicitCallStmt_InStmt = 116;
	public static readonly RULE_iCS_S_VariableOrProcedureCall = 117;
	public static readonly RULE_iCS_S_ProcedureOrArrayCall = 118;
	public static readonly RULE_iCS_S_MembersCall = 119;
	public static readonly RULE_iCS_S_MemberCall = 120;
	public static readonly RULE_iCS_S_DictionaryCall = 121;
	public static readonly RULE_argsCall = 122;
	public static readonly RULE_argCall = 123;
	public static readonly RULE_dictionaryCallStmt = 124;
	public static readonly RULE_argList = 125;
	public static readonly RULE_arg = 126;
	public static readonly RULE_argDefaultValue = 127;
	public static readonly RULE_subscripts = 128;
	public static readonly RULE_subscript_ = 129;
	public static readonly RULE_ambiguousIdentifier = 130;
	public static readonly RULE_asTypeClause = 131;
	public static readonly RULE_baseType = 132;
	public static readonly RULE_certainIdentifier = 133;
	public static readonly RULE_comparisonOperator = 134;
	public static readonly RULE_complexType = 135;
	public static readonly RULE_fieldLength = 136;
	public static readonly RULE_letterrange = 137;
	public static readonly RULE_lineLabel = 138;
	public static readonly RULE_literal = 139;
	public static readonly RULE_type_ = 140;
	public static readonly RULE_typeHint = 141;
	public static readonly RULE_visibility = 142;
	public static readonly RULE_ambiguousKeyword = 143;
	public static readonly RULE_remComment = 144;
	public static readonly RULE_comment = 145;
	public static readonly RULE_endOfLine = 146;
	public static readonly RULE_endOfStatement = 147;
	public static readonly literalNames: (string | null)[] = [ null, "','", 
                                                            "';'", "'#'", 
                                                            "'.'", "'!'", 
                                                            "'%'", "'@'", 
                                                            "'$'", "'ACCESS'", 
                                                            "'ADDRESSOF'", 
                                                            "'ALIAS'", "'AND'", 
                                                            "'ATTRIBUTE'", 
                                                            "'APPACTIVATE'", 
                                                            "'APPEND'", 
                                                            "'AS'", "'BEGIN'", 
                                                            "'BEEP'", "'BINARY'", 
                                                            "'BOOLEAN'", 
                                                            "'BYVAL'", "'BYREF'", 
                                                            "'BYTE'", "'CALL'", 
                                                            "'CASE'", "'CHDIR'", 
                                                            "'CHDRIVE'", 
                                                            "'CLASS'", "'CLOSE'", 
                                                            "'COLLECTION'", 
                                                            "'CONST'", "'DATABASE'", 
                                                            "'DATE'", "'DECLARE'", 
                                                            "'DEFBOOL'", 
                                                            "'DEFBYTE'", 
                                                            "'DEFDATE'", 
                                                            "'DEFDBL'", 
                                                            "'DEFDEC'", 
                                                            "'DEFCUR'", 
                                                            "'DEFINT'", 
                                                            "'DEFLNG'", 
                                                            "'DEFOBJ'", 
                                                            "'DEFSNG'", 
                                                            "'DEFSTR'", 
                                                            "'DEFVAR'", 
                                                            "'DELETESETTING'", 
                                                            "'DIM'", "'DO'", 
                                                            "'DOUBLE'", 
                                                            "'EACH'", "'ELSE'", 
                                                            "'ELSEIF'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'END'", "'ENUM'", 
                                                            "'EQV'", "'ERASE'", 
                                                            "'ERROR'", "'EVENT'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'FALSE'", 
                                                            "'FILECOPY'", 
                                                            "'FRIEND'", 
                                                            "'FOR'", "'FUNCTION'", 
                                                            "'GET'", "'GLOBAL'", 
                                                            "'GOSUB'", "'GOTO'", 
                                                            "'IF'", "'IMP'", 
                                                            "'IMPLEMENTS'", 
                                                            "'IN'", "'INPUT'", 
                                                            "'IS'", "'INTEGER'", 
                                                            "'KILL'", "'LOAD'", 
                                                            "'LOCK'", "'LONG'", 
                                                            "'LOOP'", "'LEN'", 
                                                            "'LET'", "'LIB'", 
                                                            "'LIKE'", null, 
                                                            null, null, 
                                                            null, "'LSET'", 
                                                            "'#CONST'", 
                                                            "'#IF'", "'#ELSEIF'", 
                                                            "'#ELSE'", null, 
                                                            "'ME'", "'MID'", 
                                                            "'MKDIR'", "'MOD'", 
                                                            "'NAME'", "'NEXT'", 
                                                            "'NEW'", "'NOT'", 
                                                            "'NOTHING'", 
                                                            "'NULL'", "'ON'", 
                                                            null, null, 
                                                            "'OPEN'", "'OPTIONAL'", 
                                                            null, null, 
                                                            null, null, 
                                                            "'OR'", "'OUTPUT'", 
                                                            "'PARAMARRAY'", 
                                                            "'PRESERVE'", 
                                                            "'PRINT'", "'PRIVATE'", 
                                                            null, null, 
                                                            null, "'PTRSAFE'", 
                                                            "'PUBLIC'", 
                                                            "'PUT'", "'RANDOM'", 
                                                            "'RANDOMIZE'", 
                                                            "'RAISEEVENT'", 
                                                            "'READ'", null, 
                                                            "'REDIM'", "'REM'", 
                                                            "'RESET'", "'RESUME'", 
                                                            "'RETURN'", 
                                                            "'RMDIR'", "'RSET'", 
                                                            "'SAVEPICTURE'", 
                                                            "'SAVESETTING'", 
                                                            "'SEEK'", "'SELECT'", 
                                                            "'SENDKEYS'", 
                                                            "'SET'", "'SETATTR'", 
                                                            "'SHARED'", 
                                                            "'SINGLE'", 
                                                            "'SPC'", "'STATIC'", 
                                                            "'STEP'", "'STOP'", 
                                                            "'STRING'", 
                                                            "'SUB'", "'TAB'", 
                                                            "'TEXT'", "'THEN'", 
                                                            "'TIME'", "'TO'", 
                                                            "'TRUE'", "'TYPE'", 
                                                            "'TYPEOF'", 
                                                            "'UNLOAD'", 
                                                            "'UNLOCK'", 
                                                            "'UNTIL'", "'VARIANT'", 
                                                            "'VERSION'", 
                                                            "'WEND'", "'WHILE'", 
                                                            "'WIDTH'", "'WITH'", 
                                                            "'WITHEVENTS'", 
                                                            "'WRITE'", "'XOR'", 
                                                            "'&'", "':='", 
                                                            null, "'='", 
                                                            "'>='", "'>'", 
                                                            "'<='", "'('", 
                                                            "'<'", "'-'", 
                                                            "'-='", "'*'", 
                                                            "'<>'", "'+'", 
                                                            "'+='", "'^'", 
                                                            "')'", "'['", 
                                                            "']'", null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'''", 
                                                            "':'", "'_'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, "ACCESS", 
                                                             "ADDRESSOF", 
                                                             "ALIAS", "AND", 
                                                             "ATTRIBUTE", 
                                                             "APPACTIVATE", 
                                                             "APPEND", "AS", 
                                                             "BEGIN", "BEEP", 
                                                             "BINARY", "BOOLEAN", 
                                                             "BYVAL", "BYREF", 
                                                             "BYTE", "CALL", 
                                                             "CASE", "CHDIR", 
                                                             "CHDRIVE", 
                                                             "CLASS", "CLOSE", 
                                                             "COLLECTION", 
                                                             "CONST", "DATABASE", 
                                                             "DATE", "DECLARE", 
                                                             "DEFBOOL", 
                                                             "DEFBYTE", 
                                                             "DEFDATE", 
                                                             "DEFDBL", "DEFDEC", 
                                                             "DEFCUR", "DEFINT", 
                                                             "DEFLNG", "DEFOBJ", 
                                                             "DEFSNG", "DEFSTR", 
                                                             "DEFVAR", "DELETESETTING", 
                                                             "DIM", "DO", 
                                                             "DOUBLE", "EACH", 
                                                             "ELSE", "ELSEIF", 
                                                             "END_ENUM", 
                                                             "END_FUNCTION", 
                                                             "END_IF", "END_PROPERTY", 
                                                             "END_SELECT", 
                                                             "END_SUB", 
                                                             "END_TYPE", 
                                                             "END_WITH", 
                                                             "END", "ENUM", 
                                                             "EQV", "ERASE", 
                                                             "ERROR", "EVENT", 
                                                             "EXIT_DO", 
                                                             "EXIT_FOR", 
                                                             "EXIT_FUNCTION", 
                                                             "EXIT_PROPERTY", 
                                                             "EXIT_SUB", 
                                                             "FALSE", "FILECOPY", 
                                                             "FRIEND", "FOR", 
                                                             "FUNCTION", 
                                                             "GET", "GLOBAL", 
                                                             "GOSUB", "GOTO", 
                                                             "IF", "IMP", 
                                                             "IMPLEMENTS", 
                                                             "IN", "INPUT", 
                                                             "IS", "INTEGER", 
                                                             "KILL", "LOAD", 
                                                             "LOCK", "LONG", 
                                                             "LOOP", "LEN", 
                                                             "LET", "LIB", 
                                                             "LIKE", "LINE_INPUT", 
                                                             "LOCK_READ", 
                                                             "LOCK_WRITE", 
                                                             "LOCK_READ_WRITE", 
                                                             "LSET", "MACRO_CONST", 
                                                             "MACRO_IF", 
                                                             "MACRO_ELSEIF", 
                                                             "MACRO_ELSE", 
                                                             "MACRO_END_IF", 
                                                             "ME", "MID", 
                                                             "MKDIR", "MOD", 
                                                             "NAME", "NEXT", 
                                                             "NEW", "NOT", 
                                                             "NOTHING", 
                                                             "NULL_", "ON", 
                                                             "ON_ERROR", 
                                                             "ON_LOCAL_ERROR", 
                                                             "OPEN", "OPTIONAL", 
                                                             "OPTION_BASE", 
                                                             "OPTION_EXPLICIT", 
                                                             "OPTION_COMPARE", 
                                                             "OPTION_PRIVATE_MODULE", 
                                                             "OR", "OUTPUT", 
                                                             "PARAMARRAY", 
                                                             "PRESERVE", 
                                                             "PRINT", "PRIVATE", 
                                                             "PROPERTY_GET", 
                                                             "PROPERTY_LET", 
                                                             "PROPERTY_SET", 
                                                             "PTRSAFE", 
                                                             "PUBLIC", "PUT", 
                                                             "RANDOM", "RANDOMIZE", 
                                                             "RAISEEVENT", 
                                                             "READ", "READ_WRITE", 
                                                             "REDIM", "REM", 
                                                             "RESET", "RESUME", 
                                                             "RETURN", "RMDIR", 
                                                             "RSET", "SAVEPICTURE", 
                                                             "SAVESETTING", 
                                                             "SEEK", "SELECT", 
                                                             "SENDKEYS", 
                                                             "SET", "SETATTR", 
                                                             "SHARED", "SINGLE", 
                                                             "SPC", "STATIC", 
                                                             "STEP", "STOP", 
                                                             "STRING", "SUB", 
                                                             "TAB", "TEXT", 
                                                             "THEN", "TIME", 
                                                             "TO", "TRUE", 
                                                             "TYPE", "TYPEOF", 
                                                             "UNLOAD", "UNLOCK", 
                                                             "UNTIL", "VARIANT", 
                                                             "VERSION", 
                                                             "WEND", "WHILE", 
                                                             "WIDTH", "WITH", 
                                                             "WITHEVENTS", 
                                                             "WRITE", "XOR", 
                                                             "AMPERSAND", 
                                                             "ASSIGN", "DIV", 
                                                             "EQ", "GEQ", 
                                                             "GT", "LEQ", 
                                                             "LPAREN", "LT", 
                                                             "MINUS", "MINUS_EQ", 
                                                             "MULT", "NEQ", 
                                                             "PLUS", "PLUS_EQ", 
                                                             "POW", "RPAREN", 
                                                             "L_SQUARE_BRACKET", 
                                                             "R_SQUARE_BRACKET", 
                                                             "GUID", "STRINGLITERAL", 
                                                             "OCTLITERAL", 
                                                             "HEXLITERAL", 
                                                             "SHORTLITERAL", 
                                                             "INTEGERLITERAL", 
                                                             "DOUBLELITERAL", 
                                                             "DATELITERAL", 
                                                             "LINE_CONTINUATION", 
                                                             "NEWLINE", 
                                                             "REMCOMMENT", 
                                                             "COMMENT", 
                                                             "SINGLEQUOTE", 
                                                             "COLON", "UNDERSCORE", 
                                                             "WS", "IDENTIFIER" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"startRule", "module", "moduleHeader", "moduleConfig", "moduleConfigElement", 
		"moduleAttributes", "moduleDeclarations", "moduleOption", "moduleDeclarationsElement", 
		"macroStmt", "moduleBody", "moduleBodyElement", "attributeStmt", "block", 
		"blockStmt", "appactivateStmt", "beepStmt", "chdirStmt", "chdriveStmt", 
		"closeStmt", "constStmt", "constSubStmt", "dateStmt", "declareStmt", "deftypeStmt", 
		"deleteSettingStmt", "doLoopStmt", "endStmt", "enumerationStmt", "enumerationStmt_Constant", 
		"eraseStmt", "errorStmt", "eventStmt", "exitStmt", "filecopyStmt", "forEachStmt", 
		"forNextStmt", "functionStmt", "getStmt", "goSubStmt", "goToStmt", "ifThenElseStmt", 
		"ifBlockStmt", "ifConditionStmt", "ifElseIfBlockStmt", "ifElseBlockStmt", 
		"implementsStmt", "inputStmt", "killStmt", "letStmt", "lineInputStmt", 
		"lineNumber", "loadStmt", "lockStmt", "lsetStmt", "macroConstStmt", "macroIfThenElseStmt", 
		"macroIfBlockStmt", "macroElseIfBlockStmt", "macroElseBlockStmt", "midStmt", 
		"mkdirStmt", "nameStmt", "onErrorStmt", "onGoToStmt", "onGoSubStmt", "openStmt", 
		"outputList", "outputList_Expression", "printStmt", "propertyGetStmt", 
		"propertySetStmt", "propertyLetStmt", "putStmt", "raiseEventStmt", "randomizeStmt", 
		"redimStmt", "redimSubStmt", "resetStmt", "resumeStmt", "returnStmt", 
		"rmdirStmt", "rsetStmt", "savepictureStmt", "saveSettingStmt", "seekStmt", 
		"selectCaseStmt", "sC_Selection", "sC_Case", "sC_Cond", "sendkeysStmt", 
		"setattrStmt", "setStmt", "stopStmt", "subStmt", "timeStmt", "typeStmt", 
		"typeStmt_Element", "typeOfStmt", "unloadStmt", "unlockStmt", "valueStmt", 
		"variableStmt", "variableListStmt", "variableSubStmt", "whileWendStmt", 
		"widthStmt", "withStmt", "writeStmt", "fileNumber", "explicitCallStmt", 
		"eCS_ProcedureCall", "eCS_MemberProcedureCall", "implicitCallStmt_InBlock", 
		"iCS_B_MemberProcedureCall", "iCS_B_ProcedureCall", "implicitCallStmt_InStmt", 
		"iCS_S_VariableOrProcedureCall", "iCS_S_ProcedureOrArrayCall", "iCS_S_MembersCall", 
		"iCS_S_MemberCall", "iCS_S_DictionaryCall", "argsCall", "argCall", "dictionaryCallStmt", 
		"argList", "arg", "argDefaultValue", "subscripts", "subscript_", "ambiguousIdentifier", 
		"asTypeClause", "baseType", "certainIdentifier", "comparisonOperator", 
		"complexType", "fieldLength", "letterrange", "lineLabel", "literal", "type_", 
		"typeHint", "visibility", "ambiguousKeyword", "remComment", "comment", 
		"endOfLine", "endOfStatement",
	];
	public get grammarFileName(): string { return "vba.g4"; }
	public get literalNames(): (string | null)[] { return vbaParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return vbaParser.symbolicNames; }
	public get ruleNames(): string[] { return vbaParser.ruleNames; }
	public get serializedATN(): number[] { return vbaParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, vbaParser._ATN, vbaParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public startRule(): StartRuleContext {
		let localctx: StartRuleContext = new StartRuleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, vbaParser.RULE_startRule);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 296;
			this.module_();
			this.state = 297;
			this.match(vbaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public module_(): ModuleContext {
		let localctx: ModuleContext = new ModuleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, vbaParser.RULE_module);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 300;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 299;
				this.match(vbaParser.WS);
				}
				break;
			}
			this.state = 305;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 302;
					this.endOfLine();
					}
					}
				}
				this.state = 307;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 315;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===178) {
				{
				this.state = 308;
				this.moduleHeader();
				this.state = 312;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 309;
						this.endOfLine();
						}
						}
					}
					this.state = 314;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
				}
				}
			}

			this.state = 318;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===17) {
				{
				this.state = 317;
				this.moduleConfig();
				}
			}

			this.state = 323;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 320;
					this.endOfLine();
					}
					}
				}
				this.state = 325;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			}
			this.state = 327;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===13) {
				{
				this.state = 326;
				this.moduleAttributes();
				}
			}

			this.state = 332;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 329;
					this.endOfLine();
					}
					}
				}
				this.state = 334;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			}
			this.state = 336;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 335;
				this.moduleDeclarations();
				}
				break;
			}
			this.state = 341;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 338;
					this.endOfLine();
					}
					}
				}
				this.state = 343;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
			}
			this.state = 345;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 805306389) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & 536870959) !== 0) || _la===165) {
				{
				this.state = 344;
				this.moduleBody();
				}
			}

			this.state = 350;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 347;
					this.endOfLine();
					}
					}
				}
				this.state = 352;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
			}
			this.state = 354;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 353;
				this.match(vbaParser.WS);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public moduleHeader(): ModuleHeaderContext {
		let localctx: ModuleHeaderContext = new ModuleHeaderContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, vbaParser.RULE_moduleHeader);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 356;
			this.match(vbaParser.VERSION);
			this.state = 357;
			this.match(vbaParser.WS);
			this.state = 358;
			this.match(vbaParser.DOUBLELITERAL);
			this.state = 361;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 359;
				this.match(vbaParser.WS);
				this.state = 360;
				this.match(vbaParser.CLASS);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public moduleConfig(): ModuleConfigContext {
		let localctx: ModuleConfigContext = new ModuleConfigContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, vbaParser.RULE_moduleConfig);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 363;
			this.match(vbaParser.BEGIN);
			this.state = 368;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 364;
				this.match(vbaParser.WS);
				this.state = 365;
				this.match(vbaParser.GUID);
				this.state = 366;
				this.match(vbaParser.WS);
				this.state = 367;
				this.ambiguousIdentifier();
				}
				break;
			}
			this.state = 373;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 214)) & ~0x1F) === 0 && ((1 << (_la - 214)) & 71) !== 0)) {
				{
				{
				this.state = 370;
				this.endOfLine();
				}
				}
				this.state = 375;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 377;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 376;
					this.moduleConfigElement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 379;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 16, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 381;
			this.match(vbaParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public moduleConfigElement(): ModuleConfigElementContext {
		let localctx: ModuleConfigElementContext = new ModuleConfigElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, vbaParser.RULE_moduleConfigElement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 383;
			this.ambiguousIdentifier();
			this.state = 385;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 384;
				this.match(vbaParser.WS);
				}
			}

			this.state = 387;
			this.match(vbaParser.EQ);
			this.state = 389;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 388;
				this.match(vbaParser.WS);
				}
			}

			this.state = 391;
			this.literal();
			this.state = 394;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 392;
				this.match(vbaParser.COLON);
				this.state = 393;
				this.literal();
				}
			}

			this.state = 399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 214)) & ~0x1F) === 0 && ((1 << (_la - 214)) & 71) !== 0)) {
				{
				{
				this.state = 396;
				this.endOfLine();
				}
				}
				this.state = 401;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public moduleAttributes(): ModuleAttributesContext {
		let localctx: ModuleAttributesContext = new ModuleAttributesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, vbaParser.RULE_moduleAttributes);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 408;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 402;
				this.attributeStmt();
				this.state = 404;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 403;
						this.endOfLine();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 406;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				}
				this.state = 410;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===13);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public moduleDeclarations(): ModuleDeclarationsContext {
		let localctx: ModuleDeclarationsContext = new ModuleDeclarationsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, vbaParser.RULE_moduleDeclarations);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 412;
			this.moduleDeclarationsElement();
			this.state = 422;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 414;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 413;
							this.endOfLine();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 416;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 23, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					this.state = 418;
					this.moduleDeclarationsElement();
					}
					}
				}
				this.state = 424;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
			}
			this.state = 428;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 425;
					this.endOfLine();
					}
					}
				}
				this.state = 430;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 25, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public moduleOption(): ModuleOptionContext {
		let localctx: ModuleOptionContext = new ModuleOptionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, vbaParser.RULE_moduleOption);
		let _la: number;
		try {
			this.state = 439;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 123:
				localctx = new OptionBaseStmtContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 431;
				this.match(vbaParser.OPTION_BASE);
				this.state = 432;
				this.match(vbaParser.WS);
				this.state = 433;
				this.match(vbaParser.SHORTLITERAL);
				}
				break;
			case 125:
				localctx = new OptionCompareStmtContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 434;
				this.match(vbaParser.OPTION_COMPARE);
				this.state = 435;
				this.match(vbaParser.WS);
				this.state = 436;
				_la = this._input.LA(1);
				if(!(_la===19 || _la===32 || _la===167)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 124:
				localctx = new OptionExplicitStmtContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 437;
				this.match(vbaParser.OPTION_EXPLICIT);
				}
				break;
			case 126:
				localctx = new OptionPrivateModuleStmtContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 438;
				this.match(vbaParser.OPTION_PRIVATE_MODULE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public moduleDeclarationsElement(): ModuleDeclarationsElementContext {
		let localctx: ModuleDeclarationsElementContext = new ModuleDeclarationsElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, vbaParser.RULE_moduleDeclarationsElement);
		try {
			this.state = 452;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 441;
				this.comment();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 442;
				this.declareStmt();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 443;
				this.enumerationStmt();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 444;
				this.eventStmt();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 445;
				this.constStmt();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 446;
				this.implementsStmt();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 447;
				this.variableStmt();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 448;
				this.moduleOption();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 449;
				this.typeStmt();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 450;
				this.deftypeStmt();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 451;
				this.macroStmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public macroStmt(): MacroStmtContext {
		let localctx: MacroStmtContext = new MacroStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, vbaParser.RULE_macroStmt);
		try {
			this.state = 456;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 103:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 454;
				this.macroConstStmt();
				}
				break;
			case 104:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 455;
				this.macroIfThenElseStmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public moduleBody(): ModuleBodyContext {
		let localctx: ModuleBodyContext = new ModuleBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, vbaParser.RULE_moduleBody);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 458;
			this.moduleBodyElement();
			this.state = 468;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 460;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 459;
						this.endOfLine();
						}
						}
						this.state = 462;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (((((_la - 214)) & ~0x1F) === 0 && ((1 << (_la - 214)) & 71) !== 0));
					this.state = 464;
					this.moduleBodyElement();
					}
					}
				}
				this.state = 470;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 30, this._ctx);
			}
			this.state = 474;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 471;
					this.endOfLine();
					}
					}
				}
				this.state = 476;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 31, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public moduleBodyElement(): ModuleBodyElementContext {
		let localctx: ModuleBodyElementContext = new ModuleBodyElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, vbaParser.RULE_moduleBodyElement);
		try {
			this.state = 483;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 477;
				this.functionStmt();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 478;
				this.propertyGetStmt();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 479;
				this.propertySetStmt();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 480;
				this.propertyLetStmt();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 481;
				this.subStmt();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 482;
				this.macroStmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attributeStmt(): AttributeStmtContext {
		let localctx: AttributeStmtContext = new AttributeStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, vbaParser.RULE_attributeStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 485;
			this.match(vbaParser.ATTRIBUTE);
			this.state = 486;
			this.match(vbaParser.WS);
			this.state = 487;
			this.implicitCallStmt_InStmt();
			this.state = 489;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 488;
				this.match(vbaParser.WS);
				}
			}

			this.state = 491;
			this.match(vbaParser.EQ);
			this.state = 493;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 492;
				this.match(vbaParser.WS);
				}
			}

			this.state = 495;
			this.literal();
			this.state = 506;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 497;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 496;
						this.match(vbaParser.WS);
						}
					}

					this.state = 499;
					this.match(vbaParser.T__0);
					this.state = 501;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 500;
						this.match(vbaParser.WS);
						}
					}

					this.state = 503;
					this.literal();
					}
					}
				}
				this.state = 508;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, vbaParser.RULE_block);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 509;
			this.blockStmt();
			this.state = 515;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 38, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 510;
					this.endOfStatement();
					this.state = 511;
					this.blockStmt();
					}
					}
				}
				this.state = 517;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 38, this._ctx);
			}
			this.state = 518;
			this.endOfStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public blockStmt(): BlockStmtContext {
		let localctx: BlockStmtContext = new BlockStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, vbaParser.RULE_blockStmt);
		try {
			this.state = 588;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 520;
				this.lineLabel();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 521;
				this.appactivateStmt();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 522;
				this.attributeStmt();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 523;
				this.beepStmt();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 524;
				this.chdirStmt();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 525;
				this.chdriveStmt();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 526;
				this.closeStmt();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 527;
				this.constStmt();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 528;
				this.dateStmt();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 529;
				this.deleteSettingStmt();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 530;
				this.doLoopStmt();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 531;
				this.endStmt();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 532;
				this.eraseStmt();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 533;
				this.errorStmt();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 534;
				this.exitStmt();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 535;
				this.explicitCallStmt();
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 536;
				this.filecopyStmt();
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 18);
				{
				this.state = 537;
				this.forEachStmt();
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 19);
				{
				this.state = 538;
				this.forNextStmt();
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 20);
				{
				this.state = 539;
				this.getStmt();
				}
				break;
			case 21:
				this.enterOuterAlt(localctx, 21);
				{
				this.state = 540;
				this.goSubStmt();
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 22);
				{
				this.state = 541;
				this.goToStmt();
				}
				break;
			case 23:
				this.enterOuterAlt(localctx, 23);
				{
				this.state = 542;
				this.ifThenElseStmt();
				}
				break;
			case 24:
				this.enterOuterAlt(localctx, 24);
				{
				this.state = 543;
				this.implementsStmt();
				}
				break;
			case 25:
				this.enterOuterAlt(localctx, 25);
				{
				this.state = 544;
				this.inputStmt();
				}
				break;
			case 26:
				this.enterOuterAlt(localctx, 26);
				{
				this.state = 545;
				this.killStmt();
				}
				break;
			case 27:
				this.enterOuterAlt(localctx, 27);
				{
				this.state = 546;
				this.letStmt();
				}
				break;
			case 28:
				this.enterOuterAlt(localctx, 28);
				{
				this.state = 547;
				this.lineInputStmt();
				}
				break;
			case 29:
				this.enterOuterAlt(localctx, 29);
				{
				this.state = 548;
				this.lineNumber();
				}
				break;
			case 30:
				this.enterOuterAlt(localctx, 30);
				{
				this.state = 549;
				this.loadStmt();
				}
				break;
			case 31:
				this.enterOuterAlt(localctx, 31);
				{
				this.state = 550;
				this.lockStmt();
				}
				break;
			case 32:
				this.enterOuterAlt(localctx, 32);
				{
				this.state = 551;
				this.lsetStmt();
				}
				break;
			case 33:
				this.enterOuterAlt(localctx, 33);
				{
				this.state = 552;
				this.macroStmt();
				}
				break;
			case 34:
				this.enterOuterAlt(localctx, 34);
				{
				this.state = 553;
				this.midStmt();
				}
				break;
			case 35:
				this.enterOuterAlt(localctx, 35);
				{
				this.state = 554;
				this.mkdirStmt();
				}
				break;
			case 36:
				this.enterOuterAlt(localctx, 36);
				{
				this.state = 555;
				this.nameStmt();
				}
				break;
			case 37:
				this.enterOuterAlt(localctx, 37);
				{
				this.state = 556;
				this.onErrorStmt();
				}
				break;
			case 38:
				this.enterOuterAlt(localctx, 38);
				{
				this.state = 557;
				this.onGoToStmt();
				}
				break;
			case 39:
				this.enterOuterAlt(localctx, 39);
				{
				this.state = 558;
				this.onGoSubStmt();
				}
				break;
			case 40:
				this.enterOuterAlt(localctx, 40);
				{
				this.state = 559;
				this.openStmt();
				}
				break;
			case 41:
				this.enterOuterAlt(localctx, 41);
				{
				this.state = 560;
				this.printStmt();
				}
				break;
			case 42:
				this.enterOuterAlt(localctx, 42);
				{
				this.state = 561;
				this.putStmt();
				}
				break;
			case 43:
				this.enterOuterAlt(localctx, 43);
				{
				this.state = 562;
				this.raiseEventStmt();
				}
				break;
			case 44:
				this.enterOuterAlt(localctx, 44);
				{
				this.state = 563;
				this.randomizeStmt();
				}
				break;
			case 45:
				this.enterOuterAlt(localctx, 45);
				{
				this.state = 564;
				this.redimStmt();
				}
				break;
			case 46:
				this.enterOuterAlt(localctx, 46);
				{
				this.state = 565;
				this.resetStmt();
				}
				break;
			case 47:
				this.enterOuterAlt(localctx, 47);
				{
				this.state = 566;
				this.resumeStmt();
				}
				break;
			case 48:
				this.enterOuterAlt(localctx, 48);
				{
				this.state = 567;
				this.returnStmt();
				}
				break;
			case 49:
				this.enterOuterAlt(localctx, 49);
				{
				this.state = 568;
				this.rmdirStmt();
				}
				break;
			case 50:
				this.enterOuterAlt(localctx, 50);
				{
				this.state = 569;
				this.rsetStmt();
				}
				break;
			case 51:
				this.enterOuterAlt(localctx, 51);
				{
				this.state = 570;
				this.savepictureStmt();
				}
				break;
			case 52:
				this.enterOuterAlt(localctx, 52);
				{
				this.state = 571;
				this.saveSettingStmt();
				}
				break;
			case 53:
				this.enterOuterAlt(localctx, 53);
				{
				this.state = 572;
				this.seekStmt();
				}
				break;
			case 54:
				this.enterOuterAlt(localctx, 54);
				{
				this.state = 573;
				this.selectCaseStmt();
				}
				break;
			case 55:
				this.enterOuterAlt(localctx, 55);
				{
				this.state = 574;
				this.sendkeysStmt();
				}
				break;
			case 56:
				this.enterOuterAlt(localctx, 56);
				{
				this.state = 575;
				this.setattrStmt();
				}
				break;
			case 57:
				this.enterOuterAlt(localctx, 57);
				{
				this.state = 576;
				this.setStmt();
				}
				break;
			case 58:
				this.enterOuterAlt(localctx, 58);
				{
				this.state = 577;
				this.stopStmt();
				}
				break;
			case 59:
				this.enterOuterAlt(localctx, 59);
				{
				this.state = 578;
				this.timeStmt();
				}
				break;
			case 60:
				this.enterOuterAlt(localctx, 60);
				{
				this.state = 579;
				this.unloadStmt();
				}
				break;
			case 61:
				this.enterOuterAlt(localctx, 61);
				{
				this.state = 580;
				this.unlockStmt();
				}
				break;
			case 62:
				this.enterOuterAlt(localctx, 62);
				{
				this.state = 581;
				this.variableStmt();
				}
				break;
			case 63:
				this.enterOuterAlt(localctx, 63);
				{
				this.state = 582;
				this.whileWendStmt();
				}
				break;
			case 64:
				this.enterOuterAlt(localctx, 64);
				{
				this.state = 583;
				this.widthStmt();
				}
				break;
			case 65:
				this.enterOuterAlt(localctx, 65);
				{
				this.state = 584;
				this.withStmt();
				}
				break;
			case 66:
				this.enterOuterAlt(localctx, 66);
				{
				this.state = 585;
				this.writeStmt();
				}
				break;
			case 67:
				this.enterOuterAlt(localctx, 67);
				{
				this.state = 586;
				this.implicitCallStmt_InBlock();
				}
				break;
			case 68:
				this.enterOuterAlt(localctx, 68);
				{
				this.state = 587;
				this.implicitCallStmt_InStmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public appactivateStmt(): AppactivateStmtContext {
		let localctx: AppactivateStmtContext = new AppactivateStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, vbaParser.RULE_appactivateStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 590;
			this.match(vbaParser.APPACTIVATE);
			this.state = 591;
			this.match(vbaParser.WS);
			this.state = 592;
			this.valueStmt(0);
			this.state = 601;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				{
				this.state = 594;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 593;
					this.match(vbaParser.WS);
					}
				}

				this.state = 596;
				this.match(vbaParser.T__0);
				this.state = 598;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 597;
					this.match(vbaParser.WS);
					}
				}

				this.state = 600;
				this.valueStmt(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public beepStmt(): BeepStmtContext {
		let localctx: BeepStmtContext = new BeepStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, vbaParser.RULE_beepStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 603;
			this.match(vbaParser.BEEP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public chdirStmt(): ChdirStmtContext {
		let localctx: ChdirStmtContext = new ChdirStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, vbaParser.RULE_chdirStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 605;
			this.match(vbaParser.CHDIR);
			this.state = 606;
			this.match(vbaParser.WS);
			this.state = 607;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public chdriveStmt(): ChdriveStmtContext {
		let localctx: ChdriveStmtContext = new ChdriveStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, vbaParser.RULE_chdriveStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 609;
			this.match(vbaParser.CHDRIVE);
			this.state = 610;
			this.match(vbaParser.WS);
			this.state = 611;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public closeStmt(): CloseStmtContext {
		let localctx: CloseStmtContext = new CloseStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, vbaParser.RULE_closeStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 613;
			this.match(vbaParser.CLOSE);
			this.state = 629;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				{
				this.state = 614;
				this.match(vbaParser.WS);
				this.state = 615;
				this.fileNumber();
				this.state = 626;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 45, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 617;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===220) {
							{
							this.state = 616;
							this.match(vbaParser.WS);
							}
						}

						this.state = 619;
						this.match(vbaParser.T__0);
						this.state = 621;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===220) {
							{
							this.state = 620;
							this.match(vbaParser.WS);
							}
						}

						this.state = 623;
						this.fileNumber();
						}
						}
					}
					this.state = 628;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 45, this._ctx);
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constStmt(): ConstStmtContext {
		let localctx: ConstStmtContext = new ConstStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, vbaParser.RULE_constStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 634;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===75 || _la===79 || _la===132 || _la===137) {
				{
				this.state = 631;
				this.visibility();
				this.state = 632;
				this.match(vbaParser.WS);
				}
			}

			this.state = 636;
			this.match(vbaParser.CONST);
			this.state = 637;
			this.match(vbaParser.WS);
			this.state = 638;
			this.constSubStmt();
			this.state = 649;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 50, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 640;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 639;
						this.match(vbaParser.WS);
						}
					}

					this.state = 642;
					this.match(vbaParser.T__0);
					this.state = 644;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 643;
						this.match(vbaParser.WS);
						}
					}

					this.state = 646;
					this.constSubStmt();
					}
					}
				}
				this.state = 651;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 50, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constSubStmt(): ConstSubStmtContext {
		let localctx: ConstSubStmtContext = new ConstSubStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, vbaParser.RULE_constSubStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 652;
			this.ambiguousIdentifier();
			this.state = 654;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 488) !== 0) || _la===186) {
				{
				this.state = 653;
				this.typeHint();
				}
			}

			this.state = 658;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				{
				this.state = 656;
				this.match(vbaParser.WS);
				this.state = 657;
				this.asTypeClause();
				}
				break;
			}
			this.state = 661;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 660;
				this.match(vbaParser.WS);
				}
			}

			this.state = 663;
			this.match(vbaParser.EQ);
			this.state = 665;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 664;
				this.match(vbaParser.WS);
				}
			}

			this.state = 667;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dateStmt(): DateStmtContext {
		let localctx: DateStmtContext = new DateStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, vbaParser.RULE_dateStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 669;
			this.match(vbaParser.DATE);
			this.state = 671;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 670;
				this.match(vbaParser.WS);
				}
			}

			this.state = 673;
			this.match(vbaParser.EQ);
			this.state = 675;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 674;
				this.match(vbaParser.WS);
				}
			}

			this.state = 677;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declareStmt(): DeclareStmtContext {
		let localctx: DeclareStmtContext = new DeclareStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, vbaParser.RULE_declareStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 682;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===75 || _la===79 || _la===132 || _la===137) {
				{
				this.state = 679;
				this.visibility();
				this.state = 680;
				this.match(vbaParser.WS);
				}
			}

			this.state = 684;
			this.match(vbaParser.DECLARE);
			this.state = 685;
			this.match(vbaParser.WS);
			this.state = 688;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===136) {
				{
				this.state = 686;
				this.match(vbaParser.PTRSAFE);
				this.state = 687;
				this.match(vbaParser.WS);
				}
			}

			this.state = 695;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 77:
				{
				{
				this.state = 690;
				this.match(vbaParser.FUNCTION);
				this.state = 692;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 488) !== 0) || _la===186) {
					{
					this.state = 691;
					this.typeHint();
					}
				}

				}
				}
				break;
			case 165:
				{
				this.state = 694;
				this.match(vbaParser.SUB);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 697;
			this.match(vbaParser.WS);
			this.state = 698;
			this.ambiguousIdentifier();
			this.state = 700;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 488) !== 0) || _la===186) {
				{
				this.state = 699;
				this.typeHint();
				}
			}

			this.state = 702;
			this.match(vbaParser.WS);
			this.state = 703;
			this.match(vbaParser.LIB);
			this.state = 704;
			this.match(vbaParser.WS);
			this.state = 705;
			this.match(vbaParser.STRINGLITERAL);
			this.state = 710;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				{
				this.state = 706;
				this.match(vbaParser.WS);
				this.state = 707;
				this.match(vbaParser.ALIAS);
				this.state = 708;
				this.match(vbaParser.WS);
				this.state = 709;
				this.match(vbaParser.STRINGLITERAL);
				}
				break;
			}
			this.state = 716;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				{
				this.state = 713;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 712;
					this.match(vbaParser.WS);
					}
				}

				this.state = 715;
				this.argList();
				}
				break;
			}
			this.state = 720;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				{
				this.state = 718;
				this.match(vbaParser.WS);
				this.state = 719;
				this.asTypeClause();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public deftypeStmt(): DeftypeStmtContext {
		let localctx: DeftypeStmtContext = new DeftypeStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, vbaParser.RULE_deftypeStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 722;
			_la = this._input.LA(1);
			if(!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 4095) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 723;
			this.match(vbaParser.WS);
			this.state = 724;
			this.letterrange();
			this.state = 735;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 68, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 726;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 725;
						this.match(vbaParser.WS);
						}
					}

					this.state = 728;
					this.match(vbaParser.T__0);
					this.state = 730;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 729;
						this.match(vbaParser.WS);
						}
					}

					this.state = 732;
					this.letterrange();
					}
					}
				}
				this.state = 737;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 68, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public deleteSettingStmt(): DeleteSettingStmtContext {
		let localctx: DeleteSettingStmtContext = new DeleteSettingStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, vbaParser.RULE_deleteSettingStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 738;
			this.match(vbaParser.DELETESETTING);
			this.state = 739;
			this.match(vbaParser.WS);
			this.state = 740;
			this.valueStmt(0);
			this.state = 742;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 741;
				this.match(vbaParser.WS);
				}
			}

			this.state = 744;
			this.match(vbaParser.T__0);
			this.state = 746;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 745;
				this.match(vbaParser.WS);
				}
			}

			this.state = 748;
			this.valueStmt(0);
			this.state = 757;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				{
				this.state = 750;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 749;
					this.match(vbaParser.WS);
					}
				}

				this.state = 752;
				this.match(vbaParser.T__0);
				this.state = 754;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 753;
					this.match(vbaParser.WS);
					}
				}

				this.state = 756;
				this.valueStmt(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public doLoopStmt(): DoLoopStmtContext {
		let localctx: DoLoopStmtContext = new DoLoopStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, vbaParser.RULE_doLoopStmt);
		let _la: number;
		try {
			this.state = 786;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 759;
				this.match(vbaParser.DO);
				this.state = 760;
				this.endOfStatement();
				this.state = 762;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 74, this._ctx) ) {
				case 1:
					{
					this.state = 761;
					this.block();
					}
					break;
				}
				this.state = 764;
				this.match(vbaParser.LOOP);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 766;
				this.match(vbaParser.DO);
				this.state = 767;
				this.match(vbaParser.WS);
				this.state = 768;
				_la = this._input.LA(1);
				if(!(_la===176 || _la===180)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 769;
				this.match(vbaParser.WS);
				this.state = 770;
				this.valueStmt(0);
				this.state = 771;
				this.endOfStatement();
				this.state = 773;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 75, this._ctx) ) {
				case 1:
					{
					this.state = 772;
					this.block();
					}
					break;
				}
				this.state = 775;
				this.match(vbaParser.LOOP);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 777;
				this.match(vbaParser.DO);
				this.state = 778;
				this.endOfStatement();
				this.state = 779;
				this.block();
				this.state = 780;
				this.match(vbaParser.LOOP);
				this.state = 781;
				this.match(vbaParser.WS);
				this.state = 782;
				_la = this._input.LA(1);
				if(!(_la===176 || _la===180)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 783;
				this.match(vbaParser.WS);
				this.state = 784;
				this.valueStmt(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public endStmt(): EndStmtContext {
		let localctx: EndStmtContext = new EndStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, vbaParser.RULE_endStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 788;
			this.match(vbaParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumerationStmt(): EnumerationStmtContext {
		let localctx: EnumerationStmtContext = new EnumerationStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, vbaParser.RULE_enumerationStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 793;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===75 || _la===79 || _la===132 || _la===137) {
				{
				this.state = 790;
				this.visibility();
				this.state = 791;
				this.match(vbaParser.WS);
				}
			}

			this.state = 795;
			this.match(vbaParser.ENUM);
			this.state = 796;
			this.match(vbaParser.WS);
			this.state = 797;
			this.ambiguousIdentifier();
			this.state = 798;
			this.endOfStatement();
			this.state = 802;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294966784) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3225419775) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294966799) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 2256531523) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294934047) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 67108863) !== 0) || _la===221) {
				{
				{
				this.state = 799;
				this.enumerationStmt_Constant();
				}
				}
				this.state = 804;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 805;
			this.match(vbaParser.END_ENUM);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumerationStmt_Constant(): EnumerationStmt_ConstantContext {
		let localctx: EnumerationStmt_ConstantContext = new EnumerationStmt_ConstantContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, vbaParser.RULE_enumerationStmt_Constant);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 807;
			this.ambiguousIdentifier();
			this.state = 816;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 81, this._ctx) ) {
			case 1:
				{
				this.state = 809;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 808;
					this.match(vbaParser.WS);
					}
				}

				this.state = 811;
				this.match(vbaParser.EQ);
				this.state = 813;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 812;
					this.match(vbaParser.WS);
					}
				}

				this.state = 815;
				this.valueStmt(0);
				}
				break;
			}
			this.state = 818;
			this.endOfStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public eraseStmt(): EraseStmtContext {
		let localctx: EraseStmtContext = new EraseStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, vbaParser.RULE_eraseStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 820;
			this.match(vbaParser.ERASE);
			this.state = 821;
			this.match(vbaParser.WS);
			this.state = 822;
			this.valueStmt(0);
			this.state = 830;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 83, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 823;
					this.match(vbaParser.T__0);
					this.state = 825;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 824;
						this.match(vbaParser.WS);
						}
					}

					this.state = 827;
					this.valueStmt(0);
					}
					}
				}
				this.state = 832;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 83, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public errorStmt(): ErrorStmtContext {
		let localctx: ErrorStmtContext = new ErrorStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, vbaParser.RULE_errorStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 833;
			this.match(vbaParser.ERROR);
			this.state = 834;
			this.match(vbaParser.WS);
			this.state = 835;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public eventStmt(): EventStmtContext {
		let localctx: EventStmtContext = new EventStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, vbaParser.RULE_eventStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 840;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===75 || _la===79 || _la===132 || _la===137) {
				{
				this.state = 837;
				this.visibility();
				this.state = 838;
				this.match(vbaParser.WS);
				}
			}

			this.state = 842;
			this.match(vbaParser.EVENT);
			this.state = 843;
			this.match(vbaParser.WS);
			this.state = 844;
			this.ambiguousIdentifier();
			this.state = 846;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 845;
				this.match(vbaParser.WS);
				}
			}

			this.state = 848;
			this.argList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public exitStmt(): ExitStmtContext {
		let localctx: ExitStmtContext = new ExitStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, vbaParser.RULE_exitStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 850;
			_la = this._input.LA(1);
			if(!(((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 31) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public filecopyStmt(): FilecopyStmtContext {
		let localctx: FilecopyStmtContext = new FilecopyStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, vbaParser.RULE_filecopyStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 852;
			this.match(vbaParser.FILECOPY);
			this.state = 853;
			this.match(vbaParser.WS);
			this.state = 854;
			this.valueStmt(0);
			this.state = 856;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 855;
				this.match(vbaParser.WS);
				}
			}

			this.state = 858;
			this.match(vbaParser.T__0);
			this.state = 860;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 859;
				this.match(vbaParser.WS);
				}
			}

			this.state = 862;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public forEachStmt(): ForEachStmtContext {
		let localctx: ForEachStmtContext = new ForEachStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, vbaParser.RULE_forEachStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 864;
			this.match(vbaParser.FOR);
			this.state = 865;
			this.match(vbaParser.WS);
			this.state = 866;
			this.match(vbaParser.EACH);
			this.state = 867;
			this.match(vbaParser.WS);
			this.state = 868;
			this.ambiguousIdentifier();
			this.state = 870;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 488) !== 0) || _la===186) {
				{
				this.state = 869;
				this.typeHint();
				}
			}

			this.state = 872;
			this.match(vbaParser.WS);
			this.state = 873;
			this.match(vbaParser.IN);
			this.state = 874;
			this.match(vbaParser.WS);
			this.state = 875;
			this.valueStmt(0);
			this.state = 876;
			this.endOfStatement();
			this.state = 878;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 89, this._ctx) ) {
			case 1:
				{
				this.state = 877;
				this.block();
				}
				break;
			}
			this.state = 880;
			this.match(vbaParser.NEXT);
			this.state = 883;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				{
				this.state = 881;
				this.match(vbaParser.WS);
				this.state = 882;
				this.ambiguousIdentifier();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public forNextStmt(): ForNextStmtContext {
		let localctx: ForNextStmtContext = new ForNextStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, vbaParser.RULE_forNextStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 885;
			this.match(vbaParser.FOR);
			this.state = 886;
			this.match(vbaParser.WS);
			this.state = 887;
			this.ambiguousIdentifier();
			this.state = 889;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 488) !== 0) || _la===186) {
				{
				this.state = 888;
				this.typeHint();
				}
			}

			this.state = 893;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				{
				this.state = 891;
				this.match(vbaParser.WS);
				this.state = 892;
				this.asTypeClause();
				}
				break;
			}
			this.state = 896;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 895;
				this.match(vbaParser.WS);
				}
			}

			this.state = 898;
			this.match(vbaParser.EQ);
			this.state = 900;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 899;
				this.match(vbaParser.WS);
				}
			}

			this.state = 902;
			this.valueStmt(0);
			this.state = 903;
			this.match(vbaParser.WS);
			this.state = 904;
			this.match(vbaParser.TO);
			this.state = 905;
			this.match(vbaParser.WS);
			this.state = 906;
			this.valueStmt(0);
			this.state = 911;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				{
				this.state = 907;
				this.match(vbaParser.WS);
				this.state = 908;
				this.match(vbaParser.STEP);
				this.state = 909;
				this.match(vbaParser.WS);
				this.state = 910;
				this.valueStmt(0);
				}
				break;
			}
			this.state = 913;
			this.endOfStatement();
			this.state = 915;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				{
				this.state = 914;
				this.block();
				}
				break;
			}
			this.state = 917;
			this.match(vbaParser.NEXT);
			this.state = 920;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				{
				this.state = 918;
				this.match(vbaParser.WS);
				this.state = 919;
				this.ambiguousIdentifier();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionStmt(): FunctionStmtContext {
		let localctx: FunctionStmtContext = new FunctionStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, vbaParser.RULE_functionStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 925;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===75 || _la===79 || _la===132 || _la===137) {
				{
				this.state = 922;
				this.visibility();
				this.state = 923;
				this.match(vbaParser.WS);
				}
			}

			this.state = 929;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===161) {
				{
				this.state = 927;
				this.match(vbaParser.STATIC);
				this.state = 928;
				this.match(vbaParser.WS);
				}
			}

			this.state = 931;
			this.match(vbaParser.FUNCTION);
			this.state = 933;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 932;
				this.match(vbaParser.WS);
				}
			}

			this.state = 935;
			this.ambiguousIdentifier();
			this.state = 937;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 101, this._ctx) ) {
			case 1:
				{
				this.state = 936;
				this.typeHint();
				}
				break;
			}
			this.state = 943;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 103, this._ctx) ) {
			case 1:
				{
				this.state = 940;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 939;
					this.match(vbaParser.WS);
					}
				}

				this.state = 942;
				this.argList();
				}
				break;
			}
			this.state = 949;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 105, this._ctx) ) {
			case 1:
				{
				this.state = 946;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 945;
					this.match(vbaParser.WS);
					}
				}

				this.state = 948;
				this.asTypeClause();
				}
				break;
			}
			this.state = 951;
			this.endOfStatement();
			this.state = 953;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294966832) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3225419775) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 2281697735) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294934047) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 67108863) !== 0) || ((((_la - 209)) & ~0x1F) === 0 && ((1 << (_la - 209)) & 4115) !== 0)) {
				{
				this.state = 952;
				this.block();
				}
			}

			this.state = 955;
			this.match(vbaParser.END_FUNCTION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public getStmt(): GetStmtContext {
		let localctx: GetStmtContext = new GetStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, vbaParser.RULE_getStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 957;
			this.match(vbaParser.GET);
			this.state = 958;
			this.match(vbaParser.WS);
			this.state = 959;
			this.fileNumber();
			this.state = 961;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 960;
				this.match(vbaParser.WS);
				}
			}

			this.state = 963;
			this.match(vbaParser.T__0);
			this.state = 965;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				{
				this.state = 964;
				this.match(vbaParser.WS);
				}
				break;
			}
			this.state = 968;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294966832) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3225419775) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294966799) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 2256531523) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294934047) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 67108863) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & 270524485) !== 0)) {
				{
				this.state = 967;
				this.valueStmt(0);
				}
			}

			this.state = 971;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 970;
				this.match(vbaParser.WS);
				}
			}

			this.state = 973;
			this.match(vbaParser.T__0);
			this.state = 975;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 974;
				this.match(vbaParser.WS);
				}
			}

			this.state = 977;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public goSubStmt(): GoSubStmtContext {
		let localctx: GoSubStmtContext = new GoSubStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, vbaParser.RULE_goSubStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 979;
			this.match(vbaParser.GOSUB);
			this.state = 980;
			this.match(vbaParser.WS);
			this.state = 981;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public goToStmt(): GoToStmtContext {
		let localctx: GoToStmtContext = new GoToStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, vbaParser.RULE_goToStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 983;
			this.match(vbaParser.GOTO);
			this.state = 984;
			this.match(vbaParser.WS);
			this.state = 985;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifThenElseStmt(): IfThenElseStmtContext {
		let localctx: IfThenElseStmtContext = new IfThenElseStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, vbaParser.RULE_ifThenElseStmt);
		let _la: number;
		try {
			this.state = 1012;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 115, this._ctx) ) {
			case 1:
				localctx = new InlineIfThenElseContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 987;
				this.match(vbaParser.IF);
				this.state = 988;
				this.match(vbaParser.WS);
				this.state = 989;
				this.ifConditionStmt();
				this.state = 990;
				this.match(vbaParser.WS);
				this.state = 991;
				this.match(vbaParser.THEN);
				this.state = 992;
				this.match(vbaParser.WS);
				this.state = 993;
				this.blockStmt();
				this.state = 998;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 112, this._ctx) ) {
				case 1:
					{
					this.state = 994;
					this.match(vbaParser.WS);
					this.state = 995;
					this.match(vbaParser.ELSE);
					this.state = 996;
					this.match(vbaParser.WS);
					this.state = 997;
					this.blockStmt();
					}
					break;
				}
				}
				break;
			case 2:
				localctx = new BlockIfThenElseContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1000;
				this.ifBlockStmt();
				this.state = 1004;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===53) {
					{
					{
					this.state = 1001;
					this.ifElseIfBlockStmt();
					}
					}
					this.state = 1006;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1008;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===52) {
					{
					this.state = 1007;
					this.ifElseBlockStmt();
					}
				}

				this.state = 1010;
				this.match(vbaParser.END_IF);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifBlockStmt(): IfBlockStmtContext {
		let localctx: IfBlockStmtContext = new IfBlockStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, vbaParser.RULE_ifBlockStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1014;
			this.match(vbaParser.IF);
			this.state = 1015;
			this.match(vbaParser.WS);
			this.state = 1016;
			this.ifConditionStmt();
			this.state = 1017;
			this.match(vbaParser.WS);
			this.state = 1018;
			this.match(vbaParser.THEN);
			this.state = 1019;
			this.endOfStatement();
			this.state = 1021;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 116, this._ctx) ) {
			case 1:
				{
				this.state = 1020;
				this.block();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifConditionStmt(): IfConditionStmtContext {
		let localctx: IfConditionStmtContext = new IfConditionStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, vbaParser.RULE_ifConditionStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1023;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifElseIfBlockStmt(): IfElseIfBlockStmtContext {
		let localctx: IfElseIfBlockStmtContext = new IfElseIfBlockStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, vbaParser.RULE_ifElseIfBlockStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1025;
			this.match(vbaParser.ELSEIF);
			this.state = 1026;
			this.match(vbaParser.WS);
			this.state = 1027;
			this.ifConditionStmt();
			this.state = 1028;
			this.match(vbaParser.WS);
			this.state = 1029;
			this.match(vbaParser.THEN);
			this.state = 1030;
			this.endOfStatement();
			this.state = 1032;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				{
				this.state = 1031;
				this.block();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifElseBlockStmt(): IfElseBlockStmtContext {
		let localctx: IfElseBlockStmtContext = new IfElseBlockStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, vbaParser.RULE_ifElseBlockStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1034;
			this.match(vbaParser.ELSE);
			this.state = 1035;
			this.endOfStatement();
			this.state = 1037;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294966832) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3225419775) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 2281697735) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294934047) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 67108863) !== 0) || ((((_la - 209)) & ~0x1F) === 0 && ((1 << (_la - 209)) & 4115) !== 0)) {
				{
				this.state = 1036;
				this.block();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public implementsStmt(): ImplementsStmtContext {
		let localctx: ImplementsStmtContext = new ImplementsStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, vbaParser.RULE_implementsStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1039;
			this.match(vbaParser.IMPLEMENTS);
			this.state = 1040;
			this.match(vbaParser.WS);
			this.state = 1041;
			this.ambiguousIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public inputStmt(): InputStmtContext {
		let localctx: InputStmtContext = new InputStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, vbaParser.RULE_inputStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1043;
			this.match(vbaParser.INPUT);
			this.state = 1044;
			this.match(vbaParser.WS);
			this.state = 1045;
			this.fileNumber();
			this.state = 1054;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1047;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 1046;
						this.match(vbaParser.WS);
						}
					}

					this.state = 1049;
					this.match(vbaParser.T__0);
					this.state = 1051;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 1050;
						this.match(vbaParser.WS);
						}
					}

					this.state = 1053;
					this.valueStmt(0);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1056;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 121, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public killStmt(): KillStmtContext {
		let localctx: KillStmtContext = new KillStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, vbaParser.RULE_killStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1058;
			this.match(vbaParser.KILL);
			this.state = 1059;
			this.match(vbaParser.WS);
			this.state = 1060;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public letStmt(): LetStmtContext {
		let localctx: LetStmtContext = new LetStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, vbaParser.RULE_letStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1064;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 122, this._ctx) ) {
			case 1:
				{
				this.state = 1062;
				this.match(vbaParser.LET);
				this.state = 1063;
				this.match(vbaParser.WS);
				}
				break;
			}
			this.state = 1066;
			this.implicitCallStmt_InStmt();
			this.state = 1068;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1067;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1070;
			_la = this._input.LA(1);
			if(!(((((_la - 189)) & ~0x1F) === 0 && ((1 << (_la - 189)) & 2177) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1072;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1071;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1075;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 125, this._ctx) ) {
			case 1:
				{
				this.state = 1074;
				this.typeHint();
				}
				break;
			}
			this.state = 1077;
			this.valueStmt(0);
			this.state = 1079;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 126, this._ctx) ) {
			case 1:
				{
				this.state = 1078;
				this.typeHint();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lineInputStmt(): LineInputStmtContext {
		let localctx: LineInputStmtContext = new LineInputStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, vbaParser.RULE_lineInputStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1081;
			this.match(vbaParser.LINE_INPUT);
			this.state = 1082;
			this.match(vbaParser.WS);
			this.state = 1083;
			this.fileNumber();
			this.state = 1085;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1084;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1087;
			this.match(vbaParser.T__0);
			this.state = 1089;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1088;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1091;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lineNumber(): LineNumberContext {
		let localctx: LineNumberContext = new LineNumberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, vbaParser.RULE_lineNumber);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1093;
			_la = this._input.LA(1);
			if(!(_la===209 || _la===210)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1095;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 129, this._ctx) ) {
			case 1:
				{
				this.state = 1094;
				this.match(vbaParser.NEWLINE);
				}
				break;
			}
			this.state = 1098;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 130, this._ctx) ) {
			case 1:
				{
				this.state = 1097;
				this.match(vbaParser.COLON);
				}
				break;
			}
			this.state = 1101;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 131, this._ctx) ) {
			case 1:
				{
				this.state = 1100;
				this.match(vbaParser.NEWLINE);
				}
				break;
			}
			this.state = 1104;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 132, this._ctx) ) {
			case 1:
				{
				this.state = 1103;
				this.match(vbaParser.WS);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public loadStmt(): LoadStmtContext {
		let localctx: LoadStmtContext = new LoadStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, vbaParser.RULE_loadStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1106;
			this.match(vbaParser.LOAD);
			this.state = 1107;
			this.match(vbaParser.WS);
			this.state = 1108;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lockStmt(): LockStmtContext {
		let localctx: LockStmtContext = new LockStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, vbaParser.RULE_lockStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1110;
			this.match(vbaParser.LOCK);
			this.state = 1111;
			this.match(vbaParser.WS);
			this.state = 1112;
			this.valueStmt(0);
			this.state = 1127;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 136, this._ctx) ) {
			case 1:
				{
				this.state = 1114;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 1113;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1116;
				this.match(vbaParser.T__0);
				this.state = 1118;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 1117;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1120;
				this.valueStmt(0);
				this.state = 1125;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 135, this._ctx) ) {
				case 1:
					{
					this.state = 1121;
					this.match(vbaParser.WS);
					this.state = 1122;
					this.match(vbaParser.TO);
					this.state = 1123;
					this.match(vbaParser.WS);
					this.state = 1124;
					this.valueStmt(0);
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lsetStmt(): LsetStmtContext {
		let localctx: LsetStmtContext = new LsetStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, vbaParser.RULE_lsetStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1129;
			this.match(vbaParser.LSET);
			this.state = 1130;
			this.match(vbaParser.WS);
			this.state = 1131;
			this.implicitCallStmt_InStmt();
			this.state = 1133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1132;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1135;
			this.match(vbaParser.EQ);
			this.state = 1137;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1136;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1139;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public macroConstStmt(): MacroConstStmtContext {
		let localctx: MacroConstStmtContext = new MacroConstStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, vbaParser.RULE_macroConstStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1141;
			this.match(vbaParser.MACRO_CONST);
			this.state = 1143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1142;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1145;
			this.ambiguousIdentifier();
			this.state = 1147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1146;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1149;
			this.match(vbaParser.EQ);
			this.state = 1151;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1150;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1153;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public macroIfThenElseStmt(): MacroIfThenElseStmtContext {
		let localctx: MacroIfThenElseStmtContext = new MacroIfThenElseStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, vbaParser.RULE_macroIfThenElseStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1155;
			this.macroIfBlockStmt();
			this.state = 1159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===105) {
				{
				{
				this.state = 1156;
				this.macroElseIfBlockStmt();
				}
				}
				this.state = 1161;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1163;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===106) {
				{
				this.state = 1162;
				this.macroElseBlockStmt();
				}
			}

			this.state = 1165;
			this.match(vbaParser.MACRO_END_IF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public macroIfBlockStmt(): MacroIfBlockStmtContext {
		let localctx: MacroIfBlockStmtContext = new MacroIfBlockStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, vbaParser.RULE_macroIfBlockStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1167;
			this.match(vbaParser.MACRO_IF);
			this.state = 1169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1168;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1171;
			this.ifConditionStmt();
			this.state = 1172;
			this.match(vbaParser.WS);
			this.state = 1173;
			this.match(vbaParser.THEN);
			this.state = 1174;
			this.endOfStatement();
			this.state = 1180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294966832) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3225419775) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294963655) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294934271) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 67108863) !== 0) || ((((_la - 209)) & ~0x1F) === 0 && ((1 << (_la - 209)) & 4243) !== 0)) {
				{
				this.state = 1178;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 145, this._ctx) ) {
				case 1:
					{
					this.state = 1175;
					this.moduleDeclarations();
					}
					break;
				case 2:
					{
					this.state = 1176;
					this.moduleBody();
					}
					break;
				case 3:
					{
					this.state = 1177;
					this.block();
					}
					break;
				}
				}
				this.state = 1182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public macroElseIfBlockStmt(): MacroElseIfBlockStmtContext {
		let localctx: MacroElseIfBlockStmtContext = new MacroElseIfBlockStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, vbaParser.RULE_macroElseIfBlockStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1183;
			this.match(vbaParser.MACRO_ELSEIF);
			this.state = 1185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1184;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1187;
			this.ifConditionStmt();
			this.state = 1188;
			this.match(vbaParser.WS);
			this.state = 1189;
			this.match(vbaParser.THEN);
			this.state = 1190;
			this.endOfStatement();
			this.state = 1196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294966832) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3225419775) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294963655) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294934271) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 67108863) !== 0) || ((((_la - 209)) & ~0x1F) === 0 && ((1 << (_la - 209)) & 4243) !== 0)) {
				{
				this.state = 1194;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 148, this._ctx) ) {
				case 1:
					{
					this.state = 1191;
					this.moduleDeclarations();
					}
					break;
				case 2:
					{
					this.state = 1192;
					this.moduleBody();
					}
					break;
				case 3:
					{
					this.state = 1193;
					this.block();
					}
					break;
				}
				}
				this.state = 1198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public macroElseBlockStmt(): MacroElseBlockStmtContext {
		let localctx: MacroElseBlockStmtContext = new MacroElseBlockStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, vbaParser.RULE_macroElseBlockStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1199;
			this.match(vbaParser.MACRO_ELSE);
			this.state = 1200;
			this.endOfStatement();
			this.state = 1206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294966832) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3225419775) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294963655) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294934271) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 67108863) !== 0) || ((((_la - 209)) & ~0x1F) === 0 && ((1 << (_la - 209)) & 4243) !== 0)) {
				{
				this.state = 1204;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 150, this._ctx) ) {
				case 1:
					{
					this.state = 1201;
					this.moduleDeclarations();
					}
					break;
				case 2:
					{
					this.state = 1202;
					this.moduleBody();
					}
					break;
				case 3:
					{
					this.state = 1203;
					this.block();
					}
					break;
				}
				}
				this.state = 1208;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public midStmt(): MidStmtContext {
		let localctx: MidStmtContext = new MidStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, vbaParser.RULE_midStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1209;
			this.match(vbaParser.MID);
			this.state = 1211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1210;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1213;
			this.match(vbaParser.LPAREN);
			this.state = 1215;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 153, this._ctx) ) {
			case 1:
				{
				this.state = 1214;
				this.match(vbaParser.WS);
				}
				break;
			}
			this.state = 1217;
			this.argsCall();
			this.state = 1219;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1218;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1221;
			this.match(vbaParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mkdirStmt(): MkdirStmtContext {
		let localctx: MkdirStmtContext = new MkdirStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, vbaParser.RULE_mkdirStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1223;
			this.match(vbaParser.MKDIR);
			this.state = 1224;
			this.match(vbaParser.WS);
			this.state = 1225;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nameStmt(): NameStmtContext {
		let localctx: NameStmtContext = new NameStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, vbaParser.RULE_nameStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1227;
			this.match(vbaParser.NAME);
			this.state = 1228;
			this.match(vbaParser.WS);
			this.state = 1229;
			this.valueStmt(0);
			this.state = 1230;
			this.match(vbaParser.WS);
			this.state = 1231;
			this.match(vbaParser.AS);
			this.state = 1232;
			this.match(vbaParser.WS);
			this.state = 1233;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public onErrorStmt(): OnErrorStmtContext {
		let localctx: OnErrorStmtContext = new OnErrorStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, vbaParser.RULE_onErrorStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1235;
			_la = this._input.LA(1);
			if(!(_la===119 || _la===120)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1236;
			this.match(vbaParser.WS);
			this.state = 1243;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 81:
				{
				this.state = 1237;
				this.match(vbaParser.GOTO);
				this.state = 1238;
				this.match(vbaParser.WS);
				this.state = 1239;
				this.valueStmt(0);
				}
				break;
			case 147:
				{
				this.state = 1240;
				this.match(vbaParser.RESUME);
				this.state = 1241;
				this.match(vbaParser.WS);
				this.state = 1242;
				this.match(vbaParser.NEXT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public onGoToStmt(): OnGoToStmtContext {
		let localctx: OnGoToStmtContext = new OnGoToStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, vbaParser.RULE_onGoToStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1245;
			this.match(vbaParser.ON);
			this.state = 1246;
			this.match(vbaParser.WS);
			this.state = 1247;
			this.valueStmt(0);
			this.state = 1248;
			this.match(vbaParser.WS);
			this.state = 1249;
			this.match(vbaParser.GOTO);
			this.state = 1250;
			this.match(vbaParser.WS);
			this.state = 1251;
			this.valueStmt(0);
			this.state = 1262;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 158, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1253;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 1252;
						this.match(vbaParser.WS);
						}
					}

					this.state = 1255;
					this.match(vbaParser.T__0);
					this.state = 1257;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 1256;
						this.match(vbaParser.WS);
						}
					}

					this.state = 1259;
					this.valueStmt(0);
					}
					}
				}
				this.state = 1264;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 158, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public onGoSubStmt(): OnGoSubStmtContext {
		let localctx: OnGoSubStmtContext = new OnGoSubStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, vbaParser.RULE_onGoSubStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1265;
			this.match(vbaParser.ON);
			this.state = 1266;
			this.match(vbaParser.WS);
			this.state = 1267;
			this.valueStmt(0);
			this.state = 1268;
			this.match(vbaParser.WS);
			this.state = 1269;
			this.match(vbaParser.GOSUB);
			this.state = 1270;
			this.match(vbaParser.WS);
			this.state = 1271;
			this.valueStmt(0);
			this.state = 1282;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 161, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1273;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 1272;
						this.match(vbaParser.WS);
						}
					}

					this.state = 1275;
					this.match(vbaParser.T__0);
					this.state = 1277;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 1276;
						this.match(vbaParser.WS);
						}
					}

					this.state = 1279;
					this.valueStmt(0);
					}
					}
				}
				this.state = 1284;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 161, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public openStmt(): OpenStmtContext {
		let localctx: OpenStmtContext = new OpenStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, vbaParser.RULE_openStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1285;
			this.match(vbaParser.OPEN);
			this.state = 1286;
			this.match(vbaParser.WS);
			this.state = 1287;
			this.valueStmt(0);
			this.state = 1288;
			this.match(vbaParser.WS);
			this.state = 1289;
			this.match(vbaParser.FOR);
			this.state = 1290;
			this.match(vbaParser.WS);
			this.state = 1291;
			_la = this._input.LA(1);
			if(!(_la===15 || _la===19 || _la===86 || _la===128 || _la===139)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1296;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 162, this._ctx) ) {
			case 1:
				{
				this.state = 1292;
				this.match(vbaParser.WS);
				this.state = 1293;
				this.match(vbaParser.ACCESS);
				this.state = 1294;
				this.match(vbaParser.WS);
				this.state = 1295;
				_la = this._input.LA(1);
				if(!(_la===142 || _la===143 || _la===184)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			}
			this.state = 1300;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 163, this._ctx) ) {
			case 1:
				{
				this.state = 1298;
				this.match(vbaParser.WS);
				this.state = 1299;
				_la = this._input.LA(1);
				if(!(((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 7) !== 0) || _la===158)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			}
			this.state = 1302;
			this.match(vbaParser.WS);
			this.state = 1303;
			this.match(vbaParser.AS);
			this.state = 1304;
			this.match(vbaParser.WS);
			this.state = 1305;
			this.fileNumber();
			this.state = 1316;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 166, this._ctx) ) {
			case 1:
				{
				this.state = 1306;
				this.match(vbaParser.WS);
				this.state = 1307;
				this.match(vbaParser.LEN);
				this.state = 1309;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 1308;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1311;
				this.match(vbaParser.EQ);
				this.state = 1313;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 1312;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1315;
				this.valueStmt(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public outputList(): OutputListContext {
		let localctx: OutputListContext = new OutputListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, vbaParser.RULE_outputList);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1351;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 176, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1318;
				this.outputList_Expression();
				this.state = 1331;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 170, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1320;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===220) {
							{
							this.state = 1319;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1322;
						_la = this._input.LA(1);
						if(!(_la===1 || _la===2)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1324;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 168, this._ctx) ) {
						case 1:
							{
							this.state = 1323;
							this.match(vbaParser.WS);
							}
							break;
						}
						this.state = 1327;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 169, this._ctx) ) {
						case 1:
							{
							this.state = 1326;
							this.outputList_Expression();
							}
							break;
						}
						}
						}
					}
					this.state = 1333;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 170, this._ctx);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1335;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294966832) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3225419775) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294966799) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 2256531523) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294934047) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 67108863) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & 270524485) !== 0)) {
					{
					this.state = 1334;
					this.outputList_Expression();
					}
				}

				this.state = 1347;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1338;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===220) {
							{
							this.state = 1337;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1340;
						_la = this._input.LA(1);
						if(!(_la===1 || _la===2)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1342;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 173, this._ctx) ) {
						case 1:
							{
							this.state = 1341;
							this.match(vbaParser.WS);
							}
							break;
						}
						this.state = 1345;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 174, this._ctx) ) {
						case 1:
							{
							this.state = 1344;
							this.outputList_Expression();
							}
							break;
						}
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1349;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 175, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public outputList_Expression(): OutputList_ExpressionContext {
		let localctx: OutputList_ExpressionContext = new OutputList_ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, vbaParser.RULE_outputList_Expression);
		let _la: number;
		try {
			this.state = 1370;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 181, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1353;
				this.valueStmt(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1354;
				_la = this._input.LA(1);
				if(!(_la===160 || _la===166)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1368;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 180, this._ctx) ) {
				case 1:
					{
					this.state = 1356;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 1355;
						this.match(vbaParser.WS);
						}
					}

					this.state = 1358;
					this.match(vbaParser.LPAREN);
					this.state = 1360;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 178, this._ctx) ) {
					case 1:
						{
						this.state = 1359;
						this.match(vbaParser.WS);
						}
						break;
					}
					this.state = 1362;
					this.argsCall();
					this.state = 1364;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 1363;
						this.match(vbaParser.WS);
						}
					}

					this.state = 1366;
					this.match(vbaParser.RPAREN);
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public printStmt(): PrintStmtContext {
		let localctx: PrintStmtContext = new PrintStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, vbaParser.RULE_printStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1372;
			this.match(vbaParser.PRINT);
			this.state = 1373;
			this.match(vbaParser.WS);
			this.state = 1374;
			this.fileNumber();
			this.state = 1376;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1375;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1378;
			this.match(vbaParser.T__0);
			this.state = 1383;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 184, this._ctx) ) {
			case 1:
				{
				this.state = 1380;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 183, this._ctx) ) {
				case 1:
					{
					this.state = 1379;
					this.match(vbaParser.WS);
					}
					break;
				}
				this.state = 1382;
				this.outputList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertyGetStmt(): PropertyGetStmtContext {
		let localctx: PropertyGetStmtContext = new PropertyGetStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, vbaParser.RULE_propertyGetStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1388;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===75 || _la===79 || _la===132 || _la===137) {
				{
				this.state = 1385;
				this.visibility();
				this.state = 1386;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1392;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===161) {
				{
				this.state = 1390;
				this.match(vbaParser.STATIC);
				this.state = 1391;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1394;
			this.match(vbaParser.PROPERTY_GET);
			this.state = 1395;
			this.match(vbaParser.WS);
			this.state = 1396;
			this.ambiguousIdentifier();
			this.state = 1398;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 187, this._ctx) ) {
			case 1:
				{
				this.state = 1397;
				this.typeHint();
				}
				break;
			}
			this.state = 1404;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 189, this._ctx) ) {
			case 1:
				{
				this.state = 1401;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 1400;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1403;
				this.argList();
				}
				break;
			}
			this.state = 1408;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 190, this._ctx) ) {
			case 1:
				{
				this.state = 1406;
				this.match(vbaParser.WS);
				this.state = 1407;
				this.asTypeClause();
				}
				break;
			}
			this.state = 1410;
			this.endOfStatement();
			this.state = 1412;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294966832) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3225419775) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 2281697735) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294934047) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 67108863) !== 0) || ((((_la - 209)) & ~0x1F) === 0 && ((1 << (_la - 209)) & 4115) !== 0)) {
				{
				this.state = 1411;
				this.block();
				}
			}

			this.state = 1414;
			this.match(vbaParser.END_PROPERTY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertySetStmt(): PropertySetStmtContext {
		let localctx: PropertySetStmtContext = new PropertySetStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, vbaParser.RULE_propertySetStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1419;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===75 || _la===79 || _la===132 || _la===137) {
				{
				this.state = 1416;
				this.visibility();
				this.state = 1417;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1423;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===161) {
				{
				this.state = 1421;
				this.match(vbaParser.STATIC);
				this.state = 1422;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1425;
			this.match(vbaParser.PROPERTY_SET);
			this.state = 1426;
			this.match(vbaParser.WS);
			this.state = 1427;
			this.ambiguousIdentifier();
			this.state = 1432;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 195, this._ctx) ) {
			case 1:
				{
				this.state = 1429;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 1428;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1431;
				this.argList();
				}
				break;
			}
			this.state = 1434;
			this.endOfStatement();
			this.state = 1436;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294966832) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3225419775) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 2281697735) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294934047) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 67108863) !== 0) || ((((_la - 209)) & ~0x1F) === 0 && ((1 << (_la - 209)) & 4115) !== 0)) {
				{
				this.state = 1435;
				this.block();
				}
			}

			this.state = 1438;
			this.match(vbaParser.END_PROPERTY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertyLetStmt(): PropertyLetStmtContext {
		let localctx: PropertyLetStmtContext = new PropertyLetStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, vbaParser.RULE_propertyLetStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1443;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===75 || _la===79 || _la===132 || _la===137) {
				{
				this.state = 1440;
				this.visibility();
				this.state = 1441;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1447;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===161) {
				{
				this.state = 1445;
				this.match(vbaParser.STATIC);
				this.state = 1446;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1449;
			this.match(vbaParser.PROPERTY_LET);
			this.state = 1450;
			this.match(vbaParser.WS);
			this.state = 1451;
			this.ambiguousIdentifier();
			this.state = 1456;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 200, this._ctx) ) {
			case 1:
				{
				this.state = 1453;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 1452;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1455;
				this.argList();
				}
				break;
			}
			this.state = 1458;
			this.endOfStatement();
			this.state = 1460;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294966832) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3225419775) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 2281697735) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294934047) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 67108863) !== 0) || ((((_la - 209)) & ~0x1F) === 0 && ((1 << (_la - 209)) & 4115) !== 0)) {
				{
				this.state = 1459;
				this.block();
				}
			}

			this.state = 1462;
			this.match(vbaParser.END_PROPERTY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public putStmt(): PutStmtContext {
		let localctx: PutStmtContext = new PutStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, vbaParser.RULE_putStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1464;
			this.match(vbaParser.PUT);
			this.state = 1465;
			this.match(vbaParser.WS);
			this.state = 1466;
			this.fileNumber();
			this.state = 1468;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1467;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1470;
			this.match(vbaParser.T__0);
			this.state = 1472;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 203, this._ctx) ) {
			case 1:
				{
				this.state = 1471;
				this.match(vbaParser.WS);
				}
				break;
			}
			this.state = 1475;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294966832) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3225419775) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294966799) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 2256531523) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294934047) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 67108863) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & 270524485) !== 0)) {
				{
				this.state = 1474;
				this.valueStmt(0);
				}
			}

			this.state = 1478;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1477;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1480;
			this.match(vbaParser.T__0);
			this.state = 1482;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1481;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1484;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public raiseEventStmt(): RaiseEventStmtContext {
		let localctx: RaiseEventStmtContext = new RaiseEventStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, vbaParser.RULE_raiseEventStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1486;
			this.match(vbaParser.RAISEEVENT);
			this.state = 1487;
			this.match(vbaParser.WS);
			this.state = 1488;
			this.ambiguousIdentifier();
			this.state = 1503;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 211, this._ctx) ) {
			case 1:
				{
				this.state = 1490;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 1489;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1492;
				this.match(vbaParser.LPAREN);
				this.state = 1494;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 208, this._ctx) ) {
				case 1:
					{
					this.state = 1493;
					this.match(vbaParser.WS);
					}
					break;
				}
				this.state = 1500;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 210, this._ctx) ) {
				case 1:
					{
					this.state = 1496;
					this.argsCall();
					this.state = 1498;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 1497;
						this.match(vbaParser.WS);
						}
					}

					}
					break;
				}
				this.state = 1502;
				this.match(vbaParser.RPAREN);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public randomizeStmt(): RandomizeStmtContext {
		let localctx: RandomizeStmtContext = new RandomizeStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, vbaParser.RULE_randomizeStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1505;
			this.match(vbaParser.RANDOMIZE);
			this.state = 1508;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 212, this._ctx) ) {
			case 1:
				{
				this.state = 1506;
				this.match(vbaParser.WS);
				this.state = 1507;
				this.valueStmt(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public redimStmt(): RedimStmtContext {
		let localctx: RedimStmtContext = new RedimStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, vbaParser.RULE_redimStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1510;
			this.match(vbaParser.REDIM);
			this.state = 1511;
			this.match(vbaParser.WS);
			this.state = 1514;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 213, this._ctx) ) {
			case 1:
				{
				this.state = 1512;
				this.match(vbaParser.PRESERVE);
				this.state = 1513;
				this.match(vbaParser.WS);
				}
				break;
			}
			this.state = 1516;
			this.redimSubStmt();
			this.state = 1527;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 216, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1518;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 1517;
						this.match(vbaParser.WS);
						}
					}

					this.state = 1520;
					this.match(vbaParser.T__0);
					this.state = 1522;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 1521;
						this.match(vbaParser.WS);
						}
					}

					this.state = 1524;
					this.redimSubStmt();
					}
					}
				}
				this.state = 1529;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 216, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public redimSubStmt(): RedimSubStmtContext {
		let localctx: RedimSubStmtContext = new RedimSubStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, vbaParser.RULE_redimSubStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1530;
			this.implicitCallStmt_InStmt();
			this.state = 1532;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1531;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1534;
			this.match(vbaParser.LPAREN);
			this.state = 1536;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1535;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1538;
			this.subscripts();
			this.state = 1540;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1539;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1542;
			this.match(vbaParser.RPAREN);
			this.state = 1545;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 220, this._ctx) ) {
			case 1:
				{
				this.state = 1543;
				this.match(vbaParser.WS);
				this.state = 1544;
				this.asTypeClause();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public resetStmt(): ResetStmtContext {
		let localctx: ResetStmtContext = new ResetStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 156, vbaParser.RULE_resetStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1547;
			this.match(vbaParser.RESET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public resumeStmt(): ResumeStmtContext {
		let localctx: ResumeStmtContext = new ResumeStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, vbaParser.RULE_resumeStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1549;
			this.match(vbaParser.RESUME);
			this.state = 1555;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 222, this._ctx) ) {
			case 1:
				{
				this.state = 1550;
				this.match(vbaParser.WS);
				this.state = 1553;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 221, this._ctx) ) {
				case 1:
					{
					this.state = 1551;
					this.match(vbaParser.NEXT);
					}
					break;
				case 2:
					{
					this.state = 1552;
					this.ambiguousIdentifier();
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returnStmt(): ReturnStmtContext {
		let localctx: ReturnStmtContext = new ReturnStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 160, vbaParser.RULE_returnStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1557;
			this.match(vbaParser.RETURN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rmdirStmt(): RmdirStmtContext {
		let localctx: RmdirStmtContext = new RmdirStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, vbaParser.RULE_rmdirStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1559;
			this.match(vbaParser.RMDIR);
			this.state = 1560;
			this.match(vbaParser.WS);
			this.state = 1561;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rsetStmt(): RsetStmtContext {
		let localctx: RsetStmtContext = new RsetStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, vbaParser.RULE_rsetStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1563;
			this.match(vbaParser.RSET);
			this.state = 1564;
			this.match(vbaParser.WS);
			this.state = 1565;
			this.implicitCallStmt_InStmt();
			this.state = 1567;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1566;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1569;
			this.match(vbaParser.EQ);
			this.state = 1571;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1570;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1573;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public savepictureStmt(): SavepictureStmtContext {
		let localctx: SavepictureStmtContext = new SavepictureStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, vbaParser.RULE_savepictureStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1575;
			this.match(vbaParser.SAVEPICTURE);
			this.state = 1576;
			this.match(vbaParser.WS);
			this.state = 1577;
			this.valueStmt(0);
			this.state = 1579;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1578;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1581;
			this.match(vbaParser.T__0);
			this.state = 1583;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1582;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1585;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public saveSettingStmt(): SaveSettingStmtContext {
		let localctx: SaveSettingStmtContext = new SaveSettingStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, vbaParser.RULE_saveSettingStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1587;
			this.match(vbaParser.SAVESETTING);
			this.state = 1588;
			this.match(vbaParser.WS);
			this.state = 1589;
			this.valueStmt(0);
			this.state = 1591;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1590;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1593;
			this.match(vbaParser.T__0);
			this.state = 1595;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1594;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1597;
			this.valueStmt(0);
			this.state = 1599;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1598;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1601;
			this.match(vbaParser.T__0);
			this.state = 1603;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1602;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1605;
			this.valueStmt(0);
			this.state = 1607;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1606;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1609;
			this.match(vbaParser.T__0);
			this.state = 1611;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1610;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1613;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public seekStmt(): SeekStmtContext {
		let localctx: SeekStmtContext = new SeekStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 170, vbaParser.RULE_seekStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1615;
			this.match(vbaParser.SEEK);
			this.state = 1616;
			this.match(vbaParser.WS);
			this.state = 1617;
			this.fileNumber();
			this.state = 1619;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1618;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1621;
			this.match(vbaParser.T__0);
			this.state = 1623;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1622;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1625;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public selectCaseStmt(): SelectCaseStmtContext {
		let localctx: SelectCaseStmtContext = new SelectCaseStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 172, vbaParser.RULE_selectCaseStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1627;
			this.match(vbaParser.SELECT);
			this.state = 1628;
			this.match(vbaParser.WS);
			this.state = 1629;
			this.match(vbaParser.CASE);
			this.state = 1630;
			this.match(vbaParser.WS);
			this.state = 1631;
			this.valueStmt(0);
			this.state = 1632;
			this.endOfStatement();
			this.state = 1636;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25) {
				{
				{
				this.state = 1633;
				this.sC_Case();
				}
				}
				this.state = 1638;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1639;
			this.match(vbaParser.END_SELECT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sC_Selection(): SC_SelectionContext {
		let localctx: SC_SelectionContext = new SC_SelectionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 174, vbaParser.RULE_sC_Selection);
		let _la: number;
		try {
			this.state = 1658;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 238, this._ctx) ) {
			case 1:
				localctx = new CaseCondIsContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1641;
				this.match(vbaParser.IS);
				this.state = 1643;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 1642;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1645;
				this.comparisonOperator();
				this.state = 1647;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 1646;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1649;
				this.valueStmt(0);
				}
				break;
			case 2:
				localctx = new CaseCondToContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1651;
				this.valueStmt(0);
				this.state = 1652;
				this.match(vbaParser.WS);
				this.state = 1653;
				this.match(vbaParser.TO);
				this.state = 1654;
				this.match(vbaParser.WS);
				this.state = 1655;
				this.valueStmt(0);
				}
				break;
			case 3:
				localctx = new CaseCondValueContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1657;
				this.valueStmt(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sC_Case(): SC_CaseContext {
		let localctx: SC_CaseContext = new SC_CaseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 176, vbaParser.RULE_sC_Case);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1660;
			this.match(vbaParser.CASE);
			this.state = 1661;
			this.match(vbaParser.WS);
			this.state = 1662;
			this.sC_Cond();
			this.state = 1663;
			this.endOfStatement();
			this.state = 1665;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 239, this._ctx) ) {
			case 1:
				{
				this.state = 1664;
				this.block();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sC_Cond(): SC_CondContext {
		let localctx: SC_CondContext = new SC_CondContext(this, this._ctx, this.state);
		this.enterRule(localctx, 178, vbaParser.RULE_sC_Cond);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1682;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 243, this._ctx) ) {
			case 1:
				localctx = new CaseCondElseContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1667;
				this.match(vbaParser.ELSE);
				}
				break;
			case 2:
				localctx = new CaseCondSelectionContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1668;
				this.sC_Selection();
				this.state = 1679;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 242, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1670;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===220) {
							{
							this.state = 1669;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1672;
						this.match(vbaParser.T__0);
						this.state = 1674;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===220) {
							{
							this.state = 1673;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1676;
						this.sC_Selection();
						}
						}
					}
					this.state = 1681;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 242, this._ctx);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sendkeysStmt(): SendkeysStmtContext {
		let localctx: SendkeysStmtContext = new SendkeysStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 180, vbaParser.RULE_sendkeysStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1684;
			this.match(vbaParser.SENDKEYS);
			this.state = 1685;
			this.match(vbaParser.WS);
			this.state = 1686;
			this.valueStmt(0);
			this.state = 1695;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 246, this._ctx) ) {
			case 1:
				{
				this.state = 1688;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 1687;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1690;
				this.match(vbaParser.T__0);
				this.state = 1692;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 1691;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1694;
				this.valueStmt(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public setattrStmt(): SetattrStmtContext {
		let localctx: SetattrStmtContext = new SetattrStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 182, vbaParser.RULE_setattrStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1697;
			this.match(vbaParser.SETATTR);
			this.state = 1698;
			this.match(vbaParser.WS);
			this.state = 1699;
			this.valueStmt(0);
			this.state = 1701;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1700;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1703;
			this.match(vbaParser.T__0);
			this.state = 1705;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1704;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1707;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public setStmt(): SetStmtContext {
		let localctx: SetStmtContext = new SetStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 184, vbaParser.RULE_setStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1709;
			this.match(vbaParser.SET);
			this.state = 1710;
			this.match(vbaParser.WS);
			this.state = 1711;
			this.implicitCallStmt_InStmt();
			this.state = 1713;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1712;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1715;
			this.match(vbaParser.EQ);
			this.state = 1717;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1716;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1719;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stopStmt(): StopStmtContext {
		let localctx: StopStmtContext = new StopStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 186, vbaParser.RULE_stopStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1721;
			this.match(vbaParser.STOP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public subStmt(): SubStmtContext {
		let localctx: SubStmtContext = new SubStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 188, vbaParser.RULE_subStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1726;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===75 || _la===79 || _la===132 || _la===137) {
				{
				this.state = 1723;
				this.visibility();
				this.state = 1724;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1730;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===161) {
				{
				this.state = 1728;
				this.match(vbaParser.STATIC);
				this.state = 1729;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1732;
			this.match(vbaParser.SUB);
			this.state = 1734;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1733;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1736;
			this.ambiguousIdentifier();
			this.state = 1741;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 255, this._ctx) ) {
			case 1:
				{
				this.state = 1738;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 1737;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1740;
				this.argList();
				}
				break;
			}
			this.state = 1743;
			this.endOfStatement();
			this.state = 1745;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294966832) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3225419775) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 2281697735) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294934047) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 67108863) !== 0) || ((((_la - 209)) & ~0x1F) === 0 && ((1 << (_la - 209)) & 4115) !== 0)) {
				{
				this.state = 1744;
				this.block();
				}
			}

			this.state = 1747;
			this.match(vbaParser.END_SUB);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public timeStmt(): TimeStmtContext {
		let localctx: TimeStmtContext = new TimeStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 190, vbaParser.RULE_timeStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1749;
			this.match(vbaParser.TIME);
			this.state = 1751;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1750;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1753;
			this.match(vbaParser.EQ);
			this.state = 1755;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 1754;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1757;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeStmt(): TypeStmtContext {
		let localctx: TypeStmtContext = new TypeStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 192, vbaParser.RULE_typeStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1762;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===75 || _la===79 || _la===132 || _la===137) {
				{
				this.state = 1759;
				this.visibility();
				this.state = 1760;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1764;
			this.match(vbaParser.TYPE);
			this.state = 1765;
			this.match(vbaParser.WS);
			this.state = 1766;
			this.ambiguousIdentifier();
			this.state = 1767;
			this.endOfStatement();
			this.state = 1771;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294966784) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3225419775) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294966799) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 2256531523) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294934047) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 67108863) !== 0) || _la===221) {
				{
				{
				this.state = 1768;
				this.typeStmt_Element();
				}
				}
				this.state = 1773;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1774;
			this.match(vbaParser.END_TYPE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeStmt_Element(): TypeStmt_ElementContext {
		let localctx: TypeStmt_ElementContext = new TypeStmt_ElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 194, vbaParser.RULE_typeStmt_Element);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1776;
			this.ambiguousIdentifier();
			this.state = 1791;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 265, this._ctx) ) {
			case 1:
				{
				this.state = 1778;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 1777;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1780;
				this.match(vbaParser.LPAREN);
				this.state = 1785;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 263, this._ctx) ) {
				case 1:
					{
					this.state = 1782;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 1781;
						this.match(vbaParser.WS);
						}
					}

					this.state = 1784;
					this.subscripts();
					}
					break;
				}
				this.state = 1788;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 1787;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1790;
				this.match(vbaParser.RPAREN);
				}
				break;
			}
			this.state = 1795;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 266, this._ctx) ) {
			case 1:
				{
				this.state = 1793;
				this.match(vbaParser.WS);
				this.state = 1794;
				this.asTypeClause();
				}
				break;
			}
			this.state = 1797;
			this.endOfStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeOfStmt(): TypeOfStmtContext {
		let localctx: TypeOfStmtContext = new TypeOfStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 196, vbaParser.RULE_typeOfStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1799;
			this.match(vbaParser.TYPEOF);
			this.state = 1800;
			this.match(vbaParser.WS);
			this.state = 1801;
			this.valueStmt(0);
			this.state = 1806;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 267, this._ctx) ) {
			case 1:
				{
				this.state = 1802;
				this.match(vbaParser.WS);
				this.state = 1803;
				this.match(vbaParser.IS);
				this.state = 1804;
				this.match(vbaParser.WS);
				this.state = 1805;
				this.type_();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unloadStmt(): UnloadStmtContext {
		let localctx: UnloadStmtContext = new UnloadStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 198, vbaParser.RULE_unloadStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1808;
			this.match(vbaParser.UNLOAD);
			this.state = 1809;
			this.match(vbaParser.WS);
			this.state = 1810;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unlockStmt(): UnlockStmtContext {
		let localctx: UnlockStmtContext = new UnlockStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 200, vbaParser.RULE_unlockStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1812;
			this.match(vbaParser.UNLOCK);
			this.state = 1813;
			this.match(vbaParser.WS);
			this.state = 1814;
			this.fileNumber();
			this.state = 1829;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 271, this._ctx) ) {
			case 1:
				{
				this.state = 1816;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 1815;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1818;
				this.match(vbaParser.T__0);
				this.state = 1820;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 1819;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1822;
				this.valueStmt(0);
				this.state = 1827;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 270, this._ctx) ) {
				case 1:
					{
					this.state = 1823;
					this.match(vbaParser.WS);
					this.state = 1824;
					this.match(vbaParser.TO);
					this.state = 1825;
					this.match(vbaParser.WS);
					this.state = 1826;
					this.valueStmt(0);
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public valueStmt(): ValueStmtContext;
	public valueStmt(_p: number): ValueStmtContext;
	// @RuleVersion(0)
	public valueStmt(_p?: number): ValueStmtContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ValueStmtContext = new ValueStmtContext(this, this._ctx, _parentState);
		let _prevctx: ValueStmtContext = localctx;
		let _startState: number = 202;
		this.enterRecursionRule(localctx, 202, vbaParser.RULE_valueStmt, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1891;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 283, this._ctx) ) {
			case 1:
				{
				localctx = new VsLiteralContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1832;
				this.literal();
				}
				break;
			case 2:
				{
				localctx = new VsICSContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1833;
				this.implicitCallStmt_InStmt();
				}
				break;
			case 3:
				{
				localctx = new VsStructContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1834;
				this.match(vbaParser.LPAREN);
				this.state = 1836;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 1835;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1838;
				this.valueStmt(0);
				this.state = 1849;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===1 || _la===220) {
					{
					{
					this.state = 1840;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 1839;
						this.match(vbaParser.WS);
						}
					}

					this.state = 1842;
					this.match(vbaParser.T__0);
					this.state = 1844;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 1843;
						this.match(vbaParser.WS);
						}
					}

					this.state = 1846;
					this.valueStmt(0);
					}
					}
					this.state = 1851;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1852;
				this.match(vbaParser.RPAREN);
				}
				break;
			case 4:
				{
				localctx = new VsNewContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1854;
				this.match(vbaParser.NEW);
				this.state = 1856;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 1855;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1858;
				this.valueStmt(19);
				}
				break;
			case 5:
				{
				localctx = new VsTypeOfContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1859;
				this.typeOfStmt();
				}
				break;
			case 6:
				{
				localctx = new VsMidContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1860;
				this.midStmt();
				}
				break;
			case 7:
				{
				localctx = new VsAddressOfContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1861;
				this.match(vbaParser.ADDRESSOF);
				this.state = 1863;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 1862;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1865;
				this.valueStmt(16);
				}
				break;
			case 8:
				{
				localctx = new VsAssignContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1866;
				this.implicitCallStmt_InStmt();
				this.state = 1868;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 1867;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1870;
				this.match(vbaParser.ASSIGN);
				this.state = 1872;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 1871;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1874;
				this.valueStmt(15);
				}
				break;
			case 9:
				{
				localctx = new VsNegationContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1876;
				this.match(vbaParser.MINUS);
				this.state = 1878;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 1877;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1880;
				this.valueStmt(13);
				}
				break;
			case 10:
				{
				localctx = new VsPlusContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1881;
				this.match(vbaParser.PLUS);
				this.state = 1883;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 1882;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1885;
				this.valueStmt(12);
				}
				break;
			case 11:
				{
				localctx = new VsNotContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1886;
				this.match(vbaParser.NOT);
				this.state = 1888;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 1887;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1890;
				this.valueStmt(6);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1994;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 307, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1992;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 306, this._ctx) ) {
					case 1:
						{
						localctx = new VsPowContext(this, new ValueStmtContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, vbaParser.RULE_valueStmt);
						this.state = 1893;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 1895;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===220) {
							{
							this.state = 1894;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1897;
						this.match(vbaParser.POW);
						this.state = 1899;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===220) {
							{
							this.state = 1898;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1901;
						this.valueStmt(15);
						}
						break;
					case 2:
						{
						localctx = new VsDivMultContext(this, new ValueStmtContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, vbaParser.RULE_valueStmt);
						this.state = 1902;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 1904;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===220) {
							{
							this.state = 1903;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1906;
						_la = this._input.LA(1);
						if(!(_la===188 || _la===197)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1908;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===220) {
							{
							this.state = 1907;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1910;
						this.valueStmt(12);
						}
						break;
					case 3:
						{
						localctx = new VsModContext(this, new ValueStmtContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, vbaParser.RULE_valueStmt);
						this.state = 1911;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 1913;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===220) {
							{
							this.state = 1912;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1915;
						this.match(vbaParser.MOD);
						this.state = 1917;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===220) {
							{
							this.state = 1916;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1919;
						this.valueStmt(11);
						}
						break;
					case 4:
						{
						localctx = new VsAddMinusContext(this, new ValueStmtContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, vbaParser.RULE_valueStmt);
						this.state = 1920;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 1922;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===220) {
							{
							this.state = 1921;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1924;
						_la = this._input.LA(1);
						if(!(_la===195 || _la===199)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1926;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===220) {
							{
							this.state = 1925;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1928;
						this.valueStmt(10);
						}
						break;
					case 5:
						{
						localctx = new VsAmpContext(this, new ValueStmtContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, vbaParser.RULE_valueStmt);
						this.state = 1929;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 1931;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===220) {
							{
							this.state = 1930;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1933;
						this.match(vbaParser.AMPERSAND);
						this.state = 1935;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===220) {
							{
							this.state = 1934;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1937;
						this.valueStmt(9);
						}
						break;
					case 6:
						{
						localctx = new VsRelationalContext(this, new ValueStmtContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, vbaParser.RULE_valueStmt);
						this.state = 1938;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 1940;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===220) {
							{
							this.state = 1939;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1942;
						_la = this._input.LA(1);
						if(!(_la===87 || _la===97 || ((((_la - 189)) & ~0x1F) === 0 && ((1 << (_la - 189)) & 559) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1944;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===220) {
							{
							this.state = 1943;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1946;
						this.valueStmt(8);
						}
						break;
					case 7:
						{
						localctx = new VsAndContext(this, new ValueStmtContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, vbaParser.RULE_valueStmt);
						this.state = 1947;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1949;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===220) {
							{
							this.state = 1948;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1951;
						this.match(vbaParser.AND);
						this.state = 1953;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===220) {
							{
							this.state = 1952;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1955;
						this.valueStmt(6);
						}
						break;
					case 8:
						{
						localctx = new VsOrContext(this, new ValueStmtContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, vbaParser.RULE_valueStmt);
						this.state = 1956;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1958;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===220) {
							{
							this.state = 1957;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1960;
						this.match(vbaParser.OR);
						this.state = 1962;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===220) {
							{
							this.state = 1961;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1964;
						this.valueStmt(5);
						}
						break;
					case 9:
						{
						localctx = new VsXorContext(this, new ValueStmtContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, vbaParser.RULE_valueStmt);
						this.state = 1965;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1967;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===220) {
							{
							this.state = 1966;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1969;
						this.match(vbaParser.XOR);
						this.state = 1971;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===220) {
							{
							this.state = 1970;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1973;
						this.valueStmt(4);
						}
						break;
					case 10:
						{
						localctx = new VsEqvContext(this, new ValueStmtContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, vbaParser.RULE_valueStmt);
						this.state = 1974;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1976;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===220) {
							{
							this.state = 1975;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1978;
						this.match(vbaParser.EQV);
						this.state = 1980;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===220) {
							{
							this.state = 1979;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1982;
						this.valueStmt(3);
						}
						break;
					case 11:
						{
						localctx = new VsImpContext(this, new ValueStmtContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, vbaParser.RULE_valueStmt);
						this.state = 1983;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1985;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===220) {
							{
							this.state = 1984;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1987;
						this.match(vbaParser.IMP);
						this.state = 1989;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===220) {
							{
							this.state = 1988;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1991;
						this.valueStmt(2);
						}
						break;
					}
					}
				}
				this.state = 1996;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 307, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableStmt(): VariableStmtContext {
		let localctx: VariableStmtContext = new VariableStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 204, vbaParser.RULE_variableStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2000;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 48:
				{
				this.state = 1997;
				this.match(vbaParser.DIM);
				}
				break;
			case 161:
				{
				this.state = 1998;
				this.match(vbaParser.STATIC);
				}
				break;
			case 75:
			case 79:
			case 132:
			case 137:
				{
				this.state = 1999;
				this.visibility();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 2002;
			this.match(vbaParser.WS);
			this.state = 2005;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 309, this._ctx) ) {
			case 1:
				{
				this.state = 2003;
				this.match(vbaParser.WITHEVENTS);
				this.state = 2004;
				this.match(vbaParser.WS);
				}
				break;
			}
			this.state = 2007;
			this.variableListStmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableListStmt(): VariableListStmtContext {
		let localctx: VariableListStmtContext = new VariableListStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 206, vbaParser.RULE_variableListStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2009;
			this.variableSubStmt();
			this.state = 2020;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 312, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2011;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 2010;
						this.match(vbaParser.WS);
						}
					}

					this.state = 2013;
					this.match(vbaParser.T__0);
					this.state = 2015;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 2014;
						this.match(vbaParser.WS);
						}
					}

					this.state = 2017;
					this.variableSubStmt();
					}
					}
				}
				this.state = 2022;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 312, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableSubStmt(): VariableSubStmtContext {
		let localctx: VariableSubStmtContext = new VariableSubStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 208, vbaParser.RULE_variableSubStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2023;
			this.ambiguousIdentifier();
			this.state = 2041;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 318, this._ctx) ) {
			case 1:
				{
				this.state = 2025;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 2024;
					this.match(vbaParser.WS);
					}
				}

				this.state = 2027;
				this.match(vbaParser.LPAREN);
				this.state = 2029;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 2028;
					this.match(vbaParser.WS);
					}
				}

				this.state = 2035;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967288) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3225419775) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294966799) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 2256531523) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294934047) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 134217727) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & 270524485) !== 0)) {
					{
					this.state = 2031;
					this.subscripts();
					this.state = 2033;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 2032;
						this.match(vbaParser.WS);
						}
					}

					}
				}

				this.state = 2037;
				this.match(vbaParser.RPAREN);
				this.state = 2039;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 317, this._ctx) ) {
				case 1:
					{
					this.state = 2038;
					this.match(vbaParser.WS);
					}
					break;
				}
				}
				break;
			}
			this.state = 2044;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 319, this._ctx) ) {
			case 1:
				{
				this.state = 2043;
				this.typeHint();
				}
				break;
			}
			this.state = 2048;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 320, this._ctx) ) {
			case 1:
				{
				this.state = 2046;
				this.match(vbaParser.WS);
				this.state = 2047;
				this.asTypeClause();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public whileWendStmt(): WhileWendStmtContext {
		let localctx: WhileWendStmtContext = new WhileWendStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 210, vbaParser.RULE_whileWendStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2050;
			this.match(vbaParser.WHILE);
			this.state = 2051;
			this.match(vbaParser.WS);
			this.state = 2052;
			this.valueStmt(0);
			this.state = 2053;
			this.endOfStatement();
			this.state = 2055;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 321, this._ctx) ) {
			case 1:
				{
				this.state = 2054;
				this.block();
				}
				break;
			}
			this.state = 2057;
			this.match(vbaParser.WEND);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public widthStmt(): WidthStmtContext {
		let localctx: WidthStmtContext = new WidthStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 212, vbaParser.RULE_widthStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2059;
			this.match(vbaParser.WIDTH);
			this.state = 2060;
			this.match(vbaParser.WS);
			this.state = 2061;
			this.fileNumber();
			this.state = 2063;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 2062;
				this.match(vbaParser.WS);
				}
			}

			this.state = 2065;
			this.match(vbaParser.T__0);
			this.state = 2067;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 2066;
				this.match(vbaParser.WS);
				}
			}

			this.state = 2069;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public withStmt(): WithStmtContext {
		let localctx: WithStmtContext = new WithStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 214, vbaParser.RULE_withStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2071;
			this.match(vbaParser.WITH);
			this.state = 2072;
			this.match(vbaParser.WS);
			this.state = 2077;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 324, this._ctx) ) {
			case 1:
				{
				this.state = 2073;
				this.implicitCallStmt_InStmt();
				}
				break;
			case 2:
				{
				{
				this.state = 2074;
				this.match(vbaParser.NEW);
				this.state = 2075;
				this.match(vbaParser.WS);
				this.state = 2076;
				this.type_();
				}
				}
				break;
			}
			this.state = 2079;
			this.endOfStatement();
			this.state = 2081;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294966832) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3225419775) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 2281697735) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294934047) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 67108863) !== 0) || ((((_la - 209)) & ~0x1F) === 0 && ((1 << (_la - 209)) & 4115) !== 0)) {
				{
				this.state = 2080;
				this.block();
				}
			}

			this.state = 2083;
			this.match(vbaParser.END_WITH);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public writeStmt(): WriteStmtContext {
		let localctx: WriteStmtContext = new WriteStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 216, vbaParser.RULE_writeStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2085;
			this.match(vbaParser.WRITE);
			this.state = 2086;
			this.match(vbaParser.WS);
			this.state = 2087;
			this.fileNumber();
			this.state = 2089;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 2088;
				this.match(vbaParser.WS);
				}
			}

			this.state = 2091;
			this.match(vbaParser.T__0);
			this.state = 2096;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 328, this._ctx) ) {
			case 1:
				{
				this.state = 2093;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 327, this._ctx) ) {
				case 1:
					{
					this.state = 2092;
					this.match(vbaParser.WS);
					}
					break;
				}
				this.state = 2095;
				this.outputList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fileNumber(): FileNumberContext {
		let localctx: FileNumberContext = new FileNumberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 218, vbaParser.RULE_fileNumber);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2099;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===3) {
				{
				this.state = 2098;
				this.match(vbaParser.T__2);
				}
			}

			this.state = 2101;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public explicitCallStmt(): ExplicitCallStmtContext {
		let localctx: ExplicitCallStmtContext = new ExplicitCallStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 220, vbaParser.RULE_explicitCallStmt);
		try {
			this.state = 2105;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 330, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2103;
				this.eCS_ProcedureCall();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2104;
				this.eCS_MemberProcedureCall();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public eCS_ProcedureCall(): ECS_ProcedureCallContext {
		let localctx: ECS_ProcedureCallContext = new ECS_ProcedureCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 222, vbaParser.RULE_eCS_ProcedureCall);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2107;
			this.match(vbaParser.CALL);
			this.state = 2108;
			this.match(vbaParser.WS);
			this.state = 2109;
			this.ambiguousIdentifier();
			this.state = 2111;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 331, this._ctx) ) {
			case 1:
				{
				this.state = 2110;
				this.typeHint();
				}
				break;
			}
			this.state = 2126;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 335, this._ctx) ) {
			case 1:
				{
				this.state = 2114;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 2113;
					this.match(vbaParser.WS);
					}
				}

				this.state = 2116;
				this.match(vbaParser.LPAREN);
				this.state = 2118;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 333, this._ctx) ) {
				case 1:
					{
					this.state = 2117;
					this.match(vbaParser.WS);
					}
					break;
				}
				this.state = 2120;
				this.argsCall();
				this.state = 2122;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 2121;
					this.match(vbaParser.WS);
					}
				}

				this.state = 2124;
				this.match(vbaParser.RPAREN);
				}
				break;
			}
			this.state = 2137;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 337, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2129;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 2128;
						this.match(vbaParser.WS);
						}
					}

					this.state = 2131;
					this.match(vbaParser.LPAREN);
					this.state = 2132;
					this.subscripts();
					this.state = 2133;
					this.match(vbaParser.RPAREN);
					}
					}
				}
				this.state = 2139;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 337, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public eCS_MemberProcedureCall(): ECS_MemberProcedureCallContext {
		let localctx: ECS_MemberProcedureCallContext = new ECS_MemberProcedureCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 224, vbaParser.RULE_eCS_MemberProcedureCall);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2140;
			this.match(vbaParser.CALL);
			this.state = 2141;
			this.match(vbaParser.WS);
			this.state = 2143;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 338, this._ctx) ) {
			case 1:
				{
				this.state = 2142;
				this.implicitCallStmt_InStmt();
				}
				break;
			}
			this.state = 2145;
			this.match(vbaParser.T__3);
			this.state = 2146;
			this.ambiguousIdentifier();
			this.state = 2148;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 339, this._ctx) ) {
			case 1:
				{
				this.state = 2147;
				this.typeHint();
				}
				break;
			}
			this.state = 2163;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 343, this._ctx) ) {
			case 1:
				{
				this.state = 2151;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 2150;
					this.match(vbaParser.WS);
					}
				}

				this.state = 2153;
				this.match(vbaParser.LPAREN);
				this.state = 2155;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 341, this._ctx) ) {
				case 1:
					{
					this.state = 2154;
					this.match(vbaParser.WS);
					}
					break;
				}
				this.state = 2157;
				this.argsCall();
				this.state = 2159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 2158;
					this.match(vbaParser.WS);
					}
				}

				this.state = 2161;
				this.match(vbaParser.RPAREN);
				}
				break;
			}
			this.state = 2174;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 345, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2166;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 2165;
						this.match(vbaParser.WS);
						}
					}

					this.state = 2168;
					this.match(vbaParser.LPAREN);
					this.state = 2169;
					this.subscripts();
					this.state = 2170;
					this.match(vbaParser.RPAREN);
					}
					}
				}
				this.state = 2176;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 345, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public implicitCallStmt_InBlock(): ImplicitCallStmt_InBlockContext {
		let localctx: ImplicitCallStmt_InBlockContext = new ImplicitCallStmt_InBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 226, vbaParser.RULE_implicitCallStmt_InBlock);
		try {
			this.state = 2179;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 346, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2177;
				this.iCS_B_MemberProcedureCall();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2178;
				this.iCS_B_ProcedureCall();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public iCS_B_MemberProcedureCall(): ICS_B_MemberProcedureCallContext {
		let localctx: ICS_B_MemberProcedureCallContext = new ICS_B_MemberProcedureCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 228, vbaParser.RULE_iCS_B_MemberProcedureCall);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2182;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 347, this._ctx) ) {
			case 1:
				{
				this.state = 2181;
				this.implicitCallStmt_InStmt();
				}
				break;
			}
			this.state = 2184;
			this.match(vbaParser.T__3);
			this.state = 2185;
			this.ambiguousIdentifier();
			this.state = 2187;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 348, this._ctx) ) {
			case 1:
				{
				this.state = 2186;
				this.typeHint();
				}
				break;
			}
			this.state = 2191;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 349, this._ctx) ) {
			case 1:
				{
				this.state = 2189;
				this.match(vbaParser.WS);
				this.state = 2190;
				this.argsCall();
				}
				break;
			}
			this.state = 2194;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 350, this._ctx) ) {
			case 1:
				{
				this.state = 2193;
				this.dictionaryCallStmt();
				}
				break;
			}
			this.state = 2205;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 352, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2197;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 2196;
						this.match(vbaParser.WS);
						}
					}

					this.state = 2199;
					this.match(vbaParser.LPAREN);
					this.state = 2200;
					this.subscripts();
					this.state = 2201;
					this.match(vbaParser.RPAREN);
					}
					}
				}
				this.state = 2207;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 352, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public iCS_B_ProcedureCall(): ICS_B_ProcedureCallContext {
		let localctx: ICS_B_ProcedureCallContext = new ICS_B_ProcedureCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 230, vbaParser.RULE_iCS_B_ProcedureCall);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2208;
			this.certainIdentifier();
			this.state = 2211;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 353, this._ctx) ) {
			case 1:
				{
				this.state = 2209;
				this.match(vbaParser.WS);
				this.state = 2210;
				this.argsCall();
				}
				break;
			}
			this.state = 2222;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 355, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2214;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 2213;
						this.match(vbaParser.WS);
						}
					}

					this.state = 2216;
					this.match(vbaParser.LPAREN);
					this.state = 2217;
					this.subscripts();
					this.state = 2218;
					this.match(vbaParser.RPAREN);
					}
					}
				}
				this.state = 2224;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 355, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		let localctx: ImplicitCallStmt_InStmtContext = new ImplicitCallStmt_InStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 232, vbaParser.RULE_implicitCallStmt_InStmt);
		try {
			this.state = 2229;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 356, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2225;
				this.iCS_S_MembersCall();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2226;
				this.iCS_S_VariableOrProcedureCall();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2227;
				this.iCS_S_ProcedureOrArrayCall();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2228;
				this.iCS_S_DictionaryCall();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public iCS_S_VariableOrProcedureCall(): ICS_S_VariableOrProcedureCallContext {
		let localctx: ICS_S_VariableOrProcedureCallContext = new ICS_S_VariableOrProcedureCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 234, vbaParser.RULE_iCS_S_VariableOrProcedureCall);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2231;
			this.ambiguousIdentifier();
			this.state = 2233;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 357, this._ctx) ) {
			case 1:
				{
				this.state = 2232;
				this.typeHint();
				}
				break;
			}
			this.state = 2236;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 358, this._ctx) ) {
			case 1:
				{
				this.state = 2235;
				this.dictionaryCallStmt();
				}
				break;
			}
			this.state = 2247;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 360, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2239;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 2238;
						this.match(vbaParser.WS);
						}
					}

					this.state = 2241;
					this.match(vbaParser.LPAREN);
					this.state = 2242;
					this.subscripts();
					this.state = 2243;
					this.match(vbaParser.RPAREN);
					}
					}
				}
				this.state = 2249;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 360, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public iCS_S_ProcedureOrArrayCall(): ICS_S_ProcedureOrArrayCallContext {
		let localctx: ICS_S_ProcedureOrArrayCallContext = new ICS_S_ProcedureOrArrayCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 236, vbaParser.RULE_iCS_S_ProcedureOrArrayCall);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2252;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 361, this._ctx) ) {
			case 1:
				{
				this.state = 2250;
				this.ambiguousIdentifier();
				}
				break;
			case 2:
				{
				this.state = 2251;
				this.baseType();
				}
				break;
			}
			this.state = 2255;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 488) !== 0) || _la===186) {
				{
				this.state = 2254;
				this.typeHint();
				}
			}

			this.state = 2258;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 2257;
				this.match(vbaParser.WS);
				}
			}

			this.state = 2260;
			this.match(vbaParser.LPAREN);
			this.state = 2262;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 364, this._ctx) ) {
			case 1:
				{
				this.state = 2261;
				this.match(vbaParser.WS);
				}
				break;
			}
			this.state = 2268;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 366, this._ctx) ) {
			case 1:
				{
				this.state = 2264;
				this.argsCall();
				this.state = 2266;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 2265;
					this.match(vbaParser.WS);
					}
				}

				}
				break;
			}
			this.state = 2270;
			this.match(vbaParser.RPAREN);
			this.state = 2272;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 367, this._ctx) ) {
			case 1:
				{
				this.state = 2271;
				this.dictionaryCallStmt();
				}
				break;
			}
			this.state = 2283;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 369, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2275;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 2274;
						this.match(vbaParser.WS);
						}
					}

					this.state = 2277;
					this.match(vbaParser.LPAREN);
					this.state = 2278;
					this.subscripts();
					this.state = 2279;
					this.match(vbaParser.RPAREN);
					}
					}
				}
				this.state = 2285;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 369, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public iCS_S_MembersCall(): ICS_S_MembersCallContext {
		let localctx: ICS_S_MembersCallContext = new ICS_S_MembersCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 238, vbaParser.RULE_iCS_S_MembersCall);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2288;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 370, this._ctx) ) {
			case 1:
				{
				this.state = 2286;
				this.iCS_S_VariableOrProcedureCall();
				}
				break;
			case 2:
				{
				this.state = 2287;
				this.iCS_S_ProcedureOrArrayCall();
				}
				break;
			}
			this.state = 2291;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2290;
					this.iCS_S_MemberCall();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2293;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 371, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 2296;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 372, this._ctx) ) {
			case 1:
				{
				this.state = 2295;
				this.dictionaryCallStmt();
				}
				break;
			}
			this.state = 2307;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 374, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2299;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 2298;
						this.match(vbaParser.WS);
						}
					}

					this.state = 2301;
					this.match(vbaParser.LPAREN);
					this.state = 2302;
					this.subscripts();
					this.state = 2303;
					this.match(vbaParser.RPAREN);
					}
					}
				}
				this.state = 2309;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 374, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public iCS_S_MemberCall(): ICS_S_MemberCallContext {
		let localctx: ICS_S_MemberCallContext = new ICS_S_MemberCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 240, vbaParser.RULE_iCS_S_MemberCall);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2311;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===213) {
				{
				this.state = 2310;
				this.match(vbaParser.LINE_CONTINUATION);
				}
			}

			this.state = 2313;
			_la = this._input.LA(1);
			if(!(_la===4 || _la===5)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 2315;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===213) {
				{
				this.state = 2314;
				this.match(vbaParser.LINE_CONTINUATION);
				}
			}

			this.state = 2319;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 377, this._ctx) ) {
			case 1:
				{
				this.state = 2317;
				this.iCS_S_VariableOrProcedureCall();
				}
				break;
			case 2:
				{
				this.state = 2318;
				this.iCS_S_ProcedureOrArrayCall();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public iCS_S_DictionaryCall(): ICS_S_DictionaryCallContext {
		let localctx: ICS_S_DictionaryCallContext = new ICS_S_DictionaryCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 242, vbaParser.RULE_iCS_S_DictionaryCall);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2321;
			this.dictionaryCallStmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public argsCall(): ArgsCallContext {
		let localctx: ArgsCallContext = new ArgsCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 244, vbaParser.RULE_argsCall);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2335;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 381, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2324;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294966832) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3225419775) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294966799) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 2256531523) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294934047) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 67108863) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & 270524997) !== 0)) {
						{
						this.state = 2323;
						this.argCall();
						}
					}

					this.state = 2327;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 2326;
						this.match(vbaParser.WS);
						}
					}

					this.state = 2329;
					_la = this._input.LA(1);
					if(!(_la===1 || _la===2)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 2331;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 380, this._ctx) ) {
					case 1:
						{
						this.state = 2330;
						this.match(vbaParser.WS);
						}
						break;
					}
					}
					}
				}
				this.state = 2337;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 381, this._ctx);
			}
			this.state = 2338;
			this.argCall();
			this.state = 2351;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 385, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2340;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 2339;
						this.match(vbaParser.WS);
						}
					}

					this.state = 2342;
					_la = this._input.LA(1);
					if(!(_la===1 || _la===2)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 2344;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 383, this._ctx) ) {
					case 1:
						{
						this.state = 2343;
						this.match(vbaParser.WS);
						}
						break;
					}
					this.state = 2347;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 384, this._ctx) ) {
					case 1:
						{
						this.state = 2346;
						this.argCall();
						}
						break;
					}
					}
					}
				}
				this.state = 2353;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 385, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public argCall(): ArgCallContext {
		let localctx: ArgCallContext = new ArgCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 246, vbaParser.RULE_argCall);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2355;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 386, this._ctx) ) {
			case 1:
				{
				this.state = 2354;
				this.match(vbaParser.LPAREN);
				}
				break;
			}
			this.state = 2359;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 387, this._ctx) ) {
			case 1:
				{
				this.state = 2357;
				_la = this._input.LA(1);
				if(!(_la===21 || _la===22 || _la===129)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2358;
				this.match(vbaParser.WS);
				}
				break;
			}
			this.state = 2362;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===202) {
				{
				this.state = 2361;
				this.match(vbaParser.RPAREN);
				}
			}

			this.state = 2364;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dictionaryCallStmt(): DictionaryCallStmtContext {
		let localctx: DictionaryCallStmtContext = new DictionaryCallStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 248, vbaParser.RULE_dictionaryCallStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2366;
			this.match(vbaParser.T__4);
			this.state = 2367;
			this.ambiguousIdentifier();
			this.state = 2369;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 389, this._ctx) ) {
			case 1:
				{
				this.state = 2368;
				this.typeHint();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public argList(): ArgListContext {
		let localctx: ArgListContext = new ArgListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 250, vbaParser.RULE_argList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2371;
			this.match(vbaParser.LPAREN);
			this.state = 2389;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 394, this._ctx) ) {
			case 1:
				{
				this.state = 2373;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 2372;
					this.match(vbaParser.WS);
					}
				}

				this.state = 2375;
				this.arg();
				this.state = 2386;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 393, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2377;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===220) {
							{
							this.state = 2376;
							this.match(vbaParser.WS);
							}
						}

						this.state = 2379;
						this.match(vbaParser.T__0);
						this.state = 2381;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===220) {
							{
							this.state = 2380;
							this.match(vbaParser.WS);
							}
						}

						this.state = 2383;
						this.arg();
						}
						}
					}
					this.state = 2388;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 393, this._ctx);
				}
				}
				break;
			}
			this.state = 2392;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 2391;
				this.match(vbaParser.WS);
				}
			}

			this.state = 2394;
			this.match(vbaParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arg(): ArgContext {
		let localctx: ArgContext = new ArgContext(this, this._ctx, this.state);
		this.enterRule(localctx, 252, vbaParser.RULE_arg);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2398;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 396, this._ctx) ) {
			case 1:
				{
				this.state = 2396;
				this.match(vbaParser.OPTIONAL);
				this.state = 2397;
				this.match(vbaParser.WS);
				}
				break;
			}
			this.state = 2402;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 397, this._ctx) ) {
			case 1:
				{
				this.state = 2400;
				_la = this._input.LA(1);
				if(!(_la===21 || _la===22)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2401;
				this.match(vbaParser.WS);
				}
				break;
			}
			this.state = 2406;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 398, this._ctx) ) {
			case 1:
				{
				this.state = 2404;
				this.match(vbaParser.PARAMARRAY);
				this.state = 2405;
				this.match(vbaParser.WS);
				}
				break;
			}
			this.state = 2408;
			this.ambiguousIdentifier();
			this.state = 2410;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 488) !== 0) || _la===186) {
				{
				this.state = 2409;
				this.typeHint();
				}
			}

			this.state = 2420;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 402, this._ctx) ) {
			case 1:
				{
				this.state = 2413;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 2412;
					this.match(vbaParser.WS);
					}
				}

				this.state = 2415;
				this.match(vbaParser.LPAREN);
				this.state = 2417;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 2416;
					this.match(vbaParser.WS);
					}
				}

				this.state = 2419;
				this.match(vbaParser.RPAREN);
				}
				break;
			}
			this.state = 2426;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 404, this._ctx) ) {
			case 1:
				{
				this.state = 2423;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 2422;
					this.match(vbaParser.WS);
					}
				}

				this.state = 2425;
				this.asTypeClause();
				}
				break;
			}
			this.state = 2432;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 406, this._ctx) ) {
			case 1:
				{
				this.state = 2429;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 2428;
					this.match(vbaParser.WS);
					}
				}

				this.state = 2431;
				this.argDefaultValue();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public argDefaultValue(): ArgDefaultValueContext {
		let localctx: ArgDefaultValueContext = new ArgDefaultValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 254, vbaParser.RULE_argDefaultValue);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2434;
			this.match(vbaParser.EQ);
			this.state = 2436;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 2435;
				this.match(vbaParser.WS);
				}
			}

			this.state = 2438;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public subscripts(): SubscriptsContext {
		let localctx: SubscriptsContext = new SubscriptsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 256, vbaParser.RULE_subscripts);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2440;
			this.subscript_();
			this.state = 2451;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 410, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2442;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 2441;
						this.match(vbaParser.WS);
						}
					}

					this.state = 2444;
					this.match(vbaParser.T__0);
					this.state = 2446;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 2445;
						this.match(vbaParser.WS);
						}
					}

					this.state = 2448;
					this.subscript_();
					}
					}
				}
				this.state = 2453;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 410, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public subscript_(): Subscript_Context {
		let localctx: Subscript_Context = new Subscript_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 258, vbaParser.RULE_subscript_);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2459;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 411, this._ctx) ) {
			case 1:
				{
				this.state = 2454;
				this.valueStmt(0);
				this.state = 2455;
				this.match(vbaParser.WS);
				this.state = 2456;
				this.match(vbaParser.TO);
				this.state = 2457;
				this.match(vbaParser.WS);
				}
				break;
			}
			this.state = 2462;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 412, this._ctx) ) {
			case 1:
				{
				this.state = 2461;
				this.typeHint();
				}
				break;
			}
			this.state = 2464;
			this.valueStmt(0);
			this.state = 2466;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 488) !== 0) || _la===186) {
				{
				this.state = 2465;
				this.typeHint();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		let localctx: AmbiguousIdentifierContext = new AmbiguousIdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 260, vbaParser.RULE_ambiguousIdentifier);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2470;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 2470;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 221:
						{
						this.state = 2468;
						this.match(vbaParser.IDENTIFIER);
						}
						break;
					case 9:
					case 10:
					case 11:
					case 12:
					case 13:
					case 14:
					case 15:
					case 16:
					case 17:
					case 18:
					case 19:
					case 20:
					case 21:
					case 22:
					case 23:
					case 24:
					case 25:
					case 26:
					case 27:
					case 28:
					case 29:
					case 30:
					case 31:
					case 32:
					case 33:
					case 34:
					case 35:
					case 36:
					case 37:
					case 38:
					case 39:
					case 40:
					case 41:
					case 42:
					case 43:
					case 44:
					case 45:
					case 46:
					case 47:
					case 48:
					case 49:
					case 50:
					case 51:
					case 52:
					case 53:
					case 62:
					case 63:
					case 64:
					case 65:
					case 66:
					case 67:
					case 73:
					case 74:
					case 75:
					case 76:
					case 77:
					case 78:
					case 79:
					case 80:
					case 81:
					case 82:
					case 83:
					case 84:
					case 85:
					case 86:
					case 87:
					case 88:
					case 89:
					case 90:
					case 91:
					case 92:
					case 93:
					case 94:
					case 95:
					case 96:
					case 97:
					case 102:
					case 108:
					case 109:
					case 110:
					case 111:
					case 112:
					case 113:
					case 114:
					case 115:
					case 116:
					case 117:
					case 118:
					case 121:
					case 122:
					case 127:
					case 128:
					case 129:
					case 130:
					case 131:
					case 132:
					case 137:
					case 138:
					case 139:
					case 140:
					case 141:
					case 142:
					case 144:
					case 145:
					case 146:
					case 147:
					case 148:
					case 149:
					case 150:
					case 151:
					case 152:
					case 153:
					case 154:
					case 155:
					case 156:
					case 157:
					case 158:
					case 159:
					case 160:
					case 161:
					case 162:
					case 163:
					case 164:
					case 165:
					case 166:
					case 167:
					case 168:
					case 169:
					case 170:
					case 171:
					case 172:
					case 173:
					case 174:
					case 175:
					case 176:
					case 177:
					case 178:
					case 179:
					case 180:
					case 181:
					case 182:
					case 183:
					case 184:
					case 185:
						{
						this.state = 2469;
						this.ambiguousKeyword();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2472;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 415, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public asTypeClause(): AsTypeClauseContext {
		let localctx: AsTypeClauseContext = new AsTypeClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 262, vbaParser.RULE_asTypeClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2474;
			this.match(vbaParser.AS);
			this.state = 2476;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 2475;
				this.match(vbaParser.WS);
				}
			}

			this.state = 2480;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 417, this._ctx) ) {
			case 1:
				{
				this.state = 2478;
				this.match(vbaParser.NEW);
				this.state = 2479;
				this.match(vbaParser.WS);
				}
				break;
			}
			this.state = 2482;
			this.type_();
			this.state = 2487;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 419, this._ctx) ) {
			case 1:
				{
				this.state = 2484;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 2483;
					this.match(vbaParser.WS);
					}
				}

				this.state = 2486;
				this.fieldLength();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public baseType(): BaseTypeContext {
		let localctx: BaseTypeContext = new BaseTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 264, vbaParser.RULE_baseType);
		let _la: number;
		try {
			this.state = 2509;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 20:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2489;
				this.match(vbaParser.BOOLEAN);
				}
				break;
			case 23:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2490;
				this.match(vbaParser.BYTE);
				}
				break;
			case 30:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2491;
				this.match(vbaParser.COLLECTION);
				}
				break;
			case 33:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2492;
				this.match(vbaParser.DATE);
				}
				break;
			case 50:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2493;
				this.match(vbaParser.DOUBLE);
				}
				break;
			case 88:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2494;
				this.match(vbaParser.INTEGER);
				}
				break;
			case 92:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 2495;
				this.match(vbaParser.LONG);
				}
				break;
			case 159:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 2496;
				this.match(vbaParser.SINGLE);
				}
				break;
			case 164:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 2497;
				this.match(vbaParser.STRING);
				this.state = 2506;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 422, this._ctx) ) {
				case 1:
					{
					this.state = 2499;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 2498;
						this.match(vbaParser.WS);
						}
					}

					this.state = 2501;
					this.match(vbaParser.MULT);
					this.state = 2503;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===220) {
						{
						this.state = 2502;
						this.match(vbaParser.WS);
						}
					}

					this.state = 2505;
					this.valueStmt(0);
					}
					break;
				}
				}
				break;
			case 177:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 2508;
				this.match(vbaParser.VARIANT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public certainIdentifier(): CertainIdentifierContext {
		let localctx: CertainIdentifierContext = new CertainIdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 266, vbaParser.RULE_certainIdentifier);
		try {
			let _alt: number;
			this.state = 2526;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 221:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2511;
				this.match(vbaParser.IDENTIFIER);
				this.state = 2516;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 425, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 2514;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case 9:
						case 10:
						case 11:
						case 12:
						case 13:
						case 14:
						case 15:
						case 16:
						case 17:
						case 18:
						case 19:
						case 20:
						case 21:
						case 22:
						case 23:
						case 24:
						case 25:
						case 26:
						case 27:
						case 28:
						case 29:
						case 30:
						case 31:
						case 32:
						case 33:
						case 34:
						case 35:
						case 36:
						case 37:
						case 38:
						case 39:
						case 40:
						case 41:
						case 42:
						case 43:
						case 44:
						case 45:
						case 46:
						case 47:
						case 48:
						case 49:
						case 50:
						case 51:
						case 52:
						case 53:
						case 62:
						case 63:
						case 64:
						case 65:
						case 66:
						case 67:
						case 73:
						case 74:
						case 75:
						case 76:
						case 77:
						case 78:
						case 79:
						case 80:
						case 81:
						case 82:
						case 83:
						case 84:
						case 85:
						case 86:
						case 87:
						case 88:
						case 89:
						case 90:
						case 91:
						case 92:
						case 93:
						case 94:
						case 95:
						case 96:
						case 97:
						case 102:
						case 108:
						case 109:
						case 110:
						case 111:
						case 112:
						case 113:
						case 114:
						case 115:
						case 116:
						case 117:
						case 118:
						case 121:
						case 122:
						case 127:
						case 128:
						case 129:
						case 130:
						case 131:
						case 132:
						case 137:
						case 138:
						case 139:
						case 140:
						case 141:
						case 142:
						case 144:
						case 145:
						case 146:
						case 147:
						case 148:
						case 149:
						case 150:
						case 151:
						case 152:
						case 153:
						case 154:
						case 155:
						case 156:
						case 157:
						case 158:
						case 159:
						case 160:
						case 161:
						case 162:
						case 163:
						case 164:
						case 165:
						case 166:
						case 167:
						case 168:
						case 169:
						case 170:
						case 171:
						case 172:
						case 173:
						case 174:
						case 175:
						case 176:
						case 177:
						case 178:
						case 179:
						case 180:
						case 181:
						case 182:
						case 183:
						case 184:
						case 185:
							{
							this.state = 2512;
							this.ambiguousKeyword();
							}
							break;
						case 221:
							{
							this.state = 2513;
							this.match(vbaParser.IDENTIFIER);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 2518;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 425, this._ctx);
				}
				}
				break;
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			case 20:
			case 21:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 102:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 121:
			case 122:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 151:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 172:
			case 173:
			case 174:
			case 175:
			case 176:
			case 177:
			case 178:
			case 179:
			case 180:
			case 181:
			case 182:
			case 183:
			case 184:
			case 185:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2519;
				this.ambiguousKeyword();
				this.state = 2522;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						this.state = 2522;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case 9:
						case 10:
						case 11:
						case 12:
						case 13:
						case 14:
						case 15:
						case 16:
						case 17:
						case 18:
						case 19:
						case 20:
						case 21:
						case 22:
						case 23:
						case 24:
						case 25:
						case 26:
						case 27:
						case 28:
						case 29:
						case 30:
						case 31:
						case 32:
						case 33:
						case 34:
						case 35:
						case 36:
						case 37:
						case 38:
						case 39:
						case 40:
						case 41:
						case 42:
						case 43:
						case 44:
						case 45:
						case 46:
						case 47:
						case 48:
						case 49:
						case 50:
						case 51:
						case 52:
						case 53:
						case 62:
						case 63:
						case 64:
						case 65:
						case 66:
						case 67:
						case 73:
						case 74:
						case 75:
						case 76:
						case 77:
						case 78:
						case 79:
						case 80:
						case 81:
						case 82:
						case 83:
						case 84:
						case 85:
						case 86:
						case 87:
						case 88:
						case 89:
						case 90:
						case 91:
						case 92:
						case 93:
						case 94:
						case 95:
						case 96:
						case 97:
						case 102:
						case 108:
						case 109:
						case 110:
						case 111:
						case 112:
						case 113:
						case 114:
						case 115:
						case 116:
						case 117:
						case 118:
						case 121:
						case 122:
						case 127:
						case 128:
						case 129:
						case 130:
						case 131:
						case 132:
						case 137:
						case 138:
						case 139:
						case 140:
						case 141:
						case 142:
						case 144:
						case 145:
						case 146:
						case 147:
						case 148:
						case 149:
						case 150:
						case 151:
						case 152:
						case 153:
						case 154:
						case 155:
						case 156:
						case 157:
						case 158:
						case 159:
						case 160:
						case 161:
						case 162:
						case 163:
						case 164:
						case 165:
						case 166:
						case 167:
						case 168:
						case 169:
						case 170:
						case 171:
						case 172:
						case 173:
						case 174:
						case 175:
						case 176:
						case 177:
						case 178:
						case 179:
						case 180:
						case 181:
						case 182:
						case 183:
						case 184:
						case 185:
							{
							this.state = 2520;
							this.ambiguousKeyword();
							}
							break;
						case 221:
							{
							this.state = 2521;
							this.match(vbaParser.IDENTIFIER);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 2524;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 427, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public comparisonOperator(): ComparisonOperatorContext {
		let localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 268, vbaParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2528;
			_la = this._input.LA(1);
			if(!(_la===87 || _la===97 || ((((_la - 189)) & ~0x1F) === 0 && ((1 << (_la - 189)) & 559) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public complexType(): ComplexTypeContext {
		let localctx: ComplexTypeContext = new ComplexTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 270, vbaParser.RULE_complexType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2530;
			this.ambiguousIdentifier();
			this.state = 2535;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 429, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2531;
					_la = this._input.LA(1);
					if(!(_la===4 || _la===5)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 2532;
					this.ambiguousIdentifier();
					}
					}
				}
				this.state = 2537;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 429, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fieldLength(): FieldLengthContext {
		let localctx: FieldLengthContext = new FieldLengthContext(this, this._ctx, this.state);
		this.enterRule(localctx, 272, vbaParser.RULE_fieldLength);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2538;
			this.match(vbaParser.MULT);
			this.state = 2540;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 2539;
				this.match(vbaParser.WS);
				}
			}

			this.state = 2544;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 210:
				{
				this.state = 2542;
				this.match(vbaParser.INTEGERLITERAL);
				}
				break;
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			case 20:
			case 21:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 102:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 121:
			case 122:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 151:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 172:
			case 173:
			case 174:
			case 175:
			case 176:
			case 177:
			case 178:
			case 179:
			case 180:
			case 181:
			case 182:
			case 183:
			case 184:
			case 185:
			case 221:
				{
				this.state = 2543;
				this.ambiguousIdentifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public letterrange(): LetterrangeContext {
		let localctx: LetterrangeContext = new LetterrangeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 274, vbaParser.RULE_letterrange);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2546;
			this.certainIdentifier();
			this.state = 2555;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 434, this._ctx) ) {
			case 1:
				{
				this.state = 2548;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 2547;
					this.match(vbaParser.WS);
					}
				}

				this.state = 2550;
				this.match(vbaParser.MINUS);
				this.state = 2552;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 2551;
					this.match(vbaParser.WS);
					}
				}

				this.state = 2554;
				this.certainIdentifier();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lineLabel(): LineLabelContext {
		let localctx: LineLabelContext = new LineLabelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 276, vbaParser.RULE_lineLabel);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2557;
			this.ambiguousIdentifier();
			this.state = 2558;
			this.match(vbaParser.COLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let localctx: LiteralContext = new LiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 278, vbaParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2560;
			_la = this._input.LA(1);
			if(!(_la===73 || _la===116 || _la===117 || _la===171 || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & 127) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public type_(): Type_Context {
		let localctx: Type_Context = new Type_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 280, vbaParser.RULE_type_);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2564;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 435, this._ctx) ) {
			case 1:
				{
				this.state = 2562;
				this.baseType();
				}
				break;
			case 2:
				{
				this.state = 2563;
				this.complexType();
				}
				break;
			}
			this.state = 2574;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 438, this._ctx) ) {
			case 1:
				{
				this.state = 2567;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 2566;
					this.match(vbaParser.WS);
					}
				}

				this.state = 2569;
				this.match(vbaParser.LPAREN);
				this.state = 2571;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===220) {
					{
					this.state = 2570;
					this.match(vbaParser.WS);
					}
				}

				this.state = 2573;
				this.match(vbaParser.RPAREN);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeHint(): TypeHintContext {
		let localctx: TypeHintContext = new TypeHintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 282, vbaParser.RULE_typeHint);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2576;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 488) !== 0) || _la===186)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public visibility(): VisibilityContext {
		let localctx: VisibilityContext = new VisibilityContext(this, this._ctx, this.state);
		this.enterRule(localctx, 284, vbaParser.RULE_visibility);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2578;
			_la = this._input.LA(1);
			if(!(_la===75 || _la===79 || _la===132 || _la===137)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ambiguousKeyword(): AmbiguousKeywordContext {
		let localctx: AmbiguousKeywordContext = new AmbiguousKeywordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 286, vbaParser.RULE_ambiguousKeyword);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2580;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294966784) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3225419775) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294966799) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 2256531523) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294934047) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 67108863) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public remComment(): RemCommentContext {
		let localctx: RemCommentContext = new RemCommentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 288, vbaParser.RULE_remComment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2582;
			this.match(vbaParser.REMCOMMENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public comment(): CommentContext {
		let localctx: CommentContext = new CommentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 290, vbaParser.RULE_comment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2584;
			this.match(vbaParser.COMMENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public endOfLine(): EndOfLineContext {
		let localctx: EndOfLineContext = new EndOfLineContext(this, this._ctx, this.state);
		this.enterRule(localctx, 292, vbaParser.RULE_endOfLine);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2587;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===220) {
				{
				this.state = 2586;
				this.match(vbaParser.WS);
				}
			}

			this.state = 2592;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 214:
				{
				this.state = 2589;
				this.match(vbaParser.NEWLINE);
				}
				break;
			case 216:
				{
				this.state = 2590;
				this.comment();
				}
				break;
			case 215:
				{
				this.state = 2591;
				this.remComment();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 2595;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 441, this._ctx) ) {
			case 1:
				{
				this.state = 2594;
				this.match(vbaParser.WS);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public endOfStatement(): EndOfStatementContext {
		let localctx: EndOfStatementContext = new EndOfStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 294, vbaParser.RULE_endOfStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2607;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 445, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 2605;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 444, this._ctx) ) {
					case 1:
						{
						this.state = 2597;
						this.endOfLine();
						}
						break;
					case 2:
						{
						this.state = 2599;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===220) {
							{
							this.state = 2598;
							this.match(vbaParser.WS);
							}
						}

						this.state = 2601;
						this.match(vbaParser.COLON);
						this.state = 2603;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 443, this._ctx) ) {
						case 1:
							{
							this.state = 2602;
							this.match(vbaParser.WS);
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 2609;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 445, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 101:
			return this.valueStmt_sempred(localctx as ValueStmtContext, predIndex);
		}
		return true;
	}
	private valueStmt_sempred(localctx: ValueStmtContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 14);
		case 1:
			return this.precpred(this._ctx, 11);
		case 2:
			return this.precpred(this._ctx, 10);
		case 3:
			return this.precpred(this._ctx, 9);
		case 4:
			return this.precpred(this._ctx, 8);
		case 5:
			return this.precpred(this._ctx, 7);
		case 6:
			return this.precpred(this._ctx, 5);
		case 7:
			return this.precpred(this._ctx, 4);
		case 8:
			return this.precpred(this._ctx, 3);
		case 9:
			return this.precpred(this._ctx, 2);
		case 10:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,221,2611,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,
	2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,
	75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,
	7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,
	89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,
	2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,
	7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
	7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,2,115,
	7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,7,120,2,121,
	7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,2,126,7,126,2,127,
	7,127,2,128,7,128,2,129,7,129,2,130,7,130,2,131,7,131,2,132,7,132,2,133,
	7,133,2,134,7,134,2,135,7,135,2,136,7,136,2,137,7,137,2,138,7,138,2,139,
	7,139,2,140,7,140,2,141,7,141,2,142,7,142,2,143,7,143,2,144,7,144,2,145,
	7,145,2,146,7,146,2,147,7,147,1,0,1,0,1,0,1,1,3,1,301,8,1,1,1,5,1,304,8,
	1,10,1,12,1,307,9,1,1,1,1,1,5,1,311,8,1,10,1,12,1,314,9,1,3,1,316,8,1,1,
	1,3,1,319,8,1,1,1,5,1,322,8,1,10,1,12,1,325,9,1,1,1,3,1,328,8,1,1,1,5,1,
	331,8,1,10,1,12,1,334,9,1,1,1,3,1,337,8,1,1,1,5,1,340,8,1,10,1,12,1,343,
	9,1,1,1,3,1,346,8,1,1,1,5,1,349,8,1,10,1,12,1,352,9,1,1,1,3,1,355,8,1,1,
	2,1,2,1,2,1,2,1,2,3,2,362,8,2,1,3,1,3,1,3,1,3,1,3,3,3,369,8,3,1,3,5,3,372,
	8,3,10,3,12,3,375,9,3,1,3,4,3,378,8,3,11,3,12,3,379,1,3,1,3,1,4,1,4,3,4,
	386,8,4,1,4,1,4,3,4,390,8,4,1,4,1,4,1,4,3,4,395,8,4,1,4,5,4,398,8,4,10,
	4,12,4,401,9,4,1,5,1,5,4,5,405,8,5,11,5,12,5,406,4,5,409,8,5,11,5,12,5,
	410,1,6,1,6,4,6,415,8,6,11,6,12,6,416,1,6,1,6,5,6,421,8,6,10,6,12,6,424,
	9,6,1,6,5,6,427,8,6,10,6,12,6,430,9,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,
	7,440,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,453,8,8,1,9,1,
	9,3,9,457,8,9,1,10,1,10,4,10,461,8,10,11,10,12,10,462,1,10,1,10,5,10,467,
	8,10,10,10,12,10,470,9,10,1,10,5,10,473,8,10,10,10,12,10,476,9,10,1,11,
	1,11,1,11,1,11,1,11,1,11,3,11,484,8,11,1,12,1,12,1,12,1,12,3,12,490,8,12,
	1,12,1,12,3,12,494,8,12,1,12,1,12,3,12,498,8,12,1,12,1,12,3,12,502,8,12,
	1,12,5,12,505,8,12,10,12,12,12,508,9,12,1,13,1,13,1,13,1,13,5,13,514,8,
	13,10,13,12,13,517,9,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,
	14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,
	1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,
	14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,
	1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,
	14,1,14,1,14,3,14,589,8,14,1,15,1,15,1,15,1,15,3,15,595,8,15,1,15,1,15,
	3,15,599,8,15,1,15,3,15,602,8,15,1,16,1,16,1,17,1,17,1,17,1,17,1,18,1,18,
	1,18,1,18,1,19,1,19,1,19,1,19,3,19,618,8,19,1,19,1,19,3,19,622,8,19,1,19,
	5,19,625,8,19,10,19,12,19,628,9,19,3,19,630,8,19,1,20,1,20,1,20,3,20,635,
	8,20,1,20,1,20,1,20,1,20,3,20,641,8,20,1,20,1,20,3,20,645,8,20,1,20,5,20,
	648,8,20,10,20,12,20,651,9,20,1,21,1,21,3,21,655,8,21,1,21,1,21,3,21,659,
	8,21,1,21,3,21,662,8,21,1,21,1,21,3,21,666,8,21,1,21,1,21,1,22,1,22,3,22,
	672,8,22,1,22,1,22,3,22,676,8,22,1,22,1,22,1,23,1,23,1,23,3,23,683,8,23,
	1,23,1,23,1,23,1,23,3,23,689,8,23,1,23,1,23,3,23,693,8,23,1,23,3,23,696,
	8,23,1,23,1,23,1,23,3,23,701,8,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,
	23,3,23,711,8,23,1,23,3,23,714,8,23,1,23,3,23,717,8,23,1,23,1,23,3,23,721,
	8,23,1,24,1,24,1,24,1,24,3,24,727,8,24,1,24,1,24,3,24,731,8,24,1,24,5,24,
	734,8,24,10,24,12,24,737,9,24,1,25,1,25,1,25,1,25,3,25,743,8,25,1,25,1,
	25,3,25,747,8,25,1,25,1,25,3,25,751,8,25,1,25,1,25,3,25,755,8,25,1,25,3,
	25,758,8,25,1,26,1,26,1,26,3,26,763,8,26,1,26,1,26,1,26,1,26,1,26,1,26,
	1,26,1,26,1,26,3,26,774,8,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,
	26,1,26,1,26,3,26,787,8,26,1,27,1,27,1,28,1,28,1,28,3,28,794,8,28,1,28,
	1,28,1,28,1,28,1,28,5,28,801,8,28,10,28,12,28,804,9,28,1,28,1,28,1,29,1,
	29,3,29,810,8,29,1,29,1,29,3,29,814,8,29,1,29,3,29,817,8,29,1,29,1,29,1,
	30,1,30,1,30,1,30,1,30,3,30,826,8,30,1,30,5,30,829,8,30,10,30,12,30,832,
	9,30,1,31,1,31,1,31,1,31,1,32,1,32,1,32,3,32,841,8,32,1,32,1,32,1,32,1,
	32,3,32,847,8,32,1,32,1,32,1,33,1,33,1,34,1,34,1,34,1,34,3,34,857,8,34,
	1,34,1,34,3,34,861,8,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,3,35,871,
	8,35,1,35,1,35,1,35,1,35,1,35,1,35,3,35,879,8,35,1,35,1,35,1,35,3,35,884,
	8,35,1,36,1,36,1,36,1,36,3,36,890,8,36,1,36,1,36,3,36,894,8,36,1,36,3,36,
	897,8,36,1,36,1,36,3,36,901,8,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,
	1,36,3,36,912,8,36,1,36,1,36,3,36,916,8,36,1,36,1,36,1,36,3,36,921,8,36,
	1,37,1,37,1,37,3,37,926,8,37,1,37,1,37,3,37,930,8,37,1,37,1,37,3,37,934,
	8,37,1,37,1,37,3,37,938,8,37,1,37,3,37,941,8,37,1,37,3,37,944,8,37,1,37,
	3,37,947,8,37,1,37,3,37,950,8,37,1,37,1,37,3,37,954,8,37,1,37,1,37,1,38,
	1,38,1,38,1,38,3,38,962,8,38,1,38,1,38,3,38,966,8,38,1,38,3,38,969,8,38,
	1,38,3,38,972,8,38,1,38,1,38,3,38,976,8,38,1,38,1,38,1,39,1,39,1,39,1,39,
	1,40,1,40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,
	41,3,41,999,8,41,1,41,1,41,5,41,1003,8,41,10,41,12,41,1006,9,41,1,41,3,
	41,1009,8,41,1,41,1,41,3,41,1013,8,41,1,42,1,42,1,42,1,42,1,42,1,42,1,42,
	3,42,1022,8,42,1,43,1,43,1,44,1,44,1,44,1,44,1,44,1,44,1,44,3,44,1033,8,
	44,1,45,1,45,1,45,3,45,1038,8,45,1,46,1,46,1,46,1,46,1,47,1,47,1,47,1,47,
	3,47,1048,8,47,1,47,1,47,3,47,1052,8,47,1,47,4,47,1055,8,47,11,47,12,47,
	1056,1,48,1,48,1,48,1,48,1,49,1,49,3,49,1065,8,49,1,49,1,49,3,49,1069,8,
	49,1,49,1,49,3,49,1073,8,49,1,49,3,49,1076,8,49,1,49,1,49,3,49,1080,8,49,
	1,50,1,50,1,50,1,50,3,50,1086,8,50,1,50,1,50,3,50,1090,8,50,1,50,1,50,1,
	51,1,51,3,51,1096,8,51,1,51,3,51,1099,8,51,1,51,3,51,1102,8,51,1,51,3,51,
	1105,8,51,1,52,1,52,1,52,1,52,1,53,1,53,1,53,1,53,3,53,1115,8,53,1,53,1,
	53,3,53,1119,8,53,1,53,1,53,1,53,1,53,1,53,3,53,1126,8,53,3,53,1128,8,53,
	1,54,1,54,1,54,1,54,3,54,1134,8,54,1,54,1,54,3,54,1138,8,54,1,54,1,54,1,
	55,1,55,3,55,1144,8,55,1,55,1,55,3,55,1148,8,55,1,55,1,55,3,55,1152,8,55,
	1,55,1,55,1,56,1,56,5,56,1158,8,56,10,56,12,56,1161,9,56,1,56,3,56,1164,
	8,56,1,56,1,56,1,57,1,57,3,57,1170,8,57,1,57,1,57,1,57,1,57,1,57,1,57,1,
	57,5,57,1179,8,57,10,57,12,57,1182,9,57,1,58,1,58,3,58,1186,8,58,1,58,1,
	58,1,58,1,58,1,58,1,58,1,58,5,58,1195,8,58,10,58,12,58,1198,9,58,1,59,1,
	59,1,59,1,59,1,59,5,59,1205,8,59,10,59,12,59,1208,9,59,1,60,1,60,3,60,1212,
	8,60,1,60,1,60,3,60,1216,8,60,1,60,1,60,3,60,1220,8,60,1,60,1,60,1,61,1,
	61,1,61,1,61,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,63,1,63,1,63,1,63,
	1,63,1,63,1,63,1,63,3,63,1244,8,63,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,
	64,3,64,1254,8,64,1,64,1,64,3,64,1258,8,64,1,64,5,64,1261,8,64,10,64,12,
	64,1264,9,64,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,3,65,1274,8,65,1,65,
	1,65,3,65,1278,8,65,1,65,5,65,1281,8,65,10,65,12,65,1284,9,65,1,66,1,66,
	1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,3,66,1297,8,66,1,66,1,66,3,
	66,1301,8,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,3,66,1310,8,66,1,66,1,66,
	3,66,1314,8,66,1,66,3,66,1317,8,66,1,67,1,67,3,67,1321,8,67,1,67,1,67,3,
	67,1325,8,67,1,67,3,67,1328,8,67,5,67,1330,8,67,10,67,12,67,1333,9,67,1,
	67,3,67,1336,8,67,1,67,3,67,1339,8,67,1,67,1,67,3,67,1343,8,67,1,67,3,67,
	1346,8,67,4,67,1348,8,67,11,67,12,67,1349,3,67,1352,8,67,1,68,1,68,1,68,
	3,68,1357,8,68,1,68,1,68,3,68,1361,8,68,1,68,1,68,3,68,1365,8,68,1,68,1,
	68,3,68,1369,8,68,3,68,1371,8,68,1,69,1,69,1,69,1,69,3,69,1377,8,69,1,69,
	1,69,3,69,1381,8,69,1,69,3,69,1384,8,69,1,70,1,70,1,70,3,70,1389,8,70,1,
	70,1,70,3,70,1393,8,70,1,70,1,70,1,70,1,70,3,70,1399,8,70,1,70,3,70,1402,
	8,70,1,70,3,70,1405,8,70,1,70,1,70,3,70,1409,8,70,1,70,1,70,3,70,1413,8,
	70,1,70,1,70,1,71,1,71,1,71,3,71,1420,8,71,1,71,1,71,3,71,1424,8,71,1,71,
	1,71,1,71,1,71,3,71,1430,8,71,1,71,3,71,1433,8,71,1,71,1,71,3,71,1437,8,
	71,1,71,1,71,1,72,1,72,1,72,3,72,1444,8,72,1,72,1,72,3,72,1448,8,72,1,72,
	1,72,1,72,1,72,3,72,1454,8,72,1,72,3,72,1457,8,72,1,72,1,72,3,72,1461,8,
	72,1,72,1,72,1,73,1,73,1,73,1,73,3,73,1469,8,73,1,73,1,73,3,73,1473,8,73,
	1,73,3,73,1476,8,73,1,73,3,73,1479,8,73,1,73,1,73,3,73,1483,8,73,1,73,1,
	73,1,74,1,74,1,74,1,74,3,74,1491,8,74,1,74,1,74,3,74,1495,8,74,1,74,1,74,
	3,74,1499,8,74,3,74,1501,8,74,1,74,3,74,1504,8,74,1,75,1,75,1,75,3,75,1509,
	8,75,1,76,1,76,1,76,1,76,3,76,1515,8,76,1,76,1,76,3,76,1519,8,76,1,76,1,
	76,3,76,1523,8,76,1,76,5,76,1526,8,76,10,76,12,76,1529,9,76,1,77,1,77,3,
	77,1533,8,77,1,77,1,77,3,77,1537,8,77,1,77,1,77,3,77,1541,8,77,1,77,1,77,
	1,77,3,77,1546,8,77,1,78,1,78,1,79,1,79,1,79,1,79,3,79,1554,8,79,3,79,1556,
	8,79,1,80,1,80,1,81,1,81,1,81,1,81,1,82,1,82,1,82,1,82,3,82,1568,8,82,1,
	82,1,82,3,82,1572,8,82,1,82,1,82,1,83,1,83,1,83,1,83,3,83,1580,8,83,1,83,
	1,83,3,83,1584,8,83,1,83,1,83,1,84,1,84,1,84,1,84,3,84,1592,8,84,1,84,1,
	84,3,84,1596,8,84,1,84,1,84,3,84,1600,8,84,1,84,1,84,3,84,1604,8,84,1,84,
	1,84,3,84,1608,8,84,1,84,1,84,3,84,1612,8,84,1,84,1,84,1,85,1,85,1,85,1,
	85,3,85,1620,8,85,1,85,1,85,3,85,1624,8,85,1,85,1,85,1,86,1,86,1,86,1,86,
	1,86,1,86,1,86,5,86,1635,8,86,10,86,12,86,1638,9,86,1,86,1,86,1,87,1,87,
	3,87,1644,8,87,1,87,1,87,3,87,1648,8,87,1,87,1,87,1,87,1,87,1,87,1,87,1,
	87,1,87,1,87,3,87,1659,8,87,1,88,1,88,1,88,1,88,1,88,3,88,1666,8,88,1,89,
	1,89,1,89,3,89,1671,8,89,1,89,1,89,3,89,1675,8,89,1,89,5,89,1678,8,89,10,
	89,12,89,1681,9,89,3,89,1683,8,89,1,90,1,90,1,90,1,90,3,90,1689,8,90,1,
	90,1,90,3,90,1693,8,90,1,90,3,90,1696,8,90,1,91,1,91,1,91,1,91,3,91,1702,
	8,91,1,91,1,91,3,91,1706,8,91,1,91,1,91,1,92,1,92,1,92,1,92,3,92,1714,8,
	92,1,92,1,92,3,92,1718,8,92,1,92,1,92,1,93,1,93,1,94,1,94,1,94,3,94,1727,
	8,94,1,94,1,94,3,94,1731,8,94,1,94,1,94,3,94,1735,8,94,1,94,1,94,3,94,1739,
	8,94,1,94,3,94,1742,8,94,1,94,1,94,3,94,1746,8,94,1,94,1,94,1,95,1,95,3,
	95,1752,8,95,1,95,1,95,3,95,1756,8,95,1,95,1,95,1,96,1,96,1,96,3,96,1763,
	8,96,1,96,1,96,1,96,1,96,1,96,5,96,1770,8,96,10,96,12,96,1773,9,96,1,96,
	1,96,1,97,1,97,3,97,1779,8,97,1,97,1,97,3,97,1783,8,97,1,97,3,97,1786,8,
	97,1,97,3,97,1789,8,97,1,97,3,97,1792,8,97,1,97,1,97,3,97,1796,8,97,1,97,
	1,97,1,98,1,98,1,98,1,98,1,98,1,98,1,98,3,98,1807,8,98,1,99,1,99,1,99,1,
	99,1,100,1,100,1,100,1,100,3,100,1817,8,100,1,100,1,100,3,100,1821,8,100,
	1,100,1,100,1,100,1,100,1,100,3,100,1828,8,100,3,100,1830,8,100,1,101,1,
	101,1,101,1,101,1,101,3,101,1837,8,101,1,101,1,101,3,101,1841,8,101,1,101,
	1,101,3,101,1845,8,101,1,101,5,101,1848,8,101,10,101,12,101,1851,9,101,
	1,101,1,101,1,101,1,101,3,101,1857,8,101,1,101,1,101,1,101,1,101,1,101,
	3,101,1864,8,101,1,101,1,101,1,101,3,101,1869,8,101,1,101,1,101,3,101,1873,
	8,101,1,101,1,101,1,101,1,101,3,101,1879,8,101,1,101,1,101,1,101,3,101,
	1884,8,101,1,101,1,101,1,101,3,101,1889,8,101,1,101,3,101,1892,8,101,1,
	101,1,101,3,101,1896,8,101,1,101,1,101,3,101,1900,8,101,1,101,1,101,1,101,
	3,101,1905,8,101,1,101,1,101,3,101,1909,8,101,1,101,1,101,1,101,3,101,1914,
	8,101,1,101,1,101,3,101,1918,8,101,1,101,1,101,1,101,3,101,1923,8,101,1,
	101,1,101,3,101,1927,8,101,1,101,1,101,1,101,3,101,1932,8,101,1,101,1,101,
	3,101,1936,8,101,1,101,1,101,1,101,3,101,1941,8,101,1,101,1,101,3,101,1945,
	8,101,1,101,1,101,1,101,3,101,1950,8,101,1,101,1,101,3,101,1954,8,101,1,
	101,1,101,1,101,3,101,1959,8,101,1,101,1,101,3,101,1963,8,101,1,101,1,101,
	1,101,3,101,1968,8,101,1,101,1,101,3,101,1972,8,101,1,101,1,101,1,101,3,
	101,1977,8,101,1,101,1,101,3,101,1981,8,101,1,101,1,101,1,101,3,101,1986,
	8,101,1,101,1,101,3,101,1990,8,101,1,101,5,101,1993,8,101,10,101,12,101,
	1996,9,101,1,102,1,102,1,102,3,102,2001,8,102,1,102,1,102,1,102,3,102,2006,
	8,102,1,102,1,102,1,103,1,103,3,103,2012,8,103,1,103,1,103,3,103,2016,8,
	103,1,103,5,103,2019,8,103,10,103,12,103,2022,9,103,1,104,1,104,3,104,2026,
	8,104,1,104,1,104,3,104,2030,8,104,1,104,1,104,3,104,2034,8,104,3,104,2036,
	8,104,1,104,1,104,3,104,2040,8,104,3,104,2042,8,104,1,104,3,104,2045,8,
	104,1,104,1,104,3,104,2049,8,104,1,105,1,105,1,105,1,105,1,105,3,105,2056,
	8,105,1,105,1,105,1,106,1,106,1,106,1,106,3,106,2064,8,106,1,106,1,106,
	3,106,2068,8,106,1,106,1,106,1,107,1,107,1,107,1,107,1,107,1,107,3,107,
	2078,8,107,1,107,1,107,3,107,2082,8,107,1,107,1,107,1,108,1,108,1,108,1,
	108,3,108,2090,8,108,1,108,1,108,3,108,2094,8,108,1,108,3,108,2097,8,108,
	1,109,3,109,2100,8,109,1,109,1,109,1,110,1,110,3,110,2106,8,110,1,111,1,
	111,1,111,1,111,3,111,2112,8,111,1,111,3,111,2115,8,111,1,111,1,111,3,111,
	2119,8,111,1,111,1,111,3,111,2123,8,111,1,111,1,111,3,111,2127,8,111,1,
	111,3,111,2130,8,111,1,111,1,111,1,111,1,111,5,111,2136,8,111,10,111,12,
	111,2139,9,111,1,112,1,112,1,112,3,112,2144,8,112,1,112,1,112,1,112,3,112,
	2149,8,112,1,112,3,112,2152,8,112,1,112,1,112,3,112,2156,8,112,1,112,1,
	112,3,112,2160,8,112,1,112,1,112,3,112,2164,8,112,1,112,3,112,2167,8,112,
	1,112,1,112,1,112,1,112,5,112,2173,8,112,10,112,12,112,2176,9,112,1,113,
	1,113,3,113,2180,8,113,1,114,3,114,2183,8,114,1,114,1,114,1,114,3,114,2188,
	8,114,1,114,1,114,3,114,2192,8,114,1,114,3,114,2195,8,114,1,114,3,114,2198,
	8,114,1,114,1,114,1,114,1,114,5,114,2204,8,114,10,114,12,114,2207,9,114,
	1,115,1,115,1,115,3,115,2212,8,115,1,115,3,115,2215,8,115,1,115,1,115,1,
	115,1,115,5,115,2221,8,115,10,115,12,115,2224,9,115,1,116,1,116,1,116,1,
	116,3,116,2230,8,116,1,117,1,117,3,117,2234,8,117,1,117,3,117,2237,8,117,
	1,117,3,117,2240,8,117,1,117,1,117,1,117,1,117,5,117,2246,8,117,10,117,
	12,117,2249,9,117,1,118,1,118,3,118,2253,8,118,1,118,3,118,2256,8,118,1,
	118,3,118,2259,8,118,1,118,1,118,3,118,2263,8,118,1,118,1,118,3,118,2267,
	8,118,3,118,2269,8,118,1,118,1,118,3,118,2273,8,118,1,118,3,118,2276,8,
	118,1,118,1,118,1,118,1,118,5,118,2282,8,118,10,118,12,118,2285,9,118,1,
	119,1,119,3,119,2289,8,119,1,119,4,119,2292,8,119,11,119,12,119,2293,1,
	119,3,119,2297,8,119,1,119,3,119,2300,8,119,1,119,1,119,1,119,1,119,5,119,
	2306,8,119,10,119,12,119,2309,9,119,1,120,3,120,2312,8,120,1,120,1,120,
	3,120,2316,8,120,1,120,1,120,3,120,2320,8,120,1,121,1,121,1,122,3,122,2325,
	8,122,1,122,3,122,2328,8,122,1,122,1,122,3,122,2332,8,122,5,122,2334,8,
	122,10,122,12,122,2337,9,122,1,122,1,122,3,122,2341,8,122,1,122,1,122,3,
	122,2345,8,122,1,122,3,122,2348,8,122,5,122,2350,8,122,10,122,12,122,2353,
	9,122,1,123,3,123,2356,8,123,1,123,1,123,3,123,2360,8,123,1,123,3,123,2363,
	8,123,1,123,1,123,1,124,1,124,1,124,3,124,2370,8,124,1,125,1,125,3,125,
	2374,8,125,1,125,1,125,3,125,2378,8,125,1,125,1,125,3,125,2382,8,125,1,
	125,5,125,2385,8,125,10,125,12,125,2388,9,125,3,125,2390,8,125,1,125,3,
	125,2393,8,125,1,125,1,125,1,126,1,126,3,126,2399,8,126,1,126,1,126,3,126,
	2403,8,126,1,126,1,126,3,126,2407,8,126,1,126,1,126,3,126,2411,8,126,1,
	126,3,126,2414,8,126,1,126,1,126,3,126,2418,8,126,1,126,3,126,2421,8,126,
	1,126,3,126,2424,8,126,1,126,3,126,2427,8,126,1,126,3,126,2430,8,126,1,
	126,3,126,2433,8,126,1,127,1,127,3,127,2437,8,127,1,127,1,127,1,128,1,128,
	3,128,2443,8,128,1,128,1,128,3,128,2447,8,128,1,128,5,128,2450,8,128,10,
	128,12,128,2453,9,128,1,129,1,129,1,129,1,129,1,129,3,129,2460,8,129,1,
	129,3,129,2463,8,129,1,129,1,129,3,129,2467,8,129,1,130,1,130,4,130,2471,
	8,130,11,130,12,130,2472,1,131,1,131,3,131,2477,8,131,1,131,1,131,3,131,
	2481,8,131,1,131,1,131,3,131,2485,8,131,1,131,3,131,2488,8,131,1,132,1,
	132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,3,132,2500,8,132,1,
	132,1,132,3,132,2504,8,132,1,132,3,132,2507,8,132,1,132,3,132,2510,8,132,
	1,133,1,133,1,133,5,133,2515,8,133,10,133,12,133,2518,9,133,1,133,1,133,
	1,133,4,133,2523,8,133,11,133,12,133,2524,3,133,2527,8,133,1,134,1,134,
	1,135,1,135,1,135,5,135,2534,8,135,10,135,12,135,2537,9,135,1,136,1,136,
	3,136,2541,8,136,1,136,1,136,3,136,2545,8,136,1,137,1,137,3,137,2549,8,
	137,1,137,1,137,3,137,2553,8,137,1,137,3,137,2556,8,137,1,138,1,138,1,138,
	1,139,1,139,1,140,1,140,3,140,2565,8,140,1,140,3,140,2568,8,140,1,140,1,
	140,3,140,2572,8,140,1,140,3,140,2575,8,140,1,141,1,141,1,142,1,142,1,143,
	1,143,1,144,1,144,1,145,1,145,1,146,3,146,2588,8,146,1,146,1,146,1,146,
	3,146,2593,8,146,1,146,3,146,2596,8,146,1,147,1,147,3,147,2600,8,147,1,
	147,1,147,3,147,2604,8,147,5,147,2606,8,147,10,147,12,147,2609,9,147,1,
	147,1,830,1,202,148,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
	38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,
	86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,
	126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,
	162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,
	198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,
	234,236,238,240,242,244,246,248,250,252,254,256,258,260,262,264,266,268,
	270,272,274,276,278,280,282,284,286,288,290,292,294,0,22,3,0,19,19,32,32,
	167,167,1,0,35,46,2,0,176,176,180,180,1,0,68,72,3,0,189,189,196,196,200,
	200,1,0,209,210,1,0,119,120,5,0,15,15,19,19,86,86,128,128,139,139,2,0,142,
	143,184,184,2,0,99,101,158,158,1,0,1,2,2,0,160,160,166,166,2,0,188,188,
	197,197,2,0,195,195,199,199,5,0,87,87,97,97,189,192,194,194,198,198,1,0,
	4,5,2,0,21,22,129,129,1,0,21,22,4,0,73,73,116,117,171,171,206,212,3,0,3,
	3,5,8,186,186,4,0,75,75,79,79,132,132,137,137,9,0,9,53,62,67,73,97,102,
	102,108,118,121,122,127,132,137,142,144,185,3025,0,296,1,0,0,0,2,300,1,
	0,0,0,4,356,1,0,0,0,6,363,1,0,0,0,8,383,1,0,0,0,10,408,1,0,0,0,12,412,1,
	0,0,0,14,439,1,0,0,0,16,452,1,0,0,0,18,456,1,0,0,0,20,458,1,0,0,0,22,483,
	1,0,0,0,24,485,1,0,0,0,26,509,1,0,0,0,28,588,1,0,0,0,30,590,1,0,0,0,32,
	603,1,0,0,0,34,605,1,0,0,0,36,609,1,0,0,0,38,613,1,0,0,0,40,634,1,0,0,0,
	42,652,1,0,0,0,44,669,1,0,0,0,46,682,1,0,0,0,48,722,1,0,0,0,50,738,1,0,
	0,0,52,786,1,0,0,0,54,788,1,0,0,0,56,793,1,0,0,0,58,807,1,0,0,0,60,820,
	1,0,0,0,62,833,1,0,0,0,64,840,1,0,0,0,66,850,1,0,0,0,68,852,1,0,0,0,70,
	864,1,0,0,0,72,885,1,0,0,0,74,925,1,0,0,0,76,957,1,0,0,0,78,979,1,0,0,0,
	80,983,1,0,0,0,82,1012,1,0,0,0,84,1014,1,0,0,0,86,1023,1,0,0,0,88,1025,
	1,0,0,0,90,1034,1,0,0,0,92,1039,1,0,0,0,94,1043,1,0,0,0,96,1058,1,0,0,0,
	98,1064,1,0,0,0,100,1081,1,0,0,0,102,1093,1,0,0,0,104,1106,1,0,0,0,106,
	1110,1,0,0,0,108,1129,1,0,0,0,110,1141,1,0,0,0,112,1155,1,0,0,0,114,1167,
	1,0,0,0,116,1183,1,0,0,0,118,1199,1,0,0,0,120,1209,1,0,0,0,122,1223,1,0,
	0,0,124,1227,1,0,0,0,126,1235,1,0,0,0,128,1245,1,0,0,0,130,1265,1,0,0,0,
	132,1285,1,0,0,0,134,1351,1,0,0,0,136,1370,1,0,0,0,138,1372,1,0,0,0,140,
	1388,1,0,0,0,142,1419,1,0,0,0,144,1443,1,0,0,0,146,1464,1,0,0,0,148,1486,
	1,0,0,0,150,1505,1,0,0,0,152,1510,1,0,0,0,154,1530,1,0,0,0,156,1547,1,0,
	0,0,158,1549,1,0,0,0,160,1557,1,0,0,0,162,1559,1,0,0,0,164,1563,1,0,0,0,
	166,1575,1,0,0,0,168,1587,1,0,0,0,170,1615,1,0,0,0,172,1627,1,0,0,0,174,
	1658,1,0,0,0,176,1660,1,0,0,0,178,1682,1,0,0,0,180,1684,1,0,0,0,182,1697,
	1,0,0,0,184,1709,1,0,0,0,186,1721,1,0,0,0,188,1726,1,0,0,0,190,1749,1,0,
	0,0,192,1762,1,0,0,0,194,1776,1,0,0,0,196,1799,1,0,0,0,198,1808,1,0,0,0,
	200,1812,1,0,0,0,202,1891,1,0,0,0,204,2000,1,0,0,0,206,2009,1,0,0,0,208,
	2023,1,0,0,0,210,2050,1,0,0,0,212,2059,1,0,0,0,214,2071,1,0,0,0,216,2085,
	1,0,0,0,218,2099,1,0,0,0,220,2105,1,0,0,0,222,2107,1,0,0,0,224,2140,1,0,
	0,0,226,2179,1,0,0,0,228,2182,1,0,0,0,230,2208,1,0,0,0,232,2229,1,0,0,0,
	234,2231,1,0,0,0,236,2252,1,0,0,0,238,2288,1,0,0,0,240,2311,1,0,0,0,242,
	2321,1,0,0,0,244,2335,1,0,0,0,246,2355,1,0,0,0,248,2366,1,0,0,0,250,2371,
	1,0,0,0,252,2398,1,0,0,0,254,2434,1,0,0,0,256,2440,1,0,0,0,258,2459,1,0,
	0,0,260,2470,1,0,0,0,262,2474,1,0,0,0,264,2509,1,0,0,0,266,2526,1,0,0,0,
	268,2528,1,0,0,0,270,2530,1,0,0,0,272,2538,1,0,0,0,274,2546,1,0,0,0,276,
	2557,1,0,0,0,278,2560,1,0,0,0,280,2564,1,0,0,0,282,2576,1,0,0,0,284,2578,
	1,0,0,0,286,2580,1,0,0,0,288,2582,1,0,0,0,290,2584,1,0,0,0,292,2587,1,0,
	0,0,294,2607,1,0,0,0,296,297,3,2,1,0,297,298,5,0,0,1,298,1,1,0,0,0,299,
	301,5,220,0,0,300,299,1,0,0,0,300,301,1,0,0,0,301,305,1,0,0,0,302,304,3,
	292,146,0,303,302,1,0,0,0,304,307,1,0,0,0,305,303,1,0,0,0,305,306,1,0,0,
	0,306,315,1,0,0,0,307,305,1,0,0,0,308,312,3,4,2,0,309,311,3,292,146,0,310,
	309,1,0,0,0,311,314,1,0,0,0,312,310,1,0,0,0,312,313,1,0,0,0,313,316,1,0,
	0,0,314,312,1,0,0,0,315,308,1,0,0,0,315,316,1,0,0,0,316,318,1,0,0,0,317,
	319,3,6,3,0,318,317,1,0,0,0,318,319,1,0,0,0,319,323,1,0,0,0,320,322,3,292,
	146,0,321,320,1,0,0,0,322,325,1,0,0,0,323,321,1,0,0,0,323,324,1,0,0,0,324,
	327,1,0,0,0,325,323,1,0,0,0,326,328,3,10,5,0,327,326,1,0,0,0,327,328,1,
	0,0,0,328,332,1,0,0,0,329,331,3,292,146,0,330,329,1,0,0,0,331,334,1,0,0,
	0,332,330,1,0,0,0,332,333,1,0,0,0,333,336,1,0,0,0,334,332,1,0,0,0,335,337,
	3,12,6,0,336,335,1,0,0,0,336,337,1,0,0,0,337,341,1,0,0,0,338,340,3,292,
	146,0,339,338,1,0,0,0,340,343,1,0,0,0,341,339,1,0,0,0,341,342,1,0,0,0,342,
	345,1,0,0,0,343,341,1,0,0,0,344,346,3,20,10,0,345,344,1,0,0,0,345,346,1,
	0,0,0,346,350,1,0,0,0,347,349,3,292,146,0,348,347,1,0,0,0,349,352,1,0,0,
	0,350,348,1,0,0,0,350,351,1,0,0,0,351,354,1,0,0,0,352,350,1,0,0,0,353,355,
	5,220,0,0,354,353,1,0,0,0,354,355,1,0,0,0,355,3,1,0,0,0,356,357,5,178,0,
	0,357,358,5,220,0,0,358,361,5,211,0,0,359,360,5,220,0,0,360,362,5,28,0,
	0,361,359,1,0,0,0,361,362,1,0,0,0,362,5,1,0,0,0,363,368,5,17,0,0,364,365,
	5,220,0,0,365,366,5,205,0,0,366,367,5,220,0,0,367,369,3,260,130,0,368,364,
	1,0,0,0,368,369,1,0,0,0,369,373,1,0,0,0,370,372,3,292,146,0,371,370,1,0,
	0,0,372,375,1,0,0,0,373,371,1,0,0,0,373,374,1,0,0,0,374,377,1,0,0,0,375,
	373,1,0,0,0,376,378,3,8,4,0,377,376,1,0,0,0,378,379,1,0,0,0,379,377,1,0,
	0,0,379,380,1,0,0,0,380,381,1,0,0,0,381,382,5,62,0,0,382,7,1,0,0,0,383,
	385,3,260,130,0,384,386,5,220,0,0,385,384,1,0,0,0,385,386,1,0,0,0,386,387,
	1,0,0,0,387,389,5,189,0,0,388,390,5,220,0,0,389,388,1,0,0,0,389,390,1,0,
	0,0,390,391,1,0,0,0,391,394,3,278,139,0,392,393,5,218,0,0,393,395,3,278,
	139,0,394,392,1,0,0,0,394,395,1,0,0,0,395,399,1,0,0,0,396,398,3,292,146,
	0,397,396,1,0,0,0,398,401,1,0,0,0,399,397,1,0,0,0,399,400,1,0,0,0,400,9,
	1,0,0,0,401,399,1,0,0,0,402,404,3,24,12,0,403,405,3,292,146,0,404,403,1,
	0,0,0,405,406,1,0,0,0,406,404,1,0,0,0,406,407,1,0,0,0,407,409,1,0,0,0,408,
	402,1,0,0,0,409,410,1,0,0,0,410,408,1,0,0,0,410,411,1,0,0,0,411,11,1,0,
	0,0,412,422,3,16,8,0,413,415,3,292,146,0,414,413,1,0,0,0,415,416,1,0,0,
	0,416,414,1,0,0,0,416,417,1,0,0,0,417,418,1,0,0,0,418,419,3,16,8,0,419,
	421,1,0,0,0,420,414,1,0,0,0,421,424,1,0,0,0,422,420,1,0,0,0,422,423,1,0,
	0,0,423,428,1,0,0,0,424,422,1,0,0,0,425,427,3,292,146,0,426,425,1,0,0,0,
	427,430,1,0,0,0,428,426,1,0,0,0,428,429,1,0,0,0,429,13,1,0,0,0,430,428,
	1,0,0,0,431,432,5,123,0,0,432,433,5,220,0,0,433,440,5,209,0,0,434,435,5,
	125,0,0,435,436,5,220,0,0,436,440,7,0,0,0,437,440,5,124,0,0,438,440,5,126,
	0,0,439,431,1,0,0,0,439,434,1,0,0,0,439,437,1,0,0,0,439,438,1,0,0,0,440,
	15,1,0,0,0,441,453,3,290,145,0,442,453,3,46,23,0,443,453,3,56,28,0,444,
	453,3,64,32,0,445,453,3,40,20,0,446,453,3,92,46,0,447,453,3,204,102,0,448,
	453,3,14,7,0,449,453,3,192,96,0,450,453,3,48,24,0,451,453,3,18,9,0,452,
	441,1,0,0,0,452,442,1,0,0,0,452,443,1,0,0,0,452,444,1,0,0,0,452,445,1,0,
	0,0,452,446,1,0,0,0,452,447,1,0,0,0,452,448,1,0,0,0,452,449,1,0,0,0,452,
	450,1,0,0,0,452,451,1,0,0,0,453,17,1,0,0,0,454,457,3,110,55,0,455,457,3,
	112,56,0,456,454,1,0,0,0,456,455,1,0,0,0,457,19,1,0,0,0,458,468,3,22,11,
	0,459,461,3,292,146,0,460,459,1,0,0,0,461,462,1,0,0,0,462,460,1,0,0,0,462,
	463,1,0,0,0,463,464,1,0,0,0,464,465,3,22,11,0,465,467,1,0,0,0,466,460,1,
	0,0,0,467,470,1,0,0,0,468,466,1,0,0,0,468,469,1,0,0,0,469,474,1,0,0,0,470,
	468,1,0,0,0,471,473,3,292,146,0,472,471,1,0,0,0,473,476,1,0,0,0,474,472,
	1,0,0,0,474,475,1,0,0,0,475,21,1,0,0,0,476,474,1,0,0,0,477,484,3,74,37,
	0,478,484,3,140,70,0,479,484,3,142,71,0,480,484,3,144,72,0,481,484,3,188,
	94,0,482,484,3,18,9,0,483,477,1,0,0,0,483,478,1,0,0,0,483,479,1,0,0,0,483,
	480,1,0,0,0,483,481,1,0,0,0,483,482,1,0,0,0,484,23,1,0,0,0,485,486,5,13,
	0,0,486,487,5,220,0,0,487,489,3,232,116,0,488,490,5,220,0,0,489,488,1,0,
	0,0,489,490,1,0,0,0,490,491,1,0,0,0,491,493,5,189,0,0,492,494,5,220,0,0,
	493,492,1,0,0,0,493,494,1,0,0,0,494,495,1,0,0,0,495,506,3,278,139,0,496,
	498,5,220,0,0,497,496,1,0,0,0,497,498,1,0,0,0,498,499,1,0,0,0,499,501,5,
	1,0,0,500,502,5,220,0,0,501,500,1,0,0,0,501,502,1,0,0,0,502,503,1,0,0,0,
	503,505,3,278,139,0,504,497,1,0,0,0,505,508,1,0,0,0,506,504,1,0,0,0,506,
	507,1,0,0,0,507,25,1,0,0,0,508,506,1,0,0,0,509,515,3,28,14,0,510,511,3,
	294,147,0,511,512,3,28,14,0,512,514,1,0,0,0,513,510,1,0,0,0,514,517,1,0,
	0,0,515,513,1,0,0,0,515,516,1,0,0,0,516,518,1,0,0,0,517,515,1,0,0,0,518,
	519,3,294,147,0,519,27,1,0,0,0,520,589,3,276,138,0,521,589,3,30,15,0,522,
	589,3,24,12,0,523,589,3,32,16,0,524,589,3,34,17,0,525,589,3,36,18,0,526,
	589,3,38,19,0,527,589,3,40,20,0,528,589,3,44,22,0,529,589,3,50,25,0,530,
	589,3,52,26,0,531,589,3,54,27,0,532,589,3,60,30,0,533,589,3,62,31,0,534,
	589,3,66,33,0,535,589,3,220,110,0,536,589,3,68,34,0,537,589,3,70,35,0,538,
	589,3,72,36,0,539,589,3,76,38,0,540,589,3,78,39,0,541,589,3,80,40,0,542,
	589,3,82,41,0,543,589,3,92,46,0,544,589,3,94,47,0,545,589,3,96,48,0,546,
	589,3,98,49,0,547,589,3,100,50,0,548,589,3,102,51,0,549,589,3,104,52,0,
	550,589,3,106,53,0,551,589,3,108,54,0,552,589,3,18,9,0,553,589,3,120,60,
	0,554,589,3,122,61,0,555,589,3,124,62,0,556,589,3,126,63,0,557,589,3,128,
	64,0,558,589,3,130,65,0,559,589,3,132,66,0,560,589,3,138,69,0,561,589,3,
	146,73,0,562,589,3,148,74,0,563,589,3,150,75,0,564,589,3,152,76,0,565,589,
	3,156,78,0,566,589,3,158,79,0,567,589,3,160,80,0,568,589,3,162,81,0,569,
	589,3,164,82,0,570,589,3,166,83,0,571,589,3,168,84,0,572,589,3,170,85,0,
	573,589,3,172,86,0,574,589,3,180,90,0,575,589,3,182,91,0,576,589,3,184,
	92,0,577,589,3,186,93,0,578,589,3,190,95,0,579,589,3,198,99,0,580,589,3,
	200,100,0,581,589,3,204,102,0,582,589,3,210,105,0,583,589,3,212,106,0,584,
	589,3,214,107,0,585,589,3,216,108,0,586,589,3,226,113,0,587,589,3,232,116,
	0,588,520,1,0,0,0,588,521,1,0,0,0,588,522,1,0,0,0,588,523,1,0,0,0,588,524,
	1,0,0,0,588,525,1,0,0,0,588,526,1,0,0,0,588,527,1,0,0,0,588,528,1,0,0,0,
	588,529,1,0,0,0,588,530,1,0,0,0,588,531,1,0,0,0,588,532,1,0,0,0,588,533,
	1,0,0,0,588,534,1,0,0,0,588,535,1,0,0,0,588,536,1,0,0,0,588,537,1,0,0,0,
	588,538,1,0,0,0,588,539,1,0,0,0,588,540,1,0,0,0,588,541,1,0,0,0,588,542,
	1,0,0,0,588,543,1,0,0,0,588,544,1,0,0,0,588,545,1,0,0,0,588,546,1,0,0,0,
	588,547,1,0,0,0,588,548,1,0,0,0,588,549,1,0,0,0,588,550,1,0,0,0,588,551,
	1,0,0,0,588,552,1,0,0,0,588,553,1,0,0,0,588,554,1,0,0,0,588,555,1,0,0,0,
	588,556,1,0,0,0,588,557,1,0,0,0,588,558,1,0,0,0,588,559,1,0,0,0,588,560,
	1,0,0,0,588,561,1,0,0,0,588,562,1,0,0,0,588,563,1,0,0,0,588,564,1,0,0,0,
	588,565,1,0,0,0,588,566,1,0,0,0,588,567,1,0,0,0,588,568,1,0,0,0,588,569,
	1,0,0,0,588,570,1,0,0,0,588,571,1,0,0,0,588,572,1,0,0,0,588,573,1,0,0,0,
	588,574,1,0,0,0,588,575,1,0,0,0,588,576,1,0,0,0,588,577,1,0,0,0,588,578,
	1,0,0,0,588,579,1,0,0,0,588,580,1,0,0,0,588,581,1,0,0,0,588,582,1,0,0,0,
	588,583,1,0,0,0,588,584,1,0,0,0,588,585,1,0,0,0,588,586,1,0,0,0,588,587,
	1,0,0,0,589,29,1,0,0,0,590,591,5,14,0,0,591,592,5,220,0,0,592,601,3,202,
	101,0,593,595,5,220,0,0,594,593,1,0,0,0,594,595,1,0,0,0,595,596,1,0,0,0,
	596,598,5,1,0,0,597,599,5,220,0,0,598,597,1,0,0,0,598,599,1,0,0,0,599,600,
	1,0,0,0,600,602,3,202,101,0,601,594,1,0,0,0,601,602,1,0,0,0,602,31,1,0,
	0,0,603,604,5,18,0,0,604,33,1,0,0,0,605,606,5,26,0,0,606,607,5,220,0,0,
	607,608,3,202,101,0,608,35,1,0,0,0,609,610,5,27,0,0,610,611,5,220,0,0,611,
	612,3,202,101,0,612,37,1,0,0,0,613,629,5,29,0,0,614,615,5,220,0,0,615,626,
	3,218,109,0,616,618,5,220,0,0,617,616,1,0,0,0,617,618,1,0,0,0,618,619,1,
	0,0,0,619,621,5,1,0,0,620,622,5,220,0,0,621,620,1,0,0,0,621,622,1,0,0,0,
	622,623,1,0,0,0,623,625,3,218,109,0,624,617,1,0,0,0,625,628,1,0,0,0,626,
	624,1,0,0,0,626,627,1,0,0,0,627,630,1,0,0,0,628,626,1,0,0,0,629,614,1,0,
	0,0,629,630,1,0,0,0,630,39,1,0,0,0,631,632,3,284,142,0,632,633,5,220,0,
	0,633,635,1,0,0,0,634,631,1,0,0,0,634,635,1,0,0,0,635,636,1,0,0,0,636,637,
	5,31,0,0,637,638,5,220,0,0,638,649,3,42,21,0,639,641,5,220,0,0,640,639,
	1,0,0,0,640,641,1,0,0,0,641,642,1,0,0,0,642,644,5,1,0,0,643,645,5,220,0,
	0,644,643,1,0,0,0,644,645,1,0,0,0,645,646,1,0,0,0,646,648,3,42,21,0,647,
	640,1,0,0,0,648,651,1,0,0,0,649,647,1,0,0,0,649,650,1,0,0,0,650,41,1,0,
	0,0,651,649,1,0,0,0,652,654,3,260,130,0,653,655,3,282,141,0,654,653,1,0,
	0,0,654,655,1,0,0,0,655,658,1,0,0,0,656,657,5,220,0,0,657,659,3,262,131,
	0,658,656,1,0,0,0,658,659,1,0,0,0,659,661,1,0,0,0,660,662,5,220,0,0,661,
	660,1,0,0,0,661,662,1,0,0,0,662,663,1,0,0,0,663,665,5,189,0,0,664,666,5,
	220,0,0,665,664,1,0,0,0,665,666,1,0,0,0,666,667,1,0,0,0,667,668,3,202,101,
	0,668,43,1,0,0,0,669,671,5,33,0,0,670,672,5,220,0,0,671,670,1,0,0,0,671,
	672,1,0,0,0,672,673,1,0,0,0,673,675,5,189,0,0,674,676,5,220,0,0,675,674,
	1,0,0,0,675,676,1,0,0,0,676,677,1,0,0,0,677,678,3,202,101,0,678,45,1,0,
	0,0,679,680,3,284,142,0,680,681,5,220,0,0,681,683,1,0,0,0,682,679,1,0,0,
	0,682,683,1,0,0,0,683,684,1,0,0,0,684,685,5,34,0,0,685,688,5,220,0,0,686,
	687,5,136,0,0,687,689,5,220,0,0,688,686,1,0,0,0,688,689,1,0,0,0,689,695,
	1,0,0,0,690,692,5,77,0,0,691,693,3,282,141,0,692,691,1,0,0,0,692,693,1,
	0,0,0,693,696,1,0,0,0,694,696,5,165,0,0,695,690,1,0,0,0,695,694,1,0,0,0,
	696,697,1,0,0,0,697,698,5,220,0,0,698,700,3,260,130,0,699,701,3,282,141,
	0,700,699,1,0,0,0,700,701,1,0,0,0,701,702,1,0,0,0,702,703,5,220,0,0,703,
	704,5,96,0,0,704,705,5,220,0,0,705,710,5,206,0,0,706,707,5,220,0,0,707,
	708,5,11,0,0,708,709,5,220,0,0,709,711,5,206,0,0,710,706,1,0,0,0,710,711,
	1,0,0,0,711,716,1,0,0,0,712,714,5,220,0,0,713,712,1,0,0,0,713,714,1,0,0,
	0,714,715,1,0,0,0,715,717,3,250,125,0,716,713,1,0,0,0,716,717,1,0,0,0,717,
	720,1,0,0,0,718,719,5,220,0,0,719,721,3,262,131,0,720,718,1,0,0,0,720,721,
	1,0,0,0,721,47,1,0,0,0,722,723,7,1,0,0,723,724,5,220,0,0,724,735,3,274,
	137,0,725,727,5,220,0,0,726,725,1,0,0,0,726,727,1,0,0,0,727,728,1,0,0,0,
	728,730,5,1,0,0,729,731,5,220,0,0,730,729,1,0,0,0,730,731,1,0,0,0,731,732,
	1,0,0,0,732,734,3,274,137,0,733,726,1,0,0,0,734,737,1,0,0,0,735,733,1,0,
	0,0,735,736,1,0,0,0,736,49,1,0,0,0,737,735,1,0,0,0,738,739,5,47,0,0,739,
	740,5,220,0,0,740,742,3,202,101,0,741,743,5,220,0,0,742,741,1,0,0,0,742,
	743,1,0,0,0,743,744,1,0,0,0,744,746,5,1,0,0,745,747,5,220,0,0,746,745,1,
	0,0,0,746,747,1,0,0,0,747,748,1,0,0,0,748,757,3,202,101,0,749,751,5,220,
	0,0,750,749,1,0,0,0,750,751,1,0,0,0,751,752,1,0,0,0,752,754,5,1,0,0,753,
	755,5,220,0,0,754,753,1,0,0,0,754,755,1,0,0,0,755,756,1,0,0,0,756,758,3,
	202,101,0,757,750,1,0,0,0,757,758,1,0,0,0,758,51,1,0,0,0,759,760,5,49,0,
	0,760,762,3,294,147,0,761,763,3,26,13,0,762,761,1,0,0,0,762,763,1,0,0,0,
	763,764,1,0,0,0,764,765,5,93,0,0,765,787,1,0,0,0,766,767,5,49,0,0,767,768,
	5,220,0,0,768,769,7,2,0,0,769,770,5,220,0,0,770,771,3,202,101,0,771,773,
	3,294,147,0,772,774,3,26,13,0,773,772,1,0,0,0,773,774,1,0,0,0,774,775,1,
	0,0,0,775,776,5,93,0,0,776,787,1,0,0,0,777,778,5,49,0,0,778,779,3,294,147,
	0,779,780,3,26,13,0,780,781,5,93,0,0,781,782,5,220,0,0,782,783,7,2,0,0,
	783,784,5,220,0,0,784,785,3,202,101,0,785,787,1,0,0,0,786,759,1,0,0,0,786,
	766,1,0,0,0,786,777,1,0,0,0,787,53,1,0,0,0,788,789,5,62,0,0,789,55,1,0,
	0,0,790,791,3,284,142,0,791,792,5,220,0,0,792,794,1,0,0,0,793,790,1,0,0,
	0,793,794,1,0,0,0,794,795,1,0,0,0,795,796,5,63,0,0,796,797,5,220,0,0,797,
	798,3,260,130,0,798,802,3,294,147,0,799,801,3,58,29,0,800,799,1,0,0,0,801,
	804,1,0,0,0,802,800,1,0,0,0,802,803,1,0,0,0,803,805,1,0,0,0,804,802,1,0,
	0,0,805,806,5,54,0,0,806,57,1,0,0,0,807,816,3,260,130,0,808,810,5,220,0,
	0,809,808,1,0,0,0,809,810,1,0,0,0,810,811,1,0,0,0,811,813,5,189,0,0,812,
	814,5,220,0,0,813,812,1,0,0,0,813,814,1,0,0,0,814,815,1,0,0,0,815,817,3,
	202,101,0,816,809,1,0,0,0,816,817,1,0,0,0,817,818,1,0,0,0,818,819,3,294,
	147,0,819,59,1,0,0,0,820,821,5,65,0,0,821,822,5,220,0,0,822,830,3,202,101,
	0,823,825,5,1,0,0,824,826,5,220,0,0,825,824,1,0,0,0,825,826,1,0,0,0,826,
	827,1,0,0,0,827,829,3,202,101,0,828,823,1,0,0,0,829,832,1,0,0,0,830,831,
	1,0,0,0,830,828,1,0,0,0,831,61,1,0,0,0,832,830,1,0,0,0,833,834,5,66,0,0,
	834,835,5,220,0,0,835,836,3,202,101,0,836,63,1,0,0,0,837,838,3,284,142,
	0,838,839,5,220,0,0,839,841,1,0,0,0,840,837,1,0,0,0,840,841,1,0,0,0,841,
	842,1,0,0,0,842,843,5,67,0,0,843,844,5,220,0,0,844,846,3,260,130,0,845,
	847,5,220,0,0,846,845,1,0,0,0,846,847,1,0,0,0,847,848,1,0,0,0,848,849,3,
	250,125,0,849,65,1,0,0,0,850,851,7,3,0,0,851,67,1,0,0,0,852,853,5,74,0,
	0,853,854,5,220,0,0,854,856,3,202,101,0,855,857,5,220,0,0,856,855,1,0,0,
	0,856,857,1,0,0,0,857,858,1,0,0,0,858,860,5,1,0,0,859,861,5,220,0,0,860,
	859,1,0,0,0,860,861,1,0,0,0,861,862,1,0,0,0,862,863,3,202,101,0,863,69,
	1,0,0,0,864,865,5,76,0,0,865,866,5,220,0,0,866,867,5,51,0,0,867,868,5,220,
	0,0,868,870,3,260,130,0,869,871,3,282,141,0,870,869,1,0,0,0,870,871,1,0,
	0,0,871,872,1,0,0,0,872,873,5,220,0,0,873,874,5,85,0,0,874,875,5,220,0,
	0,875,876,3,202,101,0,876,878,3,294,147,0,877,879,3,26,13,0,878,877,1,0,
	0,0,878,879,1,0,0,0,879,880,1,0,0,0,880,883,5,113,0,0,881,882,5,220,0,0,
	882,884,3,260,130,0,883,881,1,0,0,0,883,884,1,0,0,0,884,71,1,0,0,0,885,
	886,5,76,0,0,886,887,5,220,0,0,887,889,3,260,130,0,888,890,3,282,141,0,
	889,888,1,0,0,0,889,890,1,0,0,0,890,893,1,0,0,0,891,892,5,220,0,0,892,894,
	3,262,131,0,893,891,1,0,0,0,893,894,1,0,0,0,894,896,1,0,0,0,895,897,5,220,
	0,0,896,895,1,0,0,0,896,897,1,0,0,0,897,898,1,0,0,0,898,900,5,189,0,0,899,
	901,5,220,0,0,900,899,1,0,0,0,900,901,1,0,0,0,901,902,1,0,0,0,902,903,3,
	202,101,0,903,904,5,220,0,0,904,905,5,170,0,0,905,906,5,220,0,0,906,911,
	3,202,101,0,907,908,5,220,0,0,908,909,5,162,0,0,909,910,5,220,0,0,910,912,
	3,202,101,0,911,907,1,0,0,0,911,912,1,0,0,0,912,913,1,0,0,0,913,915,3,294,
	147,0,914,916,3,26,13,0,915,914,1,0,0,0,915,916,1,0,0,0,916,917,1,0,0,0,
	917,920,5,113,0,0,918,919,5,220,0,0,919,921,3,260,130,0,920,918,1,0,0,0,
	920,921,1,0,0,0,921,73,1,0,0,0,922,923,3,284,142,0,923,924,5,220,0,0,924,
	926,1,0,0,0,925,922,1,0,0,0,925,926,1,0,0,0,926,929,1,0,0,0,927,928,5,161,
	0,0,928,930,5,220,0,0,929,927,1,0,0,0,929,930,1,0,0,0,930,931,1,0,0,0,931,
	933,5,77,0,0,932,934,5,220,0,0,933,932,1,0,0,0,933,934,1,0,0,0,934,935,
	1,0,0,0,935,937,3,260,130,0,936,938,3,282,141,0,937,936,1,0,0,0,937,938,
	1,0,0,0,938,943,1,0,0,0,939,941,5,220,0,0,940,939,1,0,0,0,940,941,1,0,0,
	0,941,942,1,0,0,0,942,944,3,250,125,0,943,940,1,0,0,0,943,944,1,0,0,0,944,
	949,1,0,0,0,945,947,5,220,0,0,946,945,1,0,0,0,946,947,1,0,0,0,947,948,1,
	0,0,0,948,950,3,262,131,0,949,946,1,0,0,0,949,950,1,0,0,0,950,951,1,0,0,
	0,951,953,3,294,147,0,952,954,3,26,13,0,953,952,1,0,0,0,953,954,1,0,0,0,
	954,955,1,0,0,0,955,956,5,55,0,0,956,75,1,0,0,0,957,958,5,78,0,0,958,959,
	5,220,0,0,959,961,3,218,109,0,960,962,5,220,0,0,961,960,1,0,0,0,961,962,
	1,0,0,0,962,963,1,0,0,0,963,965,5,1,0,0,964,966,5,220,0,0,965,964,1,0,0,
	0,965,966,1,0,0,0,966,968,1,0,0,0,967,969,3,202,101,0,968,967,1,0,0,0,968,
	969,1,0,0,0,969,971,1,0,0,0,970,972,5,220,0,0,971,970,1,0,0,0,971,972,1,
	0,0,0,972,973,1,0,0,0,973,975,5,1,0,0,974,976,5,220,0,0,975,974,1,0,0,0,
	975,976,1,0,0,0,976,977,1,0,0,0,977,978,3,202,101,0,978,77,1,0,0,0,979,
	980,5,80,0,0,980,981,5,220,0,0,981,982,3,202,101,0,982,79,1,0,0,0,983,984,
	5,81,0,0,984,985,5,220,0,0,985,986,3,202,101,0,986,81,1,0,0,0,987,988,5,
	82,0,0,988,989,5,220,0,0,989,990,3,86,43,0,990,991,5,220,0,0,991,992,5,
	168,0,0,992,993,5,220,0,0,993,998,3,28,14,0,994,995,5,220,0,0,995,996,5,
	52,0,0,996,997,5,220,0,0,997,999,3,28,14,0,998,994,1,0,0,0,998,999,1,0,
	0,0,999,1013,1,0,0,0,1000,1004,3,84,42,0,1001,1003,3,88,44,0,1002,1001,
	1,0,0,0,1003,1006,1,0,0,0,1004,1002,1,0,0,0,1004,1005,1,0,0,0,1005,1008,
	1,0,0,0,1006,1004,1,0,0,0,1007,1009,3,90,45,0,1008,1007,1,0,0,0,1008,1009,
	1,0,0,0,1009,1010,1,0,0,0,1010,1011,5,56,0,0,1011,1013,1,0,0,0,1012,987,
	1,0,0,0,1012,1000,1,0,0,0,1013,83,1,0,0,0,1014,1015,5,82,0,0,1015,1016,
	5,220,0,0,1016,1017,3,86,43,0,1017,1018,5,220,0,0,1018,1019,5,168,0,0,1019,
	1021,3,294,147,0,1020,1022,3,26,13,0,1021,1020,1,0,0,0,1021,1022,1,0,0,
	0,1022,85,1,0,0,0,1023,1024,3,202,101,0,1024,87,1,0,0,0,1025,1026,5,53,
	0,0,1026,1027,5,220,0,0,1027,1028,3,86,43,0,1028,1029,5,220,0,0,1029,1030,
	5,168,0,0,1030,1032,3,294,147,0,1031,1033,3,26,13,0,1032,1031,1,0,0,0,1032,
	1033,1,0,0,0,1033,89,1,0,0,0,1034,1035,5,52,0,0,1035,1037,3,294,147,0,1036,
	1038,3,26,13,0,1037,1036,1,0,0,0,1037,1038,1,0,0,0,1038,91,1,0,0,0,1039,
	1040,5,84,0,0,1040,1041,5,220,0,0,1041,1042,3,260,130,0,1042,93,1,0,0,0,
	1043,1044,5,86,0,0,1044,1045,5,220,0,0,1045,1054,3,218,109,0,1046,1048,
	5,220,0,0,1047,1046,1,0,0,0,1047,1048,1,0,0,0,1048,1049,1,0,0,0,1049,1051,
	5,1,0,0,1050,1052,5,220,0,0,1051,1050,1,0,0,0,1051,1052,1,0,0,0,1052,1053,
	1,0,0,0,1053,1055,3,202,101,0,1054,1047,1,0,0,0,1055,1056,1,0,0,0,1056,
	1054,1,0,0,0,1056,1057,1,0,0,0,1057,95,1,0,0,0,1058,1059,5,89,0,0,1059,
	1060,5,220,0,0,1060,1061,3,202,101,0,1061,97,1,0,0,0,1062,1063,5,95,0,0,
	1063,1065,5,220,0,0,1064,1062,1,0,0,0,1064,1065,1,0,0,0,1065,1066,1,0,0,
	0,1066,1068,3,232,116,0,1067,1069,5,220,0,0,1068,1067,1,0,0,0,1068,1069,
	1,0,0,0,1069,1070,1,0,0,0,1070,1072,7,4,0,0,1071,1073,5,220,0,0,1072,1071,
	1,0,0,0,1072,1073,1,0,0,0,1073,1075,1,0,0,0,1074,1076,3,282,141,0,1075,
	1074,1,0,0,0,1075,1076,1,0,0,0,1076,1077,1,0,0,0,1077,1079,3,202,101,0,
	1078,1080,3,282,141,0,1079,1078,1,0,0,0,1079,1080,1,0,0,0,1080,99,1,0,0,
	0,1081,1082,5,98,0,0,1082,1083,5,220,0,0,1083,1085,3,218,109,0,1084,1086,
	5,220,0,0,1085,1084,1,0,0,0,1085,1086,1,0,0,0,1086,1087,1,0,0,0,1087,1089,
	5,1,0,0,1088,1090,5,220,0,0,1089,1088,1,0,0,0,1089,1090,1,0,0,0,1090,1091,
	1,0,0,0,1091,1092,3,202,101,0,1092,101,1,0,0,0,1093,1095,7,5,0,0,1094,1096,
	5,214,0,0,1095,1094,1,0,0,0,1095,1096,1,0,0,0,1096,1098,1,0,0,0,1097,1099,
	5,218,0,0,1098,1097,1,0,0,0,1098,1099,1,0,0,0,1099,1101,1,0,0,0,1100,1102,
	5,214,0,0,1101,1100,1,0,0,0,1101,1102,1,0,0,0,1102,1104,1,0,0,0,1103,1105,
	5,220,0,0,1104,1103,1,0,0,0,1104,1105,1,0,0,0,1105,103,1,0,0,0,1106,1107,
	5,90,0,0,1107,1108,5,220,0,0,1108,1109,3,202,101,0,1109,105,1,0,0,0,1110,
	1111,5,91,0,0,1111,1112,5,220,0,0,1112,1127,3,202,101,0,1113,1115,5,220,
	0,0,1114,1113,1,0,0,0,1114,1115,1,0,0,0,1115,1116,1,0,0,0,1116,1118,5,1,
	0,0,1117,1119,5,220,0,0,1118,1117,1,0,0,0,1118,1119,1,0,0,0,1119,1120,1,
	0,0,0,1120,1125,3,202,101,0,1121,1122,5,220,0,0,1122,1123,5,170,0,0,1123,
	1124,5,220,0,0,1124,1126,3,202,101,0,1125,1121,1,0,0,0,1125,1126,1,0,0,
	0,1126,1128,1,0,0,0,1127,1114,1,0,0,0,1127,1128,1,0,0,0,1128,107,1,0,0,
	0,1129,1130,5,102,0,0,1130,1131,5,220,0,0,1131,1133,3,232,116,0,1132,1134,
	5,220,0,0,1133,1132,1,0,0,0,1133,1134,1,0,0,0,1134,1135,1,0,0,0,1135,1137,
	5,189,0,0,1136,1138,5,220,0,0,1137,1136,1,0,0,0,1137,1138,1,0,0,0,1138,
	1139,1,0,0,0,1139,1140,3,202,101,0,1140,109,1,0,0,0,1141,1143,5,103,0,0,
	1142,1144,5,220,0,0,1143,1142,1,0,0,0,1143,1144,1,0,0,0,1144,1145,1,0,0,
	0,1145,1147,3,260,130,0,1146,1148,5,220,0,0,1147,1146,1,0,0,0,1147,1148,
	1,0,0,0,1148,1149,1,0,0,0,1149,1151,5,189,0,0,1150,1152,5,220,0,0,1151,
	1150,1,0,0,0,1151,1152,1,0,0,0,1152,1153,1,0,0,0,1153,1154,3,202,101,0,
	1154,111,1,0,0,0,1155,1159,3,114,57,0,1156,1158,3,116,58,0,1157,1156,1,
	0,0,0,1158,1161,1,0,0,0,1159,1157,1,0,0,0,1159,1160,1,0,0,0,1160,1163,1,
	0,0,0,1161,1159,1,0,0,0,1162,1164,3,118,59,0,1163,1162,1,0,0,0,1163,1164,
	1,0,0,0,1164,1165,1,0,0,0,1165,1166,5,107,0,0,1166,113,1,0,0,0,1167,1169,
	5,104,0,0,1168,1170,5,220,0,0,1169,1168,1,0,0,0,1169,1170,1,0,0,0,1170,
	1171,1,0,0,0,1171,1172,3,86,43,0,1172,1173,5,220,0,0,1173,1174,5,168,0,
	0,1174,1180,3,294,147,0,1175,1179,3,12,6,0,1176,1179,3,20,10,0,1177,1179,
	3,26,13,0,1178,1175,1,0,0,0,1178,1176,1,0,0,0,1178,1177,1,0,0,0,1179,1182,
	1,0,0,0,1180,1178,1,0,0,0,1180,1181,1,0,0,0,1181,115,1,0,0,0,1182,1180,
	1,0,0,0,1183,1185,5,105,0,0,1184,1186,5,220,0,0,1185,1184,1,0,0,0,1185,
	1186,1,0,0,0,1186,1187,1,0,0,0,1187,1188,3,86,43,0,1188,1189,5,220,0,0,
	1189,1190,5,168,0,0,1190,1196,3,294,147,0,1191,1195,3,12,6,0,1192,1195,
	3,20,10,0,1193,1195,3,26,13,0,1194,1191,1,0,0,0,1194,1192,1,0,0,0,1194,
	1193,1,0,0,0,1195,1198,1,0,0,0,1196,1194,1,0,0,0,1196,1197,1,0,0,0,1197,
	117,1,0,0,0,1198,1196,1,0,0,0,1199,1200,5,106,0,0,1200,1206,3,294,147,0,
	1201,1205,3,12,6,0,1202,1205,3,20,10,0,1203,1205,3,26,13,0,1204,1201,1,
	0,0,0,1204,1202,1,0,0,0,1204,1203,1,0,0,0,1205,1208,1,0,0,0,1206,1204,1,
	0,0,0,1206,1207,1,0,0,0,1207,119,1,0,0,0,1208,1206,1,0,0,0,1209,1211,5,
	109,0,0,1210,1212,5,220,0,0,1211,1210,1,0,0,0,1211,1212,1,0,0,0,1212,1213,
	1,0,0,0,1213,1215,5,193,0,0,1214,1216,5,220,0,0,1215,1214,1,0,0,0,1215,
	1216,1,0,0,0,1216,1217,1,0,0,0,1217,1219,3,244,122,0,1218,1220,5,220,0,
	0,1219,1218,1,0,0,0,1219,1220,1,0,0,0,1220,1221,1,0,0,0,1221,1222,5,202,
	0,0,1222,121,1,0,0,0,1223,1224,5,110,0,0,1224,1225,5,220,0,0,1225,1226,
	3,202,101,0,1226,123,1,0,0,0,1227,1228,5,112,0,0,1228,1229,5,220,0,0,1229,
	1230,3,202,101,0,1230,1231,5,220,0,0,1231,1232,5,16,0,0,1232,1233,5,220,
	0,0,1233,1234,3,202,101,0,1234,125,1,0,0,0,1235,1236,7,6,0,0,1236,1243,
	5,220,0,0,1237,1238,5,81,0,0,1238,1239,5,220,0,0,1239,1244,3,202,101,0,
	1240,1241,5,147,0,0,1241,1242,5,220,0,0,1242,1244,5,113,0,0,1243,1237,1,
	0,0,0,1243,1240,1,0,0,0,1244,127,1,0,0,0,1245,1246,5,118,0,0,1246,1247,
	5,220,0,0,1247,1248,3,202,101,0,1248,1249,5,220,0,0,1249,1250,5,81,0,0,
	1250,1251,5,220,0,0,1251,1262,3,202,101,0,1252,1254,5,220,0,0,1253,1252,
	1,0,0,0,1253,1254,1,0,0,0,1254,1255,1,0,0,0,1255,1257,5,1,0,0,1256,1258,
	5,220,0,0,1257,1256,1,0,0,0,1257,1258,1,0,0,0,1258,1259,1,0,0,0,1259,1261,
	3,202,101,0,1260,1253,1,0,0,0,1261,1264,1,0,0,0,1262,1260,1,0,0,0,1262,
	1263,1,0,0,0,1263,129,1,0,0,0,1264,1262,1,0,0,0,1265,1266,5,118,0,0,1266,
	1267,5,220,0,0,1267,1268,3,202,101,0,1268,1269,5,220,0,0,1269,1270,5,80,
	0,0,1270,1271,5,220,0,0,1271,1282,3,202,101,0,1272,1274,5,220,0,0,1273,
	1272,1,0,0,0,1273,1274,1,0,0,0,1274,1275,1,0,0,0,1275,1277,5,1,0,0,1276,
	1278,5,220,0,0,1277,1276,1,0,0,0,1277,1278,1,0,0,0,1278,1279,1,0,0,0,1279,
	1281,3,202,101,0,1280,1273,1,0,0,0,1281,1284,1,0,0,0,1282,1280,1,0,0,0,
	1282,1283,1,0,0,0,1283,131,1,0,0,0,1284,1282,1,0,0,0,1285,1286,5,121,0,
	0,1286,1287,5,220,0,0,1287,1288,3,202,101,0,1288,1289,5,220,0,0,1289,1290,
	5,76,0,0,1290,1291,5,220,0,0,1291,1296,7,7,0,0,1292,1293,5,220,0,0,1293,
	1294,5,9,0,0,1294,1295,5,220,0,0,1295,1297,7,8,0,0,1296,1292,1,0,0,0,1296,
	1297,1,0,0,0,1297,1300,1,0,0,0,1298,1299,5,220,0,0,1299,1301,7,9,0,0,1300,
	1298,1,0,0,0,1300,1301,1,0,0,0,1301,1302,1,0,0,0,1302,1303,5,220,0,0,1303,
	1304,5,16,0,0,1304,1305,5,220,0,0,1305,1316,3,218,109,0,1306,1307,5,220,
	0,0,1307,1309,5,94,0,0,1308,1310,5,220,0,0,1309,1308,1,0,0,0,1309,1310,
	1,0,0,0,1310,1311,1,0,0,0,1311,1313,5,189,0,0,1312,1314,5,220,0,0,1313,
	1312,1,0,0,0,1313,1314,1,0,0,0,1314,1315,1,0,0,0,1315,1317,3,202,101,0,
	1316,1306,1,0,0,0,1316,1317,1,0,0,0,1317,133,1,0,0,0,1318,1331,3,136,68,
	0,1319,1321,5,220,0,0,1320,1319,1,0,0,0,1320,1321,1,0,0,0,1321,1322,1,0,
	0,0,1322,1324,7,10,0,0,1323,1325,5,220,0,0,1324,1323,1,0,0,0,1324,1325,
	1,0,0,0,1325,1327,1,0,0,0,1326,1328,3,136,68,0,1327,1326,1,0,0,0,1327,1328,
	1,0,0,0,1328,1330,1,0,0,0,1329,1320,1,0,0,0,1330,1333,1,0,0,0,1331,1329,
	1,0,0,0,1331,1332,1,0,0,0,1332,1352,1,0,0,0,1333,1331,1,0,0,0,1334,1336,
	3,136,68,0,1335,1334,1,0,0,0,1335,1336,1,0,0,0,1336,1347,1,0,0,0,1337,1339,
	5,220,0,0,1338,1337,1,0,0,0,1338,1339,1,0,0,0,1339,1340,1,0,0,0,1340,1342,
	7,10,0,0,1341,1343,5,220,0,0,1342,1341,1,0,0,0,1342,1343,1,0,0,0,1343,1345,
	1,0,0,0,1344,1346,3,136,68,0,1345,1344,1,0,0,0,1345,1346,1,0,0,0,1346,1348,
	1,0,0,0,1347,1338,1,0,0,0,1348,1349,1,0,0,0,1349,1347,1,0,0,0,1349,1350,
	1,0,0,0,1350,1352,1,0,0,0,1351,1318,1,0,0,0,1351,1335,1,0,0,0,1352,135,
	1,0,0,0,1353,1371,3,202,101,0,1354,1368,7,11,0,0,1355,1357,5,220,0,0,1356,
	1355,1,0,0,0,1356,1357,1,0,0,0,1357,1358,1,0,0,0,1358,1360,5,193,0,0,1359,
	1361,5,220,0,0,1360,1359,1,0,0,0,1360,1361,1,0,0,0,1361,1362,1,0,0,0,1362,
	1364,3,244,122,0,1363,1365,5,220,0,0,1364,1363,1,0,0,0,1364,1365,1,0,0,
	0,1365,1366,1,0,0,0,1366,1367,5,202,0,0,1367,1369,1,0,0,0,1368,1356,1,0,
	0,0,1368,1369,1,0,0,0,1369,1371,1,0,0,0,1370,1353,1,0,0,0,1370,1354,1,0,
	0,0,1371,137,1,0,0,0,1372,1373,5,131,0,0,1373,1374,5,220,0,0,1374,1376,
	3,218,109,0,1375,1377,5,220,0,0,1376,1375,1,0,0,0,1376,1377,1,0,0,0,1377,
	1378,1,0,0,0,1378,1383,5,1,0,0,1379,1381,5,220,0,0,1380,1379,1,0,0,0,1380,
	1381,1,0,0,0,1381,1382,1,0,0,0,1382,1384,3,134,67,0,1383,1380,1,0,0,0,1383,
	1384,1,0,0,0,1384,139,1,0,0,0,1385,1386,3,284,142,0,1386,1387,5,220,0,0,
	1387,1389,1,0,0,0,1388,1385,1,0,0,0,1388,1389,1,0,0,0,1389,1392,1,0,0,0,
	1390,1391,5,161,0,0,1391,1393,5,220,0,0,1392,1390,1,0,0,0,1392,1393,1,0,
	0,0,1393,1394,1,0,0,0,1394,1395,5,133,0,0,1395,1396,5,220,0,0,1396,1398,
	3,260,130,0,1397,1399,3,282,141,0,1398,1397,1,0,0,0,1398,1399,1,0,0,0,1399,
	1404,1,0,0,0,1400,1402,5,220,0,0,1401,1400,1,0,0,0,1401,1402,1,0,0,0,1402,
	1403,1,0,0,0,1403,1405,3,250,125,0,1404,1401,1,0,0,0,1404,1405,1,0,0,0,
	1405,1408,1,0,0,0,1406,1407,5,220,0,0,1407,1409,3,262,131,0,1408,1406,1,
	0,0,0,1408,1409,1,0,0,0,1409,1410,1,0,0,0,1410,1412,3,294,147,0,1411,1413,
	3,26,13,0,1412,1411,1,0,0,0,1412,1413,1,0,0,0,1413,1414,1,0,0,0,1414,1415,
	5,57,0,0,1415,141,1,0,0,0,1416,1417,3,284,142,0,1417,1418,5,220,0,0,1418,
	1420,1,0,0,0,1419,1416,1,0,0,0,1419,1420,1,0,0,0,1420,1423,1,0,0,0,1421,
	1422,5,161,0,0,1422,1424,5,220,0,0,1423,1421,1,0,0,0,1423,1424,1,0,0,0,
	1424,1425,1,0,0,0,1425,1426,5,135,0,0,1426,1427,5,220,0,0,1427,1432,3,260,
	130,0,1428,1430,5,220,0,0,1429,1428,1,0,0,0,1429,1430,1,0,0,0,1430,1431,
	1,0,0,0,1431,1433,3,250,125,0,1432,1429,1,0,0,0,1432,1433,1,0,0,0,1433,
	1434,1,0,0,0,1434,1436,3,294,147,0,1435,1437,3,26,13,0,1436,1435,1,0,0,
	0,1436,1437,1,0,0,0,1437,1438,1,0,0,0,1438,1439,5,57,0,0,1439,143,1,0,0,
	0,1440,1441,3,284,142,0,1441,1442,5,220,0,0,1442,1444,1,0,0,0,1443,1440,
	1,0,0,0,1443,1444,1,0,0,0,1444,1447,1,0,0,0,1445,1446,5,161,0,0,1446,1448,
	5,220,0,0,1447,1445,1,0,0,0,1447,1448,1,0,0,0,1448,1449,1,0,0,0,1449,1450,
	5,134,0,0,1450,1451,5,220,0,0,1451,1456,3,260,130,0,1452,1454,5,220,0,0,
	1453,1452,1,0,0,0,1453,1454,1,0,0,0,1454,1455,1,0,0,0,1455,1457,3,250,125,
	0,1456,1453,1,0,0,0,1456,1457,1,0,0,0,1457,1458,1,0,0,0,1458,1460,3,294,
	147,0,1459,1461,3,26,13,0,1460,1459,1,0,0,0,1460,1461,1,0,0,0,1461,1462,
	1,0,0,0,1462,1463,5,57,0,0,1463,145,1,0,0,0,1464,1465,5,138,0,0,1465,1466,
	5,220,0,0,1466,1468,3,218,109,0,1467,1469,5,220,0,0,1468,1467,1,0,0,0,1468,
	1469,1,0,0,0,1469,1470,1,0,0,0,1470,1472,5,1,0,0,1471,1473,5,220,0,0,1472,
	1471,1,0,0,0,1472,1473,1,0,0,0,1473,1475,1,0,0,0,1474,1476,3,202,101,0,
	1475,1474,1,0,0,0,1475,1476,1,0,0,0,1476,1478,1,0,0,0,1477,1479,5,220,0,
	0,1478,1477,1,0,0,0,1478,1479,1,0,0,0,1479,1480,1,0,0,0,1480,1482,5,1,0,
	0,1481,1483,5,220,0,0,1482,1481,1,0,0,0,1482,1483,1,0,0,0,1483,1484,1,0,
	0,0,1484,1485,3,202,101,0,1485,147,1,0,0,0,1486,1487,5,141,0,0,1487,1488,
	5,220,0,0,1488,1503,3,260,130,0,1489,1491,5,220,0,0,1490,1489,1,0,0,0,1490,
	1491,1,0,0,0,1491,1492,1,0,0,0,1492,1494,5,193,0,0,1493,1495,5,220,0,0,
	1494,1493,1,0,0,0,1494,1495,1,0,0,0,1495,1500,1,0,0,0,1496,1498,3,244,122,
	0,1497,1499,5,220,0,0,1498,1497,1,0,0,0,1498,1499,1,0,0,0,1499,1501,1,0,
	0,0,1500,1496,1,0,0,0,1500,1501,1,0,0,0,1501,1502,1,0,0,0,1502,1504,5,202,
	0,0,1503,1490,1,0,0,0,1503,1504,1,0,0,0,1504,149,1,0,0,0,1505,1508,5,140,
	0,0,1506,1507,5,220,0,0,1507,1509,3,202,101,0,1508,1506,1,0,0,0,1508,1509,
	1,0,0,0,1509,151,1,0,0,0,1510,1511,5,144,0,0,1511,1514,5,220,0,0,1512,1513,
	5,130,0,0,1513,1515,5,220,0,0,1514,1512,1,0,0,0,1514,1515,1,0,0,0,1515,
	1516,1,0,0,0,1516,1527,3,154,77,0,1517,1519,5,220,0,0,1518,1517,1,0,0,0,
	1518,1519,1,0,0,0,1519,1520,1,0,0,0,1520,1522,5,1,0,0,1521,1523,5,220,0,
	0,1522,1521,1,0,0,0,1522,1523,1,0,0,0,1523,1524,1,0,0,0,1524,1526,3,154,
	77,0,1525,1518,1,0,0,0,1526,1529,1,0,0,0,1527,1525,1,0,0,0,1527,1528,1,
	0,0,0,1528,153,1,0,0,0,1529,1527,1,0,0,0,1530,1532,3,232,116,0,1531,1533,
	5,220,0,0,1532,1531,1,0,0,0,1532,1533,1,0,0,0,1533,1534,1,0,0,0,1534,1536,
	5,193,0,0,1535,1537,5,220,0,0,1536,1535,1,0,0,0,1536,1537,1,0,0,0,1537,
	1538,1,0,0,0,1538,1540,3,256,128,0,1539,1541,5,220,0,0,1540,1539,1,0,0,
	0,1540,1541,1,0,0,0,1541,1542,1,0,0,0,1542,1545,5,202,0,0,1543,1544,5,220,
	0,0,1544,1546,3,262,131,0,1545,1543,1,0,0,0,1545,1546,1,0,0,0,1546,155,
	1,0,0,0,1547,1548,5,146,0,0,1548,157,1,0,0,0,1549,1555,5,147,0,0,1550,1553,
	5,220,0,0,1551,1554,5,113,0,0,1552,1554,3,260,130,0,1553,1551,1,0,0,0,1553,
	1552,1,0,0,0,1554,1556,1,0,0,0,1555,1550,1,0,0,0,1555,1556,1,0,0,0,1556,
	159,1,0,0,0,1557,1558,5,148,0,0,1558,161,1,0,0,0,1559,1560,5,149,0,0,1560,
	1561,5,220,0,0,1561,1562,3,202,101,0,1562,163,1,0,0,0,1563,1564,5,150,0,
	0,1564,1565,5,220,0,0,1565,1567,3,232,116,0,1566,1568,5,220,0,0,1567,1566,
	1,0,0,0,1567,1568,1,0,0,0,1568,1569,1,0,0,0,1569,1571,5,189,0,0,1570,1572,
	5,220,0,0,1571,1570,1,0,0,0,1571,1572,1,0,0,0,1572,1573,1,0,0,0,1573,1574,
	3,202,101,0,1574,165,1,0,0,0,1575,1576,5,151,0,0,1576,1577,5,220,0,0,1577,
	1579,3,202,101,0,1578,1580,5,220,0,0,1579,1578,1,0,0,0,1579,1580,1,0,0,
	0,1580,1581,1,0,0,0,1581,1583,5,1,0,0,1582,1584,5,220,0,0,1583,1582,1,0,
	0,0,1583,1584,1,0,0,0,1584,1585,1,0,0,0,1585,1586,3,202,101,0,1586,167,
	1,0,0,0,1587,1588,5,152,0,0,1588,1589,5,220,0,0,1589,1591,3,202,101,0,1590,
	1592,5,220,0,0,1591,1590,1,0,0,0,1591,1592,1,0,0,0,1592,1593,1,0,0,0,1593,
	1595,5,1,0,0,1594,1596,5,220,0,0,1595,1594,1,0,0,0,1595,1596,1,0,0,0,1596,
	1597,1,0,0,0,1597,1599,3,202,101,0,1598,1600,5,220,0,0,1599,1598,1,0,0,
	0,1599,1600,1,0,0,0,1600,1601,1,0,0,0,1601,1603,5,1,0,0,1602,1604,5,220,
	0,0,1603,1602,1,0,0,0,1603,1604,1,0,0,0,1604,1605,1,0,0,0,1605,1607,3,202,
	101,0,1606,1608,5,220,0,0,1607,1606,1,0,0,0,1607,1608,1,0,0,0,1608,1609,
	1,0,0,0,1609,1611,5,1,0,0,1610,1612,5,220,0,0,1611,1610,1,0,0,0,1611,1612,
	1,0,0,0,1612,1613,1,0,0,0,1613,1614,3,202,101,0,1614,169,1,0,0,0,1615,1616,
	5,153,0,0,1616,1617,5,220,0,0,1617,1619,3,218,109,0,1618,1620,5,220,0,0,
	1619,1618,1,0,0,0,1619,1620,1,0,0,0,1620,1621,1,0,0,0,1621,1623,5,1,0,0,
	1622,1624,5,220,0,0,1623,1622,1,0,0,0,1623,1624,1,0,0,0,1624,1625,1,0,0,
	0,1625,1626,3,202,101,0,1626,171,1,0,0,0,1627,1628,5,154,0,0,1628,1629,
	5,220,0,0,1629,1630,5,25,0,0,1630,1631,5,220,0,0,1631,1632,3,202,101,0,
	1632,1636,3,294,147,0,1633,1635,3,176,88,0,1634,1633,1,0,0,0,1635,1638,
	1,0,0,0,1636,1634,1,0,0,0,1636,1637,1,0,0,0,1637,1639,1,0,0,0,1638,1636,
	1,0,0,0,1639,1640,5,58,0,0,1640,173,1,0,0,0,1641,1643,5,87,0,0,1642,1644,
	5,220,0,0,1643,1642,1,0,0,0,1643,1644,1,0,0,0,1644,1645,1,0,0,0,1645,1647,
	3,268,134,0,1646,1648,5,220,0,0,1647,1646,1,0,0,0,1647,1648,1,0,0,0,1648,
	1649,1,0,0,0,1649,1650,3,202,101,0,1650,1659,1,0,0,0,1651,1652,3,202,101,
	0,1652,1653,5,220,0,0,1653,1654,5,170,0,0,1654,1655,5,220,0,0,1655,1656,
	3,202,101,0,1656,1659,1,0,0,0,1657,1659,3,202,101,0,1658,1641,1,0,0,0,1658,
	1651,1,0,0,0,1658,1657,1,0,0,0,1659,175,1,0,0,0,1660,1661,5,25,0,0,1661,
	1662,5,220,0,0,1662,1663,3,178,89,0,1663,1665,3,294,147,0,1664,1666,3,26,
	13,0,1665,1664,1,0,0,0,1665,1666,1,0,0,0,1666,177,1,0,0,0,1667,1683,5,52,
	0,0,1668,1679,3,174,87,0,1669,1671,5,220,0,0,1670,1669,1,0,0,0,1670,1671,
	1,0,0,0,1671,1672,1,0,0,0,1672,1674,5,1,0,0,1673,1675,5,220,0,0,1674,1673,
	1,0,0,0,1674,1675,1,0,0,0,1675,1676,1,0,0,0,1676,1678,3,174,87,0,1677,1670,
	1,0,0,0,1678,1681,1,0,0,0,1679,1677,1,0,0,0,1679,1680,1,0,0,0,1680,1683,
	1,0,0,0,1681,1679,1,0,0,0,1682,1667,1,0,0,0,1682,1668,1,0,0,0,1683,179,
	1,0,0,0,1684,1685,5,155,0,0,1685,1686,5,220,0,0,1686,1695,3,202,101,0,1687,
	1689,5,220,0,0,1688,1687,1,0,0,0,1688,1689,1,0,0,0,1689,1690,1,0,0,0,1690,
	1692,5,1,0,0,1691,1693,5,220,0,0,1692,1691,1,0,0,0,1692,1693,1,0,0,0,1693,
	1694,1,0,0,0,1694,1696,3,202,101,0,1695,1688,1,0,0,0,1695,1696,1,0,0,0,
	1696,181,1,0,0,0,1697,1698,5,157,0,0,1698,1699,5,220,0,0,1699,1701,3,202,
	101,0,1700,1702,5,220,0,0,1701,1700,1,0,0,0,1701,1702,1,0,0,0,1702,1703,
	1,0,0,0,1703,1705,5,1,0,0,1704,1706,5,220,0,0,1705,1704,1,0,0,0,1705,1706,
	1,0,0,0,1706,1707,1,0,0,0,1707,1708,3,202,101,0,1708,183,1,0,0,0,1709,1710,
	5,156,0,0,1710,1711,5,220,0,0,1711,1713,3,232,116,0,1712,1714,5,220,0,0,
	1713,1712,1,0,0,0,1713,1714,1,0,0,0,1714,1715,1,0,0,0,1715,1717,5,189,0,
	0,1716,1718,5,220,0,0,1717,1716,1,0,0,0,1717,1718,1,0,0,0,1718,1719,1,0,
	0,0,1719,1720,3,202,101,0,1720,185,1,0,0,0,1721,1722,5,163,0,0,1722,187,
	1,0,0,0,1723,1724,3,284,142,0,1724,1725,5,220,0,0,1725,1727,1,0,0,0,1726,
	1723,1,0,0,0,1726,1727,1,0,0,0,1727,1730,1,0,0,0,1728,1729,5,161,0,0,1729,
	1731,5,220,0,0,1730,1728,1,0,0,0,1730,1731,1,0,0,0,1731,1732,1,0,0,0,1732,
	1734,5,165,0,0,1733,1735,5,220,0,0,1734,1733,1,0,0,0,1734,1735,1,0,0,0,
	1735,1736,1,0,0,0,1736,1741,3,260,130,0,1737,1739,5,220,0,0,1738,1737,1,
	0,0,0,1738,1739,1,0,0,0,1739,1740,1,0,0,0,1740,1742,3,250,125,0,1741,1738,
	1,0,0,0,1741,1742,1,0,0,0,1742,1743,1,0,0,0,1743,1745,3,294,147,0,1744,
	1746,3,26,13,0,1745,1744,1,0,0,0,1745,1746,1,0,0,0,1746,1747,1,0,0,0,1747,
	1748,5,59,0,0,1748,189,1,0,0,0,1749,1751,5,169,0,0,1750,1752,5,220,0,0,
	1751,1750,1,0,0,0,1751,1752,1,0,0,0,1752,1753,1,0,0,0,1753,1755,5,189,0,
	0,1754,1756,5,220,0,0,1755,1754,1,0,0,0,1755,1756,1,0,0,0,1756,1757,1,0,
	0,0,1757,1758,3,202,101,0,1758,191,1,0,0,0,1759,1760,3,284,142,0,1760,1761,
	5,220,0,0,1761,1763,1,0,0,0,1762,1759,1,0,0,0,1762,1763,1,0,0,0,1763,1764,
	1,0,0,0,1764,1765,5,172,0,0,1765,1766,5,220,0,0,1766,1767,3,260,130,0,1767,
	1771,3,294,147,0,1768,1770,3,194,97,0,1769,1768,1,0,0,0,1770,1773,1,0,0,
	0,1771,1769,1,0,0,0,1771,1772,1,0,0,0,1772,1774,1,0,0,0,1773,1771,1,0,0,
	0,1774,1775,5,60,0,0,1775,193,1,0,0,0,1776,1791,3,260,130,0,1777,1779,5,
	220,0,0,1778,1777,1,0,0,0,1778,1779,1,0,0,0,1779,1780,1,0,0,0,1780,1785,
	5,193,0,0,1781,1783,5,220,0,0,1782,1781,1,0,0,0,1782,1783,1,0,0,0,1783,
	1784,1,0,0,0,1784,1786,3,256,128,0,1785,1782,1,0,0,0,1785,1786,1,0,0,0,
	1786,1788,1,0,0,0,1787,1789,5,220,0,0,1788,1787,1,0,0,0,1788,1789,1,0,0,
	0,1789,1790,1,0,0,0,1790,1792,5,202,0,0,1791,1778,1,0,0,0,1791,1792,1,0,
	0,0,1792,1795,1,0,0,0,1793,1794,5,220,0,0,1794,1796,3,262,131,0,1795,1793,
	1,0,0,0,1795,1796,1,0,0,0,1796,1797,1,0,0,0,1797,1798,3,294,147,0,1798,
	195,1,0,0,0,1799,1800,5,173,0,0,1800,1801,5,220,0,0,1801,1806,3,202,101,
	0,1802,1803,5,220,0,0,1803,1804,5,87,0,0,1804,1805,5,220,0,0,1805,1807,
	3,280,140,0,1806,1802,1,0,0,0,1806,1807,1,0,0,0,1807,197,1,0,0,0,1808,1809,
	5,174,0,0,1809,1810,5,220,0,0,1810,1811,3,202,101,0,1811,199,1,0,0,0,1812,
	1813,5,175,0,0,1813,1814,5,220,0,0,1814,1829,3,218,109,0,1815,1817,5,220,
	0,0,1816,1815,1,0,0,0,1816,1817,1,0,0,0,1817,1818,1,0,0,0,1818,1820,5,1,
	0,0,1819,1821,5,220,0,0,1820,1819,1,0,0,0,1820,1821,1,0,0,0,1821,1822,1,
	0,0,0,1822,1827,3,202,101,0,1823,1824,5,220,0,0,1824,1825,5,170,0,0,1825,
	1826,5,220,0,0,1826,1828,3,202,101,0,1827,1823,1,0,0,0,1827,1828,1,0,0,
	0,1828,1830,1,0,0,0,1829,1816,1,0,0,0,1829,1830,1,0,0,0,1830,201,1,0,0,
	0,1831,1832,6,101,-1,0,1832,1892,3,278,139,0,1833,1892,3,232,116,0,1834,
	1836,5,193,0,0,1835,1837,5,220,0,0,1836,1835,1,0,0,0,1836,1837,1,0,0,0,
	1837,1838,1,0,0,0,1838,1849,3,202,101,0,1839,1841,5,220,0,0,1840,1839,1,
	0,0,0,1840,1841,1,0,0,0,1841,1842,1,0,0,0,1842,1844,5,1,0,0,1843,1845,5,
	220,0,0,1844,1843,1,0,0,0,1844,1845,1,0,0,0,1845,1846,1,0,0,0,1846,1848,
	3,202,101,0,1847,1840,1,0,0,0,1848,1851,1,0,0,0,1849,1847,1,0,0,0,1849,
	1850,1,0,0,0,1850,1852,1,0,0,0,1851,1849,1,0,0,0,1852,1853,5,202,0,0,1853,
	1892,1,0,0,0,1854,1856,5,114,0,0,1855,1857,5,220,0,0,1856,1855,1,0,0,0,
	1856,1857,1,0,0,0,1857,1858,1,0,0,0,1858,1892,3,202,101,19,1859,1892,3,
	196,98,0,1860,1892,3,120,60,0,1861,1863,5,10,0,0,1862,1864,5,220,0,0,1863,
	1862,1,0,0,0,1863,1864,1,0,0,0,1864,1865,1,0,0,0,1865,1892,3,202,101,16,
	1866,1868,3,232,116,0,1867,1869,5,220,0,0,1868,1867,1,0,0,0,1868,1869,1,
	0,0,0,1869,1870,1,0,0,0,1870,1872,5,187,0,0,1871,1873,5,220,0,0,1872,1871,
	1,0,0,0,1872,1873,1,0,0,0,1873,1874,1,0,0,0,1874,1875,3,202,101,15,1875,
	1892,1,0,0,0,1876,1878,5,195,0,0,1877,1879,5,220,0,0,1878,1877,1,0,0,0,
	1878,1879,1,0,0,0,1879,1880,1,0,0,0,1880,1892,3,202,101,13,1881,1883,5,
	199,0,0,1882,1884,5,220,0,0,1883,1882,1,0,0,0,1883,1884,1,0,0,0,1884,1885,
	1,0,0,0,1885,1892,3,202,101,12,1886,1888,5,115,0,0,1887,1889,5,220,0,0,
	1888,1887,1,0,0,0,1888,1889,1,0,0,0,1889,1890,1,0,0,0,1890,1892,3,202,101,
	6,1891,1831,1,0,0,0,1891,1833,1,0,0,0,1891,1834,1,0,0,0,1891,1854,1,0,0,
	0,1891,1859,1,0,0,0,1891,1860,1,0,0,0,1891,1861,1,0,0,0,1891,1866,1,0,0,
	0,1891,1876,1,0,0,0,1891,1881,1,0,0,0,1891,1886,1,0,0,0,1892,1994,1,0,0,
	0,1893,1895,10,14,0,0,1894,1896,5,220,0,0,1895,1894,1,0,0,0,1895,1896,1,
	0,0,0,1896,1897,1,0,0,0,1897,1899,5,201,0,0,1898,1900,5,220,0,0,1899,1898,
	1,0,0,0,1899,1900,1,0,0,0,1900,1901,1,0,0,0,1901,1993,3,202,101,15,1902,
	1904,10,11,0,0,1903,1905,5,220,0,0,1904,1903,1,0,0,0,1904,1905,1,0,0,0,
	1905,1906,1,0,0,0,1906,1908,7,12,0,0,1907,1909,5,220,0,0,1908,1907,1,0,
	0,0,1908,1909,1,0,0,0,1909,1910,1,0,0,0,1910,1993,3,202,101,12,1911,1913,
	10,10,0,0,1912,1914,5,220,0,0,1913,1912,1,0,0,0,1913,1914,1,0,0,0,1914,
	1915,1,0,0,0,1915,1917,5,111,0,0,1916,1918,5,220,0,0,1917,1916,1,0,0,0,
	1917,1918,1,0,0,0,1918,1919,1,0,0,0,1919,1993,3,202,101,11,1920,1922,10,
	9,0,0,1921,1923,5,220,0,0,1922,1921,1,0,0,0,1922,1923,1,0,0,0,1923,1924,
	1,0,0,0,1924,1926,7,13,0,0,1925,1927,5,220,0,0,1926,1925,1,0,0,0,1926,1927,
	1,0,0,0,1927,1928,1,0,0,0,1928,1993,3,202,101,10,1929,1931,10,8,0,0,1930,
	1932,5,220,0,0,1931,1930,1,0,0,0,1931,1932,1,0,0,0,1932,1933,1,0,0,0,1933,
	1935,5,186,0,0,1934,1936,5,220,0,0,1935,1934,1,0,0,0,1935,1936,1,0,0,0,
	1936,1937,1,0,0,0,1937,1993,3,202,101,9,1938,1940,10,7,0,0,1939,1941,5,
	220,0,0,1940,1939,1,0,0,0,1940,1941,1,0,0,0,1941,1942,1,0,0,0,1942,1944,
	7,14,0,0,1943,1945,5,220,0,0,1944,1943,1,0,0,0,1944,1945,1,0,0,0,1945,1946,
	1,0,0,0,1946,1993,3,202,101,8,1947,1949,10,5,0,0,1948,1950,5,220,0,0,1949,
	1948,1,0,0,0,1949,1950,1,0,0,0,1950,1951,1,0,0,0,1951,1953,5,12,0,0,1952,
	1954,5,220,0,0,1953,1952,1,0,0,0,1953,1954,1,0,0,0,1954,1955,1,0,0,0,1955,
	1993,3,202,101,6,1956,1958,10,4,0,0,1957,1959,5,220,0,0,1958,1957,1,0,0,
	0,1958,1959,1,0,0,0,1959,1960,1,0,0,0,1960,1962,5,127,0,0,1961,1963,5,220,
	0,0,1962,1961,1,0,0,0,1962,1963,1,0,0,0,1963,1964,1,0,0,0,1964,1993,3,202,
	101,5,1965,1967,10,3,0,0,1966,1968,5,220,0,0,1967,1966,1,0,0,0,1967,1968,
	1,0,0,0,1968,1969,1,0,0,0,1969,1971,5,185,0,0,1970,1972,5,220,0,0,1971,
	1970,1,0,0,0,1971,1972,1,0,0,0,1972,1973,1,0,0,0,1973,1993,3,202,101,4,
	1974,1976,10,2,0,0,1975,1977,5,220,0,0,1976,1975,1,0,0,0,1976,1977,1,0,
	0,0,1977,1978,1,0,0,0,1978,1980,5,64,0,0,1979,1981,5,220,0,0,1980,1979,
	1,0,0,0,1980,1981,1,0,0,0,1981,1982,1,0,0,0,1982,1993,3,202,101,3,1983,
	1985,10,1,0,0,1984,1986,5,220,0,0,1985,1984,1,0,0,0,1985,1986,1,0,0,0,1986,
	1987,1,0,0,0,1987,1989,5,83,0,0,1988,1990,5,220,0,0,1989,1988,1,0,0,0,1989,
	1990,1,0,0,0,1990,1991,1,0,0,0,1991,1993,3,202,101,2,1992,1893,1,0,0,0,
	1992,1902,1,0,0,0,1992,1911,1,0,0,0,1992,1920,1,0,0,0,1992,1929,1,0,0,0,
	1992,1938,1,0,0,0,1992,1947,1,0,0,0,1992,1956,1,0,0,0,1992,1965,1,0,0,0,
	1992,1974,1,0,0,0,1992,1983,1,0,0,0,1993,1996,1,0,0,0,1994,1992,1,0,0,0,
	1994,1995,1,0,0,0,1995,203,1,0,0,0,1996,1994,1,0,0,0,1997,2001,5,48,0,0,
	1998,2001,5,161,0,0,1999,2001,3,284,142,0,2000,1997,1,0,0,0,2000,1998,1,
	0,0,0,2000,1999,1,0,0,0,2001,2002,1,0,0,0,2002,2005,5,220,0,0,2003,2004,
	5,183,0,0,2004,2006,5,220,0,0,2005,2003,1,0,0,0,2005,2006,1,0,0,0,2006,
	2007,1,0,0,0,2007,2008,3,206,103,0,2008,205,1,0,0,0,2009,2020,3,208,104,
	0,2010,2012,5,220,0,0,2011,2010,1,0,0,0,2011,2012,1,0,0,0,2012,2013,1,0,
	0,0,2013,2015,5,1,0,0,2014,2016,5,220,0,0,2015,2014,1,0,0,0,2015,2016,1,
	0,0,0,2016,2017,1,0,0,0,2017,2019,3,208,104,0,2018,2011,1,0,0,0,2019,2022,
	1,0,0,0,2020,2018,1,0,0,0,2020,2021,1,0,0,0,2021,207,1,0,0,0,2022,2020,
	1,0,0,0,2023,2041,3,260,130,0,2024,2026,5,220,0,0,2025,2024,1,0,0,0,2025,
	2026,1,0,0,0,2026,2027,1,0,0,0,2027,2029,5,193,0,0,2028,2030,5,220,0,0,
	2029,2028,1,0,0,0,2029,2030,1,0,0,0,2030,2035,1,0,0,0,2031,2033,3,256,128,
	0,2032,2034,5,220,0,0,2033,2032,1,0,0,0,2033,2034,1,0,0,0,2034,2036,1,0,
	0,0,2035,2031,1,0,0,0,2035,2036,1,0,0,0,2036,2037,1,0,0,0,2037,2039,5,202,
	0,0,2038,2040,5,220,0,0,2039,2038,1,0,0,0,2039,2040,1,0,0,0,2040,2042,1,
	0,0,0,2041,2025,1,0,0,0,2041,2042,1,0,0,0,2042,2044,1,0,0,0,2043,2045,3,
	282,141,0,2044,2043,1,0,0,0,2044,2045,1,0,0,0,2045,2048,1,0,0,0,2046,2047,
	5,220,0,0,2047,2049,3,262,131,0,2048,2046,1,0,0,0,2048,2049,1,0,0,0,2049,
	209,1,0,0,0,2050,2051,5,180,0,0,2051,2052,5,220,0,0,2052,2053,3,202,101,
	0,2053,2055,3,294,147,0,2054,2056,3,26,13,0,2055,2054,1,0,0,0,2055,2056,
	1,0,0,0,2056,2057,1,0,0,0,2057,2058,5,179,0,0,2058,211,1,0,0,0,2059,2060,
	5,181,0,0,2060,2061,5,220,0,0,2061,2063,3,218,109,0,2062,2064,5,220,0,0,
	2063,2062,1,0,0,0,2063,2064,1,0,0,0,2064,2065,1,0,0,0,2065,2067,5,1,0,0,
	2066,2068,5,220,0,0,2067,2066,1,0,0,0,2067,2068,1,0,0,0,2068,2069,1,0,0,
	0,2069,2070,3,202,101,0,2070,213,1,0,0,0,2071,2072,5,182,0,0,2072,2077,
	5,220,0,0,2073,2078,3,232,116,0,2074,2075,5,114,0,0,2075,2076,5,220,0,0,
	2076,2078,3,280,140,0,2077,2073,1,0,0,0,2077,2074,1,0,0,0,2078,2079,1,0,
	0,0,2079,2081,3,294,147,0,2080,2082,3,26,13,0,2081,2080,1,0,0,0,2081,2082,
	1,0,0,0,2082,2083,1,0,0,0,2083,2084,5,61,0,0,2084,215,1,0,0,0,2085,2086,
	5,184,0,0,2086,2087,5,220,0,0,2087,2089,3,218,109,0,2088,2090,5,220,0,0,
	2089,2088,1,0,0,0,2089,2090,1,0,0,0,2090,2091,1,0,0,0,2091,2096,5,1,0,0,
	2092,2094,5,220,0,0,2093,2092,1,0,0,0,2093,2094,1,0,0,0,2094,2095,1,0,0,
	0,2095,2097,3,134,67,0,2096,2093,1,0,0,0,2096,2097,1,0,0,0,2097,217,1,0,
	0,0,2098,2100,5,3,0,0,2099,2098,1,0,0,0,2099,2100,1,0,0,0,2100,2101,1,0,
	0,0,2101,2102,3,202,101,0,2102,219,1,0,0,0,2103,2106,3,222,111,0,2104,2106,
	3,224,112,0,2105,2103,1,0,0,0,2105,2104,1,0,0,0,2106,221,1,0,0,0,2107,2108,
	5,24,0,0,2108,2109,5,220,0,0,2109,2111,3,260,130,0,2110,2112,3,282,141,
	0,2111,2110,1,0,0,0,2111,2112,1,0,0,0,2112,2126,1,0,0,0,2113,2115,5,220,
	0,0,2114,2113,1,0,0,0,2114,2115,1,0,0,0,2115,2116,1,0,0,0,2116,2118,5,193,
	0,0,2117,2119,5,220,0,0,2118,2117,1,0,0,0,2118,2119,1,0,0,0,2119,2120,1,
	0,0,0,2120,2122,3,244,122,0,2121,2123,5,220,0,0,2122,2121,1,0,0,0,2122,
	2123,1,0,0,0,2123,2124,1,0,0,0,2124,2125,5,202,0,0,2125,2127,1,0,0,0,2126,
	2114,1,0,0,0,2126,2127,1,0,0,0,2127,2137,1,0,0,0,2128,2130,5,220,0,0,2129,
	2128,1,0,0,0,2129,2130,1,0,0,0,2130,2131,1,0,0,0,2131,2132,5,193,0,0,2132,
	2133,3,256,128,0,2133,2134,5,202,0,0,2134,2136,1,0,0,0,2135,2129,1,0,0,
	0,2136,2139,1,0,0,0,2137,2135,1,0,0,0,2137,2138,1,0,0,0,2138,223,1,0,0,
	0,2139,2137,1,0,0,0,2140,2141,5,24,0,0,2141,2143,5,220,0,0,2142,2144,3,
	232,116,0,2143,2142,1,0,0,0,2143,2144,1,0,0,0,2144,2145,1,0,0,0,2145,2146,
	5,4,0,0,2146,2148,3,260,130,0,2147,2149,3,282,141,0,2148,2147,1,0,0,0,2148,
	2149,1,0,0,0,2149,2163,1,0,0,0,2150,2152,5,220,0,0,2151,2150,1,0,0,0,2151,
	2152,1,0,0,0,2152,2153,1,0,0,0,2153,2155,5,193,0,0,2154,2156,5,220,0,0,
	2155,2154,1,0,0,0,2155,2156,1,0,0,0,2156,2157,1,0,0,0,2157,2159,3,244,122,
	0,2158,2160,5,220,0,0,2159,2158,1,0,0,0,2159,2160,1,0,0,0,2160,2161,1,0,
	0,0,2161,2162,5,202,0,0,2162,2164,1,0,0,0,2163,2151,1,0,0,0,2163,2164,1,
	0,0,0,2164,2174,1,0,0,0,2165,2167,5,220,0,0,2166,2165,1,0,0,0,2166,2167,
	1,0,0,0,2167,2168,1,0,0,0,2168,2169,5,193,0,0,2169,2170,3,256,128,0,2170,
	2171,5,202,0,0,2171,2173,1,0,0,0,2172,2166,1,0,0,0,2173,2176,1,0,0,0,2174,
	2172,1,0,0,0,2174,2175,1,0,0,0,2175,225,1,0,0,0,2176,2174,1,0,0,0,2177,
	2180,3,228,114,0,2178,2180,3,230,115,0,2179,2177,1,0,0,0,2179,2178,1,0,
	0,0,2180,227,1,0,0,0,2181,2183,3,232,116,0,2182,2181,1,0,0,0,2182,2183,
	1,0,0,0,2183,2184,1,0,0,0,2184,2185,5,4,0,0,2185,2187,3,260,130,0,2186,
	2188,3,282,141,0,2187,2186,1,0,0,0,2187,2188,1,0,0,0,2188,2191,1,0,0,0,
	2189,2190,5,220,0,0,2190,2192,3,244,122,0,2191,2189,1,0,0,0,2191,2192,1,
	0,0,0,2192,2194,1,0,0,0,2193,2195,3,248,124,0,2194,2193,1,0,0,0,2194,2195,
	1,0,0,0,2195,2205,1,0,0,0,2196,2198,5,220,0,0,2197,2196,1,0,0,0,2197,2198,
	1,0,0,0,2198,2199,1,0,0,0,2199,2200,5,193,0,0,2200,2201,3,256,128,0,2201,
	2202,5,202,0,0,2202,2204,1,0,0,0,2203,2197,1,0,0,0,2204,2207,1,0,0,0,2205,
	2203,1,0,0,0,2205,2206,1,0,0,0,2206,229,1,0,0,0,2207,2205,1,0,0,0,2208,
	2211,3,266,133,0,2209,2210,5,220,0,0,2210,2212,3,244,122,0,2211,2209,1,
	0,0,0,2211,2212,1,0,0,0,2212,2222,1,0,0,0,2213,2215,5,220,0,0,2214,2213,
	1,0,0,0,2214,2215,1,0,0,0,2215,2216,1,0,0,0,2216,2217,5,193,0,0,2217,2218,
	3,256,128,0,2218,2219,5,202,0,0,2219,2221,1,0,0,0,2220,2214,1,0,0,0,2221,
	2224,1,0,0,0,2222,2220,1,0,0,0,2222,2223,1,0,0,0,2223,231,1,0,0,0,2224,
	2222,1,0,0,0,2225,2230,3,238,119,0,2226,2230,3,234,117,0,2227,2230,3,236,
	118,0,2228,2230,3,242,121,0,2229,2225,1,0,0,0,2229,2226,1,0,0,0,2229,2227,
	1,0,0,0,2229,2228,1,0,0,0,2230,233,1,0,0,0,2231,2233,3,260,130,0,2232,2234,
	3,282,141,0,2233,2232,1,0,0,0,2233,2234,1,0,0,0,2234,2236,1,0,0,0,2235,
	2237,3,248,124,0,2236,2235,1,0,0,0,2236,2237,1,0,0,0,2237,2247,1,0,0,0,
	2238,2240,5,220,0,0,2239,2238,1,0,0,0,2239,2240,1,0,0,0,2240,2241,1,0,0,
	0,2241,2242,5,193,0,0,2242,2243,3,256,128,0,2243,2244,5,202,0,0,2244,2246,
	1,0,0,0,2245,2239,1,0,0,0,2246,2249,1,0,0,0,2247,2245,1,0,0,0,2247,2248,
	1,0,0,0,2248,235,1,0,0,0,2249,2247,1,0,0,0,2250,2253,3,260,130,0,2251,2253,
	3,264,132,0,2252,2250,1,0,0,0,2252,2251,1,0,0,0,2253,2255,1,0,0,0,2254,
	2256,3,282,141,0,2255,2254,1,0,0,0,2255,2256,1,0,0,0,2256,2258,1,0,0,0,
	2257,2259,5,220,0,0,2258,2257,1,0,0,0,2258,2259,1,0,0,0,2259,2260,1,0,0,
	0,2260,2262,5,193,0,0,2261,2263,5,220,0,0,2262,2261,1,0,0,0,2262,2263,1,
	0,0,0,2263,2268,1,0,0,0,2264,2266,3,244,122,0,2265,2267,5,220,0,0,2266,
	2265,1,0,0,0,2266,2267,1,0,0,0,2267,2269,1,0,0,0,2268,2264,1,0,0,0,2268,
	2269,1,0,0,0,2269,2270,1,0,0,0,2270,2272,5,202,0,0,2271,2273,3,248,124,
	0,2272,2271,1,0,0,0,2272,2273,1,0,0,0,2273,2283,1,0,0,0,2274,2276,5,220,
	0,0,2275,2274,1,0,0,0,2275,2276,1,0,0,0,2276,2277,1,0,0,0,2277,2278,5,193,
	0,0,2278,2279,3,256,128,0,2279,2280,5,202,0,0,2280,2282,1,0,0,0,2281,2275,
	1,0,0,0,2282,2285,1,0,0,0,2283,2281,1,0,0,0,2283,2284,1,0,0,0,2284,237,
	1,0,0,0,2285,2283,1,0,0,0,2286,2289,3,234,117,0,2287,2289,3,236,118,0,2288,
	2286,1,0,0,0,2288,2287,1,0,0,0,2288,2289,1,0,0,0,2289,2291,1,0,0,0,2290,
	2292,3,240,120,0,2291,2290,1,0,0,0,2292,2293,1,0,0,0,2293,2291,1,0,0,0,
	2293,2294,1,0,0,0,2294,2296,1,0,0,0,2295,2297,3,248,124,0,2296,2295,1,0,
	0,0,2296,2297,1,0,0,0,2297,2307,1,0,0,0,2298,2300,5,220,0,0,2299,2298,1,
	0,0,0,2299,2300,1,0,0,0,2300,2301,1,0,0,0,2301,2302,5,193,0,0,2302,2303,
	3,256,128,0,2303,2304,5,202,0,0,2304,2306,1,0,0,0,2305,2299,1,0,0,0,2306,
	2309,1,0,0,0,2307,2305,1,0,0,0,2307,2308,1,0,0,0,2308,239,1,0,0,0,2309,
	2307,1,0,0,0,2310,2312,5,213,0,0,2311,2310,1,0,0,0,2311,2312,1,0,0,0,2312,
	2313,1,0,0,0,2313,2315,7,15,0,0,2314,2316,5,213,0,0,2315,2314,1,0,0,0,2315,
	2316,1,0,0,0,2316,2319,1,0,0,0,2317,2320,3,234,117,0,2318,2320,3,236,118,
	0,2319,2317,1,0,0,0,2319,2318,1,0,0,0,2320,241,1,0,0,0,2321,2322,3,248,
	124,0,2322,243,1,0,0,0,2323,2325,3,246,123,0,2324,2323,1,0,0,0,2324,2325,
	1,0,0,0,2325,2327,1,0,0,0,2326,2328,5,220,0,0,2327,2326,1,0,0,0,2327,2328,
	1,0,0,0,2328,2329,1,0,0,0,2329,2331,7,10,0,0,2330,2332,5,220,0,0,2331,2330,
	1,0,0,0,2331,2332,1,0,0,0,2332,2334,1,0,0,0,2333,2324,1,0,0,0,2334,2337,
	1,0,0,0,2335,2333,1,0,0,0,2335,2336,1,0,0,0,2336,2338,1,0,0,0,2337,2335,
	1,0,0,0,2338,2351,3,246,123,0,2339,2341,5,220,0,0,2340,2339,1,0,0,0,2340,
	2341,1,0,0,0,2341,2342,1,0,0,0,2342,2344,7,10,0,0,2343,2345,5,220,0,0,2344,
	2343,1,0,0,0,2344,2345,1,0,0,0,2345,2347,1,0,0,0,2346,2348,3,246,123,0,
	2347,2346,1,0,0,0,2347,2348,1,0,0,0,2348,2350,1,0,0,0,2349,2340,1,0,0,0,
	2350,2353,1,0,0,0,2351,2349,1,0,0,0,2351,2352,1,0,0,0,2352,245,1,0,0,0,
	2353,2351,1,0,0,0,2354,2356,5,193,0,0,2355,2354,1,0,0,0,2355,2356,1,0,0,
	0,2356,2359,1,0,0,0,2357,2358,7,16,0,0,2358,2360,5,220,0,0,2359,2357,1,
	0,0,0,2359,2360,1,0,0,0,2360,2362,1,0,0,0,2361,2363,5,202,0,0,2362,2361,
	1,0,0,0,2362,2363,1,0,0,0,2363,2364,1,0,0,0,2364,2365,3,202,101,0,2365,
	247,1,0,0,0,2366,2367,5,5,0,0,2367,2369,3,260,130,0,2368,2370,3,282,141,
	0,2369,2368,1,0,0,0,2369,2370,1,0,0,0,2370,249,1,0,0,0,2371,2389,5,193,
	0,0,2372,2374,5,220,0,0,2373,2372,1,0,0,0,2373,2374,1,0,0,0,2374,2375,1,
	0,0,0,2375,2386,3,252,126,0,2376,2378,5,220,0,0,2377,2376,1,0,0,0,2377,
	2378,1,0,0,0,2378,2379,1,0,0,0,2379,2381,5,1,0,0,2380,2382,5,220,0,0,2381,
	2380,1,0,0,0,2381,2382,1,0,0,0,2382,2383,1,0,0,0,2383,2385,3,252,126,0,
	2384,2377,1,0,0,0,2385,2388,1,0,0,0,2386,2384,1,0,0,0,2386,2387,1,0,0,0,
	2387,2390,1,0,0,0,2388,2386,1,0,0,0,2389,2373,1,0,0,0,2389,2390,1,0,0,0,
	2390,2392,1,0,0,0,2391,2393,5,220,0,0,2392,2391,1,0,0,0,2392,2393,1,0,0,
	0,2393,2394,1,0,0,0,2394,2395,5,202,0,0,2395,251,1,0,0,0,2396,2397,5,122,
	0,0,2397,2399,5,220,0,0,2398,2396,1,0,0,0,2398,2399,1,0,0,0,2399,2402,1,
	0,0,0,2400,2401,7,17,0,0,2401,2403,5,220,0,0,2402,2400,1,0,0,0,2402,2403,
	1,0,0,0,2403,2406,1,0,0,0,2404,2405,5,129,0,0,2405,2407,5,220,0,0,2406,
	2404,1,0,0,0,2406,2407,1,0,0,0,2407,2408,1,0,0,0,2408,2410,3,260,130,0,
	2409,2411,3,282,141,0,2410,2409,1,0,0,0,2410,2411,1,0,0,0,2411,2420,1,0,
	0,0,2412,2414,5,220,0,0,2413,2412,1,0,0,0,2413,2414,1,0,0,0,2414,2415,1,
	0,0,0,2415,2417,5,193,0,0,2416,2418,5,220,0,0,2417,2416,1,0,0,0,2417,2418,
	1,0,0,0,2418,2419,1,0,0,0,2419,2421,5,202,0,0,2420,2413,1,0,0,0,2420,2421,
	1,0,0,0,2421,2426,1,0,0,0,2422,2424,5,220,0,0,2423,2422,1,0,0,0,2423,2424,
	1,0,0,0,2424,2425,1,0,0,0,2425,2427,3,262,131,0,2426,2423,1,0,0,0,2426,
	2427,1,0,0,0,2427,2432,1,0,0,0,2428,2430,5,220,0,0,2429,2428,1,0,0,0,2429,
	2430,1,0,0,0,2430,2431,1,0,0,0,2431,2433,3,254,127,0,2432,2429,1,0,0,0,
	2432,2433,1,0,0,0,2433,253,1,0,0,0,2434,2436,5,189,0,0,2435,2437,5,220,
	0,0,2436,2435,1,0,0,0,2436,2437,1,0,0,0,2437,2438,1,0,0,0,2438,2439,3,202,
	101,0,2439,255,1,0,0,0,2440,2451,3,258,129,0,2441,2443,5,220,0,0,2442,2441,
	1,0,0,0,2442,2443,1,0,0,0,2443,2444,1,0,0,0,2444,2446,5,1,0,0,2445,2447,
	5,220,0,0,2446,2445,1,0,0,0,2446,2447,1,0,0,0,2447,2448,1,0,0,0,2448,2450,
	3,258,129,0,2449,2442,1,0,0,0,2450,2453,1,0,0,0,2451,2449,1,0,0,0,2451,
	2452,1,0,0,0,2452,257,1,0,0,0,2453,2451,1,0,0,0,2454,2455,3,202,101,0,2455,
	2456,5,220,0,0,2456,2457,5,170,0,0,2457,2458,5,220,0,0,2458,2460,1,0,0,
	0,2459,2454,1,0,0,0,2459,2460,1,0,0,0,2460,2462,1,0,0,0,2461,2463,3,282,
	141,0,2462,2461,1,0,0,0,2462,2463,1,0,0,0,2463,2464,1,0,0,0,2464,2466,3,
	202,101,0,2465,2467,3,282,141,0,2466,2465,1,0,0,0,2466,2467,1,0,0,0,2467,
	259,1,0,0,0,2468,2471,5,221,0,0,2469,2471,3,286,143,0,2470,2468,1,0,0,0,
	2470,2469,1,0,0,0,2471,2472,1,0,0,0,2472,2470,1,0,0,0,2472,2473,1,0,0,0,
	2473,261,1,0,0,0,2474,2476,5,16,0,0,2475,2477,5,220,0,0,2476,2475,1,0,0,
	0,2476,2477,1,0,0,0,2477,2480,1,0,0,0,2478,2479,5,114,0,0,2479,2481,5,220,
	0,0,2480,2478,1,0,0,0,2480,2481,1,0,0,0,2481,2482,1,0,0,0,2482,2487,3,280,
	140,0,2483,2485,5,220,0,0,2484,2483,1,0,0,0,2484,2485,1,0,0,0,2485,2486,
	1,0,0,0,2486,2488,3,272,136,0,2487,2484,1,0,0,0,2487,2488,1,0,0,0,2488,
	263,1,0,0,0,2489,2510,5,20,0,0,2490,2510,5,23,0,0,2491,2510,5,30,0,0,2492,
	2510,5,33,0,0,2493,2510,5,50,0,0,2494,2510,5,88,0,0,2495,2510,5,92,0,0,
	2496,2510,5,159,0,0,2497,2506,5,164,0,0,2498,2500,5,220,0,0,2499,2498,1,
	0,0,0,2499,2500,1,0,0,0,2500,2501,1,0,0,0,2501,2503,5,197,0,0,2502,2504,
	5,220,0,0,2503,2502,1,0,0,0,2503,2504,1,0,0,0,2504,2505,1,0,0,0,2505,2507,
	3,202,101,0,2506,2499,1,0,0,0,2506,2507,1,0,0,0,2507,2510,1,0,0,0,2508,
	2510,5,177,0,0,2509,2489,1,0,0,0,2509,2490,1,0,0,0,2509,2491,1,0,0,0,2509,
	2492,1,0,0,0,2509,2493,1,0,0,0,2509,2494,1,0,0,0,2509,2495,1,0,0,0,2509,
	2496,1,0,0,0,2509,2497,1,0,0,0,2509,2508,1,0,0,0,2510,265,1,0,0,0,2511,
	2516,5,221,0,0,2512,2515,3,286,143,0,2513,2515,5,221,0,0,2514,2512,1,0,
	0,0,2514,2513,1,0,0,0,2515,2518,1,0,0,0,2516,2514,1,0,0,0,2516,2517,1,0,
	0,0,2517,2527,1,0,0,0,2518,2516,1,0,0,0,2519,2522,3,286,143,0,2520,2523,
	3,286,143,0,2521,2523,5,221,0,0,2522,2520,1,0,0,0,2522,2521,1,0,0,0,2523,
	2524,1,0,0,0,2524,2522,1,0,0,0,2524,2525,1,0,0,0,2525,2527,1,0,0,0,2526,
	2511,1,0,0,0,2526,2519,1,0,0,0,2527,267,1,0,0,0,2528,2529,7,14,0,0,2529,
	269,1,0,0,0,2530,2535,3,260,130,0,2531,2532,7,15,0,0,2532,2534,3,260,130,
	0,2533,2531,1,0,0,0,2534,2537,1,0,0,0,2535,2533,1,0,0,0,2535,2536,1,0,0,
	0,2536,271,1,0,0,0,2537,2535,1,0,0,0,2538,2540,5,197,0,0,2539,2541,5,220,
	0,0,2540,2539,1,0,0,0,2540,2541,1,0,0,0,2541,2544,1,0,0,0,2542,2545,5,210,
	0,0,2543,2545,3,260,130,0,2544,2542,1,0,0,0,2544,2543,1,0,0,0,2545,273,
	1,0,0,0,2546,2555,3,266,133,0,2547,2549,5,220,0,0,2548,2547,1,0,0,0,2548,
	2549,1,0,0,0,2549,2550,1,0,0,0,2550,2552,5,195,0,0,2551,2553,5,220,0,0,
	2552,2551,1,0,0,0,2552,2553,1,0,0,0,2553,2554,1,0,0,0,2554,2556,3,266,133,
	0,2555,2548,1,0,0,0,2555,2556,1,0,0,0,2556,275,1,0,0,0,2557,2558,3,260,
	130,0,2558,2559,5,218,0,0,2559,277,1,0,0,0,2560,2561,7,18,0,0,2561,279,
	1,0,0,0,2562,2565,3,264,132,0,2563,2565,3,270,135,0,2564,2562,1,0,0,0,2564,
	2563,1,0,0,0,2565,2574,1,0,0,0,2566,2568,5,220,0,0,2567,2566,1,0,0,0,2567,
	2568,1,0,0,0,2568,2569,1,0,0,0,2569,2571,5,193,0,0,2570,2572,5,220,0,0,
	2571,2570,1,0,0,0,2571,2572,1,0,0,0,2572,2573,1,0,0,0,2573,2575,5,202,0,
	0,2574,2567,1,0,0,0,2574,2575,1,0,0,0,2575,281,1,0,0,0,2576,2577,7,19,0,
	0,2577,283,1,0,0,0,2578,2579,7,20,0,0,2579,285,1,0,0,0,2580,2581,7,21,0,
	0,2581,287,1,0,0,0,2582,2583,5,215,0,0,2583,289,1,0,0,0,2584,2585,5,216,
	0,0,2585,291,1,0,0,0,2586,2588,5,220,0,0,2587,2586,1,0,0,0,2587,2588,1,
	0,0,0,2588,2592,1,0,0,0,2589,2593,5,214,0,0,2590,2593,3,290,145,0,2591,
	2593,3,288,144,0,2592,2589,1,0,0,0,2592,2590,1,0,0,0,2592,2591,1,0,0,0,
	2593,2595,1,0,0,0,2594,2596,5,220,0,0,2595,2594,1,0,0,0,2595,2596,1,0,0,
	0,2596,293,1,0,0,0,2597,2606,3,292,146,0,2598,2600,5,220,0,0,2599,2598,
	1,0,0,0,2599,2600,1,0,0,0,2600,2601,1,0,0,0,2601,2603,5,218,0,0,2602,2604,
	5,220,0,0,2603,2602,1,0,0,0,2603,2604,1,0,0,0,2604,2606,1,0,0,0,2605,2597,
	1,0,0,0,2605,2599,1,0,0,0,2606,2609,1,0,0,0,2607,2605,1,0,0,0,2607,2608,
	1,0,0,0,2608,295,1,0,0,0,2609,2607,1,0,0,0,446,300,305,312,315,318,323,
	327,332,336,341,345,350,354,361,368,373,379,385,389,394,399,406,410,416,
	422,428,439,452,456,462,468,474,483,489,493,497,501,506,515,588,594,598,
	601,617,621,626,629,634,640,644,649,654,658,661,665,671,675,682,688,692,
	695,700,710,713,716,720,726,730,735,742,746,750,754,757,762,773,786,793,
	802,809,813,816,825,830,840,846,856,860,870,878,883,889,893,896,900,911,
	915,920,925,929,933,937,940,943,946,949,953,961,965,968,971,975,998,1004,
	1008,1012,1021,1032,1037,1047,1051,1056,1064,1068,1072,1075,1079,1085,1089,
	1095,1098,1101,1104,1114,1118,1125,1127,1133,1137,1143,1147,1151,1159,1163,
	1169,1178,1180,1185,1194,1196,1204,1206,1211,1215,1219,1243,1253,1257,1262,
	1273,1277,1282,1296,1300,1309,1313,1316,1320,1324,1327,1331,1335,1338,1342,
	1345,1349,1351,1356,1360,1364,1368,1370,1376,1380,1383,1388,1392,1398,1401,
	1404,1408,1412,1419,1423,1429,1432,1436,1443,1447,1453,1456,1460,1468,1472,
	1475,1478,1482,1490,1494,1498,1500,1503,1508,1514,1518,1522,1527,1532,1536,
	1540,1545,1553,1555,1567,1571,1579,1583,1591,1595,1599,1603,1607,1611,1619,
	1623,1636,1643,1647,1658,1665,1670,1674,1679,1682,1688,1692,1695,1701,1705,
	1713,1717,1726,1730,1734,1738,1741,1745,1751,1755,1762,1771,1778,1782,1785,
	1788,1791,1795,1806,1816,1820,1827,1829,1836,1840,1844,1849,1856,1863,1868,
	1872,1878,1883,1888,1891,1895,1899,1904,1908,1913,1917,1922,1926,1931,1935,
	1940,1944,1949,1953,1958,1962,1967,1971,1976,1980,1985,1989,1992,1994,2000,
	2005,2011,2015,2020,2025,2029,2033,2035,2039,2041,2044,2048,2055,2063,2067,
	2077,2081,2089,2093,2096,2099,2105,2111,2114,2118,2122,2126,2129,2137,2143,
	2148,2151,2155,2159,2163,2166,2174,2179,2182,2187,2191,2194,2197,2205,2211,
	2214,2222,2229,2233,2236,2239,2247,2252,2255,2258,2262,2266,2268,2272,2275,
	2283,2288,2293,2296,2299,2307,2311,2315,2319,2324,2327,2331,2335,2340,2344,
	2347,2351,2355,2359,2362,2369,2373,2377,2381,2386,2389,2392,2398,2402,2406,
	2410,2413,2417,2420,2423,2426,2429,2432,2436,2442,2446,2451,2459,2462,2466,
	2470,2472,2476,2480,2484,2487,2499,2503,2506,2509,2514,2516,2522,2524,2526,
	2535,2540,2544,2548,2552,2555,2564,2567,2571,2574,2587,2592,2595,2599,2603,
	2605,2607];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!vbaParser.__ATN) {
			vbaParser.__ATN = new ATNDeserializer().deserialize(vbaParser._serializedATN);
		}

		return vbaParser.__ATN;
	}


	static DecisionsToDFA = vbaParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class StartRuleContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public module_(): ModuleContext {
		return this.getTypedRuleContext(ModuleContext, 0) as ModuleContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(vbaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_startRule;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterStartRule) {
	 		listener.enterStartRule(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitStartRule) {
	 		listener.exitStartRule(this);
		}
	}
}


export class ModuleContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public endOfLine_list(): EndOfLineContext[] {
		return this.getTypedRuleContexts(EndOfLineContext) as EndOfLineContext[];
	}
	public endOfLine(i: number): EndOfLineContext {
		return this.getTypedRuleContext(EndOfLineContext, i) as EndOfLineContext;
	}
	public moduleHeader(): ModuleHeaderContext {
		return this.getTypedRuleContext(ModuleHeaderContext, 0) as ModuleHeaderContext;
	}
	public moduleConfig(): ModuleConfigContext {
		return this.getTypedRuleContext(ModuleConfigContext, 0) as ModuleConfigContext;
	}
	public moduleAttributes(): ModuleAttributesContext {
		return this.getTypedRuleContext(ModuleAttributesContext, 0) as ModuleAttributesContext;
	}
	public moduleDeclarations(): ModuleDeclarationsContext {
		return this.getTypedRuleContext(ModuleDeclarationsContext, 0) as ModuleDeclarationsContext;
	}
	public moduleBody(): ModuleBodyContext {
		return this.getTypedRuleContext(ModuleBodyContext, 0) as ModuleBodyContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_module;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterModule) {
	 		listener.enterModule(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitModule) {
	 		listener.exitModule(this);
		}
	}
}


export class ModuleHeaderContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VERSION(): TerminalNode {
		return this.getToken(vbaParser.VERSION, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public DOUBLELITERAL(): TerminalNode {
		return this.getToken(vbaParser.DOUBLELITERAL, 0);
	}
	public CLASS(): TerminalNode {
		return this.getToken(vbaParser.CLASS, 0);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_moduleHeader;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterModuleHeader) {
	 		listener.enterModuleHeader(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitModuleHeader) {
	 		listener.exitModuleHeader(this);
		}
	}
}


export class ModuleConfigContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BEGIN(): TerminalNode {
		return this.getToken(vbaParser.BEGIN, 0);
	}
	public END(): TerminalNode {
		return this.getToken(vbaParser.END, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public GUID(): TerminalNode {
		return this.getToken(vbaParser.GUID, 0);
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getTypedRuleContext(AmbiguousIdentifierContext, 0) as AmbiguousIdentifierContext;
	}
	public endOfLine_list(): EndOfLineContext[] {
		return this.getTypedRuleContexts(EndOfLineContext) as EndOfLineContext[];
	}
	public endOfLine(i: number): EndOfLineContext {
		return this.getTypedRuleContext(EndOfLineContext, i) as EndOfLineContext;
	}
	public moduleConfigElement_list(): ModuleConfigElementContext[] {
		return this.getTypedRuleContexts(ModuleConfigElementContext) as ModuleConfigElementContext[];
	}
	public moduleConfigElement(i: number): ModuleConfigElementContext {
		return this.getTypedRuleContext(ModuleConfigElementContext, i) as ModuleConfigElementContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_moduleConfig;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterModuleConfig) {
	 		listener.enterModuleConfig(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitModuleConfig) {
	 		listener.exitModuleConfig(this);
		}
	}
}


export class ModuleConfigElementContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getTypedRuleContext(AmbiguousIdentifierContext, 0) as AmbiguousIdentifierContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(vbaParser.EQ, 0);
	}
	public literal_list(): LiteralContext[] {
		return this.getTypedRuleContexts(LiteralContext) as LiteralContext[];
	}
	public literal(i: number): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, i) as LiteralContext;
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public COLON(): TerminalNode {
		return this.getToken(vbaParser.COLON, 0);
	}
	public endOfLine_list(): EndOfLineContext[] {
		return this.getTypedRuleContexts(EndOfLineContext) as EndOfLineContext[];
	}
	public endOfLine(i: number): EndOfLineContext {
		return this.getTypedRuleContext(EndOfLineContext, i) as EndOfLineContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_moduleConfigElement;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterModuleConfigElement) {
	 		listener.enterModuleConfigElement(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitModuleConfigElement) {
	 		listener.exitModuleConfigElement(this);
		}
	}
}


export class ModuleAttributesContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public attributeStmt_list(): AttributeStmtContext[] {
		return this.getTypedRuleContexts(AttributeStmtContext) as AttributeStmtContext[];
	}
	public attributeStmt(i: number): AttributeStmtContext {
		return this.getTypedRuleContext(AttributeStmtContext, i) as AttributeStmtContext;
	}
	public endOfLine_list(): EndOfLineContext[] {
		return this.getTypedRuleContexts(EndOfLineContext) as EndOfLineContext[];
	}
	public endOfLine(i: number): EndOfLineContext {
		return this.getTypedRuleContext(EndOfLineContext, i) as EndOfLineContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_moduleAttributes;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterModuleAttributes) {
	 		listener.enterModuleAttributes(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitModuleAttributes) {
	 		listener.exitModuleAttributes(this);
		}
	}
}


export class ModuleDeclarationsContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public moduleDeclarationsElement_list(): ModuleDeclarationsElementContext[] {
		return this.getTypedRuleContexts(ModuleDeclarationsElementContext) as ModuleDeclarationsElementContext[];
	}
	public moduleDeclarationsElement(i: number): ModuleDeclarationsElementContext {
		return this.getTypedRuleContext(ModuleDeclarationsElementContext, i) as ModuleDeclarationsElementContext;
	}
	public endOfLine_list(): EndOfLineContext[] {
		return this.getTypedRuleContexts(EndOfLineContext) as EndOfLineContext[];
	}
	public endOfLine(i: number): EndOfLineContext {
		return this.getTypedRuleContext(EndOfLineContext, i) as EndOfLineContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_moduleDeclarations;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterModuleDeclarations) {
	 		listener.enterModuleDeclarations(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitModuleDeclarations) {
	 		listener.exitModuleDeclarations(this);
		}
	}
}


export class ModuleOptionContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_moduleOption;
	}
	public override copyFrom(ctx: ModuleOptionContext): void {
		super.copyFrom(ctx);
	}
}
export class OptionExplicitStmtContext extends ModuleOptionContext {
	constructor(parser: vbaParser, ctx: ModuleOptionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OPTION_EXPLICIT(): TerminalNode {
		return this.getToken(vbaParser.OPTION_EXPLICIT, 0);
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterOptionExplicitStmt) {
	 		listener.enterOptionExplicitStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitOptionExplicitStmt) {
	 		listener.exitOptionExplicitStmt(this);
		}
	}
}
export class OptionBaseStmtContext extends ModuleOptionContext {
	constructor(parser: vbaParser, ctx: ModuleOptionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OPTION_BASE(): TerminalNode {
		return this.getToken(vbaParser.OPTION_BASE, 0);
	}
	public WS(): TerminalNode {
		return this.getToken(vbaParser.WS, 0);
	}
	public SHORTLITERAL(): TerminalNode {
		return this.getToken(vbaParser.SHORTLITERAL, 0);
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterOptionBaseStmt) {
	 		listener.enterOptionBaseStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitOptionBaseStmt) {
	 		listener.exitOptionBaseStmt(this);
		}
	}
}
export class OptionPrivateModuleStmtContext extends ModuleOptionContext {
	constructor(parser: vbaParser, ctx: ModuleOptionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OPTION_PRIVATE_MODULE(): TerminalNode {
		return this.getToken(vbaParser.OPTION_PRIVATE_MODULE, 0);
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterOptionPrivateModuleStmt) {
	 		listener.enterOptionPrivateModuleStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitOptionPrivateModuleStmt) {
	 		listener.exitOptionPrivateModuleStmt(this);
		}
	}
}
export class OptionCompareStmtContext extends ModuleOptionContext {
	constructor(parser: vbaParser, ctx: ModuleOptionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OPTION_COMPARE(): TerminalNode {
		return this.getToken(vbaParser.OPTION_COMPARE, 0);
	}
	public WS(): TerminalNode {
		return this.getToken(vbaParser.WS, 0);
	}
	public BINARY(): TerminalNode {
		return this.getToken(vbaParser.BINARY, 0);
	}
	public TEXT(): TerminalNode {
		return this.getToken(vbaParser.TEXT, 0);
	}
	public DATABASE(): TerminalNode {
		return this.getToken(vbaParser.DATABASE, 0);
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterOptionCompareStmt) {
	 		listener.enterOptionCompareStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitOptionCompareStmt) {
	 		listener.exitOptionCompareStmt(this);
		}
	}
}


export class ModuleDeclarationsElementContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public comment(): CommentContext {
		return this.getTypedRuleContext(CommentContext, 0) as CommentContext;
	}
	public declareStmt(): DeclareStmtContext {
		return this.getTypedRuleContext(DeclareStmtContext, 0) as DeclareStmtContext;
	}
	public enumerationStmt(): EnumerationStmtContext {
		return this.getTypedRuleContext(EnumerationStmtContext, 0) as EnumerationStmtContext;
	}
	public eventStmt(): EventStmtContext {
		return this.getTypedRuleContext(EventStmtContext, 0) as EventStmtContext;
	}
	public constStmt(): ConstStmtContext {
		return this.getTypedRuleContext(ConstStmtContext, 0) as ConstStmtContext;
	}
	public implementsStmt(): ImplementsStmtContext {
		return this.getTypedRuleContext(ImplementsStmtContext, 0) as ImplementsStmtContext;
	}
	public variableStmt(): VariableStmtContext {
		return this.getTypedRuleContext(VariableStmtContext, 0) as VariableStmtContext;
	}
	public moduleOption(): ModuleOptionContext {
		return this.getTypedRuleContext(ModuleOptionContext, 0) as ModuleOptionContext;
	}
	public typeStmt(): TypeStmtContext {
		return this.getTypedRuleContext(TypeStmtContext, 0) as TypeStmtContext;
	}
	public deftypeStmt(): DeftypeStmtContext {
		return this.getTypedRuleContext(DeftypeStmtContext, 0) as DeftypeStmtContext;
	}
	public macroStmt(): MacroStmtContext {
		return this.getTypedRuleContext(MacroStmtContext, 0) as MacroStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_moduleDeclarationsElement;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterModuleDeclarationsElement) {
	 		listener.enterModuleDeclarationsElement(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitModuleDeclarationsElement) {
	 		listener.exitModuleDeclarationsElement(this);
		}
	}
}


export class MacroStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public macroConstStmt(): MacroConstStmtContext {
		return this.getTypedRuleContext(MacroConstStmtContext, 0) as MacroConstStmtContext;
	}
	public macroIfThenElseStmt(): MacroIfThenElseStmtContext {
		return this.getTypedRuleContext(MacroIfThenElseStmtContext, 0) as MacroIfThenElseStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_macroStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterMacroStmt) {
	 		listener.enterMacroStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitMacroStmt) {
	 		listener.exitMacroStmt(this);
		}
	}
}


export class ModuleBodyContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public moduleBodyElement_list(): ModuleBodyElementContext[] {
		return this.getTypedRuleContexts(ModuleBodyElementContext) as ModuleBodyElementContext[];
	}
	public moduleBodyElement(i: number): ModuleBodyElementContext {
		return this.getTypedRuleContext(ModuleBodyElementContext, i) as ModuleBodyElementContext;
	}
	public endOfLine_list(): EndOfLineContext[] {
		return this.getTypedRuleContexts(EndOfLineContext) as EndOfLineContext[];
	}
	public endOfLine(i: number): EndOfLineContext {
		return this.getTypedRuleContext(EndOfLineContext, i) as EndOfLineContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_moduleBody;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterModuleBody) {
	 		listener.enterModuleBody(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitModuleBody) {
	 		listener.exitModuleBody(this);
		}
	}
}


export class ModuleBodyElementContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public functionStmt(): FunctionStmtContext {
		return this.getTypedRuleContext(FunctionStmtContext, 0) as FunctionStmtContext;
	}
	public propertyGetStmt(): PropertyGetStmtContext {
		return this.getTypedRuleContext(PropertyGetStmtContext, 0) as PropertyGetStmtContext;
	}
	public propertySetStmt(): PropertySetStmtContext {
		return this.getTypedRuleContext(PropertySetStmtContext, 0) as PropertySetStmtContext;
	}
	public propertyLetStmt(): PropertyLetStmtContext {
		return this.getTypedRuleContext(PropertyLetStmtContext, 0) as PropertyLetStmtContext;
	}
	public subStmt(): SubStmtContext {
		return this.getTypedRuleContext(SubStmtContext, 0) as SubStmtContext;
	}
	public macroStmt(): MacroStmtContext {
		return this.getTypedRuleContext(MacroStmtContext, 0) as MacroStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_moduleBodyElement;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterModuleBodyElement) {
	 		listener.enterModuleBodyElement(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitModuleBodyElement) {
	 		listener.exitModuleBodyElement(this);
		}
	}
}


export class AttributeStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ATTRIBUTE(): TerminalNode {
		return this.getToken(vbaParser.ATTRIBUTE, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getTypedRuleContext(ImplicitCallStmt_InStmtContext, 0) as ImplicitCallStmt_InStmtContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(vbaParser.EQ, 0);
	}
	public literal_list(): LiteralContext[] {
		return this.getTypedRuleContexts(LiteralContext) as LiteralContext[];
	}
	public literal(i: number): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, i) as LiteralContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_attributeStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterAttributeStmt) {
	 		listener.enterAttributeStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitAttributeStmt) {
	 		listener.exitAttributeStmt(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public blockStmt_list(): BlockStmtContext[] {
		return this.getTypedRuleContexts(BlockStmtContext) as BlockStmtContext[];
	}
	public blockStmt(i: number): BlockStmtContext {
		return this.getTypedRuleContext(BlockStmtContext, i) as BlockStmtContext;
	}
	public endOfStatement_list(): EndOfStatementContext[] {
		return this.getTypedRuleContexts(EndOfStatementContext) as EndOfStatementContext[];
	}
	public endOfStatement(i: number): EndOfStatementContext {
		return this.getTypedRuleContext(EndOfStatementContext, i) as EndOfStatementContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_block;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterBlock) {
	 		listener.enterBlock(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitBlock) {
	 		listener.exitBlock(this);
		}
	}
}


export class BlockStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public lineLabel(): LineLabelContext {
		return this.getTypedRuleContext(LineLabelContext, 0) as LineLabelContext;
	}
	public appactivateStmt(): AppactivateStmtContext {
		return this.getTypedRuleContext(AppactivateStmtContext, 0) as AppactivateStmtContext;
	}
	public attributeStmt(): AttributeStmtContext {
		return this.getTypedRuleContext(AttributeStmtContext, 0) as AttributeStmtContext;
	}
	public beepStmt(): BeepStmtContext {
		return this.getTypedRuleContext(BeepStmtContext, 0) as BeepStmtContext;
	}
	public chdirStmt(): ChdirStmtContext {
		return this.getTypedRuleContext(ChdirStmtContext, 0) as ChdirStmtContext;
	}
	public chdriveStmt(): ChdriveStmtContext {
		return this.getTypedRuleContext(ChdriveStmtContext, 0) as ChdriveStmtContext;
	}
	public closeStmt(): CloseStmtContext {
		return this.getTypedRuleContext(CloseStmtContext, 0) as CloseStmtContext;
	}
	public constStmt(): ConstStmtContext {
		return this.getTypedRuleContext(ConstStmtContext, 0) as ConstStmtContext;
	}
	public dateStmt(): DateStmtContext {
		return this.getTypedRuleContext(DateStmtContext, 0) as DateStmtContext;
	}
	public deleteSettingStmt(): DeleteSettingStmtContext {
		return this.getTypedRuleContext(DeleteSettingStmtContext, 0) as DeleteSettingStmtContext;
	}
	public doLoopStmt(): DoLoopStmtContext {
		return this.getTypedRuleContext(DoLoopStmtContext, 0) as DoLoopStmtContext;
	}
	public endStmt(): EndStmtContext {
		return this.getTypedRuleContext(EndStmtContext, 0) as EndStmtContext;
	}
	public eraseStmt(): EraseStmtContext {
		return this.getTypedRuleContext(EraseStmtContext, 0) as EraseStmtContext;
	}
	public errorStmt(): ErrorStmtContext {
		return this.getTypedRuleContext(ErrorStmtContext, 0) as ErrorStmtContext;
	}
	public exitStmt(): ExitStmtContext {
		return this.getTypedRuleContext(ExitStmtContext, 0) as ExitStmtContext;
	}
	public explicitCallStmt(): ExplicitCallStmtContext {
		return this.getTypedRuleContext(ExplicitCallStmtContext, 0) as ExplicitCallStmtContext;
	}
	public filecopyStmt(): FilecopyStmtContext {
		return this.getTypedRuleContext(FilecopyStmtContext, 0) as FilecopyStmtContext;
	}
	public forEachStmt(): ForEachStmtContext {
		return this.getTypedRuleContext(ForEachStmtContext, 0) as ForEachStmtContext;
	}
	public forNextStmt(): ForNextStmtContext {
		return this.getTypedRuleContext(ForNextStmtContext, 0) as ForNextStmtContext;
	}
	public getStmt(): GetStmtContext {
		return this.getTypedRuleContext(GetStmtContext, 0) as GetStmtContext;
	}
	public goSubStmt(): GoSubStmtContext {
		return this.getTypedRuleContext(GoSubStmtContext, 0) as GoSubStmtContext;
	}
	public goToStmt(): GoToStmtContext {
		return this.getTypedRuleContext(GoToStmtContext, 0) as GoToStmtContext;
	}
	public ifThenElseStmt(): IfThenElseStmtContext {
		return this.getTypedRuleContext(IfThenElseStmtContext, 0) as IfThenElseStmtContext;
	}
	public implementsStmt(): ImplementsStmtContext {
		return this.getTypedRuleContext(ImplementsStmtContext, 0) as ImplementsStmtContext;
	}
	public inputStmt(): InputStmtContext {
		return this.getTypedRuleContext(InputStmtContext, 0) as InputStmtContext;
	}
	public killStmt(): KillStmtContext {
		return this.getTypedRuleContext(KillStmtContext, 0) as KillStmtContext;
	}
	public letStmt(): LetStmtContext {
		return this.getTypedRuleContext(LetStmtContext, 0) as LetStmtContext;
	}
	public lineInputStmt(): LineInputStmtContext {
		return this.getTypedRuleContext(LineInputStmtContext, 0) as LineInputStmtContext;
	}
	public lineNumber(): LineNumberContext {
		return this.getTypedRuleContext(LineNumberContext, 0) as LineNumberContext;
	}
	public loadStmt(): LoadStmtContext {
		return this.getTypedRuleContext(LoadStmtContext, 0) as LoadStmtContext;
	}
	public lockStmt(): LockStmtContext {
		return this.getTypedRuleContext(LockStmtContext, 0) as LockStmtContext;
	}
	public lsetStmt(): LsetStmtContext {
		return this.getTypedRuleContext(LsetStmtContext, 0) as LsetStmtContext;
	}
	public macroStmt(): MacroStmtContext {
		return this.getTypedRuleContext(MacroStmtContext, 0) as MacroStmtContext;
	}
	public midStmt(): MidStmtContext {
		return this.getTypedRuleContext(MidStmtContext, 0) as MidStmtContext;
	}
	public mkdirStmt(): MkdirStmtContext {
		return this.getTypedRuleContext(MkdirStmtContext, 0) as MkdirStmtContext;
	}
	public nameStmt(): NameStmtContext {
		return this.getTypedRuleContext(NameStmtContext, 0) as NameStmtContext;
	}
	public onErrorStmt(): OnErrorStmtContext {
		return this.getTypedRuleContext(OnErrorStmtContext, 0) as OnErrorStmtContext;
	}
	public onGoToStmt(): OnGoToStmtContext {
		return this.getTypedRuleContext(OnGoToStmtContext, 0) as OnGoToStmtContext;
	}
	public onGoSubStmt(): OnGoSubStmtContext {
		return this.getTypedRuleContext(OnGoSubStmtContext, 0) as OnGoSubStmtContext;
	}
	public openStmt(): OpenStmtContext {
		return this.getTypedRuleContext(OpenStmtContext, 0) as OpenStmtContext;
	}
	public printStmt(): PrintStmtContext {
		return this.getTypedRuleContext(PrintStmtContext, 0) as PrintStmtContext;
	}
	public putStmt(): PutStmtContext {
		return this.getTypedRuleContext(PutStmtContext, 0) as PutStmtContext;
	}
	public raiseEventStmt(): RaiseEventStmtContext {
		return this.getTypedRuleContext(RaiseEventStmtContext, 0) as RaiseEventStmtContext;
	}
	public randomizeStmt(): RandomizeStmtContext {
		return this.getTypedRuleContext(RandomizeStmtContext, 0) as RandomizeStmtContext;
	}
	public redimStmt(): RedimStmtContext {
		return this.getTypedRuleContext(RedimStmtContext, 0) as RedimStmtContext;
	}
	public resetStmt(): ResetStmtContext {
		return this.getTypedRuleContext(ResetStmtContext, 0) as ResetStmtContext;
	}
	public resumeStmt(): ResumeStmtContext {
		return this.getTypedRuleContext(ResumeStmtContext, 0) as ResumeStmtContext;
	}
	public returnStmt(): ReturnStmtContext {
		return this.getTypedRuleContext(ReturnStmtContext, 0) as ReturnStmtContext;
	}
	public rmdirStmt(): RmdirStmtContext {
		return this.getTypedRuleContext(RmdirStmtContext, 0) as RmdirStmtContext;
	}
	public rsetStmt(): RsetStmtContext {
		return this.getTypedRuleContext(RsetStmtContext, 0) as RsetStmtContext;
	}
	public savepictureStmt(): SavepictureStmtContext {
		return this.getTypedRuleContext(SavepictureStmtContext, 0) as SavepictureStmtContext;
	}
	public saveSettingStmt(): SaveSettingStmtContext {
		return this.getTypedRuleContext(SaveSettingStmtContext, 0) as SaveSettingStmtContext;
	}
	public seekStmt(): SeekStmtContext {
		return this.getTypedRuleContext(SeekStmtContext, 0) as SeekStmtContext;
	}
	public selectCaseStmt(): SelectCaseStmtContext {
		return this.getTypedRuleContext(SelectCaseStmtContext, 0) as SelectCaseStmtContext;
	}
	public sendkeysStmt(): SendkeysStmtContext {
		return this.getTypedRuleContext(SendkeysStmtContext, 0) as SendkeysStmtContext;
	}
	public setattrStmt(): SetattrStmtContext {
		return this.getTypedRuleContext(SetattrStmtContext, 0) as SetattrStmtContext;
	}
	public setStmt(): SetStmtContext {
		return this.getTypedRuleContext(SetStmtContext, 0) as SetStmtContext;
	}
	public stopStmt(): StopStmtContext {
		return this.getTypedRuleContext(StopStmtContext, 0) as StopStmtContext;
	}
	public timeStmt(): TimeStmtContext {
		return this.getTypedRuleContext(TimeStmtContext, 0) as TimeStmtContext;
	}
	public unloadStmt(): UnloadStmtContext {
		return this.getTypedRuleContext(UnloadStmtContext, 0) as UnloadStmtContext;
	}
	public unlockStmt(): UnlockStmtContext {
		return this.getTypedRuleContext(UnlockStmtContext, 0) as UnlockStmtContext;
	}
	public variableStmt(): VariableStmtContext {
		return this.getTypedRuleContext(VariableStmtContext, 0) as VariableStmtContext;
	}
	public whileWendStmt(): WhileWendStmtContext {
		return this.getTypedRuleContext(WhileWendStmtContext, 0) as WhileWendStmtContext;
	}
	public widthStmt(): WidthStmtContext {
		return this.getTypedRuleContext(WidthStmtContext, 0) as WidthStmtContext;
	}
	public withStmt(): WithStmtContext {
		return this.getTypedRuleContext(WithStmtContext, 0) as WithStmtContext;
	}
	public writeStmt(): WriteStmtContext {
		return this.getTypedRuleContext(WriteStmtContext, 0) as WriteStmtContext;
	}
	public implicitCallStmt_InBlock(): ImplicitCallStmt_InBlockContext {
		return this.getTypedRuleContext(ImplicitCallStmt_InBlockContext, 0) as ImplicitCallStmt_InBlockContext;
	}
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getTypedRuleContext(ImplicitCallStmt_InStmtContext, 0) as ImplicitCallStmt_InStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_blockStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterBlockStmt) {
	 		listener.enterBlockStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitBlockStmt) {
	 		listener.exitBlockStmt(this);
		}
	}
}


export class AppactivateStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public APPACTIVATE(): TerminalNode {
		return this.getToken(vbaParser.APPACTIVATE, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public valueStmt_list(): ValueStmtContext[] {
		return this.getTypedRuleContexts(ValueStmtContext) as ValueStmtContext[];
	}
	public valueStmt(i: number): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, i) as ValueStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_appactivateStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterAppactivateStmt) {
	 		listener.enterAppactivateStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitAppactivateStmt) {
	 		listener.exitAppactivateStmt(this);
		}
	}
}


export class BeepStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BEEP(): TerminalNode {
		return this.getToken(vbaParser.BEEP, 0);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_beepStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterBeepStmt) {
	 		listener.enterBeepStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitBeepStmt) {
	 		listener.exitBeepStmt(this);
		}
	}
}


export class ChdirStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHDIR(): TerminalNode {
		return this.getToken(vbaParser.CHDIR, 0);
	}
	public WS(): TerminalNode {
		return this.getToken(vbaParser.WS, 0);
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_chdirStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterChdirStmt) {
	 		listener.enterChdirStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitChdirStmt) {
	 		listener.exitChdirStmt(this);
		}
	}
}


export class ChdriveStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHDRIVE(): TerminalNode {
		return this.getToken(vbaParser.CHDRIVE, 0);
	}
	public WS(): TerminalNode {
		return this.getToken(vbaParser.WS, 0);
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_chdriveStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterChdriveStmt) {
	 		listener.enterChdriveStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitChdriveStmt) {
	 		listener.exitChdriveStmt(this);
		}
	}
}


export class CloseStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CLOSE(): TerminalNode {
		return this.getToken(vbaParser.CLOSE, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public fileNumber_list(): FileNumberContext[] {
		return this.getTypedRuleContexts(FileNumberContext) as FileNumberContext[];
	}
	public fileNumber(i: number): FileNumberContext {
		return this.getTypedRuleContext(FileNumberContext, i) as FileNumberContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_closeStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterCloseStmt) {
	 		listener.enterCloseStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitCloseStmt) {
	 		listener.exitCloseStmt(this);
		}
	}
}


export class ConstStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CONST(): TerminalNode {
		return this.getToken(vbaParser.CONST, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public constSubStmt_list(): ConstSubStmtContext[] {
		return this.getTypedRuleContexts(ConstSubStmtContext) as ConstSubStmtContext[];
	}
	public constSubStmt(i: number): ConstSubStmtContext {
		return this.getTypedRuleContext(ConstSubStmtContext, i) as ConstSubStmtContext;
	}
	public visibility(): VisibilityContext {
		return this.getTypedRuleContext(VisibilityContext, 0) as VisibilityContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_constStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterConstStmt) {
	 		listener.enterConstStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitConstStmt) {
	 		listener.exitConstStmt(this);
		}
	}
}


export class ConstSubStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getTypedRuleContext(AmbiguousIdentifierContext, 0) as AmbiguousIdentifierContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(vbaParser.EQ, 0);
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
	public typeHint(): TypeHintContext {
		return this.getTypedRuleContext(TypeHintContext, 0) as TypeHintContext;
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public asTypeClause(): AsTypeClauseContext {
		return this.getTypedRuleContext(AsTypeClauseContext, 0) as AsTypeClauseContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_constSubStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterConstSubStmt) {
	 		listener.enterConstSubStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitConstSubStmt) {
	 		listener.exitConstSubStmt(this);
		}
	}
}


export class DateStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DATE(): TerminalNode {
		return this.getToken(vbaParser.DATE, 0);
	}
	public EQ(): TerminalNode {
		return this.getToken(vbaParser.EQ, 0);
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_dateStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterDateStmt) {
	 		listener.enterDateStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitDateStmt) {
	 		listener.exitDateStmt(this);
		}
	}
}


export class DeclareStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DECLARE(): TerminalNode {
		return this.getToken(vbaParser.DECLARE, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getTypedRuleContext(AmbiguousIdentifierContext, 0) as AmbiguousIdentifierContext;
	}
	public LIB(): TerminalNode {
		return this.getToken(vbaParser.LIB, 0);
	}
	public STRINGLITERAL_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.STRINGLITERAL);
	}
	public STRINGLITERAL(i: number): TerminalNode {
		return this.getToken(vbaParser.STRINGLITERAL, i);
	}
	public SUB(): TerminalNode {
		return this.getToken(vbaParser.SUB, 0);
	}
	public visibility(): VisibilityContext {
		return this.getTypedRuleContext(VisibilityContext, 0) as VisibilityContext;
	}
	public PTRSAFE(): TerminalNode {
		return this.getToken(vbaParser.PTRSAFE, 0);
	}
	public typeHint_list(): TypeHintContext[] {
		return this.getTypedRuleContexts(TypeHintContext) as TypeHintContext[];
	}
	public typeHint(i: number): TypeHintContext {
		return this.getTypedRuleContext(TypeHintContext, i) as TypeHintContext;
	}
	public ALIAS(): TerminalNode {
		return this.getToken(vbaParser.ALIAS, 0);
	}
	public argList(): ArgListContext {
		return this.getTypedRuleContext(ArgListContext, 0) as ArgListContext;
	}
	public asTypeClause(): AsTypeClauseContext {
		return this.getTypedRuleContext(AsTypeClauseContext, 0) as AsTypeClauseContext;
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(vbaParser.FUNCTION, 0);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_declareStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterDeclareStmt) {
	 		listener.enterDeclareStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitDeclareStmt) {
	 		listener.exitDeclareStmt(this);
		}
	}
}


export class DeftypeStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public letterrange_list(): LetterrangeContext[] {
		return this.getTypedRuleContexts(LetterrangeContext) as LetterrangeContext[];
	}
	public letterrange(i: number): LetterrangeContext {
		return this.getTypedRuleContext(LetterrangeContext, i) as LetterrangeContext;
	}
	public DEFBOOL(): TerminalNode {
		return this.getToken(vbaParser.DEFBOOL, 0);
	}
	public DEFBYTE(): TerminalNode {
		return this.getToken(vbaParser.DEFBYTE, 0);
	}
	public DEFINT(): TerminalNode {
		return this.getToken(vbaParser.DEFINT, 0);
	}
	public DEFLNG(): TerminalNode {
		return this.getToken(vbaParser.DEFLNG, 0);
	}
	public DEFCUR(): TerminalNode {
		return this.getToken(vbaParser.DEFCUR, 0);
	}
	public DEFSNG(): TerminalNode {
		return this.getToken(vbaParser.DEFSNG, 0);
	}
	public DEFDBL(): TerminalNode {
		return this.getToken(vbaParser.DEFDBL, 0);
	}
	public DEFDEC(): TerminalNode {
		return this.getToken(vbaParser.DEFDEC, 0);
	}
	public DEFDATE(): TerminalNode {
		return this.getToken(vbaParser.DEFDATE, 0);
	}
	public DEFSTR(): TerminalNode {
		return this.getToken(vbaParser.DEFSTR, 0);
	}
	public DEFOBJ(): TerminalNode {
		return this.getToken(vbaParser.DEFOBJ, 0);
	}
	public DEFVAR(): TerminalNode {
		return this.getToken(vbaParser.DEFVAR, 0);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_deftypeStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterDeftypeStmt) {
	 		listener.enterDeftypeStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitDeftypeStmt) {
	 		listener.exitDeftypeStmt(this);
		}
	}
}


export class DeleteSettingStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DELETESETTING(): TerminalNode {
		return this.getToken(vbaParser.DELETESETTING, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public valueStmt_list(): ValueStmtContext[] {
		return this.getTypedRuleContexts(ValueStmtContext) as ValueStmtContext[];
	}
	public valueStmt(i: number): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, i) as ValueStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_deleteSettingStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterDeleteSettingStmt) {
	 		listener.enterDeleteSettingStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitDeleteSettingStmt) {
	 		listener.exitDeleteSettingStmt(this);
		}
	}
}


export class DoLoopStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DO(): TerminalNode {
		return this.getToken(vbaParser.DO, 0);
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getTypedRuleContext(EndOfStatementContext, 0) as EndOfStatementContext;
	}
	public LOOP(): TerminalNode {
		return this.getToken(vbaParser.LOOP, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
	public WHILE(): TerminalNode {
		return this.getToken(vbaParser.WHILE, 0);
	}
	public UNTIL(): TerminalNode {
		return this.getToken(vbaParser.UNTIL, 0);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_doLoopStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterDoLoopStmt) {
	 		listener.enterDoLoopStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitDoLoopStmt) {
	 		listener.exitDoLoopStmt(this);
		}
	}
}


export class EndStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public END(): TerminalNode {
		return this.getToken(vbaParser.END, 0);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_endStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterEndStmt) {
	 		listener.enterEndStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitEndStmt) {
	 		listener.exitEndStmt(this);
		}
	}
}


export class EnumerationStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ENUM(): TerminalNode {
		return this.getToken(vbaParser.ENUM, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getTypedRuleContext(AmbiguousIdentifierContext, 0) as AmbiguousIdentifierContext;
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getTypedRuleContext(EndOfStatementContext, 0) as EndOfStatementContext;
	}
	public END_ENUM(): TerminalNode {
		return this.getToken(vbaParser.END_ENUM, 0);
	}
	public visibility(): VisibilityContext {
		return this.getTypedRuleContext(VisibilityContext, 0) as VisibilityContext;
	}
	public enumerationStmt_Constant_list(): EnumerationStmt_ConstantContext[] {
		return this.getTypedRuleContexts(EnumerationStmt_ConstantContext) as EnumerationStmt_ConstantContext[];
	}
	public enumerationStmt_Constant(i: number): EnumerationStmt_ConstantContext {
		return this.getTypedRuleContext(EnumerationStmt_ConstantContext, i) as EnumerationStmt_ConstantContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_enumerationStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterEnumerationStmt) {
	 		listener.enterEnumerationStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitEnumerationStmt) {
	 		listener.exitEnumerationStmt(this);
		}
	}
}


export class EnumerationStmt_ConstantContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getTypedRuleContext(AmbiguousIdentifierContext, 0) as AmbiguousIdentifierContext;
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getTypedRuleContext(EndOfStatementContext, 0) as EndOfStatementContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(vbaParser.EQ, 0);
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_enumerationStmt_Constant;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterEnumerationStmt_Constant) {
	 		listener.enterEnumerationStmt_Constant(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitEnumerationStmt_Constant) {
	 		listener.exitEnumerationStmt_Constant(this);
		}
	}
}


export class EraseStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ERASE(): TerminalNode {
		return this.getToken(vbaParser.ERASE, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public valueStmt_list(): ValueStmtContext[] {
		return this.getTypedRuleContexts(ValueStmtContext) as ValueStmtContext[];
	}
	public valueStmt(i: number): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, i) as ValueStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_eraseStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterEraseStmt) {
	 		listener.enterEraseStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitEraseStmt) {
	 		listener.exitEraseStmt(this);
		}
	}
}


export class ErrorStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ERROR(): TerminalNode {
		return this.getToken(vbaParser.ERROR, 0);
	}
	public WS(): TerminalNode {
		return this.getToken(vbaParser.WS, 0);
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_errorStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterErrorStmt) {
	 		listener.enterErrorStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitErrorStmt) {
	 		listener.exitErrorStmt(this);
		}
	}
}


export class EventStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EVENT(): TerminalNode {
		return this.getToken(vbaParser.EVENT, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getTypedRuleContext(AmbiguousIdentifierContext, 0) as AmbiguousIdentifierContext;
	}
	public argList(): ArgListContext {
		return this.getTypedRuleContext(ArgListContext, 0) as ArgListContext;
	}
	public visibility(): VisibilityContext {
		return this.getTypedRuleContext(VisibilityContext, 0) as VisibilityContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_eventStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterEventStmt) {
	 		listener.enterEventStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitEventStmt) {
	 		listener.exitEventStmt(this);
		}
	}
}


export class ExitStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXIT_DO(): TerminalNode {
		return this.getToken(vbaParser.EXIT_DO, 0);
	}
	public EXIT_FOR(): TerminalNode {
		return this.getToken(vbaParser.EXIT_FOR, 0);
	}
	public EXIT_FUNCTION(): TerminalNode {
		return this.getToken(vbaParser.EXIT_FUNCTION, 0);
	}
	public EXIT_PROPERTY(): TerminalNode {
		return this.getToken(vbaParser.EXIT_PROPERTY, 0);
	}
	public EXIT_SUB(): TerminalNode {
		return this.getToken(vbaParser.EXIT_SUB, 0);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_exitStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterExitStmt) {
	 		listener.enterExitStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitExitStmt) {
	 		listener.exitExitStmt(this);
		}
	}
}


export class FilecopyStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FILECOPY(): TerminalNode {
		return this.getToken(vbaParser.FILECOPY, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public valueStmt_list(): ValueStmtContext[] {
		return this.getTypedRuleContexts(ValueStmtContext) as ValueStmtContext[];
	}
	public valueStmt(i: number): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, i) as ValueStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_filecopyStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterFilecopyStmt) {
	 		listener.enterFilecopyStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitFilecopyStmt) {
	 		listener.exitFilecopyStmt(this);
		}
	}
}


export class ForEachStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FOR(): TerminalNode {
		return this.getToken(vbaParser.FOR, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public EACH(): TerminalNode {
		return this.getToken(vbaParser.EACH, 0);
	}
	public ambiguousIdentifier_list(): AmbiguousIdentifierContext[] {
		return this.getTypedRuleContexts(AmbiguousIdentifierContext) as AmbiguousIdentifierContext[];
	}
	public ambiguousIdentifier(i: number): AmbiguousIdentifierContext {
		return this.getTypedRuleContext(AmbiguousIdentifierContext, i) as AmbiguousIdentifierContext;
	}
	public IN(): TerminalNode {
		return this.getToken(vbaParser.IN, 0);
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getTypedRuleContext(EndOfStatementContext, 0) as EndOfStatementContext;
	}
	public NEXT(): TerminalNode {
		return this.getToken(vbaParser.NEXT, 0);
	}
	public typeHint(): TypeHintContext {
		return this.getTypedRuleContext(TypeHintContext, 0) as TypeHintContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_forEachStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterForEachStmt) {
	 		listener.enterForEachStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitForEachStmt) {
	 		listener.exitForEachStmt(this);
		}
	}
}


export class ForNextStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FOR(): TerminalNode {
		return this.getToken(vbaParser.FOR, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public ambiguousIdentifier_list(): AmbiguousIdentifierContext[] {
		return this.getTypedRuleContexts(AmbiguousIdentifierContext) as AmbiguousIdentifierContext[];
	}
	public ambiguousIdentifier(i: number): AmbiguousIdentifierContext {
		return this.getTypedRuleContext(AmbiguousIdentifierContext, i) as AmbiguousIdentifierContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(vbaParser.EQ, 0);
	}
	public valueStmt_list(): ValueStmtContext[] {
		return this.getTypedRuleContexts(ValueStmtContext) as ValueStmtContext[];
	}
	public valueStmt(i: number): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, i) as ValueStmtContext;
	}
	public TO(): TerminalNode {
		return this.getToken(vbaParser.TO, 0);
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getTypedRuleContext(EndOfStatementContext, 0) as EndOfStatementContext;
	}
	public NEXT(): TerminalNode {
		return this.getToken(vbaParser.NEXT, 0);
	}
	public typeHint(): TypeHintContext {
		return this.getTypedRuleContext(TypeHintContext, 0) as TypeHintContext;
	}
	public asTypeClause(): AsTypeClauseContext {
		return this.getTypedRuleContext(AsTypeClauseContext, 0) as AsTypeClauseContext;
	}
	public STEP(): TerminalNode {
		return this.getToken(vbaParser.STEP, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_forNextStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterForNextStmt) {
	 		listener.enterForNextStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitForNextStmt) {
	 		listener.exitForNextStmt(this);
		}
	}
}


export class FunctionStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(vbaParser.FUNCTION, 0);
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getTypedRuleContext(AmbiguousIdentifierContext, 0) as AmbiguousIdentifierContext;
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getTypedRuleContext(EndOfStatementContext, 0) as EndOfStatementContext;
	}
	public END_FUNCTION(): TerminalNode {
		return this.getToken(vbaParser.END_FUNCTION, 0);
	}
	public visibility(): VisibilityContext {
		return this.getTypedRuleContext(VisibilityContext, 0) as VisibilityContext;
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public STATIC(): TerminalNode {
		return this.getToken(vbaParser.STATIC, 0);
	}
	public typeHint(): TypeHintContext {
		return this.getTypedRuleContext(TypeHintContext, 0) as TypeHintContext;
	}
	public argList(): ArgListContext {
		return this.getTypedRuleContext(ArgListContext, 0) as ArgListContext;
	}
	public asTypeClause(): AsTypeClauseContext {
		return this.getTypedRuleContext(AsTypeClauseContext, 0) as AsTypeClauseContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_functionStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterFunctionStmt) {
	 		listener.enterFunctionStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitFunctionStmt) {
	 		listener.exitFunctionStmt(this);
		}
	}
}


export class GetStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public GET(): TerminalNode {
		return this.getToken(vbaParser.GET, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public fileNumber(): FileNumberContext {
		return this.getTypedRuleContext(FileNumberContext, 0) as FileNumberContext;
	}
	public valueStmt_list(): ValueStmtContext[] {
		return this.getTypedRuleContexts(ValueStmtContext) as ValueStmtContext[];
	}
	public valueStmt(i: number): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, i) as ValueStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_getStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterGetStmt) {
	 		listener.enterGetStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitGetStmt) {
	 		listener.exitGetStmt(this);
		}
	}
}


export class GoSubStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public GOSUB(): TerminalNode {
		return this.getToken(vbaParser.GOSUB, 0);
	}
	public WS(): TerminalNode {
		return this.getToken(vbaParser.WS, 0);
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_goSubStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterGoSubStmt) {
	 		listener.enterGoSubStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitGoSubStmt) {
	 		listener.exitGoSubStmt(this);
		}
	}
}


export class GoToStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public GOTO(): TerminalNode {
		return this.getToken(vbaParser.GOTO, 0);
	}
	public WS(): TerminalNode {
		return this.getToken(vbaParser.WS, 0);
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_goToStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterGoToStmt) {
	 		listener.enterGoToStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitGoToStmt) {
	 		listener.exitGoToStmt(this);
		}
	}
}


export class IfThenElseStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_ifThenElseStmt;
	}
	public override copyFrom(ctx: IfThenElseStmtContext): void {
		super.copyFrom(ctx);
	}
}
export class BlockIfThenElseContext extends IfThenElseStmtContext {
	constructor(parser: vbaParser, ctx: IfThenElseStmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ifBlockStmt(): IfBlockStmtContext {
		return this.getTypedRuleContext(IfBlockStmtContext, 0) as IfBlockStmtContext;
	}
	public END_IF(): TerminalNode {
		return this.getToken(vbaParser.END_IF, 0);
	}
	public ifElseIfBlockStmt_list(): IfElseIfBlockStmtContext[] {
		return this.getTypedRuleContexts(IfElseIfBlockStmtContext) as IfElseIfBlockStmtContext[];
	}
	public ifElseIfBlockStmt(i: number): IfElseIfBlockStmtContext {
		return this.getTypedRuleContext(IfElseIfBlockStmtContext, i) as IfElseIfBlockStmtContext;
	}
	public ifElseBlockStmt(): IfElseBlockStmtContext {
		return this.getTypedRuleContext(IfElseBlockStmtContext, 0) as IfElseBlockStmtContext;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterBlockIfThenElse) {
	 		listener.enterBlockIfThenElse(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitBlockIfThenElse) {
	 		listener.exitBlockIfThenElse(this);
		}
	}
}
export class InlineIfThenElseContext extends IfThenElseStmtContext {
	constructor(parser: vbaParser, ctx: IfThenElseStmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IF(): TerminalNode {
		return this.getToken(vbaParser.IF, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public ifConditionStmt(): IfConditionStmtContext {
		return this.getTypedRuleContext(IfConditionStmtContext, 0) as IfConditionStmtContext;
	}
	public THEN(): TerminalNode {
		return this.getToken(vbaParser.THEN, 0);
	}
	public blockStmt_list(): BlockStmtContext[] {
		return this.getTypedRuleContexts(BlockStmtContext) as BlockStmtContext[];
	}
	public blockStmt(i: number): BlockStmtContext {
		return this.getTypedRuleContext(BlockStmtContext, i) as BlockStmtContext;
	}
	public ELSE(): TerminalNode {
		return this.getToken(vbaParser.ELSE, 0);
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterInlineIfThenElse) {
	 		listener.enterInlineIfThenElse(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitInlineIfThenElse) {
	 		listener.exitInlineIfThenElse(this);
		}
	}
}


export class IfBlockStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(vbaParser.IF, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public ifConditionStmt(): IfConditionStmtContext {
		return this.getTypedRuleContext(IfConditionStmtContext, 0) as IfConditionStmtContext;
	}
	public THEN(): TerminalNode {
		return this.getToken(vbaParser.THEN, 0);
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getTypedRuleContext(EndOfStatementContext, 0) as EndOfStatementContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_ifBlockStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterIfBlockStmt) {
	 		listener.enterIfBlockStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitIfBlockStmt) {
	 		listener.exitIfBlockStmt(this);
		}
	}
}


export class IfConditionStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_ifConditionStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterIfConditionStmt) {
	 		listener.enterIfConditionStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitIfConditionStmt) {
	 		listener.exitIfConditionStmt(this);
		}
	}
}


export class IfElseIfBlockStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ELSEIF(): TerminalNode {
		return this.getToken(vbaParser.ELSEIF, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public ifConditionStmt(): IfConditionStmtContext {
		return this.getTypedRuleContext(IfConditionStmtContext, 0) as IfConditionStmtContext;
	}
	public THEN(): TerminalNode {
		return this.getToken(vbaParser.THEN, 0);
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getTypedRuleContext(EndOfStatementContext, 0) as EndOfStatementContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_ifElseIfBlockStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterIfElseIfBlockStmt) {
	 		listener.enterIfElseIfBlockStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitIfElseIfBlockStmt) {
	 		listener.exitIfElseIfBlockStmt(this);
		}
	}
}


export class IfElseBlockStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ELSE(): TerminalNode {
		return this.getToken(vbaParser.ELSE, 0);
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getTypedRuleContext(EndOfStatementContext, 0) as EndOfStatementContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_ifElseBlockStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterIfElseBlockStmt) {
	 		listener.enterIfElseBlockStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitIfElseBlockStmt) {
	 		listener.exitIfElseBlockStmt(this);
		}
	}
}


export class ImplementsStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IMPLEMENTS(): TerminalNode {
		return this.getToken(vbaParser.IMPLEMENTS, 0);
	}
	public WS(): TerminalNode {
		return this.getToken(vbaParser.WS, 0);
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getTypedRuleContext(AmbiguousIdentifierContext, 0) as AmbiguousIdentifierContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_implementsStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterImplementsStmt) {
	 		listener.enterImplementsStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitImplementsStmt) {
	 		listener.exitImplementsStmt(this);
		}
	}
}


export class InputStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INPUT(): TerminalNode {
		return this.getToken(vbaParser.INPUT, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public fileNumber(): FileNumberContext {
		return this.getTypedRuleContext(FileNumberContext, 0) as FileNumberContext;
	}
	public valueStmt_list(): ValueStmtContext[] {
		return this.getTypedRuleContexts(ValueStmtContext) as ValueStmtContext[];
	}
	public valueStmt(i: number): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, i) as ValueStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_inputStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterInputStmt) {
	 		listener.enterInputStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitInputStmt) {
	 		listener.exitInputStmt(this);
		}
	}
}


export class KillStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KILL(): TerminalNode {
		return this.getToken(vbaParser.KILL, 0);
	}
	public WS(): TerminalNode {
		return this.getToken(vbaParser.WS, 0);
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_killStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterKillStmt) {
	 		listener.enterKillStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitKillStmt) {
	 		listener.exitKillStmt(this);
		}
	}
}


export class LetStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getTypedRuleContext(ImplicitCallStmt_InStmtContext, 0) as ImplicitCallStmt_InStmtContext;
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(vbaParser.EQ, 0);
	}
	public PLUS_EQ(): TerminalNode {
		return this.getToken(vbaParser.PLUS_EQ, 0);
	}
	public MINUS_EQ(): TerminalNode {
		return this.getToken(vbaParser.MINUS_EQ, 0);
	}
	public LET(): TerminalNode {
		return this.getToken(vbaParser.LET, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public typeHint_list(): TypeHintContext[] {
		return this.getTypedRuleContexts(TypeHintContext) as TypeHintContext[];
	}
	public typeHint(i: number): TypeHintContext {
		return this.getTypedRuleContext(TypeHintContext, i) as TypeHintContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_letStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterLetStmt) {
	 		listener.enterLetStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitLetStmt) {
	 		listener.exitLetStmt(this);
		}
	}
}


export class LineInputStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LINE_INPUT(): TerminalNode {
		return this.getToken(vbaParser.LINE_INPUT, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public fileNumber(): FileNumberContext {
		return this.getTypedRuleContext(FileNumberContext, 0) as FileNumberContext;
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_lineInputStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterLineInputStmt) {
	 		listener.enterLineInputStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitLineInputStmt) {
	 		listener.exitLineInputStmt(this);
		}
	}
}


export class LineNumberContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTEGERLITERAL(): TerminalNode {
		return this.getToken(vbaParser.INTEGERLITERAL, 0);
	}
	public SHORTLITERAL(): TerminalNode {
		return this.getToken(vbaParser.SHORTLITERAL, 0);
	}
	public NEWLINE_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.NEWLINE);
	}
	public NEWLINE(i: number): TerminalNode {
		return this.getToken(vbaParser.NEWLINE, i);
	}
	public COLON(): TerminalNode {
		return this.getToken(vbaParser.COLON, 0);
	}
	public WS(): TerminalNode {
		return this.getToken(vbaParser.WS, 0);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_lineNumber;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterLineNumber) {
	 		listener.enterLineNumber(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitLineNumber) {
	 		listener.exitLineNumber(this);
		}
	}
}


export class LoadStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LOAD(): TerminalNode {
		return this.getToken(vbaParser.LOAD, 0);
	}
	public WS(): TerminalNode {
		return this.getToken(vbaParser.WS, 0);
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_loadStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterLoadStmt) {
	 		listener.enterLoadStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitLoadStmt) {
	 		listener.exitLoadStmt(this);
		}
	}
}


export class LockStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LOCK(): TerminalNode {
		return this.getToken(vbaParser.LOCK, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public valueStmt_list(): ValueStmtContext[] {
		return this.getTypedRuleContexts(ValueStmtContext) as ValueStmtContext[];
	}
	public valueStmt(i: number): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, i) as ValueStmtContext;
	}
	public TO(): TerminalNode {
		return this.getToken(vbaParser.TO, 0);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_lockStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterLockStmt) {
	 		listener.enterLockStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitLockStmt) {
	 		listener.exitLockStmt(this);
		}
	}
}


export class LsetStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LSET(): TerminalNode {
		return this.getToken(vbaParser.LSET, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getTypedRuleContext(ImplicitCallStmt_InStmtContext, 0) as ImplicitCallStmt_InStmtContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(vbaParser.EQ, 0);
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_lsetStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterLsetStmt) {
	 		listener.enterLsetStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitLsetStmt) {
	 		listener.exitLsetStmt(this);
		}
	}
}


export class MacroConstStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MACRO_CONST(): TerminalNode {
		return this.getToken(vbaParser.MACRO_CONST, 0);
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getTypedRuleContext(AmbiguousIdentifierContext, 0) as AmbiguousIdentifierContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(vbaParser.EQ, 0);
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_macroConstStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterMacroConstStmt) {
	 		listener.enterMacroConstStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitMacroConstStmt) {
	 		listener.exitMacroConstStmt(this);
		}
	}
}


export class MacroIfThenElseStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public macroIfBlockStmt(): MacroIfBlockStmtContext {
		return this.getTypedRuleContext(MacroIfBlockStmtContext, 0) as MacroIfBlockStmtContext;
	}
	public MACRO_END_IF(): TerminalNode {
		return this.getToken(vbaParser.MACRO_END_IF, 0);
	}
	public macroElseIfBlockStmt_list(): MacroElseIfBlockStmtContext[] {
		return this.getTypedRuleContexts(MacroElseIfBlockStmtContext) as MacroElseIfBlockStmtContext[];
	}
	public macroElseIfBlockStmt(i: number): MacroElseIfBlockStmtContext {
		return this.getTypedRuleContext(MacroElseIfBlockStmtContext, i) as MacroElseIfBlockStmtContext;
	}
	public macroElseBlockStmt(): MacroElseBlockStmtContext {
		return this.getTypedRuleContext(MacroElseBlockStmtContext, 0) as MacroElseBlockStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_macroIfThenElseStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterMacroIfThenElseStmt) {
	 		listener.enterMacroIfThenElseStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitMacroIfThenElseStmt) {
	 		listener.exitMacroIfThenElseStmt(this);
		}
	}
}


export class MacroIfBlockStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MACRO_IF(): TerminalNode {
		return this.getToken(vbaParser.MACRO_IF, 0);
	}
	public ifConditionStmt(): IfConditionStmtContext {
		return this.getTypedRuleContext(IfConditionStmtContext, 0) as IfConditionStmtContext;
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public THEN(): TerminalNode {
		return this.getToken(vbaParser.THEN, 0);
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getTypedRuleContext(EndOfStatementContext, 0) as EndOfStatementContext;
	}
	public moduleDeclarations_list(): ModuleDeclarationsContext[] {
		return this.getTypedRuleContexts(ModuleDeclarationsContext) as ModuleDeclarationsContext[];
	}
	public moduleDeclarations(i: number): ModuleDeclarationsContext {
		return this.getTypedRuleContext(ModuleDeclarationsContext, i) as ModuleDeclarationsContext;
	}
	public moduleBody_list(): ModuleBodyContext[] {
		return this.getTypedRuleContexts(ModuleBodyContext) as ModuleBodyContext[];
	}
	public moduleBody(i: number): ModuleBodyContext {
		return this.getTypedRuleContext(ModuleBodyContext, i) as ModuleBodyContext;
	}
	public block_list(): BlockContext[] {
		return this.getTypedRuleContexts(BlockContext) as BlockContext[];
	}
	public block(i: number): BlockContext {
		return this.getTypedRuleContext(BlockContext, i) as BlockContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_macroIfBlockStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterMacroIfBlockStmt) {
	 		listener.enterMacroIfBlockStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitMacroIfBlockStmt) {
	 		listener.exitMacroIfBlockStmt(this);
		}
	}
}


export class MacroElseIfBlockStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MACRO_ELSEIF(): TerminalNode {
		return this.getToken(vbaParser.MACRO_ELSEIF, 0);
	}
	public ifConditionStmt(): IfConditionStmtContext {
		return this.getTypedRuleContext(IfConditionStmtContext, 0) as IfConditionStmtContext;
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public THEN(): TerminalNode {
		return this.getToken(vbaParser.THEN, 0);
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getTypedRuleContext(EndOfStatementContext, 0) as EndOfStatementContext;
	}
	public moduleDeclarations_list(): ModuleDeclarationsContext[] {
		return this.getTypedRuleContexts(ModuleDeclarationsContext) as ModuleDeclarationsContext[];
	}
	public moduleDeclarations(i: number): ModuleDeclarationsContext {
		return this.getTypedRuleContext(ModuleDeclarationsContext, i) as ModuleDeclarationsContext;
	}
	public moduleBody_list(): ModuleBodyContext[] {
		return this.getTypedRuleContexts(ModuleBodyContext) as ModuleBodyContext[];
	}
	public moduleBody(i: number): ModuleBodyContext {
		return this.getTypedRuleContext(ModuleBodyContext, i) as ModuleBodyContext;
	}
	public block_list(): BlockContext[] {
		return this.getTypedRuleContexts(BlockContext) as BlockContext[];
	}
	public block(i: number): BlockContext {
		return this.getTypedRuleContext(BlockContext, i) as BlockContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_macroElseIfBlockStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterMacroElseIfBlockStmt) {
	 		listener.enterMacroElseIfBlockStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitMacroElseIfBlockStmt) {
	 		listener.exitMacroElseIfBlockStmt(this);
		}
	}
}


export class MacroElseBlockStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MACRO_ELSE(): TerminalNode {
		return this.getToken(vbaParser.MACRO_ELSE, 0);
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getTypedRuleContext(EndOfStatementContext, 0) as EndOfStatementContext;
	}
	public moduleDeclarations_list(): ModuleDeclarationsContext[] {
		return this.getTypedRuleContexts(ModuleDeclarationsContext) as ModuleDeclarationsContext[];
	}
	public moduleDeclarations(i: number): ModuleDeclarationsContext {
		return this.getTypedRuleContext(ModuleDeclarationsContext, i) as ModuleDeclarationsContext;
	}
	public moduleBody_list(): ModuleBodyContext[] {
		return this.getTypedRuleContexts(ModuleBodyContext) as ModuleBodyContext[];
	}
	public moduleBody(i: number): ModuleBodyContext {
		return this.getTypedRuleContext(ModuleBodyContext, i) as ModuleBodyContext;
	}
	public block_list(): BlockContext[] {
		return this.getTypedRuleContexts(BlockContext) as BlockContext[];
	}
	public block(i: number): BlockContext {
		return this.getTypedRuleContext(BlockContext, i) as BlockContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_macroElseBlockStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterMacroElseBlockStmt) {
	 		listener.enterMacroElseBlockStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitMacroElseBlockStmt) {
	 		listener.exitMacroElseBlockStmt(this);
		}
	}
}


export class MidStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MID(): TerminalNode {
		return this.getToken(vbaParser.MID, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(vbaParser.LPAREN, 0);
	}
	public argsCall(): ArgsCallContext {
		return this.getTypedRuleContext(ArgsCallContext, 0) as ArgsCallContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(vbaParser.RPAREN, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_midStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterMidStmt) {
	 		listener.enterMidStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitMidStmt) {
	 		listener.exitMidStmt(this);
		}
	}
}


export class MkdirStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MKDIR(): TerminalNode {
		return this.getToken(vbaParser.MKDIR, 0);
	}
	public WS(): TerminalNode {
		return this.getToken(vbaParser.WS, 0);
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_mkdirStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterMkdirStmt) {
	 		listener.enterMkdirStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitMkdirStmt) {
	 		listener.exitMkdirStmt(this);
		}
	}
}


export class NameStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NAME(): TerminalNode {
		return this.getToken(vbaParser.NAME, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public valueStmt_list(): ValueStmtContext[] {
		return this.getTypedRuleContexts(ValueStmtContext) as ValueStmtContext[];
	}
	public valueStmt(i: number): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, i) as ValueStmtContext;
	}
	public AS(): TerminalNode {
		return this.getToken(vbaParser.AS, 0);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_nameStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterNameStmt) {
	 		listener.enterNameStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitNameStmt) {
	 		listener.exitNameStmt(this);
		}
	}
}


export class OnErrorStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public ON_ERROR(): TerminalNode {
		return this.getToken(vbaParser.ON_ERROR, 0);
	}
	public ON_LOCAL_ERROR(): TerminalNode {
		return this.getToken(vbaParser.ON_LOCAL_ERROR, 0);
	}
	public GOTO(): TerminalNode {
		return this.getToken(vbaParser.GOTO, 0);
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
	public RESUME(): TerminalNode {
		return this.getToken(vbaParser.RESUME, 0);
	}
	public NEXT(): TerminalNode {
		return this.getToken(vbaParser.NEXT, 0);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_onErrorStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterOnErrorStmt) {
	 		listener.enterOnErrorStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitOnErrorStmt) {
	 		listener.exitOnErrorStmt(this);
		}
	}
}


export class OnGoToStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ON(): TerminalNode {
		return this.getToken(vbaParser.ON, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public valueStmt_list(): ValueStmtContext[] {
		return this.getTypedRuleContexts(ValueStmtContext) as ValueStmtContext[];
	}
	public valueStmt(i: number): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, i) as ValueStmtContext;
	}
	public GOTO(): TerminalNode {
		return this.getToken(vbaParser.GOTO, 0);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_onGoToStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterOnGoToStmt) {
	 		listener.enterOnGoToStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitOnGoToStmt) {
	 		listener.exitOnGoToStmt(this);
		}
	}
}


export class OnGoSubStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ON(): TerminalNode {
		return this.getToken(vbaParser.ON, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public valueStmt_list(): ValueStmtContext[] {
		return this.getTypedRuleContexts(ValueStmtContext) as ValueStmtContext[];
	}
	public valueStmt(i: number): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, i) as ValueStmtContext;
	}
	public GOSUB(): TerminalNode {
		return this.getToken(vbaParser.GOSUB, 0);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_onGoSubStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterOnGoSubStmt) {
	 		listener.enterOnGoSubStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitOnGoSubStmt) {
	 		listener.exitOnGoSubStmt(this);
		}
	}
}


export class OpenStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN(): TerminalNode {
		return this.getToken(vbaParser.OPEN, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public valueStmt_list(): ValueStmtContext[] {
		return this.getTypedRuleContexts(ValueStmtContext) as ValueStmtContext[];
	}
	public valueStmt(i: number): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, i) as ValueStmtContext;
	}
	public FOR(): TerminalNode {
		return this.getToken(vbaParser.FOR, 0);
	}
	public AS(): TerminalNode {
		return this.getToken(vbaParser.AS, 0);
	}
	public fileNumber(): FileNumberContext {
		return this.getTypedRuleContext(FileNumberContext, 0) as FileNumberContext;
	}
	public APPEND(): TerminalNode {
		return this.getToken(vbaParser.APPEND, 0);
	}
	public BINARY(): TerminalNode {
		return this.getToken(vbaParser.BINARY, 0);
	}
	public INPUT(): TerminalNode {
		return this.getToken(vbaParser.INPUT, 0);
	}
	public OUTPUT(): TerminalNode {
		return this.getToken(vbaParser.OUTPUT, 0);
	}
	public RANDOM(): TerminalNode {
		return this.getToken(vbaParser.RANDOM, 0);
	}
	public ACCESS(): TerminalNode {
		return this.getToken(vbaParser.ACCESS, 0);
	}
	public LEN(): TerminalNode {
		return this.getToken(vbaParser.LEN, 0);
	}
	public EQ(): TerminalNode {
		return this.getToken(vbaParser.EQ, 0);
	}
	public READ(): TerminalNode {
		return this.getToken(vbaParser.READ, 0);
	}
	public WRITE(): TerminalNode {
		return this.getToken(vbaParser.WRITE, 0);
	}
	public READ_WRITE(): TerminalNode {
		return this.getToken(vbaParser.READ_WRITE, 0);
	}
	public SHARED(): TerminalNode {
		return this.getToken(vbaParser.SHARED, 0);
	}
	public LOCK_READ(): TerminalNode {
		return this.getToken(vbaParser.LOCK_READ, 0);
	}
	public LOCK_WRITE(): TerminalNode {
		return this.getToken(vbaParser.LOCK_WRITE, 0);
	}
	public LOCK_READ_WRITE(): TerminalNode {
		return this.getToken(vbaParser.LOCK_READ_WRITE, 0);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_openStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterOpenStmt) {
	 		listener.enterOpenStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitOpenStmt) {
	 		listener.exitOpenStmt(this);
		}
	}
}


export class OutputListContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public outputList_Expression_list(): OutputList_ExpressionContext[] {
		return this.getTypedRuleContexts(OutputList_ExpressionContext) as OutputList_ExpressionContext[];
	}
	public outputList_Expression(i: number): OutputList_ExpressionContext {
		return this.getTypedRuleContext(OutputList_ExpressionContext, i) as OutputList_ExpressionContext;
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_outputList;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterOutputList) {
	 		listener.enterOutputList(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitOutputList) {
	 		listener.exitOutputList(this);
		}
	}
}


export class OutputList_ExpressionContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
	public SPC(): TerminalNode {
		return this.getToken(vbaParser.SPC, 0);
	}
	public TAB(): TerminalNode {
		return this.getToken(vbaParser.TAB, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(vbaParser.LPAREN, 0);
	}
	public argsCall(): ArgsCallContext {
		return this.getTypedRuleContext(ArgsCallContext, 0) as ArgsCallContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(vbaParser.RPAREN, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_outputList_Expression;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterOutputList_Expression) {
	 		listener.enterOutputList_Expression(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitOutputList_Expression) {
	 		listener.exitOutputList_Expression(this);
		}
	}
}


export class PrintStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PRINT(): TerminalNode {
		return this.getToken(vbaParser.PRINT, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public fileNumber(): FileNumberContext {
		return this.getTypedRuleContext(FileNumberContext, 0) as FileNumberContext;
	}
	public outputList(): OutputListContext {
		return this.getTypedRuleContext(OutputListContext, 0) as OutputListContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_printStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterPrintStmt) {
	 		listener.enterPrintStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitPrintStmt) {
	 		listener.exitPrintStmt(this);
		}
	}
}


export class PropertyGetStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PROPERTY_GET(): TerminalNode {
		return this.getToken(vbaParser.PROPERTY_GET, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getTypedRuleContext(AmbiguousIdentifierContext, 0) as AmbiguousIdentifierContext;
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getTypedRuleContext(EndOfStatementContext, 0) as EndOfStatementContext;
	}
	public END_PROPERTY(): TerminalNode {
		return this.getToken(vbaParser.END_PROPERTY, 0);
	}
	public visibility(): VisibilityContext {
		return this.getTypedRuleContext(VisibilityContext, 0) as VisibilityContext;
	}
	public STATIC(): TerminalNode {
		return this.getToken(vbaParser.STATIC, 0);
	}
	public typeHint(): TypeHintContext {
		return this.getTypedRuleContext(TypeHintContext, 0) as TypeHintContext;
	}
	public argList(): ArgListContext {
		return this.getTypedRuleContext(ArgListContext, 0) as ArgListContext;
	}
	public asTypeClause(): AsTypeClauseContext {
		return this.getTypedRuleContext(AsTypeClauseContext, 0) as AsTypeClauseContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_propertyGetStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterPropertyGetStmt) {
	 		listener.enterPropertyGetStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitPropertyGetStmt) {
	 		listener.exitPropertyGetStmt(this);
		}
	}
}


export class PropertySetStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PROPERTY_SET(): TerminalNode {
		return this.getToken(vbaParser.PROPERTY_SET, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getTypedRuleContext(AmbiguousIdentifierContext, 0) as AmbiguousIdentifierContext;
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getTypedRuleContext(EndOfStatementContext, 0) as EndOfStatementContext;
	}
	public END_PROPERTY(): TerminalNode {
		return this.getToken(vbaParser.END_PROPERTY, 0);
	}
	public visibility(): VisibilityContext {
		return this.getTypedRuleContext(VisibilityContext, 0) as VisibilityContext;
	}
	public STATIC(): TerminalNode {
		return this.getToken(vbaParser.STATIC, 0);
	}
	public argList(): ArgListContext {
		return this.getTypedRuleContext(ArgListContext, 0) as ArgListContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_propertySetStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterPropertySetStmt) {
	 		listener.enterPropertySetStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitPropertySetStmt) {
	 		listener.exitPropertySetStmt(this);
		}
	}
}


export class PropertyLetStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PROPERTY_LET(): TerminalNode {
		return this.getToken(vbaParser.PROPERTY_LET, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getTypedRuleContext(AmbiguousIdentifierContext, 0) as AmbiguousIdentifierContext;
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getTypedRuleContext(EndOfStatementContext, 0) as EndOfStatementContext;
	}
	public END_PROPERTY(): TerminalNode {
		return this.getToken(vbaParser.END_PROPERTY, 0);
	}
	public visibility(): VisibilityContext {
		return this.getTypedRuleContext(VisibilityContext, 0) as VisibilityContext;
	}
	public STATIC(): TerminalNode {
		return this.getToken(vbaParser.STATIC, 0);
	}
	public argList(): ArgListContext {
		return this.getTypedRuleContext(ArgListContext, 0) as ArgListContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_propertyLetStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterPropertyLetStmt) {
	 		listener.enterPropertyLetStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitPropertyLetStmt) {
	 		listener.exitPropertyLetStmt(this);
		}
	}
}


export class PutStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PUT(): TerminalNode {
		return this.getToken(vbaParser.PUT, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public fileNumber(): FileNumberContext {
		return this.getTypedRuleContext(FileNumberContext, 0) as FileNumberContext;
	}
	public valueStmt_list(): ValueStmtContext[] {
		return this.getTypedRuleContexts(ValueStmtContext) as ValueStmtContext[];
	}
	public valueStmt(i: number): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, i) as ValueStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_putStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterPutStmt) {
	 		listener.enterPutStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitPutStmt) {
	 		listener.exitPutStmt(this);
		}
	}
}


export class RaiseEventStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RAISEEVENT(): TerminalNode {
		return this.getToken(vbaParser.RAISEEVENT, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getTypedRuleContext(AmbiguousIdentifierContext, 0) as AmbiguousIdentifierContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(vbaParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(vbaParser.RPAREN, 0);
	}
	public argsCall(): ArgsCallContext {
		return this.getTypedRuleContext(ArgsCallContext, 0) as ArgsCallContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_raiseEventStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterRaiseEventStmt) {
	 		listener.enterRaiseEventStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitRaiseEventStmt) {
	 		listener.exitRaiseEventStmt(this);
		}
	}
}


export class RandomizeStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RANDOMIZE(): TerminalNode {
		return this.getToken(vbaParser.RANDOMIZE, 0);
	}
	public WS(): TerminalNode {
		return this.getToken(vbaParser.WS, 0);
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_randomizeStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterRandomizeStmt) {
	 		listener.enterRandomizeStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitRandomizeStmt) {
	 		listener.exitRandomizeStmt(this);
		}
	}
}


export class RedimStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public REDIM(): TerminalNode {
		return this.getToken(vbaParser.REDIM, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public redimSubStmt_list(): RedimSubStmtContext[] {
		return this.getTypedRuleContexts(RedimSubStmtContext) as RedimSubStmtContext[];
	}
	public redimSubStmt(i: number): RedimSubStmtContext {
		return this.getTypedRuleContext(RedimSubStmtContext, i) as RedimSubStmtContext;
	}
	public PRESERVE(): TerminalNode {
		return this.getToken(vbaParser.PRESERVE, 0);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_redimStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterRedimStmt) {
	 		listener.enterRedimStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitRedimStmt) {
	 		listener.exitRedimStmt(this);
		}
	}
}


export class RedimSubStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getTypedRuleContext(ImplicitCallStmt_InStmtContext, 0) as ImplicitCallStmt_InStmtContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(vbaParser.LPAREN, 0);
	}
	public subscripts(): SubscriptsContext {
		return this.getTypedRuleContext(SubscriptsContext, 0) as SubscriptsContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(vbaParser.RPAREN, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public asTypeClause(): AsTypeClauseContext {
		return this.getTypedRuleContext(AsTypeClauseContext, 0) as AsTypeClauseContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_redimSubStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterRedimSubStmt) {
	 		listener.enterRedimSubStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitRedimSubStmt) {
	 		listener.exitRedimSubStmt(this);
		}
	}
}


export class ResetStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RESET(): TerminalNode {
		return this.getToken(vbaParser.RESET, 0);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_resetStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterResetStmt) {
	 		listener.enterResetStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitResetStmt) {
	 		listener.exitResetStmt(this);
		}
	}
}


export class ResumeStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RESUME(): TerminalNode {
		return this.getToken(vbaParser.RESUME, 0);
	}
	public WS(): TerminalNode {
		return this.getToken(vbaParser.WS, 0);
	}
	public NEXT(): TerminalNode {
		return this.getToken(vbaParser.NEXT, 0);
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getTypedRuleContext(AmbiguousIdentifierContext, 0) as AmbiguousIdentifierContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_resumeStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterResumeStmt) {
	 		listener.enterResumeStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitResumeStmt) {
	 		listener.exitResumeStmt(this);
		}
	}
}


export class ReturnStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RETURN(): TerminalNode {
		return this.getToken(vbaParser.RETURN, 0);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_returnStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterReturnStmt) {
	 		listener.enterReturnStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitReturnStmt) {
	 		listener.exitReturnStmt(this);
		}
	}
}


export class RmdirStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RMDIR(): TerminalNode {
		return this.getToken(vbaParser.RMDIR, 0);
	}
	public WS(): TerminalNode {
		return this.getToken(vbaParser.WS, 0);
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_rmdirStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterRmdirStmt) {
	 		listener.enterRmdirStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitRmdirStmt) {
	 		listener.exitRmdirStmt(this);
		}
	}
}


export class RsetStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RSET(): TerminalNode {
		return this.getToken(vbaParser.RSET, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getTypedRuleContext(ImplicitCallStmt_InStmtContext, 0) as ImplicitCallStmt_InStmtContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(vbaParser.EQ, 0);
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_rsetStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterRsetStmt) {
	 		listener.enterRsetStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitRsetStmt) {
	 		listener.exitRsetStmt(this);
		}
	}
}


export class SavepictureStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SAVEPICTURE(): TerminalNode {
		return this.getToken(vbaParser.SAVEPICTURE, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public valueStmt_list(): ValueStmtContext[] {
		return this.getTypedRuleContexts(ValueStmtContext) as ValueStmtContext[];
	}
	public valueStmt(i: number): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, i) as ValueStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_savepictureStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterSavepictureStmt) {
	 		listener.enterSavepictureStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitSavepictureStmt) {
	 		listener.exitSavepictureStmt(this);
		}
	}
}


export class SaveSettingStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SAVESETTING(): TerminalNode {
		return this.getToken(vbaParser.SAVESETTING, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public valueStmt_list(): ValueStmtContext[] {
		return this.getTypedRuleContexts(ValueStmtContext) as ValueStmtContext[];
	}
	public valueStmt(i: number): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, i) as ValueStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_saveSettingStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterSaveSettingStmt) {
	 		listener.enterSaveSettingStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitSaveSettingStmt) {
	 		listener.exitSaveSettingStmt(this);
		}
	}
}


export class SeekStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEEK(): TerminalNode {
		return this.getToken(vbaParser.SEEK, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public fileNumber(): FileNumberContext {
		return this.getTypedRuleContext(FileNumberContext, 0) as FileNumberContext;
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_seekStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterSeekStmt) {
	 		listener.enterSeekStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitSeekStmt) {
	 		listener.exitSeekStmt(this);
		}
	}
}


export class SelectCaseStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SELECT(): TerminalNode {
		return this.getToken(vbaParser.SELECT, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public CASE(): TerminalNode {
		return this.getToken(vbaParser.CASE, 0);
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getTypedRuleContext(EndOfStatementContext, 0) as EndOfStatementContext;
	}
	public END_SELECT(): TerminalNode {
		return this.getToken(vbaParser.END_SELECT, 0);
	}
	public sC_Case_list(): SC_CaseContext[] {
		return this.getTypedRuleContexts(SC_CaseContext) as SC_CaseContext[];
	}
	public sC_Case(i: number): SC_CaseContext {
		return this.getTypedRuleContext(SC_CaseContext, i) as SC_CaseContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_selectCaseStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterSelectCaseStmt) {
	 		listener.enterSelectCaseStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitSelectCaseStmt) {
	 		listener.exitSelectCaseStmt(this);
		}
	}
}


export class SC_SelectionContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_sC_Selection;
	}
	public override copyFrom(ctx: SC_SelectionContext): void {
		super.copyFrom(ctx);
	}
}
export class CaseCondValueContext extends SC_SelectionContext {
	constructor(parser: vbaParser, ctx: SC_SelectionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterCaseCondValue) {
	 		listener.enterCaseCondValue(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitCaseCondValue) {
	 		listener.exitCaseCondValue(this);
		}
	}
}
export class CaseCondToContext extends SC_SelectionContext {
	constructor(parser: vbaParser, ctx: SC_SelectionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueStmt_list(): ValueStmtContext[] {
		return this.getTypedRuleContexts(ValueStmtContext) as ValueStmtContext[];
	}
	public valueStmt(i: number): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, i) as ValueStmtContext;
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public TO(): TerminalNode {
		return this.getToken(vbaParser.TO, 0);
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterCaseCondTo) {
	 		listener.enterCaseCondTo(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitCaseCondTo) {
	 		listener.exitCaseCondTo(this);
		}
	}
}
export class CaseCondIsContext extends SC_SelectionContext {
	constructor(parser: vbaParser, ctx: SC_SelectionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IS(): TerminalNode {
		return this.getToken(vbaParser.IS, 0);
	}
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getTypedRuleContext(ComparisonOperatorContext, 0) as ComparisonOperatorContext;
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterCaseCondIs) {
	 		listener.enterCaseCondIs(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitCaseCondIs) {
	 		listener.exitCaseCondIs(this);
		}
	}
}


export class SC_CaseContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CASE(): TerminalNode {
		return this.getToken(vbaParser.CASE, 0);
	}
	public WS(): TerminalNode {
		return this.getToken(vbaParser.WS, 0);
	}
	public sC_Cond(): SC_CondContext {
		return this.getTypedRuleContext(SC_CondContext, 0) as SC_CondContext;
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getTypedRuleContext(EndOfStatementContext, 0) as EndOfStatementContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_sC_Case;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterSC_Case) {
	 		listener.enterSC_Case(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitSC_Case) {
	 		listener.exitSC_Case(this);
		}
	}
}


export class SC_CondContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_sC_Cond;
	}
	public override copyFrom(ctx: SC_CondContext): void {
		super.copyFrom(ctx);
	}
}
export class CaseCondSelectionContext extends SC_CondContext {
	constructor(parser: vbaParser, ctx: SC_CondContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public sC_Selection_list(): SC_SelectionContext[] {
		return this.getTypedRuleContexts(SC_SelectionContext) as SC_SelectionContext[];
	}
	public sC_Selection(i: number): SC_SelectionContext {
		return this.getTypedRuleContext(SC_SelectionContext, i) as SC_SelectionContext;
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterCaseCondSelection) {
	 		listener.enterCaseCondSelection(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitCaseCondSelection) {
	 		listener.exitCaseCondSelection(this);
		}
	}
}
export class CaseCondElseContext extends SC_CondContext {
	constructor(parser: vbaParser, ctx: SC_CondContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ELSE(): TerminalNode {
		return this.getToken(vbaParser.ELSE, 0);
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterCaseCondElse) {
	 		listener.enterCaseCondElse(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitCaseCondElse) {
	 		listener.exitCaseCondElse(this);
		}
	}
}


export class SendkeysStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SENDKEYS(): TerminalNode {
		return this.getToken(vbaParser.SENDKEYS, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public valueStmt_list(): ValueStmtContext[] {
		return this.getTypedRuleContexts(ValueStmtContext) as ValueStmtContext[];
	}
	public valueStmt(i: number): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, i) as ValueStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_sendkeysStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterSendkeysStmt) {
	 		listener.enterSendkeysStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitSendkeysStmt) {
	 		listener.exitSendkeysStmt(this);
		}
	}
}


export class SetattrStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SETATTR(): TerminalNode {
		return this.getToken(vbaParser.SETATTR, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public valueStmt_list(): ValueStmtContext[] {
		return this.getTypedRuleContexts(ValueStmtContext) as ValueStmtContext[];
	}
	public valueStmt(i: number): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, i) as ValueStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_setattrStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterSetattrStmt) {
	 		listener.enterSetattrStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitSetattrStmt) {
	 		listener.exitSetattrStmt(this);
		}
	}
}


export class SetStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SET(): TerminalNode {
		return this.getToken(vbaParser.SET, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getTypedRuleContext(ImplicitCallStmt_InStmtContext, 0) as ImplicitCallStmt_InStmtContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(vbaParser.EQ, 0);
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_setStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterSetStmt) {
	 		listener.enterSetStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitSetStmt) {
	 		listener.exitSetStmt(this);
		}
	}
}


export class StopStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STOP(): TerminalNode {
		return this.getToken(vbaParser.STOP, 0);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_stopStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterStopStmt) {
	 		listener.enterStopStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitStopStmt) {
	 		listener.exitStopStmt(this);
		}
	}
}


export class SubStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SUB(): TerminalNode {
		return this.getToken(vbaParser.SUB, 0);
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getTypedRuleContext(AmbiguousIdentifierContext, 0) as AmbiguousIdentifierContext;
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getTypedRuleContext(EndOfStatementContext, 0) as EndOfStatementContext;
	}
	public END_SUB(): TerminalNode {
		return this.getToken(vbaParser.END_SUB, 0);
	}
	public visibility(): VisibilityContext {
		return this.getTypedRuleContext(VisibilityContext, 0) as VisibilityContext;
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public STATIC(): TerminalNode {
		return this.getToken(vbaParser.STATIC, 0);
	}
	public argList(): ArgListContext {
		return this.getTypedRuleContext(ArgListContext, 0) as ArgListContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_subStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterSubStmt) {
	 		listener.enterSubStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitSubStmt) {
	 		listener.exitSubStmt(this);
		}
	}
}


export class TimeStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TIME(): TerminalNode {
		return this.getToken(vbaParser.TIME, 0);
	}
	public EQ(): TerminalNode {
		return this.getToken(vbaParser.EQ, 0);
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_timeStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterTimeStmt) {
	 		listener.enterTimeStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitTimeStmt) {
	 		listener.exitTimeStmt(this);
		}
	}
}


export class TypeStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TYPE(): TerminalNode {
		return this.getToken(vbaParser.TYPE, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getTypedRuleContext(AmbiguousIdentifierContext, 0) as AmbiguousIdentifierContext;
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getTypedRuleContext(EndOfStatementContext, 0) as EndOfStatementContext;
	}
	public END_TYPE(): TerminalNode {
		return this.getToken(vbaParser.END_TYPE, 0);
	}
	public visibility(): VisibilityContext {
		return this.getTypedRuleContext(VisibilityContext, 0) as VisibilityContext;
	}
	public typeStmt_Element_list(): TypeStmt_ElementContext[] {
		return this.getTypedRuleContexts(TypeStmt_ElementContext) as TypeStmt_ElementContext[];
	}
	public typeStmt_Element(i: number): TypeStmt_ElementContext {
		return this.getTypedRuleContext(TypeStmt_ElementContext, i) as TypeStmt_ElementContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_typeStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterTypeStmt) {
	 		listener.enterTypeStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitTypeStmt) {
	 		listener.exitTypeStmt(this);
		}
	}
}


export class TypeStmt_ElementContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getTypedRuleContext(AmbiguousIdentifierContext, 0) as AmbiguousIdentifierContext;
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getTypedRuleContext(EndOfStatementContext, 0) as EndOfStatementContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(vbaParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(vbaParser.RPAREN, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public asTypeClause(): AsTypeClauseContext {
		return this.getTypedRuleContext(AsTypeClauseContext, 0) as AsTypeClauseContext;
	}
	public subscripts(): SubscriptsContext {
		return this.getTypedRuleContext(SubscriptsContext, 0) as SubscriptsContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_typeStmt_Element;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterTypeStmt_Element) {
	 		listener.enterTypeStmt_Element(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitTypeStmt_Element) {
	 		listener.exitTypeStmt_Element(this);
		}
	}
}


export class TypeOfStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TYPEOF(): TerminalNode {
		return this.getToken(vbaParser.TYPEOF, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
	public IS(): TerminalNode {
		return this.getToken(vbaParser.IS, 0);
	}
	public type_(): Type_Context {
		return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_typeOfStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterTypeOfStmt) {
	 		listener.enterTypeOfStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitTypeOfStmt) {
	 		listener.exitTypeOfStmt(this);
		}
	}
}


export class UnloadStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UNLOAD(): TerminalNode {
		return this.getToken(vbaParser.UNLOAD, 0);
	}
	public WS(): TerminalNode {
		return this.getToken(vbaParser.WS, 0);
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_unloadStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterUnloadStmt) {
	 		listener.enterUnloadStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitUnloadStmt) {
	 		listener.exitUnloadStmt(this);
		}
	}
}


export class UnlockStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UNLOCK(): TerminalNode {
		return this.getToken(vbaParser.UNLOCK, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public fileNumber(): FileNumberContext {
		return this.getTypedRuleContext(FileNumberContext, 0) as FileNumberContext;
	}
	public valueStmt_list(): ValueStmtContext[] {
		return this.getTypedRuleContexts(ValueStmtContext) as ValueStmtContext[];
	}
	public valueStmt(i: number): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, i) as ValueStmtContext;
	}
	public TO(): TerminalNode {
		return this.getToken(vbaParser.TO, 0);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_unlockStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterUnlockStmt) {
	 		listener.enterUnlockStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitUnlockStmt) {
	 		listener.exitUnlockStmt(this);
		}
	}
}


export class ValueStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_valueStmt;
	}
	public override copyFrom(ctx: ValueStmtContext): void {
		super.copyFrom(ctx);
	}
}
export class VsAssignContext extends ValueStmtContext {
	constructor(parser: vbaParser, ctx: ValueStmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getTypedRuleContext(ImplicitCallStmt_InStmtContext, 0) as ImplicitCallStmt_InStmtContext;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(vbaParser.ASSIGN, 0);
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterVsAssign) {
	 		listener.enterVsAssign(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitVsAssign) {
	 		listener.exitVsAssign(this);
		}
	}
}
export class VsPlusContext extends ValueStmtContext {
	constructor(parser: vbaParser, ctx: ValueStmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PLUS(): TerminalNode {
		return this.getToken(vbaParser.PLUS, 0);
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
	public WS(): TerminalNode {
		return this.getToken(vbaParser.WS, 0);
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterVsPlus) {
	 		listener.enterVsPlus(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitVsPlus) {
	 		listener.exitVsPlus(this);
		}
	}
}
export class VsNotContext extends ValueStmtContext {
	constructor(parser: vbaParser, ctx: ValueStmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NOT(): TerminalNode {
		return this.getToken(vbaParser.NOT, 0);
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
	public WS(): TerminalNode {
		return this.getToken(vbaParser.WS, 0);
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterVsNot) {
	 		listener.enterVsNot(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitVsNot) {
	 		listener.exitVsNot(this);
		}
	}
}
export class VsStructContext extends ValueStmtContext {
	constructor(parser: vbaParser, ctx: ValueStmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(vbaParser.LPAREN, 0);
	}
	public valueStmt_list(): ValueStmtContext[] {
		return this.getTypedRuleContexts(ValueStmtContext) as ValueStmtContext[];
	}
	public valueStmt(i: number): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, i) as ValueStmtContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(vbaParser.RPAREN, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterVsStruct) {
	 		listener.enterVsStruct(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitVsStruct) {
	 		listener.exitVsStruct(this);
		}
	}
}
export class VsTypeOfContext extends ValueStmtContext {
	constructor(parser: vbaParser, ctx: ValueStmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public typeOfStmt(): TypeOfStmtContext {
		return this.getTypedRuleContext(TypeOfStmtContext, 0) as TypeOfStmtContext;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterVsTypeOf) {
	 		listener.enterVsTypeOf(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitVsTypeOf) {
	 		listener.exitVsTypeOf(this);
		}
	}
}
export class VsICSContext extends ValueStmtContext {
	constructor(parser: vbaParser, ctx: ValueStmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getTypedRuleContext(ImplicitCallStmt_InStmtContext, 0) as ImplicitCallStmt_InStmtContext;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterVsICS) {
	 		listener.enterVsICS(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitVsICS) {
	 		listener.exitVsICS(this);
		}
	}
}
export class VsRelationalContext extends ValueStmtContext {
	constructor(parser: vbaParser, ctx: ValueStmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueStmt_list(): ValueStmtContext[] {
		return this.getTypedRuleContexts(ValueStmtContext) as ValueStmtContext[];
	}
	public valueStmt(i: number): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, i) as ValueStmtContext;
	}
	public IS(): TerminalNode {
		return this.getToken(vbaParser.IS, 0);
	}
	public LIKE(): TerminalNode {
		return this.getToken(vbaParser.LIKE, 0);
	}
	public GEQ(): TerminalNode {
		return this.getToken(vbaParser.GEQ, 0);
	}
	public LEQ(): TerminalNode {
		return this.getToken(vbaParser.LEQ, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(vbaParser.GT, 0);
	}
	public LT(): TerminalNode {
		return this.getToken(vbaParser.LT, 0);
	}
	public NEQ(): TerminalNode {
		return this.getToken(vbaParser.NEQ, 0);
	}
	public EQ(): TerminalNode {
		return this.getToken(vbaParser.EQ, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterVsRelational) {
	 		listener.enterVsRelational(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitVsRelational) {
	 		listener.exitVsRelational(this);
		}
	}
}
export class VsAddMinusContext extends ValueStmtContext {
	constructor(parser: vbaParser, ctx: ValueStmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueStmt_list(): ValueStmtContext[] {
		return this.getTypedRuleContexts(ValueStmtContext) as ValueStmtContext[];
	}
	public valueStmt(i: number): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, i) as ValueStmtContext;
	}
	public PLUS(): TerminalNode {
		return this.getToken(vbaParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(vbaParser.MINUS, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterVsAddMinus) {
	 		listener.enterVsAddMinus(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitVsAddMinus) {
	 		listener.exitVsAddMinus(this);
		}
	}
}
export class VsXorContext extends ValueStmtContext {
	constructor(parser: vbaParser, ctx: ValueStmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueStmt_list(): ValueStmtContext[] {
		return this.getTypedRuleContexts(ValueStmtContext) as ValueStmtContext[];
	}
	public valueStmt(i: number): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, i) as ValueStmtContext;
	}
	public XOR(): TerminalNode {
		return this.getToken(vbaParser.XOR, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterVsXor) {
	 		listener.enterVsXor(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitVsXor) {
	 		listener.exitVsXor(this);
		}
	}
}
export class VsDivMultContext extends ValueStmtContext {
	constructor(parser: vbaParser, ctx: ValueStmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueStmt_list(): ValueStmtContext[] {
		return this.getTypedRuleContexts(ValueStmtContext) as ValueStmtContext[];
	}
	public valueStmt(i: number): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, i) as ValueStmtContext;
	}
	public DIV(): TerminalNode {
		return this.getToken(vbaParser.DIV, 0);
	}
	public MULT(): TerminalNode {
		return this.getToken(vbaParser.MULT, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterVsDivMult) {
	 		listener.enterVsDivMult(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitVsDivMult) {
	 		listener.exitVsDivMult(this);
		}
	}
}
export class VsAndContext extends ValueStmtContext {
	constructor(parser: vbaParser, ctx: ValueStmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueStmt_list(): ValueStmtContext[] {
		return this.getTypedRuleContexts(ValueStmtContext) as ValueStmtContext[];
	}
	public valueStmt(i: number): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, i) as ValueStmtContext;
	}
	public AND(): TerminalNode {
		return this.getToken(vbaParser.AND, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterVsAnd) {
	 		listener.enterVsAnd(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitVsAnd) {
	 		listener.exitVsAnd(this);
		}
	}
}
export class VsPowContext extends ValueStmtContext {
	constructor(parser: vbaParser, ctx: ValueStmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueStmt_list(): ValueStmtContext[] {
		return this.getTypedRuleContexts(ValueStmtContext) as ValueStmtContext[];
	}
	public valueStmt(i: number): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, i) as ValueStmtContext;
	}
	public POW(): TerminalNode {
		return this.getToken(vbaParser.POW, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterVsPow) {
	 		listener.enterVsPow(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitVsPow) {
	 		listener.exitVsPow(this);
		}
	}
}
export class VsModContext extends ValueStmtContext {
	constructor(parser: vbaParser, ctx: ValueStmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueStmt_list(): ValueStmtContext[] {
		return this.getTypedRuleContexts(ValueStmtContext) as ValueStmtContext[];
	}
	public valueStmt(i: number): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, i) as ValueStmtContext;
	}
	public MOD(): TerminalNode {
		return this.getToken(vbaParser.MOD, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterVsMod) {
	 		listener.enterVsMod(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitVsMod) {
	 		listener.exitVsMod(this);
		}
	}
}
export class VsAmpContext extends ValueStmtContext {
	constructor(parser: vbaParser, ctx: ValueStmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueStmt_list(): ValueStmtContext[] {
		return this.getTypedRuleContexts(ValueStmtContext) as ValueStmtContext[];
	}
	public valueStmt(i: number): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, i) as ValueStmtContext;
	}
	public AMPERSAND(): TerminalNode {
		return this.getToken(vbaParser.AMPERSAND, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterVsAmp) {
	 		listener.enterVsAmp(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitVsAmp) {
	 		listener.exitVsAmp(this);
		}
	}
}
export class VsAddressOfContext extends ValueStmtContext {
	constructor(parser: vbaParser, ctx: ValueStmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ADDRESSOF(): TerminalNode {
		return this.getToken(vbaParser.ADDRESSOF, 0);
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
	public WS(): TerminalNode {
		return this.getToken(vbaParser.WS, 0);
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterVsAddressOf) {
	 		listener.enterVsAddressOf(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitVsAddressOf) {
	 		listener.exitVsAddressOf(this);
		}
	}
}
export class VsNewContext extends ValueStmtContext {
	constructor(parser: vbaParser, ctx: ValueStmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NEW(): TerminalNode {
		return this.getToken(vbaParser.NEW, 0);
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
	public WS(): TerminalNode {
		return this.getToken(vbaParser.WS, 0);
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterVsNew) {
	 		listener.enterVsNew(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitVsNew) {
	 		listener.exitVsNew(this);
		}
	}
}
export class VsOrContext extends ValueStmtContext {
	constructor(parser: vbaParser, ctx: ValueStmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueStmt_list(): ValueStmtContext[] {
		return this.getTypedRuleContexts(ValueStmtContext) as ValueStmtContext[];
	}
	public valueStmt(i: number): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, i) as ValueStmtContext;
	}
	public OR(): TerminalNode {
		return this.getToken(vbaParser.OR, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterVsOr) {
	 		listener.enterVsOr(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitVsOr) {
	 		listener.exitVsOr(this);
		}
	}
}
export class VsLiteralContext extends ValueStmtContext {
	constructor(parser: vbaParser, ctx: ValueStmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterVsLiteral) {
	 		listener.enterVsLiteral(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitVsLiteral) {
	 		listener.exitVsLiteral(this);
		}
	}
}
export class VsEqvContext extends ValueStmtContext {
	constructor(parser: vbaParser, ctx: ValueStmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueStmt_list(): ValueStmtContext[] {
		return this.getTypedRuleContexts(ValueStmtContext) as ValueStmtContext[];
	}
	public valueStmt(i: number): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, i) as ValueStmtContext;
	}
	public EQV(): TerminalNode {
		return this.getToken(vbaParser.EQV, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterVsEqv) {
	 		listener.enterVsEqv(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitVsEqv) {
	 		listener.exitVsEqv(this);
		}
	}
}
export class VsNegationContext extends ValueStmtContext {
	constructor(parser: vbaParser, ctx: ValueStmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MINUS(): TerminalNode {
		return this.getToken(vbaParser.MINUS, 0);
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
	public WS(): TerminalNode {
		return this.getToken(vbaParser.WS, 0);
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterVsNegation) {
	 		listener.enterVsNegation(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitVsNegation) {
	 		listener.exitVsNegation(this);
		}
	}
}
export class VsImpContext extends ValueStmtContext {
	constructor(parser: vbaParser, ctx: ValueStmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueStmt_list(): ValueStmtContext[] {
		return this.getTypedRuleContexts(ValueStmtContext) as ValueStmtContext[];
	}
	public valueStmt(i: number): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, i) as ValueStmtContext;
	}
	public IMP(): TerminalNode {
		return this.getToken(vbaParser.IMP, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterVsImp) {
	 		listener.enterVsImp(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitVsImp) {
	 		listener.exitVsImp(this);
		}
	}
}
export class VsMidContext extends ValueStmtContext {
	constructor(parser: vbaParser, ctx: ValueStmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public midStmt(): MidStmtContext {
		return this.getTypedRuleContext(MidStmtContext, 0) as MidStmtContext;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterVsMid) {
	 		listener.enterVsMid(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitVsMid) {
	 		listener.exitVsMid(this);
		}
	}
}


export class VariableStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public variableListStmt(): VariableListStmtContext {
		return this.getTypedRuleContext(VariableListStmtContext, 0) as VariableListStmtContext;
	}
	public DIM(): TerminalNode {
		return this.getToken(vbaParser.DIM, 0);
	}
	public STATIC(): TerminalNode {
		return this.getToken(vbaParser.STATIC, 0);
	}
	public visibility(): VisibilityContext {
		return this.getTypedRuleContext(VisibilityContext, 0) as VisibilityContext;
	}
	public WITHEVENTS(): TerminalNode {
		return this.getToken(vbaParser.WITHEVENTS, 0);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_variableStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterVariableStmt) {
	 		listener.enterVariableStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitVariableStmt) {
	 		listener.exitVariableStmt(this);
		}
	}
}


export class VariableListStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableSubStmt_list(): VariableSubStmtContext[] {
		return this.getTypedRuleContexts(VariableSubStmtContext) as VariableSubStmtContext[];
	}
	public variableSubStmt(i: number): VariableSubStmtContext {
		return this.getTypedRuleContext(VariableSubStmtContext, i) as VariableSubStmtContext;
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_variableListStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterVariableListStmt) {
	 		listener.enterVariableListStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitVariableListStmt) {
	 		listener.exitVariableListStmt(this);
		}
	}
}


export class VariableSubStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getTypedRuleContext(AmbiguousIdentifierContext, 0) as AmbiguousIdentifierContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(vbaParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(vbaParser.RPAREN, 0);
	}
	public typeHint(): TypeHintContext {
		return this.getTypedRuleContext(TypeHintContext, 0) as TypeHintContext;
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public asTypeClause(): AsTypeClauseContext {
		return this.getTypedRuleContext(AsTypeClauseContext, 0) as AsTypeClauseContext;
	}
	public subscripts(): SubscriptsContext {
		return this.getTypedRuleContext(SubscriptsContext, 0) as SubscriptsContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_variableSubStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterVariableSubStmt) {
	 		listener.enterVariableSubStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitVariableSubStmt) {
	 		listener.exitVariableSubStmt(this);
		}
	}
}


export class WhileWendStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHILE(): TerminalNode {
		return this.getToken(vbaParser.WHILE, 0);
	}
	public WS(): TerminalNode {
		return this.getToken(vbaParser.WS, 0);
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getTypedRuleContext(EndOfStatementContext, 0) as EndOfStatementContext;
	}
	public WEND(): TerminalNode {
		return this.getToken(vbaParser.WEND, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_whileWendStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterWhileWendStmt) {
	 		listener.enterWhileWendStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitWhileWendStmt) {
	 		listener.exitWhileWendStmt(this);
		}
	}
}


export class WidthStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WIDTH(): TerminalNode {
		return this.getToken(vbaParser.WIDTH, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public fileNumber(): FileNumberContext {
		return this.getTypedRuleContext(FileNumberContext, 0) as FileNumberContext;
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_widthStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterWidthStmt) {
	 		listener.enterWidthStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitWidthStmt) {
	 		listener.exitWidthStmt(this);
		}
	}
}


export class WithStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WITH(): TerminalNode {
		return this.getToken(vbaParser.WITH, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getTypedRuleContext(EndOfStatementContext, 0) as EndOfStatementContext;
	}
	public END_WITH(): TerminalNode {
		return this.getToken(vbaParser.END_WITH, 0);
	}
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getTypedRuleContext(ImplicitCallStmt_InStmtContext, 0) as ImplicitCallStmt_InStmtContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public NEW(): TerminalNode {
		return this.getToken(vbaParser.NEW, 0);
	}
	public type_(): Type_Context {
		return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_withStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterWithStmt) {
	 		listener.enterWithStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitWithStmt) {
	 		listener.exitWithStmt(this);
		}
	}
}


export class WriteStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WRITE(): TerminalNode {
		return this.getToken(vbaParser.WRITE, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public fileNumber(): FileNumberContext {
		return this.getTypedRuleContext(FileNumberContext, 0) as FileNumberContext;
	}
	public outputList(): OutputListContext {
		return this.getTypedRuleContext(OutputListContext, 0) as OutputListContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_writeStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterWriteStmt) {
	 		listener.enterWriteStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitWriteStmt) {
	 		listener.exitWriteStmt(this);
		}
	}
}


export class FileNumberContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_fileNumber;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterFileNumber) {
	 		listener.enterFileNumber(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitFileNumber) {
	 		listener.exitFileNumber(this);
		}
	}
}


export class ExplicitCallStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public eCS_ProcedureCall(): ECS_ProcedureCallContext {
		return this.getTypedRuleContext(ECS_ProcedureCallContext, 0) as ECS_ProcedureCallContext;
	}
	public eCS_MemberProcedureCall(): ECS_MemberProcedureCallContext {
		return this.getTypedRuleContext(ECS_MemberProcedureCallContext, 0) as ECS_MemberProcedureCallContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_explicitCallStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterExplicitCallStmt) {
	 		listener.enterExplicitCallStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitExplicitCallStmt) {
	 		listener.exitExplicitCallStmt(this);
		}
	}
}


export class ECS_ProcedureCallContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CALL(): TerminalNode {
		return this.getToken(vbaParser.CALL, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getTypedRuleContext(AmbiguousIdentifierContext, 0) as AmbiguousIdentifierContext;
	}
	public typeHint(): TypeHintContext {
		return this.getTypedRuleContext(TypeHintContext, 0) as TypeHintContext;
	}
	public LPAREN_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.LPAREN);
	}
	public LPAREN(i: number): TerminalNode {
		return this.getToken(vbaParser.LPAREN, i);
	}
	public argsCall(): ArgsCallContext {
		return this.getTypedRuleContext(ArgsCallContext, 0) as ArgsCallContext;
	}
	public RPAREN_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.RPAREN);
	}
	public RPAREN(i: number): TerminalNode {
		return this.getToken(vbaParser.RPAREN, i);
	}
	public subscripts_list(): SubscriptsContext[] {
		return this.getTypedRuleContexts(SubscriptsContext) as SubscriptsContext[];
	}
	public subscripts(i: number): SubscriptsContext {
		return this.getTypedRuleContext(SubscriptsContext, i) as SubscriptsContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_eCS_ProcedureCall;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterECS_ProcedureCall) {
	 		listener.enterECS_ProcedureCall(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitECS_ProcedureCall) {
	 		listener.exitECS_ProcedureCall(this);
		}
	}
}


export class ECS_MemberProcedureCallContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CALL(): TerminalNode {
		return this.getToken(vbaParser.CALL, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getTypedRuleContext(AmbiguousIdentifierContext, 0) as AmbiguousIdentifierContext;
	}
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getTypedRuleContext(ImplicitCallStmt_InStmtContext, 0) as ImplicitCallStmt_InStmtContext;
	}
	public typeHint(): TypeHintContext {
		return this.getTypedRuleContext(TypeHintContext, 0) as TypeHintContext;
	}
	public LPAREN_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.LPAREN);
	}
	public LPAREN(i: number): TerminalNode {
		return this.getToken(vbaParser.LPAREN, i);
	}
	public argsCall(): ArgsCallContext {
		return this.getTypedRuleContext(ArgsCallContext, 0) as ArgsCallContext;
	}
	public RPAREN_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.RPAREN);
	}
	public RPAREN(i: number): TerminalNode {
		return this.getToken(vbaParser.RPAREN, i);
	}
	public subscripts_list(): SubscriptsContext[] {
		return this.getTypedRuleContexts(SubscriptsContext) as SubscriptsContext[];
	}
	public subscripts(i: number): SubscriptsContext {
		return this.getTypedRuleContext(SubscriptsContext, i) as SubscriptsContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_eCS_MemberProcedureCall;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterECS_MemberProcedureCall) {
	 		listener.enterECS_MemberProcedureCall(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitECS_MemberProcedureCall) {
	 		listener.exitECS_MemberProcedureCall(this);
		}
	}
}


export class ImplicitCallStmt_InBlockContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public iCS_B_MemberProcedureCall(): ICS_B_MemberProcedureCallContext {
		return this.getTypedRuleContext(ICS_B_MemberProcedureCallContext, 0) as ICS_B_MemberProcedureCallContext;
	}
	public iCS_B_ProcedureCall(): ICS_B_ProcedureCallContext {
		return this.getTypedRuleContext(ICS_B_ProcedureCallContext, 0) as ICS_B_ProcedureCallContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_implicitCallStmt_InBlock;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterImplicitCallStmt_InBlock) {
	 		listener.enterImplicitCallStmt_InBlock(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitImplicitCallStmt_InBlock) {
	 		listener.exitImplicitCallStmt_InBlock(this);
		}
	}
}


export class ICS_B_MemberProcedureCallContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getTypedRuleContext(AmbiguousIdentifierContext, 0) as AmbiguousIdentifierContext;
	}
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getTypedRuleContext(ImplicitCallStmt_InStmtContext, 0) as ImplicitCallStmt_InStmtContext;
	}
	public typeHint(): TypeHintContext {
		return this.getTypedRuleContext(TypeHintContext, 0) as TypeHintContext;
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public argsCall(): ArgsCallContext {
		return this.getTypedRuleContext(ArgsCallContext, 0) as ArgsCallContext;
	}
	public dictionaryCallStmt(): DictionaryCallStmtContext {
		return this.getTypedRuleContext(DictionaryCallStmtContext, 0) as DictionaryCallStmtContext;
	}
	public LPAREN_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.LPAREN);
	}
	public LPAREN(i: number): TerminalNode {
		return this.getToken(vbaParser.LPAREN, i);
	}
	public subscripts_list(): SubscriptsContext[] {
		return this.getTypedRuleContexts(SubscriptsContext) as SubscriptsContext[];
	}
	public subscripts(i: number): SubscriptsContext {
		return this.getTypedRuleContext(SubscriptsContext, i) as SubscriptsContext;
	}
	public RPAREN_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.RPAREN);
	}
	public RPAREN(i: number): TerminalNode {
		return this.getToken(vbaParser.RPAREN, i);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_iCS_B_MemberProcedureCall;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterICS_B_MemberProcedureCall) {
	 		listener.enterICS_B_MemberProcedureCall(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitICS_B_MemberProcedureCall) {
	 		listener.exitICS_B_MemberProcedureCall(this);
		}
	}
}


export class ICS_B_ProcedureCallContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public certainIdentifier(): CertainIdentifierContext {
		return this.getTypedRuleContext(CertainIdentifierContext, 0) as CertainIdentifierContext;
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public argsCall(): ArgsCallContext {
		return this.getTypedRuleContext(ArgsCallContext, 0) as ArgsCallContext;
	}
	public LPAREN_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.LPAREN);
	}
	public LPAREN(i: number): TerminalNode {
		return this.getToken(vbaParser.LPAREN, i);
	}
	public subscripts_list(): SubscriptsContext[] {
		return this.getTypedRuleContexts(SubscriptsContext) as SubscriptsContext[];
	}
	public subscripts(i: number): SubscriptsContext {
		return this.getTypedRuleContext(SubscriptsContext, i) as SubscriptsContext;
	}
	public RPAREN_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.RPAREN);
	}
	public RPAREN(i: number): TerminalNode {
		return this.getToken(vbaParser.RPAREN, i);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_iCS_B_ProcedureCall;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterICS_B_ProcedureCall) {
	 		listener.enterICS_B_ProcedureCall(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitICS_B_ProcedureCall) {
	 		listener.exitICS_B_ProcedureCall(this);
		}
	}
}


export class ImplicitCallStmt_InStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public iCS_S_MembersCall(): ICS_S_MembersCallContext {
		return this.getTypedRuleContext(ICS_S_MembersCallContext, 0) as ICS_S_MembersCallContext;
	}
	public iCS_S_VariableOrProcedureCall(): ICS_S_VariableOrProcedureCallContext {
		return this.getTypedRuleContext(ICS_S_VariableOrProcedureCallContext, 0) as ICS_S_VariableOrProcedureCallContext;
	}
	public iCS_S_ProcedureOrArrayCall(): ICS_S_ProcedureOrArrayCallContext {
		return this.getTypedRuleContext(ICS_S_ProcedureOrArrayCallContext, 0) as ICS_S_ProcedureOrArrayCallContext;
	}
	public iCS_S_DictionaryCall(): ICS_S_DictionaryCallContext {
		return this.getTypedRuleContext(ICS_S_DictionaryCallContext, 0) as ICS_S_DictionaryCallContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_implicitCallStmt_InStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterImplicitCallStmt_InStmt) {
	 		listener.enterImplicitCallStmt_InStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitImplicitCallStmt_InStmt) {
	 		listener.exitImplicitCallStmt_InStmt(this);
		}
	}
}


export class ICS_S_VariableOrProcedureCallContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getTypedRuleContext(AmbiguousIdentifierContext, 0) as AmbiguousIdentifierContext;
	}
	public typeHint(): TypeHintContext {
		return this.getTypedRuleContext(TypeHintContext, 0) as TypeHintContext;
	}
	public dictionaryCallStmt(): DictionaryCallStmtContext {
		return this.getTypedRuleContext(DictionaryCallStmtContext, 0) as DictionaryCallStmtContext;
	}
	public LPAREN_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.LPAREN);
	}
	public LPAREN(i: number): TerminalNode {
		return this.getToken(vbaParser.LPAREN, i);
	}
	public subscripts_list(): SubscriptsContext[] {
		return this.getTypedRuleContexts(SubscriptsContext) as SubscriptsContext[];
	}
	public subscripts(i: number): SubscriptsContext {
		return this.getTypedRuleContext(SubscriptsContext, i) as SubscriptsContext;
	}
	public RPAREN_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.RPAREN);
	}
	public RPAREN(i: number): TerminalNode {
		return this.getToken(vbaParser.RPAREN, i);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_iCS_S_VariableOrProcedureCall;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterICS_S_VariableOrProcedureCall) {
	 		listener.enterICS_S_VariableOrProcedureCall(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitICS_S_VariableOrProcedureCall) {
	 		listener.exitICS_S_VariableOrProcedureCall(this);
		}
	}
}


export class ICS_S_ProcedureOrArrayCallContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.LPAREN);
	}
	public LPAREN(i: number): TerminalNode {
		return this.getToken(vbaParser.LPAREN, i);
	}
	public RPAREN_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.RPAREN);
	}
	public RPAREN(i: number): TerminalNode {
		return this.getToken(vbaParser.RPAREN, i);
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getTypedRuleContext(AmbiguousIdentifierContext, 0) as AmbiguousIdentifierContext;
	}
	public baseType(): BaseTypeContext {
		return this.getTypedRuleContext(BaseTypeContext, 0) as BaseTypeContext;
	}
	public typeHint(): TypeHintContext {
		return this.getTypedRuleContext(TypeHintContext, 0) as TypeHintContext;
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public argsCall(): ArgsCallContext {
		return this.getTypedRuleContext(ArgsCallContext, 0) as ArgsCallContext;
	}
	public dictionaryCallStmt(): DictionaryCallStmtContext {
		return this.getTypedRuleContext(DictionaryCallStmtContext, 0) as DictionaryCallStmtContext;
	}
	public subscripts_list(): SubscriptsContext[] {
		return this.getTypedRuleContexts(SubscriptsContext) as SubscriptsContext[];
	}
	public subscripts(i: number): SubscriptsContext {
		return this.getTypedRuleContext(SubscriptsContext, i) as SubscriptsContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_iCS_S_ProcedureOrArrayCall;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterICS_S_ProcedureOrArrayCall) {
	 		listener.enterICS_S_ProcedureOrArrayCall(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitICS_S_ProcedureOrArrayCall) {
	 		listener.exitICS_S_ProcedureOrArrayCall(this);
		}
	}
}


export class ICS_S_MembersCallContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public iCS_S_VariableOrProcedureCall(): ICS_S_VariableOrProcedureCallContext {
		return this.getTypedRuleContext(ICS_S_VariableOrProcedureCallContext, 0) as ICS_S_VariableOrProcedureCallContext;
	}
	public iCS_S_ProcedureOrArrayCall(): ICS_S_ProcedureOrArrayCallContext {
		return this.getTypedRuleContext(ICS_S_ProcedureOrArrayCallContext, 0) as ICS_S_ProcedureOrArrayCallContext;
	}
	public iCS_S_MemberCall_list(): ICS_S_MemberCallContext[] {
		return this.getTypedRuleContexts(ICS_S_MemberCallContext) as ICS_S_MemberCallContext[];
	}
	public iCS_S_MemberCall(i: number): ICS_S_MemberCallContext {
		return this.getTypedRuleContext(ICS_S_MemberCallContext, i) as ICS_S_MemberCallContext;
	}
	public dictionaryCallStmt(): DictionaryCallStmtContext {
		return this.getTypedRuleContext(DictionaryCallStmtContext, 0) as DictionaryCallStmtContext;
	}
	public LPAREN_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.LPAREN);
	}
	public LPAREN(i: number): TerminalNode {
		return this.getToken(vbaParser.LPAREN, i);
	}
	public subscripts_list(): SubscriptsContext[] {
		return this.getTypedRuleContexts(SubscriptsContext) as SubscriptsContext[];
	}
	public subscripts(i: number): SubscriptsContext {
		return this.getTypedRuleContext(SubscriptsContext, i) as SubscriptsContext;
	}
	public RPAREN_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.RPAREN);
	}
	public RPAREN(i: number): TerminalNode {
		return this.getToken(vbaParser.RPAREN, i);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_iCS_S_MembersCall;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterICS_S_MembersCall) {
	 		listener.enterICS_S_MembersCall(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitICS_S_MembersCall) {
	 		listener.exitICS_S_MembersCall(this);
		}
	}
}


export class ICS_S_MemberCallContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public iCS_S_VariableOrProcedureCall(): ICS_S_VariableOrProcedureCallContext {
		return this.getTypedRuleContext(ICS_S_VariableOrProcedureCallContext, 0) as ICS_S_VariableOrProcedureCallContext;
	}
	public iCS_S_ProcedureOrArrayCall(): ICS_S_ProcedureOrArrayCallContext {
		return this.getTypedRuleContext(ICS_S_ProcedureOrArrayCallContext, 0) as ICS_S_ProcedureOrArrayCallContext;
	}
	public LINE_CONTINUATION_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.LINE_CONTINUATION);
	}
	public LINE_CONTINUATION(i: number): TerminalNode {
		return this.getToken(vbaParser.LINE_CONTINUATION, i);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_iCS_S_MemberCall;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterICS_S_MemberCall) {
	 		listener.enterICS_S_MemberCall(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitICS_S_MemberCall) {
	 		listener.exitICS_S_MemberCall(this);
		}
	}
}


export class ICS_S_DictionaryCallContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public dictionaryCallStmt(): DictionaryCallStmtContext {
		return this.getTypedRuleContext(DictionaryCallStmtContext, 0) as DictionaryCallStmtContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_iCS_S_DictionaryCall;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterICS_S_DictionaryCall) {
	 		listener.enterICS_S_DictionaryCall(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitICS_S_DictionaryCall) {
	 		listener.exitICS_S_DictionaryCall(this);
		}
	}
}


export class ArgsCallContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public argCall_list(): ArgCallContext[] {
		return this.getTypedRuleContexts(ArgCallContext) as ArgCallContext[];
	}
	public argCall(i: number): ArgCallContext {
		return this.getTypedRuleContext(ArgCallContext, i) as ArgCallContext;
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_argsCall;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterArgsCall) {
	 		listener.enterArgsCall(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitArgsCall) {
	 		listener.exitArgsCall(this);
		}
	}
}


export class ArgCallContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(vbaParser.LPAREN, 0);
	}
	public WS(): TerminalNode {
		return this.getToken(vbaParser.WS, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(vbaParser.RPAREN, 0);
	}
	public BYVAL(): TerminalNode {
		return this.getToken(vbaParser.BYVAL, 0);
	}
	public BYREF(): TerminalNode {
		return this.getToken(vbaParser.BYREF, 0);
	}
	public PARAMARRAY(): TerminalNode {
		return this.getToken(vbaParser.PARAMARRAY, 0);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_argCall;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterArgCall) {
	 		listener.enterArgCall(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitArgCall) {
	 		listener.exitArgCall(this);
		}
	}
}


export class DictionaryCallStmtContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getTypedRuleContext(AmbiguousIdentifierContext, 0) as AmbiguousIdentifierContext;
	}
	public typeHint(): TypeHintContext {
		return this.getTypedRuleContext(TypeHintContext, 0) as TypeHintContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_dictionaryCallStmt;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterDictionaryCallStmt) {
	 		listener.enterDictionaryCallStmt(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitDictionaryCallStmt) {
	 		listener.exitDictionaryCallStmt(this);
		}
	}
}


export class ArgListContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(vbaParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(vbaParser.RPAREN, 0);
	}
	public arg_list(): ArgContext[] {
		return this.getTypedRuleContexts(ArgContext) as ArgContext[];
	}
	public arg(i: number): ArgContext {
		return this.getTypedRuleContext(ArgContext, i) as ArgContext;
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_argList;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterArgList) {
	 		listener.enterArgList(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitArgList) {
	 		listener.exitArgList(this);
		}
	}
}


export class ArgContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getTypedRuleContext(AmbiguousIdentifierContext, 0) as AmbiguousIdentifierContext;
	}
	public OPTIONAL(): TerminalNode {
		return this.getToken(vbaParser.OPTIONAL, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public PARAMARRAY(): TerminalNode {
		return this.getToken(vbaParser.PARAMARRAY, 0);
	}
	public typeHint(): TypeHintContext {
		return this.getTypedRuleContext(TypeHintContext, 0) as TypeHintContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(vbaParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(vbaParser.RPAREN, 0);
	}
	public asTypeClause(): AsTypeClauseContext {
		return this.getTypedRuleContext(AsTypeClauseContext, 0) as AsTypeClauseContext;
	}
	public argDefaultValue(): ArgDefaultValueContext {
		return this.getTypedRuleContext(ArgDefaultValueContext, 0) as ArgDefaultValueContext;
	}
	public BYVAL(): TerminalNode {
		return this.getToken(vbaParser.BYVAL, 0);
	}
	public BYREF(): TerminalNode {
		return this.getToken(vbaParser.BYREF, 0);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_arg;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterArg) {
	 		listener.enterArg(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitArg) {
	 		listener.exitArg(this);
		}
	}
}


export class ArgDefaultValueContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQ(): TerminalNode {
		return this.getToken(vbaParser.EQ, 0);
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
	public WS(): TerminalNode {
		return this.getToken(vbaParser.WS, 0);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_argDefaultValue;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterArgDefaultValue) {
	 		listener.enterArgDefaultValue(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitArgDefaultValue) {
	 		listener.exitArgDefaultValue(this);
		}
	}
}


export class SubscriptsContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public subscript__list(): Subscript_Context[] {
		return this.getTypedRuleContexts(Subscript_Context) as Subscript_Context[];
	}
	public subscript_(i: number): Subscript_Context {
		return this.getTypedRuleContext(Subscript_Context, i) as Subscript_Context;
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_subscripts;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterSubscripts) {
	 		listener.enterSubscripts(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitSubscripts) {
	 		listener.exitSubscripts(this);
		}
	}
}


export class Subscript_Context extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public valueStmt_list(): ValueStmtContext[] {
		return this.getTypedRuleContexts(ValueStmtContext) as ValueStmtContext[];
	}
	public valueStmt(i: number): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, i) as ValueStmtContext;
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public TO(): TerminalNode {
		return this.getToken(vbaParser.TO, 0);
	}
	public typeHint_list(): TypeHintContext[] {
		return this.getTypedRuleContexts(TypeHintContext) as TypeHintContext[];
	}
	public typeHint(i: number): TypeHintContext {
		return this.getTypedRuleContext(TypeHintContext, i) as TypeHintContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_subscript_;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterSubscript_) {
	 		listener.enterSubscript_(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitSubscript_) {
	 		listener.exitSubscript_(this);
		}
	}
}


export class AmbiguousIdentifierContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(vbaParser.IDENTIFIER, i);
	}
	public ambiguousKeyword_list(): AmbiguousKeywordContext[] {
		return this.getTypedRuleContexts(AmbiguousKeywordContext) as AmbiguousKeywordContext[];
	}
	public ambiguousKeyword(i: number): AmbiguousKeywordContext {
		return this.getTypedRuleContext(AmbiguousKeywordContext, i) as AmbiguousKeywordContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_ambiguousIdentifier;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterAmbiguousIdentifier) {
	 		listener.enterAmbiguousIdentifier(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitAmbiguousIdentifier) {
	 		listener.exitAmbiguousIdentifier(this);
		}
	}
}


export class AsTypeClauseContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AS(): TerminalNode {
		return this.getToken(vbaParser.AS, 0);
	}
	public type_(): Type_Context {
		return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public NEW(): TerminalNode {
		return this.getToken(vbaParser.NEW, 0);
	}
	public fieldLength(): FieldLengthContext {
		return this.getTypedRuleContext(FieldLengthContext, 0) as FieldLengthContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_asTypeClause;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterAsTypeClause) {
	 		listener.enterAsTypeClause(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitAsTypeClause) {
	 		listener.exitAsTypeClause(this);
		}
	}
}


export class BaseTypeContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BOOLEAN(): TerminalNode {
		return this.getToken(vbaParser.BOOLEAN, 0);
	}
	public BYTE(): TerminalNode {
		return this.getToken(vbaParser.BYTE, 0);
	}
	public COLLECTION(): TerminalNode {
		return this.getToken(vbaParser.COLLECTION, 0);
	}
	public DATE(): TerminalNode {
		return this.getToken(vbaParser.DATE, 0);
	}
	public DOUBLE(): TerminalNode {
		return this.getToken(vbaParser.DOUBLE, 0);
	}
	public INTEGER(): TerminalNode {
		return this.getToken(vbaParser.INTEGER, 0);
	}
	public LONG(): TerminalNode {
		return this.getToken(vbaParser.LONG, 0);
	}
	public SINGLE(): TerminalNode {
		return this.getToken(vbaParser.SINGLE, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(vbaParser.STRING, 0);
	}
	public MULT(): TerminalNode {
		return this.getToken(vbaParser.MULT, 0);
	}
	public valueStmt(): ValueStmtContext {
		return this.getTypedRuleContext(ValueStmtContext, 0) as ValueStmtContext;
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
	public VARIANT(): TerminalNode {
		return this.getToken(vbaParser.VARIANT, 0);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_baseType;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterBaseType) {
	 		listener.enterBaseType(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitBaseType) {
	 		listener.exitBaseType(this);
		}
	}
}


export class CertainIdentifierContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(vbaParser.IDENTIFIER, i);
	}
	public ambiguousKeyword_list(): AmbiguousKeywordContext[] {
		return this.getTypedRuleContexts(AmbiguousKeywordContext) as AmbiguousKeywordContext[];
	}
	public ambiguousKeyword(i: number): AmbiguousKeywordContext {
		return this.getTypedRuleContext(AmbiguousKeywordContext, i) as AmbiguousKeywordContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_certainIdentifier;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterCertainIdentifier) {
	 		listener.enterCertainIdentifier(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitCertainIdentifier) {
	 		listener.exitCertainIdentifier(this);
		}
	}
}


export class ComparisonOperatorContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LT(): TerminalNode {
		return this.getToken(vbaParser.LT, 0);
	}
	public LEQ(): TerminalNode {
		return this.getToken(vbaParser.LEQ, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(vbaParser.GT, 0);
	}
	public GEQ(): TerminalNode {
		return this.getToken(vbaParser.GEQ, 0);
	}
	public EQ(): TerminalNode {
		return this.getToken(vbaParser.EQ, 0);
	}
	public NEQ(): TerminalNode {
		return this.getToken(vbaParser.NEQ, 0);
	}
	public IS(): TerminalNode {
		return this.getToken(vbaParser.IS, 0);
	}
	public LIKE(): TerminalNode {
		return this.getToken(vbaParser.LIKE, 0);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_comparisonOperator;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterComparisonOperator) {
	 		listener.enterComparisonOperator(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitComparisonOperator) {
	 		listener.exitComparisonOperator(this);
		}
	}
}


export class ComplexTypeContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ambiguousIdentifier_list(): AmbiguousIdentifierContext[] {
		return this.getTypedRuleContexts(AmbiguousIdentifierContext) as AmbiguousIdentifierContext[];
	}
	public ambiguousIdentifier(i: number): AmbiguousIdentifierContext {
		return this.getTypedRuleContext(AmbiguousIdentifierContext, i) as AmbiguousIdentifierContext;
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_complexType;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterComplexType) {
	 		listener.enterComplexType(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitComplexType) {
	 		listener.exitComplexType(this);
		}
	}
}


export class FieldLengthContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MULT(): TerminalNode {
		return this.getToken(vbaParser.MULT, 0);
	}
	public INTEGERLITERAL(): TerminalNode {
		return this.getToken(vbaParser.INTEGERLITERAL, 0);
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getTypedRuleContext(AmbiguousIdentifierContext, 0) as AmbiguousIdentifierContext;
	}
	public WS(): TerminalNode {
		return this.getToken(vbaParser.WS, 0);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_fieldLength;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterFieldLength) {
	 		listener.enterFieldLength(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitFieldLength) {
	 		listener.exitFieldLength(this);
		}
	}
}


export class LetterrangeContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public certainIdentifier_list(): CertainIdentifierContext[] {
		return this.getTypedRuleContexts(CertainIdentifierContext) as CertainIdentifierContext[];
	}
	public certainIdentifier(i: number): CertainIdentifierContext {
		return this.getTypedRuleContext(CertainIdentifierContext, i) as CertainIdentifierContext;
	}
	public MINUS(): TerminalNode {
		return this.getToken(vbaParser.MINUS, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_letterrange;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterLetterrange) {
	 		listener.enterLetterrange(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitLetterrange) {
	 		listener.exitLetterrange(this);
		}
	}
}


export class LineLabelContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getTypedRuleContext(AmbiguousIdentifierContext, 0) as AmbiguousIdentifierContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(vbaParser.COLON, 0);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_lineLabel;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterLineLabel) {
	 		listener.enterLineLabel(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitLineLabel) {
	 		listener.exitLineLabel(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public HEXLITERAL(): TerminalNode {
		return this.getToken(vbaParser.HEXLITERAL, 0);
	}
	public OCTLITERAL(): TerminalNode {
		return this.getToken(vbaParser.OCTLITERAL, 0);
	}
	public DATELITERAL(): TerminalNode {
		return this.getToken(vbaParser.DATELITERAL, 0);
	}
	public DOUBLELITERAL(): TerminalNode {
		return this.getToken(vbaParser.DOUBLELITERAL, 0);
	}
	public INTEGERLITERAL(): TerminalNode {
		return this.getToken(vbaParser.INTEGERLITERAL, 0);
	}
	public SHORTLITERAL(): TerminalNode {
		return this.getToken(vbaParser.SHORTLITERAL, 0);
	}
	public STRINGLITERAL(): TerminalNode {
		return this.getToken(vbaParser.STRINGLITERAL, 0);
	}
	public TRUE(): TerminalNode {
		return this.getToken(vbaParser.TRUE, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(vbaParser.FALSE, 0);
	}
	public NOTHING(): TerminalNode {
		return this.getToken(vbaParser.NOTHING, 0);
	}
	public NULL_(): TerminalNode {
		return this.getToken(vbaParser.NULL_, 0);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_literal;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterLiteral) {
	 		listener.enterLiteral(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitLiteral) {
	 		listener.exitLiteral(this);
		}
	}
}


export class Type_Context extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public baseType(): BaseTypeContext {
		return this.getTypedRuleContext(BaseTypeContext, 0) as BaseTypeContext;
	}
	public complexType(): ComplexTypeContext {
		return this.getTypedRuleContext(ComplexTypeContext, 0) as ComplexTypeContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(vbaParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(vbaParser.RPAREN, 0);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_type_;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterType_) {
	 		listener.enterType_(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitType_) {
	 		listener.exitType_(this);
		}
	}
}


export class TypeHintContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AMPERSAND(): TerminalNode {
		return this.getToken(vbaParser.AMPERSAND, 0);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_typeHint;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterTypeHint) {
	 		listener.enterTypeHint(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitTypeHint) {
	 		listener.exitTypeHint(this);
		}
	}
}


export class VisibilityContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PRIVATE(): TerminalNode {
		return this.getToken(vbaParser.PRIVATE, 0);
	}
	public PUBLIC(): TerminalNode {
		return this.getToken(vbaParser.PUBLIC, 0);
	}
	public FRIEND(): TerminalNode {
		return this.getToken(vbaParser.FRIEND, 0);
	}
	public GLOBAL(): TerminalNode {
		return this.getToken(vbaParser.GLOBAL, 0);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_visibility;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterVisibility) {
	 		listener.enterVisibility(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitVisibility) {
	 		listener.exitVisibility(this);
		}
	}
}


export class AmbiguousKeywordContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ACCESS(): TerminalNode {
		return this.getToken(vbaParser.ACCESS, 0);
	}
	public ADDRESSOF(): TerminalNode {
		return this.getToken(vbaParser.ADDRESSOF, 0);
	}
	public ALIAS(): TerminalNode {
		return this.getToken(vbaParser.ALIAS, 0);
	}
	public AND(): TerminalNode {
		return this.getToken(vbaParser.AND, 0);
	}
	public ATTRIBUTE(): TerminalNode {
		return this.getToken(vbaParser.ATTRIBUTE, 0);
	}
	public APPACTIVATE(): TerminalNode {
		return this.getToken(vbaParser.APPACTIVATE, 0);
	}
	public APPEND(): TerminalNode {
		return this.getToken(vbaParser.APPEND, 0);
	}
	public AS(): TerminalNode {
		return this.getToken(vbaParser.AS, 0);
	}
	public BEEP(): TerminalNode {
		return this.getToken(vbaParser.BEEP, 0);
	}
	public BEGIN(): TerminalNode {
		return this.getToken(vbaParser.BEGIN, 0);
	}
	public BINARY(): TerminalNode {
		return this.getToken(vbaParser.BINARY, 0);
	}
	public BOOLEAN(): TerminalNode {
		return this.getToken(vbaParser.BOOLEAN, 0);
	}
	public BYVAL(): TerminalNode {
		return this.getToken(vbaParser.BYVAL, 0);
	}
	public BYREF(): TerminalNode {
		return this.getToken(vbaParser.BYREF, 0);
	}
	public BYTE(): TerminalNode {
		return this.getToken(vbaParser.BYTE, 0);
	}
	public CALL(): TerminalNode {
		return this.getToken(vbaParser.CALL, 0);
	}
	public CASE(): TerminalNode {
		return this.getToken(vbaParser.CASE, 0);
	}
	public CLASS(): TerminalNode {
		return this.getToken(vbaParser.CLASS, 0);
	}
	public CLOSE(): TerminalNode {
		return this.getToken(vbaParser.CLOSE, 0);
	}
	public CHDIR(): TerminalNode {
		return this.getToken(vbaParser.CHDIR, 0);
	}
	public CHDRIVE(): TerminalNode {
		return this.getToken(vbaParser.CHDRIVE, 0);
	}
	public COLLECTION(): TerminalNode {
		return this.getToken(vbaParser.COLLECTION, 0);
	}
	public CONST(): TerminalNode {
		return this.getToken(vbaParser.CONST, 0);
	}
	public DATABASE(): TerminalNode {
		return this.getToken(vbaParser.DATABASE, 0);
	}
	public DATE(): TerminalNode {
		return this.getToken(vbaParser.DATE, 0);
	}
	public DECLARE(): TerminalNode {
		return this.getToken(vbaParser.DECLARE, 0);
	}
	public DEFBOOL(): TerminalNode {
		return this.getToken(vbaParser.DEFBOOL, 0);
	}
	public DEFBYTE(): TerminalNode {
		return this.getToken(vbaParser.DEFBYTE, 0);
	}
	public DEFCUR(): TerminalNode {
		return this.getToken(vbaParser.DEFCUR, 0);
	}
	public DEFDBL(): TerminalNode {
		return this.getToken(vbaParser.DEFDBL, 0);
	}
	public DEFDATE(): TerminalNode {
		return this.getToken(vbaParser.DEFDATE, 0);
	}
	public DEFDEC(): TerminalNode {
		return this.getToken(vbaParser.DEFDEC, 0);
	}
	public DEFINT(): TerminalNode {
		return this.getToken(vbaParser.DEFINT, 0);
	}
	public DEFLNG(): TerminalNode {
		return this.getToken(vbaParser.DEFLNG, 0);
	}
	public DEFOBJ(): TerminalNode {
		return this.getToken(vbaParser.DEFOBJ, 0);
	}
	public DEFSNG(): TerminalNode {
		return this.getToken(vbaParser.DEFSNG, 0);
	}
	public DEFSTR(): TerminalNode {
		return this.getToken(vbaParser.DEFSTR, 0);
	}
	public DEFVAR(): TerminalNode {
		return this.getToken(vbaParser.DEFVAR, 0);
	}
	public DELETESETTING(): TerminalNode {
		return this.getToken(vbaParser.DELETESETTING, 0);
	}
	public DIM(): TerminalNode {
		return this.getToken(vbaParser.DIM, 0);
	}
	public DO(): TerminalNode {
		return this.getToken(vbaParser.DO, 0);
	}
	public DOUBLE(): TerminalNode {
		return this.getToken(vbaParser.DOUBLE, 0);
	}
	public EACH(): TerminalNode {
		return this.getToken(vbaParser.EACH, 0);
	}
	public ELSE(): TerminalNode {
		return this.getToken(vbaParser.ELSE, 0);
	}
	public ELSEIF(): TerminalNode {
		return this.getToken(vbaParser.ELSEIF, 0);
	}
	public END(): TerminalNode {
		return this.getToken(vbaParser.END, 0);
	}
	public ENUM(): TerminalNode {
		return this.getToken(vbaParser.ENUM, 0);
	}
	public EQV(): TerminalNode {
		return this.getToken(vbaParser.EQV, 0);
	}
	public ERASE(): TerminalNode {
		return this.getToken(vbaParser.ERASE, 0);
	}
	public ERROR(): TerminalNode {
		return this.getToken(vbaParser.ERROR, 0);
	}
	public EVENT(): TerminalNode {
		return this.getToken(vbaParser.EVENT, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(vbaParser.FALSE, 0);
	}
	public FILECOPY(): TerminalNode {
		return this.getToken(vbaParser.FILECOPY, 0);
	}
	public FRIEND(): TerminalNode {
		return this.getToken(vbaParser.FRIEND, 0);
	}
	public FOR(): TerminalNode {
		return this.getToken(vbaParser.FOR, 0);
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(vbaParser.FUNCTION, 0);
	}
	public GET(): TerminalNode {
		return this.getToken(vbaParser.GET, 0);
	}
	public GLOBAL(): TerminalNode {
		return this.getToken(vbaParser.GLOBAL, 0);
	}
	public GOSUB(): TerminalNode {
		return this.getToken(vbaParser.GOSUB, 0);
	}
	public GOTO(): TerminalNode {
		return this.getToken(vbaParser.GOTO, 0);
	}
	public IF(): TerminalNode {
		return this.getToken(vbaParser.IF, 0);
	}
	public IMP(): TerminalNode {
		return this.getToken(vbaParser.IMP, 0);
	}
	public IMPLEMENTS(): TerminalNode {
		return this.getToken(vbaParser.IMPLEMENTS, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(vbaParser.IN, 0);
	}
	public INPUT(): TerminalNode {
		return this.getToken(vbaParser.INPUT, 0);
	}
	public IS(): TerminalNode {
		return this.getToken(vbaParser.IS, 0);
	}
	public INTEGER(): TerminalNode {
		return this.getToken(vbaParser.INTEGER, 0);
	}
	public KILL(): TerminalNode {
		return this.getToken(vbaParser.KILL, 0);
	}
	public LOAD(): TerminalNode {
		return this.getToken(vbaParser.LOAD, 0);
	}
	public LOCK(): TerminalNode {
		return this.getToken(vbaParser.LOCK, 0);
	}
	public LONG(): TerminalNode {
		return this.getToken(vbaParser.LONG, 0);
	}
	public LOOP(): TerminalNode {
		return this.getToken(vbaParser.LOOP, 0);
	}
	public LEN(): TerminalNode {
		return this.getToken(vbaParser.LEN, 0);
	}
	public LET(): TerminalNode {
		return this.getToken(vbaParser.LET, 0);
	}
	public LIB(): TerminalNode {
		return this.getToken(vbaParser.LIB, 0);
	}
	public LIKE(): TerminalNode {
		return this.getToken(vbaParser.LIKE, 0);
	}
	public LSET(): TerminalNode {
		return this.getToken(vbaParser.LSET, 0);
	}
	public ME(): TerminalNode {
		return this.getToken(vbaParser.ME, 0);
	}
	public MID(): TerminalNode {
		return this.getToken(vbaParser.MID, 0);
	}
	public MKDIR(): TerminalNode {
		return this.getToken(vbaParser.MKDIR, 0);
	}
	public MOD(): TerminalNode {
		return this.getToken(vbaParser.MOD, 0);
	}
	public NAME(): TerminalNode {
		return this.getToken(vbaParser.NAME, 0);
	}
	public NEXT(): TerminalNode {
		return this.getToken(vbaParser.NEXT, 0);
	}
	public NEW(): TerminalNode {
		return this.getToken(vbaParser.NEW, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(vbaParser.NOT, 0);
	}
	public NOTHING(): TerminalNode {
		return this.getToken(vbaParser.NOTHING, 0);
	}
	public NULL_(): TerminalNode {
		return this.getToken(vbaParser.NULL_, 0);
	}
	public ON(): TerminalNode {
		return this.getToken(vbaParser.ON, 0);
	}
	public OPEN(): TerminalNode {
		return this.getToken(vbaParser.OPEN, 0);
	}
	public OPTIONAL(): TerminalNode {
		return this.getToken(vbaParser.OPTIONAL, 0);
	}
	public OR(): TerminalNode {
		return this.getToken(vbaParser.OR, 0);
	}
	public OUTPUT(): TerminalNode {
		return this.getToken(vbaParser.OUTPUT, 0);
	}
	public PARAMARRAY(): TerminalNode {
		return this.getToken(vbaParser.PARAMARRAY, 0);
	}
	public PRESERVE(): TerminalNode {
		return this.getToken(vbaParser.PRESERVE, 0);
	}
	public PRINT(): TerminalNode {
		return this.getToken(vbaParser.PRINT, 0);
	}
	public PRIVATE(): TerminalNode {
		return this.getToken(vbaParser.PRIVATE, 0);
	}
	public PUBLIC(): TerminalNode {
		return this.getToken(vbaParser.PUBLIC, 0);
	}
	public PUT(): TerminalNode {
		return this.getToken(vbaParser.PUT, 0);
	}
	public RANDOM(): TerminalNode {
		return this.getToken(vbaParser.RANDOM, 0);
	}
	public RANDOMIZE(): TerminalNode {
		return this.getToken(vbaParser.RANDOMIZE, 0);
	}
	public RAISEEVENT(): TerminalNode {
		return this.getToken(vbaParser.RAISEEVENT, 0);
	}
	public READ(): TerminalNode {
		return this.getToken(vbaParser.READ, 0);
	}
	public REDIM(): TerminalNode {
		return this.getToken(vbaParser.REDIM, 0);
	}
	public REM(): TerminalNode {
		return this.getToken(vbaParser.REM, 0);
	}
	public RESET(): TerminalNode {
		return this.getToken(vbaParser.RESET, 0);
	}
	public RESUME(): TerminalNode {
		return this.getToken(vbaParser.RESUME, 0);
	}
	public RETURN(): TerminalNode {
		return this.getToken(vbaParser.RETURN, 0);
	}
	public RMDIR(): TerminalNode {
		return this.getToken(vbaParser.RMDIR, 0);
	}
	public RSET(): TerminalNode {
		return this.getToken(vbaParser.RSET, 0);
	}
	public SAVEPICTURE(): TerminalNode {
		return this.getToken(vbaParser.SAVEPICTURE, 0);
	}
	public SAVESETTING(): TerminalNode {
		return this.getToken(vbaParser.SAVESETTING, 0);
	}
	public SEEK(): TerminalNode {
		return this.getToken(vbaParser.SEEK, 0);
	}
	public SELECT(): TerminalNode {
		return this.getToken(vbaParser.SELECT, 0);
	}
	public SENDKEYS(): TerminalNode {
		return this.getToken(vbaParser.SENDKEYS, 0);
	}
	public SET(): TerminalNode {
		return this.getToken(vbaParser.SET, 0);
	}
	public SETATTR(): TerminalNode {
		return this.getToken(vbaParser.SETATTR, 0);
	}
	public SHARED(): TerminalNode {
		return this.getToken(vbaParser.SHARED, 0);
	}
	public SINGLE(): TerminalNode {
		return this.getToken(vbaParser.SINGLE, 0);
	}
	public SPC(): TerminalNode {
		return this.getToken(vbaParser.SPC, 0);
	}
	public STATIC(): TerminalNode {
		return this.getToken(vbaParser.STATIC, 0);
	}
	public STEP(): TerminalNode {
		return this.getToken(vbaParser.STEP, 0);
	}
	public STOP(): TerminalNode {
		return this.getToken(vbaParser.STOP, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(vbaParser.STRING, 0);
	}
	public SUB(): TerminalNode {
		return this.getToken(vbaParser.SUB, 0);
	}
	public TAB(): TerminalNode {
		return this.getToken(vbaParser.TAB, 0);
	}
	public TEXT(): TerminalNode {
		return this.getToken(vbaParser.TEXT, 0);
	}
	public THEN(): TerminalNode {
		return this.getToken(vbaParser.THEN, 0);
	}
	public TIME(): TerminalNode {
		return this.getToken(vbaParser.TIME, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(vbaParser.TO, 0);
	}
	public TRUE(): TerminalNode {
		return this.getToken(vbaParser.TRUE, 0);
	}
	public TYPE(): TerminalNode {
		return this.getToken(vbaParser.TYPE, 0);
	}
	public TYPEOF(): TerminalNode {
		return this.getToken(vbaParser.TYPEOF, 0);
	}
	public UNLOAD(): TerminalNode {
		return this.getToken(vbaParser.UNLOAD, 0);
	}
	public UNLOCK(): TerminalNode {
		return this.getToken(vbaParser.UNLOCK, 0);
	}
	public UNTIL(): TerminalNode {
		return this.getToken(vbaParser.UNTIL, 0);
	}
	public VARIANT(): TerminalNode {
		return this.getToken(vbaParser.VARIANT, 0);
	}
	public VERSION(): TerminalNode {
		return this.getToken(vbaParser.VERSION, 0);
	}
	public WEND(): TerminalNode {
		return this.getToken(vbaParser.WEND, 0);
	}
	public WHILE(): TerminalNode {
		return this.getToken(vbaParser.WHILE, 0);
	}
	public WIDTH(): TerminalNode {
		return this.getToken(vbaParser.WIDTH, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(vbaParser.WITH, 0);
	}
	public WITHEVENTS(): TerminalNode {
		return this.getToken(vbaParser.WITHEVENTS, 0);
	}
	public WRITE(): TerminalNode {
		return this.getToken(vbaParser.WRITE, 0);
	}
	public XOR(): TerminalNode {
		return this.getToken(vbaParser.XOR, 0);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_ambiguousKeyword;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterAmbiguousKeyword) {
	 		listener.enterAmbiguousKeyword(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitAmbiguousKeyword) {
	 		listener.exitAmbiguousKeyword(this);
		}
	}
}


export class RemCommentContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public REMCOMMENT(): TerminalNode {
		return this.getToken(vbaParser.REMCOMMENT, 0);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_remComment;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterRemComment) {
	 		listener.enterRemComment(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitRemComment) {
	 		listener.exitRemComment(this);
		}
	}
}


export class CommentContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMMENT(): TerminalNode {
		return this.getToken(vbaParser.COMMENT, 0);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_comment;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterComment) {
	 		listener.enterComment(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitComment) {
	 		listener.exitComment(this);
		}
	}
}


export class EndOfLineContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(vbaParser.NEWLINE, 0);
	}
	public comment(): CommentContext {
		return this.getTypedRuleContext(CommentContext, 0) as CommentContext;
	}
	public remComment(): RemCommentContext {
		return this.getTypedRuleContext(RemCommentContext, 0) as RemCommentContext;
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_endOfLine;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterEndOfLine) {
	 		listener.enterEndOfLine(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitEndOfLine) {
	 		listener.exitEndOfLine(this);
		}
	}
}


export class EndOfStatementContext extends ParserRuleContext {
	constructor(parser?: vbaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public endOfLine_list(): EndOfLineContext[] {
		return this.getTypedRuleContexts(EndOfLineContext) as EndOfLineContext[];
	}
	public endOfLine(i: number): EndOfLineContext {
		return this.getTypedRuleContext(EndOfLineContext, i) as EndOfLineContext;
	}
	public COLON_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(vbaParser.COLON, i);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(vbaParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(vbaParser.WS, i);
	}
    public get ruleIndex(): number {
    	return vbaParser.RULE_endOfStatement;
	}
	public enterRule(listener: vbaListener): void {
	    if(listener.enterEndOfStatement) {
	 		listener.enterEndOfStatement(this);
		}
	}
	public exitRule(listener: vbaListener): void {
	    if(listener.exitEndOfStatement) {
	 		listener.exitEndOfStatement(this);
		}
	}
}
