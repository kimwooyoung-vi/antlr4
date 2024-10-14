// Generated from vba.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { StartRuleContext } from "./vbaParser.js";
import { ModuleContext } from "./vbaParser.js";
import { ModuleHeaderContext } from "./vbaParser.js";
import { ModuleConfigContext } from "./vbaParser.js";
import { ModuleConfigElementContext } from "./vbaParser.js";
import { ModuleAttributesContext } from "./vbaParser.js";
import { ModuleDeclarationsContext } from "./vbaParser.js";
import { OptionBaseStmtContext } from "./vbaParser.js";
import { OptionCompareStmtContext } from "./vbaParser.js";
import { OptionExplicitStmtContext } from "./vbaParser.js";
import { OptionPrivateModuleStmtContext } from "./vbaParser.js";
import { ModuleDeclarationsElementContext } from "./vbaParser.js";
import { MacroStmtContext } from "./vbaParser.js";
import { ModuleBodyContext } from "./vbaParser.js";
import { ModuleBodyElementContext } from "./vbaParser.js";
import { AttributeStmtContext } from "./vbaParser.js";
import { BlockContext } from "./vbaParser.js";
import { BlockStmtContext } from "./vbaParser.js";
import { AppactivateStmtContext } from "./vbaParser.js";
import { BeepStmtContext } from "./vbaParser.js";
import { ChdirStmtContext } from "./vbaParser.js";
import { ChdriveStmtContext } from "./vbaParser.js";
import { CloseStmtContext } from "./vbaParser.js";
import { ConstStmtContext } from "./vbaParser.js";
import { ConstSubStmtContext } from "./vbaParser.js";
import { DateStmtContext } from "./vbaParser.js";
import { DeclareStmtContext } from "./vbaParser.js";
import { DeftypeStmtContext } from "./vbaParser.js";
import { DeleteSettingStmtContext } from "./vbaParser.js";
import { DoLoopStmtContext } from "./vbaParser.js";
import { EndStmtContext } from "./vbaParser.js";
import { EnumerationStmtContext } from "./vbaParser.js";
import { EnumerationStmt_ConstantContext } from "./vbaParser.js";
import { EraseStmtContext } from "./vbaParser.js";
import { ErrorStmtContext } from "./vbaParser.js";
import { EventStmtContext } from "./vbaParser.js";
import { ExitStmtContext } from "./vbaParser.js";
import { FilecopyStmtContext } from "./vbaParser.js";
import { ForEachStmtContext } from "./vbaParser.js";
import { ForNextStmtContext } from "./vbaParser.js";
import { FunctionStmtContext } from "./vbaParser.js";
import { GetStmtContext } from "./vbaParser.js";
import { GoSubStmtContext } from "./vbaParser.js";
import { GoToStmtContext } from "./vbaParser.js";
import { InlineIfThenElseContext } from "./vbaParser.js";
import { BlockIfThenElseContext } from "./vbaParser.js";
import { IfBlockStmtContext } from "./vbaParser.js";
import { IfConditionStmtContext } from "./vbaParser.js";
import { IfElseIfBlockStmtContext } from "./vbaParser.js";
import { IfElseBlockStmtContext } from "./vbaParser.js";
import { ImplementsStmtContext } from "./vbaParser.js";
import { InputStmtContext } from "./vbaParser.js";
import { KillStmtContext } from "./vbaParser.js";
import { LetStmtContext } from "./vbaParser.js";
import { LineInputStmtContext } from "./vbaParser.js";
import { LineNumberContext } from "./vbaParser.js";
import { LoadStmtContext } from "./vbaParser.js";
import { LockStmtContext } from "./vbaParser.js";
import { LsetStmtContext } from "./vbaParser.js";
import { MacroConstStmtContext } from "./vbaParser.js";
import { MacroIfThenElseStmtContext } from "./vbaParser.js";
import { MacroIfBlockStmtContext } from "./vbaParser.js";
import { MacroElseIfBlockStmtContext } from "./vbaParser.js";
import { MacroElseBlockStmtContext } from "./vbaParser.js";
import { MidStmtContext } from "./vbaParser.js";
import { MkdirStmtContext } from "./vbaParser.js";
import { NameStmtContext } from "./vbaParser.js";
import { OnErrorStmtContext } from "./vbaParser.js";
import { OnGoToStmtContext } from "./vbaParser.js";
import { OnGoSubStmtContext } from "./vbaParser.js";
import { OpenStmtContext } from "./vbaParser.js";
import { OutputListContext } from "./vbaParser.js";
import { OutputList_ExpressionContext } from "./vbaParser.js";
import { PrintStmtContext } from "./vbaParser.js";
import { PropertyGetStmtContext } from "./vbaParser.js";
import { PropertySetStmtContext } from "./vbaParser.js";
import { PropertyLetStmtContext } from "./vbaParser.js";
import { PutStmtContext } from "./vbaParser.js";
import { RaiseEventStmtContext } from "./vbaParser.js";
import { RandomizeStmtContext } from "./vbaParser.js";
import { RedimStmtContext } from "./vbaParser.js";
import { RedimSubStmtContext } from "./vbaParser.js";
import { ResetStmtContext } from "./vbaParser.js";
import { ResumeStmtContext } from "./vbaParser.js";
import { ReturnStmtContext } from "./vbaParser.js";
import { RmdirStmtContext } from "./vbaParser.js";
import { RsetStmtContext } from "./vbaParser.js";
import { SavepictureStmtContext } from "./vbaParser.js";
import { SaveSettingStmtContext } from "./vbaParser.js";
import { SeekStmtContext } from "./vbaParser.js";
import { SelectCaseStmtContext } from "./vbaParser.js";
import { CaseCondIsContext } from "./vbaParser.js";
import { CaseCondToContext } from "./vbaParser.js";
import { CaseCondValueContext } from "./vbaParser.js";
import { SC_CaseContext } from "./vbaParser.js";
import { CaseCondElseContext } from "./vbaParser.js";
import { CaseCondSelectionContext } from "./vbaParser.js";
import { SendkeysStmtContext } from "./vbaParser.js";
import { SetattrStmtContext } from "./vbaParser.js";
import { SetStmtContext } from "./vbaParser.js";
import { StopStmtContext } from "./vbaParser.js";
import { SubStmtContext } from "./vbaParser.js";
import { TimeStmtContext } from "./vbaParser.js";
import { TypeStmtContext } from "./vbaParser.js";
import { TypeStmt_ElementContext } from "./vbaParser.js";
import { TypeOfStmtContext } from "./vbaParser.js";
import { UnloadStmtContext } from "./vbaParser.js";
import { UnlockStmtContext } from "./vbaParser.js";
import { VsAssignContext } from "./vbaParser.js";
import { VsPlusContext } from "./vbaParser.js";
import { VsNotContext } from "./vbaParser.js";
import { VsStructContext } from "./vbaParser.js";
import { VsTypeOfContext } from "./vbaParser.js";
import { VsICSContext } from "./vbaParser.js";
import { VsRelationalContext } from "./vbaParser.js";
import { VsAddMinusContext } from "./vbaParser.js";
import { VsXorContext } from "./vbaParser.js";
import { VsDivMultContext } from "./vbaParser.js";
import { VsAndContext } from "./vbaParser.js";
import { VsPowContext } from "./vbaParser.js";
import { VsModContext } from "./vbaParser.js";
import { VsAmpContext } from "./vbaParser.js";
import { VsAddressOfContext } from "./vbaParser.js";
import { VsNewContext } from "./vbaParser.js";
import { VsOrContext } from "./vbaParser.js";
import { VsLiteralContext } from "./vbaParser.js";
import { VsEqvContext } from "./vbaParser.js";
import { VsNegationContext } from "./vbaParser.js";
import { VsImpContext } from "./vbaParser.js";
import { VsMidContext } from "./vbaParser.js";
import { VariableStmtContext } from "./vbaParser.js";
import { VariableListStmtContext } from "./vbaParser.js";
import { VariableSubStmtContext } from "./vbaParser.js";
import { WhileWendStmtContext } from "./vbaParser.js";
import { WidthStmtContext } from "./vbaParser.js";
import { WithStmtContext } from "./vbaParser.js";
import { WriteStmtContext } from "./vbaParser.js";
import { FileNumberContext } from "./vbaParser.js";
import { ExplicitCallStmtContext } from "./vbaParser.js";
import { ECS_ProcedureCallContext } from "./vbaParser.js";
import { ECS_MemberProcedureCallContext } from "./vbaParser.js";
import { ImplicitCallStmt_InBlockContext } from "./vbaParser.js";
import { ICS_B_MemberProcedureCallContext } from "./vbaParser.js";
import { ICS_B_ProcedureCallContext } from "./vbaParser.js";
import { ImplicitCallStmt_InStmtContext } from "./vbaParser.js";
import { ICS_S_VariableOrProcedureCallContext } from "./vbaParser.js";
import { ICS_S_ProcedureOrArrayCallContext } from "./vbaParser.js";
import { ICS_S_MembersCallContext } from "./vbaParser.js";
import { ICS_S_MemberCallContext } from "./vbaParser.js";
import { ICS_S_DictionaryCallContext } from "./vbaParser.js";
import { ArgsCallContext } from "./vbaParser.js";
import { ArgCallContext } from "./vbaParser.js";
import { DictionaryCallStmtContext } from "./vbaParser.js";
import { ArgListContext } from "./vbaParser.js";
import { ArgContext } from "./vbaParser.js";
import { ArgDefaultValueContext } from "./vbaParser.js";
import { SubscriptsContext } from "./vbaParser.js";
import { Subscript_Context } from "./vbaParser.js";
import { AmbiguousIdentifierContext } from "./vbaParser.js";
import { AsTypeClauseContext } from "./vbaParser.js";
import { BaseTypeContext } from "./vbaParser.js";
import { CertainIdentifierContext } from "./vbaParser.js";
import { ComparisonOperatorContext } from "./vbaParser.js";
import { ComplexTypeContext } from "./vbaParser.js";
import { FieldLengthContext } from "./vbaParser.js";
import { LetterrangeContext } from "./vbaParser.js";
import { LineLabelContext } from "./vbaParser.js";
import { LiteralContext } from "./vbaParser.js";
import { Type_Context } from "./vbaParser.js";
import { TypeHintContext } from "./vbaParser.js";
import { VisibilityContext } from "./vbaParser.js";
import { AmbiguousKeywordContext } from "./vbaParser.js";
import { RemCommentContext } from "./vbaParser.js";
import { CommentContext } from "./vbaParser.js";
import { EndOfLineContext } from "./vbaParser.js";
import { EndOfStatementContext } from "./vbaParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `vbaParser`.
 */
export default class vbaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `vbaParser.startRule`.
	 * @param ctx the parse tree
	 */
	enterStartRule?: (ctx: StartRuleContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.startRule`.
	 * @param ctx the parse tree
	 */
	exitStartRule?: (ctx: StartRuleContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.module`.
	 * @param ctx the parse tree
	 */
	enterModule?: (ctx: ModuleContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.module`.
	 * @param ctx the parse tree
	 */
	exitModule?: (ctx: ModuleContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.moduleHeader`.
	 * @param ctx the parse tree
	 */
	enterModuleHeader?: (ctx: ModuleHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.moduleHeader`.
	 * @param ctx the parse tree
	 */
	exitModuleHeader?: (ctx: ModuleHeaderContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.moduleConfig`.
	 * @param ctx the parse tree
	 */
	enterModuleConfig?: (ctx: ModuleConfigContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.moduleConfig`.
	 * @param ctx the parse tree
	 */
	exitModuleConfig?: (ctx: ModuleConfigContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.moduleConfigElement`.
	 * @param ctx the parse tree
	 */
	enterModuleConfigElement?: (ctx: ModuleConfigElementContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.moduleConfigElement`.
	 * @param ctx the parse tree
	 */
	exitModuleConfigElement?: (ctx: ModuleConfigElementContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.moduleAttributes`.
	 * @param ctx the parse tree
	 */
	enterModuleAttributes?: (ctx: ModuleAttributesContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.moduleAttributes`.
	 * @param ctx the parse tree
	 */
	exitModuleAttributes?: (ctx: ModuleAttributesContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.moduleDeclarations`.
	 * @param ctx the parse tree
	 */
	enterModuleDeclarations?: (ctx: ModuleDeclarationsContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.moduleDeclarations`.
	 * @param ctx the parse tree
	 */
	exitModuleDeclarations?: (ctx: ModuleDeclarationsContext) => void;
	/**
	 * Enter a parse tree produced by the `optionBaseStmt`
	 * labeled alternative in `vbaParser.moduleOption`.
	 * @param ctx the parse tree
	 */
	enterOptionBaseStmt?: (ctx: OptionBaseStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `optionBaseStmt`
	 * labeled alternative in `vbaParser.moduleOption`.
	 * @param ctx the parse tree
	 */
	exitOptionBaseStmt?: (ctx: OptionBaseStmtContext) => void;
	/**
	 * Enter a parse tree produced by the `optionCompareStmt`
	 * labeled alternative in `vbaParser.moduleOption`.
	 * @param ctx the parse tree
	 */
	enterOptionCompareStmt?: (ctx: OptionCompareStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `optionCompareStmt`
	 * labeled alternative in `vbaParser.moduleOption`.
	 * @param ctx the parse tree
	 */
	exitOptionCompareStmt?: (ctx: OptionCompareStmtContext) => void;
	/**
	 * Enter a parse tree produced by the `optionExplicitStmt`
	 * labeled alternative in `vbaParser.moduleOption`.
	 * @param ctx the parse tree
	 */
	enterOptionExplicitStmt?: (ctx: OptionExplicitStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `optionExplicitStmt`
	 * labeled alternative in `vbaParser.moduleOption`.
	 * @param ctx the parse tree
	 */
	exitOptionExplicitStmt?: (ctx: OptionExplicitStmtContext) => void;
	/**
	 * Enter a parse tree produced by the `optionPrivateModuleStmt`
	 * labeled alternative in `vbaParser.moduleOption`.
	 * @param ctx the parse tree
	 */
	enterOptionPrivateModuleStmt?: (ctx: OptionPrivateModuleStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `optionPrivateModuleStmt`
	 * labeled alternative in `vbaParser.moduleOption`.
	 * @param ctx the parse tree
	 */
	exitOptionPrivateModuleStmt?: (ctx: OptionPrivateModuleStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.moduleDeclarationsElement`.
	 * @param ctx the parse tree
	 */
	enterModuleDeclarationsElement?: (ctx: ModuleDeclarationsElementContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.moduleDeclarationsElement`.
	 * @param ctx the parse tree
	 */
	exitModuleDeclarationsElement?: (ctx: ModuleDeclarationsElementContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.macroStmt`.
	 * @param ctx the parse tree
	 */
	enterMacroStmt?: (ctx: MacroStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.macroStmt`.
	 * @param ctx the parse tree
	 */
	exitMacroStmt?: (ctx: MacroStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.moduleBody`.
	 * @param ctx the parse tree
	 */
	enterModuleBody?: (ctx: ModuleBodyContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.moduleBody`.
	 * @param ctx the parse tree
	 */
	exitModuleBody?: (ctx: ModuleBodyContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.moduleBodyElement`.
	 * @param ctx the parse tree
	 */
	enterModuleBodyElement?: (ctx: ModuleBodyElementContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.moduleBodyElement`.
	 * @param ctx the parse tree
	 */
	exitModuleBodyElement?: (ctx: ModuleBodyElementContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.attributeStmt`.
	 * @param ctx the parse tree
	 */
	enterAttributeStmt?: (ctx: AttributeStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.attributeStmt`.
	 * @param ctx the parse tree
	 */
	exitAttributeStmt?: (ctx: AttributeStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.blockStmt`.
	 * @param ctx the parse tree
	 */
	enterBlockStmt?: (ctx: BlockStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.blockStmt`.
	 * @param ctx the parse tree
	 */
	exitBlockStmt?: (ctx: BlockStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.appactivateStmt`.
	 * @param ctx the parse tree
	 */
	enterAppactivateStmt?: (ctx: AppactivateStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.appactivateStmt`.
	 * @param ctx the parse tree
	 */
	exitAppactivateStmt?: (ctx: AppactivateStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.beepStmt`.
	 * @param ctx the parse tree
	 */
	enterBeepStmt?: (ctx: BeepStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.beepStmt`.
	 * @param ctx the parse tree
	 */
	exitBeepStmt?: (ctx: BeepStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.chdirStmt`.
	 * @param ctx the parse tree
	 */
	enterChdirStmt?: (ctx: ChdirStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.chdirStmt`.
	 * @param ctx the parse tree
	 */
	exitChdirStmt?: (ctx: ChdirStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.chdriveStmt`.
	 * @param ctx the parse tree
	 */
	enterChdriveStmt?: (ctx: ChdriveStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.chdriveStmt`.
	 * @param ctx the parse tree
	 */
	exitChdriveStmt?: (ctx: ChdriveStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.closeStmt`.
	 * @param ctx the parse tree
	 */
	enterCloseStmt?: (ctx: CloseStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.closeStmt`.
	 * @param ctx the parse tree
	 */
	exitCloseStmt?: (ctx: CloseStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.constStmt`.
	 * @param ctx the parse tree
	 */
	enterConstStmt?: (ctx: ConstStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.constStmt`.
	 * @param ctx the parse tree
	 */
	exitConstStmt?: (ctx: ConstStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.constSubStmt`.
	 * @param ctx the parse tree
	 */
	enterConstSubStmt?: (ctx: ConstSubStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.constSubStmt`.
	 * @param ctx the parse tree
	 */
	exitConstSubStmt?: (ctx: ConstSubStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.dateStmt`.
	 * @param ctx the parse tree
	 */
	enterDateStmt?: (ctx: DateStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.dateStmt`.
	 * @param ctx the parse tree
	 */
	exitDateStmt?: (ctx: DateStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.declareStmt`.
	 * @param ctx the parse tree
	 */
	enterDeclareStmt?: (ctx: DeclareStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.declareStmt`.
	 * @param ctx the parse tree
	 */
	exitDeclareStmt?: (ctx: DeclareStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.deftypeStmt`.
	 * @param ctx the parse tree
	 */
	enterDeftypeStmt?: (ctx: DeftypeStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.deftypeStmt`.
	 * @param ctx the parse tree
	 */
	exitDeftypeStmt?: (ctx: DeftypeStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.deleteSettingStmt`.
	 * @param ctx the parse tree
	 */
	enterDeleteSettingStmt?: (ctx: DeleteSettingStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.deleteSettingStmt`.
	 * @param ctx the parse tree
	 */
	exitDeleteSettingStmt?: (ctx: DeleteSettingStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.doLoopStmt`.
	 * @param ctx the parse tree
	 */
	enterDoLoopStmt?: (ctx: DoLoopStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.doLoopStmt`.
	 * @param ctx the parse tree
	 */
	exitDoLoopStmt?: (ctx: DoLoopStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.endStmt`.
	 * @param ctx the parse tree
	 */
	enterEndStmt?: (ctx: EndStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.endStmt`.
	 * @param ctx the parse tree
	 */
	exitEndStmt?: (ctx: EndStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.enumerationStmt`.
	 * @param ctx the parse tree
	 */
	enterEnumerationStmt?: (ctx: EnumerationStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.enumerationStmt`.
	 * @param ctx the parse tree
	 */
	exitEnumerationStmt?: (ctx: EnumerationStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.enumerationStmt_Constant`.
	 * @param ctx the parse tree
	 */
	enterEnumerationStmt_Constant?: (ctx: EnumerationStmt_ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.enumerationStmt_Constant`.
	 * @param ctx the parse tree
	 */
	exitEnumerationStmt_Constant?: (ctx: EnumerationStmt_ConstantContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.eraseStmt`.
	 * @param ctx the parse tree
	 */
	enterEraseStmt?: (ctx: EraseStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.eraseStmt`.
	 * @param ctx the parse tree
	 */
	exitEraseStmt?: (ctx: EraseStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.errorStmt`.
	 * @param ctx the parse tree
	 */
	enterErrorStmt?: (ctx: ErrorStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.errorStmt`.
	 * @param ctx the parse tree
	 */
	exitErrorStmt?: (ctx: ErrorStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.eventStmt`.
	 * @param ctx the parse tree
	 */
	enterEventStmt?: (ctx: EventStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.eventStmt`.
	 * @param ctx the parse tree
	 */
	exitEventStmt?: (ctx: EventStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.exitStmt`.
	 * @param ctx the parse tree
	 */
	enterExitStmt?: (ctx: ExitStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.exitStmt`.
	 * @param ctx the parse tree
	 */
	exitExitStmt?: (ctx: ExitStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.filecopyStmt`.
	 * @param ctx the parse tree
	 */
	enterFilecopyStmt?: (ctx: FilecopyStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.filecopyStmt`.
	 * @param ctx the parse tree
	 */
	exitFilecopyStmt?: (ctx: FilecopyStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.forEachStmt`.
	 * @param ctx the parse tree
	 */
	enterForEachStmt?: (ctx: ForEachStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.forEachStmt`.
	 * @param ctx the parse tree
	 */
	exitForEachStmt?: (ctx: ForEachStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.forNextStmt`.
	 * @param ctx the parse tree
	 */
	enterForNextStmt?: (ctx: ForNextStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.forNextStmt`.
	 * @param ctx the parse tree
	 */
	exitForNextStmt?: (ctx: ForNextStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.functionStmt`.
	 * @param ctx the parse tree
	 */
	enterFunctionStmt?: (ctx: FunctionStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.functionStmt`.
	 * @param ctx the parse tree
	 */
	exitFunctionStmt?: (ctx: FunctionStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.getStmt`.
	 * @param ctx the parse tree
	 */
	enterGetStmt?: (ctx: GetStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.getStmt`.
	 * @param ctx the parse tree
	 */
	exitGetStmt?: (ctx: GetStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.goSubStmt`.
	 * @param ctx the parse tree
	 */
	enterGoSubStmt?: (ctx: GoSubStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.goSubStmt`.
	 * @param ctx the parse tree
	 */
	exitGoSubStmt?: (ctx: GoSubStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.goToStmt`.
	 * @param ctx the parse tree
	 */
	enterGoToStmt?: (ctx: GoToStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.goToStmt`.
	 * @param ctx the parse tree
	 */
	exitGoToStmt?: (ctx: GoToStmtContext) => void;
	/**
	 * Enter a parse tree produced by the `inlineIfThenElse`
	 * labeled alternative in `vbaParser.ifThenElseStmt`.
	 * @param ctx the parse tree
	 */
	enterInlineIfThenElse?: (ctx: InlineIfThenElseContext) => void;
	/**
	 * Exit a parse tree produced by the `inlineIfThenElse`
	 * labeled alternative in `vbaParser.ifThenElseStmt`.
	 * @param ctx the parse tree
	 */
	exitInlineIfThenElse?: (ctx: InlineIfThenElseContext) => void;
	/**
	 * Enter a parse tree produced by the `blockIfThenElse`
	 * labeled alternative in `vbaParser.ifThenElseStmt`.
	 * @param ctx the parse tree
	 */
	enterBlockIfThenElse?: (ctx: BlockIfThenElseContext) => void;
	/**
	 * Exit a parse tree produced by the `blockIfThenElse`
	 * labeled alternative in `vbaParser.ifThenElseStmt`.
	 * @param ctx the parse tree
	 */
	exitBlockIfThenElse?: (ctx: BlockIfThenElseContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.ifBlockStmt`.
	 * @param ctx the parse tree
	 */
	enterIfBlockStmt?: (ctx: IfBlockStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.ifBlockStmt`.
	 * @param ctx the parse tree
	 */
	exitIfBlockStmt?: (ctx: IfBlockStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.ifConditionStmt`.
	 * @param ctx the parse tree
	 */
	enterIfConditionStmt?: (ctx: IfConditionStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.ifConditionStmt`.
	 * @param ctx the parse tree
	 */
	exitIfConditionStmt?: (ctx: IfConditionStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.ifElseIfBlockStmt`.
	 * @param ctx the parse tree
	 */
	enterIfElseIfBlockStmt?: (ctx: IfElseIfBlockStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.ifElseIfBlockStmt`.
	 * @param ctx the parse tree
	 */
	exitIfElseIfBlockStmt?: (ctx: IfElseIfBlockStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.ifElseBlockStmt`.
	 * @param ctx the parse tree
	 */
	enterIfElseBlockStmt?: (ctx: IfElseBlockStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.ifElseBlockStmt`.
	 * @param ctx the parse tree
	 */
	exitIfElseBlockStmt?: (ctx: IfElseBlockStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.implementsStmt`.
	 * @param ctx the parse tree
	 */
	enterImplementsStmt?: (ctx: ImplementsStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.implementsStmt`.
	 * @param ctx the parse tree
	 */
	exitImplementsStmt?: (ctx: ImplementsStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.inputStmt`.
	 * @param ctx the parse tree
	 */
	enterInputStmt?: (ctx: InputStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.inputStmt`.
	 * @param ctx the parse tree
	 */
	exitInputStmt?: (ctx: InputStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.killStmt`.
	 * @param ctx the parse tree
	 */
	enterKillStmt?: (ctx: KillStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.killStmt`.
	 * @param ctx the parse tree
	 */
	exitKillStmt?: (ctx: KillStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.letStmt`.
	 * @param ctx the parse tree
	 */
	enterLetStmt?: (ctx: LetStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.letStmt`.
	 * @param ctx the parse tree
	 */
	exitLetStmt?: (ctx: LetStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.lineInputStmt`.
	 * @param ctx the parse tree
	 */
	enterLineInputStmt?: (ctx: LineInputStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.lineInputStmt`.
	 * @param ctx the parse tree
	 */
	exitLineInputStmt?: (ctx: LineInputStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.lineNumber`.
	 * @param ctx the parse tree
	 */
	enterLineNumber?: (ctx: LineNumberContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.lineNumber`.
	 * @param ctx the parse tree
	 */
	exitLineNumber?: (ctx: LineNumberContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.loadStmt`.
	 * @param ctx the parse tree
	 */
	enterLoadStmt?: (ctx: LoadStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.loadStmt`.
	 * @param ctx the parse tree
	 */
	exitLoadStmt?: (ctx: LoadStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.lockStmt`.
	 * @param ctx the parse tree
	 */
	enterLockStmt?: (ctx: LockStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.lockStmt`.
	 * @param ctx the parse tree
	 */
	exitLockStmt?: (ctx: LockStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.lsetStmt`.
	 * @param ctx the parse tree
	 */
	enterLsetStmt?: (ctx: LsetStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.lsetStmt`.
	 * @param ctx the parse tree
	 */
	exitLsetStmt?: (ctx: LsetStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.macroConstStmt`.
	 * @param ctx the parse tree
	 */
	enterMacroConstStmt?: (ctx: MacroConstStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.macroConstStmt`.
	 * @param ctx the parse tree
	 */
	exitMacroConstStmt?: (ctx: MacroConstStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.macroIfThenElseStmt`.
	 * @param ctx the parse tree
	 */
	enterMacroIfThenElseStmt?: (ctx: MacroIfThenElseStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.macroIfThenElseStmt`.
	 * @param ctx the parse tree
	 */
	exitMacroIfThenElseStmt?: (ctx: MacroIfThenElseStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.macroIfBlockStmt`.
	 * @param ctx the parse tree
	 */
	enterMacroIfBlockStmt?: (ctx: MacroIfBlockStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.macroIfBlockStmt`.
	 * @param ctx the parse tree
	 */
	exitMacroIfBlockStmt?: (ctx: MacroIfBlockStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.macroElseIfBlockStmt`.
	 * @param ctx the parse tree
	 */
	enterMacroElseIfBlockStmt?: (ctx: MacroElseIfBlockStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.macroElseIfBlockStmt`.
	 * @param ctx the parse tree
	 */
	exitMacroElseIfBlockStmt?: (ctx: MacroElseIfBlockStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.macroElseBlockStmt`.
	 * @param ctx the parse tree
	 */
	enterMacroElseBlockStmt?: (ctx: MacroElseBlockStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.macroElseBlockStmt`.
	 * @param ctx the parse tree
	 */
	exitMacroElseBlockStmt?: (ctx: MacroElseBlockStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.midStmt`.
	 * @param ctx the parse tree
	 */
	enterMidStmt?: (ctx: MidStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.midStmt`.
	 * @param ctx the parse tree
	 */
	exitMidStmt?: (ctx: MidStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.mkdirStmt`.
	 * @param ctx the parse tree
	 */
	enterMkdirStmt?: (ctx: MkdirStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.mkdirStmt`.
	 * @param ctx the parse tree
	 */
	exitMkdirStmt?: (ctx: MkdirStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.nameStmt`.
	 * @param ctx the parse tree
	 */
	enterNameStmt?: (ctx: NameStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.nameStmt`.
	 * @param ctx the parse tree
	 */
	exitNameStmt?: (ctx: NameStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.onErrorStmt`.
	 * @param ctx the parse tree
	 */
	enterOnErrorStmt?: (ctx: OnErrorStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.onErrorStmt`.
	 * @param ctx the parse tree
	 */
	exitOnErrorStmt?: (ctx: OnErrorStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.onGoToStmt`.
	 * @param ctx the parse tree
	 */
	enterOnGoToStmt?: (ctx: OnGoToStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.onGoToStmt`.
	 * @param ctx the parse tree
	 */
	exitOnGoToStmt?: (ctx: OnGoToStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.onGoSubStmt`.
	 * @param ctx the parse tree
	 */
	enterOnGoSubStmt?: (ctx: OnGoSubStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.onGoSubStmt`.
	 * @param ctx the parse tree
	 */
	exitOnGoSubStmt?: (ctx: OnGoSubStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.openStmt`.
	 * @param ctx the parse tree
	 */
	enterOpenStmt?: (ctx: OpenStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.openStmt`.
	 * @param ctx the parse tree
	 */
	exitOpenStmt?: (ctx: OpenStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.outputList`.
	 * @param ctx the parse tree
	 */
	enterOutputList?: (ctx: OutputListContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.outputList`.
	 * @param ctx the parse tree
	 */
	exitOutputList?: (ctx: OutputListContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.outputList_Expression`.
	 * @param ctx the parse tree
	 */
	enterOutputList_Expression?: (ctx: OutputList_ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.outputList_Expression`.
	 * @param ctx the parse tree
	 */
	exitOutputList_Expression?: (ctx: OutputList_ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.printStmt`.
	 * @param ctx the parse tree
	 */
	enterPrintStmt?: (ctx: PrintStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.printStmt`.
	 * @param ctx the parse tree
	 */
	exitPrintStmt?: (ctx: PrintStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.propertyGetStmt`.
	 * @param ctx the parse tree
	 */
	enterPropertyGetStmt?: (ctx: PropertyGetStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.propertyGetStmt`.
	 * @param ctx the parse tree
	 */
	exitPropertyGetStmt?: (ctx: PropertyGetStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.propertySetStmt`.
	 * @param ctx the parse tree
	 */
	enterPropertySetStmt?: (ctx: PropertySetStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.propertySetStmt`.
	 * @param ctx the parse tree
	 */
	exitPropertySetStmt?: (ctx: PropertySetStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.propertyLetStmt`.
	 * @param ctx the parse tree
	 */
	enterPropertyLetStmt?: (ctx: PropertyLetStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.propertyLetStmt`.
	 * @param ctx the parse tree
	 */
	exitPropertyLetStmt?: (ctx: PropertyLetStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.putStmt`.
	 * @param ctx the parse tree
	 */
	enterPutStmt?: (ctx: PutStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.putStmt`.
	 * @param ctx the parse tree
	 */
	exitPutStmt?: (ctx: PutStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.raiseEventStmt`.
	 * @param ctx the parse tree
	 */
	enterRaiseEventStmt?: (ctx: RaiseEventStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.raiseEventStmt`.
	 * @param ctx the parse tree
	 */
	exitRaiseEventStmt?: (ctx: RaiseEventStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.randomizeStmt`.
	 * @param ctx the parse tree
	 */
	enterRandomizeStmt?: (ctx: RandomizeStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.randomizeStmt`.
	 * @param ctx the parse tree
	 */
	exitRandomizeStmt?: (ctx: RandomizeStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.redimStmt`.
	 * @param ctx the parse tree
	 */
	enterRedimStmt?: (ctx: RedimStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.redimStmt`.
	 * @param ctx the parse tree
	 */
	exitRedimStmt?: (ctx: RedimStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.redimSubStmt`.
	 * @param ctx the parse tree
	 */
	enterRedimSubStmt?: (ctx: RedimSubStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.redimSubStmt`.
	 * @param ctx the parse tree
	 */
	exitRedimSubStmt?: (ctx: RedimSubStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.resetStmt`.
	 * @param ctx the parse tree
	 */
	enterResetStmt?: (ctx: ResetStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.resetStmt`.
	 * @param ctx the parse tree
	 */
	exitResetStmt?: (ctx: ResetStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.resumeStmt`.
	 * @param ctx the parse tree
	 */
	enterResumeStmt?: (ctx: ResumeStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.resumeStmt`.
	 * @param ctx the parse tree
	 */
	exitResumeStmt?: (ctx: ResumeStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.returnStmt`.
	 * @param ctx the parse tree
	 */
	enterReturnStmt?: (ctx: ReturnStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.returnStmt`.
	 * @param ctx the parse tree
	 */
	exitReturnStmt?: (ctx: ReturnStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.rmdirStmt`.
	 * @param ctx the parse tree
	 */
	enterRmdirStmt?: (ctx: RmdirStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.rmdirStmt`.
	 * @param ctx the parse tree
	 */
	exitRmdirStmt?: (ctx: RmdirStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.rsetStmt`.
	 * @param ctx the parse tree
	 */
	enterRsetStmt?: (ctx: RsetStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.rsetStmt`.
	 * @param ctx the parse tree
	 */
	exitRsetStmt?: (ctx: RsetStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.savepictureStmt`.
	 * @param ctx the parse tree
	 */
	enterSavepictureStmt?: (ctx: SavepictureStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.savepictureStmt`.
	 * @param ctx the parse tree
	 */
	exitSavepictureStmt?: (ctx: SavepictureStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.saveSettingStmt`.
	 * @param ctx the parse tree
	 */
	enterSaveSettingStmt?: (ctx: SaveSettingStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.saveSettingStmt`.
	 * @param ctx the parse tree
	 */
	exitSaveSettingStmt?: (ctx: SaveSettingStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.seekStmt`.
	 * @param ctx the parse tree
	 */
	enterSeekStmt?: (ctx: SeekStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.seekStmt`.
	 * @param ctx the parse tree
	 */
	exitSeekStmt?: (ctx: SeekStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.selectCaseStmt`.
	 * @param ctx the parse tree
	 */
	enterSelectCaseStmt?: (ctx: SelectCaseStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.selectCaseStmt`.
	 * @param ctx the parse tree
	 */
	exitSelectCaseStmt?: (ctx: SelectCaseStmtContext) => void;
	/**
	 * Enter a parse tree produced by the `caseCondIs`
	 * labeled alternative in `vbaParser.sC_Selection`.
	 * @param ctx the parse tree
	 */
	enterCaseCondIs?: (ctx: CaseCondIsContext) => void;
	/**
	 * Exit a parse tree produced by the `caseCondIs`
	 * labeled alternative in `vbaParser.sC_Selection`.
	 * @param ctx the parse tree
	 */
	exitCaseCondIs?: (ctx: CaseCondIsContext) => void;
	/**
	 * Enter a parse tree produced by the `caseCondTo`
	 * labeled alternative in `vbaParser.sC_Selection`.
	 * @param ctx the parse tree
	 */
	enterCaseCondTo?: (ctx: CaseCondToContext) => void;
	/**
	 * Exit a parse tree produced by the `caseCondTo`
	 * labeled alternative in `vbaParser.sC_Selection`.
	 * @param ctx the parse tree
	 */
	exitCaseCondTo?: (ctx: CaseCondToContext) => void;
	/**
	 * Enter a parse tree produced by the `caseCondValue`
	 * labeled alternative in `vbaParser.sC_Selection`.
	 * @param ctx the parse tree
	 */
	enterCaseCondValue?: (ctx: CaseCondValueContext) => void;
	/**
	 * Exit a parse tree produced by the `caseCondValue`
	 * labeled alternative in `vbaParser.sC_Selection`.
	 * @param ctx the parse tree
	 */
	exitCaseCondValue?: (ctx: CaseCondValueContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.sC_Case`.
	 * @param ctx the parse tree
	 */
	enterSC_Case?: (ctx: SC_CaseContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.sC_Case`.
	 * @param ctx the parse tree
	 */
	exitSC_Case?: (ctx: SC_CaseContext) => void;
	/**
	 * Enter a parse tree produced by the `caseCondElse`
	 * labeled alternative in `vbaParser.sC_Cond`.
	 * @param ctx the parse tree
	 */
	enterCaseCondElse?: (ctx: CaseCondElseContext) => void;
	/**
	 * Exit a parse tree produced by the `caseCondElse`
	 * labeled alternative in `vbaParser.sC_Cond`.
	 * @param ctx the parse tree
	 */
	exitCaseCondElse?: (ctx: CaseCondElseContext) => void;
	/**
	 * Enter a parse tree produced by the `caseCondSelection`
	 * labeled alternative in `vbaParser.sC_Cond`.
	 * @param ctx the parse tree
	 */
	enterCaseCondSelection?: (ctx: CaseCondSelectionContext) => void;
	/**
	 * Exit a parse tree produced by the `caseCondSelection`
	 * labeled alternative in `vbaParser.sC_Cond`.
	 * @param ctx the parse tree
	 */
	exitCaseCondSelection?: (ctx: CaseCondSelectionContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.sendkeysStmt`.
	 * @param ctx the parse tree
	 */
	enterSendkeysStmt?: (ctx: SendkeysStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.sendkeysStmt`.
	 * @param ctx the parse tree
	 */
	exitSendkeysStmt?: (ctx: SendkeysStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.setattrStmt`.
	 * @param ctx the parse tree
	 */
	enterSetattrStmt?: (ctx: SetattrStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.setattrStmt`.
	 * @param ctx the parse tree
	 */
	exitSetattrStmt?: (ctx: SetattrStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.setStmt`.
	 * @param ctx the parse tree
	 */
	enterSetStmt?: (ctx: SetStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.setStmt`.
	 * @param ctx the parse tree
	 */
	exitSetStmt?: (ctx: SetStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.stopStmt`.
	 * @param ctx the parse tree
	 */
	enterStopStmt?: (ctx: StopStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.stopStmt`.
	 * @param ctx the parse tree
	 */
	exitStopStmt?: (ctx: StopStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.subStmt`.
	 * @param ctx the parse tree
	 */
	enterSubStmt?: (ctx: SubStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.subStmt`.
	 * @param ctx the parse tree
	 */
	exitSubStmt?: (ctx: SubStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.timeStmt`.
	 * @param ctx the parse tree
	 */
	enterTimeStmt?: (ctx: TimeStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.timeStmt`.
	 * @param ctx the parse tree
	 */
	exitTimeStmt?: (ctx: TimeStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.typeStmt`.
	 * @param ctx the parse tree
	 */
	enterTypeStmt?: (ctx: TypeStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.typeStmt`.
	 * @param ctx the parse tree
	 */
	exitTypeStmt?: (ctx: TypeStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.typeStmt_Element`.
	 * @param ctx the parse tree
	 */
	enterTypeStmt_Element?: (ctx: TypeStmt_ElementContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.typeStmt_Element`.
	 * @param ctx the parse tree
	 */
	exitTypeStmt_Element?: (ctx: TypeStmt_ElementContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.typeOfStmt`.
	 * @param ctx the parse tree
	 */
	enterTypeOfStmt?: (ctx: TypeOfStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.typeOfStmt`.
	 * @param ctx the parse tree
	 */
	exitTypeOfStmt?: (ctx: TypeOfStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.unloadStmt`.
	 * @param ctx the parse tree
	 */
	enterUnloadStmt?: (ctx: UnloadStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.unloadStmt`.
	 * @param ctx the parse tree
	 */
	exitUnloadStmt?: (ctx: UnloadStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.unlockStmt`.
	 * @param ctx the parse tree
	 */
	enterUnlockStmt?: (ctx: UnlockStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.unlockStmt`.
	 * @param ctx the parse tree
	 */
	exitUnlockStmt?: (ctx: UnlockStmtContext) => void;
	/**
	 * Enter a parse tree produced by the `vsAssign`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsAssign?: (ctx: VsAssignContext) => void;
	/**
	 * Exit a parse tree produced by the `vsAssign`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsAssign?: (ctx: VsAssignContext) => void;
	/**
	 * Enter a parse tree produced by the `vsPlus`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsPlus?: (ctx: VsPlusContext) => void;
	/**
	 * Exit a parse tree produced by the `vsPlus`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsPlus?: (ctx: VsPlusContext) => void;
	/**
	 * Enter a parse tree produced by the `vsNot`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsNot?: (ctx: VsNotContext) => void;
	/**
	 * Exit a parse tree produced by the `vsNot`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsNot?: (ctx: VsNotContext) => void;
	/**
	 * Enter a parse tree produced by the `vsStruct`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsStruct?: (ctx: VsStructContext) => void;
	/**
	 * Exit a parse tree produced by the `vsStruct`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsStruct?: (ctx: VsStructContext) => void;
	/**
	 * Enter a parse tree produced by the `vsTypeOf`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsTypeOf?: (ctx: VsTypeOfContext) => void;
	/**
	 * Exit a parse tree produced by the `vsTypeOf`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsTypeOf?: (ctx: VsTypeOfContext) => void;
	/**
	 * Enter a parse tree produced by the `vsICS`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsICS?: (ctx: VsICSContext) => void;
	/**
	 * Exit a parse tree produced by the `vsICS`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsICS?: (ctx: VsICSContext) => void;
	/**
	 * Enter a parse tree produced by the `vsRelational`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsRelational?: (ctx: VsRelationalContext) => void;
	/**
	 * Exit a parse tree produced by the `vsRelational`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsRelational?: (ctx: VsRelationalContext) => void;
	/**
	 * Enter a parse tree produced by the `vsAddMinus`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsAddMinus?: (ctx: VsAddMinusContext) => void;
	/**
	 * Exit a parse tree produced by the `vsAddMinus`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsAddMinus?: (ctx: VsAddMinusContext) => void;
	/**
	 * Enter a parse tree produced by the `vsXor`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsXor?: (ctx: VsXorContext) => void;
	/**
	 * Exit a parse tree produced by the `vsXor`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsXor?: (ctx: VsXorContext) => void;
	/**
	 * Enter a parse tree produced by the `vsDivMult`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsDivMult?: (ctx: VsDivMultContext) => void;
	/**
	 * Exit a parse tree produced by the `vsDivMult`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsDivMult?: (ctx: VsDivMultContext) => void;
	/**
	 * Enter a parse tree produced by the `vsAnd`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsAnd?: (ctx: VsAndContext) => void;
	/**
	 * Exit a parse tree produced by the `vsAnd`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsAnd?: (ctx: VsAndContext) => void;
	/**
	 * Enter a parse tree produced by the `vsPow`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsPow?: (ctx: VsPowContext) => void;
	/**
	 * Exit a parse tree produced by the `vsPow`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsPow?: (ctx: VsPowContext) => void;
	/**
	 * Enter a parse tree produced by the `vsMod`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsMod?: (ctx: VsModContext) => void;
	/**
	 * Exit a parse tree produced by the `vsMod`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsMod?: (ctx: VsModContext) => void;
	/**
	 * Enter a parse tree produced by the `vsAmp`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsAmp?: (ctx: VsAmpContext) => void;
	/**
	 * Exit a parse tree produced by the `vsAmp`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsAmp?: (ctx: VsAmpContext) => void;
	/**
	 * Enter a parse tree produced by the `vsAddressOf`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsAddressOf?: (ctx: VsAddressOfContext) => void;
	/**
	 * Exit a parse tree produced by the `vsAddressOf`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsAddressOf?: (ctx: VsAddressOfContext) => void;
	/**
	 * Enter a parse tree produced by the `vsNew`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsNew?: (ctx: VsNewContext) => void;
	/**
	 * Exit a parse tree produced by the `vsNew`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsNew?: (ctx: VsNewContext) => void;
	/**
	 * Enter a parse tree produced by the `vsOr`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsOr?: (ctx: VsOrContext) => void;
	/**
	 * Exit a parse tree produced by the `vsOr`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsOr?: (ctx: VsOrContext) => void;
	/**
	 * Enter a parse tree produced by the `vsLiteral`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsLiteral?: (ctx: VsLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `vsLiteral`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsLiteral?: (ctx: VsLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `vsEqv`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsEqv?: (ctx: VsEqvContext) => void;
	/**
	 * Exit a parse tree produced by the `vsEqv`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsEqv?: (ctx: VsEqvContext) => void;
	/**
	 * Enter a parse tree produced by the `vsNegation`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsNegation?: (ctx: VsNegationContext) => void;
	/**
	 * Exit a parse tree produced by the `vsNegation`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsNegation?: (ctx: VsNegationContext) => void;
	/**
	 * Enter a parse tree produced by the `vsImp`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsImp?: (ctx: VsImpContext) => void;
	/**
	 * Exit a parse tree produced by the `vsImp`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsImp?: (ctx: VsImpContext) => void;
	/**
	 * Enter a parse tree produced by the `vsMid`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsMid?: (ctx: VsMidContext) => void;
	/**
	 * Exit a parse tree produced by the `vsMid`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsMid?: (ctx: VsMidContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.variableStmt`.
	 * @param ctx the parse tree
	 */
	enterVariableStmt?: (ctx: VariableStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.variableStmt`.
	 * @param ctx the parse tree
	 */
	exitVariableStmt?: (ctx: VariableStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.variableListStmt`.
	 * @param ctx the parse tree
	 */
	enterVariableListStmt?: (ctx: VariableListStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.variableListStmt`.
	 * @param ctx the parse tree
	 */
	exitVariableListStmt?: (ctx: VariableListStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.variableSubStmt`.
	 * @param ctx the parse tree
	 */
	enterVariableSubStmt?: (ctx: VariableSubStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.variableSubStmt`.
	 * @param ctx the parse tree
	 */
	exitVariableSubStmt?: (ctx: VariableSubStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.whileWendStmt`.
	 * @param ctx the parse tree
	 */
	enterWhileWendStmt?: (ctx: WhileWendStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.whileWendStmt`.
	 * @param ctx the parse tree
	 */
	exitWhileWendStmt?: (ctx: WhileWendStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.widthStmt`.
	 * @param ctx the parse tree
	 */
	enterWidthStmt?: (ctx: WidthStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.widthStmt`.
	 * @param ctx the parse tree
	 */
	exitWidthStmt?: (ctx: WidthStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.withStmt`.
	 * @param ctx the parse tree
	 */
	enterWithStmt?: (ctx: WithStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.withStmt`.
	 * @param ctx the parse tree
	 */
	exitWithStmt?: (ctx: WithStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.writeStmt`.
	 * @param ctx the parse tree
	 */
	enterWriteStmt?: (ctx: WriteStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.writeStmt`.
	 * @param ctx the parse tree
	 */
	exitWriteStmt?: (ctx: WriteStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.fileNumber`.
	 * @param ctx the parse tree
	 */
	enterFileNumber?: (ctx: FileNumberContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.fileNumber`.
	 * @param ctx the parse tree
	 */
	exitFileNumber?: (ctx: FileNumberContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.explicitCallStmt`.
	 * @param ctx the parse tree
	 */
	enterExplicitCallStmt?: (ctx: ExplicitCallStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.explicitCallStmt`.
	 * @param ctx the parse tree
	 */
	exitExplicitCallStmt?: (ctx: ExplicitCallStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.eCS_ProcedureCall`.
	 * @param ctx the parse tree
	 */
	enterECS_ProcedureCall?: (ctx: ECS_ProcedureCallContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.eCS_ProcedureCall`.
	 * @param ctx the parse tree
	 */
	exitECS_ProcedureCall?: (ctx: ECS_ProcedureCallContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.eCS_MemberProcedureCall`.
	 * @param ctx the parse tree
	 */
	enterECS_MemberProcedureCall?: (ctx: ECS_MemberProcedureCallContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.eCS_MemberProcedureCall`.
	 * @param ctx the parse tree
	 */
	exitECS_MemberProcedureCall?: (ctx: ECS_MemberProcedureCallContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.implicitCallStmt_InBlock`.
	 * @param ctx the parse tree
	 */
	enterImplicitCallStmt_InBlock?: (ctx: ImplicitCallStmt_InBlockContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.implicitCallStmt_InBlock`.
	 * @param ctx the parse tree
	 */
	exitImplicitCallStmt_InBlock?: (ctx: ImplicitCallStmt_InBlockContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.iCS_B_MemberProcedureCall`.
	 * @param ctx the parse tree
	 */
	enterICS_B_MemberProcedureCall?: (ctx: ICS_B_MemberProcedureCallContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.iCS_B_MemberProcedureCall`.
	 * @param ctx the parse tree
	 */
	exitICS_B_MemberProcedureCall?: (ctx: ICS_B_MemberProcedureCallContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.iCS_B_ProcedureCall`.
	 * @param ctx the parse tree
	 */
	enterICS_B_ProcedureCall?: (ctx: ICS_B_ProcedureCallContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.iCS_B_ProcedureCall`.
	 * @param ctx the parse tree
	 */
	exitICS_B_ProcedureCall?: (ctx: ICS_B_ProcedureCallContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.implicitCallStmt_InStmt`.
	 * @param ctx the parse tree
	 */
	enterImplicitCallStmt_InStmt?: (ctx: ImplicitCallStmt_InStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.implicitCallStmt_InStmt`.
	 * @param ctx the parse tree
	 */
	exitImplicitCallStmt_InStmt?: (ctx: ImplicitCallStmt_InStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.iCS_S_VariableOrProcedureCall`.
	 * @param ctx the parse tree
	 */
	enterICS_S_VariableOrProcedureCall?: (ctx: ICS_S_VariableOrProcedureCallContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.iCS_S_VariableOrProcedureCall`.
	 * @param ctx the parse tree
	 */
	exitICS_S_VariableOrProcedureCall?: (ctx: ICS_S_VariableOrProcedureCallContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.iCS_S_ProcedureOrArrayCall`.
	 * @param ctx the parse tree
	 */
	enterICS_S_ProcedureOrArrayCall?: (ctx: ICS_S_ProcedureOrArrayCallContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.iCS_S_ProcedureOrArrayCall`.
	 * @param ctx the parse tree
	 */
	exitICS_S_ProcedureOrArrayCall?: (ctx: ICS_S_ProcedureOrArrayCallContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.iCS_S_MembersCall`.
	 * @param ctx the parse tree
	 */
	enterICS_S_MembersCall?: (ctx: ICS_S_MembersCallContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.iCS_S_MembersCall`.
	 * @param ctx the parse tree
	 */
	exitICS_S_MembersCall?: (ctx: ICS_S_MembersCallContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.iCS_S_MemberCall`.
	 * @param ctx the parse tree
	 */
	enterICS_S_MemberCall?: (ctx: ICS_S_MemberCallContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.iCS_S_MemberCall`.
	 * @param ctx the parse tree
	 */
	exitICS_S_MemberCall?: (ctx: ICS_S_MemberCallContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.iCS_S_DictionaryCall`.
	 * @param ctx the parse tree
	 */
	enterICS_S_DictionaryCall?: (ctx: ICS_S_DictionaryCallContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.iCS_S_DictionaryCall`.
	 * @param ctx the parse tree
	 */
	exitICS_S_DictionaryCall?: (ctx: ICS_S_DictionaryCallContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.argsCall`.
	 * @param ctx the parse tree
	 */
	enterArgsCall?: (ctx: ArgsCallContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.argsCall`.
	 * @param ctx the parse tree
	 */
	exitArgsCall?: (ctx: ArgsCallContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.argCall`.
	 * @param ctx the parse tree
	 */
	enterArgCall?: (ctx: ArgCallContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.argCall`.
	 * @param ctx the parse tree
	 */
	exitArgCall?: (ctx: ArgCallContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.dictionaryCallStmt`.
	 * @param ctx the parse tree
	 */
	enterDictionaryCallStmt?: (ctx: DictionaryCallStmtContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.dictionaryCallStmt`.
	 * @param ctx the parse tree
	 */
	exitDictionaryCallStmt?: (ctx: DictionaryCallStmtContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.argList`.
	 * @param ctx the parse tree
	 */
	enterArgList?: (ctx: ArgListContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.argList`.
	 * @param ctx the parse tree
	 */
	exitArgList?: (ctx: ArgListContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.arg`.
	 * @param ctx the parse tree
	 */
	enterArg?: (ctx: ArgContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.arg`.
	 * @param ctx the parse tree
	 */
	exitArg?: (ctx: ArgContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.argDefaultValue`.
	 * @param ctx the parse tree
	 */
	enterArgDefaultValue?: (ctx: ArgDefaultValueContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.argDefaultValue`.
	 * @param ctx the parse tree
	 */
	exitArgDefaultValue?: (ctx: ArgDefaultValueContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.subscripts`.
	 * @param ctx the parse tree
	 */
	enterSubscripts?: (ctx: SubscriptsContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.subscripts`.
	 * @param ctx the parse tree
	 */
	exitSubscripts?: (ctx: SubscriptsContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.subscript_`.
	 * @param ctx the parse tree
	 */
	enterSubscript_?: (ctx: Subscript_Context) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.subscript_`.
	 * @param ctx the parse tree
	 */
	exitSubscript_?: (ctx: Subscript_Context) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.ambiguousIdentifier`.
	 * @param ctx the parse tree
	 */
	enterAmbiguousIdentifier?: (ctx: AmbiguousIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.ambiguousIdentifier`.
	 * @param ctx the parse tree
	 */
	exitAmbiguousIdentifier?: (ctx: AmbiguousIdentifierContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.asTypeClause`.
	 * @param ctx the parse tree
	 */
	enterAsTypeClause?: (ctx: AsTypeClauseContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.asTypeClause`.
	 * @param ctx the parse tree
	 */
	exitAsTypeClause?: (ctx: AsTypeClauseContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.baseType`.
	 * @param ctx the parse tree
	 */
	enterBaseType?: (ctx: BaseTypeContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.baseType`.
	 * @param ctx the parse tree
	 */
	exitBaseType?: (ctx: BaseTypeContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.certainIdentifier`.
	 * @param ctx the parse tree
	 */
	enterCertainIdentifier?: (ctx: CertainIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.certainIdentifier`.
	 * @param ctx the parse tree
	 */
	exitCertainIdentifier?: (ctx: CertainIdentifierContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.complexType`.
	 * @param ctx the parse tree
	 */
	enterComplexType?: (ctx: ComplexTypeContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.complexType`.
	 * @param ctx the parse tree
	 */
	exitComplexType?: (ctx: ComplexTypeContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.fieldLength`.
	 * @param ctx the parse tree
	 */
	enterFieldLength?: (ctx: FieldLengthContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.fieldLength`.
	 * @param ctx the parse tree
	 */
	exitFieldLength?: (ctx: FieldLengthContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.letterrange`.
	 * @param ctx the parse tree
	 */
	enterLetterrange?: (ctx: LetterrangeContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.letterrange`.
	 * @param ctx the parse tree
	 */
	exitLetterrange?: (ctx: LetterrangeContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.lineLabel`.
	 * @param ctx the parse tree
	 */
	enterLineLabel?: (ctx: LineLabelContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.lineLabel`.
	 * @param ctx the parse tree
	 */
	exitLineLabel?: (ctx: LineLabelContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.type_`.
	 * @param ctx the parse tree
	 */
	enterType_?: (ctx: Type_Context) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.type_`.
	 * @param ctx the parse tree
	 */
	exitType_?: (ctx: Type_Context) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.typeHint`.
	 * @param ctx the parse tree
	 */
	enterTypeHint?: (ctx: TypeHintContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.typeHint`.
	 * @param ctx the parse tree
	 */
	exitTypeHint?: (ctx: TypeHintContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.visibility`.
	 * @param ctx the parse tree
	 */
	enterVisibility?: (ctx: VisibilityContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.visibility`.
	 * @param ctx the parse tree
	 */
	exitVisibility?: (ctx: VisibilityContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.ambiguousKeyword`.
	 * @param ctx the parse tree
	 */
	enterAmbiguousKeyword?: (ctx: AmbiguousKeywordContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.ambiguousKeyword`.
	 * @param ctx the parse tree
	 */
	exitAmbiguousKeyword?: (ctx: AmbiguousKeywordContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.remComment`.
	 * @param ctx the parse tree
	 */
	enterRemComment?: (ctx: RemCommentContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.remComment`.
	 * @param ctx the parse tree
	 */
	exitRemComment?: (ctx: RemCommentContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.endOfLine`.
	 * @param ctx the parse tree
	 */
	enterEndOfLine?: (ctx: EndOfLineContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.endOfLine`.
	 * @param ctx the parse tree
	 */
	exitEndOfLine?: (ctx: EndOfLineContext) => void;
	/**
	 * Enter a parse tree produced by `vbaParser.endOfStatement`.
	 * @param ctx the parse tree
	 */
	enterEndOfStatement?: (ctx: EndOfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `vbaParser.endOfStatement`.
	 * @param ctx the parse tree
	 */
	exitEndOfStatement?: (ctx: EndOfStatementContext) => void;
}

